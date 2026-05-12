# Provisioning data sources for demo flows

Example zips under `generated/zips/` need **real** SharePoint sites / lists and **real** Microsoft Forms ids. This page explains what can be automated today and what remains manual—so a future agent can call the right tools honestly.

## What you can automate

### SharePoint list (supported)

Use Microsoft Graph to create a **generic list** with the default **Title** column—the same shape the example flows expect (`body/Title`, `body/ID`).

**Script:** `tools/provision-sharepoint-list.ts`

**Auth (pick one):**

1. **Azure CLI (good for humans):** `az login`, then run the script. It calls  
   `az account get-access-token --resource https://graph.microsoft.com`.
2. **Bearer token (good for agents / CI):** set `GRAPH_ACCESS_TOKEN` to a token with `Sites.ReadWrite.All` or `Sites.Manage.All` for `https://graph.microsoft.com`.

**Example:**

```bash
bun tools/provision-sharepoint-list.ts \
  --site-url "https://YOUR_TENANT.sharepoint.com/sites/YOUR_SITE" \
  --list-name "Vibeflow Demo Requests"
```

Then bake values into the next zip build:

```bash
export VIBEFLOW_SHAREPOINT_SITE_URL="https://YOUR_TENANT.sharepoint.com/sites/YOUR_SITE"
export VIBEFLOW_LIST_NAME="Vibeflow Demo Requests"
bun run generate:examples
```

**Agent-shaped tool:** wrap the same Graph calls (or shell out to this script) behind a tool like `provision_sharepoint_list({ siteUrl, listName })` that returns `{ siteUrl, listName }` for the next `generate_examples` / `compile` step.

## What you cannot fully automate (today)

### Microsoft Forms (limited)

There is **no broadly supported, tenant-safe public API** to **create** a standard Microsoft Form in the same way a user does in [forms.office.com](https://forms.office.com), with a `form_id` that the Power Automate **Microsoft Forms** connector accepts for all customers.

Practical options:

1. **Manual (most teams):** create the form in the browser, copy the **form id** from the URL or from the form settings, set `VIBEFLOW_FORM_ID`, run `bun run generate:examples`.
2. **Graph (education / specialized):** some APIs exist under **Education** or licensed features; they do not map 1:1 to every commercial tenant’s Forms connector expectations. If your org has a supported path, document it here and we can add a dedicated provisioner behind a feature flag.
3. **Power Platform / Dataverse:** advanced scenarios might store definitions elsewhere—out of scope for these minimal zips.

**Agent-shaped tool:** honest `open_forms_portal` / `instructions: user_provided_form_id` rather than pretending a universal “create form” API exists. After the user pastes an id, call `compile` / patch `form_id` in the IR.

## Environment variables (zip generation)

Set these **before** `bun run generate:examples` to avoid hand-editing the flow after import:

| Variable | Purpose |
|----------|---------|
| `VIBEFLOW_FORM_ID` | Microsoft Forms `form_id` parameter |
| `VIBEFLOW_SHAREPOINT_SITE_URL` | SharePoint connector **Site Address** |
| `VIBEFLOW_LIST_NAME` | SharePoint list **name** (display name) |
| `VIBEFLOW_NOTIFY_EMAIL` | Outlook **To** lines in demo flows |
| `VIBEFLOW_APPROVER_EMAIL` | Approval **Assigned to** in the SharePoint + approval sample |

Each generated zip also contains **`IMPORT.md`** and **`required-inputs.json`** with the same information for humans and for an agent.

## Permissions reference (Graph)

| Operation | Delegated (user) | Application |
|-----------|------------------|-------------|
| Resolve site + create list | `Sites.ReadWrite.All` | `Sites.Manage.All` (typical) |

Use least privilege appropriate to your environment. For interactive dev, delegated via `az login` is usually enough.

## For an AI agent (Claude Code, terminal tools)

Treat each zip as a small **deployment bundle**:

1. **Read** `required-inputs.json` first (machine-readable contract). It echoes `resolvedAtBuildTime` so you know whether placeholders remain.
2. **SharePoint list:** if the sample needs a list, prefer **`bun tools/provision-sharepoint-list.ts`** after `az login` (or `GRAPH_ACCESS_TOKEN`), then re-run **`bun run generate:examples`** with `VIBEFLOW_SHAREPOINT_SITE_URL` and `VIBEFLOW_LIST_NAME`. Wrap the same Graph calls in an agent tool later (`provision_sharepoint_list`).
3. **Microsoft Forms:** do **not** assume a universal public API to create forms. Ask the user for a **form id** or URL, set `VIBEFLOW_FORM_ID`, regenerate the zip, or patch the flow after import.
4. **Import:** the user uploads the zip in Power Automate; the agent’s job is to produce a **validated zip with documented, filled inputs**—not to sign in to Microsoft on their behalf.

Phase 3 `@vibeflow/agent` can expose these as explicit tools (`describe_import_requirements`, `provision_sharepoint_list`, `compile_flow_zip`, …) on top of the same env vars and scripts.
