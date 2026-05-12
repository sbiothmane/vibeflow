import { emitFlow } from "../emit/emit.js";
import type { Definition, Flow } from "../ir/types.js";
import { isJsonObject, type JsonObject, type JsonValue } from "../util/json.js";

/**
 * Plan describing how each connector / connection referenced by a flow should
 * be packaged for import. Each entry corresponds to a connectionName used by
 * `inputs.host.connectionName` somewhere in the flow.
 */
export interface ConnectionPlanEntry {
  /** The connectionName as used in the flow (e.g. "shared_office365"). */
  connectionName: string;
  /** Full apiId, e.g. "/providers/Microsoft.PowerApps/apis/shared_office365". */
  apiId: string;
  /** Connector display name shown in the Power Automate import dialog. */
  apiDisplayName: string;
  /** Connection display name (the friendly name of the user's connection). */
  connectionDisplayName?: string;
  /** Optional connector icon URL. Microsoft uses these in the import UI. */
  iconUri?: string;
  /** Stable GUID for the api resource. Generated if omitted. */
  apiResourceId?: string;
  /** Stable GUID for the connection resource. Generated if omitted. */
  connectionResourceId?: string;
  /**
   * Suggested creation type for the user's connection during import.
   * "Existing" = pick an existing connection. "New" = create on import.
   * Defaults to "Existing".
   */
  suggestedCreationType?: "Existing" | "New" | "Update";
}

export interface BuildPackageOptions {
  /** Display name shown in Power Automate's import dialog. */
  displayName: string;
  /** Description shown in Power Automate. Optional. */
  description?: string;
  /** Connection plan covering every connectionName used by the flow. */
  connectionPlan: ConnectionPlanEntry[];
  /** Optional stable resource id (GUID) for the flow itself. Generated if omitted. */
  flowResourceId?: string;
  /** Optional package telemetry GUID. Generated if omitted. */
  packageTelemetryId?: string;
  /** Optional createdTime string. Defaults to now (UTC ISO). */
  createdTime?: string;
  /** Source environment label written to the manifest. Defaults to "". */
  sourceEnvironment?: string;
  /** Creator label. Defaults to "Vibeflow". */
  creator?: string;
}

export interface FilePayload {
  /** POSIX-style relative path inside the package. */
  path: string;
  /** JSON file contents (use this or `body`, not both). */
  json?: JsonValue;
  /** Plain-text / UTF-8 body (e.g. markdown). Use this or `json`, not both. */
  body?: string;
}

export interface BuiltPackage {
  /** Suggested directory name (the flow's resource id). */
  packageName: string;
  /** All files in the package, in deterministic order. */
  files: FilePayload[];
}

/**
 * Build a complete Power Automate export package payload from a Flow IR and
 * a connection plan. The returned `files` array is everything that goes into
 * the export zip.
 */
export function buildExportPackage(
  flow: Flow,
  options: BuildPackageOptions,
): BuiltPackage {
  const flowId = options.flowResourceId ?? generateGuid();
  const packageTelemetryId = options.packageTelemetryId ?? generateGuid();
  const createdTime = options.createdTime ?? new Date().toISOString();
  const sourceEnvironment = options.sourceEnvironment ?? "";
  const creator = options.creator ?? "Vibeflow";

  const usedConnectionNames = collectConnectionNames(flow);
  const plan = ensurePlanCoverage(options.connectionPlan, usedConnectionNames);
  const planWithIds = plan.map((entry) => ({
    ...entry,
    apiResourceId: entry.apiResourceId ?? deterministicGuidFor("api", entry.apiId),
    connectionResourceId:
      entry.connectionResourceId ?? deterministicGuidFor("conn", entry.connectionName),
    suggestedCreationType: entry.suggestedCreationType ?? "Existing",
  }));

  const flowDirName = flowId;
  const definitionJson = emitFlowForExport(flow, options.displayName);

  const apisMap: JsonObject = {};
  const connectionsMap: JsonObject = {};
  for (const entry of planWithIds) {
    apisMap[entry.connectionName] = entry.apiResourceId!;
    connectionsMap[entry.connectionName] = entry.connectionResourceId!;
  }

  const manifest = buildRootManifest({
    flowId,
    flowDisplayName: options.displayName,
    description: options.description ?? "",
    packageTelemetryId,
    createdTime,
    sourceEnvironment,
    creator,
    plan: planWithIds,
  });

  const flowsManifest: JsonObject = {
    packageSchemaVersion: "1.0",
    flowAssets: { assetPaths: [flowDirName] },
  };

  return {
    packageName: flowId,
    files: [
      { path: "manifest.json", json: manifest },
      { path: "Microsoft.Flow/flows/manifest.json", json: flowsManifest },
      { path: `Microsoft.Flow/flows/${flowDirName}/definition.json`, json: definitionJson },
      { path: `Microsoft.Flow/flows/${flowDirName}/apisMap.json`, json: apisMap },
      { path: `Microsoft.Flow/flows/${flowDirName}/connectionsMap.json`, json: connectionsMap },
    ],
  };
}

function emitFlowForExport(flow: Flow, displayName: string): JsonObject {
  // Ensure the wrapper carries a displayName and a placeholder name/id/type
  // that Power Automate expects in exported definition.json files.
  const wrapper = emitFlow(flow);
  const properties = (wrapper["properties"] as JsonObject | undefined) ?? {};
  if (!properties["displayName"]) {
    properties["displayName"] = displayName;
    wrapper["properties"] = properties;
  }
  if (!wrapper["name"]) wrapper["name"] = flow.flowId;
  if (!wrapper["id"]) wrapper["id"] = `/providers/Microsoft.Flow/flows/${flow.flowId}`;
  if (!wrapper["type"]) wrapper["type"] = "Microsoft.Flow/flows";
  return wrapper;
}

function buildRootManifest(args: {
  flowId: string;
  flowDisplayName: string;
  description: string;
  packageTelemetryId: string;
  createdTime: string;
  sourceEnvironment: string;
  creator: string;
  plan: ConnectionPlanEntry[];
}): JsonObject {
  const dependsOn: string[] = [];
  const resources: JsonObject = {};

  // Add each connector (api) and each connection.
  for (const entry of args.plan) {
    if (!dependsOn.includes(entry.apiResourceId!)) dependsOn.push(entry.apiResourceId!);
    if (!dependsOn.includes(entry.connectionResourceId!)) dependsOn.push(entry.connectionResourceId!);

    resources[entry.apiResourceId!] = {
      id: entry.apiId,
      name: entry.connectionName,
      type: "Microsoft.PowerApps/apis",
      suggestedCreationType: "Existing",
      details: {
        displayName: entry.apiDisplayName,
        ...(entry.iconUri ? { iconUri: entry.iconUri } : {}),
      },
      configurableBy: "System",
      hierarchy: "Child",
      dependsOn: [],
    };

    resources[entry.connectionResourceId!] = {
      type: "Microsoft.PowerApps/apis/connections",
      suggestedCreationType: entry.suggestedCreationType ?? "Existing",
      creationType: entry.suggestedCreationType ?? "Existing",
      details: {
        displayName: entry.connectionDisplayName ?? entry.apiDisplayName,
        ...(entry.iconUri ? { iconUri: entry.iconUri } : {}),
      },
      configurableBy: "User",
      hierarchy: "Child",
      dependsOn: [entry.apiResourceId!],
    };
  }

  // The flow itself is the "root" resource.
  resources[args.flowId] = {
    type: "Microsoft.Flow/flows",
    suggestedCreationType: "New",
    creationType: "Existing, New, Update",
    details: { displayName: args.flowDisplayName },
    configurableBy: "User",
    hierarchy: "Root",
    dependsOn,
  };

  return {
    schema: "1.0",
    details: {
      displayName: args.flowDisplayName,
      description: args.description,
      createdTime: args.createdTime,
      packageTelemetryId: args.packageTelemetryId,
      creator: args.creator,
      sourceEnvironment: args.sourceEnvironment,
    },
    resources,
  };
}

function collectConnectionNames(flow: Flow): Set<string> {
  const names = new Set<string>();
  walkDefinition(flow.wrapper.definition, (value) => {
    if (!isJsonObject(value)) return;
    const host = value["host"];
    if (isJsonObject(host) && typeof host["connectionName"] === "string") {
      names.add(host["connectionName"]);
    }
  });
  return names;
}

function ensurePlanCoverage(
  plan: ConnectionPlanEntry[],
  required: Set<string>,
): ConnectionPlanEntry[] {
  const byName = new Map<string, ConnectionPlanEntry>();
  for (const entry of plan) byName.set(entry.connectionName, entry);
  const missing: string[] = [];
  for (const name of required) {
    if (!byName.has(name)) missing.push(name);
  }
  if (missing.length > 0) {
    throw new Error(
      `buildExportPackage: connectionPlan is missing entries for: ${missing.join(", ")}`,
    );
  }
  return [...required].map((name) => byName.get(name)!);
}

function walkDefinition(
  definition: Definition,
  visit: (value: JsonValue) => void,
): void {
  function walkActions(actions: Map<string, import("../ir/types.js").Action>): void {
    for (const action of actions.values()) {
      visit(action.rawWithoutStructural as JsonValue);
      const raw = action.rawWithoutStructural;
      // Walk into raw for nested host/parameters.
      walkValue(raw as JsonValue);
      for (const child of action.children) walkActions(child.actions);
    }
  }
  function walkValue(value: JsonValue): void {
    if (Array.isArray(value)) {
      for (const v of value) walkValue(v as JsonValue);
    } else if (isJsonObject(value)) {
      visit(value);
      for (const v of Object.values(value)) walkValue(v as JsonValue);
    }
  }
  for (const trigger of definition.triggers.values()) {
    visit(trigger.rawWithoutType as JsonValue);
    walkValue(trigger.rawWithoutType as JsonValue);
  }
  walkActions(definition.actions);
}

/**
 * Generates a random RFC4122 v4 GUID string suitable for Power Automate
 * manifests. Uses crypto.randomUUID() when available.
 */
export function generateGuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback (unlikely path on Bun).
  return "00000000-0000-4000-8000-000000000000".replace(/[018]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "8" ? (r & 0x3) | 0x8 : r;
    return v.toString(16);
  });
}

/**
 * Stable, deterministic GUID-shaped string derived from a key. Useful so the
 * same flow always exports with the same resource ids during dev.
 */
export function deterministicGuidFor(scope: string, key: string): string {
  const input = `${scope}:${key}`;
  let h1 = 0x9e3779b9;
  let h2 = 0x85ebca6b;
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x85ebca6b) >>> 0;
    h2 = Math.imul(h2 ^ c, 0xc2b2ae35) >>> 0;
  }
  const hex = (h1.toString(16).padStart(8, "0") + h2.toString(16).padStart(8, "0")).padEnd(32, "0");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-8${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
}
