---
layout: Reference
title: Notifications - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/flowpush/
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
document_id: 08c4052e-505b-7fe0-8e22-02babc35e8fd
document_version_independent_id: 53d8826f-35bf-d089-efa9-5b48e19d6da4
updated_at: 2025-10-28T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/FlowPush/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/8206e49762de48d8b819bd5b28fb62edb257ef8d/docs/FlowPush/index.yml
git_commit_id: 8206e49762de48d8b819bd5b28fb62edb257ef8d
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: flowpush/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/FlowPush/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: 3306fdc1-9c83-b2a0-4eb2-7f574067f991
---

# Notifications

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/flowpush/icon.png)
The notification service enables notifications created by a flow to go to your email account or Microsoft Power Automate mobile app.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Department of Defense (DoD) |
| **Power Apps** | - | Not available |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Samuel L. Banina |
| URL | [Microsoft Power Automate Support](http://make.powerautomate.com/support/) |
| Email | saban@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

### General Limits

| Name | Value |
| --- | --- |
| Connections per account | 1 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| Send me an email notification [DEPRECATED] | 5 | 300 seconds |

## Actions

| Send me a mobile notification | Sends a push notification to your Microsoft Power Automate mobile app. |
| --- | --- |
| Send me an email notification [DEPRECATED] [DEPRECATED] | Sends an email notification to the account you signed in to Microsoft Power Automate with. Please note that this action is now retired. For more information please visit [this site](https://community.powerplatform.com/forums/thread/details/?threadid=65cdc48a-fbdc-ef11-a730-000d3a14035a). |

### Send me a mobile notification

- Operation ID:
    - SendNotification

Sends a push notification to your Microsoft Power Automate mobile app.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | notificationText | True | string | Create a notification message |
| Link | uri |  | string | Include a link in the notification |
| Link label | label |  | string | The display name for the link |

### Send me an email notification [DEPRECATED] [DEPRECATED]

- Operation ID:
    - SendEmailNotification

Sends an email notification to the account you signed in to Microsoft Power Automate with. Please note that this action is now retired. For more information please visit [this site](https://community.powerplatform.com/forums/thread/details/?threadid=65cdc48a-fbdc-ef11-a730-000d3a14035a).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subject | notificationSubject | True | string | Notification email subject |
| Body | notificationBody | True | string | Notification email body |