---
layout: Reference
title: Outlook.com - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/outlook/
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
document_id: af6585d4-6a1a-df85-e3c8-b496e8c877ad
document_version_independent_id: f335e263-aaf9-914b-06a8-3cebd9593caa
updated_at: 2026-03-24T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/Outlook/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/4ca0543783a46ed80e2f607ad2198e71669f5613/docs/Outlook/index.yml
git_commit_id: 4ca0543783a46ed80e2f607ad2198e71669f5613
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: outlook/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/Outlook/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: c5134e33-1803-ed75-b824-3653a29a55bd
---

# Outlook.com

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1797/1.0.1797.4624/outlook/icon.png)
Outlook.com connector allows you to manage your mail, calendars, and contacts. You can perform various actions such as send mail, schedule meetings, add contacts, etc.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - China Cloud operated by 21Vianet |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Prerequisites

- Access to an Outlook.com email account where the mailbox has the REST API enabled. If you get an error, check that the REST API is enabled.

    Important

    Due to security policies, this connector no longer supports enterprise accounts and Microsoft work accounts such as @&lt;*domain*&gt;.onmicrosoft.com. Instead, use the Office 365 Outlook connector, which has the same functionality as the Outlook.com connector. Although existing enterprise connections will continue to work for some time, new connections aren't allowed. Microsoft understands that switching connectors isn't trivial. However, this limitation is necessary to give customers better security controls. Connection attempts to accounts on a dedicated on-premises mail server, sandbox accounts, or test accounts might also result in an error.

## Create a connection

When you're prompted to create a connection, select **Sign In**, provide your Outlook account credentials, and follow the remaining prompts to complete the connection.

## Add hyperlinks to the email body

To add hyperlinks to the email body in an action, follow these steps:

1. In **Body** parameter, highlight the text that you want to link. On the editor toolbar, select **Link**.
2. In the **Link Target** parameter, paste the link address, and select **Add**.
3. To confirm, move the pointer over the new hyperlink. When the external link icon appears, select that icon to open the linked page.

## SMTP headers

The connector attaches the following SMTP headers (Internet message headers) and values with each sent email:

- **"x-ms-mail-application"**

    | Service | Value |
    | --- | --- |
    | Power Automate | Microsoft Power Automate; User-Agent: azure-logic-apps/1.0 (workflow &lt;workflow id&gt;; version &lt;version id&gt;) microsoft-flow/1.0 |
    | Power Apps | Microsoft Power Apps; User-Agent: PowerApps/&lt;version id&gt; (&lt;Player type&gt;; AppName=&lt;app name&gt;) |
    | Azure Logic Apps | Azure Logic Apps; User-Agent: azure-logic-apps/1.0 (workflow &lt;workflow id&gt;; version &lt;version id&gt;) |
- **"x-ms-mail-operation-type"**

    | Description | Value |
    | --- | --- |
    | For reply email operations | Reply |
    | For forward email operations | Forward |
    | For send email operations, including `SendEmailWithOptions` and `SendApprovalEmail` | Send |
- **"x-ms-mail-environment-id"** with `Environment Id` value

    This header exists based on the service that you use:

    | Service | Existence |
    | --- | --- |
    | Power Apps | Always exists |
    | Power Automate | Exists only in new connections |
    | Azure Logic Apps | Never exists |
- **"x-ms-mail-workflow"** with the following values:

    | Service | Value |
    | --- | --- |
    | Power Automate | x-ms-workflow-name: &lt;workflow name&gt;; x-ms-workflow-run-id: &lt;workflow run id&gt;; x-ms-client-request-id: &lt;client request id&gt;; |
    | Power Apps | x-ms-client-request-id: &lt;client request id&gt;; |
    | Azure Logic Apps | x-ms-workflow-name: &lt;workflow name&gt;; x-ms-workflow-run-id: &lt;workflow run id&gt;; x-ms-client-request-id: &lt;client request id&gt;; |

## General known issues and limitations

- Connector timeout

    The Outlook.com connector sends outbound requests to the Outlook REST API, which has a 60-second timeout interval for each single external request. If this external request limit is reached, the following error is returned:

    `{ "status": 504, "message": "Request failed. Try again later"}`

    Unless you change the default retry policy in Power Automate and Azure Logic Apps, such failed requests are retried up to 4 times. For more information, see [Handle errors and exceptions in Azure Logic Apps](https://go.microsoft.com/fwlink/?linkid=2226310).

    Note

    The returned `504 (gateway timeout)` status code doesn't imply that the underlying action was unsuccessful. With the default retry policy applied, you can run the same action multiple times. For example, if the Send an email (V2) action results in a `504` response, the action retries the request, so duplicate emails are possible.
- Attachments

    - Support is currently limited for certain attachment types, such as EML, MSG, and ICS. When processing emails, the connector skips these attachments.
    - Some triggers and actions have an **Include Attachments** parameter to control when to include any attachment content in the response. This parameter controls only the attachment's *content*, not the attachment's metadata, such as Id, Name, Content Type, Size, Is Inline, and so on, which are included in the response, regardless of the parameter's value.
    - We have a limit of 1MB per data uri for inline embedded images, i.e image cannot be more than 1MB after base64 encoding. This only applies to embeded images inside the mail body.
- Folder names

    In the **Folder** parameter, for custom input values, the forward slash symbol `/` isn't supported for folder names. As a workaround, use the file picker, or provide the folder ID value.
- Shared mailbox

    If you get the error `Specified object was not found in the store`, try the following actions:

    - Check the mail account permissions.
    - Check that the mail account specified in the trigger is a member of the shared mailbox.
    - Check the shared mailbox configuration in the administrator center.
    - Try deleting and recreating the Outlook connection.

    This error also appears when the message has been moved or deleted by the mailbox owner.

## Known issues and limitations with actions

| Short description | Operations | Long description |
| --- | --- | --- |
| Replying with encrypted email isn't supported | Reply to email (V3) | This action doesn't support encrypted emails. If you reply to an email with encryption turned on, you'll get an error that the request has failed. |
| Behavior differences between actionable messages versus HTML content | Send approval emailSend email with options | These actions send actionable messages (action cards) along with HTML content. - Responses are localized only when you select the button in the actionable message, not in HTML content. - In Sovereign clouds, HTML content is rendered for all recipients. However, actionable messages are rendered only for the email's sender and not for other recipients. |
| Update or delete action on an event created using EWS doesn't work | Update Event (V3)Delete Event | The old event ID's which were created using the EWS service contains forward slashes (/) in them which will not work with graph API update and delete, as they cause graph API to misroute and throw an error. |

## Known issues and limitations with triggers

| Short description | Operations | Long description |
| --- | --- | --- |
| Rare delays might happen | When a new email arrives (V2)When a new email mentioning me arrives (V2)When an email is flagged (V2)When an event is added, updated or deleted (V2) | In most casees, the trigger fires almost immediately when the corresponding event occurs. However, in rare cases, the trigger delay might take up to one hour. |
| Skip email received before last successful run | When a new email arrives (V2)When a new email mentioning me arrives | These triggers fire based on the date and time that an email is received. Moving the email to another folder doesn't change the received date property value, which means these triggers will skip any email that was received before the last successful run. |
| Trigger fires for any event related to flagging or flagged email | When an email is flagged | This trigger fires when flagging an email, receiving a flagged email, or when an already flagged email is changed in any way, for example, the email category is changed or if replying to the email. |

### General Limits

| Name | Value |
| --- | --- |
| Maximum mails content length (in MB) | 50 |
| Maximum number of options for options and approval mails | 100 |
| Maximum number of megabytes being transferred from the connector concurrently | 300 |
| Maximum number of requests being processed by the connector concurrently | 30 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 300 | 60 seconds |

## Actions

| Create contact | This operation creates a new contact in a contacts folder. |
| --- | --- |
| Create event (V1) [DEPRECATED] | This action has been deprecated. Please use [Create event (V3)](/en-us/connectors/outlook/#create-event-%28v3%29) instead.<br><br>~~This operation creates a new event in a calendar. (V1)~~ |
| Create event (V2) [DEPRECATED] | This action has been deprecated. Please use [Create event (V3)](/en-us/connectors/outlook/#create-event-%28v3%29) instead.<br><br>~~This operation creates a new event in a calendar. (V2)~~ |
| Create event (V3) | This operation creates a new event in a calendar. |
| Delete contact | This operation deletes a contact from a contacts folder. |
| Delete email | This operation deletes an email by id. |
| Delete event | This operation deletes an event in a calendar. |
| Flag email | This operation flags an email. |
| Forward an email | Forward an email. |
| Get attachment | This operation gets an email attachment by id. |
| Get calendar view of events (V2) | This operation gets all events (including instances of recurrences) in a calendar. (V2) |
| Get calendar view of events [DEPRECATED] | This action has been deprecated. Please use [Get calendar view of events (V2)](/en-us/connectors/outlook/#get-calendar-view-of-events-%28v2%29) instead.<br><br>~~Get calendar view of events.~~ |
| Get calendars | This operation lists available calendars. |
| Get contact | This operation gets a specific contact from a contacts folder. |
| Get contact folders | This operation lists available contacts folders. |
| Get contacts | This operation gets contacts from a contacts folder. |
| Get email | This operation gets an email by id. |
| Get emails (V2) | This operation gets emails from a folder. |
| Get emails [DEPRECATED] | This action has been deprecated. Please use [Get emails (V2)](/en-us/connectors/outlook/#get-emails-%28v2%29) instead.<br><br>~~This operation gets emails from a folder.~~ |
| Get event (V1) [DEPRECATED] | This action has been deprecated. Please use [Get event (V2)](/en-us/connectors/outlook/#get-event-%28v2%29) instead.<br><br>~~This operation gets a specific event from a calendar. (V1)~~ |
| Get event (V2) | This operation gets a specific event from a calendar. (V2) |
| Get events (V1) [DEPRECATED] | This action has been deprecated. Please use [Get events (V3)](/en-us/connectors/outlook/#get-events-%28v3%29) instead.<br><br>~~This operation gets events from a calendar. (V1)~~ |
| Get events (V2) [DEPRECATED] | This action has been deprecated. Please use [Get events (V3)](/en-us/connectors/outlook/#get-events-%28v3%29) instead.<br><br>~~This operation gets events from a calendar. (V2)~~ |
| Get events (V3) | This operation gets events from a calendar. (V3) |
| Mark as read | This operation marks an email as having been read. |
| Move email | This operation moves an email to the specified folder. |
| Reply to email (V2) [DEPRECATED] | This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/outlook/#reply-to-email-%28v3%29) instead.<br><br>~~This operation replies to an email.~~ |
| Reply to email (V3) | This operation replies to an email. |
| Reply to email [DEPRECATED] | This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/outlook/#reply-to-email-%28v3%29) instead.<br><br>~~This operation replies to an email.~~ |
| Respond to an event invite | Respond to an event invite. |
| Send an email (V2) | This operation sends an email message. |
| Send an email [DEPRECATED] | This action has been deprecated. Please use [Send an email (V2)](/en-us/connectors/outlook/#send-an-email-%28v2%29) instead.<br><br>~~This operation sends an email message.~~ |
| Send approval email | This operation sends an approval email and waits for a response from the recipient. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages). |
| Send email with options | This operation sends an email with multiple options and waits for the recipient to respond back with one of the options. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages). |
| Update contact | This operation updates a contact in a contacts folder. |
| Update event (V1) [DEPRECATED] | This action has been deprecated. Please use [Update event (V3)](/en-us/connectors/outlook/#update-event-%28v3%29) instead.<br><br>~~This operation updates an event in a calendar. (V1)~~ |
| Update event (V2) [DEPRECATED] | This action has been deprecated. Please use [Update event (V3)](/en-us/connectors/outlook/#update-event-%28v3%29) instead.<br><br>~~This operation updates an event in a calendar. (V2)~~ |
| Update event (V3) | This operation updates an event in a calendar. |

### Create contact

- Operation ID:
    - ContactPostItem

This operation creates a new contact in a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Id | Id |  | string | The contact's unique identifier. |
| Parent folder id | ParentFolderId |  | string | The ID of the contact's parent folder |
| Birthday | Birthday |  | date-time | The contact's birthday |
| File as | FileAs |  | string | The name the contact is filed under |
| Display Name | DisplayName |  | string | The contact's display name |
| Given name | GivenName | True | string | The contact's given name |
| Initials | Initials |  | string | The contact's initials |
| Middle name | MiddleName |  | string | The contact's middle name |
| Nickname | NickName |  | string | The contact's nickname |
| Surname | Surname |  | string | The contact's surname |
| Title | Title |  | string | The contact's title |
| Generation | Generation |  | string | The contact's generation |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| IM addresses | ImAddresses |  | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | JobTitle |  | string | The contact's job title |
| Company name | CompanyName |  | string | The name of the contact's company |
| Department | Department |  | string | The contact's department |
| Office location | OfficeLocation |  | string | The location of the contact's office |
| Profession | Profession |  | string | The contact's profession |
| Business home page | BusinessHomePage |  | string | The business home page of the contact |
| Assistant name | AssistantName |  | string | The name of the contact's assistant |
| Manager | Manager |  | string | The name of the contact's manager |
| Home phones | HomePhones | True | array of string | The contact's home phone numbers |
| Business phones | BusinessPhones |  | array of string | The contact's business phone numbers |
| Mobile phone | MobilePhone1 |  | string | The contact's mobile phone number |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Yomi company name | YomiCompanyName |  | string | The phonetic Japanese company name of the contact |
| Yomi given name | YomiGivenName |  | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | YomiSurname |  | string | The phonetic Japanese surname (last name) of the contact |
| Categories | Categories |  | array of string | The categories associated with the contact |
| Change key | ChangeKey |  | string | Identifies the version of the event object |
| Created time | DateTimeCreated |  | date-time | The time the contact was created |
| Last modified time | DateTimeLastModified |  | date-time | The time the contact was modified |

#### Returns

Contact response

- Body
    - ContactResponse

### Create event (V1) [DEPRECATED]

- Operation ID:
    - CalendarPostItem

This action has been deprecated. Please use [Create event (V3)](/en-us/connectors/outlook/#create-event-%28v3%29) instead.

~~This operation creates a new event in a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | Id |  | string | The Event's unique identifier |
| Response | Response |  | string |  |
| Time | Time |  | date-time |  |
| Type | Type |  | string |  |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| ContentType | ContentType |  | string |  |
| Content | Content |  | string |  |
| Body preview | BodyPreview |  | string | The preview of the message associated with the event |
| Categories | Categories |  | array of string | The categories associated with the event |
| Change key | ChangeKey |  | string | This property identifies the version of the event object. Every time the event is changed, ChangeKey changes as well. |
| Created time | DateTimeCreated |  | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified |  | date-time | The date and time that the event was last modified |
| End time | End | True | date-time | The end time of the event |
| End time zone | EndTimeZone |  | string | This property specifies the time zone of the meeting end time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Has attachments? | HasAttachments |  | boolean | Set to true if the event has attachments |
| Event Unique ID | ICalUId |  | string | A unique identifier that is shared by all instances of an event across different calendars |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Is cancelled? | IsCancelled |  | boolean | Set to true if the event has been canceled |
| Is Organizer | IsOrganizer |  | boolean | Set to true if the message sender is also the organizer |
| DisplayName | DisplayName |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Altitude | Altitude |  | double |  |
| Latitude | Latitude |  | double |  |
| Longitude | Longitude |  | double |  |
| Accuracy | Accuracy |  | double |  |
| AltitudeAccuracy | AltitudeAccuracy |  | double |  |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| Type | Type |  | string |  |
| Interval | Interval |  | integer |  |
| Month | Month |  | integer |  |
| DayOfMonth | DayOfMonth |  | integer |  |
| DaysOfWeek | DaysOfWeek |  | array of string |  |
| FirstDayOfWeek | FirstDayOfWeek |  | string |  |
| Index | Index |  | string |  |
| Type | Type |  | string |  |
| StartDate | StartDate |  | date-time |  |
| EndDate | EndDate |  | date-time |  |
| NumberOfOccurrences | NumberOfOccurrences |  | integer |  |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Response | Response |  | string |  |
| Time | Time |  | date-time |  |
| Series master id | SeriesMasterId |  | string | Unique identifier for Series Master event type |
| Show as | ShowAs |  | string | Shows as free or busy |
| Start time | Start | True | date-time | The start time of the event |
| Start time zone | StartTimeZone |  | string | This property specifies the time zone of the meeting start time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Subject | Subject | True | string | Event subject |
| Type | Type |  | string | The event type: Single Instance, Occurrence, Exception, or Series Master |
| Web link | WebLink |  | uri | The preview of the message associated with the event |
| Reason | Reason |  | string | The reason property used by O365 sync events protocol, will be 'deleted' if its a deleted event. |

#### Returns

Connector specific calendar event model class for the backend

- Body
    - CalendarEventBackend

### Create event (V2) [DEPRECATED]

- Operation ID:
    - V2CalendarPostItem

This action has been deprecated. Please use [Create event (V3)](/en-us/connectors/outlook/#create-event-%28v3%29) instead.

~~This operation creates a new event in a calendar. (V2)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Subject | Subject | True | string | Event subject |
| Start time | Start | True | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | True | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Time zone | TimeZone |  | string | Time zone of the event |
| Required attendees | RequiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | Body |  | string | Body of the message associated with the event |
| Is HTML | IsHtml |  | boolean | Set to true if the body is Html |
| Location | Location |  | string | Location of the event |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | Recurrence |  | string | The recurrence pattern for the event |
| Recurrence end time | RecurrenceEnd |  | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences |  | integer | How many times to repeat the event |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Show as | ShowAs |  | string | Status to show during the event |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

### Create event (V3)

- Operation ID:
    - V3CalendarPostItem

This operation creates a new event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Subject | Subject | True | string | Event subject |
| Start time | Start | True | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | True | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Time zone | TimeZone |  | string | Time zone of the event |
| Required attendees | RequiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | Body |  | html | Body of the message associated with the event |
| Location | Location |  | string | Location of the event |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | Recurrence |  | string | The recurrence pattern for the event |
| Recurrence end time | RecurrenceEnd |  | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences |  | integer | How many times to repeat the event |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Show as | ShowAs |  | string | Status to show during the event |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

### Delete contact

- Operation ID:
    - ContactDeleteItem

This operation deletes a contact from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Id | id | True | string | Unique identifier of contact to delete |

### Delete email

- Operation ID:
    - DeleteEmail

This operation deletes an email by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to delete. |

### Delete event

- Operation ID:
    - CalendarDeleteItem

This operation deletes an event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |

### Flag email

- Operation ID:
    - Flag

This operation flags an email.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be flagged. |

### Forward an email

- Operation ID:
    - ForwardEmail

Forward an email.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | message\_id | True | string | Id of the message to forward. |
| Comment | Comment |  | string | Comment |
| To | ToRecipients | True | string | Semicolon separated list of recipients to forward the message to |

### Get attachment

- Operation ID:
    - GetAttachment

This operation gets an email attachment by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Attachment Id | attachmentId | True | string | Id of the attachment to download. |

#### Returns

- response
    - binary

### Get calendar view of events (V2)

- Operation ID:
    - GetEventsCalendarViewV2

This operation gets all events (including instances of recurrences) in a calendar. (V2)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | calendarId | True | string | Select a calendar |
| Start Time | startDateTimeOffset | True | string | Start time (example: '2017-01-01T08:00:00-07:00') |
| End Time | endDateTimeOffset | True | string | End time (example: '2017-02-01T08:00:00-07:00') |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Search | search |  | string | Search text for matching event body and subject |

#### Returns

Entity list response

- Body
    - EntityListResponse[CalendarEventClientReceiveStringEnums]

### Get calendar view of events [DEPRECATED]

- Operation ID:
    - GetEventsCalendarView

This action has been deprecated. Please use [Get calendar view of events (V2)](/en-us/connectors/outlook/#get-calendar-view-of-events-%28v2%29) instead.

~~Get calendar view of events.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | calendarId | True | string | Select a calendar. |
| Start Time | startDateTimeOffset | True | string | Start time (example: '2017-01-01T08:00:00-07:00'). |
| End Time | endDateTimeOffset | True | string | End time (example: '2017-02-01T08:00:00-07:00'). |

#### Returns

Response containing a list and next link

- Body
    - PaginatedListResponse[CalendarEventClientReceiveStringEnums]

### Get calendars

- Operation ID:
    - CalendarGetTables

This operation lists available calendars.

#### Returns

Entity list response

- Body
    - EntityListResponse[Table]

### Get contact

- Operation ID:
    - ContactGetItem

This operation gets a specific contact from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Item id | id | True | string | Unique identifier of a contact to retrieve |

#### Returns

Contact response

- Body
    - ContactResponse

### Get contact folders

- Operation ID:
    - ContactGetTables

This operation lists available contacts folders.

#### Returns

Entity list response

- Body
    - EntityListResponse[Table]

### Get contacts

- Operation ID:
    - ContactGetItems

This operation gets contacts from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Unique identifier of the contacts folder to retrieve |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

Entity list response

- Body
    - EntityListResponse[ContactResponse]

### Get email

- Operation ID:
    - GetEmail

This operation gets an email by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Internet Message Id | internetMessageId |  | string | Internet Message Id. |

#### Returns

Receive Email Message

- Body
    - ClientReceiveMessage

### Get emails (V2)

- Operation ID:
    - GetEmailsV2

This operation gets emails from a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to retrieve emails from (default: 'Inbox'). |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |
| Fetch Only Unread Messages | fetchOnlyUnread |  | boolean | Retrieve only unread emails?. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Search Query | searchQuery |  | string | Search query to filter emails. How to use '$search' parameter please refer to: [https://docs.microsoft.com/previous-versions/office/office-365-api/api/version-2.0/complex-types-for-mail-contacts-calendar#search-requests](/en-us/previous-versions/office/office-365-api/api/version-2.0/complex-types-for-mail-contacts-calendar#search-requests). |
| Top | top |  | integer | Number of emails to retrieve (default: 10). |

#### Returns

Represents a wrapper object for batch response

- Body
    - BatchResponse[ClientReceiveMessage]

### Get emails [DEPRECATED]

- Operation ID:
    - GetEmails

This action has been deprecated. Please use [Get emails (V2)](/en-us/connectors/outlook/#get-emails-%28v2%29) instead.

~~This operation gets emails from a folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to retrieve emails from (default: 'Inbox'). |
| Fetch Only Unread Messages | fetchOnlyUnread |  | boolean | Retrieve only unread emails?. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Search Query | searchQuery |  | string | Search query (like in the Outlook client) to filter emails. |
| Top | top |  | integer | Number of emails to retrieve (default: 10). |

#### Returns

- response
    - array of ClientReceiveMessageStringEnums

### Get event (V1) [DEPRECATED]

- Operation ID:
    - CalendarGetItem

This action has been deprecated. Please use [Get event (V2)](/en-us/connectors/outlook/#get-event-%28v2%29) instead.

~~This operation gets a specific event from a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Item id | id | True | string | Select an event |

#### Returns

Connector specific calendar event model class for the backend

- Body
    - CalendarEventBackend

### Get event (V2)

- Operation ID:
    - V2CalendarGetItem

This operation gets a specific event from a calendar. (V2)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Item id | id | True | string | Select an event |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

### Get events (V1) [DEPRECATED]

- Operation ID:
    - CalendarGetItems

This action has been deprecated. Please use [Get events (V3)](/en-us/connectors/outlook/#get-events-%28v3%29) instead.

~~This operation gets events from a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

Entity list response

- Body
    - EntityListResponse[CalendarEventBackend]

### Get events (V2) [DEPRECATED]

- Operation ID:
    - V2CalendarGetItems

This action has been deprecated. Please use [Get events (V3)](/en-us/connectors/outlook/#get-events-%28v3%29) instead.

~~This operation gets events from a calendar. (V2)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

Entity list response

- Body
    - EntityListResponse[CalendarEventClientReceiveStringEnums]

### Get events (V3)

- Operation ID:
    - V3CalendarGetItems

This operation gets events from a calendar. (V3)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items

- Body
    - CalendarEventListClientReceive

### Mark as read

- Operation ID:
    - MarkAsRead

This operation marks an email as having been read.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be marked as read. |

### Move email

- Operation ID:
    - Move

This operation moves an email to the specified folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be moved. |
| Folder | folderPath | True | string | Mail folder to move the email to. |

#### Returns

Receive Email Message

- Body
    - ClientReceiveMessageStringEnums

### Reply to email (V2) [DEPRECATED]

- Operation ID:
    - ReplyToV2

This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/outlook/#reply-to-email-%28v3%29) instead.

~~This operation replies to an email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to reply to. |
| To | To |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| CC | Cc |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| BCC | Bcc |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| Subject | Subject |  | string | Email subject (if empty, the original subject used). |
| Body | Body |  | string | Content of the email. |
| Reply All | ReplyAll |  | boolean | True to reply to all recipients. (default: False) |
| Is HTML | IsHtml |  | boolean | True to send the reply as HTML. (default: True) |
| Importance | Importance |  | string | Pick an importance. (default: Low) |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |

### Reply to email (V3)

- Operation ID:
    - ReplyToV3

This operation replies to an email.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to reply to. |
| To | To |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| CC | Cc |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| BCC | Bcc |  | email | Example: recipient1@domain.com; recipient2@domain.com |
| Subject | Subject |  | string | Email subject (if empty, the original subject used). |
| Body | Body |  | html | Content of the email. |
| Reply All | ReplyAll |  | boolean | True to reply to all recipients. (default: False) |
| Importance | Importance |  | string | Pick an importance. (default: Low) |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |

### Reply to email [DEPRECATED]

- Operation ID:
    - ReplyTo

This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/outlook/#reply-to-email-%28v3%29) instead.

~~This operation replies to an email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to reply to. |
| Comment | comment | True | string | Reply comment. |
| Reply All | replyAll |  | boolean | Reply to all recipients. |

### Respond to an event invite

- Operation ID:
    - RespondToEvent

Respond to an event invite.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Event Id | event\_id | True | string | Id of the event to respond to. |
| Response | response | True | string | Response for the event invite |
| Comment | Comment |  | string | Comment |
| Send response? | SendResponse |  | boolean | Send response to organizer? |

### Send an email (V2)

- Operation ID:
    - SendEmailV2

This operation sends an email message.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject | True | string | Specify the subject of the mail |
| Body | Body | True | html | Specify the body of the mail |
| From (Send as) | From |  | email | Email address to send mail from (requires "Send as" or "Send on behalf of" permission for that mailbox). For more info on granting permissions please refer [https://docs.microsoft.com/office365/admin/manage/send-email-as-distribution-list](/en-us/office365/admin/manage/send-email-as-distribution-list) |
| CC | Cc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| BCC | Bcc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |

### Send an email [DEPRECATED]

- Operation ID:
    - SendEmail

This action has been deprecated. Please use [Send an email (V2)](/en-us/connectors/outlook/#send-an-email-%28v2%29) instead.

~~This operation sends an email message.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| CC | Cc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| BCC | Bcc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject | True | string | Specify the subject of the mail |
| Body | Body | True | string | Specify the body of the mail |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |
| Is HTML | IsHtml |  | boolean | Is Html? |

### Send approval email

- Operation ID:
    - SendApprovalMail

This operation sends an approval email and waits for a response from the recipient. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject |  | string | Subject |
| User Options | Options |  | string | User Options |
| Header Text | HeaderText |  | string | Header text for email body |
| Selection Text | SelectionText |  | string | Header text for users options selection |
| Body | Body |  | string | Body |
| Importance | Importance |  | string | Importance |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Use only HTML message | UseOnlyHTMLMessage |  | boolean | Use only HTML message |
| Hide HTML message | HideHTMLMessage |  | boolean | If set to Yes, then the email body is hidden and only message card is displayed. Email clients which do not support actionable messages will display HTML message regardless of the parameter value. |
| Show HTML confirmation dialog | ShowHTMLConfirmationDialog |  | boolean | If set to Yes then a dialog wil be shown to confirm selected option of HTML message |

#### Returns

Approval Email Response

- Body
    - ApprovalEmailResponse

### Send email with options

- Operation ID:
    - SendMailWithOptions

This operation sends an email with multiple options and waits for the recipient to respond back with one of the options. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject |  | string | Subject of the email |
| User Options | Options |  | string | List of comma separated options for the email response |
| Header Text | HeaderText |  | string | Header text for email body |
| Selection Text | SelectionText |  | string | Header text for users options selection |
| Body | Body |  | string | Body of the email |
| Importance | Importance |  | string | Importance |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Use only HTML message | UseOnlyHTMLMessage |  | boolean | Use only HTML message |
| Hide HTML message | HideHTMLMessage |  | boolean | If set to Yes, then the email body is hidden and only message card is displayed. Email clients which do not support actionable messages will display HTML message regardless of the parameter value. |
| Show HTML confirmation dialog | ShowHTMLConfirmationDialog |  | boolean | If set to Yes then a dialog wil be shown to confirm selected option of HTML message |

#### Returns

Approval Email Response

- Body
    - ApprovalEmailResponse

### Update contact

- Operation ID:
    - ContactPatchItem

This operation updates a contact in a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Id | id | True | string | Unique identifier of contact to update |
| Id | Id |  | string | The contact's unique identifier. |
| Parent folder id | ParentFolderId |  | string | The ID of the contact's parent folder |
| Birthday | Birthday |  | date-time | The contact's birthday |
| File as | FileAs |  | string | The name the contact is filed under |
| Display Name | DisplayName |  | string | The contact's display name |
| Given name | GivenName | True | string | The contact's given name |
| Initials | Initials |  | string | The contact's initials |
| Middle name | MiddleName |  | string | The contact's middle name |
| Nickname | NickName |  | string | The contact's nickname |
| Surname | Surname |  | string | The contact's surname |
| Title | Title |  | string | The contact's title |
| Generation | Generation |  | string | The contact's generation |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| IM addresses | ImAddresses |  | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | JobTitle |  | string | The contact's job title |
| Company name | CompanyName |  | string | The name of the contact's company |
| Department | Department |  | string | The contact's department |
| Office location | OfficeLocation |  | string | The location of the contact's office |
| Profession | Profession |  | string | The contact's profession |
| Business home page | BusinessHomePage |  | string | The business home page of the contact |
| Assistant name | AssistantName |  | string | The name of the contact's assistant |
| Manager | Manager |  | string | The name of the contact's manager |
| Home phones | HomePhones | True | array of string | The contact's home phone numbers |
| Business phones | BusinessPhones |  | array of string | The contact's business phone numbers |
| Mobile phone | MobilePhone1 |  | string | The contact's mobile phone number |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Yomi company name | YomiCompanyName |  | string | The phonetic Japanese company name of the contact |
| Yomi given name | YomiGivenName |  | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | YomiSurname |  | string | The phonetic Japanese surname (last name) of the contact |
| Categories | Categories |  | array of string | The categories associated with the contact |
| Change key | ChangeKey |  | string | Identifies the version of the event object |
| Created time | DateTimeCreated |  | date-time | The time the contact was created |
| Last modified time | DateTimeLastModified |  | date-time | The time the contact was modified |

#### Returns

Contact response

- Body
    - ContactResponse

### Update event (V1) [DEPRECATED]

- Operation ID:
    - CalendarPatchItem

This action has been deprecated. Please use [Update event (V3)](/en-us/connectors/outlook/#update-event-%28v3%29) instead.

~~This operation updates an event in a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |
| Id | Id |  | string | The Event's unique identifier |
| Response | Response |  | string |  |
| Time | Time |  | date-time |  |
| Type | Type |  | string |  |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| ContentType | ContentType |  | string |  |
| Content | Content |  | string |  |
| Body preview | BodyPreview |  | string | The preview of the message associated with the event |
| Categories | Categories |  | array of string | The categories associated with the event |
| Change key | ChangeKey |  | string | This property identifies the version of the event object. Every time the event is changed, ChangeKey changes as well. |
| Created time | DateTimeCreated |  | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified |  | date-time | The date and time that the event was last modified |
| End time | End | True | date-time | The end time of the event |
| End time zone | EndTimeZone |  | string | This property specifies the time zone of the meeting end time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Has attachments? | HasAttachments |  | boolean | Set to true if the event has attachments |
| Event Unique ID | ICalUId |  | string | A unique identifier that is shared by all instances of an event across different calendars |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Is cancelled? | IsCancelled |  | boolean | Set to true if the event has been canceled |
| Is Organizer | IsOrganizer |  | boolean | Set to true if the message sender is also the organizer |
| DisplayName | DisplayName |  | string |  |
| Street | Street |  | string |  |
| City | City |  | string |  |
| State | State |  | string |  |
| CountryOrRegion | CountryOrRegion |  | string |  |
| PostalCode | PostalCode |  | string |  |
| Altitude | Altitude |  | double |  |
| Latitude | Latitude |  | double |  |
| Longitude | Longitude |  | double |  |
| Accuracy | Accuracy |  | double |  |
| AltitudeAccuracy | AltitudeAccuracy |  | double |  |
| Name | Name |  | string |  |
| Address | Address |  | email |  |
| Type | Type |  | string |  |
| Interval | Interval |  | integer |  |
| Month | Month |  | integer |  |
| DayOfMonth | DayOfMonth |  | integer |  |
| DaysOfWeek | DaysOfWeek |  | array of string |  |
| FirstDayOfWeek | FirstDayOfWeek |  | string |  |
| Index | Index |  | string |  |
| Type | Type |  | string |  |
| StartDate | StartDate |  | date-time |  |
| EndDate | EndDate |  | date-time |  |
| NumberOfOccurrences | NumberOfOccurrences |  | integer |  |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Response | Response |  | string |  |
| Time | Time |  | date-time |  |
| Series master id | SeriesMasterId |  | string | Unique identifier for Series Master event type |
| Show as | ShowAs |  | string | Shows as free or busy |
| Start time | Start | True | date-time | The start time of the event |
| Start time zone | StartTimeZone |  | string | This property specifies the time zone of the meeting start time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Subject | Subject | True | string | Event subject |
| Type | Type |  | string | The event type: Single Instance, Occurrence, Exception, or Series Master |
| Web link | WebLink |  | uri | The preview of the message associated with the event |
| Reason | Reason |  | string | The reason property used by O365 sync events protocol, will be 'deleted' if its a deleted event. |

#### Returns

Connector specific calendar event model class for the backend

- Body
    - CalendarEventBackend

### Update event (V2) [DEPRECATED]

- Operation ID:
    - V2CalendarPatchItem

This action has been deprecated. Please use [Update event (V3)](/en-us/connectors/outlook/#update-event-%28v3%29) instead.

~~This operation updates an event in a calendar. (V2)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |
| Subject | Subject | True | string | Event subject |
| Start time | Start | True | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | True | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Time zone | TimeZone |  | string | Time zone of the event |
| Required attendees | RequiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | Body |  | string | Body of the message associated with the event |
| Is HTML | IsHtml |  | boolean | Set to true if the body is Html |
| Location | Location |  | string | Location of the event |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | Recurrence |  | string | The recurrence pattern for the event |
| Recurrence end time | RecurrenceEnd |  | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences |  | integer | How many times to repeat the event |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Show as | ShowAs |  | string | Status to show during the event |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

### Update event (V3)

- Operation ID:
    - V3CalendarPatchItem

This operation updates an event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |
| Subject | Subject | True | string | Event subject |
| Start time | Start | True | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | True | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Time zone | TimeZone |  | string | Time zone of the event |
| Required attendees | RequiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | Body |  | html | Body of the message associated with the event |
| Location | Location |  | string | Location of the event |
| Importance | Importance |  | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | Recurrence |  | string | The recurrence pattern for the event |
| Recurrence end time | RecurrenceEnd |  | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences |  | integer | How many times to repeat the event |
| Reminder | Reminder |  | integer | Time in minutes before event start to remind |
| Show as | ShowAs |  | string | Status to show during the event |
| Response requested | ResponseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

## Triggers

| When a new email arrives (V2) | This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments. |
| --- | --- |
| When a new email arrives [DEPRECATED] | This action has been deprecated. Please use [When a new email arrives (V2)](/en-us/connectors/outlook/#when-a-new-email-arrives-%28v2%29) instead.<br><br>~~This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new email mentioning me arrives (V2) | This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments. |
| When a new email mentioning me arrives [DEPRECATED] | This action has been deprecated. Please use [When a new email mentioning me arrives (V2)](/en-us/connectors/outlook/#when-a-new-email-mentioning-me-arrives-%28v2%29) instead.<br><br>~~This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new event is created (V1) [DEPRECATED] | This action has been deprecated. Please use [When a new event is created (V2)](/en-us/connectors/outlook/#when-a-new-event-is-created-%28v2%29) instead.<br><br>~~This operation triggers a flow when a new event is created in a calendar. (V1)~~ |
| When a new event is created (V2) | This operation triggers a flow when a new event is created in a calendar. (V2) |
| When an email is flagged (V2) | This operation triggers a flow when an email is flagged. |
| When an email is flagged [DEPRECATED] | This action has been deprecated. Please use [When an email is flagged (V2)](/en-us/connectors/outlook/#when-an-email-is-flagged-%28v2%29) instead.<br><br>~~This operation triggers a flow when an email is flagged.~~ |
| When an event is added, updated or deleted (V2) | This operation triggers a flow when an event is added, updated or deleted in a calendar. |
| When an event is added, updated or deleted [DEPRECATED] | This action has been deprecated. Please use [When an event is added, updated or deleted (V2)](/en-us/connectors/outlook/#when-an-event-is-added%2c-updated-or-deleted-%28v2%29) instead.<br><br>~~This operation triggers a flow when an event is added, updated or deleted in a calendar.~~ |
| When an event is modified (V1) [DEPRECATED] | This action has been deprecated. Please use [When an event is modified (V2)](/en-us/connectors/outlook/#when-an-event-is-modified-%28v2%29) instead.<br><br>~~This operation triggers a flow when an event is modified in a calendar. (V1)~~ |
| When an event is modified (V2) | This operation triggers a flow when an event is modified in a calendar. (V2) |
| When an upcoming event is starting soon (V2) | This operation triggers a flow when an upcoming calendar event is starting. |
| When an upcoming event is starting soon [DEPRECATED] | This action has been deprecated. Please use [When an upcoming event is starting soon (V2)](/en-us/connectors/outlook/#when-an-upcoming-event-is-starting-soon-%28v2%29) instead.<br><br>~~This operation triggers a flow when an upcoming calendar event is starting.~~ |

### When a new email arrives (V2)

- Operation ID:
    - OnNewEmailV2

This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When a new email arrives [DEPRECATED]

- Operation ID:
    - OnNewEmail

This action has been deprecated. Please use [When a new email arrives (V2)](/en-us/connectors/outlook/#when-a-new-email-arrives-%28v2%29) instead.

~~This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When a new email mentioning me arrives (V2)

- Operation ID:
    - OnNewMentionMeEmailV2

This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When a new email mentioning me arrives [DEPRECATED]

- Operation ID:
    - OnNewMentionMeEmail

This action has been deprecated. Please use [When a new email mentioning me arrives (V2)](/en-us/connectors/outlook/#when-a-new-email-mentioning-me-arrives-%28v2%29) instead.

~~This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When a new event is created (V1) [DEPRECATED]

- Operation ID:
    - CalendarGetOnNewItems

This action has been deprecated. Please use [When a new event is created (V2)](/en-us/connectors/outlook/#when-a-new-event-is-created-%28v2%29) instead.

~~This operation triggers a flow when a new event is created in a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items

- Body
    - CalendarEventList

### When a new event is created (V2)

- Operation ID:
    - CalendarGetOnNewItemsV2

This operation triggers a flow when a new event is created in a calendar. (V2)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items

- Body
    - CalendarEventListClientReceive

### When an email is flagged (V2)

- Operation ID:
    - OnFlaggedEmailV2

This operation triggers a flow when an email is flagged.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When an email is flagged [DEPRECATED]

- Operation ID:
    - OnFlaggedEmail

This action has been deprecated. Please use [When an email is flagged (V2)](/en-us/connectors/outlook/#when-an-email-is-flagged-%28v2%29) instead.

~~This operation triggers a flow when an email is flagged.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | fetchOnlyWithAttachment |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When an event is added, updated or deleted (V2)

- Operation ID:
    - CalendarGetOnChangedItemsV2

This operation triggers a flow when an event is added, updated or deleted in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Incoming Days Tracked | incomingDays |  | integer | Number of incoming days in calendar to be tracked |
| Past Days Tracked | pastDays |  | integer | Number of past days in calendar to be tracked |

#### Returns

The list of calendar items with action type

- Body
    - CalendarEventListWithActionType

### When an event is added, updated or deleted [DEPRECATED]

- Operation ID:
    - CalendarGetOnChangedItems

This action has been deprecated. Please use [When an event is added, updated or deleted (V2)](/en-us/connectors/outlook/#when-an-event-is-added%2c-updated-or-deleted-%28v2%29) instead.

~~This operation triggers a flow when an event is added, updated or deleted in a calendar.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Incoming Days Tracked | incomingDays |  | integer | Number of incoming days in calendar to be tracked |
| Past Days Tracked | pastDays |  | integer | Number of past days in calendar to be tracked |

#### Returns

The list of calendar items with action type

- Body
    - CalendarEventListWithActionType

### When an event is modified (V1) [DEPRECATED]

- Operation ID:
    - CalendarGetOnUpdatedItems

This action has been deprecated. Please use [When an event is modified (V2)](/en-us/connectors/outlook/#when-an-event-is-modified-%28v2%29) instead.

~~This operation triggers a flow when an event is modified in a calendar. (V1)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items

- Body
    - CalendarEventList

### When an event is modified (V2)

- Operation ID:
    - CalendarGetOnUpdatedItemsV2

This operation triggers a flow when an event is modified in a calendar. (V2)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items

- Body
    - CalendarEventListClientReceive

### When an upcoming event is starting soon (V2)

- Operation ID:
    - OnUpcomingEventsV2

This operation triggers a flow when an upcoming calendar event is starting.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | table | True | string | Unique identifier of the calendar. |
| Look-Ahead Time | lookAheadTimeInMinutes |  | integer | Time (in minutes) to look ahead for upcoming events. |

#### Returns

The list of calendar items

- Body
    - CalendarEventListClientReceive

### When an upcoming event is starting soon [DEPRECATED]

- Operation ID:
    - OnUpcomingEvents

This action has been deprecated. Please use [When an upcoming event is starting soon (V2)](/en-us/connectors/outlook/#when-an-upcoming-event-is-starting-soon-%28v2%29) instead.

~~This operation triggers a flow when an upcoming calendar event is starting.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | table | True | string | Unique identifier of the calendar. |
| Look-Ahead Time | lookAheadTimeInMinutes |  | integer | Time (in minutes) to look ahead for upcoming events. |

#### Returns

The list of calendar items

- Body
    - CalendarEventList

## Definitions

### CalendarEventList

The list of calendar items

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CalendarEventBackend | List of calendar items |

### CalendarEventBackend

Connector specific calendar event model class for the backend

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The Event's unique identifier |
| Attendees | Attendees | array of Attendee | List of attendees for the event |
| Body | Body | ItemBody |  |
| Body preview | BodyPreview | string | The preview of the message associated with the event |
| Categories | Categories | array of string | The categories associated with the event |
| Change key | ChangeKey | string | This property identifies the version of the event object. Every time the event is changed, ChangeKey changes as well. |
| Created time | DateTimeCreated | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified | date-time | The date and time that the event was last modified |
| End time | End | date-time | The end time of the event |
| End time zone | EndTimeZone | string | This property specifies the time zone of the meeting end time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Has attachments? | HasAttachments | boolean | Set to true if the event has attachments |
| Event Unique ID | ICalUId | string | A unique identifier that is shared by all instances of an event across different calendars |
| Importance | Importance | string | The importance of the event: Low, Normal, or High |
| Is all day event? | IsAllDay | boolean | Set to true if the event lasts all day |
| Is cancelled? | IsCancelled | boolean | Set to true if the event has been canceled |
| Is Organizer | IsOrganizer | boolean | Set to true if the message sender is also the organizer |
| Location | Location | Location |  |
| Organizer | Organizer | Recipient |  |
| Recurrence | Recurrence | PatternedRecurrence |  |
| Reminder | Reminder | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| ResponseStatus | ResponseStatus | ResponseStatus |  |
| Series master id | SeriesMasterId | string | Unique identifier for Series Master event type |
| Show as | ShowAs | string | Shows as free or busy |
| Start time | Start | date-time | The start time of the event |
| Start time zone | StartTimeZone | string | This property specifies the time zone of the meeting start time. The value must be as defined in Windows (example: 'Pacific Standard Time'). |
| Subject | Subject | string | Event subject |
| Type | Type | string | The event type: Single Instance, Occurrence, Exception, or Series Master |
| Web link | WebLink | uri | The preview of the message associated with the event |
| Reason | Reason | string | The reason property used by O365 sync events protocol, will be 'deleted' if its a deleted event. |

### Attendee

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Status | Status | ResponseStatus |  |
| Type | Type | string |  |
| EmailAddress | EmailAddress | EmailAddress |  |

### ItemBody

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ContentType | ContentType | string |  |
| Content | Content | string |  |

### Location

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| DisplayName | DisplayName | string |  |
| Address | Address | PhysicalAddress |  |
| Coordinates | Coordinates | GeoCoordinates |  |

### Recipient

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| EmailAddress | EmailAddress | EmailAddress |  |

### PatternedRecurrence

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Pattern | Pattern | RecurrencePattern |  |
| Range | Range | RecurrenceRange |  |

### ResponseStatus

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Response | Response | string |  |
| Time | Time | date-time |  |

### EmailAddress

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string |  |
| Address | Address | email |  |

### PhysicalAddress

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Street | Street | string |  |
| City | City | string |  |
| State | State | string |  |
| CountryOrRegion | CountryOrRegion | string |  |
| PostalCode | PostalCode | string |  |

### GeoCoordinates

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Altitude | Altitude | double |  |
| Latitude | Latitude | double |  |
| Longitude | Longitude | double |  |
| Accuracy | Accuracy | double |  |
| AltitudeAccuracy | AltitudeAccuracy | double |  |

### RecurrencePattern

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Type | Type | string |  |
| Interval | Interval | integer |  |
| Month | Month | integer |  |
| DayOfMonth | DayOfMonth | integer |  |
| DaysOfWeek | DaysOfWeek | array of string |  |
| FirstDayOfWeek | FirstDayOfWeek | string |  |
| Index | Index | string |  |

### RecurrenceRange

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Type | Type | string |  |
| StartDate | StartDate | date-time |  |
| EndDate | EndDate | date-time |  |
| NumberOfOccurrences | NumberOfOccurrences | integer |  |

### CalendarEventListClientReceive

The list of calendar items

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CalendarEventClientReceive | List of calendar items |

### CalendarEventClientReceive

Connector specific calendar event model class for the client

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Subject | Subject | string | Event subject |
| Start time | Start | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Show as | ShowAs | integer | Status to show during the event (Unknown - -1, Free - 0, Tentative - 1, Busy - 2, Oof - 3, WorkingElsewhere - 4) |
| Recurrence | Recurrence | integer | The recurrence pattern for the event (None - 0, Daily - 1, Weekly - 2, Monthly - 3, Yearly - 4) |
| Response type | ResponseType | integer | The response type of the event (None - 0, Organizer - 1, TentativelyAccepted - 2, Accepted - 3, Declined - 4, NotResponded - 5) |
| Response time | ResponseTime | date-time | The response time of the event |
| Event Unique ID | ICalUId | string | A unique identifier that is shared by all instances of an event across different calendars |
| Importance | Importance | integer | The importance of the event (0 - Low, 1 - Normal, 2 - High) |
| Id | Id | string | The event's unique identifier |
| Created time | DateTimeCreated | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified | date-time | The date and time that the event was last modified |
| Organizer | Organizer | email | The organizer of the event |
| Time zone | TimeZone | string | Time zone of the event |
| Series master id | SeriesMasterId | string | Unique identifier for Series Master event type |
| Categories | Categories | array of string | The categories associated with the event |
| Web link | WebLink | uri | The URL to open the event in Outlook Web App |
| Required attendees | RequiredAttendees | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees | string | Resource attendees for the event separated by semicolons |
| Body | Body | string | Body of the message associated with the event |
| Is HTML | IsHtml | boolean | Set to true if the body is Html |
| Location | Location | string | Location of the event |
| Is all day event? | IsAllDay | boolean | Set to true if the event lasts all day |
| Recurrence end time | RecurrenceEnd | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences | integer | How many times to repeat the event |
| Reminder | Reminder | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |

### PaginatedListResponse[CalendarEventClientReceiveStringEnums]

Response containing a list and next link

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Values | Values | array of CalendarEventClientReceiveStringEnums | Values |

### CalendarEventClientReceiveStringEnums

Connector specific calendar event model class for the client

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Importance | Importance | string | The importance of the event: Low, Normal, or High |
| Response type | ResponseType | string | The response type of the event: None, Organizer, TentativelyAccepted, Accepted, Declined or NotResponded |
| Recurrence | Recurrence | string | The recurrence pattern for the event |
| Show as | ShowAs | string | Status to show during the event |
| Subject | Subject | string | Event subject |
| Start time | Start | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Response time | ResponseTime | date-time | The response time of the event |
| Event Unique ID | ICalUId | string | A unique identifier that is shared by all instances of an event across different calendars |
| Id | Id | string | The event's unique identifier |
| Created time | DateTimeCreated | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified | date-time | The date and time that the event was last modified |
| Organizer | Organizer | email | The organizer of the event |
| Time zone | TimeZone | string | Time zone of the event |
| Series master id | SeriesMasterId | string | Unique identifier for Series Master event type |
| Categories | Categories | array of string | The categories associated with the event |
| Web link | WebLink | uri | The URL to open the event in Outlook Web App |
| Required attendees | RequiredAttendees | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees | string | Resource attendees for the event separated by semicolons |
| Body | Body | string | Body of the message associated with the event |
| Is HTML | IsHtml | boolean | Set to true if the body is Html |
| Location | Location | string | Location of the event |
| Is all day event? | IsAllDay | boolean | Set to true if the event lasts all day |
| Recurrence end time | RecurrenceEnd | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences | integer | How many times to repeat the event |
| Reminder | Reminder | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |

### ClientReceiveMessageStringEnums

Receive Email Message

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Importance | Importance | string | The importance of the message |
| From | From | email | The mailbox owner and sender of the message |
| To | To | email | The recipients for the message |
| CC | Cc | email | The Cc recipients for the message |
| BCC | Bcc | email | The Bcc recipients for the message |
| Reply To | ReplyTo | email | The email addresses to use when replying |
| Subject | Subject | string | The subject of the message |
| Body | Body | string | The body of the message |
| Body Preview | BodyPreview | string | The preview of the message |
| Has Attachment | HasAttachment | boolean | Indicates whether the message has attachments |
| Message Id | Id | string | The unique identifier of the message |
| Internet Message Id | InternetMessageId | string | The message ID in the format specified by RFC2822 |
| Conversation Id | ConversationId | string | The Id of the conversation the email belongs to |
| Received Time | DateTimeReceived | date-time | The date and time the message was received |
| Is Read | IsRead | boolean | Indicates whether the message has been read |
| Attachments | Attachments | array of ClientReceiveFileAttachment | The file attachments for the message |
| Is HTML | IsHtml | boolean | Is Html? |

### ClientReceiveFileAttachment

File Attachment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Attachment Id | Id | string | Attachment Id |
| Name | Name | string | Attachment name |
| Content | ContentBytes | byte | Attachment content |
| Content-Type | ContentType | string | Attachment content type |
| Size | Size | integer | The size in bytes of the attachment |
| Is Inline | IsInline | boolean | Set to true if this is an inline attachment |
| Last Modified DateTime | LastModifiedDateTime | date-time | The date and time when the attachment was last modified |
| Content Id | ContentId | string | Content Id |

### BatchResponse[ClientReceiveMessage]

Represents a wrapper object for batch response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ClientReceiveMessage | A list of the response objects |

### ClientReceiveMessage

Receive Email Message

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| From | From | email | The mailbox owner and sender of the message |
| To | To | email | The recipients for the message |
| CC | Cc | email | The Cc recipients for the message |
| BCC | Bcc | email | The Bcc recipients for the message |
| Reply To | ReplyTo | email | The email addresses to use when replying |
| Subject | Subject | string | The subject of the message |
| Body | Body | string | The body of the message |
| Importance | Importance | integer | The importance of the message (0 - Low, 1 - Normal, 2 - High) |
| Body Preview | BodyPreview | string | The preview of the message |
| Has Attachment | HasAttachment | boolean | Indicates whether the message has attachments |
| Message Id | Id | string | The unique identifier of the message |
| Internet Message Id | InternetMessageId | string | The message ID in the format specified by RFC2822 |
| Conversation Id | ConversationId | string | The Id of the conversation the email belongs to |
| Received Time | DateTimeReceived | date-time | The date and time the message was received |
| Is Read | IsRead | boolean | Indicates whether the message has been read |
| Attachments | Attachments | array of ClientReceiveFileAttachment | The file attachments for the message |
| Is HTML | IsHtml | boolean | Is Html? |

### TriggerBatchResponse[ClientReceiveMessage]

Represents a wrapper object for batch trigger response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ClientReceiveMessage | A list of the response objects |

### ApprovalEmailResponse

Approval Email Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| SelectedOption | SelectedOption | string | User response |

### EntityListResponse[Table]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Table | List of values |

### Table

Represents a table.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | The name of the table. The name is used at runtime. |
| DisplayName | DisplayName | string | The display name of the table. |
| DynamicProperties | DynamicProperties | object | Additional table properties provided by the connector to the clients. |

### EntityListResponse[CalendarEventBackend]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CalendarEventBackend | List of values |

### EntityListResponse[CalendarEventClientReceiveStringEnums]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CalendarEventClientReceiveStringEnums | List of values |

### CalendarEventListWithActionType

The list of calendar items with action type

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CalendarEventClientWithActionType | List of calendar items |

### CalendarEventClientWithActionType

Calendar event model with action type

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Action Type | ActionType | string | Changed action type of the event - added, updated or deleted. |
| Is Added | IsAdded | boolean | Flag that indicates whether the event was added since the last poll of the trigger. |
| Is Updated | IsUpdated | boolean | Flag that indicates whether the event was updated since the last poll of the trigger. |
| Subject | Subject | string | Event subject |
| Start time | Start | date-time | Start time of the event (example: '2016-11-01T14:30:00Z') |
| End time | End | date-time | End time of the event (example: '2016-11-01T15:30:00Z') |
| Show as | ShowAs | integer | Status to show during the event (Unknown - -1, Free - 0, Tentative - 1, Busy - 2, Oof - 3, WorkingElsewhere - 4) |
| Recurrence | Recurrence | integer | The recurrence pattern for the event (None - 0, Daily - 1, Weekly - 2, Monthly - 3, Yearly - 4) |
| Response type | ResponseType | integer | The response type of the event (None - 0, Organizer - 1, TentativelyAccepted - 2, Accepted - 3, Declined - 4, NotResponded - 5) |
| Response time | ResponseTime | date-time | The response time of the event |
| Event Unique ID | ICalUId | string | A unique identifier that is shared by all instances of an event across different calendars |
| Importance | Importance | integer | The importance of the event (0 - Low, 1 - Normal, 2 - High) |
| Id | Id | string | The event's unique identifier |
| Created time | DateTimeCreated | date-time | The date and time that the event was created |
| Last modified time | DateTimeLastModified | date-time | The date and time that the event was last modified |
| Organizer | Organizer | email | The organizer of the event |
| Time zone | TimeZone | string | Time zone of the event |
| Series master id | SeriesMasterId | string | Unique identifier for Series Master event type |
| Categories | Categories | array of string | The categories associated with the event |
| Web link | WebLink | uri | The URL to open the event in Outlook Web App |
| Required attendees | RequiredAttendees | email | Required attendees for the event separated by semicolons |
| Optional attendees | OptionalAttendees | email | Optional attendees for the event separated by semicolons |
| Resource attendees | ResourceAttendees | string | Resource attendees for the event separated by semicolons |
| Body | Body | string | Body of the message associated with the event |
| Is HTML | IsHtml | boolean | Set to true if the body is Html |
| Location | Location | string | Location of the event |
| Is all day event? | IsAllDay | boolean | Set to true if the event lasts all day |
| Recurrence end time | RecurrenceEnd | date-time | End time of the recurrence |
| Number of occurrences | NumberOfOccurrences | integer | How many times to repeat the event |
| Reminder | Reminder | integer | Time in minutes before event start to remind |
| Response requested | ResponseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |

### EntityListResponse[ContactResponse]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ContactResponse | List of values |

### ContactResponse

Contact response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Given name | GivenName | string | The contact's given name |
| Home phones | HomePhones | array of string | The contact's home phone numbers |
| Id | Id | string | The contact's unique identifier. |
| Parent folder id | ParentFolderId | string | The ID of the contact's parent folder |
| Birthday | Birthday | date-time | The contact's birthday |
| File as | FileAs | string | The name the contact is filed under |
| Display Name | DisplayName | string | The contact's display name |
| Initials | Initials | string | The contact's initials |
| Middle name | MiddleName | string | The contact's middle name |
| Nickname | NickName | string | The contact's nickname |
| Surname | Surname | string | The contact's surname |
| Title | Title | string | The contact's title |
| Generation | Generation | string | The contact's generation |
| Email addresses | EmailAddresses | array of EmailAddress | The contact's email addresses |
| IM addresses | ImAddresses | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | JobTitle | string | The contact's job title |
| Company name | CompanyName | string | The name of the contact's company |
| Department | Department | string | The contact's department |
| Office location | OfficeLocation | string | The location of the contact's office |
| Profession | Profession | string | The contact's profession |
| Business home page | BusinessHomePage | string | The business home page of the contact |
| Assistant name | AssistantName | string | The name of the contact's assistant |
| Manager | Manager | string | The name of the contact's manager |
| Business phones | BusinessPhones | array of string | The contact's business phone numbers |
| Mobile phone | MobilePhone1 | string | The contact's mobile phone number |
| HomeAddress | HomeAddress | PhysicalAddress |  |
| BusinessAddress | BusinessAddress | PhysicalAddress |  |
| OtherAddress | OtherAddress | PhysicalAddress |  |
| Yomi company name | YomiCompanyName | string | The phonetic Japanese company name of the contact |
| Yomi given name | YomiGivenName | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | YomiSurname | string | The phonetic Japanese surname (last name) of the contact |
| Categories | Categories | array of string | The categories associated with the contact |
| Change key | ChangeKey | string | Identifies the version of the event object |
| Created time | DateTimeCreated | date-time | The time the contact was created |
| Last modified time | DateTimeLastModified | date-time | The time the contact was modified |

### binary

This is the basic data type 'binary'.