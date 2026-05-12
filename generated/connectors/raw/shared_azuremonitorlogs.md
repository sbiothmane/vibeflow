---
layout: Reference
title: Azure Monitor Logs - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azuremonitorlogs/
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
document_id: d0961c18-27ca-5465-7c78-bf28fc383c83
document_version_independent_id: 6ac323e2-362a-e5f2-421d-c0d35529e0e3
updated_at: 2026-03-26T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azuremonitorlogs/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ddd50f862a19e850e063936ce2b61ad4eec06165/docs/azuremonitorlogs/index.yml
git_commit_id: ddd50f862a19e850e063936ce2b61ad4eec06165
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azuremonitorlogs/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azuremonitorlogs/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
- https://authoring-docs-microsoft.poolparty.biz/devrel/07bb3e10-d135-43ff-bc8b-360497cb39fa
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
- https://authoring-docs-microsoft.poolparty.biz/devrel/12e559b9-eaf6-4aee-9af7-62334e15f863
platformId: ffc12cf0-2f9c-6a2a-47ec-60959cd10c46
---

# Azure Monitor Logs

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/azuremonitorlogs/icon.png)
Use this connector to query your Azure Monitor Logs across Log Analytics workspace and Application Insights component, to list or visualize results.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/monitor/ |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| OAuth default | Login using default Microsoft Entra ID app. | All regions | Not shareable |
| Service principal authentication | Use your own Microsoft Entra ID app for service principal authentication. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a LogicApps Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Logic Apps Managed Identity | managedIdentity | Sign in with a Logic Apps Managed Identity | True |

### OAuth default

Auth ID: oauthDefault

Applicable: All regions

Login using default Microsoft Entra ID app.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal authentication

Auth ID: oauthServicePrincipal

Applicable: All regions

Use your own Microsoft Entra ID app for service principal authentication.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client Secret | securestring |  | True |
| Tenant | string |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Run query and list results | Returns each row as its own object. Use this action when you want to work with each row separately in the rest of the workflow. |
| --- | --- |
| Run query and list results V2 (Preview) | Returns each row as its own object. Use this action when you want to work with each row separately in the rest of the workflow. |
| Run query and visualize results | Returns all rows in the result set as a single formatted object. Use this action when you want to use the result set together in the rest of the workflow. |
| Run query and visualize results V2 (Preview) | Returns all rows in the result set as a single formatted object. Use this action when you want to use the result set together in the rest of the workflow. |

### Run query and list results

- Operation ID:
    - QueryData

Returns each row as its own object. Use this action when you want to work with each row separately in the rest of the workflow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptions | True | string | Select subscription |
| Resource Group | resourcegroups | True | string | Select resource group |
| Resource Type | resourcetype | True | string | Select Resource Type |
| Resource Name | resourcename | True | string | Select Resource |
| Query | query | True | string | Specify the query you would like to run |
| Time Range | timerange | True | string | Select Time Range |

#### Returns

 The outputs of this operation are dynamic. 

### Run query and list results V2 (Preview)

- Operation ID:
    - QueryDataV2

Returns each row as its own object. Use this action when you want to work with each row separately in the rest of the workflow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptions | True | string | Select subscription |
| Resource Group | resourcegroups | True | string | Select resource group |
| Resource Type | resourcetype | True | string | Select Resource Type |
| Resource Name | resourcename | True | string | Select Resource |
| body | body | True | dynamic |  |

#### Returns

 The outputs of this operation are dynamic. 

### Run query and visualize results

- Operation ID:
    - VisualizeQuery

Returns all rows in the result set as a single formatted object. Use this action when you want to use the result set together in the rest of the workflow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptions | True | string | Select subscription |
| Resource Group | resourcegroups | True | string | Select resource group |
| Resource Type | resourcetype | True | string | Select Resource Type |
| Resource Name | resourcename | True | string | Select Resource |
| Query | query | True | string | Specify the query you would like to run |
| Time Range | timerange | True | string | Select Time Range |
| Chart Type | visType | True | string | Specify the resulting chart type |

#### Returns

- Body
    - VisualizeResults

### Run query and visualize results V2 (Preview)

- Operation ID:
    - VisualizeQueryV2

Returns all rows in the result set as a single formatted object. Use this action when you want to use the result set together in the rest of the workflow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptions | True | string | Select subscription |
| Resource Group | resourcegroups | True | string | Select resource group |
| Resource Type | resourcetype | True | string | Select Resource Type |
| Resource Name | resourcename | True | string | Select Resource |
| body | body | True | dynamic |  |
| Chart Type | visType | True | string | Specify the resulting chart type. |

#### Returns

- Body
    - VisualizeResults

## Definitions

### VisualizeResults

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Body | body | byte |  |
| Attachment Content | attachmentContent | byte |  |
| Attachment Name | attachmentName | string |  |