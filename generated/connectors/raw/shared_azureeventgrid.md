---
layout: Reference
title: Azure Event Grid - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureeventgrid/
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
document_id: 03aabcb1-0433-4768-ee0d-4718ffdbf7cb
document_version_independent_id: bfe353e1-c973-f692-9d2e-259449c8db6b
updated_at: 2025-04-24T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azureeventgrid/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/63f1cb79629cd01a13220e8a88319b4e7f88925c/docs/azureeventgrid/index.yml
git_commit_id: 63f1cb79629cd01a13220e8a88319b4e7f88925c
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureeventgrid/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azureeventgrid/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/467aaae1-e916-4fcd-a463-5b27f9d4745c
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/fbd4eef5-2258-406b-95d3-2c68fa333b20
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
platformId: 1a64cf62-67b8-92a7-0bf1-03c22e9ebcdd
---

# Azure Event Grid

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1680/1.0.1680.3652/azureeventgrid/icon.png)
Azure Event Grid is an eventing backplane that enables event based programing with pub/sub semantics and reliable distribution & delivery for all services in Azure as well as third parties.

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
| Bring your own application | Log in using your own Microsoft Entra ID app. | Integration service environments (ISE) only | Not shareable |
| Default | Log in with your credentials. | All regions except Integration service environments (ISE) | Not shareable |

### Bring your own application

Auth ID: oauthBYOA

Applicable: Integration service environments (ISE) only

Log in using your own Microsoft Entra ID app.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string | Tenant ID of your Microsoft Entra ID application. | True |
| Client ID | string | Client (or Application) ID of your Microsoft Entra ID application. | True |
| Client Secret | securestring | Client secret of your Microsoft Entra ID application. | True |

### Default

Applicable: All regions except Integration service environments (ISE)

Log in with your credentials.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Triggers

| When a resource event occurs | When an Azure Event Grid subscription fires an event. |
| --- | --- |

### When a resource event occurs

- Operation ID:
    - CreateSubscription

When an Azure Event Grid subscription fires an event.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Type | resourceType | True | string | Type of resource to create event subscription on. |
| Subscription Name | subscriptionName |  | string | Name to use for the new Event Grid subscription. |
| Resource Name | topic | True | string | Name of the resource to listen to for events. |
| Prefix Filter | subjectBeginsWith |  | string | A filter like: Sample-workitems/{name} |
| Suffix Filter | subjectEndsWith |  | string | A filter like: .jpg |
| Event Type | includedEventTypes |  | array of string | Type of event to listen for. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Event data | data |  | Contains the data from the event. |
| Event Time | eventTime | date-time | Time of the event. |
| Event Type | eventType | string | Type of the event. |
| ID | id | string | ID for the event. |
| Subject | subject | string | Subject of the event. |
| Topic | topic | string | Resource that fired the event. |