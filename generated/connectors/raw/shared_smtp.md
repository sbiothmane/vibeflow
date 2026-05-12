---
layout: Reference
title: SMTP - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/smtp/
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
document_id: cfa775a4-1c3d-39da-b33c-f3fa525bf916
document_version_independent_id: 6b3f07eb-e541-425c-30eb-6dacd8e4d561
updated_at: 2026-03-26T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/smtp/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ddd50f862a19e850e063936ce2b61ad4eec06165/docs/smtp/index.yml
git_commit_id: ddd50f862a19e850e063936ce2b61ad4eec06165
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: smtp/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/smtp/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 3af7f366-4e9e-3a4c-b311-fc8e16df349e
---

# SMTP

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/smtp/icon.png)
SMTP (Simple Mail Transfer Protocol) is an internet standard for email supported by most email processing servers. Connect to SMTP to send email.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Known Issues and Limitations

- Despite the fact that 25 port is supported and not blocked by SMTP connector for making a connection - it can be blocked on any further network infrastructure level like ISP, local network, hardware etc. due to known security vulnerabilities. Therefore 25 port usage is highly not recommended.

## Connector in-depth

For more information about the connector, see the [in-depth section](/en-us/azure/connectors/connectors-create-api-smtp).

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
| SMTP Server Address | string | SMTP Server Address | True |
| User Name | string | User Name |  |
| Password | securestring | Password |  |
| SMTP Server Port | int | SMTP Port Number (example: 587) |  |
| Enable SSL? | bool | Enable SSL? (True/False) |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Send Email (V3) | This operation sends an email to one or more recipients. |
| --- | --- |
| Send Email [DEPRECATED] | This action has been deprecated. Please use [Send Email (V3)](/en-us/connectors/smtp/#send-email-%28v3%29) instead.<br><br>~~This operation sends an email to one or more recipients.~~ |
| Send Email [DEPRECATED] | This action has been deprecated. Please use [Send Email (V3)](/en-us/connectors/smtp/#send-email-%28v3%29) instead.<br><br>~~This operation sends an email to one or more recipients.~~ |

### Send Email (V3)

- Operation ID:
    - SendEmailV3

This operation sends an email to one or more recipients.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From | From |  | email | Email address of sender like sender@domain.com |
| To | To |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| CC | CC |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| Subject | Subject |  | string | Email subject |
| Body | Body |  | html | Email body |
| Bcc | Bcc |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com. |
| Importance | Importance |  | string | Importance of the email (High, Normal, or Low) |
| Read Receipt | ReadReceipt |  | email | Specify email address for Read receipt |
| Delivery Receipt | DeliveryReceipt |  | email | Specify email address for Delivery receipt |
| Content data | ContentData | True | byte | Content data |
| Content type | ContentType | True | string | Content type |
| File name | FileName |  | string | File name |
| Content id | ContentId |  | string | Content id |

### Send Email [DEPRECATED]

- Operation ID:
    - SendEmailV2

This action has been deprecated. Please use [Send Email (V3)](/en-us/connectors/smtp/#send-email-%28v3%29) instead.

~~This operation sends an email to one or more recipients.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From | From |  | email | Email address of sender like sender@domain.com |
| To | To |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| CC | CC |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| Subject | Subject |  | string | Email subject |
| Body | Body |  | string | Email body |
| Is HTML | IsHtml |  | boolean | Send the email as HTML (true/false) |
| Bcc | Bcc |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com. |
| Importance | Importance |  | string | Importance of the email (High, Normal, or Low) |
| Read Receipt | ReadReceipt |  | email | Specify email address for Read receipt |
| Delivery Receipt | DeliveryReceipt |  | email | Specify email address for Delivery receipt |
| Content data | ContentData | True | byte | Content data |
| Content type | ContentType | True | string | Content type |
| File name | FileName |  | string | File name |
| Content id | ContentId |  | string | Content id |

### Send Email [DEPRECATED]

- Operation ID:
    - SendEmail

This action has been deprecated. Please use [Send Email (V3)](/en-us/connectors/smtp/#send-email-%28v3%29) instead.

~~This operation sends an email to one or more recipients.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From | From |  | email | Email address of sender like sender@domain.com |
| To | To |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| CC | CC |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com |
| Subject | Subject |  | string | Email subject |
| Body | Body |  | string | Email body |
| Is HTML | IsHtml |  | boolean | Send the email as HTML (true/false) |
| Bcc | Bcc |  | email | Specify email addresses separated by semicolons like recipient1@domain.com;recipient2@domain.com. |
| Importance | Importance |  | string | Importance of the email (High, Normal, or Low) |
| Read Receipt | ReadReceipt |  | email | Specify email address for Read receipt |
| Delivery Receipt | DeliveryReceipt |  | email | Specify email address for Delivery receipt |
| File name | FileName |  | string | File name |
| Content id | ContentId |  | string | Content id |
| Content data | ContentData | True | string | Content data (base64 encoded for streams and as-is for string) |
| Content type | ContentType | True | string | Content type |
| Content Transfer Encoding | ContentTransferEncoding | True | string | Content Transfer Encoding (base64 or none) |

#### Returns

- response
    - string

## Definitions

### string

This is the basic data type 'string'.