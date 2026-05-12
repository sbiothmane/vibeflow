---
layout: Reference
title: Microsoft Forms - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/microsoftforms/
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
document_id: a9a5a57d-aa82-9c07-5502-bd3be89773dc
document_version_independent_id: 5bdbf2ae-5c31-7a59-56f0-09d568602012
updated_at: 2025-10-06T19:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/MicrosoftForms/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/3364df2c694abf219dcd0b5ad192f99a9c163c61/docs/MicrosoftForms/index.yml
git_commit_id: 3364df2c694abf219dcd0b5ad192f99a9c163c61
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: microsoftforms/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/MicrosoftForms/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/97159432-14a9-4307-a469-d2f2c75f0e33
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/50565c62-5f6b-4687-be38-323113c72c2e
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: e9073128-f6b9-ce65-d918-8ae8fc56d875
---

# Microsoft Forms

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1774/1.0.1774.4397/microsoftforms/icon.png)
Microsoft Forms is a new part of Office 365 Education that allows teachers and students to quickly and easily create custom quizzes, surveys, questionnaires, registrations and more.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions |
| **Power Apps** | - | Not available |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com/en-us/contactus |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://forms.office.com/ |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Collaboration;Data |

## Known issues and limitations

- The connector only works with organizational accounts.
- The trigger does not work for Logic Apps Standard hosted in an internal ASE.
- Group forms will not show up in the drop-down list. In order to trigger the Group forms, the Form Id needs to be added manually. The Form Id can be found in the address bar when you edit the form. Note that you should paste only the part after "FormId=" into the Form Id field in the Flow.
- If you see the "CannotDisableTriggerConcurrency" error while using the Microsoft Forms triggers in the flow, please note that once you enable and disable the concurrency control, it cannot be undone as stated [here](/en-us/power-automate/limits-and-config#concurrency-looping-and-debatching-limits). To workaround this issue, please export the flow and edit the JSON file to remove the "concurrency control" part. That way, the concurrency option will be disabled during the re-import of the flow.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 300 | 60 seconds |
| Frequency of trigger polls | 1 | 86400 seconds |

## Actions

| Get form details | This action retrieves the details of a form |
| --- | --- |
| Get response details | This action retrieves a form response |

### Get form details

- Operation ID:
    - GetFormDetailsById

This action retrieves the details of a form

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Form Id | form\_id | True | string | Unique identifier of the form |

#### Returns

Form details

- Body
    - GetFormDetailsByIdResult

### Get response details

- Operation ID:
    - GetFormResponseById

This action retrieves a form response

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Form Id | form\_id | True | string | Unique identifier of the form |
| Response Id | response\_id | True | integer | Unique identifier of the response |

#### Returns

 The outputs of this operation are dynamic. 

## Triggers

| When a new response is submitted | This operation triggers a flow when a new response is submitted. |
| --- | --- |
| When a new response is submitted [DEPRECATED] | This operation triggers a flow when a new response is submitted. |

### When a new response is submitted

- Operation ID:
    - CreateFormWebhook

This operation triggers a flow when a new response is submitted.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Form Id | form\_id | True | string | Pick a form. |

#### Returns

- Body
    - WebhookPayload

### When a new response is submitted [DEPRECATED]

- Operation ID:
    - GetFormResponses

This operation triggers a flow when a new response is submitted.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Form title | form\_id | True | string | Pick a form. |

#### Returns

 The outputs of this operation are dynamic. 

## Definitions

### WebhookPayload

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| List of response notifications | value | array of object |  |
| Response Id | value.resourceData.responseId | integer | Unique identifier of the response. Use with 'Get response details' action to fetch the content of the form response. |

### GetFormDetailsByIdResult

Form details

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Form title | title | string | Title of the form. |
| Modified date | modifiedDate | string | Datetime when form was last modified. |
| Created date | createdDate | string | Datetime when form was created. |
| Status | status | string | Status of the form. |
| Created by | createdBy | string | User who created the form. |

## Using this Connector

- [Using the Forms Connector with Microsoft Flow](https://go.microsoft.com/fwlink/?linkid=861427)
- [Building flows from scratch that handle Microsoft Forms responses](https://go.microsoft.com/fwlink/?linkid=861430)