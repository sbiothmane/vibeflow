import { describe, expect, test } from "bun:test";

import {
  ConnectorCatalog,
  createFlow,
  emitFlow,
  parseFlow,
  validateFlow,
} from "@vibeflow/core";
import type { JsonObject } from "@vibeflow/core";
import { MicrosoftForms, Office365Outlook } from "../src/index.js";

describe("end-to-end build with generated shims", () => {
  test("a flow built from scratch parses, validates, and emits", async () => {
    const flow = createFlow({
      displayName: "Form response → Email",
      connectionReferences: {
        shared_microsoftforms: {
          api: { name: "shared_microsoftforms" },
          connection: { connectionReferenceLogicalName: "shared_microsoftforms" },
          runtimeSource: "embedded",
        },
        shared_office365: {
          api: { name: "shared_office365" },
          connection: { connectionReferenceLogicalName: "shared_office365" },
          runtimeSource: "embedded",
        },
      },
    });

    const trigger = flow.setTrigger(
      "When_a_new_response_is_submitted",
      MicrosoftForms.createFormWebhook({ form_id: "EXAMPLE_FORM_ID" }),
    );

    const getResponse = flow.addAction(
      "Get_response_details",
      MicrosoftForms.getFormResponseById({
        form_id: "EXAMPLE_FORM_ID",
        response_id: trigger.outputs("body/resourceData/responseId"),
      }),
    );

    flow.addAction(
      "Send_email",
      Office365Outlook.sendEmailV2({
        "emailMessage/To": "tester@example.com",
        "emailMessage/Subject": "New form response",
        "emailMessage/Body": `<p>Response id: ${getResponse.output("body/responseId")}</p>`,
      }),
      { after: [getResponse] },
    );

    const catalog = await ConnectorCatalog.load();
    const validation = flow.validate(catalog);
    if (validation.errorCount > 0) {
      console.error("Build validation errors:", validation.issues);
    }
    expect(validation.errorCount).toBe(0);

    // Emit, re-parse, and confirm the structure survives a round trip.
    const json = flow.toJson();
    const reparsed = parseFlow(json as JsonObject, { flowId: flow.flow.flowId });
    const reEmitted = emitFlow(reparsed);
    expect(reEmitted).toEqual(json);

    // The flow should advertise the two top-level actions plus a trigger.
    expect(flow.flow.wrapper.definition.actions.size).toBe(2);
    expect(flow.flow.wrapper.definition.triggers.size).toBe(1);
  });
});
