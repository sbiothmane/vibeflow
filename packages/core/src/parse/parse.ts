import {
  type Action,
  type ChildContainer,
  type Definition,
  type Flow,
  type FlowWrapper,
  type Trigger,
  type ChildContainerKind,
} from "../ir/types.js";
import { cloneJson, isJsonObject, type JsonObject, type JsonValue } from "../util/json.js";

const STRUCTURAL_ACTION_KEYS = new Set([
  "type",
  "runAfter",
  "actions",
  "else",
  "cases",
  "default",
]);

const KNOWN_DEFINITION_KEYS = new Set([
  "$schema",
  "contentVersion",
  "metadata",
  "parameters",
  "triggers",
  "actions",
]);

const KNOWN_WRAPPER_TOP_KEYS = new Set(["id", "name", "type", "properties"]);

export interface ParseOptions {
  flowId: string;
}

export function parseFlow(wrapperJson: JsonValue, options: ParseOptions): Flow {
  if (!isJsonObject(wrapperJson)) {
    throw new Error("parseFlow: top-level value must be a JSON object");
  }
  const wrapperKeyOrder = Object.keys(wrapperJson);

  const properties = wrapperJson["properties"];
  if (!isJsonObject(properties)) {
    throw new Error("parseFlow: properties must be a JSON object");
  }
  const propertiesKeyOrder = Object.keys(properties);

  const definitionJson = properties["definition"];
  if (!isJsonObject(definitionJson)) {
    throw new Error("parseFlow: properties.definition must be a JSON object");
  }

  const outer: JsonObject = {};
  for (const key of wrapperKeyOrder) {
    if (key === "properties") continue;
    outer[key] = cloneJson(wrapperJson[key]);
  }

  const propertiesWithoutDefinition: JsonObject = {};
  for (const key of propertiesKeyOrder) {
    if (key === "definition") continue;
    propertiesWithoutDefinition[key] = cloneJson(properties[key]);
  }

  const definition = parseDefinition(definitionJson);

  const wrapper: FlowWrapper = {
    wrapperKeyOrder,
    propertiesKeyOrder,
    outer,
    properties: propertiesWithoutDefinition,
    definition,
  };

  return { flowId: options.flowId, wrapper };
}

function parseDefinition(definitionJson: JsonObject): Definition {
  const topLevelKeyOrder = Object.keys(definitionJson);
  const extra: JsonObject = {};
  for (const key of topLevelKeyOrder) {
    if (!KNOWN_DEFINITION_KEYS.has(key)) {
      extra[key] = cloneJson(definitionJson[key]);
    }
  }

  const triggers = new Map<string, Trigger>();
  const triggersJson = definitionJson["triggers"];
  if (isJsonObject(triggersJson)) {
    for (const [name, value] of Object.entries(triggersJson)) {
      if (!isJsonObject(value)) continue;
      triggers.set(name, parseTrigger(name, value));
    }
  }

  const actions = new Map<string, Action>();
  const actionsJson = definitionJson["actions"];
  if (isJsonObject(actionsJson)) {
    for (const [name, value] of Object.entries(actionsJson)) {
      if (!isJsonObject(value)) continue;
      actions.set(name, parseAction(name, value));
    }
  }

  const result: Definition = {
    topLevelKeyOrder,
    triggers,
    actions,
    extra,
  };

  const schema = definitionJson["$schema"];
  if (typeof schema === "string") result.schema = schema;

  const contentVersion = definitionJson["contentVersion"];
  if (typeof contentVersion === "string") result.contentVersion = contentVersion;

  const metadata = definitionJson["metadata"];
  if (isJsonObject(metadata)) result.metadata = cloneJson(metadata);

  const parameters = definitionJson["parameters"];
  if (isJsonObject(parameters)) result.parameters = cloneJson(parameters);

  return result;
}

function parseTrigger(name: string, value: JsonObject): Trigger {
  const originalKeyOrder = Object.keys(value);
  const rawWithoutType: JsonObject = {};
  for (const key of originalKeyOrder) {
    if (key === "type") continue;
    rawWithoutType[key] = cloneJson(value[key]);
  }
  const type = typeof value["type"] === "string" ? (value["type"] as string) : "Unknown";
  return { name, type, rawWithoutType, originalKeyOrder };
}

function parseAction(name: string, value: JsonObject): Action {
  const originalKeyOrder = Object.keys(value);

  const type = typeof value["type"] === "string" ? (value["type"] as string) : "Unknown";

  const runAfter: Record<string, string[]> = {};
  const runAfterValue = value["runAfter"];
  if (isJsonObject(runAfterValue)) {
    for (const [dep, statuses] of Object.entries(runAfterValue)) {
      if (Array.isArray(statuses)) {
        runAfter[dep] = statuses.filter((s): s is string => typeof s === "string");
      }
    }
  }

  const rawWithoutStructural: JsonObject = {};
  for (const key of originalKeyOrder) {
    if (STRUCTURAL_ACTION_KEYS.has(key)) continue;
    rawWithoutStructural[key] = cloneJson(value[key]);
  }

  const children: ChildContainer[] = [];
  const actionsChild = value["actions"];
  if (isJsonObject(actionsChild)) {
    children.push({
      kind: { kind: "actions" },
      actions: parseActionMap(actionsChild),
    });
  }
  const elseBranch = value["else"];
  if (isJsonObject(elseBranch)) {
    const elseActions = elseBranch["actions"];
    if (isJsonObject(elseActions)) {
      children.push(buildSlotContainer({ kind: "else" }, elseBranch, elseActions));
    }
  }
  const cases = value["cases"];
  if (isJsonObject(cases)) {
    for (const [caseName, caseBody] of Object.entries(cases)) {
      if (!isJsonObject(caseBody)) continue;
      const caseActions = caseBody["actions"];
      if (isJsonObject(caseActions)) {
        children.push(buildSlotContainer({ kind: "case", caseName }, caseBody, caseActions));
      }
    }
  }
  const defaultBranch = value["default"];
  if (isJsonObject(defaultBranch)) {
    const defaultActions = defaultBranch["actions"];
    if (isJsonObject(defaultActions)) {
      children.push(buildSlotContainer({ kind: "default" }, defaultBranch, defaultActions));
    }
  }

  return {
    name,
    type,
    runAfter,
    rawWithoutStructural,
    children,
    originalKeyOrder,
  };
}

function parseActionMap(actions: JsonObject): Map<string, Action> {
  const map = new Map<string, Action>();
  for (const [name, value] of Object.entries(actions)) {
    if (!isJsonObject(value)) continue;
    map.set(name, parseAction(name, value));
  }
  return map;
}

function buildSlotContainer(
  kind: ChildContainerKind,
  slot: JsonObject,
  actions: JsonObject,
): ChildContainer {
  const slotKeyOrder = Object.keys(slot);
  const slotExtra: JsonObject = {};
  for (const key of slotKeyOrder) {
    if (key === "actions") continue;
    slotExtra[key] = cloneJson(slot[key]);
  }
  return {
    kind,
    actions: parseActionMap(actions),
    slotExtra,
    slotKeyOrder,
  };
}
