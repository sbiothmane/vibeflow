---
layout: Reference
title: Azure Log Analytics Data Collector - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureloganalyticsdatacollector/
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
document_id: 1d0739bd-fe72-43e5-9ea7-354eec3b3636
document_version_independent_id: 40cb6b9a-100e-199a-ef3d-d9770514ca44
updated_at: 2025-11-14T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azureloganalyticsdatacollector/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/48a9375046661d90e1473a500afeee4dff58d05f/docs/azureloganalyticsdatacollector/index.yml
git_commit_id: 48a9375046661d90e1473a500afeee4dff58d05f
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureloganalyticsdatacollector/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azureloganalyticsdatacollector/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/9949a35d-c893-4f91-bf98-ae940fc30f5f
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/21f7bb14-0703-4e59-a64b-65dd13773dd3
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: 966e0cf7-9443-37ac-2f31-cb8e9bd31de3
---

# Azure Log Analytics Data Collector

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1780/1.0.1780.4444/azureloganalyticsdatacollector/icon.png)
Azure Log Analytics Data Collector will send data to any Azure Log Analytics workspace.

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
| Default | Parameters for creating connection. | All regions | Shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Workspace ID | string | The unique identifier of the Azure Log Analytics workspace. | True |
| Workspace Key | securestring | The primary or secondary key of the Azure Log Analytics workspace. | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Send Data | Send data to Azure Log Analytics workspace. |
| --- | --- |

### Send Data

- Operation ID:
    - SendData

Send data to Azure Log Analytics workspace.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| JSON Request body | body | True | string |  |
| Custom Log Name | Log-Type | True | string | Name of the custom log. |
| Time-generated-field | time-generated-field |  | string | Represents the original date and time of the record. |

#### Returns

## Using this Connector

- [Azure Log Analytics HTTP Data Collector API](/en-us/azure/log-analytics/log-analytics-data-collector-api)