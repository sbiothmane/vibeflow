---
layout: Reference
title: Power Apps Notification - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerappsnotification/
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
document_id: 6c6fb72f-3705-79a7-3f69-f333a8e0cb27
document_version_independent_id: 7375a2a6-7743-fe3b-0269-165f58ab7e48
updated_at: 2025-10-29T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/PowerAppsNotification/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0/docs/PowerAppsNotification/index.yml
git_commit_id: d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerappsnotification/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/PowerAppsNotification/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: 06d32d61-6b29-41fb-5f68-db85931d9610
---

# Power Apps Notification

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/powerappsnotification/icon.png)
Send push notifications to apps created with Power Apps. Trigger them from Flows or other apps.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://powerapps.microsoft.com/ |

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
| Target application (The URL or ID shown under app details tab) | string | The Power Apps URL or ID. | True |

## Actions

| Send push notification | Send a push notification to the app specified in the Push Notification connection setup. |
| --- | --- |

### Send push notification

- Operation ID:
    - SendPushNotification

Send a push notification to the app specified in the Push Notification connection setup.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Recipients | recipients |  | array of string | List of user emails or user principle identifiers. |
| Message | message |  | string | Message body for the push notification. |
| Open App | openApp |  | boolean | Whether to open or not the app when user taps on the push notification. |
| Parameters | params |  | object | Key value parameters to pass with the notification. |