---
layout: Reference
title: Power BI - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerbi/
ms.subservice: connectors
author: miriver
ms.author: miriver
ms.manager: jwarner
ms.service: power-platform
ms.date: 2024-03-01T00:00:00.0000000Z
breadcrumb_path: /connectors/breadcrumb/toc.json
uhfHeaderId: MSDocsHeader-PowerPlatform
feedback_system: None
ms.topic: generated-reference
locale: en-us
document_id: 1214f622-5b88-afa0-54cb-eae8ea4b3bfd
document_version_independent_id: d5efdba5-d278-73e4-1571-13abe8474c40
updated_at: 2026-03-10T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/PowerBI/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/5c5799b61d661d98e1115eac606ed4ed2f3cc6d7/docs/PowerBI/index.yml
git_commit_id: 5c5799b61d661d98e1115eac606ed4ed2f3cc6d7
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerbi/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/PowerBI/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/d3197845-b4ce-44c6-a237-cd4be160e76c
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/aea905fb-0a9d-4d46-b30f-e9cbaf772d1b
platformId: 14cc286b-2e43-df5f-644d-16a0f0aec805
---

# Power BI

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4610/powerbi/icon.png)
Power BI is a suite of business analytics tools to analyze data and share insights. Connect to get easy access to the data in your Power BI dashboards, reports and datasets.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://powerbi.microsoft.com/en-us/support/ |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://powerbi.microsoft.com/ |
| Privacy policy | https://privacy.microsoft.com/privacystatement |
| Categories | Business Intelligence;Website |

To use this integration, you will need access to a Power BI account. To make a connection, select **Sign In**. You will be prompted to provide your account, follow the remainder of the screens to create a connection.

When using the connection, you may be required to have certain configurations in your Power BI account. For example, to use the data driven alert triggers you must already have a data driven alert configured.

You're now ready to start using this integration.

## Known issues and limitations

Power BI connector is not supported for Power BI sovereign cloud clusters (i.e. China, Germany and US Government clusters).

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Not shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Add a note to a check-in (Preview) | Appends a new note to a check-in of a Power BI goal. |
| --- | --- |
| Add rows to a dataset | Use Power BI REST API to add rows to a dataset. |
| Create a check-in (Preview) | Creates a Power BI goal check-in. |
| Create a goal (Preview) | Creates a Power BI goal on the specified scorecard. |
| Create a scorecard (Preview) | Creates a scorecard for Power BI goals. |
| Export To File for Paginated Reports | Use Power BI Rest API to inititate export for paginated reports |
| Export To File for Power BI Reports | Use Power BI Rest API to inititate export for Power BI reports |
| Get a goal (Preview) | Gets the specified Power BI goal on a scorecard. |
| Get a goal check-in (Preview) | Get a check-in on a Power BI goal. |
| Get goal check-ins (Preview) | Get all check-ins on a Power BI goal. |
| Get multiple goals (Preview) | Get a list of Power BI goals in the specified scorecard. |
| Get scorecards (Preview) | Gets a list of Power BI scorecards in the specified workspace. |
| Refresh a dataset | Use Power BI REST API to refresh a powerbi dataset. |
| Run a json query against a dataset | Use the Power BI REST API to run a query in json format. |
| Run a query against a dataset | Use the Power BI REST API to run a query. |
| Update a check-in (Preview) | Updates a Power BI goal check-in. |
| Update a goal (Preview) | Updates the Power BI goal's state. |

### Add a note to a check-in (Preview)

- Operation ID:
    - GoalValueCheckinNote

Appends a new note to a check-in of a Power BI goal.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Check-in date | goalCheckin | True | date | Example: 2021-07-21 |
| Note | note | True | string | Can be multiline text |

### Add rows to a dataset

- Operation ID:
    - AddRows

Use Power BI REST API to add rows to a dataset.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Dataset | datasetid | True | string | The unique identifier of the dataset. |
| Table | tablename | True | string | The name of the table. |
| Payload to send | Payload |  | dynamic |  |

### Create a check-in (Preview)

- Operation ID:
    - GoalValueCheckin

Creates a Power BI goal check-in.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Date | timestamp | True | date | Check-in date. Example: 2021-07-21 |
| Value | value |  | number |  |
| Status | status |  | string | Status of the goal. |
| Note | note |  | string | Can be multiline text |

### Create a goal (Preview)

- Operation ID:
    - CreateGoal

Creates a Power BI goal on the specified scorecard.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Name | name | True | string | The name of the goal. |
| Owner | owner |  | email | The email address of the goal's owner. Example: foo@bar.com |
| Current value | value |  | string | The current value of the goal being tracked. |
| Target value | target |  | string | The target value of the goal. |
| Status | status |  | string | The current status the goal. |
| Start date | startDate |  | date | The start date for the goal. Example: 2021-07-15. |
| Completion date | completionDate |  | date | The date for the goal to be completed by. Example: 2021-07-29. |
| Note | note |  | string | Note to attach to the initial check-in on goal creation. Can be multiline text |
| Parent goal id | parentId |  | string | If this goal is a subgoal, the unique id of its parent goal. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the goal. |

### Create a scorecard (Preview)

- Operation ID:
    - CreateScorecard

Creates a scorecard for Power BI goals.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Name | name | True | string | Scorecard name |
| Description | description |  | string | Scorecard description |

#### Returns

Created scorecard.

- Created scorecard
    - CreatedScorecard

### Export To File for Paginated Reports

- Operation ID:
    - InitiateExportToFileForPaginatedReports

Use Power BI Rest API to inititate export for paginated reports

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Report | reportid | True | string | The unique identifier of a paginated report. |
| Export Format | format | True | string | The export format for the paginated report. The supported formats are: PPTX (PowerPoint), PDF, ACCESSIBLEPDF (Accessible PDF), XLSX (Excel), DOCX (Word), CSV, XML, MHTML, and Image (BMP, EMF, GIF, JPEG, PNG, or TIFF). |
| Username | username | True | string | The effective username reflected by a token for applying RLS rules (For OnPrem model, username can be composed of alpha-numerical characters or any of the following characters '.', '-', '\_', '!', '#', '^', '~', '\', '@', also username cannot contain spaces. For Cloud model, username can be composed of all ASCII characters. username must be up to 256 characters) |
| Datasets | datasets |  | array of string | An array of datasets for which this identity applies |
| Roles | roles |  | array of string | An array of RLS roles reflected by a token when applying RLS rules (identity can contain up to 50 roles, role can be composed of any character besides ',' and must be up to 50 characters) |
| CustomData | customData |  | string | The value of customdata to be used for applying RLS rules. Only supported for live connections to Azure Analysis Services. |
| Blob Value | value | True | string | OAuth2 access token for SQL Azure |
| Reports | reports |  | array of string | An array of reports for which this identity applies, Only supported for paginated reports |
| FormatSettings | formatSettings |  | object | Dictionary of format settings. The keys are the device info property names for the requested file format. |
| name | name |  | string | The report parameter name |
| value | value |  | string | The report parameter value |

#### Returns

The content of the file.

- File Content
    - binary

### Export To File for Power BI Reports

- Operation ID:
    - InitiateExportToFileForPbiReports

Use Power BI Rest API to inititate export for Power BI reports

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Report | reportid | True | string | The unique identifier of a pbi report. |
| Export Format | format | True | string | The export format for the Power BI report. The supported formats are: PPTX (PowerPoint), PDF, and PNG |
| Locale | locale |  | string | The locale to apply |
| Include Hidden Pages | includeHiddenPages |  | boolean | A flag indicating whether to include hidden pages when exporting the entire report (when passing specific pages this property will be ignored). If not provided, the default behavior is to exclude hidden pages |
| Bookmark Name | name |  | string | The bookmark name |
| Bookmark State | state |  | string | The bookmark state |
| Filter | filter |  | string | The filter to apply |
| pageName | pageName |  | string | The page name |
| visualName | visualName |  | string | (Optional) Visual name to be exported |
| Bookmark Name | name |  | string | The bookmark name |
| Bookmark State | state |  | string | The bookmark state |
| Username | username | True | string | The effective username reflected by a token for applying RLS rules (For OnPrem model, username can be composed of alpha-numerical characters or any of the following characters '.', '-', '\_', '!', '#', '^', '~', '\', '@', also username cannot contain spaces. For Cloud model, username can be composed of all ASCII characters. username must be up to 256 characters) |
| Datasets | datasets |  | array of string | An array of datasets for which this identity applies |
| Roles | roles |  | array of string | An array of RLS roles reflected by a token when applying RLS rules (identity can contain up to 50 roles, role can be composed of any character besides ',' and must be up to 50 characters) |
| CustomData | customData |  | string | The value of customdata to be used for applying RLS rules. Only supported for live connections to Azure Analysis Services. |
| Blob Value | value | True | string | OAuth2 access token for SQL Azure |
| Reports | reports |  | array of string | An array of reports for which this identity applies, Only supported for paginated reports |

#### Returns

The content of the file.

- File Content
    - binary

### Get a goal (Preview)

- Operation ID:
    - GetGoal

Gets the specified Power BI goal on a scorecard.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |

#### Returns

Goal information.

- Goal
    - FetchedGoal

### Get a goal check-in (Preview)

- Operation ID:
    - GetGoalCheckin

Get a check-in on a Power BI goal.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Check-in date | goalCheckin | True | date | Example: 2021-07-21 |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Date | timestamp | date | The date that the check-in was made. |
| Value | value | number | The value at the time of check in, if set. |
| Status | status | string | The goal status at the time of check in. |
| Notes | notes | GoalNotes | The list of notes. |

### Get goal check-ins (Preview)

- Operation ID:
    - GetGoalCheckins

Get all check-ins on a Power BI goal.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Check-ins | value | array of object | List of check-ins. |
| Date | value.timestamp | datetime | The date that the check-in was made. |
| Value | value.value | number | The value at the time of check in. |
| Status | value.status | string | The goal status at the time of check in. |
| Notes | value.notes | GoalNotes | The list of notes. |

### Get multiple goals (Preview)

- Operation ID:
    - GetMultipleGoals

Get a list of Power BI goals in the specified scorecard.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |

#### Returns

Entire response body.

- Retrieved
    - FetchedGoals

### Get scorecards (Preview)

- Operation ID:
    - GetScorecards

Gets a list of Power BI scorecards in the specified workspace.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |

#### Returns

Entire response body.

- Retrieved
    - ListedScorecards

### Refresh a dataset

- Operation ID:
    - RefreshDataset

Use Power BI REST API to refresh a powerbi dataset.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Dataset | datasetid | True | string | The unique identifier of the dataset. |

### Run a json query against a dataset

- Operation ID:
    - ExecuteDatasetQueriesJson

Use the Power BI REST API to run a query in json format.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Dataset | datasetid | True | string | The unique identifier of the dataset. |

#### Returns

- response
    - object

### Run a query against a dataset

- Operation ID:
    - ExecuteDatasetQuery

Use the Power BI REST API to run a query.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Dataset | datasetid | True | string | The unique identifier of the dataset. |
| Query text | query | True | string | The text of the query. Can be multiline text. |
| Nulls included | includeNulls |  | boolean | Should null values be included in the results. Default is No. |
| Impersonate user | impersonatedUserName |  | string | A user identity in UPN format to run the query as another user. |

#### Returns

Results of query execution.

- Body
    - QueryExecutionResults

### Update a check-in (Preview)

- Operation ID:
    - UpdateGoalCheckin

Updates a Power BI goal check-in.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Check-in date | goalCheckin | True | date | Example: 2021-07-21 |
| Value | value |  | number |  |
| Status | status |  | string | Status of the goal. |

### Update a goal (Preview)

- Operation ID:
    - UpdateGoal

Updates the Power BI goal's state.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Name | name |  | string | If provided, the new name of the goal. |
| Owner | owner |  | email | If provided, the email address of the new goal owner. |
| Current value | value |  | number | If provided, sets the new value of the goal. |
| Target value | target |  | number | If provided, sets the new goal target. |
| Status | status |  | string | If provided, sets the new status of the goal. |
| Start date | startDate |  | date | If provided, the new start date for the goal. Example: 2021-07-15. |
| Completion date | completionDate |  | date | If provided, the new date for the goal to be completed by. Example: 2021-07-29. |

## Triggers

| Power BI button clicked | This trigger allows you to run a flow when a Power BI button is clicked. (Available only for Power Automate.) |
| --- | --- |
| When a data driven alert is triggered | Return the details of the specified data driven alert from Power BI when the alert triggered. |
| When a data refresh for a goal fails (Preview) | When a data refresh for a Power BI goal fails. |
| When a goal changes (Preview) | When a property of some Power BI goal changes. |
| When current value of a goal changes (Preview) | When current value of some Power BI goal changes. |
| When someone adds or edits a goal check-in (Preview) | Trigger for some Power BI goal check-in or note changes. |
| When someone assigns a new owner to a goal (Preview) | When someone assigns a new owner to a Power BI goal. |
| When status of a goal changes (Preview) | When status of some Power BI goal changes. |

### Power BI button clicked

- Operation ID:
    - PowerBiButtonClicked

This trigger allows you to run a flow when a Power BI button is clicked. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| headersSchema | headersSchema |  | object |  |
| schema | schema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rows | body.rows | array of object |  |
| items | body.rows | object |  |
| User email | headers.x-ms-user-email-encoded | byte | The email address of the user who triggered the flow. |
| User name | headers.x-ms-user-name-encoded | byte | The display name of the user who triggered the flow. |
| Timestamp | headers.x-ms-user-timestamp | string | The time the flow was triggered. |
| User id | headers.x-ms-user-id | guid | The unique identifier of the user who triggered the flow in AAD. |

### When a data driven alert is triggered

- Operation ID:
    - CheckAlertStatus

Return the details of the specified data driven alert from Power BI when the alert triggered.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Alert Id | alertId | True | string | The alert id to track. |

#### Returns

- Body
    - EvaluatedAlert

### When a data refresh for a goal fails (Preview)

- Operation ID:
    - GoalRefreshFailedTrigger

When a data refresh for a Power BI goal fails.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Track target source | trackTargetSource | True | string | Will track the link for the goal's target. |
| Track value source | trackValueSource | True | string | Will track the link for the goal's value. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Goal refresh failure issues.

- Refresh failure
    - GoalRefreshIssues

### When a goal changes (Preview)

- Operation ID:
    - GoalChangeTrigger

When a property of some Power BI goal changes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Changed goal properties.

- Changed goal
    - GoalChanged

### When current value of a goal changes (Preview)

- Operation ID:
    - GoalValueChangeTrigger

When current value of some Power BI goal changes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Changed goal properties.

- Changed goal
    - GoalValueChanged

### When someone adds or edits a goal check-in (Preview)

- Operation ID:
    - GoalValueOrNoteUpsertTrigger

Trigger for some Power BI goal check-in or note changes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Added or changed goal check-ins or notes.

- Updated goal
    - GoalValueOrNoteUpserted

### When someone assigns a new owner to a goal (Preview)

- Operation ID:
    - GoalsAssignedTrigger

When someone assigns a new owner to a Power BI goal.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Owner | owner |  | email | E-mail of an owner. Can be yours. Can be empty when tracking any owner. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Assigned goals info.

- Assigned
    - GoalsAssigned

### When status of a goal changes (Preview)

- Operation ID:
    - GoalStatusChangeTrigger

When status of some Power BI goal changes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workspace | groupid | True | string | The unique identifier of the workspace. |
| Scorecard id | scorecardId | True | string | The unique identifier of the scorecard. |
| Goal id | goalId | True | string | The unique identifier of the goal. |
| Polling interval (sec) | pollingInterval | True | number | Number of seconds between checks for new data. Minimum is 300. |

#### Returns

Changed goal properties.

- Changed goal
    - GoalStatusChanged

## Definitions

### QueryExecutionResults

Results of query execution.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| First table rows | firstTableRows | array of object | Query results as an array of rows. |

### CreatedScorecard

Created scorecard.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the scorecard. |

### ListedScorecards

Entire response body.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Scorecards | value | array of ListedScorecard | The list of scorecards. |

### ListedScorecard

Scorecard.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the scorecard. |
| Name | name | string | The name of the scorecard. |
| Contact | contact | string | Contact information for the scorecard. |

### FetchedGoals

Entire response body.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Goals | value | array of FetchedGoal | The list of the goals. |

### FetchedGoal

Goal information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the goal. |
| Name | name | string | The name of the goal. |
| Owner | owner | email | The email address of the goal's owner. |
| Start date | startDate | date | The start date for the goal. Example: 2021-07-15. |
| Completion date | completionDate | date | The due date for the goal to be completed by. Example: 2021-07-29. |
| Parent goal id | parentId | string | If this goal is a subgoal, the unique id of its parent goal. |
| Current value | currentValue | number | The current value of the goal being tracked. |
| Current value timestamp | currentValueTimestamp | date | The timestamp when the current value of the goal was set. |
| Target value | targetValue | number | The target value of the goal. |
| Target value timestamp | targetValueTimestamp | date | The timestamp when the target value of the goal was set. |
| Status | status | string | The status of the goal. |
| Status timestamp | statusTimestamp | date | The timestamp when the status of the goal was set. |
| Frequency | cycle | string | Tracking cycle frequency interval shown on this goal's visuals. |
| Tracking cycle date | cyclePeriod | date | Date to find out extra properties of tracking cycle. |

### GoalChanged

Changed goal properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the goal. |
| Old name | oldName | string | The name of the goal. |
| Old owner | oldOwner | email | The email address of the goal's owner. |
| Old start date | oldStartDate | date | The start date for the goal. Example: 2021-07-15. |
| Old completion date | oldCompletionDate | date | The due date for the goal to be completed by. Example: 2021-07-29. |
| Old parent goal id | oldParentId | string | If this goal is a subgoal, the unique id of its parent goal. |
| Old current value | oldCurrentValue | number | The current value of the goal being tracked. |
| Old target value | oldTargetValue | number | The target value of the goal. |
| Old status | oldStatus | string | The status of the goal. |
| Old Frequency | oldCycle | string | Old tracking cycle frequency interval shown on this goal's visuals. |
| Old tracking cycle date | oldCyclePeriod | date | Old date to find out extra properties of tracking cycle. |
| New name | newName | string | The name of the goal. |
| New owner | newOwner | email | The email address of the goal's owner. |
| New start date | newStartDate | date | The start date for the goal. |
| New completion date | newCompletionDate | date | The due date for the goal to be completed by. |
| New parent goal id | newParentId | string | If this goal is a subgoal, the unique id of its parent goal. |
| New current value | newCurrentValue | number | The current value of the goal being tracked. |
| New target value | newTargetValue | number | The target value of the goal. |
| New status | newStatus | string | The status of the goal. |
| New Frequency | newCycle | string | New tracking cycle interval shown on this goal's visuals. |
| New tracking cycle date | newCyclePeriod | date | New date to find out extra properties of tracking cycle. |
| List of changes | changeList | string | Comma separated list of changes. Example: 'status,currentValue'. |

### GoalStatusChanged

Changed goal properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the goal. |
| Old status | oldStatus | string | The status of the goal. |
| New status | newStatus | string | The status of the goal. |

### GoalValueChanged

Changed goal properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique identifier of the goal. |
| Old current value | oldCurrentValue | number | The current value of the goal being tracked. |
| New current value | newCurrentValue | number | The current value of the goal being tracked. |

### GoalRefreshIssues

Goal refresh failure issues.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Issues | issues | array of GoalRefreshIssue | Goal refresh issues. |

### GoalRefreshIssue

Goal refresh issue.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connection type | connectionType | string | The connection type, either Current or Target. |
| Timestamp | timestamp | string | The timestamp of when the failed refresh happened. |
| Error message | message | string | Description of the error. |

### GoalsAssigned

Assigned goals info.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Goals | assignedGoals | array of object | The list of goals that were assigned to the new owner. |
| Id | assignedGoals.id | string | Unique id of the goal. |
| Scorecard id | assignedGoals.scorecardId | string | The unique identifier of the scorecard. |
| Name | assignedGoals.name | string | The name of the goal. |
| Owner | assignedGoals.owner | string | The new owner that the goal was assigned to. |
| Last modified by | assignedGoals.lastModifiedBy | string | The user who last modified the goal. |
| Start date | assignedGoals.startDate | date | The start date for the goal. |
| Completion date | assignedGoals.completionDate | date | The date for the goal to be completed by. |

### GoalValueOrNoteUpserted

Added or changed goal check-ins or notes.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Check-ins | values | array of object | Added or updated check-ins. |
| Date | values.timestamp | date | The date that the check-in was made. |
| Value | values.value | number | The value of the goal at the time of check-in. |
| Status | values.status | string | The status of the goal at the time of check-in. |
| Notes | notes | array of object | Added or changed notes. |
| Check-in date | notes.valueTimestamp | date | The date of the check-in that this note was added to. |
| Text | notes.body | string | Text of the newly added note. |
| Created time | notes.createdTime | datetime | The date the note was created. |

### GoalNotes

The list of notes.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Text | body | string | The contents of the note. |
| Created time | createdTime | datetime | The date the note was created. |

### EvaluatedAlert

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Alert title | alertTitle | string | The title of the alert. |
| Alert threshold | alertThreshold | number | The threshold at which the alert is triggered. |
| Is alert triggered | isAlertTriggered | boolean | A boolean value (true, false) determining Whether or not the alert was triggered. |
| Tile URL | tileUrl | string | URL linking to the dashboard tile where the alert is set up. |
| Tile value | tileValue |  | The value of the tile. |

### binary

This is the basic data type 'binary'.

### object

This is the type 'object'.

## Using this Connector

- [A fun guide to using Power BI with Microsoft Flow](https://ms.flow.microsoft.com/en-us/blog/a-fun-guide-to-using-power-bi-with-microsoft-flow/)
- [Using Flow and Power BI to track social listening through Twitter](https://ms.flow.microsoft.com/en-us/blog/using-flow-and-power-bi-to-track-social-listening-through-twitter/)
- [Show real-time weather data in Power BI](https://ms.flow.microsoft.com/en-us/blog/fotw-weather-in-powerbi/)