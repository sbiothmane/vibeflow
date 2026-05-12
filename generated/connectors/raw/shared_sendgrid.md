---
layout: Reference
title: SendGrid - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/sendgrid/
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
document_id: 318526ef-736e-a42e-87df-2ae3f5b5a8a7
document_version_independent_id: 8333dcc0-24a0-ee5f-1be7-875ec575d806
updated_at: 2025-10-27T19:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/SendGrid/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/0a1ebb8b0c9b05f58fcdeb924d02b27324fd49c9/docs/SendGrid/index.yml
git_commit_id: 0a1ebb8b0c9b05f58fcdeb924d02b27324fd49c9
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: sendgrid/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/SendGrid/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 92a20999-50e6-759f-dd48-557f10130be1
---

# SendGrid

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1778/1.0.1778.4420/sendgrid/icon.png)
SendGrid Connection Provider lets you send email and manage recipient lists.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://sendgrid.com/ |
| Privacy policy | https://www.twilio.com/legal/privacy |

## Known issues and limitations

- SendGrid attachments don't use a format that's compatible with the other connectors. To resolve this problem when submitting an attachment, explicitly set the attachment fields, such as Content, ContentType, and Attachment File Name, for each attachment file.

## Requirements

- A [SendGrid account](https://www.sendgrid.com/) and a [SendGrid API key](https://sendgrid.com/docs/ui/account-and-settings/api-keys/) that authorizes connections to your SendGrid account

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
| SendGrid Api Key | securestring | SendGrid Api Key | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Add a global suppression | Add a global suppression |
| --- | --- |
| Add recipient to list | Add an individual recipient to a recipient list. |
| Check if email is in unsubscribed email list | Check if email is in unsubscribed email list. |
| Delete an email from bounce list | Delete an email address from your bounce list. |
| Delete the global suppression | Delete the global suppression |
| Get bounce for an email | Get a specific bounce for a given email address. |
| Get the global suppression | Get the global suppression |
| Send email (V2) [DEPRECATED] | This action has been deprecated. Please use [Send email (V4)](/en-us/connectors/sendgrid/#send-email-%28v4%29) instead.<br><br>~~Sends an email (V2). Limited to 1000 recipients.~~ |
| Send email (V3) [DEPRECATED] | This action has been deprecated. Please use [Send email (V4)](/en-us/connectors/sendgrid/#send-email-%28v4%29) instead.<br><br>~~Sends an email (V3). Limited to 1000 recipients.~~ |
| Send email (V4) | Sends an email (V4). Limited to 1000 recipients. |

### Add a global suppression

- Operation ID:
    - AddGlobalSuppression

Add a global suppression

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Recipient email | recipient\_emails |  | array of string | Recipient email |

#### Returns

Add global suppress Response

- Body
    - AddGlobalSuppressRequestAndResponse

### Add recipient to list

- Operation ID:
    - AddRecipientToList

Add an individual recipient to a recipient list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| List id | listId | True | string | Unique id of the recipient list. |
| Recipient id | recipientId | True | string | Unique id of the recipient. |

#### Returns

- response
    - object

### Check if email is in unsubscribed email list

- Operation ID:
    - CheckEmailIsInUnsubscribesList

Check if email is in unsubscribed email list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email | email | True | string | The email to check. |

#### Returns

Email Is Unsubscribed Response

- Email Is Unsubscribed Response
    - EmailIsUnsubscribedResponse

### Delete an email from bounce list

- Operation ID:
    - DeleteBounce

Delete an email address from your bounce list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email | email | True | string | The email to delete. |

### Delete the global suppression

- Operation ID:
    - DeleteGlobalSuppression

Delete the global suppression

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email | email | True | string | The email to delete. |

### Get bounce for an email

- Operation ID:
    - GetBounce

Get a specific bounce for a given email address.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email | email | True | string | The email to check. |

#### Returns

List of bounces

- Items
    - Bounces

### Get the global suppression

- Operation ID:
    - GetGlobalSuppression

Get the global suppression

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email | email | True | string | The email to check. |

#### Returns

Add global suppress Response

- Body
    - GetGlobalSuppressResponse

### Send email (V2) [DEPRECATED]

- Operation ID:
    - SendEmailApiV3

This action has been deprecated. Please use [Send email (V4)](/en-us/connectors/sendgrid/#send-email-%28v4%29) instead.

~~Sends an email (V2). Limited to 1000 recipients.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From | from | True | email | Origination address of your email. Must be a valid email address from your domain |
| From name | fromname |  | string | Origination name of your email |
| To | to | True | email | Valid email addresses separated by a semicolon or comma |
| To names | toname |  | string | A display name for each email address separated by a semicolon or comma |
| Subject | subject | True | string | Subject of your email |
| Email body | text | True | string | Content of your email |
| Is Html | ishtml |  | boolean | Specify whether the content of the email is HTML or plain text |
| CC | cc |  | email | Valid email addresses separated by a semicolon or comma |
| CC names | ccname |  | string | A display name for each CC email address separated by a semicolon or comma |
| Bcc | bcc |  | email | Valid email addresses separated by a semicolon or comma |
| BCC names | bccname |  | string | A display name for each BCC email address separated by a semicolon or comma |
| Attachment | file |  | byte | Attachment file content |
| Attachment file name | filename |  | string | Attachment file name |

#### Returns

- response
    - object

### Send email (V3) [DEPRECATED]

- Operation ID:
    - SendEmailV3

This action has been deprecated. Please use [Send email (V4)](/en-us/connectors/sendgrid/#send-email-%28v4%29) instead.

~~Sends an email (V3). Limited to 1000 recipients.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From | from | True | email | Origination address of your email. Must be a valid email address from your domain |
| From name | fromname |  | string | Origination name of your email |
| To | to | True | email | Valid email addresses separated by a semicolon or comma |
| To names | toname |  | string | A display name for each email address separated by a semicolon or comma |
| Subject | subject | True | string | Subject of your email |
| Email body | text | True | html | Content of your email |
| CC | cc |  | email | Valid email addresses separated by a semicolon or comma |
| CC names | ccname |  | string | A display name for each CC email address separated by a semicolon or comma |
| Bcc | bcc |  | email | Valid email addresses separated by a semicolon or comma |
| BCC names | bccname |  | string | A display name for each BCC email address separated by a semicolon or comma |
| Attachment | file |  | byte | Attachment file content |
| Attachment file name | filename |  | string | Attachment file name |

#### Returns

- response
    - object

### Send email (V4)

- Operation ID:
    - SendEmailV4

Sends an email (V4). Limited to 1000 recipients.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Content | content |  | byte | Attachment file content |
| Name | filename |  | string | Attachment file name |
| ContentType | contenttype |  | string | Type of content in the attachment. |
| From | from | True | email | Origination address of your email. Must be a valid email address from your domain |
| From name | fromname |  | string | Origination name of your email |
| To | to | True | email | Valid email addresses separated by a semicolon or comma |
| To names | toname |  | string | A display name for each email address separated by a semicolon or comma |
| Subject | subject | True | string | Subject of your email |
| Email body | text | True | html | Content of your email |
| CC | cc |  | email | Valid email addresses separated by a semicolon or comma |
| CC names | ccname |  | string | A display name for each CC email address separated by a semicolon or comma |
| Bcc | bcc |  | email | Valid email addresses separated by a semicolon or comma |
| BCC names | bccname |  | string | A display name for each BCC email address separated by a semicolon or comma |

#### Returns

- response
    - object

## Definitions

### AddGlobalSuppressRequestAndResponse

Add global suppress Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recipient email | recipient\_emails | array of string | Recipient email |

### GetGlobalSuppressResponse

Add global suppress Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recipient email | recipient\_email | string | Recipient email |

### Bounces

List of bounces

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | Bounce | Get Bounce Response |

### EmailIsUnsubscribedResponse

Email Is Unsubscribed Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Is Email Unsubscribed | isUnsubscribed | boolean | Is Email Unsubscribed |

### Bounce

Get Bounce Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Created | created | integer | Created |
| Email | email | string | Email |
| Reason | reason | string | Reason |
| Status | status | string | Status |

### object

This is the type 'object'.