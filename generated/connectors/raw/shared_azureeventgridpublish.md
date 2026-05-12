---
layout: Reference
title: Azure Event Grid Publish - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureeventgridpublish/
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
document_id: 6beb11cb-c11b-24c1-760d-8bc91716737a
document_version_independent_id: 1bd6a84f-d3c8-dd8a-1e4d-d5161ed7927a
updated_at: 2025-04-24T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azureeventgridpublish/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/63f1cb79629cd01a13220e8a88319b4e7f88925c/docs/azureeventgridpublish/index.yml
git_commit_id: 63f1cb79629cd01a13220e8a88319b4e7f88925c
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureeventgridpublish/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azureeventgridpublish/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/467aaae1-e916-4fcd-a463-5b27f9d4745c
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/fbd4eef5-2258-406b-95d3-2c68fa333b20
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
platformId: d51b3274-fe79-d494-ef40-f69b29496a3c
---

# Azure Event Grid Publish

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/u/shgogna/version-mismatches-special-train/1.0.1670.3520/azureeventgridpublish/icon.png)
Azure Event Grid Publish will publish data to any Azure Event Grid Custom Topic.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | - | Not available |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/event-grid/ |

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
| Topic Endpoint | string | DNS endpoint for the application topic for events. | True |
| Shared Access Signature | securestring | Primary or secondary key for the application topic. | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Publish Event | Publish an event to an Event Grid Custom Topic. |
| --- | --- |

### Publish Event

- Operation ID:
    - PublishEvent

Publish an event to an Event Grid Custom Topic.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| ID | id | True | string | Useful to idenitify individual events. |
| Subject | subject | True | string | Subject for the event. |
| Event Type | eventType | True | string | Type of event being emitted. |
| Event Time | eventTime |  | date-time | Date and time for the emitted event. Empty will default to current time. |

#### Returns