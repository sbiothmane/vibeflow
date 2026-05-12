---
layout: Reference
title: Power Query Dataflows - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/dataflows/
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
document_id: 4b2f4932-6823-0a6a-fd8a-36130bfb7d95
document_version_independent_id: d11509ca-ed77-6bd0-d2e3-bbb75675050e
updated_at: 2026-03-10T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/dataflows/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/5c5799b61d661d98e1115eac606ed4ed2f3cc6d7/docs/dataflows/index.yml
git_commit_id: 5c5799b61d661d98e1115eac606ed4ed2f3cc6d7
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: dataflows/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/dataflows/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/f9be14f8-8c50-42e5-902f-9be1b3f4de11
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/ffd919fc-9768-405d-a372-71b0f52e07cb
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: ec4f34b5-19d4-baf1-d4a0-9a8d98c4ff7b
---

# Power Query Dataflows

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4610/Dataflows/icon.png)
Dataflows are a self-service, cloud-based, data preparation technology that allows you to ingest, transform and load data into Common Data Service environments, Power BI workspaces or your organization's Azure Data Lake Gen2 account.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://go.microsoft.com/fwlink/?linkid=2134674 |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://go.microsoft.com/fwlink/?linkid=2137921 |
| Categories | Productivity;Data |
| Privacy policy | https://privacy.microsoft.com/en-us/privacystatement |

To use this integration, you will need access to a product dataflows can be created in, such as Power BI, Power Apps etc.

To create a connection, select Sign In. You will be prompted to provide your work or school account, follow the remainder of the screens to create a connection.

You're now ready to start using this integration.

## Known issues and limitations

Power Query Dataflows connector is not supported in sovereign cloud clusters (e.g. China, Germany) other than US Government Community Cloud.

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
| Frequency of trigger polls | 1 | 20 seconds |

## Actions

| Refresh a dataflow | Initiate a dataflow refresh operation. |
| --- | --- |

### Refresh a dataflow

- Operation ID:
    - RefreshDataflow

Initiate a dataflow refresh operation.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Type | workspaceType | True | string | Select workspace or environment |
| Group | groupIdForRefreshDataflow | True | string | The unique identifier of the workspace or environment |
| Dataflow | dataflowIdForRefreshDataflow | True | string | The unique identifier of the dataflow |

#### Returns

The dataflow being refreshed

- Body
    - DataflowModel

## Triggers

| When a dataflow refresh completes | This operation triggers when a dataflow refresh completes. |
| --- | --- |

### When a dataflow refresh completes

- Operation ID:
    - OnRefreshComplete

This operation triggers when a dataflow refresh completes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Type | workspaceType | True | string | Select workspace or environment |
| Group | groupIdForOnRefreshComplete | True | string | The unique identifier of the workspace or environment |
| Dataflow | dataflowIdForOnRefreshComplete | True | string | The unique identifier of the dataflow |

#### Returns

An individual dataflow refresh

- Body
    - RefreshModel

## Definitions

### DataflowModel

The dataflow being refreshed

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Dataflow Name | dataflowName | string | Name of the dataflow |
| Dataflow Id | dataflowId | string | Id of the dataflow |

### RefreshModel

An individual dataflow refresh

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Dataflow Id | dataflowId | string | Id of the dataflow |
| Dataflow Name | dataflowName | string | Name of the dataflow |
| Refresh Type | refreshType | string | Type of the dataflow refresh |
| Start Time | startTime | string | Start time of the dataflow refresh |
| End Time | endTime | string | Completion time of the dataflow refresh |
| Refresh Status | status | string | Status of the dataflow refresh. Possible values are: 'Success', 'Failed', 'Cancelled' |