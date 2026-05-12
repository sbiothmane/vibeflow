import type { ConnectorCatalog } from "../catalog/catalog.js";
import type { Connector, Operation } from "../catalog/types.js";
import type { Action, ChildContainer, Definition, Flow, Trigger } from "../ir/types.js";
import { childLabel } from "../ir/types.js";
import { isJsonObject, type JsonObject, type JsonValue } from "../util/json.js";
import {
  emptyResult,
  pushIssue,
  type ValidationIssue,
  type ValidationResult,
} from "./types.js";

const CONNECTOR_ACTION_TYPES = new Set(["OpenApiConnection", "OpenApiConnectionWebhook"]);

export interface ValidateOptions {
  /**
   * Optional catalog. When provided, validation also checks that each
   * connector operation exists and that required parameters are present.
   */
  catalog?: ConnectorCatalog;
}

/**
 * Validate a parsed flow. Pure function; returns a structured list of issues.
 *
 * Rules implemented:
 *   - duplicate-action-name (error): two actions share a name within one container
 *   - case-insensitive-duplicate (warning): names differ only by case in one container
 *   - run-after-unknown (error): runAfter dependency is not a sibling
 *   - unknown-action-type (warning): action type is neither built-in nor a known connector wrapper
 *   - connector-operation-unknown (warning): host.apiId/operationId not found in the catalog
 *   - connector-missing-required-param (error): a required parameter from the catalog is missing
 *   - connector-deprecated (warning): connector operation is marked deprecated
 *   - connector-missing-connection-reference (error): host.connectionName not declared in properties.connectionReferences
 */
export function validateFlow(flow: Flow, options: ValidateOptions = {}): ValidationResult {
  const result = emptyResult();
  const definition = flow.wrapper.definition;
  const connectionReferenceNames = collectConnectionReferences(flow);

  validateContainerNames(result, definition.actions, "actions");
  validateContainerRunAfter(result, definition.actions, "actions");

  walk(definition, (ctx) => {
    validateAction(ctx.action, ctx.path, result, options, connectionReferenceNames);
    for (const child of ctx.action.children) {
      validateContainerNames(result, child.actions, `${ctx.path}.${childLabel(child.kind)}`);
      validateContainerRunAfter(result, child.actions, `${ctx.path}.${childLabel(child.kind)}`);
    }
  });

  for (const trigger of definition.triggers.values()) {
    validateTrigger(trigger, result, options);
  }

  return result;
}

function walk(
  definition: Definition,
  visit: (ctx: { action: Action; path: string }) => void,
): void {
  function recurse(actions: Map<string, Action>, pathPrefix: string): void {
    for (const action of actions.values()) {
      const path = pathPrefix ? `${pathPrefix}.${action.name}` : action.name;
      visit({ action, path });
      for (const child of action.children) {
        recurse(child.actions, `${path}.${childLabel(child.kind)}`);
      }
    }
  }
  recurse(definition.actions, "actions");
}

function validateContainerNames(
  result: ValidationResult,
  container: Map<string, Action>,
  path: string,
): void {
  const seenLower = new Map<string, string[]>();
  for (const name of container.keys()) {
    const key = name.toLowerCase();
    const list = seenLower.get(key);
    if (list) list.push(name);
    else seenLower.set(key, [name]);
  }
  for (const [, names] of seenLower) {
    if (names.length < 2) continue;
    const allEqual = names.every((n) => n === names[0]);
    if (allEqual) {
      pushIssue(result, {
        severity: "error",
        rule: "duplicate-action-name",
        message: `Container ${path} has duplicate action name "${names[0]}".`,
        path,
      });
    } else {
      pushIssue(result, {
        severity: "warning",
        rule: "case-insensitive-duplicate",
        message: `Container ${path} has actions that differ only by case: ${names.join(", ")}.`,
        path,
      });
    }
  }
}

function validateContainerRunAfter(
  result: ValidationResult,
  container: Map<string, Action>,
  path: string,
): void {
  const siblingNames = new Set(container.keys());
  for (const action of container.values()) {
    for (const dep of Object.keys(action.runAfter)) {
      if (!siblingNames.has(dep)) {
        pushIssue(result, {
          severity: "error",
          rule: "run-after-unknown",
          message: `Action "${action.name}" runAfter references "${dep}", which is not a sibling in ${path}.`,
          path: `${path}.${action.name}.runAfter.${dep}`,
          actionName: action.name,
        });
      }
    }
  }
}

function validateAction(
  action: Action,
  path: string,
  result: ValidationResult,
  options: ValidateOptions,
  connectionReferenceNames: Set<string>,
): void {
  const { catalog } = options;

  if (!isConnectorAction(action.type) && catalog && !catalog.isBuiltin(action.type)) {
    pushIssue(result, {
      severity: "warning",
      rule: "unknown-action-type",
      message: `Action "${action.name}" has unknown type "${action.type}".`,
      path,
      actionName: action.name,
    });
    return;
  }

  if (!isConnectorAction(action.type)) return;
  if (!catalog) return;

  const inputs = action.rawWithoutStructural["inputs"];
  if (!isJsonObject(inputs)) return;
  const host = inputs["host"];
  if (!isJsonObject(host)) return;

  const apiId = typeof host["apiId"] === "string" ? host["apiId"] : undefined;
  const operationId = typeof host["operationId"] === "string" ? host["operationId"] : undefined;
  const connectionName = typeof host["connectionName"] === "string" ? host["connectionName"] : undefined;

  if (!apiId || !operationId) {
    pushIssue(result, {
      severity: "error",
      rule: "connector-host-incomplete",
      message: `Action "${action.name}" is a connector call but is missing host.apiId or host.operationId.`,
      path,
      actionName: action.name,
    });
    return;
  }

  if (connectionName && !connectionReferenceNames.has(connectionName)) {
    pushIssue(result, {
      severity: "error",
      rule: "connector-missing-connection-reference",
      message: `Action "${action.name}" uses connectionName "${connectionName}" which is not declared in properties.connectionReferences.`,
      path,
      actionName: action.name,
      operationId,
    });
  }

  const connector = catalog.getConnectorByApiId(apiId);
  if (!connector) {
    pushIssue(result, {
      severity: "warning",
      rule: "connector-not-in-catalog",
      message: `Action "${action.name}" references unknown connector ${apiId}.`,
      path,
      actionName: action.name,
      operationId,
    });
    return;
  }

  const operation = connector.operations.get(operationId);
  if (!operation) {
    pushIssue(result, {
      severity: "warning",
      rule: "connector-operation-unknown",
      message: `Connector ${connector.connectorId} has no operation "${operationId}" in the catalog.`,
      path,
      actionName: action.name,
      connectorId: connector.connectorId,
      operationId,
    });
    return;
  }

  if (operation.deprecated) {
    pushIssue(result, {
      severity: "warning",
      rule: "connector-deprecated",
      message: `Connector operation ${connector.connectorId}::${operationId} is marked deprecated.`,
      path,
      actionName: action.name,
      connectorId: connector.connectorId,
      operationId,
    });
  }

  const parameters = inputs["parameters"];
  const parametersObject: JsonObject = isJsonObject(parameters) ? parameters : {};
  validateRequiredParams(result, parametersObject, operation, connector, action.name, path);
}

function validateTrigger(
  trigger: Trigger,
  result: ValidationResult,
  options: ValidateOptions,
): void {
  if (!isConnectorAction(trigger.type) || !options.catalog) return;
  const inputs = trigger.rawWithoutType["inputs"];
  if (!isJsonObject(inputs)) return;
  const host = inputs["host"];
  if (!isJsonObject(host)) return;
  const apiId = typeof host["apiId"] === "string" ? host["apiId"] : undefined;
  const operationId = typeof host["operationId"] === "string" ? host["operationId"] : undefined;
  if (!apiId || !operationId) return;

  const connector = options.catalog.getConnectorByApiId(apiId);
  if (!connector) return;
  const operation = connector.operations.get(operationId);
  if (!operation) {
    pushIssue(result, {
      severity: "warning",
      rule: "connector-operation-unknown",
      message: `Trigger ${trigger.name} references unknown operation ${connector.connectorId}::${operationId}.`,
      path: `triggers.${trigger.name}`,
      connectorId: connector.connectorId,
      operationId,
    });
    return;
  }

  const parameters = inputs["parameters"];
  const parametersObject: JsonObject = isJsonObject(parameters) ? parameters : {};
  validateRequiredParams(
    result,
    parametersObject,
    operation,
    connector,
    trigger.name,
    `triggers.${trigger.name}`,
  );
}

/**
 * Compare provided parameter keys to the catalog's required keys with some
 * tolerance for the catalog's parameter-group flattening quirk: when a flow
 * uses `groupName/leaf` parameter keys but the catalog only lists the leaf,
 * we skip the required-param check rather than reporting a misleading error.
 */
function validateRequiredParams(
  result: ValidationResult,
  provided: JsonObject,
  operation: Operation,
  connector: Connector,
  ownerName: string,
  basePath: string,
): void {
  const requiredParams = operation.parameters.filter((p) => p.required);
  if (requiredParams.length === 0) return;

  const providedKeys = Object.keys(provided);
  const providedHasSlashes = providedKeys.some((k) => k.includes("/"));
  const catalogHasSlashes = requiredParams.some((p) => p.key.includes("/"));
  if (providedHasSlashes && !catalogHasSlashes) {
    // Catalog was scraped with a flattened/grouped shape; cannot validate.
    return;
  }

  for (const param of requiredParams) {
    const value = provided[param.key];
    if (!isParamProvided(value)) {
      pushIssue(result, {
        severity: "error",
        rule: "connector-missing-required-param",
        message: `"${ownerName}" (${connector.connectorId}::${operation.operationId}) is missing required parameter "${param.key}".`,
        path: `${basePath}.inputs.parameters.${param.key}`,
        actionName: ownerName,
        connectorId: connector.connectorId,
        operationId: operation.operationId,
      });
    }
  }
}

function collectConnectionReferences(flow: Flow): Set<string> {
  const set = new Set<string>();
  const refs = flow.wrapper.properties["connectionReferences"];
  if (isJsonObject(refs)) {
    for (const key of Object.keys(refs)) set.add(key);
  }
  return set;
}

function isConnectorAction(type: string): boolean {
  return CONNECTOR_ACTION_TYPES.has(type);
}

function isParamProvided(value: JsonValue | undefined): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.length > 0;
  return true;
}

export type { ValidationIssue, ValidationResult };
