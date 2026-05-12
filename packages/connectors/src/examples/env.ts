/**
 * Environment variables used when **generating** example zips (`bun run generate:examples`).
 * Set these before running the generator to bake real values into `definition.json`
 * instead of placeholders — then you can import without hand-editing JSON.
 *
 * | Variable | Used by |
 * |----------|---------|
 * | `VIBEFLOW_FORM_ID` | form-response-email |
 * | `VIBEFLOW_SHAREPOINT_SITE_URL` | sharepoint-approval, daily-sharepoint-digest |
 * | `VIBEFLOW_LIST_NAME` | sharepoint-approval, daily-sharepoint-digest |
 * | `VIBEFLOW_NOTIFY_EMAIL` | All examples (To: addresses) |
 * | `VIBEFLOW_APPROVER_EMAIL` | sharepoint-approval |
 */
export interface ExampleEnv {
  formId: string;
  sharepointSiteUrl: string;
  listName: string;
  notifyEmail: string;
  approverEmail: string;
}

export function readExampleEnv(): ExampleEnv {
  return {
    formId: process.env.VIBEFLOW_FORM_ID ?? "REPLACE_WITH_REAL_FORM_ID",
    sharepointSiteUrl:
      process.env.VIBEFLOW_SHAREPOINT_SITE_URL ?? "https://contoso.sharepoint.com/sites/example",
    listName: process.env.VIBEFLOW_LIST_NAME ?? "Requests",
    notifyEmail: process.env.VIBEFLOW_NOTIFY_EMAIL ?? "you@example.com",
    approverEmail: process.env.VIBEFLOW_APPROVER_EMAIL ?? "approver@example.com",
  };
}
