# Power Automate Connector Definition Research

Date: 2026-05-11

This note captures the first Chrome-backed reconnaissance pass for automating connector/action documentation for Vibeflow.

## Goal

Vibeflow already reads exported Power Automate packages and can identify connector operations from `definition.json`. The missing piece is a richer connector definition catalog: action and trigger display names, parameter schemas, descriptions, dynamic inputs, and other metadata that can explain or scaffold a flow without manually collecting examples.

The target workflow is:

1. Read exported flows and collect each `host.apiId` plus `host.operationId`.
2. Resolve each connector ID, such as `shared_office365`, to its metadata source.
3. Join each `operationId`, such as `SendEmailV2`, to its action/trigger schema.
4. Emit a local Vibeflow catalog that can enrich `context`, `lint`, and future rewrite/scaffold commands.

## What Was Verified

Chrome was connected through the Codex Chrome extension and used against the live Power Automate session at:

```text
https://make.powerautomate.com/environments/Default-5569f185-d22f-4e13-9850-ce5b1abcd2e8/create
```

The authenticated Create page exposed connector slugs directly in the UI. Examples visible on the page:

- `shared_office365`
- `shared_sharepointonline`
- `shared_commondataserviceforapps`
- `shared_onedriveforbusiness`
- `shared_microsoftforms`
- `shared_planner`
- `shared_teams`
- `shared_outlook`
- `shared_rss`
- `shared_sql`
- `shared_powerbi`
- `shared_visualstudioteamservices`
- `shared_onenote`
- `shared_flowpush`
- `shared_office365users`

Opening the Office 365 Outlook connector page in Chrome at `/connectors/shared_office365` showed the connector overview and trigger names, including:

- `When a new email arrives (V3)`
- `When an email is flagged (V3)`
- `When an email is flagged (V4)`
- `When a new email arrives in a shared mailbox (V2)`
- `When a new email mentioning me arrives (V3)`
- `When a new event is created (V3)`
- `When an event is added, updated or deleted (V3)`
- `When an event is modified (V3)`
- `When an upcoming event is starting soon (V3)`

The page also links to the public connector reference:

```text
https://learn.microsoft.com/en-us/connectors/office365/
```

## Existing Vibeflow Join Keys

Vibeflow already extracts enough from exported packages to know which connector operations need definitions. For example, `python3 -m vibeflow inspect examples/example1 --json` reports:

```json
{
  "/providers/Microsoft.PowerApps/apis/shared_approvals::StartAndWaitForAnApproval": 6,
  "/providers/Microsoft.PowerApps/apis/shared_microsoftforms::GetFormResponseById": 1,
  "/providers/Microsoft.PowerApps/apis/shared_office365::SendEmailV2": 15,
  "/providers/Microsoft.PowerApps/apis/shared_onedriveforbusiness::CreateShareLinkV2": 2,
  "/providers/Microsoft.PowerApps/apis/shared_onedriveforbusiness::GetFileContent": 2,
  "/providers/Microsoft.PowerApps/apis/shared_onedriveforbusiness::GetFileContentByPath": 2,
  "/providers/Microsoft.PowerApps/apis/shared_sharepointonline::PatchItem": 9,
  "/providers/Microsoft.PowerApps/apis/shared_sharepointonline::PostItem": 2
}
```

`examples/example2` uses a similar set, plus:

```json
{
  "/providers/Microsoft.PowerApps/apis/shared_sharepointonline::GetItem": 4
}
```

That means the first useful catalog does not need every Power Automate connector. It can start with the connectors already present in exported flows.

## Candidate Data Sources

### 1. Power Platform Connectors REST API

Microsoft documents an official Power Platform API for connector metadata.

List connectors:

```http
GET https://api.powerplatform.com/connectivity/environments/{environmentId}/connectors?$filter={$filter}&api-version=2022-03-01-preview
```

Get one connector:

```http
GET https://api.powerplatform.com/connectivity/environments/{environmentId}/connectors/{connectorId}?$filter={$filter}&api-version=2024-10-01
```

The `Get Connector By Id` response shape includes connector `id`, `name`, `type`, and a `properties` object with fields such as:

- `displayName`
- `description`
- `iconUri`
- `tier`
- `publisher`
- `runtimeUrls`
- `capabilities`
- `apiVersion`
- `metadata`
- `interfaces`

Open question: this documented response may or may not include the full per-operation swagger/action schema for first-party connectors. It is still the best supported first probe because it is official and environment-aware.

### 2. Microsoft Connector Reference Docs

Connector pages under `learn.microsoft.com/en-us/connectors/...` expose human-readable trigger and action documentation. These are useful as a fallback or enrichment layer when the REST API returns summary metadata but not full operation schemas.

For example:

```text
https://learn.microsoft.com/en-us/connectors/office365/
```

This is likely enough to enrich Vibeflow context with display names, summaries, and rough parameter descriptions, but less ideal than raw JSON for deterministic code generation.

### 3. Public PowerPlatformConnectors GitHub Repo

Microsoft maintains:

```text
https://github.com/microsoft/PowerPlatformConnectors
```

This repo contains connector packages with files such as:

- `apiDefinition.swagger.json`
- `apiProperties.json`
- `README.md`

This is very useful for certified and independent publisher connectors. It may not contain every Microsoft first-party connector in the exact form deployed in Power Automate, so it should be treated as a supplemental source rather than the only source.

## Auth Boundary

The live Power Automate UI is authenticated in Chrome, but Vibeflow should not scrape Chrome cookies, browser profile data, passwords, or local storage.

Safer options for the extractor:

1. Accept a bearer token explicitly through an environment variable, for example `POWER_PLATFORM_TOKEN`.
2. Add a documented login flow using Microsoft identity tooling or a device-code flow.
3. If Azure CLI is available and logged in, optionally use `az account get-access-token --resource https://api.powerplatform.com`.

The extractor should fail clearly when no token is available rather than trying to recover credentials from Chrome.

## Proposed Vibeflow Implementation

Add a new catalog feature in small pieces:

1. `vibeflow connector-ops <export>`
   - Print the unique connector IDs and operation IDs already used by a package.
   - This is mostly a CLI wrapper over data Vibeflow already collects.

2. `vibeflow connector-fetch --environment <id> --connector shared_office365 --out generated/connectors`
   - Fetch official Power Platform connector metadata.
   - Read bearer token from `POWER_PLATFORM_TOKEN` or an explicit `--token-file`.
   - Store raw responses under `generated/connectors/raw/`.

3. `vibeflow connector-normalize generated/connectors/raw/...`
   - Normalize raw metadata/docs/swagger into a stable internal shape:

```json
{
  "connectorId": "shared_office365",
  "displayName": "Office 365 Outlook",
  "source": "power-platform-api",
  "operations": {
    "SendEmailV2": {
      "kind": "action",
      "displayName": "Send an email (V2)",
      "description": "...",
      "parameters": {},
      "required": []
    }
  }
}
```

4. Enrich `vibeflow context`
   - Add connector display names and operation display names to `connectors.json`.
   - Add missing-definition warnings when a flow uses an operation that is not in the local catalog.

## Near-Term Target Connectors

Based on current examples, the first catalog should focus on:

- `shared_office365`
- `shared_sharepointonline`
- `shared_approvals`
- `shared_microsoftforms`
- `shared_onedriveforbusiness`

These cover the exported examples and would immediately improve action-tree readability and AI editing context.

## What Was Achieved

- Confirmed Chrome automation can access the authenticated Power Automate environment.
- Confirmed the Create page exposes connector IDs that match exported flow `apiId` values.
- Confirmed connector pages expose trigger/action names through the authenticated UI.
- Found the official Power Platform connector REST API endpoints to list and retrieve connector metadata.
- Confirmed Vibeflow already captures the connector/operation join keys needed for a catalog.
- Identified a safe auth boundary: use explicit tokens or Microsoft login tooling, not Chrome cookie/profile scraping.

## Data Captured

The first collector lives at:

```bash
python3 tools/collect_connector_definitions.py --examples examples --out generated/connectors
```

It stores raw Microsoft Learn connector reference markdown under `generated/connectors/raw/` and normalized JSON under `generated/connectors/normalized/`.

Captured connector files:

The catalog now captures 56 Microsoft/built-in-oriented connectors and 1,283 parsed operations.

| Connector | Display name | Operations |
| --- | --- | ---: |
| `shared_approvals` | Standard approvals | 6 |
| `shared_arm` | Azure Resource Manager | 35 |
| `shared_azureautomation` | Azure Automation | 3 |
| `shared_azureblob` | Azure Blob Storage | 32 |
| `shared_azureeventgrid` | Azure Event Grid | 1 |
| `shared_azureeventgridpublish` | Azure Event Grid Publish | 1 |
| `shared_azurefile` | Azure File Storage | 10 |
| `shared_azureloganalyticsdatacollector` | Azure Log Analytics Data Collector | 1 |
| `shared_azuremonitorlogs` | Azure Monitor Logs | 4 |
| `shared_azureopenai` | Azure OpenAI | 4 |
| `shared_azurequeues` | Azure Queues | 14 |
| `shared_azuretables` | Azure Table Storage | 24 |
| `shared_bingmaps` | Bing Maps | 7 |
| `shared_bingsearch` | Bing Search | 2 |
| `shared_cognitiveservicestextanalytics` | Azure Cognitive Service for Language | 45 |
| `shared_commondataserviceforapps` | Microsoft Dataverse | 39 |
| `shared_dataflows` | Power Query Dataflows | 2 |
| `shared_documentdb` | Azure Cosmos DB | 27 |
| `shared_excelonline` | Excel Online (OneDrive) | 11 |
| `shared_excelonlinebusiness` | Excel Online (Business) | 14 |
| `shared_filesystem` | File System | 15 |
| `shared_flowmanagement` | Power Automate Management | 23 |
| `shared_flowpush` | Notifications | 2 |
| `shared_formrecognizer` | Azure AI Document Intelligence (form recognizer) | 10 |
| `shared_keyvault` | Azure Key Vault | 14 |
| `shared_m365updatesapp` | Updates App (Microsoft 365) | 2 |
| `shared_microsoftflowforadmins` | Power Automate for Admins | 7 |
| `shared_microsoftforms` | Microsoft Forms | 4 |
| `shared_office365` | Office 365 Outlook | 113 |
| `shared_office365groups` | Office 365 Groups | 18 |
| `shared_office365users` | Office 365 Users | 19 |
| `shared_onedrive` | OneDrive | 37 |
| `shared_onedriveforbusiness` | OneDrive for Business | 34 |
| `shared_onenote` | OneNote (Business) | 12 |
| `shared_outlook` | Outlook.com | 52 |
| `shared_planner` | Planner | 38 |
| `shared_powerappsforadmins` | Power Apps for Admins | 16 |
| `shared_powerappsforappmakers` | Power Apps for Makers | 19 |
| `shared_powerappsnotification` | Power Apps Notification | 1 |
| `shared_powerappsnotificationv2` | Power Apps Notification V2 | 1 |
| `shared_powerbi` | Power BI | 25 |
| `shared_powerplatformadminv2` | Power Platform for Admins V2 | 156 |
| `shared_powerplatformforadmins` | Power Platform for Admins | 33 |
| `shared_processmining` | Process Mining | 2 |
| `shared_rss` | RSS | 2 |
| `shared_sendgrid` | SendGrid | 10 |
| `shared_servicebus` | Service Bus | 30 |
| `shared_sftpwithssh` | SFTP - SSH | 15 |
| `shared_sharepointonline` | SharePoint | 69 |
| `shared_smtp` | SMTP | 3 |
| `shared_sql` | SQL Server | 21 |
| `shared_teams` | Microsoft Teams | 117 |
| `shared_todo` | Microsoft To-Do (Business) | 27 |
| `shared_visualstudioteamservices` | Azure DevOps | 49 |
| `shared_webcontents` | HTTP with Microsoft Entra ID (preauthorized) | 2 |
| `shared_wordonlinebusiness` | Word Online (Business) | 3 |

The collector also writes:

- `generated/connectors/operation-inventory.json`
- `generated/connectors/catalog-summary.json`
- `generated/connectors/builtin-workflow-actions.json`

All operations used by `examples/example1` and `examples/example2` matched an official Microsoft Learn operation ID in this pass.

Matched operation IDs:

- `shared_approvals::StartAndWaitForAnApproval`
- `shared_microsoftforms::CreateFormWebhook`
- `shared_microsoftforms::GetFormResponseById`
- `shared_office365::SendEmailV2`
- `shared_onedriveforbusiness::CreateShareLinkV2`
- `shared_onedriveforbusiness::GetFileContent`
- `shared_onedriveforbusiness::GetFileContentByPath`
- `shared_sharepointonline::GetItem`
- `shared_sharepointonline::PatchItem`
- `shared_sharepointonline::PostItem`

Each normalized operation includes:

- operation ID
- action/trigger kind
- display name
- deprecation flag
- description
- documented parameters
- documented return summary
- usage count from local examples
- observed exported-flow parameter paths, such as `emailMessage/To` or `WebhookApprovalCreationInput/assignedTo`

`builtin-workflow-actions.json` separately documents core workflow/control action types that appear in exported definitions but are not connector operations, such as `If`, `Switch`, `Foreach`, `Scope`, `Compose`, `ParseJson`, `InitializeVariable`, `SetVariable`, `Wait`, and `Terminate`.

## References

- [Power Platform Connectors REST API](https://learn.microsoft.com/en-us/rest/api/power-platform/connectivity/connectors)
- [List Connectors REST API](https://learn.microsoft.com/en-us/rest/api/power-platform/connectivity/connectors/list-connectors)
- [Get Connector By Id REST API](https://learn.microsoft.com/en-us/rest/api/power-platform/connectivity/connectors/get-connector-by-id)
- [Office 365 Outlook connector reference](https://learn.microsoft.com/en-us/connectors/office365/)
- [Microsoft PowerPlatformConnectors GitHub repo](https://github.com/microsoft/PowerPlatformConnectors)
