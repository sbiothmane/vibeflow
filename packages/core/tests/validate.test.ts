import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import { ConnectorCatalog, parseFlow, validateFlow } from "../src/index.js";
import type { JsonObject } from "../src/util/json.js";

const REPO_ROOT = resolve(import.meta.dir, "../../..");

async function loadExample(rel: string, flowId: string) {
  const path = join(REPO_ROOT, rel);
  const json = JSON.parse(await readFile(path, "utf8")) as JsonObject;
  return parseFlow(json, { flowId });
}

describe("validateFlow", () => {
  test("reports no errors on a real flow with a real catalog", async () => {
    const flow = await loadExample(
      "examples/example1/Microsoft.Flow/flows/fb36e059-b3eb-4443-aa1c-d998ee1c2af2/definition.json",
      "fb36e059-b3eb-4443-aa1c-d998ee1c2af2",
    );
    const catalog = await ConnectorCatalog.load();
    const result = validateFlow(flow, { catalog });
    if (result.errorCount > 0) {
      console.error(
        "Unexpected validation errors:",
        result.issues.filter((i) => i.severity === "error"),
      );
    }
    expect(result.errorCount).toBe(0);
  });

  test("flags a missing run-after dependency", async () => {
    const flow = await loadExample(
      "examples/example1/Microsoft.Flow/flows/fb36e059-b3eb-4443-aa1c-d998ee1c2af2/definition.json",
      "fb36e059-b3eb-4443-aa1c-d998ee1c2af2",
    );
    const definition = flow.wrapper.definition;
    // Inject a broken runAfter on an arbitrary top-level action.
    const target = [...definition.actions.values()].find((a) => Object.keys(a.runAfter).length > 0);
    expect(target).toBeDefined();
    target!.runAfter["NonexistentActionXyz"] = ["Succeeded"];

    const result = validateFlow(flow);
    const runAfterIssue = result.issues.find((i) => i.rule === "run-after-unknown");
    expect(runAfterIssue).toBeDefined();
    expect(runAfterIssue?.severity).toBe("error");
  });

  test("flags a missing required connector parameter", async () => {
    const flow = await loadExample(
      "examples/example1/Microsoft.Flow/flows/fb36e059-b3eb-4443-aa1c-d998ee1c2af2/definition.json",
      "fb36e059-b3eb-4443-aa1c-d998ee1c2af2",
    );
    const catalog = await ConnectorCatalog.load();

    // Find an OpenApiConnection action and blank a required parameter.
    let mutated = false;
    for (const action of flow.wrapper.definition.actions.values()) {
      if (action.type !== "OpenApiConnection") continue;
      const inputs = action.rawWithoutStructural["inputs"];
      if (
        typeof inputs !== "object" ||
        inputs === null ||
        Array.isArray(inputs)
      )
        continue;
      const params = (inputs as JsonObject)["parameters"];
      if (
        typeof params !== "object" ||
        params === null ||
        Array.isArray(params)
      )
        continue;
      const firstKey = Object.keys(params as JsonObject)[0];
      if (!firstKey) continue;
      (params as JsonObject)[firstKey] = "";
      mutated = true;
      break;
    }
    expect(mutated).toBe(true);

    const result = validateFlow(flow, { catalog });
    const missing = result.issues.find((i) => i.rule === "connector-missing-required-param");
    expect(missing).toBeDefined();
  });
});
