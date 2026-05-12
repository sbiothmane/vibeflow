---
layout: Reference
title: Power Apps Notification V2 - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerappsnotificationv2/
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
document_id: 3e319372-14e5-4c26-529c-ee49cfd7d011
document_version_independent_id: a3bc5df8-92f9-1f45-12a5-9b3fb4ed4668
updated_at: 2025-10-29T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/powerappsnotificationv2/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0/docs/powerappsnotificationv2/index.yml
git_commit_id: d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerappsnotificationv2/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/powerappsnotificationv2/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: 5a801c00-645e-81ae-af7c-221da9006b40
---

# Power Apps Notification V2

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/powerappsnotificationv2/icon.png)
Send push notifications to apps created with Power Apps, Field Service, and Sales. Trigger them from Flows or other apps.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://powerapps.microsoft.com/support/ |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://powerapps.microsoft.com/ |
| Privacy policy | https://privacy.microsoft.com |
| Categories | Business Management;IT Operations |

Use this connector to send push notifications to canvas Power Apps, model-driven Power Apps, Field Service, and Sales.

## Prerequisites

Push notification recipients must have the [Power Apps](https://powerapps.microsoft.com/downloads/), [Field Service (Dynamics 365)](/en-us/dynamics365/field-service/mobile-2020-power-platform), or [Dynamics 365 Sales](/en-us/dynamics365/sales-enterprise/sales-mobile/dynamics-365-sales-mobile-app) mobile app installed. To get notifications, recipients must:

- Open the app at least once.
- Sign in.
- Accept the mobile OS setting to allow notifications.

## Known issues and limitations

- Push notifications to views are not supported for the Sales app.

## Actions

| Send push notification V2 | Send a push notification to any app created in Power Apps, Field Service, or Sales. |
| --- | --- |

### Send push notification V2

- Operation ID:
    - SendPushNotificationV2

Send a push notification to any app created in Power Apps, Field Service, or Sales.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Mobile app | playerType | True | string | The mobile app hosting your app. |
| Your app | app | True | string | Your app receiving the push notification. |
| Recipients | recipients | True | array of string | List of user emails or user principle identifiers. |
| Message | message | True | string | Message body for the push notification. |
| Open app | openApp | True | boolean | Whether to open or not the app when user taps on the push notification. |
| dynamicParams | dynamicParams | True | object | The dynamic parameters. |