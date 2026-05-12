---
layout: Reference
title: Process Mining - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/processmining/
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
document_id: c7143e8a-6ea4-6850-1d81-19dc6f926ae8
document_version_independent_id: c7143e8a-6ea4-6850-1d81-19dc6f926ae8
updated_at: 2025-11-14T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/processmining/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/48a9375046661d90e1473a500afeee4dff58d05f/docs/processmining/index.yml
git_commit_id: 48a9375046661d90e1473a500afeee4dff58d05f
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: processmining/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/processmining/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
platformId: e4dd0c9e-b1d1-1439-6f43-a7499c24d1e4
---

# Process Mining

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1780/1.0.1780.4444/processmining/icon.png)
Enable Access to Process Mining Data to integrate to the Power Platform

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Process Mining |
| URL | [https://learn.microsoft.com/en-us/connectors/processmining/](/en-us/connectors/processmining/) |
| Email | iaparisips@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | [https://learn.microsoft.com/en-us/power-automate/process-advisor-overview](/en-us/power-automate/process-advisor-overview) |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Business Intelligence |

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
| Non-Get requests per connection | 300 | 3600 seconds |

## Actions

| Process Mining MCP (Preview) (Preview) | MCP Server for Process Mining Service |
| --- | --- |

### Process Mining MCP (Preview) (Preview)

- Operation ID:
    - InvokeMCP

MCP Server for Process Mining Service

## Triggers

| When a Process data is refreshed (Preview) | The Flow is triggered every time data refresh on the process is successfully finished |
| --- | --- |

### When a Process data is refreshed (Preview)

- Operation ID:
    - PollProcessMiningTrigger

The Flow is triggered every time data refresh on the process is successfully finished

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Process | processId | True | string | The id of the process. |
| View | viewId | True | string | The id of the view. |
| Business rule | businessRuleId | True | string | The id of the Business Rule. |

#### Returns

- Body
    - TriggerData

## Definitions

### BusinessRuleStatisticsMetadataWithJson

Details of an item from the set returned by the business rule evaluation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | Item name (CaseID for case scope business rule). |
| Index | valueIndex | integer | Item index (technical identificator of the item). |
| Start Date | startDate | integer | Item start date and time. |
| End Date | endDate | integer | Item end date and time. |
| Event Count | count | integer | Number of events for an item (no. of events in case for case scope business rule). |
| Metric Value | value | string | Result of the business rule metric evaluation for the item. |
| Severity | category | integer | Severity evaluation based on the Metric Value for the item. |

### BusinessRuleSummaryStatisticsWithJson

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Item Count | totalCount | integer | Number of all items returned by the business rule evaluation. |
| Error Count | errorCount | integer | Number of items fitting the Error severity condition. |
| Warning Count | warningCount | integer | Number of items fitting the Warning severity condition. |
| OK Count | okCount | integer | Number of items fitting the OK severity condition. |
| Undefined Count | undefinedCount | integer | Number of items not fitting Error, Warning or OK severity condition. |

### TriggerData

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| businessRuleSummaryStatistics | businessRuleSummaryStatistics | BusinessRuleSummaryStatisticsWithJson |  |
| Business Rule Items | businessRuleStatistics | array of BusinessRuleStatisticsMetadataWithJson | Set of items returned by the business rule evaluation. |