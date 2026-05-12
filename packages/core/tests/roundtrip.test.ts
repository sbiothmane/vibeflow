import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import { emitFlow, parseFlow, jsonDiffPath } from "../src/index.js";
import type { JsonObject } from "../src/util/json.js";

const REPO_ROOT = resolve(import.meta.dir, "../../..");

const EXAMPLES: Array<{ label: string; flowId: string; path: string }> = [
  {
    label: "example1",
    flowId: "fb36e059-b3eb-4443-aa1c-d998ee1c2af2",
    path: "examples/example1/Microsoft.Flow/flows/fb36e059-b3eb-4443-aa1c-d998ee1c2af2/definition.json",
  },
  {
    label: "example2",
    flowId: "385bc524-448e-4368-a6d0-c6fc9d20e374",
    path: "examples/example2/Microsoft.Flow/flows/385bc524-448e-4368-a6d0-c6fc9d20e374/definition.json",
  },
];

describe("parse/emit round-trip", () => {
  for (const example of EXAMPLES) {
    test(`${example.label} round-trips losslessly`, async () => {
      const json = (await loadJson(join(REPO_ROOT, example.path))) as JsonObject;
      const flow = parseFlow(json, { flowId: example.flowId });
      const reEmitted = emitFlow(flow);

      const diff = jsonDiffPath(json, reEmitted);
      if (diff) {
        // Provide useful debug context if this ever regresses.
        console.error(`Round-trip diff at: ${diff}`);
      }
      expect(diff).toBeNull();
    });

    test(`${example.label} double round-trip is stable`, async () => {
      const json = (await loadJson(join(REPO_ROOT, example.path))) as JsonObject;
      const first = emitFlow(parseFlow(json, { flowId: example.flowId }));
      const second = emitFlow(parseFlow(first, { flowId: example.flowId }));
      expect(jsonDiffPath(first, second)).toBeNull();
    });
  }
});

async function loadJson(path: string): Promise<unknown> {
  return JSON.parse(await readFile(path, "utf8"));
}
