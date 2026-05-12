---
layout: Reference
title: Standard approvals - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/approvals/
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
document_id: cc3be4e8-204a-a1f5-21ea-a289dc8a0583
document_version_independent_id: 167b2834-1025-136b-9c25-4ba80e3c3410
updated_at: 2025-08-25T19:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/Approvals/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d2b71000103744b7892d08f9dca3f867605788ac/docs/Approvals/index.yml
git_commit_id: d2b71000103744b7892d08f9dca3f867605788ac
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: approvals/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/Approvals/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/68cb9039-df60-49b0-8ef8-89ad96497f63
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/725b6df3-93e8-472d-834e-e7e0d2953d35
platformId: 83a82689-e0b6-8d4c-ca93-3bb3fc9b9c96
---

# Standard approvals

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1758/1.0.1758.4260/approvals/icon.png)
Enables standard approvals in workflows.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://microsoft.com |
| Privacy policy | https://www.microsoft.com/privacy/privacystatement |
| Categories | Productivity |

## Known issues and limitations

- Approvals timestamps will always be shown in UTC.
- The creator of the flow will ***always*** be shown in the Approval details (email content and all clients). This is to prevent spoofing of approval sender identities.
- Actionable Approval mails in Outlook are not supported for Guest users in a tenant. Guest users will need to go to the Power Automate portal in order to act on an approval.
- Approvals that rely on custom responses can fail if sent to many users with the type set to "Everyone must approve", due to data size limitations of the results field.
- Approvals with multiple attachments of the same name cannot be created. Attachment names need to be unique in order for Approval notifications to be sent.
- Approval emails are always sent from a standard email account. For security purposes approval emails are actionable only when sent from this standard email account. Users can choose to send their own email notification with a link to the approval, but those emails will not be actionable, i.e. you cannot approve/reject the approval from within the email.
- Valid responses to a Basic or Await all approval type are "Approve" and "Reject". These responses are case-sensitive.

## Approval recipient format

The AssignedTo field can accept user identities in the form of:

- Email address (not just the primary)
- User Principal Name (UPN)
- Microsoft Entra ID user id (in the format XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)

To specify multiple users, use a semi-colon (;) to separate user identifies. User types may be mixed.

**Example:**

> 
> jsmith@contoso.com;3b3ba145-7da5-414d-b84f-a9835eb71f3b;jane.doe@contoso.com

## Approval Details

Markdown syntax is supported for custom styling in the details field of approvals. See [Approvals Markdown Support](https://aka.ms/approvaldetails) for documentation

### General Limits

| Name | Value |
| --- | --- |
| Connections per account | 1 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| Approval Create requests per flow | 50 | 60 seconds |
| Approval Non-Create requests per flow | 500 | 60 seconds |

## Actions

| Create an approval | Starts an automated approval, but does not wait for the approval to complete. The approval is cancelable. |
| --- | --- |
| Start and wait for an approval | Starts an automated approval and then waits for it to complete. The approval is cancelable. |
| Start and wait for an approval [DEPRECATED] | This action has been deprecated. Please use [Start and wait for an approval](/en-us/connectors/approvals/#start-and-wait-for-an-approval) instead.<br><br>~~Starts an automated approval and then waits for it to complete. The approval is only canceled on timeout. (Deprecated)~~ |
| Start and wait for an approval of text | Starts an automated text approval process and then waits for it to complete. The approval is cancelable. |
| Start and wait for an Approve or Reject - First to respond approval [DEPRECATED] | This action has been deprecated. Please use [Start and wait for an approval](/en-us/connectors/approvals/#start-and-wait-for-an-approval) instead.<br><br>~~Starts an automated approval and then waits for it to complete. The approval is only canceled on timeout. (Deprecated)~~ |
| Wait for an approval | Waits for a specified approval to complete. |

### Create an approval

- Operation ID:
    - CreateAnApproval

Starts an automated approval, but does not wait for the approval to complete. The approval is cancelable.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Approval type | approvalType | True | string | Select an approval type. |
| ApprovalCreationInput | ApprovalCreationInput | True | dynamic | The dynamic input for creating an approval of the specified type. |

#### Returns

 The outputs of this operation are dynamic. 

### Start and wait for an approval

- Operation ID:
    - StartAndWaitForAnApproval

Starts an automated approval and then waits for it to complete. The approval is cancelable.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Approval type | approvalType | True | string | Select an approval type. |
| WebhookApprovalCreationInput | WebhookApprovalCreationInput | True | dynamic | The dynamic webhook input for creating an approval of the specified type. |

#### Returns

 The outputs of this operation are dynamic. 

### Start and wait for an approval [DEPRECATED]

- Operation ID:
    - approvalSubscribeV2

This action has been deprecated. Please use [Start and wait for an approval](/en-us/connectors/approvals/#start-and-wait-for-an-approval) instead.

~~Starts an automated approval and then waits for it to complete. The approval is only canceled on timeout. (Deprecated)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Approval type | approvalType | True | string | Select an approval type. |
| ApprovalCreationInput | ApprovalCreationInput | True | dynamic | The dynamic input for creating an approval of the specified type. |

#### Returns

 The outputs of this operation are dynamic. 

### Start and wait for an approval of text

- Operation ID:
    - StartAndWaitForATextSuggestionApproval

Starts an automated text approval process and then waits for it to complete. The approval is cancelable.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Title | title | True | string | Create a title of the approval |
| Suggested text | suggestedText | True | string | Specify suggested text to approve or modify |
| Details | details |  | string | Markdown syntax is supported (see https://aka.ms/approvaldetails) |
| Item Link | itemLink |  | string | Add a link to the item to approve. |
| Item Link Description | itemLinkDescription |  | string | Describe the link to the item |
| Assigned To | assignedTo | True | email | Email addresses, separated by a semicolon (;) |
| Requestor | requestor |  | email | Add the email of the person generating this request |
| Enable notifications | enableNotifications |  | boolean | Enable email, push, and Teams notifications |
| Enable reassignment | enableReassignment |  | boolean | Enable reassignment of approval requests |
| Name | name |  | string | Attachment name |
| Content | content |  | string | Attachment content |
| PartnerMetadata | partnerMetadata |  | string | The metadata required for the partner integration through which the approval was created. |
| Partner ID | partnerId |  | string | The Id required for partner integration through which the approval was created. |

#### Returns

- Body
    - TextSuggestionApprovalCreationOutput

### Start and wait for an Approve or Reject - First to respond approval [DEPRECATED]

- Operation ID:
    - approvalSubscribe

This action has been deprecated. Please use [Start and wait for an approval](/en-us/connectors/approvals/#start-and-wait-for-an-approval) instead.

~~Starts an automated approval and then waits for it to complete. The approval is only canceled on timeout. (Deprecated)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Title | title | True | string | Specify the title of the approval. |
| Details | details |  | string | Specify the details of the approval request. Markdown syntax is supported, see https://aka.ms/approvaldetails for more information. |
| Item Link | itemLink |  | string | Specify a link to the item to approve. |
| Item Link Description | itemLinkDescription |  | string | Specify a description for the item to approve. |
| Assigned To | assignedTo | True | email | Specify to whom the approval should be assigned. This should be a semi-colon (;) delimited collection of either email addresses, UPNs, or Microsoft Entra ID user ids. |

#### Returns

- Body
    - ApprovalCreationOutputV0

### Wait for an approval

- Operation ID:
    - WaitForAnApproval

Waits for a specified approval to complete.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Approval ID | approvalName | True | string | The ID of the approval. |
| ApprovalSubscriptionInput | ApprovalSubscriptionInput | True | dynamic | The dynamic input for subscribing to an approval. |

#### Returns

 The outputs of this operation are dynamic. 

## Definitions

### ApprovalCreationOutputV0

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Title | title | string | The title of the approval. |
| Details | details | string | The details of the approval request. Markdown syntax is supported, see https://aka.ms/approvaldetails for more information. |
| Item Link | itemLink | string | A link to the item to approve. |
| Responder | responder | ResponderPrincipal | The user that provided the response. |
| Response | response | string | The approval response: Approve or Reject. |
| Comments | comments | string | Comments provided by approver. |

### ResponderPrincipal

The user that provided the response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Approver Id | id | string | The id of the approver. |
| Approver Name | displayName | string | The name of the approver. |
| Approver Email | email | string | The email address of the approver. |
| Approver Tenant Id | tenantId | string | The tenant id of the approver. |
| Approver User Principal Name | userPrincipalName | string | The principal name of the approver. |

### TextSuggestionApprovalCreationOutput

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Accepted text | acceptedText | string | The accepted text of the approval |
| Approval ID | name | string | The name of the approval |
| Title | title | string | The title of the approval |
| Details | details | string | Additional details about the request |
| Item Link | itemLink | string | A link to the item to approve |
| Item link description | itemLinkDescription | string | Describe the link to the item |
| PartnerMetadata | partnerMetadata | string | The metadata required for the partner integration through which the approval was created. |
| Partner ID | partnerId | string | The Id required for partner integration through which the approval was created. |
| Request date | requestDate | date | Date the approval request was sent |
| Response summary | responseSummary | string | A summary of the responses |
| Completion date | completionDate | date | Date the approval was completed |
| Outcome | outcome | string | The outcome of the approval |
| Responses | responses | array of object | All of the responses |
| Approver ID | responses.responder.id | string | The ID of the approver |
| Approver name | responses.responder.displayName | string | The name of the approver |
| Approver email | responses.responder.email | string | The email address of the approver |
| Approver tenant ID | responses.responder.tenantId | string | The tenant id of the approver |
| Approver user principal name | responses.responder.userPrincipalName | string | The principal name of the approver |
| Request date | responses.requestDate | date | Date the approval request was sent |
| Response date | responses.responseDate | date | Date the approval response was sent |
| Approver response | responses.approverResponse | string | The response from the approver |
| Comments | responses.comments | string | Comments provided by approver |