import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import type {
  BuiltinAction,
  BuiltinKind,
  Connector,
  Operation,
  OperationKind,
  OperationParameter,
} from "./types.js";

const API_ID_PREFIX = "/providers/Microsoft.PowerApps/apis/";

export interface ConnectorCatalogOptions {
  /** Directory containing `normalized/` + `builtin-workflow-actions.json`. */
  catalogDir?: string;
}

export class ConnectorCatalog {
  private constructor(
    private readonly connectorsByConnectorId: Map<string, Connector>,
    private readonly connectorsByApiId: Map<string, Connector>,
    private readonly builtinsByType: Map<string, BuiltinAction>,
  ) {}

  static async load(options: ConnectorCatalogOptions = {}): Promise<ConnectorCatalog> {
    const catalogDir = resolve(
      options.catalogDir ?? defaultCatalogDir(),
    );

    const normalizedDir = join(catalogDir, "normalized");
    const files = await readdir(normalizedDir);
    const connectorsByConnectorId = new Map<string, Connector>();
    const connectorsByApiId = new Map<string, Connector>();

    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      const data = JSON.parse(await readFile(join(normalizedDir, file), "utf8"));
      const connector = parseConnector(data);
      connectorsByConnectorId.set(connector.connectorId, connector);
      connectorsByApiId.set(connector.apiId, connector);
    }

    const builtinsByType = new Map<string, BuiltinAction>();
    const builtinsRaw = JSON.parse(
      await readFile(join(catalogDir, "builtin-workflow-actions.json"), "utf8"),
    );
    const types = builtinsRaw?.types ?? {};
    for (const [type, value] of Object.entries(types)) {
      const v = value as { kind?: string; displayName?: string; description?: string };
      builtinsByType.set(type, {
        type,
        kind: (v.kind as BuiltinKind) ?? "action",
        displayName: v.displayName ?? type,
        description: v.description ?? "",
      });
    }

    return new ConnectorCatalog(connectorsByConnectorId, connectorsByApiId, builtinsByType);
  }

  /** Number of connectors loaded. */
  get connectorCount(): number {
    return this.connectorsByConnectorId.size;
  }

  /** Total number of operations across all connectors. */
  get operationCount(): number {
    let total = 0;
    for (const c of this.connectorsByConnectorId.values()) total += c.operations.size;
    return total;
  }

  /** All connectors as an iterable. */
  connectors(): Iterable<Connector> {
    return this.connectorsByConnectorId.values();
  }

  /** Look up a connector by its connector id (e.g. "shared_office365"). */
  getConnector(connectorId: string): Connector | undefined {
    return this.connectorsByConnectorId.get(connectorId);
  }

  /**
   * Look up a connector by its API id as it appears in a flow definition.
   * Accepts either the full path or the short connector id.
   */
  getConnectorByApiId(apiId: string): Connector | undefined {
    return this.connectorsByApiId.get(apiId) ?? this.connectorsByConnectorId.get(apiId);
  }

  /** Look up an operation by connector id and operation id. */
  getOperation(connectorId: string, operationId: string): Operation | undefined {
    return this.getConnector(connectorId)?.operations.get(operationId);
  }

  /** Look up an operation using the flow definition's apiId + operationId pair. */
  getOperationByApiId(apiId: string, operationId: string): Operation | undefined {
    return this.getConnectorByApiId(apiId)?.operations.get(operationId);
  }

  /** Returns the built-in workflow type entry if known (If, Switch, ...). */
  getBuiltin(type: string): BuiltinAction | undefined {
    return this.builtinsByType.get(type);
  }

  /** True if `type` is a known built-in workflow action type. */
  isBuiltin(type: string): boolean {
    return this.builtinsByType.has(type);
  }

  /** All built-in workflow types as an iterable. */
  builtins(): Iterable<BuiltinAction> {
    return this.builtinsByType.values();
  }
}

function parseConnector(data: unknown): Connector {
  if (!isRecord(data)) throw new Error("ConnectorCatalog: connector entry must be an object");
  const connectorId = stringField(data, "connectorId");
  const displayName = stringField(data, "displayName");
  const apiId = `${API_ID_PREFIX}${connectorId}`;
  const operations = new Map<string, Operation>();

  const opsRaw = data["operations"];
  if (isRecord(opsRaw)) {
    for (const [opId, value] of Object.entries(opsRaw)) {
      if (!isRecord(value)) continue;
      operations.set(opId, parseOperation(opId, value));
    }
  }

  const connector: Connector = {
    connectorId,
    displayName,
    apiId,
    operations,
  };
  if (typeof data["sourceUrl"] === "string") connector.sourceUrl = data["sourceUrl"];
  if (typeof data["sourceUpdatedAt"] === "string") connector.sourceUpdatedAt = data["sourceUpdatedAt"];
  return connector;
}

function parseOperation(operationId: string, data: Record<string, unknown>): Operation {
  const kind = (data["kind"] === "trigger" ? "trigger" : "action") as OperationKind;
  const displayName = typeof data["displayName"] === "string" ? data["displayName"] : operationId;
  const deprecated = data["deprecated"] === true;
  const description = typeof data["description"] === "string" ? data["description"] : "";

  const parameters: OperationParameter[] = [];
  const paramsRaw = data["parameters"];
  if (Array.isArray(paramsRaw)) {
    for (const entry of paramsRaw) {
      if (!isRecord(entry)) continue;
      parameters.push({
        name: typeof entry["name"] === "string" ? entry["name"] : "",
        key: typeof entry["key"] === "string" ? entry["key"] : "",
        required: entry["required"] === true,
        type: typeof entry["type"] === "string" ? entry["type"] : "",
        description: typeof entry["description"] === "string" ? entry["description"] : "",
      });
    }
  }

  let returnsRaw = "";
  const returns = data["returns"];
  if (isRecord(returns) && typeof returns["raw"] === "string") {
    returnsRaw = returns["raw"];
  }

  return {
    operationId,
    kind,
    displayName,
    deprecated,
    description,
    parameters,
    returnsRaw,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringField(data: Record<string, unknown>, key: string): string {
  const value = data[key];
  if (typeof value !== "string") {
    throw new Error(`ConnectorCatalog: expected string field "${key}"`);
  }
  return value;
}

function defaultCatalogDir(): string {
  // packages/core/src/catalog/catalog.ts → ../../../../generated/connectors
  const url = new URL("../../../../generated/connectors/", import.meta.url);
  return url.pathname;
}
