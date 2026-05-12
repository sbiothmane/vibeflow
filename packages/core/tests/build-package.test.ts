import { describe, expect, test } from "bun:test";

import {
  buildExportPackage,
  createFlow,
  emitFlow,
  parseFlow,
  type JsonObject,
} from "../src/index.js";

describe("buildExportPackage", () => {
  test("produces a 5-file export tree from an empty flow", () => {
    const flow = createFlow({ displayName: "Empty" });

    const built = buildExportPackage(flow.toFlow(), {
      displayName: "Empty",
      description: "Empty for tests",
      connectionPlan: [],
      flowResourceId: "11111111-1111-1111-1111-111111111111",
      packageTelemetryId: "22222222-2222-2222-2222-222222222222",
      createdTime: "2026-01-01T00:00:00.000Z",
    });

    const paths = built.files.map((f) => f.path).sort();
    expect(paths).toEqual([
      "Microsoft.Flow/flows/11111111-1111-1111-1111-111111111111/apisMap.json",
      "Microsoft.Flow/flows/11111111-1111-1111-1111-111111111111/connectionsMap.json",
      "Microsoft.Flow/flows/11111111-1111-1111-1111-111111111111/definition.json",
      "Microsoft.Flow/flows/manifest.json",
      "manifest.json",
    ]);
  });

  test("definition.json round-trips through the parser", () => {
    const flow = createFlow({ displayName: "Round-trip" });
    flow.addAction("Compose_hello", {
      type: "Compose",
      inputs: "Hello, world",
    });

    const built = buildExportPackage(flow.toFlow(), {
      displayName: "Round-trip",
      connectionPlan: [],
      flowResourceId: "33333333-3333-3333-3333-333333333333",
    });

    const definitionFile = built.files.find((f) => f.path.endsWith("definition.json"));
    expect(definitionFile).toBeDefined();
    expect(definitionFile!.json).toBeDefined();
    const definitionJson = definitionFile!.json as JsonObject;

    const reparsed = parseFlow(definitionJson, { flowId: flow.flow.flowId });
    const reEmitted = emitFlow(reparsed);
    expect(reEmitted).toEqual(definitionJson);
  });

  test("rejects a connection plan that is missing a used connectionName", () => {
    const flow = createFlow({ displayName: "Missing plan" });
    flow.addAction("Send_email", {
      type: "OpenApiConnection",
      inputs: {
        host: {
          apiId: "/providers/Microsoft.PowerApps/apis/shared_office365",
          connectionName: "shared_office365",
          operationId: "SendEmailV2",
        },
        parameters: {
          "emailMessage/To": "a@b.c",
          "emailMessage/Subject": "x",
          "emailMessage/Body": "y",
        },
      },
    });

    expect(() =>
      buildExportPackage(flow.toFlow(), {
        displayName: "Missing plan",
        connectionPlan: [],
      }),
    ).toThrow(/shared_office365/);
  });
});
