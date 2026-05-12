import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

import { parseFlow } from "../parse/parse.js";
import type { Flow } from "../ir/types.js";
import type { JsonObject, JsonValue } from "../util/json.js";

export interface FlowFile {
  /** The flow's directory id (the directory name under Microsoft.Flow/flows/). */
  flowId: string;
  /** Absolute path to the flow's directory. */
  flowDir: string;
  /** Absolute path to definition.json. */
  definitionPath: string;
  /** Absolute path to connectionsMap.json if present. */
  connectionsMapPath?: string;
  /** Absolute path to apisMap.json if present. */
  apisMapPath?: string;
}

export interface ExportPackage {
  /** Absolute path of the export root (the dir that contains manifest.json). */
  root: string;
  /** Optional manifest path. */
  manifestPath?: string;
  /** Discovered flow files. */
  flows: FlowFile[];
}

export async function discoverExport(path: string): Promise<ExportPackage> {
  const absolute = resolve(path);
  const st = await stat(absolute).catch(() => null);
  if (!st) throw new Error(`discoverExport: ${absolute} does not exist`);

  if (st.isFile()) {
    if (absolute.endsWith("definition.json")) {
      const flowDir = dirname(absolute);
      return {
        root: await findExportRoot(flowDir),
        flows: [await buildFlowFile(flowDir)],
      };
    }
    throw new Error(`discoverExport: expected a directory or definition.json: ${absolute}`);
  }

  // Directory: either an export root, a single flow directory, or a parent.
  const definitionInside = join(absolute, "definition.json");
  if (await exists(definitionInside)) {
    return {
      root: await findExportRoot(absolute),
      flows: [await buildFlowFile(absolute)],
    };
  }

  const flowsDir = join(absolute, "Microsoft.Flow", "flows");
  if (await exists(flowsDir)) {
    const entries = await readdir(flowsDir, { withFileTypes: true });
    const flows: FlowFile[] = [];
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const flowDir = join(flowsDir, entry.name);
      if (await exists(join(flowDir, "definition.json"))) {
        flows.push(await buildFlowFile(flowDir));
      }
    }
    const manifestPath = join(absolute, "manifest.json");
    const pkg: ExportPackage = {
      root: absolute,
      flows,
    };
    if (await exists(manifestPath)) pkg.manifestPath = manifestPath;
    return pkg;
  }

  throw new Error(`discoverExport: no Power Automate flow found under ${absolute}`);
}

export async function loadFlow(file: FlowFile): Promise<Flow> {
  const json = await readJson(file.definitionPath);
  return parseFlow(json as JsonValue, { flowId: file.flowId });
}

export async function loadFlows(pkg: ExportPackage): Promise<Flow[]> {
  return Promise.all(pkg.flows.map((file) => loadFlow(file)));
}

async function buildFlowFile(flowDir: string): Promise<FlowFile> {
  const flowId = flowDir.split("/").filter(Boolean).pop()!;
  const file: FlowFile = {
    flowId,
    flowDir,
    definitionPath: join(flowDir, "definition.json"),
  };
  const connectionsMap = join(flowDir, "connectionsMap.json");
  if (await exists(connectionsMap)) file.connectionsMapPath = connectionsMap;
  const apisMap = join(flowDir, "apisMap.json");
  if (await exists(apisMap)) file.apisMapPath = apisMap;
  return file;
}

async function findExportRoot(startDir: string): Promise<string> {
  let current = startDir;
  for (let i = 0; i < 8; i++) {
    if (
      (await exists(join(current, "manifest.json"))) &&
      (await exists(join(current, "Microsoft.Flow")))
    ) {
      return current;
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return startDir;
}

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

export async function readJson(path: string): Promise<JsonObject> {
  const text = await readFile(path, "utf8");
  return JSON.parse(text) as JsonObject;
}
