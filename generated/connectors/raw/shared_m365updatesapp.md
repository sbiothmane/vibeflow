---
layout: Reference
title: Updates App (Microsoft 365) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/m365updatesapp/
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
document_id: fb969388-b127-c273-c364-d106cea9bdd9
document_version_independent_id: fb969388-b127-c273-c364-d106cea9bdd9
updated_at: 2025-11-14T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/m365updatesapp/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/48a9375046661d90e1473a500afeee4dff58d05f/docs/m365updatesapp/index.yml
git_commit_id: 48a9375046661d90e1473a500afeee4dff58d05f
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: m365updatesapp/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/m365updatesapp/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/63959238-cb90-4871-a33d-4a5519097e47
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/78d87f42-5582-4a6b-90be-7db2f12b34e6
platformId: a11893fd-1088-dea8-5698-c88385bd9847
---

# Updates App (Microsoft 365)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1780/1.0.1780.4444/m365updatesapp/icon.png)
Updates in Microsoft Teams is an app that saves people time and energy by helping them create, submit, and review all their updates right in the flow of work.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure Government regions  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com/teams |
| Email | reportfc@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | [https://learn.microsoft.com/en-us/microsoftteams/manage-updates-app](/en-us/microsoftteams/manage-updates-app) |
| Privacy policy | https://privacy.microsoft.com/privacystatement |
| Categories | Productivity |

Updates is a Microsoft Teams app that allows you to create, submit, and review updates. People can easily see their employee updates, check-ins, and reports in one place to make sure the team is on track for success, whether those are recurring processes that happen on a regular basis or in-the-moment updates that might be needed at any time. Updates makes it easy for you to manage these all in one place. Updates connector enables Updates in workflows and offers users more value.

## Prerequisites

Required permissions and licenses You need permission for the following items to deploy Updates: -Permissions to create a Microsoft Dataverse database. -An account on powerautomate.microsoft.com. -Administrator Role in your target environment. -License for Power Automate, Office 365, or Dynamics 365. -License for Microsoft Forms is required for users to set up new templates.

Storage with Microsoft Dataverse The Common Data Model (CDM) is the shared data language used by business and analytical applications in the Microsoft Dataverse. It consists of a set of standardized, extensible data schemas published by Microsoft and our partners that enables consistency of data and its meaning across applications and business processes. Learn more about the Common Data Model.

## How to get credentials

Updates connector needs user authentication of Microsoft Entra ID OAuth2.0.

## Get started with your connector

The Updates connector enables creation of Power Automate flows that trigger when an update is sent to the flow owner. For example, when a user of the Updates application sends an update to the flow owner. This can trigger on all received updates or trigger on specific Updates request in the flow.

Use case1: Users want to trigger a flow when they receive a new update through Updates app.

> 
> First, users come to create a flow and select 'When I receive a new update' as the flow trigger.

> 
> Then, users can config other actions followed by the trigger and leverage the dynamic content of the trigger. 

Use case2: Users want to trigger a flow when they receive a new update tied to a specific request through Updates app.

> 
> First, users come to create a low and select 'When I receive a new update tied to a specific request' as the flow trigger.

> 
> Second, users can select one specific request.

> 
> Finally, users can config other actions followed by the trigger and leverage the dynamic content of the trigger.

## Known issues and limitations

1. Triggers cannot be scoped to monitor specific chats or channels yet.
2. Triggers cannot be scoped to fire based on submissions from specific users yet.
3. Triggers cannot be scoped to fire based on specific fields in the update request yet.

## Common errors and remedies

1. The specific update request is disabled so that the trigger doesn't work. The flow maker can enable the update request in Updates app.
2. The Dataverse account of flow maker is disabled so that the trigger doesn't work. The flow maker can contact the tenant admin to enable.

## FAQ

Q1: How can I start to use the trigger of 'When I receive a new update'? A1: Updates is a Microsoft Teams app. When any users submit updates to you through Updates App, the trigger will work.

Q2: How can I start to use the trigger of 'When I receive a new update tied to a specific request'? A2: First, you need to create an update request through Updates App in Microsoft Teams. Secondly, you should be specified as the viewer of the update request. Then, you can select the specific request in the trigger. When the flow is set up, the trigger will work once anyone submit update to you through the specific request.

Q3: What's the difference between the two triggers 'When I receive a new update' and 'When I receive a new update tied to a specific request'? A3: The difference mainly exists in the specific request. For example, you just want the trigger to work when you receive a new update through a request called 'Incident report'. 'Incident report' is a request that asks your members to submit updates when incident happens.

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

## Triggers

| When I receive a new update | This operation triggers when the user receives a new update. |
| --- | --- |
| When I receive a new update tied to a specific request | This operation triggers when the user receive a new update tied to a specific request. The requests can be listed when the user has been specified as the request viewer. |

### When I receive a new update

- Operation ID:
    - ListReceivedReports

This operation triggers when the user receives a new update.

#### Returns

 The outputs of this operation are dynamic. 

### When I receive a new update tied to a specific request

- Operation ID:
    - ListReceivedReportsByReportDefinition

This operation triggers when the user receive a new update tied to a specific request. The requests can be listed when the user has been specified as the request viewer.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Update Request | reportDefinitionId | True | string | Select an update request |

#### Returns

 The outputs of this operation are dynamic.