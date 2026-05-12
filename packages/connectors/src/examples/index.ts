/**
 * Example flow builders. Each function returns a fully-built FlowBuilder so the
 * generator script can hand the resulting Flow IR to the export packager.
 *
 * Placeholders are filled from environment variables when you run
 * `bun run generate:examples` — see `readExampleEnv()` in `./env.ts`.
 */
import {
  createFlow,
  type ConnectionPlanEntry,
  type FlowBuilder,
} from "@vibeflow/core";
import {
  MicrosoftForms,
  Office365Outlook,
  SharePoint,
  StandardApprovals,
} from "../index.js";
import { readExampleEnv } from "./env.js";
import { type ExampleRequiredInput } from "./import-docs.js";

export type { ExampleRequiredInput };
export { readExampleEnv, type ExampleEnv } from "./env.js";
export { buildExampleImportBundle, type ExampleImportBundle } from "./import-docs.js";

export interface ExampleSpec {
  /** Stable id used for output filenames. */
  id: string;
  /** Display name shown in the Power Automate import dialog. */
  displayName: string;
  /** Short description. */
  description: string;
  /** Builds and returns the flow. */
  build: () => FlowBuilder;
  /** Connection plan for packaging. */
  connectionPlan: ConnectionPlanEntry[];
  /** Connector logical names the user must authenticate during import. */
  connectionsRequired: string[];
  /** Structured list for `required-inputs.json` + `IMPORT.md`. */
  requiredInputs: ExampleRequiredInput[];
  /** Ordered checklist. */
  importSteps: string[];
  /** Optional one-liner CLI hint for SharePoint list creation. */
  provisioningSharePointListCli?: string;
  /** Honest note about Microsoft Forms automation limits. */
  provisioningFormsNote: string;
}

/**
 * Example 1: Form response → Email confirmation.
 */
function buildFormResponseEmail(): FlowBuilder {
  const env = readExampleEnv();
  const flow = createFlow({
    displayName: "Vibeflow demo — Form response → Email",
    connectionReferences: {
      shared_microsoftforms: { runtimeSource: "embedded", api: { name: "shared_microsoftforms" } },
      shared_office365: { runtimeSource: "embedded", api: { name: "shared_office365" } },
    },
  });

  const trigger = flow.setTrigger(
    "When_a_new_response_is_submitted",
    MicrosoftForms.createFormWebhook({ form_id: env.formId }),
  );

  const get = flow.addAction(
    "Get_response_details",
    MicrosoftForms.getFormResponseById({
      form_id: env.formId,
      response_id: trigger.outputs("body/resourceData/responseId"),
    }),
  );

  flow.addAction(
    "Send_confirmation_email",
    Office365Outlook.sendEmailV2({
      "emailMessage/To": env.notifyEmail,
      "emailMessage/Subject": "New form response received",
      "emailMessage/Body":
        `<p>Hi,</p>` +
        `<p>A new response was submitted to the form.</p>` +
        `<p>Response id: <strong>${get.output("body/responseId")}</strong></p>`,
    }),
    { after: [get] },
  );

  return flow;
}

/**
 * Example 2: SharePoint item → Approval → Conditional email.
 */
function buildSharePointApproval(): FlowBuilder {
  const env = readExampleEnv();
  const flow = createFlow({
    displayName: "Vibeflow demo — SharePoint item → Approval",
    connectionReferences: {
      shared_sharepointonline: {
        runtimeSource: "embedded",
        api: { name: "shared_sharepointonline" },
      },
      shared_approvals: { runtimeSource: "embedded", api: { name: "shared_approvals" } },
      shared_office365: { runtimeSource: "embedded", api: { name: "shared_office365" } },
    },
  });

  const trigger = flow.setTrigger(
    "When_an_item_is_created",
    SharePoint.getOnNewItems({
      dataset: env.sharepointSiteUrl,
      table: env.listName,
    }),
  );

  const approval = flow.addAction(
    "Start_and_wait_for_approval",
    StandardApprovals.startAndWaitForAnApproval({
      approvalType: "Approve/Reject - First to respond",
      "WebhookApprovalCreationInput/title": `New item submitted: ${trigger.outputs("body/Title")}`,
      "WebhookApprovalCreationInput/assignedTo": env.approverEmail,
      "WebhookApprovalCreationInput/details": `A new item was submitted to the list. Item id: ${trigger.outputs("body/ID")}`,
    }),
  );

  flow.addIf(
    "Was_approved",
    {
      equals: [approval.output("body/outcome"), "Approve"],
    },
    {
      then: (then) => {
        then.addAction(
          "Send_approved_email",
          Office365Outlook.sendEmailV2({
            "emailMessage/To": env.notifyEmail,
            "emailMessage/Subject": "Request approved",
            "emailMessage/Body": `<p>Your request was approved.</p>`,
          }),
        );
      },
      else: (otherwise) => {
        otherwise.addAction(
          "Send_rejected_email",
          Office365Outlook.sendEmailV2({
            "emailMessage/To": env.notifyEmail,
            "emailMessage/Subject": "Request rejected",
            "emailMessage/Body": `<p>Your request was rejected.</p>`,
          }),
        );
      },
    },
    { after: [approval] },
  );

  return flow;
}

/**
 * Example 3: Daily SharePoint digest with a foreach loop.
 */
function buildDailyDigest(): FlowBuilder {
  const env = readExampleEnv();
  const flow = createFlow({
    displayName: "Vibeflow demo — Daily SharePoint digest",
    connectionReferences: {
      shared_sharepointonline: {
        runtimeSource: "embedded",
        api: { name: "shared_sharepointonline" },
      },
      shared_office365: { runtimeSource: "embedded", api: { name: "shared_office365" } },
    },
  });

  flow.setTrigger("Recurrence", {
    type: "Recurrence",
    recurrence: { frequency: "Day", interval: 1 },
  });

  const items = flow.addAction(
    "Get_items",
    SharePoint.getItems({
      dataset: env.sharepointSiteUrl,
      table: env.listName,
    }),
  );

  flow.addForeach(
    "For_each_item",
    items.output("body/value"),
    (each) => {
      each.addAction("Compose_summary", {
        type: "Compose",
        inputs: `Item: @{items('For_each_item')?['Title']}`,
      });
    },
    { after: [items] },
  );

  flow.addAction(
    "Send_digest_email",
    Office365Outlook.sendEmailV2({
      "emailMessage/To": env.notifyEmail,
      "emailMessage/Subject": "Daily SharePoint digest",
      "emailMessage/Body": `<p>See the run history for details.</p>`,
    }),
    { after: ["For_each_item"] },
  );

  return flow;
}

const FORMS_ICON =
  "https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1774/1.0.1774.4397/microsoftforms/icon.png";
const OUTLOOK_ICON =
  "https://static.powerapps.com/resource/ppcr/releases/v1.0.1802/1.0.1802.4700/office365/icon.png";
const SHAREPOINT_ICON =
  "https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1769/1.0.1769.4361/sharepointonline/icon.png";
const APPROVALS_ICON =
  "https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4706/approvals/icon.png";

const FORMS_PLAN: ConnectionPlanEntry = {
  connectionName: "shared_microsoftforms",
  apiId: "/providers/Microsoft.PowerApps/apis/shared_microsoftforms",
  apiDisplayName: "Microsoft Forms",
  iconUri: FORMS_ICON,
};
const OUTLOOK_PLAN: ConnectionPlanEntry = {
  connectionName: "shared_office365",
  apiId: "/providers/Microsoft.PowerApps/apis/shared_office365",
  apiDisplayName: "Office 365 Outlook",
  iconUri: OUTLOOK_ICON,
};
const SHAREPOINT_PLAN: ConnectionPlanEntry = {
  connectionName: "shared_sharepointonline",
  apiId: "/providers/Microsoft.PowerApps/apis/shared_sharepointonline",
  apiDisplayName: "SharePoint",
  iconUri: SHAREPOINT_ICON,
};
const APPROVALS_PLAN: ConnectionPlanEntry = {
  connectionName: "shared_approvals",
  apiId: "/providers/Microsoft.PowerApps/apis/shared_approvals",
  apiDisplayName: "Standard approvals",
  iconUri: APPROVALS_ICON,
};

const FORMS_AUTOMATION_NOTE =
  "There is **no supported public API** to create a standard Microsoft Form in a way Power Automate’s Forms connector accepts for all tenants. Create a form in [Microsoft Forms](https://forms.office.com), open it, and copy the **form id** from the URL (the long segment after `/forms/pro/` or from **Share** → link analysis). Paste that id into `VIBEFLOW_FORM_ID` and re-run `bun run generate:examples`, or edit the **Form id** fields in the trigger and **Get response details** action after import.";

const LIST_CLI_HINT =
  "bun tools/provision-sharepoint-list.ts --site-url \"YOUR_SITE_URL\" --list-name \"YOUR_LIST_NAME\"";

export const EXAMPLES: ExampleSpec[] = [
  {
    id: "form-response-email",
    displayName: "Vibeflow demo — Form response → Email",
    description: "Triggers on a new Microsoft Forms response and emails a summary.",
    build: buildFormResponseEmail,
    connectionPlan: [FORMS_PLAN, OUTLOOK_PLAN],
    connectionsRequired: ["shared_microsoftforms", "shared_office365"],
    requiredInputs: [
      {
        id: "form_id",
        label: "Microsoft Form id",
        description:
          "The Forms connector parameter `form_id` must be the real id of a form in your tenant.",
        whereUsed: ["Trigger: When a new response is submitted", "Action: Get response details"],
        envVar: "VIBEFLOW_FORM_ID",
        example: "ABCDeFGHiJkLmN... (from the form URL or developer tools)",
      },
      {
        id: "notify_email",
        label: "Notification email address",
        description: "Where the confirmation email is sent.",
        whereUsed: ["Action: Send confirmation email"],
        envVar: "VIBEFLOW_NOTIFY_EMAIL",
        example: "you@contoso.com",
      },
    ],
    importSteps: [
      "Create or open a Microsoft Form and obtain its **form id** (see IMPORT.md).",
      "Optionally set `VIBEFLOW_FORM_ID` and `VIBEFLOW_NOTIFY_EMAIL` and regenerate the zip so the flow needs no hand-editing.",
      "Import the package in Power Automate and sign in to **Microsoft Forms** and **Office 365 Outlook**.",
      "Submit a test response and confirm the email arrives.",
    ],
    provisioningFormsNote: FORMS_AUTOMATION_NOTE,
  },
  {
    id: "sharepoint-approval",
    displayName: "Vibeflow demo — SharePoint item → Approval",
    description:
      "Triggers on a new SharePoint list item, starts an approval, then conditionally emails the requester.",
    build: buildSharePointApproval,
    connectionPlan: [SHAREPOINT_PLAN, APPROVALS_PLAN, OUTLOOK_PLAN],
    connectionsRequired: ["shared_sharepointonline", "shared_approvals", "shared_office365"],
    requiredInputs: [
      {
        id: "sharepoint_site",
        label: "SharePoint site address (Site Address)",
        description: "Full site URL as used by the SharePoint connector **Site Address** parameter (same value as in the SharePoint UI picker).",
        whereUsed: ["Trigger: When an item is created"],
        envVar: "VIBEFLOW_SHAREPOINT_SITE_URL",
        example: "https://contoso.sharepoint.com/sites/Procurement",
      },
      {
        id: "list_name",
        label: "List name",
        description: "Display name of the list that receives new items.",
        whereUsed: ["Trigger: When an item is created"],
        envVar: "VIBEFLOW_LIST_NAME",
        example: "Requests",
      },
      {
        id: "approver_email",
        label: "Approver",
        description: "Account or group that receives the approval request.",
        whereUsed: ["Action: Start and wait for an approval → Assigned to"],
        envVar: "VIBEFLOW_APPROVER_EMAIL",
        example: "approver@contoso.com",
      },
      {
        id: "notify_email",
        label: "Notification emails",
        description: "Recipient of approve/reject notification emails.",
        whereUsed: ["Actions inside If branch"],
        envVar: "VIBEFLOW_NOTIFY_EMAIL",
        example: "you@contoso.com",
      },
    ],
    importSteps: [
      "Create a SharePoint list (default **Title** column is enough) or run the provisioning script.",
      "Set `VIBEFLOW_SHAREPOINT_SITE_URL`, `VIBEFLOW_LIST_NAME`, `VIBEFLOW_APPROVER_EMAIL`, and `VIBEFLOW_NOTIFY_EMAIL`, then regenerate the zip.",
      "Import the package; map **SharePoint**, **Approvals**, and **Outlook** connections.",
      "Create a list item and confirm approval + branch emails.",
    ],
    provisioningSharePointListCli: LIST_CLI_HINT,
    provisioningFormsNote:
      "This example does not use Microsoft Forms. If you only need a form-style intake, consider keeping the SharePoint path only.",
  },
  {
    id: "daily-sharepoint-digest",
    displayName: "Vibeflow demo — Daily SharePoint digest",
    description: "Runs daily, lists SharePoint items, iterates over them, then emails a digest.",
    build: buildDailyDigest,
    connectionPlan: [SHAREPOINT_PLAN, OUTLOOK_PLAN],
    connectionsRequired: ["shared_sharepointonline", "shared_office365"],
    requiredInputs: [
      {
        id: "sharepoint_site",
        label: "SharePoint site address",
        description: "Site URL for **Get items**.",
        whereUsed: ["Action: Get items"],
        envVar: "VIBEFLOW_SHAREPOINT_SITE_URL",
        example: "https://contoso.sharepoint.com/sites/Reports",
      },
      {
        id: "list_name",
        label: "List name",
        description: "List whose rows are iterated for the digest.",
        whereUsed: ["Action: Get items"],
        envVar: "VIBEFLOW_LIST_NAME",
        example: "Tasks",
      },
      {
        id: "notify_email",
        label: "Digest email recipient",
        whereUsed: ["Action: Send digest email"],
        description: "Who receives the daily email.",
        envVar: "VIBEFLOW_NOTIFY_EMAIL",
        example: "you@contoso.com",
      },
    ],
    importSteps: [
      "Ensure the SharePoint list exists and has a **Title** column (default).",
      "Set env vars and regenerate the zip or edit **Get items** after import.",
      "Import; sign in to **SharePoint** and **Outlook**.",
      "Use **Run trigger** or wait for the next scheduled run to verify.",
    ],
    provisioningSharePointListCli: LIST_CLI_HINT,
    provisioningFormsNote: "Not applicable for this sample.",
  },
];
