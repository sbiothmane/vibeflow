---
layout: Reference
title: Office 365 Groups - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/office365groups/
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
document_id: 66d136b3-75bc-fd53-2d17-15f0904a0b54
document_version_independent_id: 71609855-7cb2-9994-e8f3-13fe93d9aa54
updated_at: 2025-10-16T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/office365groups/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/f398b8f5a0d8b77a6cb967dd994f0f7a11ba5dfc/docs/office365groups/index.yml
git_commit_id: f398b8f5a0d8b77a6cb967dd994f0f7a11ba5dfc
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: office365groups/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/office365groups/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/6ab06385-661e-4214-8870-bbe4071c960d
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/131ba09e-4280-4ae7-8622-1f9f1c0daad1
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: a4cb2f98-fc92-ecad-a212-0114a097b3ff
---

# Office 365 Groups

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1777/1.0.1777.4410/office365groups/icon.png)
Office 365 Groups lets you manage group membership and calendar events in your organization using your Office 365 account. You can perform various actions such as get group roster, add or remove members and create group events.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Office 365 Groups |
| URL | [https://learn.microsoft.com/en-us/connectors/office365groups/](/en-us/connectors/office365groups/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://www.office.com/ |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | AI;Business Intelligence |

## Known Issues and Limitations

1. The When a group member is added or removed trigger can return the same change in subsequent responses due to underlying backend service limitations. Your Power Automate flow or LogicApps application must be prepared for such replays. Please learn more [here](/en-us/graph/delta-query-overview#replays).
2. If you see the "Cannot Update a mail-enabled security groups and or distribution list" error, please use the Exchange admin center to manage such groups.
3. Microsoft Entra ID groups with the attribute "isAssignableToRole" are not supported for now.
4. Send an HTTP request/Send an HTTP request V2 (Preview) actions. If you get an error similar to:

- `{ "error": { "code": "Forbidden", "message": "" } }`
- `{ "error": { "code": "Authorization_RequestDenied", "message": "Insufficient privileges to complete the operation." } }` then it could be because this connector has a limited set of scopes. If your scenario requires something more advanced, please use the "HTTP" connector or create a custom connector.

## Pagination

[Pagination](/en-us/graph/paging) is needed for queries that return larger lists of results.

- [The pagination feature](https://make.powerautomate.com/en-us/blog/four-connector-action-settings/) in Power Automate and Logic Apps supports some of the operations in the Office 365 Groups connector.
- Canvas Apps gallery control does not supported automatic pagination for the Office 365 Groups connector. Paging must be implemented manually and cached in a collection.

### Supported operations

- `ListGroupMembers`
- `OnGroupMembershipChange`
- `ListGroups`

To implement a paging experience in canvas apps, parse the `@odata.nextLink` field to retrieve the `$skipToken` value.

Warning

This field should not be used in Power Automate or Logic Apps. Please only use the `@odata.nextLink` and `$skipToken` fields in canvas apps.

### Manual pagination in canvas apps

#### Initial Load

To load the first page of the data, use the below code in an action property of a logical control (e.g., the page's `OnVisible` property or on a button that initiates a search).

```powerapps
/* Call the	ListGroups operation and save response to a variable */
Set( var_response, Office365Groups.ListGroups() );

/* Parse the $skipToken value from the @odata.nextLink value in the response */
Set( var_nextLink, Last(Split( var_response.'@odata.nextLink', "=")).Result );

/* Save the response into a collection */
ClearCollect( col_groups, var_response.value );

/* Clear out the previous pages collection */
Clear( col_prevLinksData );

/* Reset page counter to 1 */
Set( var_page, 1 );
```

#### Load next page

```powerapps

/* Update page counter */
Set( var_page, var_page + 1 );

/* Save the last link in a collection */
Collect( col_prevLinksData, { 
    page: var_page, 
    link: var_nextLink 
} );

/* Get next page response */
Set( var_response, Office365Groups.ListGroups({ '$skiptoken': var_nextLink }));

/* Parse the next page's skiptoken value */
Set( var_nextLink, Last(Split( var_response.'@odata.nextLink', "=" )).Result );

/* Save the page results to the collection */
ClearCollect( col_groups, var_response.value );
```

Then use the `col_groups` collection in the `Items` property of a gallery control (or other data set control) to display the loaded list of items.

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
| Frequency of trigger polls | 1 | 120 seconds |

## Actions

| Add member to group | This operation is used to add a member to an O365 group, using a UPN. |
| --- | --- |
| Create a group event (V2) | This operation is used to create a new event in a group calendar. |
| Create a group event [DEPRECATED] | This action has been deprecated. Please use [Create a group event (V2)](/en-us/connectors/office365groups/#create-a-group-event-%28v2%29) instead.<br><br>~~This operation is used to create a new event in a group calendar.~~ |
| Delete event (V2) | This operation deletes an event in a calendar. |
| List deleted groups | Lists deleted groups that can be restored. |
| List deleted groups by owner | List deleted groups that can be restored by owner |
| List group members | This operation returns a list of all members in the given group and their details such as name, title, email, etc. You can query up to 1000 items using Top parameter. In case you need to retrieve more than 1000 values please turn on Settings-&gt;Pagination feature and provide Threshold limit. |
| List groups | This operation returns a list of all groups in the organization. |
| List groups that I own and belong to | This operation returns a list of all groups that you own and belong to. |
| List my owned groups | This operation returns a list of all groups that you own. |
| List my owned groups (V2) | This operation returns a list of all groups that you own. |
| Remove member from group | This operation is used to remove a member from an O365 group, using a UPN. |
| Restore a deleted group | Restore a recently deleted group |
| Send an HTTP request [DEPRECATED] | This action has been deprecated. Please use [Send an HTTP request V2](/en-us/connectors/office365groups/#send-an-http-request-v2) instead.<br><br>~~Construct a Microsoft Graph REST API request to invoke. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api)~~ |
| Send an HTTP request V2 | Construct a Microsoft Graph REST API request to invoke. There is one segment that is supported: /groups. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api). |
| Update a group event | This operation is used to update a new event in a group calendar. |

### Add member to group

- Operation ID:
    - AddMemberToGroup

This operation is used to add a member to an O365 group, using a UPN.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| User Principal Name | userUpn | True | string | The user principal name (UPN) of the user. |

### Create a group event (V2)

- Operation ID:
    - CreateCalendarEventV2

This operation is used to create a new event in a group calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| Subject | subject | True | string | Title of the event. |
| Start Time | dateTime | True | date-time | Start time of the event (example: '2016-11-01T14:30:00'). |
| End Time | dateTime | True | date-time | End time of the event (example: '2016-11-01T15:30:00'). |
| Body | content |  | html | Body of the message associated with the event. |
| Location | displayName |  | string | Location of the event. |
| Importance | importance |  | string | The importance of the event: Low, Normal, or High. |
| Is All Day | isAllDay |  | boolean | Set to true if the event lasts all day. |
| Is Reminder On | isReminderOn |  | boolean | Set to true if the event has a reminder. |
| Reminder Start Duration | reminderMinutesBeforeStart |  | integer | Time in minutes before event start to remind. |
| Show As | showAs |  | string | Status to show during the event. |
| Response Requested | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined. |

#### Returns

- Body
    - CreateCalendarEvent_Response

### Create a group event [DEPRECATED]

- Operation ID:
    - CreateCalendarEvent

This action has been deprecated. Please use [Create a group event (V2)](/en-us/connectors/office365groups/#create-a-group-event-%28v2%29) instead.

~~This operation is used to create a new event in a group calendar.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| Subject | subject | True | string | Title of the event. |
| Start Time | dateTime | True | date-time | Start time of the event (example: '2016-11-01T14:30:00'). |
| End Time | dateTime | True | date-time | End time of the event (example: '2016-11-01T15:30:00'). |
| Body | content |  | string | Body of the message associated with the event. |
| Body Content Type | contentType |  | string | Pick the content type: Text or Html. |
| Location | displayName |  | string | Location of the event. |
| Importance | importance |  | string | The importance of the event: Low, Normal, or High. |
| Is All Day | isAllDay |  | boolean | Set to true if the event lasts all day. |
| Is Reminder On | isReminderOn |  | boolean | Set to true if the event has a reminder. |
| Reminder Start Duration | reminderMinutesBeforeStart |  | integer | Time in minutes before event start to remind. |
| Show As | showAs |  | string | Status to show during the event. |
| Response Requested | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined. |

#### Returns

- Body
    - CreateCalendarEvent_Response

### Delete event (V2)

- Operation ID:
    - CalendarDeleteItem\_V2

This operation deletes an event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| Id | event | True | string | Select an event |

### List deleted groups

- Operation ID:
    - ListDeletedGroups

Lists deleted groups that can be restored.

#### Returns

- Body
    - ListGroups_Response

### List deleted groups by owner

- Operation ID:
    - ListDeletedGroupsByOwner

List deleted groups that can be restored by owner

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User Id | userId | True | guid | Enter a user id. |

#### Returns

- Body
    - ListGroups_Response

### List group members

- Operation ID:
    - ListGroupMembers

This operation returns a list of all members in the given group and their details such as name, title, email, etc. You can query up to 1000 items using Top parameter. In case you need to retrieve more than 1000 values please turn on Settings-&gt;Pagination feature and provide Threshold limit.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| Top | $top |  | integer | Number of group members to retrieve (from 1 to 999, default is 100). |

#### Returns

- Body
    - ListGroupMembers_Response

### List groups

- Operation ID:
    - ListGroups

This operation returns a list of all groups in the organization.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |
| Filter rows | $filter |  | string | Enter an OData style filter expression to limit which rows are listed. |
| Page size | $top |  | integer | Sets the page size of results. |
| Skip token | $skiptoken |  | string | Token that references the next page of results and is returned in the @odata.nextLink property in the response. |

#### Returns

- Body
    - ListGroups_Response

### List groups that I own and belong to

- Operation ID:
    - ListOwnedGroups\_V3

This operation returns a list of all groups that you own and belong to.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

- Body
    - ListOwnedGroups_Response

### List my owned groups

- Operation ID:
    - ListOwnedGroups

This operation returns a list of all groups that you own.

#### Returns

- Body
    - ListOwnedGroups_Response

### List my owned groups (V2)

- Operation ID:
    - ListOwnedGroups\_V2

This operation returns a list of all groups that you own.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

- Body
    - ListOwnedGroups_V2_Response

### Remove member from group

- Operation ID:
    - RemoveMemberFromGroup

This operation is used to remove a member from an O365 group, using a UPN.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| User Principal Name | userUpn | True | string | The user principal name (UPN) of the user |

### Restore a deleted group

- Operation ID:
    - RestoreDeletedGroup

Restore a recently deleted group

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |

### Send an HTTP request [DEPRECATED]

- Operation ID:
    - HttpRequest

This action has been deprecated. Please use [Send an HTTP request V2](/en-us/connectors/office365groups/#send-an-http-request-v2) instead.

~~Construct a Microsoft Graph REST API request to invoke. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| URI | Uri | True | string | The full or relative URI. Example: `https://graph.microsoft.com/{version}/{resource}`. |
| Method | Method | True | string | The HTTP method (default is GET). |
| Body | Body |  | binary | The request body content. |
| Content-Type | ContentType |  | string | The content-type header for the body (default is application/json). |
| CustomHeader1 | CustomHeader1 |  | string | Custom header 1. Specify in format: header-name: header-value |
| CustomHeader2 | CustomHeader2 |  | string | Custom header 2. Specify in format: header-name: header-value |
| CustomHeader3 | CustomHeader3 |  | string | Custom header 3. Specify in format: header-name: header-value |
| CustomHeader4 | CustomHeader4 |  | string | Custom header 4. Specify in format: header-name: header-value |
| CustomHeader5 | CustomHeader5 |  | string | Custom header 5. Specify in format: header-name: header-value |

#### Returns

- response
    - ObjectWithoutType

### Send an HTTP request V2

- Operation ID:
    - HttpRequestV2

Construct a Microsoft Graph REST API request to invoke. There is one segment that is supported: /groups. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| URI | Uri | True | string | The full or relative URI. Example: `https://graph.microsoft.com/{version}/{resource}`. |
| Method | Method | True | string | The HTTP method (default is GET). |
| Body | Body |  | binary | The request body content. |
| Content-Type | ContentType |  | string | The content-type header for the body (default is application/json). |
| CustomHeader1 | CustomHeader1 |  | string | Custom header 1. Specify in format: header-name: header-value |
| CustomHeader2 | CustomHeader2 |  | string | Custom header 2. Specify in format: header-name: header-value |
| CustomHeader3 | CustomHeader3 |  | string | Custom header 3. Specify in format: header-name: header-value |
| CustomHeader4 | CustomHeader4 |  | string | Custom header 4. Specify in format: header-name: header-value |
| CustomHeader5 | CustomHeader5 |  | string | Custom header 5. Specify in format: header-name: header-value |

#### Returns

- response
    - ObjectWithoutType

### Update a group event

- Operation ID:
    - UpdateCalendarEvent

This operation is used to update a new event in a group calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |
| Id | event | True | string | Select an event |
| Subject | subject | True | string | Title of the event. |
| Start Time | dateTime | True | date-time | Start time of the event (example: '2016-11-01T14:30:00'). |
| End Time | dateTime | True | date-time | End time of the event (example: '2016-11-01T15:30:00'). |
| Body | content |  | html | Body of the message associated with the event. |
| Location | displayName |  | string | Location of the event. |
| Importance | importance |  | string | The importance of the event: Low, Normal, or High. |
| Is All Day | isAllDay |  | boolean | Set to true if the event lasts all day. |
| Is Reminder On | isReminderOn |  | boolean | Set to true if the event has a reminder. |
| Reminder Start Duration | reminderMinutesBeforeStart |  | integer | Time in minutes before event start to remind. |
| Show As | showAs |  | string | Status to show during the event. |
| Response Requested | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined. |

#### Returns

- Body
    - CreateCalendarEvent_Response

## Triggers

| When a group member is added or removed | This operation triggers when a member is added to or removed from the given group. |
| --- | --- |
| When there is a new event | This operation triggers when a new event is added to a group calendar. |

### When a group member is added or removed

- Operation ID:
    - OnGroupMembershipChange

This operation triggers when a member is added to or removed from the given group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| User Id | id | string | Unique id of the user. |
| Reason | @removed.reason | string | Reason that caused the user to be removed from the group. |

### When there is a new event

- Operation ID:
    - OnNewEvent

This operation triggers when a new event is added to a group calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | guid | Pick a group from the drop down or enter group id. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique id of the event. |
| Reminder Start Duration | reminderMinutesBeforeStart | integer | The number of minutes before the start of the event the reminder will fire. |
| Is Reminder On | isReminderOn | boolean | Set to true if the event has a reminder. |
| Subject | subject | string | Title of the event. |
| Importance | importance | string | The importance of the event: Low, Normal, or High. |
| Is All Day | isAllDay | boolean | Set to true if the event lasts all day. |
| Response Requested | responseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined. |
| Show As | showAs | string | Status to show during the event. |
| Content Type | body.contentType | string | Body of the message associated with the event. |
| Content | body.content | string | Pick the content type: Text or Html. |
| Date Time | start.dateTime | date-time | Start time of the event (example: '2016-11-01T14:30:00-07:00'). |
| Time Zone | start.timeZone | string | Time zone of the event, specified as a time zone index value (example: 'Pacific Standard Time'). |
| Date Time | end.dateTime | date-time | End time of the event (example: '2016-11-01T15:30:00-07:00'). |
| Time Zone | end.timeZone | string | Time zone of the event, specified as a time zone index value (example: 'Pacific Standard Time'). |
| Name | location.displayName | string | The display name for the location of the event. |

## Definitions

### SensitivityLabelMetadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sensitivityLabelId | sensitivityLabelId | string | SensitivityLabel Id. |
| name | name | string | SensitivityLabel name. |
| displayName | displayName | string | SensitivityLabel displayName info |
| tooltip | tooltip | string | SensitivityLabel details on tooltip. |
| priority | priority | integer | SensitivityLabel priority. |
| color | color | string | SensitivityLabel color. |
| isEncrypted | isEncrypted | boolean | is SensitivityLabel Encrypted. |
| isEnabled | isEnabled | boolean | Whether SensitivityLabel is Enabled. |
| isParent | isParent | boolean | Whether SensitivityLabel is Parent. |
| parentSensitivityLabelId | parentSensitivityLabelId | string | Parent SensitivityLabel Id. |

### ListGroupMembers\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OData NextLink | @odata.nextLink | string | Only used in Power Apps Canvas to genereate the `$skipToken` for pagination. Power Automate and Logic Apps must use the pagination setting. |
| value | value | array of object | value |
| User Id | value.id | string | Unique id of the user. |
| Display Name | value.displayName | string | User's display name. |
| Given Name | value.givenName | string | User's first name. |
| Job Title | value.jobTitle | string | User's job title. |
| Mail | value.mail | string | User's email address. |
| Mobile Phone | value.mobilePhone | string | User's mobile number. |
| Office Location | value.officeLocation | string | User's office address. |
| Surname | value.surname | string | User's last name. |
| User Principal Name | value.userPrincipalName | string | UPN id of the user. |

### ListOwnedGroups\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Classification | value.classification | string | O365 group classification. |
| Created Date-Time | value.createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Deleted Date-Time | value.deletedDateTime | string | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Description | value.description | string | More information about the group. |
| Name | value.displayName | string | O365 group name. |
| Group Id | value.id | string | Unique identifier of the group. |
| Email | value.mail | string | Email address of the group. |
| Mail Enabled | value.mailEnabled | boolean | True if mail is enabled for the group. |
| Nickname | value.mailNickname | string | Group nickname. |
| On-Premises Last Sync Date-Time | value.onPremisesLastSyncDateTime | string | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| On-Premises Security Identifier | value.onPremisesSecurityIdentifier | string | The on-premises security identifier. |
| On-Premises Sync Enabled | value.onPremisesSyncEnabled | string | True if on-premises sync is enabled for the group. |
| Renewed Date-Time | value.renewedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Security Enabled | value.securityEnabled | boolean | True if the owner is security enabled. |
| Visibility | value.visibility | string | The owner's visibility. |
| sensitivityLabelInfo | value.sensitivityLabelInfo | array of SensitivityLabelMetadata | List of Sensitivity Label Information |

### ListOwnedGroups\_V2\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Classification | value.classification | string | O365 group classification. |
| Created Date-Time | value.createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Description | value.description | string | More information about the group. |
| Name | value.displayName | string | O365 group name. |
| Group Id | value.id | string | Unique identifier of the group. |
| Email | value.mail | string | Email address of the group. |
| Mail Enabled | value.mailEnabled | boolean | True if mail is enabled for the group. |
| Nickname | value.mailNickname | string | Group nickname. |
| On-Premises Last Sync Date-Time | value.onPremisesLastSyncDateTime | string | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| On-Premises Security Identifier | value.onPremisesSecurityIdentifier | string | The on-premises security identifier. |
| On-Premises Sync Enabled | value.onPremisesSyncEnabled | string | True if on-premises sync is enabled for the group. |
| Renewed Date-Time | value.renewedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Security Enabled | value.securityEnabled | boolean | True if the owner is security enabled. |
| Visibility | value.visibility | string | The owner's visibility. |
| sensitivityLabelInfo | value.sensitivityLabelInfo | array of SensitivityLabelMetadata | List of Sensitivity Label Information |

### ListGroups\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OData NextLink | @odata.nextLink | string | Only used in Power Apps Canvas to genereate the `$skipToken` for pagination. Power Automate and Logic Apps must use the pagination setting. |
| value | value | array of object | value |
| Classification | value.classification | string | O365 group classification. |
| Created Date-Time | value.createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Description | value.description | string | More information about the group. |
| Name | value.displayName | string | O365 group name. |
| Group Id | value.id | string | Unique identifier of the group. |
| Email | value.mail | string | Email address of the group. |
| Mail Enabled | value.mailEnabled | boolean | True if mail is enabled for the group. |
| Nickname | value.mailNickname | string | Group nickname. |
| On-Premises Last Sync Date-Time | value.onPremisesLastSyncDateTime | string | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| On-Premises Security Identifier | value.onPremisesSecurityIdentifier | string | The on-premises security identifier. |
| On-Premises Sync Enabled | value.onPremisesSyncEnabled | boolean | True if on-premises sync is enabled for the group. |
| Renewed Date-Time | value.renewedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (ISO8601 format, UTC timezone) |
| Security Enabled | value.securityEnabled | boolean | True if the owner is security enabled. |
| Visibility | value.visibility | string | The owner's visibility. |
| sensitivityLabelInfo | value.sensitivityLabelInfo | array of SensitivityLabelMetadata | List of Sensitivity Label Information |

### CreateCalendarEvent\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique id of the event. |
| Reminder Start Duration | reminderMinutesBeforeStart | integer | Time in minutes before event starts to remind. |
| Is Reminder On | isReminderOn | boolean | Set to true if the event has a reminder. |
| Subject | subject | string | Title of the event. |
| Importance | importance | string | The importance of the event: Low, Normal, or High. |
| Is All Day | isAllDay | boolean | True if the event is an all day event. |
| Response Requested | responseRequested | boolean | True if a response was requested for the event. |
| Show As | showAs | string | Status to show during the event. |
| Content Type | body.contentType | string | Text or Html. |
| Content | body.content | string | The content of the body of this event. |
| Date Time | start.dateTime | date-time | Start time of the event (example: '2016-11-01T14:30:00-07:00'). |
| Time Zone | start.timeZone | string | Time zone of the event, specified as a time zone index value (example: 'Pacific Standard Time'). |
| Date Time | end.dateTime | date-time | End time of the event (example: '2016-11-01T15:30:00-07:00'). |
| Time Zone | end.timeZone | string | Time zone of the event, specified as a time zone index value (example: 'Pacific Standard Time'). |
| Name | location.displayName | string | The display name for the location of the event. |

### ObjectWithoutType