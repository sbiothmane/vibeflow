---
layout: Reference
title: Office 365 Outlook - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/office365/
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
document_id: cc40a098-af8c-d8a9-4538-71d184efbe91
document_version_independent_id: 0ee8cf79-18e9-d923-607f-ef40cdd23e4d
updated_at: 2026-05-11T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/office365/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d67efc61c65a04647e7202764a34cd2977452bba/docs/office365/index.yml
git_commit_id: d67efc61c65a04647e7202764a34cd2977452bba
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: office365/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/office365/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/6ab06385-661e-4214-8870-bbe4071c960d
- https://authoring-docs-microsoft.poolparty.biz/devrel/3e34b70d-bca0-4369-a01b-71d1edfd427b
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/131ba09e-4280-4ae7-8622-1f9f1c0daad1
- https://authoring-docs-microsoft.poolparty.biz/devrel/8ca32b3f-fa14-46df-b09a-9c4a591d6396
platformId: f26513a2-f150-1ede-06fd-e2cb324a9da5
---

# Office 365 Outlook

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1809/1.0.1809.4721/office365/icon.png)
Microsoft Office 365 is a cloud-based service that is designed to help meet your organization's needs for robust security, reliability, and user productivity.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Office 365 Users |
| URL | [https://learn.microsoft.com/en-us/connectors/office365users/](/en-us/connectors/office365users/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

To learn how to use this connector in Power Apps, go to [Connect to Office 365 Outlook from Power Apps](/en-us/powerapps/maker/canvas-apps/connections/connection-office365-outlook). Some of operations operate with Graph API. You can find Graph API IP addresses in [Office 365 URLs and IP address ranges](/en-us/office365/enterprise/urls-and-ip-address-ranges).

## Deprecated operations decommission

Due to underlying APIs decommission process, it's highly recommended to update existing solutions to avoid usage of operations marked as [DEPRECATED].

## Known issues and limitations with actions

| Short description | Operations | Long description |
| --- | --- | --- |
| Incorrect email attachment with digitally signed emails | All | For [digitally signed emails](https://support.microsoft.com/office/secure-messages-by-using-a-digital-signature-549ca2f1-a68f-4366-85fa-b3f4b5856fc6), the action output may contain incorrect attachment content, which can't be used as input in subsequent actions (for example, to create a new file with attachment content). |
| Support of HTML/action cards in different mail clients | Send approval emailSend email with options | When sending emails with options or approvals, the action card (actionable message) rendering in Outlook won't support HTML in the body of the message (if HTML buttons are clicked, the output of the action can have `null` values for some fields). The rendering behavior of HTML in the body of the message depends on the options `Use Only HTML Message` and `Hide HTML Message`.If `Use Only HTML Message` is set to **Yes**, all mail clients will show only the HTML buttons. The action card buttons will not be rendered.If `Use Only HTML Message` is set to **No**, and `Hide HTML Message` is set to **Yes**, only the action card buttons will show.If `Use Only HTML Message` is set to **No**, and `Hide HTML Message` is set to **No**, some mail clients will show both the action card and the HTML message, and some mail clients will show only the action card.Actionable Messages are only supported with single user mailboxes. Group and shared mailboxes are not supported.For information on the support of action cards in different mail clients, go to [Outlook version requirements for actionable messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages). |
| Receive meeting updates | Update Event (V4) | If you use this operation and you're the organizer of the event, all the attendees will receive meeting updates. Also, due to the current design, all event fields omitted during the update will be reset to default values. Therefore, you need to fill all the event properties with intended values or re-fill current values (please use Get event (V3) action), in case you are not going to update them. |
| When the event is updated, only one day of the week remains | Update Event (V4) | If the event that you are updating repeats several times a week every week, do not forget to specify these days in the `Selected days of week` parameter. Otherwise, after the update, one day of the week will be saved, which will be taken from the 'Start Time' parameter. |
| Set third-party mail filters | Send email with optionsSend approval email | Third-party mail filters (like G Suite and Mimecast) will autoselect the user options in action. For this reason, set `Show HTML confirmation dialog` to **Yes** to avoid this problem related to the functionality. |
| Send action cards/HTML | Send email with optionsSend approval email | These actions send action cards (actionable messages) and HTML content. The response will be localized only in case you push the button in an actionable message itself (not in HTML content). In Sovereign clouds, action cards are rendered only to the sender of the email, but not to other recipients. This happens even if the HTML content is rendered for all recipients. |
| Send an email from a shared mailbox | Send an email from a shared mailbox (V2) | The operation is expected to work for the Microsoft 365 shared mailbox feature only. |
| Workaround for rooms returned over 100 | Get rooms (V2) | The number of rooms returned is limited to 100. As a workaround, query for room lists using Get rooms in room list (V2). Then, search for the rooms inside the selected list. |
| Email encryption limitation | Reply to email (V3) | Emails that are encrypted aren't supported by the connector when using this action. Therefore, if you try to send an email to Outlook that has email encryption turned on, you'll see the error with a note that the request has failed. |
| Reply to email action changes datetime to UTC | Reply to email (V3) | `Sent` datetime of the original email is converted to UTC time zone due to underlying system limitations. |
| Send an email (V2) does not return message id | Send an email (V2) | There is no way to get the messageid when sending a message. |
| Send an email from the converted from a personal shared mailbox | Send an email from a shared mailbox (V2) | Action does not work for shared mailboxes that were converted from personal mailboxes. |
| Maximum number of events returned limitation | Get calendar view of events (V3) | The maximum number of events which can be returned is 256. To retrieve more than 256 events utilize the `Skip Count` and `Top Count` parameters to retrieve lists of events in incremental fashion. |
| Send approval email response returns null | Send approval email | When users click the Actionable Message card options at the **top of an email**, values for `userid`, `useremailaddress`, and `usertenantid` are retrieved. If users click an option from the email body, these values remain empty. Additionally, when sending an approval email, the response for `userid`, `useremailaddress`, and `usertenantid` is null.  In some scenarios, the values for `userid`, `useremailaddress`, and `usertenantid` fields return as null or empty even when the recipient interacts with the native Actionable Message buttons. |
| Not all calendars are available for users when creating flows | Get calendar view of events (V3) | While using Classic Outlook, users are unable to see all of the calenders created by the creating flow. It is necessary to turn on shared calendar improvements: [How to enable and disable the Outlook calendar sharing updates - Microsoft Support](https://support.microsoft.com/en-us/office/how-to-enable-and-disable-the-outlook-calendar-sharing-updates-c3aec5d3-55ce-4cea-84b0-80aab6d8dc26). Afterwards, remove and re-add the existing invites. |

## Known issues and limitations with triggers

| Short description | Operations | Long description |
| --- | --- | --- |
| Incorrect email attachment with digitally signed emails | All | For [digitally signed emails](https://support.microsoft.com/office/secure-messages-by-using-a-digital-signature-549ca2f1-a68f-4366-85fa-b3f4b5856fc6), the trigger output may contain incorrect attachment content, which can't be used as input in subsequent actions (for example, to create a new file with attachment content). |
| Emails are missed due to system limitations | All | If there are many emails sent at the same time, some emails could be missed by the trigger due to underlying system limitations. This issue occurs rarely and is related to the mail triggers. |
| Trigger may run twice on emails with attachments with Dynamic Delivery | All | If [Safe Attachments in Microsoft Defender for Office 365](/en-us/microsoft-365/security/office-365-security/safe-attachments) is configured with Dynamic Delivery option, the trigger may run twice on receiving a new email. The first time it runs, attachments array in the trigger response is empty. As a workaround for emails with attachments, have a condition after the trigger that verifies whether the length of the attachments array is greater than 0. |
| Monitor multiple mailboxes or calendars | All | If you want to configure a trigger to monitor multiple mailboxes or calendars, create a separate flow/LogicApp for each mailbox or calendar. |
| Trigger fires twice | When a new event is created (V3) | When you accept a meeting invitation, the trigger would fire second time for this meeting event. The reason that the Outlook service treats an event after acceptance as a new event and rewrites its Id and created date—it recreates event. The user can work around this issue by filtering the trigger's outputs on the `Response type` parameter using built-in control module and its action's condition. |
| Trigger fires for all events in a recurring event | When an event is added, updated or deleted (V3) | Trigger fires on each event occurrence. When you change a recurring event, it affects all events in this series. For example, if a series has 15 occurrences, the trigger will fire 15 times. |
| Trigger fires with `Deleted` value in `Action Type` parameter for events outside interval window | When an event is added, updated or deleted (V3) | When a flow is configured to trigger for events inside of a specific time interval, all events outside of the defined interval — create, update, or deleted — will trigger the flow as `Action Type` parameter with a `Deleted` value. This situation can occur because of the following reason:Interval periods are set at the time of the trigger creation and then updated one time per week, i.e., if 6 days have passed since the trigger was created, and the days 30 (before) and 30 (after) were set in the fields, then these dates will be relevant at the time of trigger creation. After 6 days it will look as if 36 (before) and 24 (after) were set. After 7 days, the trigger will automatically update and the dates will again be 30 (before) and 30 (after).The main reason of this limitation is because of Microsoft Graph’s delta query behavior. For more information, go to [event: delta - Microsoft Graph v1.0 - Microsoft Learn](/en-us/graph/api/event-delta?view=graph-rest-1.0&amp;tabs=http#response). |
| Trigger provides unnecessary updates | When an event is added, updated or deleted (V3) | An event can be updated due to internal Exchange processes and the trigger will fire again because of that. Users can filter a trigger's outputs on the `Action Type` parameter to ignore unnecessary updates. |
| Delay in a trigger fire | When a new email arrives (V3)When a new email mentioning me arrives (V3)When an email is flagged (V3)When an event is added, updated or deleted (V3) | Triggers fire on the corresponding event's occurrence almost immediately in most cases, but there could be rare circumstances when the trigger's delay to fire may take up to one hour. |
| Trigger behavior when an email folder is changed | When a new email arrives (V3)When a new email arrives in a shared mailbox (V2)When a new email mentioning me arrives (V2) | 1. Triggers are based on the date and time an email was received. Moving an email to another folder does not change the received date property value, so the triggers will skip any email that was received prior to the latest successful run. For Example : When two emails (A and B) are received in quick succession, moving email B to a folder first sets the trigger time to the time email B was moved. As a result, when email A is moved to the same folder afterward, it doesn’t trigger the action because the trigger is now only looking for emails received after the time email B and moved to folder. 2. Trigger will only check for emails inside folder for which trigger is configured to in flow. If any rules are set to move emails to folder/sub folder, trigger is not expected to fire if trigger is confgured to check emails inside Inbox folder. Please select right folder. |
| Flow intermittently triggers for older emails when moved to folder | When a new email arrives in a shared mailbox (V2) | The flow intermittently triggers for both older emails and the latest emails moved to another folder. This is by design and may result in inconsistent behavior. |
| Trigger behavior on flagged email | When an email is flaggedWhen an email is flagged (V2)When an email is flagged (V3)When an email is flagged (V4) | Triggers fire on flagging an email or receiving a flagged email. Also, if an already flagged email is modified in any way (for example, an email category is changed or an email is replied), the trigger will fire on this email. Furthermore, when multiple emails are flagged at once, it causes the trigger to run multiple times for few emails. |
| Trigger limitation for shared mailboxes | When a new email arrives in a shared mailbox (V2) | The trigger won't work in cases of user-to-user shared mailboxes unless one of the users has full access to the other mailbox (which includes more permissions than just sending emails). |
| Trigger timeout with attachments | When a new email arrives (V3) | Setting `Include Attachments` to **Yes** causes the connector to wait for all attachments to be downloaded. When many emails with attachments arrive around the same time, the connector can timeout while downloading these attachments.To avoid this, the trigger should be changed to set `Include Attachments` to **No**, and the logic should be changed to add the Get Attachment (V2) action to download the attachment.Additionally, LogicApps authors should ensure that the Office 365 mailbox and the LogicApp are hosted in the same region to reduce attachment download time. |
| Trigger limitation when using To Or CC filter | When a new email arrives (V3) | When filtering by the To or CC field, only that field should be populated and the others left empty. If both the To and CC fields are set, then the trigger will fire only for emails that have the emailId(s) in both of the fields. |
| Email encryption limitation | When a new email arrives (V3)When a new email arrives in a shared mailbox (V2) | The output of triggers does not contain actual message body but will have note mentioning the message is secured and prohibited and this response is from backend. |

## Common errors

| Error | Solution |
| --- | --- |
| Access to OData is disabled or most errors when using the connector | Check that the REST API is enabled. Accounts on a dedicated (on-premise) mail server or accounts that are sandbox (test) accounts may also see an error. Your administrator can learn how to migrate a mailbox in [How to migrate mailbox data by using the Exchange Admin Center in Office 365](/en-us/exchange/troubleshoot/move-or-migrate-mailboxes/migrate-data-with-admin-center). If you are using an EWS application access policy, ensure that the following user-agents are allowed: "LogicAppsDesigner/*","azure-logic-apps/*","PowerApps/*", "Mozilla/*", "Microsoft Flow\*", "*Azure.Connectors.Office365Outlook.Office365OutlookConnector*", "*Azure.Connectors.Outlook.OutlookConnector*", "PowerAutomateLocal/\*", "PowerAutomateCloud/\*". |
| REST API is not yet supported for this mailbox | The error can occur if the mailbox is on a dedicated Microsoft Exchange Server and is not a valid Office 365 mailbox. For more details, go to [REST API is not yet supported for this mailbox error for request to a mailbox](/en-us/exchange/troubleshoot/user-and-shared-mailboxes/rest-api-is-not-yet-supported-for-this-mailbox-error). |
| Specified object was not found in the store | - Verify the permissions for the account.<br>- Verify the user account used for the trigger is a member of the shared mailbox.<br>- Verify that the original mailbox address field contains the shared mailbox address.<br>- Re-check the shared mailbox configuration in the [admin center](https://admin.microsoft.com/).<br>- Delete the current Outlook connection and create a new one.<br><br> Also, this error is displayed when the message has been moved or deleted by the mailbox owner. To learn more, go to [Configure shared mailbox settings](/en-us/microsoft-365/admin/email/configure-a-shared-mailbox?view=o365-worldwide). |
| AADSTS53003: Access has been blocked by Conditional Access policies and the access policy does not allow token issuance and other Conditional Access errors | Conditional Access policies can prevent the connector from running as expected. To learn more, go to the [Microsoft Entra ID Conditional Access documentation](/en-us/azure/active-directory/conditional-access/). |

## General known issues and limitations

- To use this integration, you'll need access to an Office 365 mailbox that has the REST API enabled. To make a connection, select **Sign In**. You'll be prompted to provide your Office 365 account. Then, follow the instructions to create a connection.
- There are two types of [email attachments](/en-us/exchange/client-developer/exchange-web-services/attachments-and-ews-in-exchange):

    - **File attachments:** Any file, such as a .txt, .jpg, .zip, .pdf, and others. One of the few properties in a file attachment is the base64 encoded content of the file. The latest versions of all triggers support these attachments. EML, MSG, and ICS files should be attached within .zip archives to be available in trigger responses.
    - **Item attachments:** Email messages, calendar items, and NDR (Non-Delivery Report) emails that are attached to an email. Item attachments have many properties. These attachments, including NDR emails, are not supported by the connector at the moment. To workaround this issue, you can do the following:

        - Use [Invoke an HTTP request](/en-us/connectors/webcontents/#invoke-an-http-request) action under the [HTTP with Microsoft Entra ID](/en-us/connectors/webcontents/) connector.
        - When creating a connection for the [HTTP with Microsoft Entra ID](/en-us/connectors/webcontents/) connector, input text `https://graph.microsoft.com/` for both `Microsoft Entra ID Resource URI` and `Base Resource URL` connection parameters.

        Warning

        Don't use the public endpoint (`https://graph.microsoft.com`) for national clouds. To learn more, go to [Microsoft Graph and Graph Explorer service root endpoints](/en-us/graph/deployments?view=graph-rest-1.0#microsoft-graph-and-graph-explorer-service-root-endpoints).

        - After connection with [HTTP with Microsoft Entra ID](/en-us/connectors/webcontents/) is created, use that action with with this [Get attachments](/en-us/graph/api/attachment-get?view=graph-rest-1.0&amp;tabs=http#request-2) endpoint.
- We have a size limit of 1MB per data uri for inline embedded images, i.e. the image cannot be more than 1MB after base64 encoding. This only applies to embedded images inside of the mail body. Bear in mind the size of an image after being converted to a base64 string increases. Depending on the image compression, format, and other characteristics it can increase anywhere between 25% to 50%. For instance, an image of more than 700KB will after being converted to a base 64 string likely exceed the 1MB limit stated above.
- An Office 365 group address can't be used as shared mailbox address.
- If the email is sent outside of the associated organization, the admin should check if the organization has specific rules to reject sending/forwarding emails outside of the associated organization (for example, using SMTP headers). To learn more, go to SMTP headers.
- Shared calendars are listed in dropdown of calendar ID in any calendar related trigger/action only if user has view and edit to them. Please make use of Get calendars (V2) action to get list of calendars and its access. More Info on sharing calendars and setting permissions visit Share an Outlook calendar
- Forward slash symbol **/** isn't supported for folder names in case of custom input value for `Folder` parameter. As a workaround, use file picker, or provide `folder Id` value.
- In some rare cases, newly created users get a connection error despite required permissions granted to their accounts. The workaround would be to switch/re-authenticate the shared mailbox connection with the email address and password of the shared mailbox account. This way, the flow should run successfully for all users.
- After the permissions are granted for the account to access the shared mailbox, it can take about two hours until the permissions are replicated on the platform.
- Each email will count as only one API call per connection, even if there's more than one recipient in the **To**, **Cc**, or **Bcc** fields. To learn more about sending limits, go to [sending limits](/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits?redirectedfrom=MSDN#sending-limits).
- In some circumstances, non-Latin characters won't render as expected when sending an email with an adaptive card inside it. To learn more, go to [Known issues with HTML to PDF conversion](/en-us/onedrive/developer/rest-api/api/driveitem_get_content_format?view=odsp-graph-online#known-issues-with-html-to-pdf-conversion). As a potential workaround, use the same type of characters in the email subject as used in adaptive card.
- Sending email with Adaptive Cards are only rendered for owner of the flow due to Backend Limitation. Adaptive card supported scenarios.When sending actionable messages to anyone else, the "originator" property must be set to a valid provider ID generated by the Actionable Email Developer Dashboard
- Currently, Office 365 does not support Service Principal-based authentication.
- For calendar related events involving shared experiences, `please note that each user has a unique calendar ID`. You can confirm this by using "Get Calendars(V2)" for both the owner and the shared user, as these IDs are provided by the backend graph service. As a result, when using a shared user connection, the flow may encounter a \*\* 404 - "ErrorItemNotFound"\*\* error.

    - As a workaround, if you are sharing the flow with another user as a co-owner, `ensure that the owner’s connection is used when running the flow`. Alternatively, you can share the flow as a RUN ONLY user to utilize the owner’s connection instead of the Run only user’s connection.
- In some cases when using Send an email V2 to send multiple attachments, the resulting files may be invalid. In those cases it is best to follow the below process as a workaround.

    Save multiple attachments to an email as an array of attachments:

    ![Attachment Array](assets/multiple-attachments.png)

    1. Initialize a variable of type `array`![Initialize Variable](assets/initialize-variable.png)
    2. Use the `Append to array variable` action to add each attachment to the array![Append Attachments](assets/append-attachments.png)
    3. Set the attachment variable using a dynamic expression referencing the array![Set Attachments Variable](assets/dynamic-expression.png)

## Throttling limits on the Office side

In addition to the throttling limits per connection, Office imposes its own limits per inbox. This limit can be reached if the user creates different flows/Logic Apps that target the same inbox. To learn more, go to the [Exchange Online limits documentation](/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#message-limits).

## Connector timeouts detail

Office 365 Outlook connector makes outgoing requests to one of the following APIs:

- Graph API, which has 30 seconds timeout interval per single external request.
- Outlook REST API, which has 60 seconds timeout interval per single external request.

This error will be returned after a request to these external APIs reached the limit: { "status": 504, "message": "Request failed. Try again later"} Such failed requests will be retried up to four times in Power Automate/Azure Logic Apps (unless the default retry policy is overridden by the user). To learn more about retry policy, go to [Handle errors and exceptions in Azure Logic Apps](/en-us/azure/logic-apps/logic-apps-exception-handling).

The **504** (gateway timeout) status code returned doesn't imply the underlying action was unsuccessful. Due to default retry policy (if applied), the same action can be executed multiple times. For example, if the Send an email action results in a **504** response, and it retries the request, then duplicate emails are possible.

## Deprecation of Webhook trigger

Due to a [recent change in the lifecycle of webhook subscriptions](https://developer.microsoft.com/office/blogs/subscription-lifetime-changes-for-outlook-resources/), the When a new email arrives (webhook) trigger has been deprecated. While we are working to provide a solution to this, use the When a new email arrives polling trigger instead.

## Shared mailbox support

As of May 6, 2020, shared mailbox support was added for certain operations with an optional `Mailbox address` parameter, which allows you to specify a shared mailbox address for your operation to access. If you were using this operation prior to May 6, 2020, you'll need to explicitly update your operations to specify the shared mailbox address.

For operations that don't support shared mailboxes yet, you can use a workaround with the [Invoke an HTTP request](/en-us/connectors/webcontents/#invoke-an-http-request) action under the [HTTP with Microsoft Entra ID](../webcontents/) connector. When creating a connection for the [HTTP with Microsoft Entra ID](/en-us/connectors/webcontents/) connector, input text `https://graph.microsoft.com/` for both `Microsoft Entra ID Resource URI` and `Base Resource URL` connection parameters. After it's created, you can go to [Outlook mail REST API](/en-us/graph/api/resources/mail-api-overview?view=graph-rest-1.0) to set the URL, and optionally the request body to call its shared mailbox APIs. Some of the Outlook functions will only be available on the [beta](/en-us/graph/api/resources/mail-api-overview?view=graph-rest-beta) version of Graph API. The [HTTP with Microsoft Entra ID](../webcontents/) connector is a premium connector and won't be available if you are using the free version of Microsoft Power Automate.

## Add hyperlinks to the email body

For adding hyperlinks to the email body, you can do the following:

- In the **Body** field, mark the text you want to link, and then select the **Link** icon.
- When you see the dialog, paste your link address into the **Link Target** field, and then select the **Add** button.
- To verify that everything is correct, place the cursor over your new link. When you see the small icon, select it to open the linked page.

## SMTP headers

The connector is attaching the following SMTP headers (Internet message headers) to each sent email:

1. **"x-ms-mail-application"** with the following values:

    | Service | Value |
    | --- | --- |
    | Power Automate | Microsoft Power Automate; User-Agent: azure-logic-apps/1.0 (workflow &lt;workflow id&gt;; version &lt;version id&gt;) microsoft-flow/1.0 |
    | Power Apps | Microsoft Power Apps; User-Agent: PowerApps/&lt;version id&gt; (&lt;Player type&gt;; AppName=&lt;app name&gt;) |
    | Logic Apps | Azure Logic Apps; User-Agent: azure-logic-apps/1.0 (workflow &lt;workflow id&gt;; version &lt;version id&gt;) |
2. **"x-ms-mail-operation-type"** with the following values:

    | Description | Value |
    | --- | --- |
    | For reply email operations | Reply |
    | For forward email operations | Forward |
    | For send email operations (including `SendEmailWithOptions` and `SendApprovalEmail)` | Send |
3. **"x-ms-mail-environment-id"** with `Environment Id` value.The presence of this header depends on the product you are using:

    - In Power Apps, it will always be present.
    - In Power Automate, it will only be present in newly created connections.
    - In Logic Apps, it will never be present.
4. **"x-ms-mail-workflow"** with the following values:

    | Service | Value |
    | --- | --- |
    | Power Automate | x-ms-workflow-name: &lt;workflow name&gt;; x-ms-workflow-run-id: &lt;workflow run id&gt;; x-ms-client-request-id: &lt;client request id&gt;; |
    | Logic Apps | x-ms-workflow-name: &lt;workflow name&gt;; x-ms-workflow-run-id: &lt;workflow run id&gt;; x-ms-client-request-id: &lt;client request id&gt;; |
    | Power Apps | x-ms-client-request-id: &lt;client request id&gt;; |

## Working with attachments

Certain triggers and actions have a parameter to control whenever attachments content should be included into the response - `Include Attachments`. This parameter controls only attachments content, but not the attachments metadata (like **Id**, **Name**, **Content Type**, **Size**, and **Is Inline**), which would be included in the response regardless of the parameter value.

## Connector in-depth

To learn more about the connector, go to [Connect to Office 365 Outlook using Azure Logic Apps](/en-us/azure/connectors/connectors-create-api-office365-outlook).

### General Limits

| Name | Value |
| --- | --- |
| Maximum mails content length (in MB) | 49 |
| Maximum total mails content length per connection per 5 minutes for 'Send an email' actions (in MB) | 500 |
| Maximum total content length per connection per 5 minutes for ALL actions (in MB) | 2000 |
| Maximum number of options for options and approval mails | 100 |
| Maximum number of megabytes being transferred from the connector concurrently | 300 |
| Maximum number of requests being processed by the connector concurrently | 70 |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Office 365 Credentials (Office GCC High) | Log in with Office 365 Credentials (Office GCC High). | Azure Government only | Not shareable |
| Office 365 Credentials (Office Public/Office GCC) | Log in with Office 365 Credentials (Office Public/Office GCC). | Azure Government only | Not shareable |
| Default | Log in with Office 365 Credentials | All regions except Azure Government | Not shareable |

### Office 365 Credentials (Office GCC High)

Auth ID: oauthGccHigh

Applicable: Azure Government only

Log in with Office 365 Credentials (Office GCC High).

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Office 365 Credentials (Office Public/Office GCC)

Auth ID: oauthPublic

Applicable: Azure Government only

Log in with Office 365 Credentials (Office Public/Office GCC).

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Default

Applicable: All regions except Azure Government

Log in with Office 365 Credentials

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 300 | 60 seconds |

## Actions

| Assign a category to multiple emails | This operation assigns an Outlook category to multiple emails. |
| --- | --- |
| Assigns an Outlook category | This operation assigns an Outlook category to an email. |
| Contact Management MCP Server | This MCP server manages contacts |
| Create contact (V2) | This operation creates a new contact in a contacts folder. |
| Create contact [DEPRECATED] | This action has been deprecated. Please use [Create contact (V2)](/en-us/connectors/office365/#create-contact-%28v2%29) instead.<br><br>~~This operation creates a new contact in a contacts folder.~~ |
| Create event (V1) [DEPRECATED] | This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.<br><br>~~This operation creates a new event in a calendar. (V1)~~ |
| Create event (V2) [DEPRECATED] | This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.<br><br>~~This operation creates a new event in a calendar. (V2)~~ |
| Create event (V3) [DEPRECATED] | This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.<br><br>~~This operation creates a new event in a calendar.~~ |
| Create event (V4) | This operation creates a new event in a calendar. |
| Delete contact (V2) | This operation deletes a contact from a contacts folder. |
| Delete contact [DEPRECATED] | This action has been deprecated. Please use [Delete contact (V2)](/en-us/connectors/office365/#delete-contact-%28v2%29) instead.<br><br>~~This operation deletes a contact from a contacts folder.~~ |
| Delete email (V2) | This operation deletes an email by id. |
| Delete email [DEPRECATED] | This action has been deprecated. Please use [Delete email (V2)](/en-us/connectors/office365/#delete-email-%28v2%29) instead.<br><br>~~This operation deletes an email by id.~~ |
| Delete event (V2) | This operation deletes an event in a calendar. |
| Delete event [DEPRECATED] | This action has been deprecated. Please use [Delete event (V2)](/en-us/connectors/office365/#delete-event-%28v2%29) instead.<br><br>~~This operation deletes an event in a calendar.~~ |
| Draft an email message | This operation drafts an email message. |
| Email Management MCP Server (deprecated) | This MCP server manages email messages from your Office 365 account |
| Export email (V2) | Export the content of the email in the EML file format. |
| Export email [DEPRECATED] | This action has been deprecated. Please use [Export email (V2)](/en-us/connectors/office365/#export-email-%28v2%29) instead.<br><br>~~Export the content of the email.~~ |
| Find meeting times (V2) | Find meeting time suggestions based on organizer, attendee availability, and time or location constraints |
| Find meeting times [DEPRECATED] | This action has been deprecated. Please use [Find meeting times (V2)](/en-us/connectors/office365/#find-meeting-times-%28v2%29) instead.<br><br>~~Find meeting time suggestions based on organizer, attendee availability, and time or location constraints~~ |
| Flag email (V2) | This operation updates an email flag. |
| Flag email [DEPRECATED] | This action has been deprecated. Please use [Flag email (V2)](/en-us/connectors/office365/#flag-email-%28v2%29) instead.<br><br>~~This operation flags an email.~~ |
| Forward an email (V2) | Forward an email. |
| Forward an email [DEPRECATED] | This action has been deprecated. Please use [Forward an email (V2)](/en-us/connectors/office365/#forward-an-email-%28v2%29) instead.<br><br>~~Forward an email.~~ |
| Get Attachment (V2) | This operation gets an email attachment by id. |
| Get attachment [DEPRECATED] | This action has been deprecated. Please use [Get Attachment (V2)](/en-us/connectors/office365/#get-attachment-%28v2%29) instead.<br><br>~~This operation gets an email attachment by id.~~ |
| Get calendar view of events (V2) [DEPRECATED] | This action has been deprecated. Please use [Get calendar view of events (V3)](/en-us/connectors/office365/#get-calendar-view-of-events-%28v3%29) instead.<br><br>~~This operation gets all events (including instances of recurrences) in a calendar. Recurrence property is null in this case.~~ |
| Get calendar view of events (V3) | This operation gets all events (including instances of recurrences) in a calendar using Graph API. Recurrence property is null in this case. |
| Get calendar view of events [DEPRECATED] | This action has been deprecated. Please use [Get calendar view of events (V3)](/en-us/connectors/office365/#get-calendar-view-of-events-%28v3%29) instead.<br><br>~~Get calendar view of events.~~ |
| Get calendars (V2) | This operation lists available calendars. |
| Get calendars [DEPRECATED] | This action has been deprecated. Please use [Get calendars (V2)](/en-us/connectors/office365/#get-calendars-%28v2%29) instead.<br><br>~~This operation lists available calendars.~~ |
| Get contact (V2) | This operation gets a specific contact from a contacts folder. |
| Get contact [DEPRECATED] | This action has been deprecated. Please use [Get contact (V2)](/en-us/connectors/office365/#get-contact-%28v2%29) instead.<br><br>~~This operation gets a specific contact from a contacts folder.~~ |
| Get contact folders (V2) | This operation lists available contacts folders using Graph API |
| Get contact folders [DEPRECATED] | This action has been deprecated. Please use [Get contact folders (V2)](/en-us/connectors/office365/#get-contact-folders-%28v2%29) instead.<br><br>~~This operation lists available contacts folders.~~ |
| Get contacts (V2) | This operation gets contacts from a contacts folder. |
| Get contacts [DEPRECATED] | This action has been deprecated. Please use [Get contacts (V2)](/en-us/connectors/office365/#get-contacts-%28v2%29) instead.<br><br>~~This operation gets contacts from a contacts folder.~~ |
| Get email (V2) | This operation gets an email by id. |
| Get email [DEPRECATED] | This action has been deprecated. Please use [Get email (V2)](/en-us/connectors/office365/#get-email-%28v2%29) instead.<br><br>~~This operation gets an email by id.~~ |
| Get emails (V2) [DEPRECATED] | This action has been deprecated. Please use [Get emails (V3)](/en-us/connectors/office365/#get-emails-%28v3%29) instead.<br><br>~~This operation gets emails from a folder.~~ |
| Get emails (V3) | This operation gets emails from a folder via graph apis. Please note that filtering related to these fields: To, Cc, To Or Cc, From, Importance, Fetch Only With Attachments, Subject Filter, is performed using first 250 items in a given mail folder. To avoid that limitation you can use 'Search Query' field. |
| Get emails [DEPRECATED] | This action has been deprecated. Please use [Get emails (V3)](/en-us/connectors/office365/#get-emails-%28v3%29) instead.<br><br>~~This operation gets emails from a folder.~~ |
| Get event (V1) [DEPRECATED] | This action has been deprecated. Please use [Get event (V3)](/en-us/connectors/office365/#get-event-%28v3%29) instead.<br><br>~~This operation gets a specific event from a calendar. (V1)~~ |
| Get event (V2) [DEPRECATED] | This action has been deprecated. Please use [Get event (V3)](/en-us/connectors/office365/#get-event-%28v3%29) instead.<br><br>~~This operation gets a specific event from a calendar. (V2)~~ |
| Get event (V3) | This operation gets a specific event from a calendar using Graph API. (V3) |
| Get events (V1) [DEPRECATED] | This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.<br><br>~~This operation gets events from a calendar. (V1)~~ |
| Get events (V2) [DEPRECATED] | This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.<br><br>~~This operation gets events from a calendar. (V2)~~ |
| Get events (V3) [DEPRECATED] | This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.<br><br>~~This operation gets events from a calendar. (V3)~~ |
| Get events (V4) | This operation gets events from a calendar using Graph API. (V4) |
| Get mail tips for a mailbox (V2) | Get mail tips for a mailbox such as automatic replies / OOF message or if the mailbox is full. This is not available in GccHigh and Mooncake. |
| Get mail tips for a mailbox [DEPRECATED] | This action has been deprecated. Please use [Get mail tips for a mailbox (V2)](/en-us/connectors/office365/#get-mail-tips-for-a-mailbox-%28v2%29) instead.<br><br>~~Get mail tips for a mailbox such as automatic replies / OOF message or if the mailbox is full.~~ |
| Get Outlook category names | This operation gets Outlook category display names. |
| Get room lists (V2) | Get all the room lists defined in the user's tenant |
| Get room lists [DEPRECATED] | This action has been deprecated. Please use [Get room lists (V2)](/en-us/connectors/office365/#get-room-lists-%28v2%29) instead.<br><br>~~Get all the room lists defined in the user's tenant~~ |
| Get rooms (V2) | Get all the meeting rooms defined in the user's tenant |
| Get rooms [DEPRECATED] | This action has been deprecated. Please use [Get rooms (V2)](/en-us/connectors/office365/#get-rooms-%28v2%29) instead.<br><br>~~Get all the meeting rooms defined in the user's tenant~~ |
| Get rooms in room list (V2) | Get the meeting rooms in a specific room list |
| Get rooms in room list [DEPRECATED] | This action has been deprecated. Please use [Get rooms in room list (V2)](/en-us/connectors/office365/#get-rooms-in-room-list-%28v2%29) instead.<br><br>~~Get the meeting rooms in a specific room list~~ |
| Mark as read [DEPRECATED] | This action has been deprecated. Please use [Mark as read or unread (V3)](/en-us/connectors/office365/#mark-as-read-or-unread-%28v3%29) instead.<br><br>~~This operation marks an email as having been read.~~ |
| Mark as read or unread (V2) [DEPRECATED] | This action has been deprecated. Please use [Mark as read or unread (V3)](/en-us/connectors/office365/#mark-as-read-or-unread-%28v3%29) instead.<br><br>~~This operation marks an email as read/unread.~~ |
| Mark as read or unread (V3) | This operation marks an email as read/unread. |
| Meeting Management MCP Server (deprecated) | This MCP server manages events, calendars and meetings |
| Move email (V2) | This operation moves an email to the specified folder within the same mailbox. |
| Move email [DEPRECATED] | This action has been deprecated. Please use [Move email (V2)](/en-us/connectors/office365/#move-email-%28v2%29) instead.<br><br>~~This operation moves an email to the specified folder within the same mailbox.~~ |
| Reply to email (V2) [DEPRECATED] | This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/office365/#reply-to-email-%28v3%29) instead.<br><br>~~This operation replies to an email.~~ |
| Reply to email (V3) | This operation replies to an email. |
| Reply to email [DEPRECATED] | This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/office365/#reply-to-email-%28v3%29) instead.<br><br>~~This operation replies to an email.~~ |
| Respond to an event invite (V2) | Respond to an event invite. |
| Respond to an event invite [DEPRECATED] | This action has been deprecated. Please use [Respond to an event invite (V2)](/en-us/connectors/office365/#respond-to-an-event-invite-%28v2%29) instead.<br><br>~~Respond to an event invite.~~ |
| Send a Draft message | This operation sends a Draft message. |
| Send an email (V2) | This operation sends an email message. |
| Send an email [DEPRECATED] | This action has been deprecated. Please use [Send an email (V2)](/en-us/connectors/office365/#send-an-email-%28v2%29) instead.<br><br>~~This operation sends an email message.~~ |
| Send an email from a shared mailbox (V2) | This operation sends an email from a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed. |
| Send an email from a shared mailbox [DEPRECATED] | This action has been deprecated. Please use [Send an email from a shared mailbox (V2)](/en-us/connectors/office365/#send-an-email-from-a-shared-mailbox-%28v2%29) instead.<br><br>~~This operation sends an email from a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed.~~ |
| Send an HTTP request | Construct a Microsoft Graph REST API request to invoke. These segments are supported: 1st segement: /me, /users/&lt;userId&gt; 2nd segment: messages, mailFolders, events, calendar, calendars, outlook, inferenceClassification. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api). |
| Send approval email | This operation sends an approval email and waits for a response from the recipient. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages). |
| Send email with options | This operation sends an email with multiple options and waits for the recipient to respond back with one of the options. Please refer to the following link regarding the support of actionable messages in different mail clients: [https://docs.microsoft.com/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages](/en-us/outlook/actionable-messages/#outlook-version-requirements-for-actionable-messages). |
| Set up automatic replies (V2) | Set the automatic replies setting for your mailbox. |
| Set up automatic replies [DEPRECATED] | This action has been deprecated. Please use [Set up automatic replies (V2)](/en-us/connectors/office365/#set-up-automatic-replies-%28v2%29) instead.<br><br>~~Set the automatic replies setting for your mailbox.~~ |
| Update contact (V2) | This operation updates a contact in a contacts folder. |
| Update contact [DEPRECATED] | This action has been deprecated. Please use [Update contact (V2)](/en-us/connectors/office365/#update-contact-%28v2%29) instead.<br><br>~~This operation updates a contact in a contacts folder.~~ |
| Update event (V1) [DEPRECATED] | This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.<br><br>~~This operation updates an event in a calendar. (V1)~~ |
| Update event (V2) [DEPRECATED] | This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.<br><br>~~This operation updates an event in a calendar. (V2)~~ |
| Update event (V3) [DEPRECATED] | This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.<br><br>~~This operation updates an event in a calendar.~~ |
| Update event (V4) | This operation updates an event in a calendar using Graph API. |
| Update my contact's photo | Updates the photo of the specified contact of the current user. The size of the photo must be less than 4 MB. |
| Updates an email Draft message | This operation updates an an email Draft message. |

### Assign a category to multiple emails

- Operation ID:
    - AssignCategoryBulk

This operation assigns an Outlook category to multiple emails.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| messageIds | messageIds | True | array of string |  |
| Category Name | categoryName | True | string | Category Name |

#### Returns

- Body
    - BatchOperationResult

### Assigns an Outlook category

- Operation ID:
    - AssignCategory

This operation assigns an Outlook category to an email.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Message Id. |
| Category | category | True | string | Category |

### Contact Management MCP Server

- Operation ID:
    - mcp\_ContactsManagement

This MCP server manages contacts

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Create contact (V2)

- Operation ID:
    - ContactPostItem\_V2

This operation creates a new contact in a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Select a contacts folder |
| Id | id |  | string | The contact's unique identifier. |
| Parent folder id | parentFolderId |  | string | The ID of the contact's parent folder |
| Birthday | birthday |  | date-time | The contact's birthday |
| File as | fileAs |  | string | The name the contact is filed under |
| Display Name | displayName |  | string | The contact's display name |
| Given name | givenName | True | string | The contact's given name |
| Initials | initials |  | string | The contact's initials |
| Middle name | middleName |  | string | The contact's middle name |
| Nickname | nickName |  | string | The contact's nickname |
| Surname | surname |  | string | The contact's surname |
| Title | title |  | string | The contact's title |
| Generation | generation |  | string | The contact's generation |
| name | name |  | string |  |
| address | address |  | email |  |
| IM addresses | imAddresses |  | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | jobTitle |  | string | The contact's job title |
| Company name | companyName |  | string | The name of the contact's company |
| Department | department |  | string | The contact's department |
| Office location | officeLocation |  | string | The location of the contact's office |
| Profession | profession |  | string | The contact's profession |
| Business home page | businessHomePage |  | string | The business home page of the contact |
| Assistant name | assistantName |  | string | The name of the contact's assistant |
| Manager | manager |  | string | The name of the contact's manager |
| Home phones | homePhones | True | array of string | The contact's home phone numbers |
| Business phones | businessPhones |  | array of string | The contact's business phone numbers |
| Mobile phone | mobilePhone |  | string | The contact's mobile phone number |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Yomi company name | yomiCompanyName |  | string | The phonetic Japanese company name of the contact |
| Yomi given name | yomiGivenName |  | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | yomiSurname |  | string | The phonetic Japanese surname (last name) of the contact |
| Categories | categories |  | array of string | The categories associated with the contact |
| Change key | changeKey |  | string | Identifies the version of the event object |
| Created time | createdDateTime |  | date-time | The time the contact was created |
| Last modified time | lastModifiedDateTime |  | date-time | The time the contact was modified |

#### Returns

Contact

- Body
    - ContactResponse_V2

### Create contact [DEPRECATED]

- Operation ID:
    - ContactPostItem

This action has been deprecated. Please use [Create contact (V2)](/en-us/connectors/office365/#create-contact-%28v2%29) instead.

~~This operation creates a new contact in a contacts folder.~~

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

This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.

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

This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.

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

### Create event (V3) [DEPRECATED]

- Operation ID:
    - V3CalendarPostItem

This action has been deprecated. Please use [Create event (V4)](/en-us/connectors/office365/#create-event-%28v4%29) instead.

~~This operation creates a new event in a calendar.~~

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

### Create event (V4)

- Operation ID:
    - V4CalendarPostItem

This operation creates a new event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Subject | subject | True | string | Event subject |
| Start time | start | True | date-no-tz | Start time of the event (example: '2017-08-29T04:00:00') |
| End time | end | True | date-no-tz | End time of the event (example: '2017-08-29T05:00:00') |
| Time zone | timeZone | True | string | Time zone of the event |
| Required attendees | requiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | optionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | resourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | body |  | html | Body of the message associated with the event |
| Categories | categories |  | array of string | The categories associated with the event |
| Location | location |  | string | Location of the event |
| Importance | importance |  | string | The importance of the event: low, normal, or high |
| Is all day event? | isAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | recurrence |  | string | The recurrence pattern for the event: none, daily, weekly, monthly or yearly |
| Selected days of week | selectedDaysOfWeek |  | array of string | Days of week for weekly recurrence |
| Recurrence end date | recurrenceEnd |  | date | End Date of the recurrence |
| Number of occurrences | numberOfOccurences |  | integer | How many times to repeat the event |
| Reminder | reminderMinutesBeforeStart |  | integer | Time in minutes before event start to remind |
| Is reminder on | isReminderOn |  | boolean | Set to true if an alert is set to remind the user of the event. |
| Show as | showAs |  | string | Status to show during the event: free, tentative, busy, oof, workingElsewhere or unknown |
| Response requested | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Sensitivity | sensitivity |  | string | The possible values are: normal, personal, private, confidential |

#### Returns

Connector specific calendar event model class for the client with Graph API

- Body
    - GraphCalendarEventClientReceive

### Delete contact (V2)

- Operation ID:
    - ContactDeleteItem\_V2

This operation deletes a contact from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Select a contacts folder |
| Id | id | True | string | Unique identifier of contact to delete |

### Delete contact [DEPRECATED]

- Operation ID:
    - ContactDeleteItem

This action has been deprecated. Please use [Delete contact (V2)](/en-us/connectors/office365/#delete-contact-%28v2%29) instead.

~~This operation deletes a contact from a contacts folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Id | id | True | string | Unique identifier of contact to delete |

### Delete email (V2)

- Operation ID:
    - DeleteEmail\_V2

This operation deletes an email by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to delete. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to delete mail from. |

### Delete email [DEPRECATED]

- Operation ID:
    - DeleteEmail

This action has been deprecated. Please use [Delete email (V2)](/en-us/connectors/office365/#delete-email-%28v2%29) instead.

~~This operation deletes an email by id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to delete. |

### Delete event (V2)

- Operation ID:
    - CalendarDeleteItem\_V2

This operation deletes an event in a calendar.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | calendar | True | string | Select a calendar |
| Id | event | True | string | Select an event |

### Delete event [DEPRECATED]

- Operation ID:
    - CalendarDeleteItem

This action has been deprecated. Please use [Delete event (V2)](/en-us/connectors/office365/#delete-event-%28v2%29) instead.

~~This operation deletes an event in a calendar.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |

### Draft an email message

- Operation ID:
    - DraftEmail

This operation drafts an email message.

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
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |
| Message Id | messageId |  | string | Message Id. |
| Draft Type | draftType |  | string | Draft Type. |
| Comment | comment |  | string | Draft Comment |

#### Returns

Received message from outlook rest api

- Body
    - OutlookReceiveMessage

### Email Management MCP Server (deprecated)

- Operation ID:
    - mcp\_EmailsManagement

This MCP server manages email messages from your Office 365 account

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Export email (V2)

- Operation ID:
    - ExportEmail\_V2

Export the content of the email in the EML file format.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to export. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to export from. |

#### Returns

- response
    - binary

### Export email [DEPRECATED]

- Operation ID:
    - ExportEmail

This action has been deprecated. Please use [Export email (V2)](/en-us/connectors/office365/#export-email-%28v2%29) instead.

~~Export the content of the email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to export. |

#### Returns

- response
    - binary

### Find meeting times (V2)

- Operation ID:
    - FindMeetingTimes\_V2

Find meeting time suggestions based on organizer, attendee availability, and time or location constraints

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Required attendees | RequiredAttendees |  | string | List of semicolon separated email addresses |
| Optional attendees | OptionalAttendees |  | string | List of semicolon separated email addresses |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Meeting duration | MeetingDuration |  | integer | Duration of the meeting in minutes |
| Start time | Start |  | date-time | Start time for meeting time suggestions |
| End time | End |  | date-time | End time for meeting time suggestions |
| Max Candidates | MaxCandidates |  | integer | The maximum number of meeting suggestions to return in the response |
| Minimum Attendee Percentage | MinimumAttendeePercentage |  | string | The minimum required confidence for a time slot to be returned in the response |
| Is Organizer Optional? | IsOrganizerOptional |  | boolean | true if the organizer doesn't have to attend. The default is false |
| Activity Domain | ActivityDomain |  | string | Work, Personal, Unrestricted, or Unknown |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Empty Suggestions Reason | emptySuggestionsReason | string | Empty Suggestions Reason |
| Meeting Time Suggestions | meetingTimeSuggestions | MeetingTimeSuggestions\_V2 | Meeting Time Suggestions |

### Find meeting times [DEPRECATED]

- Operation ID:
    - FindMeetingTimes

This action has been deprecated. Please use [Find meeting times (V2)](/en-us/connectors/office365/#find-meeting-times-%28v2%29) instead.

~~Find meeting time suggestions based on organizer, attendee availability, and time or location constraints~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Required attendees | RequiredAttendees |  | string | List of semicolon separated email addresses |
| Optional attendees | OptionalAttendees |  | string | List of semicolon separated email addresses |
| Resource attendees | ResourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Meeting duration | MeetingDuration |  | integer | Duration of the meeting in minutes |
| Start time | Start |  | date-time | Start time for meeting time suggestions |
| End time | End |  | date-time | End time for meeting time suggestions |
| Max Candidates | MaxCandidates |  | integer | The maximum number of meeting suggestions to return in the response |
| Minimum Attendee Percentage | MinimumAttendeePercentage |  | string | The minimum required confidence for a time slot to be returned in the response |
| Is Organizer Optional? | IsOrganizerOptional |  | boolean | true if the organizer doesn't have to attend. The default is false |
| Activity Domain | ActivityDomain |  | string | Work, Personal, Unrestricted, or Unknown |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Empty Suggestions Reason | EmptySuggestionsReason | string | Empty Suggestions Reason |
| Meeting Time Suggestions | MeetingTimeSuggestions | MeetingTimeSuggestions | Meeting Time Suggestions |

### Flag email (V2)

- Operation ID:
    - Flag\_V2

This operation updates an email flag.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be flagged. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to update mail. |
| Flag Status | flagStatus |  | string | Flag status |

### Flag email [DEPRECATED]

- Operation ID:
    - Flag

This action has been deprecated. Please use [Flag email (V2)](/en-us/connectors/office365/#flag-email-%28v2%29) instead.

~~This operation flags an email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be flagged. |

### Forward an email (V2)

- Operation ID:
    - ForwardEmail\_V2

Forward an email.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | message\_id | True | string | Id of the message to forward. (You can use 'Message Id' from trigger or 'Get Emails' action output) |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to forward mail from. |
| Comment | Comment |  | string | Comment |
| To | ToRecipients | True | string | Semicolon separated list of recipients to forward the message to |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label ( false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

### Forward an email [DEPRECATED]

- Operation ID:
    - ForwardEmail

This action has been deprecated. Please use [Forward an email (V2)](/en-us/connectors/office365/#forward-an-email-%28v2%29) instead.

~~Forward an email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | message\_id | True | string | Id of the message to forward. |
| Comment | Comment |  | string | Comment |
| To | ToRecipients | True | string | Semicolon separated list of recipients to forward the message to |

### Get Attachment (V2)

- Operation ID:
    - GetAttachment\_V2

This operation gets an email attachment by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Attachement Id | attachmentId | True | string | Id of the attachment to download. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to retrieve attachment from. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label ( false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Id of the attachment. |
| Name | name | string | Name of attachment. |
| Content Type | contentType | string | Content type of attachment. |
| Size | size | integer | Size of attachment. |
| Content Bytes | contentBytes | byte | Content of attachment. |
| Is Inline | isInline | boolean | Set to true if this is an inline attachment. |
| Last Modified DateTime | lastModifiedDateTime | date-time | The date and time when the attachment was last modified. |
| Content Id | contentId | string | Content Id |
| sensitivityLabelInfo | sensitivityLabelInfo | array of sensitivityLabelMetadata |  |

### Get attachment [DEPRECATED]

- Operation ID:
    - GetAttachment

This action has been deprecated. Please use [Get Attachment (V2)](/en-us/connectors/office365/#get-attachment-%28v2%29) instead.

~~This operation gets an email attachment by id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Attachment Id | attachmentId | True | string | Id of the attachment to download. |

#### Returns

- response
    - binary

### Get calendar view of events (V2) [DEPRECATED]

- Operation ID:
    - GetEventsCalendarViewV2

This action has been deprecated. Please use [Get calendar view of events (V3)](/en-us/connectors/office365/#get-calendar-view-of-events-%28v3%29) instead.

~~This operation gets all events (including instances of recurrences) in a calendar. Recurrence property is null in this case.~~

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

### Get calendar view of events (V3)

- Operation ID:
    - GetEventsCalendarViewV3

This operation gets all events (including instances of recurrences) in a calendar using Graph API. Recurrence property is null in this case.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | calendarId | True | string | Select a calendar |
| Start Time | startDateTimeUtc | True | string | Start time in UTC (example: '2017-01-01T08:00:00') |
| End Time | endDateTimeUtc | True | string | End time in UTC (example: '2017-02-01T08:00:00') |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Search | search |  | string | Search text for matching event body and subject |

#### Returns

Entity list response

- Body
    - EntityListResponse[GraphCalendarEventClientReceive]

### Get calendar view of events [DEPRECATED]

- Operation ID:
    - GetEventsCalendarView

This action has been deprecated. Please use [Get calendar view of events (V3)](/en-us/connectors/office365/#get-calendar-view-of-events-%28v3%29) instead.

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

### Get calendars (V2)

- Operation ID:
    - CalendarGetTables\_V2

This operation lists available calendars.

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| ID | value.id | string | The id of the calendar. The id is used at runtime. |
| Name | value.name | string | The display name of the calendar. |
| owner | value.owner | EmailAddress\_V2 |  |

### Get calendars [DEPRECATED]

- Operation ID:
    - CalendarGetTables

This action has been deprecated. Please use [Get calendars (V2)](/en-us/connectors/office365/#get-calendars-%28v2%29) instead.

~~This operation lists available calendars.~~

#### Returns

Entity list response

- Body
    - EntityListResponse[Table]

### Get contact (V2)

- Operation ID:
    - ContactGetItem\_V2

This operation gets a specific contact from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Select a contacts folder |
| Item id | id | True | string | Unique identifier of a contact to retrieve |

#### Returns

Contact

- Body
    - ContactResponse_V2

### Get contact [DEPRECATED]

- Operation ID:
    - ContactGetItem

This action has been deprecated. Please use [Get contact (V2)](/en-us/connectors/office365/#get-contact-%28v2%29) instead.

~~This operation gets a specific contact from a contacts folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | table | True | string | Select a contacts folder |
| Item id | id | True | string | Unique identifier of a contact to retrieve |

#### Returns

Contact response

- Body
    - ContactResponse

### Get contact folders (V2)

- Operation ID:
    - ContactGetTablesV2

This operation lists available contacts folders using Graph API

#### Returns

Entity list response

- Body
    - EntityListResponse[GraphContactFolder]

### Get contact folders [DEPRECATED]

- Operation ID:
    - ContactGetTables

This action has been deprecated. Please use [Get contact folders (V2)](/en-us/connectors/office365/#get-contact-folders-%28v2%29) instead.

~~This operation lists available contacts folders.~~

#### Returns

Entity list response

- Body
    - EntityListResponse[Table]

### Get contacts (V2)

- Operation ID:
    - ContactGetItems\_V2

This operation gets contacts from a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Unique identifier of the contacts folder to retrieve |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

Entity list response

- Body
    - EntityListResponse[ContactResponse]_V2

### Get contacts [DEPRECATED]

- Operation ID:
    - ContactGetItems

This action has been deprecated. Please use [Get contacts (V2)](/en-us/connectors/office365/#get-contacts-%28v2%29) instead.

~~This operation gets contacts from a contacts folder.~~

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

### Get email (V2)

- Operation ID:
    - GetEmailV2

This operation gets an email by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to retrieve mail from. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Internet Message Id | internetMessageId |  | string | Internet Message Id. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label ( false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

Graph Client Receive Email Message

- Body
    - GraphClientReceiveMessage

### Get email [DEPRECATED]

- Operation ID:
    - GetEmail

This action has been deprecated. Please use [Get email (V2)](/en-us/connectors/office365/#get-email-%28v2%29) instead.

~~This operation gets an email by id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to retrieve mail from. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Internet Message Id | internetMessageId |  | string | Internet Message Id. |

#### Returns

Receive Email Message

- Body
    - ClientReceiveMessage

### Get emails (V2) [DEPRECATED]

- Operation ID:
    - GetEmailsV2

This action has been deprecated. Please use [Get emails (V3)](/en-us/connectors/office365/#get-emails-%28v3%29) instead.

~~This operation gets emails from a folder.~~

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
| Search Query | searchQuery |  | string | Search query (like in the Outlook client) to filter emails. |
| Top | top |  | integer | Number of emails to retrieve (default: 10). |

#### Returns

Represents a wrapper object for batch response

- Body
    - BatchResponse[ClientReceiveMessage]

### Get emails (V3)

- Operation ID:
    - GetEmailsV3

This operation gets emails from a folder via graph apis. Please note that filtering related to these fields: To, Cc, To Or Cc, From, Importance, Fetch Only With Attachments, Subject Filter, is performed using first 250 items in a given mail folder. To avoid that limitation you can use 'Search Query' field.

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
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to retrieve mails from. |
| Include Attachments | includeAttachments |  | boolean | If set to true, attachments content will also be retrieved along with the email. |
| Search Query | searchQuery |  | string | Search query to filter emails. How to use '$search' parameter please refer to: [https://docs.microsoft.com/graph/query-parameters#search-parameter](/en-us/graph/query-parameters#search-parameter). |
| Top | top |  | integer | Number of emails to retrieve (default: 10, max: 1000). |

#### Returns

Represents a wrapper object for batch response

- Body
    - BatchResponse[GraphClientReceiveMessage]

### Get emails [DEPRECATED]

- Operation ID:
    - GetEmails

This action has been deprecated. Please use [Get emails (V3)](/en-us/connectors/office365/#get-emails-%28v3%29) instead.

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

This action has been deprecated. Please use [Get event (V3)](/en-us/connectors/office365/#get-event-%28v3%29) instead.

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

### Get event (V2) [DEPRECATED]

- Operation ID:
    - V2CalendarGetItem

This action has been deprecated. Please use [Get event (V3)](/en-us/connectors/office365/#get-event-%28v3%29) instead.

~~This operation gets a specific event from a calendar. (V2)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Item id | id | True | string | Select an event |

#### Returns

Connector specific calendar event model class for the client

- Body
    - CalendarEventClientReceiveStringEnums

### Get event (V3)

- Operation ID:
    - V3CalendarGetItem

This operation gets a specific event from a calendar using Graph API. (V3)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Item id | id | True | string | Select an event |

#### Returns

Connector specific calendar event model class for the client with Graph API

- Body
    - GraphCalendarEventClientReceive

### Get events (V1) [DEPRECATED]

- Operation ID:
    - CalendarGetItems

This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.

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

This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.

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

### Get events (V3) [DEPRECATED]

- Operation ID:
    - V3CalendarGetItems

This action has been deprecated. Please use [Get events (V4)](/en-us/connectors/office365/#get-events-%28v4%29) instead.

~~This operation gets events from a calendar. (V3)~~

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

### Get events (V4)

- Operation ID:
    - V4CalendarGetItems

This operation gets events from a calendar using Graph API. (V4)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items returned by Graph API

- Body
    - GraphCalendarEventListClientReceive

### Get mail tips for a mailbox (V2)

- Operation ID:
    - GetMailTips\_V2

Get mail tips for a mailbox such as automatic replies / OOF message or if the mailbox is full. This is not available in GccHigh and Mooncake.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Email Addresses | EmailAddresses | True | array of string | Address of the mailbox to get mail tips for. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of MailTipsClientReceive\_V2 |  |

### Get mail tips for a mailbox [DEPRECATED]

- Operation ID:
    - GetMailTips

This action has been deprecated. Please use [Get mail tips for a mailbox (V2)](/en-us/connectors/office365/#get-mail-tips-for-a-mailbox-%28v2%29) instead.

~~Get mail tips for a mailbox such as automatic replies / OOF message or if the mailbox is full.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Original Mailbox Address | mailboxAddress | True | string | Address of the mailbox to get mail tips for. |

#### Returns

Mail tips client model returned to the caller

- Body
    - MailTipsClientReceive

### Get Outlook category names

- Operation ID:
    - GetOutlookCategoryNames

This operation gets Outlook category display names.

#### Returns

- response
    - array of GraphOutlookCategory

### Get room lists (V2)

- Operation ID:
    - GetRoomLists\_V2

Get all the room lists defined in the user's tenant

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.name | string | Name |
| Address | value.address | string | Address |

### Get room lists [DEPRECATED]

- Operation ID:
    - GetRoomLists

This action has been deprecated. Please use [Get room lists (V2)](/en-us/connectors/office365/#get-room-lists-%28v2%29) instead.

~~Get all the room lists defined in the user's tenant~~

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.Name | string | Name |
| Address | value.Address | string | Address |

### Get rooms (V2)

- Operation ID:
    - GetRooms\_V2

Get all the meeting rooms defined in the user's tenant

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.name | string | Name |
| Address | value.address | string | Address |

### Get rooms [DEPRECATED]

- Operation ID:
    - GetRooms

This action has been deprecated. Please use [Get rooms (V2)](/en-us/connectors/office365/#get-rooms-%28v2%29) instead.

~~Get all the meeting rooms defined in the user's tenant~~

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.Name | string | Name |
| Address | value.Address | string | Address |

### Get rooms in room list (V2)

- Operation ID:
    - GetRoomsInRoomList\_V2

Get the meeting rooms in a specific room list

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Room list | room\_list | True | string | Room list to find rooms in |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.name | string | Name |
| Address | value.address | string | Address |

### Get rooms in room list [DEPRECATED]

- Operation ID:
    - GetRoomsInRoomList

This action has been deprecated. Please use [Get rooms in room list (V2)](/en-us/connectors/office365/#get-rooms-in-room-list-%28v2%29) instead.

~~Get the meeting rooms in a specific room list~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Room list | room\_list | True | string | Room list to find rooms in |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| Name | value.Name | string | Name |
| Address | value.Address | string | Address |

### Mark as read [DEPRECATED]

- Operation ID:
    - MarkAsRead

This action has been deprecated. Please use [Mark as read or unread (V3)](/en-us/connectors/office365/#mark-as-read-or-unread-%28v3%29) instead.

~~This operation marks an email as having been read.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be marked as read. |

### Mark as read or unread (V2) [DEPRECATED]

- Operation ID:
    - MarkAsRead\_V2

This action has been deprecated. Please use [Mark as read or unread (V3)](/en-us/connectors/office365/#mark-as-read-or-unread-%28v3%29) instead.

~~This operation marks an email as read/unread.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be marked. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to update mail. |
| Mark as | isRead |  | boolean | Mark as read/unread. |

### Mark as read or unread (V3)

- Operation ID:
    - MarkAsRead\_V3

This operation marks an email as read/unread.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be marked. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to update mail. |
| Mark as | isRead | True | boolean | Mark as read/unread. |

### Meeting Management MCP Server (deprecated)

- Operation ID:
    - mcp\_MeetingManagement

This MCP server manages events, calendars and meetings

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Move email (V2)

- Operation ID:
    - MoveV2

This operation moves an email to the specified folder within the same mailbox.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to be moved. |
| Folder | folderPath | True | string | Mail folder to move the email to. |
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to move mail from. |

#### Returns

Graph Client Receive Email Message

- Body
    - GraphClientReceiveMessage

### Move email [DEPRECATED]

- Operation ID:
    - Move

This action has been deprecated. Please use [Move email (V2)](/en-us/connectors/office365/#move-email-%28v2%29) instead.

~~This operation moves an email to the specified folder within the same mailbox.~~

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

This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/office365/#reply-to-email-%28v3%29) instead.

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
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to reply from. |

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
| Original Mailbox Address | mailboxAddress |  | string | Address of the shared mailbox to reply from. |

### Reply to email [DEPRECATED]

- Operation ID:
    - ReplyTo

This action has been deprecated. Please use [Reply to email (V3)](/en-us/connectors/office365/#reply-to-email-%28v3%29) instead.

~~This operation replies to an email.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Id of the email to reply to. |
| Comment | comment | True | string | Reply comment. |
| Reply All | replyAll |  | boolean | Reply to all recipients. |

### Respond to an event invite (V2)

- Operation ID:
    - RespondToEvent\_V2

Respond to an event invite.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Event Id | event\_id | True | string | Id of the event to respond to. |
| Response | response | True | string | Response for the event invite |
| Comment | Comment |  | string | Comment |
| Send response? | SendResponse |  | boolean | Send response to organizer? |

### Respond to an event invite [DEPRECATED]

- Operation ID:
    - RespondToEvent

This action has been deprecated. Please use [Respond to an event invite (V2)](/en-us/connectors/office365/#respond-to-an-event-invite-%28v2%29) instead.

~~Respond to an event invite.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Event Id | event\_id | True | string | Id of the event to respond to. |
| Response | response | True | string | Response for the event invite |
| Comment | Comment |  | string | Comment |
| Send response? | SendResponse |  | boolean | Send response to organizer? |

### Send a Draft message

- Operation ID:
    - SendDraftEmail

This operation sends a Draft message.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message Id | messageId | True | string | Message Id. |

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
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |

### Send an email [DEPRECATED]

- Operation ID:
    - SendEmail

This action has been deprecated. Please use [Send an email (V2)](/en-us/connectors/office365/#send-an-email-%28v2%29) instead.

~~This operation sends an email message.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| From (Send as) | From |  | email | Email address to send mail from (requires "Send as" or "Send on behalf of" permission for that mailbox). For more info on granting permissions please refer [https://docs.microsoft.com/office365/admin/manage/send-email-as-distribution-list](/en-us/office365/admin/manage/send-email-as-distribution-list) |
| CC | Cc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| BCC | Bcc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject | True | string | Specify the subject of the mail |
| Body | Body | True | string | Specify the body of the mail |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |
| Is HTML | IsHtml |  | boolean | Is Html? |

### Send an email from a shared mailbox (V2)

- Operation ID:
    - SharedMailboxSendEmailV2

This operation sends an email from a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Original Mailbox Address | MailboxAddress | True | email | Specify email address of a shared mailbox like someone@contoso.com |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject | True | string | Specify the subject of the mail |
| Body | Body | True | html | Specify the body of the mail |
| CC | Cc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| BCC | Bcc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |

### Send an email from a shared mailbox [DEPRECATED]

- Operation ID:
    - SharedMailboxSendEmail

This action has been deprecated. Please use [Send an email from a shared mailbox (V2)](/en-us/connectors/office365/#send-an-email-from-a-shared-mailbox-%28v2%29) instead.

~~This operation sends an email from a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Original Mailbox Address | MailboxAddress | True | email | Specify email address of a shared mailbox like someone@contoso.com |
| To | To | True | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Subject | Subject | True | string | Specify the subject of the mail |
| Body | Body | True | string | Specify the body of the mail |
| CC | Cc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| BCC | Bcc |  | email | Specify email addresses separated by semicolons like someone@contoso.com |
| Name | Name | True | string | Attachment name |
| Content | ContentBytes | True | byte | Attachment content |
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |
| Is HTML | IsHtml |  | boolean | Is Html? |

### Send an HTTP request

- Operation ID:
    - HttpRequest

Construct a Microsoft Graph REST API request to invoke. These segments are supported: 1st segement: /me, /users/&lt;userId&gt; 2nd segment: messages, mailFolders, events, calendar, calendars, outlook, inferenceClassification. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api).

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
| Hide Microsoft footer | HideMicrosoftFooter |  | boolean | If set to Yes, then the Microsoft footer is hidden in the email body. |

#### Returns

Approval Email Response

- Body
    - ApprovalEmailResponse

### Set up automatic replies (V2)

- Operation ID:
    - SetAutomaticRepliesSetting\_V2

Set the automatic replies setting for your mailbox.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Status | status | True | string | Automatic reply setting status |
| External Audience | externalAudience | True | string | The audience that will see the external reply message |
| DateTime | dateTime |  | string | Scheduled start time (example: '2017-08-29T04:00:00.0000000') |
| TimeZone | timeZone |  | string | TimeZone (example: 'Pacific Standard Time') |
| DateTime | dateTime |  | string | Scheduled end time (example: '2017-08-29T05:00:00.0000000') |
| TimeZone | timeZone |  | string | TimeZone (example: 'Pacific Standard Time') |
| Internal Reply Message | internalReplyMessage |  | string | Message for people within your organization |
| External Reply Message | externalReplyMessage |  | string | Message for people outside your organization |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| automaticRepliesSetting | automaticRepliesSetting | AutomaticRepliesSettingClient\_V2 | Automatic replies setting model for the connector |

### Set up automatic replies [DEPRECATED]

- Operation ID:
    - SetAutomaticRepliesSetting

This action has been deprecated. Please use [Set up automatic replies (V2)](/en-us/connectors/office365/#set-up-automatic-replies-%28v2%29) instead.

~~Set the automatic replies setting for your mailbox.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Status | Status | True | string | Automatic reply setting status |
| External Audience | ExternalAudience | True | string | The audience that will see the external reply message |
| Start Time | ScheduledStartDateTimeOffset |  | string | Scheduled start time (example: '2016-11-01T15:30:00-00:00Z') |
| End Time | ScheduledEndDateTimeOffset |  | string | Scheduled end time (example: '2016-11-01T15:30:00-00:00Z') |
| Internal Reply Message | InternalReplyMessage |  | string | Message for people within your organization |
| External Reply Message | ExternalReplyMessage |  | string | Message for people outside your organization |

### Update contact (V2)

- Operation ID:
    - ContactPatchItem\_V2

This operation updates a contact in a contacts folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Select a contacts folder |
| Id | id | True | string | Unique identifier of contact to update |
| Id | id |  | string | The contact's unique identifier. |
| Parent folder id | parentFolderId |  | string | The ID of the contact's parent folder |
| Birthday | birthday |  | date-time | The contact's birthday |
| File as | fileAs |  | string | The name the contact is filed under |
| Display Name | displayName |  | string | The contact's display name |
| Given name | givenName | True | string | The contact's given name |
| Initials | initials |  | string | The contact's initials |
| Middle name | middleName |  | string | The contact's middle name |
| Nickname | nickName |  | string | The contact's nickname |
| Surname | surname |  | string | The contact's surname |
| Title | title |  | string | The contact's title |
| Generation | generation |  | string | The contact's generation |
| name | name |  | string |  |
| address | address |  | email |  |
| IM addresses | imAddresses |  | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | jobTitle |  | string | The contact's job title |
| Company name | companyName |  | string | The name of the contact's company |
| Department | department |  | string | The contact's department |
| Office location | officeLocation |  | string | The location of the contact's office |
| Profession | profession |  | string | The contact's profession |
| Business home page | businessHomePage |  | string | The business home page of the contact |
| Assistant name | assistantName |  | string | The name of the contact's assistant |
| Manager | manager |  | string | The name of the contact's manager |
| Home phones | homePhones | True | array of string | The contact's home phone numbers |
| Business phones | businessPhones |  | array of string | The contact's business phone numbers |
| Mobile phone | mobilePhone |  | string | The contact's mobile phone number |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Street | street |  | string | The contact's street address. |
| City | city |  | string | The contact's city. |
| State | state |  | string | The contact's state. |
| Country Or Region | countryOrRegion |  | string | The contact's country of region. |
| Postal code | postalCode |  | string | The contact's postal code. |
| Yomi company name | yomiCompanyName |  | string | The phonetic Japanese company name of the contact |
| Yomi given name | yomiGivenName |  | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | yomiSurname |  | string | The phonetic Japanese surname (last name) of the contact |
| Categories | categories |  | array of string | The categories associated with the contact |
| Change key | changeKey |  | string | Identifies the version of the event object |
| Created time | createdDateTime |  | date-time | The time the contact was created |
| Last modified time | lastModifiedDateTime |  | date-time | The time the contact was modified |

#### Returns

Contact

- Body
    - ContactResponse_V2

### Update contact [DEPRECATED]

- Operation ID:
    - ContactPatchItem

This action has been deprecated. Please use [Update contact (V2)](/en-us/connectors/office365/#update-contact-%28v2%29) instead.

~~This operation updates a contact in a contacts folder.~~

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

This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.

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

This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.

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

### Update event (V3) [DEPRECATED]

- Operation ID:
    - V3CalendarPatchItem

This action has been deprecated. Please use [Update event (V4)](/en-us/connectors/office365/#update-event-%28v4%29) instead.

~~This operation updates an event in a calendar.~~

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

### Update event (V4)

- Operation ID:
    - V4CalendarPatchItem

This operation updates an event in a calendar using Graph API.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Id | id | True | string | Select an event |
| Subject | subject | True | string | Event subject |
| Start time | start | True | date-no-tz | Start time of the event (example: '2017-08-29T04:00:00') |
| End time | end | True | date-no-tz | End time of the event (example: '2017-08-29T05:00:00') |
| Time zone | timeZone | True | string | Time zone of the event |
| Required attendees | requiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | optionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| Resource attendees | resourceAttendees |  | string | Resource attendees for the event separated by semicolons |
| Body | body |  | html | Body of the message associated with the event |
| Categories | categories |  | array of string | The categories associated with the event |
| Location | location |  | string | Location of the event |
| Importance | importance |  | string | The importance of the event: low, normal, or high |
| Is all day event? | isAllDay |  | boolean | Set to true if the event lasts all day |
| Recurrence | recurrence |  | string | The recurrence pattern for the event: none, daily, weekly, monthly or yearly |
| Selected days of week | selectedDaysOfWeek |  | array of string | Days of week for weekly recurrence |
| Recurrence end date | recurrenceEnd |  | date | End Date of the recurrence |
| Number of occurrences | numberOfOccurences |  | integer | How many times to repeat the event |
| Reminder | reminderMinutesBeforeStart |  | integer | Time in minutes before event start to remind |
| Is reminder on | isReminderOn |  | boolean | Set to true if an alert is set to remind the user of the event. |
| Show as | showAs |  | string | Status to show during the event: free, tentative, busy, oof, workingElsewhere or unknown |
| Response requested | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Sensitivity | sensitivity |  | string | The possible values are: normal, personal, private, confidential |

#### Returns

Connector specific calendar event model class for the client with Graph API

- Body
    - GraphCalendarEventClientReceive

### Update my contact's photo

- Operation ID:
    - UpdateMyContactPhoto

Updates the photo of the specified contact of the current user. The size of the photo must be less than 4 MB.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder id | folder | True | string | Select a contacts folder |
| Item id | id | True | string | Unique identifier of a contact to update photo |
| Image content | body | True | binary | Image content |

### Updates an email Draft message

- Operation ID:
    - UpdateDraftEmail

This operation updates an an email Draft message.

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
| Sensitivity | Sensitivity |  | string | Sensitivity |
| Reply To | ReplyTo |  | email | The email addresses to use when replying |
| Importance | Importance |  | string | Importance |
| Message Id | messageId | True | string | Message Id. |

## Triggers

| When a new email arrives (V2) [DEPRECATED] | This action has been deprecated. Please use [When a new email arrives (V3)](/en-us/connectors/office365/#when-a-new-email-arrives-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| --- | --- |
| When a new email arrives (V3) | This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments. |
| When a new email arrives (webhook) [DEPRECATED] | This operation triggers a flow when a new email arrives. |
| When a new email arrives [DEPRECATED] | This action has been deprecated. Please use [When a new email arrives (V3)](/en-us/connectors/office365/#when-a-new-email-arrives-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new email arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new email arrives in a shared mailbox (V2) | This operation triggers a flow when a new email arrives in a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments. |
| When a new email arrives in a shared mailbox [DEPRECATED] | This action has been deprecated. Please use [When a new email arrives in a shared mailbox (V2)](/en-us/connectors/office365/#when-a-new-email-arrives-in-a-shared-mailbox-%28v2%29) instead.<br><br>~~This operation triggers a flow when a new email arrives in a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new email mentioning me arrives (V2) [DEPRECATED] | This action has been deprecated. Please use [When a new email mentioning me arrives (V3)](/en-us/connectors/office365/#when-a-new-email-mentioning-me-arrives-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new email mentioning me arrives (V3) | This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments. |
| When a new email mentioning me arrives [DEPRECATED] | This action has been deprecated. Please use [When a new email mentioning me arrives (V3)](/en-us/connectors/office365/#when-a-new-email-mentioning-me-arrives-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new email mentioning me arrives. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~ |
| When a new event is created (V1) [DEPRECATED] | This action has been deprecated. Please use [When a new event is created (V3)](/en-us/connectors/office365/#when-a-new-event-is-created-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new event is created in a calendar. (V1)~~ |
| When a new event is created (V2) [DEPRECATED] | This action has been deprecated. Please use [When a new event is created (V3)](/en-us/connectors/office365/#when-a-new-event-is-created-%28v3%29) instead.<br><br>~~This operation triggers a flow when a new event is created in a calendar. (V2)~~ |
| When a new event is created (V3) | This operation triggers a flow when a new event is created in a calendar. (V3) |
| When an email is flagged (V2) [DEPRECATED] | This action has been deprecated. Please use [When an email is flagged (V4)](/en-us/connectors/office365/#when-an-email-is-flagged-%28v4%29) instead.<br><br>~~This operation triggers a flow when an email is flagged.~~ |
| When an email is flagged (V3) | This operation triggers a flow when an email is flagged. |
| When an email is flagged (V4) (Preview) | This operation triggers a flow when an email is flagged. |
| When an email is flagged [DEPRECATED] | This action has been deprecated. Please use [When an email is flagged (V4)](/en-us/connectors/office365/#when-an-email-is-flagged-%28v4%29) instead.<br><br>~~This operation triggers a flow when an email is flagged.~~ |
| When an event is added, updated or deleted (V2) [DEPRECATED] | This action has been deprecated. Please use [When an event is added, updated or deleted (V3)](/en-us/connectors/office365/#when-an-event-is-added%2c-updated-or-deleted-%28v3%29) instead.<br><br>~~This operation triggers a flow when an event is added, updated or deleted in a calendar. (V2)~~ |
| When an event is added, updated or deleted (V3) | This operation triggers a flow when an event is added, updated or deleted in a calendar. (V3) This is not available in Mooncake. |
| When an event is added, updated or deleted [DEPRECATED] | This action has been deprecated. Please use [When an event is added, updated or deleted (V3)](/en-us/connectors/office365/#when-an-event-is-added%2c-updated-or-deleted-%28v3%29) instead.<br><br>~~This operation triggers a flow when an event is added, updated or deleted in a calendar.~~ |
| When an event is modified (V1) [DEPRECATED] | This action has been deprecated. Please use [When an event is modified (V3)](/en-us/connectors/office365/#when-an-event-is-modified-%28v3%29) instead.<br><br>~~This operation triggers a flow when an event is modified in a calendar. (V1)~~ |
| When an event is modified (V2) [DEPRECATED] | This action has been deprecated. Please use [When an event is modified (V3)](/en-us/connectors/office365/#when-an-event-is-modified-%28v3%29) instead.<br><br>~~This operation triggers a flow when an event is modified in a calendar. (V2)~~ |
| When an event is modified (V3) | This operation triggers a flow when an event is modified in a calendar. (V3) |
| When an upcoming event is starting soon (V2) [DEPRECATED] | This action has been deprecated. Please use [When an upcoming event is starting soon (V3)](/en-us/connectors/office365/#when-an-upcoming-event-is-starting-soon-%28v3%29) instead.<br><br>~~This operation triggers a flow when an upcoming calendar event is starting.~~ |
| When an upcoming event is starting soon (V3) | This operation triggers a flow when an upcoming calendar event is starting. |
| When an upcoming event is starting soon [DEPRECATED] | This action has been deprecated. Please use [When an upcoming event is starting soon (V3)](/en-us/connectors/office365/#when-an-upcoming-event-is-starting-soon-%28v3%29) instead.<br><br>~~This operation triggers a flow when an upcoming calendar event is starting.~~ |

### When a new email arrives (V2) [DEPRECATED]

- Operation ID:
    - OnNewEmailV2

This action has been deprecated. Please use [When a new email arrives (V3)](/en-us/connectors/office365/#when-a-new-email-arrives-%28v3%29) instead.

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When a new email arrives (V3)

- Operation ID:
    - OnNewEmailV3

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When a new email arrives (webhook) [DEPRECATED]

- Operation ID:
    - CreateOnNewEmailSubscription

This operation triggers a flow when a new email arrives.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath |  | string | Mail folder to check for new emails. |
| Importance | importance |  | string | Importance of the received email ("Any", "High", "Normal", "Low"). |
| Has Attachment | hasAttachment |  | string | Whether the email has attachments ("Any", "Yes", "No"). |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ReceiveMessageMetadata]

### When a new email arrives [DEPRECATED]

- Operation ID:
    - OnNewEmail

This action has been deprecated. Please use [When a new email arrives (V3)](/en-us/connectors/office365/#when-a-new-email-arrives-%28v3%29) instead.

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

### When a new email arrives in a shared mailbox (V2)

- Operation ID:
    - SharedMailboxOnNewEmailV2

This operation triggers a flow when a new email arrives in a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Original Mailbox Address | mailboxAddress | True | string | Address of the shared mailbox. |
| Folder | folderId |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | hasAttachments |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When a new email arrives in a shared mailbox [DEPRECATED]

- Operation ID:
    - SharedMailboxOnNewEmail

This action has been deprecated. Please use [When a new email arrives in a shared mailbox (V2)](/en-us/connectors/office365/#when-a-new-email-arrives-in-a-shared-mailbox-%28v2%29) instead.

~~This operation triggers a flow when a new email arrives in a shared mailbox. Your account should have permission to access the mailbox for this operation to succeed. It will skip any email that has a total message size greater than the limit put by your Exchange Admin or 50 MB, whichever is less. It may also skip protected emails and emails with invalid body or attachments.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Original Mailbox Address | mailboxAddress | True | string | Address of the shared mailbox. |
| Folder | folderId |  | string | Mail folder to check for new emails. |
| To | to |  | email | Recipient email addresses separated by semicolons (If any match, the trigger will run). |
| CC | cc |  | email | CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| To or CC | toOrCc |  | email | To or CC recipient email addresses separated by semicolons (If any match, the trigger will run). |
| From | from |  | email | Sender email addresses separated by semicolons (If any match, the trigger will run). |
| Importance | importance |  | string | Importance of the email (Any, High, Normal, Low). |
| Only with Attachments | hasAttachments |  | boolean | If set to true, only emails with an attachment will be retrieved. Emails without any attachments will be skipped. If set to false, all emails will be retrieved. |
| Include Attachments | includeAttachments |  | boolean | Should the response of the trigger include the attachments content. |
| Subject Filter | subjectFilter |  | string | String to look for in the subject line. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[ClientReceiveMessage]

### When a new email mentioning me arrives (V2) [DEPRECATED]

- Operation ID:
    - OnNewMentionMeEmailV2

This action has been deprecated. Please use [When a new email mentioning me arrives (V3)](/en-us/connectors/office365/#when-a-new-email-mentioning-me-arrives-%28v3%29) instead.

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When a new email mentioning me arrives (V3)

- Operation ID:
    - OnNewMentionMeEmailV3

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When a new email mentioning me arrives [DEPRECATED]

- Operation ID:
    - OnNewMentionMeEmail

This action has been deprecated. Please use [When a new email mentioning me arrives (V3)](/en-us/connectors/office365/#when-a-new-email-mentioning-me-arrives-%28v3%29) instead.

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

This action has been deprecated. Please use [When a new event is created (V3)](/en-us/connectors/office365/#when-a-new-event-is-created-%28v3%29) instead.

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

### When a new event is created (V2) [DEPRECATED]

- Operation ID:
    - CalendarGetOnNewItemsV2

This action has been deprecated. Please use [When a new event is created (V3)](/en-us/connectors/office365/#when-a-new-event-is-created-%28v3%29) instead.

~~This operation triggers a flow when a new event is created in a calendar. (V2)~~

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

### When a new event is created (V3)

- Operation ID:
    - CalendarGetOnNewItemsV3

This operation triggers a flow when a new event is created in a calendar. (V3)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items returned by Graph API

- Body
    - GraphCalendarEventListClientReceive

### When an email is flagged (V2) [DEPRECATED]

- Operation ID:
    - OnFlaggedEmailV2

This action has been deprecated. Please use [When an email is flagged (V4)](/en-us/connectors/office365/#when-an-email-is-flagged-%28v4%29) instead.

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When an email is flagged (V3)

- Operation ID:
    - OnFlaggedEmailV3

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When an email is flagged (V4) (Preview)

- Operation ID:
    - OnFlaggedEmailV4

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
    - TriggerBatchResponse[GraphClientReceiveMessage]

### When an email is flagged [DEPRECATED]

- Operation ID:
    - OnFlaggedEmail

This action has been deprecated. Please use [When an email is flagged (V4)](/en-us/connectors/office365/#when-an-email-is-flagged-%28v4%29) instead.

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

### When an event is added, updated or deleted (V2) [DEPRECATED]

- Operation ID:
    - CalendarGetOnChangedItemsV2

This action has been deprecated. Please use [When an event is added, updated or deleted (V3)](/en-us/connectors/office365/#when-an-event-is-added%2c-updated-or-deleted-%28v3%29) instead.

~~This operation triggers a flow when an event is added, updated or deleted in a calendar. (V2)~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Incoming Days Tracked | incomingDays |  | integer | Number of incoming days in calendar to be tracked |
| Past Days Tracked | pastDays |  | integer | Number of past days in calendar to be tracked |

#### Returns

The list of calendar items with action type

- Body
    - GraphCalendarEventListWithActionType

### When an event is added, updated or deleted (V3)

- Operation ID:
    - CalendarGetOnChangedItemsV3

This operation triggers a flow when an event is added, updated or deleted in a calendar. (V3) This is not available in Mooncake.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Incoming Days Tracked | incomingDays |  | integer | Number of incoming days in calendar to be tracked |
| Past Days Tracked | pastDays |  | integer | Number of past days in calendar to be tracked |

#### Returns

The list of calendar items with action type

- Body
    - GraphCalendarEventListWithActionType

### When an event is added, updated or deleted [DEPRECATED]

- Operation ID:
    - CalendarGetOnChangedItems

This action has been deprecated. Please use [When an event is added, updated or deleted (V3)](/en-us/connectors/office365/#when-an-event-is-added%2c-updated-or-deleted-%28v3%29) instead.

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

This action has been deprecated. Please use [When an event is modified (V3)](/en-us/connectors/office365/#when-an-event-is-modified-%28v3%29) instead.

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

### When an event is modified (V2) [DEPRECATED]

- Operation ID:
    - CalendarGetOnUpdatedItemsV2

This action has been deprecated. Please use [When an event is modified (V3)](/en-us/connectors/office365/#when-an-event-is-modified-%28v3%29) instead.

~~This operation triggers a flow when an event is modified in a calendar. (V2)~~

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

### When an event is modified (V3)

- Operation ID:
    - CalendarGetOnUpdatedItemsV3

This operation triggers a flow when an event is modified in a calendar. (V3)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | table | True | string | Select a calendar |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |

#### Returns

The list of calendar items returned by Graph API

- Body
    - GraphCalendarEventListClientReceive

### When an upcoming event is starting soon (V2) [DEPRECATED]

- Operation ID:
    - OnUpcomingEventsV2

This action has been deprecated. Please use [When an upcoming event is starting soon (V3)](/en-us/connectors/office365/#when-an-upcoming-event-is-starting-soon-%28v3%29) instead.

~~This operation triggers a flow when an upcoming calendar event is starting.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | table | True | string | Unique identifier of the calendar. |
| Look-Ahead Time | lookAheadTimeInMinutes |  | integer | Time (in minutes) to look ahead for upcoming events. |

#### Returns

The list of calendar items

- Body
    - CalendarEventListClientReceive

### When an upcoming event is starting soon (V3)

- Operation ID:
    - OnUpcomingEventsV3

This operation triggers a flow when an upcoming calendar event is starting.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar Id | table | True | string | Unique identifier of the calendar. |
| Look-Ahead Time | lookAheadTimeInMinutes |  | integer | Time (in minutes) to look ahead for upcoming events. |

#### Returns

The list of calendar items returned by Graph API

- Body
    - GraphCalendarEventListClientReceive

### When an upcoming event is starting soon [DEPRECATED]

- Operation ID:
    - OnUpcomingEvents

This action has been deprecated. Please use [When an upcoming event is starting soon (V3)](/en-us/connectors/office365/#when-an-upcoming-event-is-starting-soon-%28v3%29) instead.

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

### GraphCalendarEventListClientReceive

The list of calendar items returned by Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphCalendarEventClientReceive | List of calendar items |

### GraphCalendarEventClientReceive

Connector specific calendar event model class for the client with Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Subject | subject | string | Event subject |
| Start time | start | date-no-tz | Start time of the event (example: '2017-08-29T04:00:00.0000000') |
| End time | end | date-no-tz | End time of the event (example: '2017-08-29T05:00:00.0000000') |
| Start time with time zone | startWithTimeZone | date-time | Start time of the event with time zone (example: '2017-08-29T04:00:00.0000000+00:00') |
| End time with time zone | endWithTimeZone | date-time | End time of the event with time zone (example: '2017-08-29T05:00:00.0000000+00:00') |
| Body | body | html | Body of the message associated with the event |
| Is HTML | isHtml | boolean | Set to true if the body is Html |
| Response type | responseType | string | The response type of the event (none, organizer, tentativelyAccepted, accepted, declined or notResponded) |
| Response time | responseTime | date-time | The response time of the event |
| Id | id | string | The event's unique identifier |
| Created time | createdDateTime | date-time | The date and time that the event was created |
| Last modified time | lastModifiedDateTime | date-time | The date and time that the event was last modified |
| Organizer | organizer | email | The organizer of the event |
| Time zone | timeZone | string | Time zone of the event |
| Series master id | seriesMasterId | string | Unique identifier for Series Master event type |
| iCalUId | iCalUId | string | A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series |
| Categories | categories | array of string | The categories associated with the event |
| Web link | webLink | uri | The URL to open the event in Outlook Web App |
| Required attendees | requiredAttendees | email | Required attendees for the event separated by semicolons |
| Optional attendees | optionalAttendees | email | Optional attendees for the event separated by semicolons |
| Resource attendees | resourceAttendees | string | Resource attendees for the event separated by semicolons |
| Location | location | string | Location of the event |
| Importance | importance | string | The importance of the event: low, normal, or high |
| Is all day event? | isAllDay | boolean | Set to true if the event lasts all day |
| Recurrence | recurrence | string | The recurrence pattern for the event: none, daily, weekly, monthly or yearly |
| Recurrence end date | recurrenceEnd | date | End Date of the recurrence |
| Number of occurrences | numberOfOccurences | integer | How many times to repeat the event |
| Reminder | reminderMinutesBeforeStart | integer | Time in minutes before event start to remind |
| Is reminder on | isReminderOn | boolean | Set to true if an alert is set to remind the user of the event. |
| Show as | showAs | string | Status to show during the event: free, tentative, busy, oof, workingElsewhere or unknown |
| Response requested | responseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Sensitivity | sensitivity | string | The possible values are: normal, personal, private, confidential |

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

### GraphOutlookCategory

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The ID of the Outlook Category. |
| displayName | displayName | string | The display name of the Outlook Category. |

### BatchOperationResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| successCount | successCount | integer | The count of messages processed successfully. |
| failures | failures | array of BatchItemFailureResult | The list of failed messages with errors. |

### BatchItemFailureResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| MessageId | MessageId | string | The ID of the failed message. |
| Error | Error | string | The error message of the failure. |

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

### GraphClientReceiveMessage

Graph Client Receive Email Message

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| From | from | email | The mailbox owner and sender of the message |
| To | toRecipients | email | The recipients for the message |
| CC | ccRecipients | email | The Cc recipients for the message |
| BCC | bccRecipients | email | The Bcc recipients for the message |
| Reply To | replyTo | email | The email addresses to use when replying |
| Subject | subject | string | The subject of the message |
| Body | body | string | The body of the message |
| Importance | importance | string | The importance of the message (low, normal, high) |
| Body Preview | bodyPreview | string | The preview of the message |
| Has Attachment | hasAttachments | boolean | Indicates whether the message has attachments |
| Message Id | id | string | The unique identifier of the message |
| Internet Message Id | internetMessageId | string | The message ID in the format specified by RFC2822 |
| Conversation Id | conversationId | string | The Id of the conversation the email belongs to |
| Received Time | receivedDateTime | date-time | The date and time the message was received |
| Is Read | isRead | boolean | Indicates whether the message has been read |
| Attachments | attachments | array of GraphClientReceiveFileAttachment | The file attachments for the message |
| Is HTML | isHtml | boolean | Is Html? |
| sensitivityLabelInfo | sensitivityLabelInfo | array of sensitivityLabelMetadata |  |

### GraphClientReceiveFileAttachment

File Attachment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Attachment Id | id | string | Attachment Id |
| Name | name | string | Attachment name |
| Content | contentBytes | byte | Attachment content |
| Content-Type | contentType | string | Attachment content type |
| Size | size | integer | The size in bytes of the attachment |
| Is Inline | isInline | boolean | Set to true if this is an inline attachment |
| Last Modified DateTime | lastModifiedDateTime | date-time | The date and time when the attachment was last modified |
| Content Id | contentId | string | Content Id |

### BatchResponse[GraphClientReceiveMessage]

Represents a wrapper object for batch response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphClientReceiveMessage | A list of the response objects |

### TriggerBatchResponse[ClientReceiveMessage]

Represents a wrapper object for batch trigger response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ClientReceiveMessage | A list of the response objects |

### TriggerBatchResponse[GraphClientReceiveMessage]

Represents a wrapper object for batch trigger response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphClientReceiveMessage | A list of the response objects |

### MailTipsClientReceive

Mail tips client model returned to the caller

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| AutomaticReplies | AutomaticReplies | MailTipsAutomaticReplies | Automatic replies as part of mail tips |
| DeliveryRestricted | DeliveryRestricted | boolean | Is delivery restricted |
| ExternalMemberCount | ExternalMemberCount | integer | Number of external members |
| IsModerated | IsModerated | boolean | Is moderated |
| MailboxFull | MailboxFull | boolean | Is mailbox full |
| MaxMessageSize | MaxMessageSize | integer | Maximum message size |
| TotalMemberCount | TotalMemberCount | integer | Total member count |

### MailTipsAutomaticReplies

Automatic replies as part of mail tips

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Message | Message | string | Automatic replies message |

### TriggerBatchResponse[ReceiveMessageMetadata]

Represents a wrapper object for batch trigger response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ReceiveMessageMetadata | A list of the response objects |

### ReceiveMessageMetadata

Receive Email Message

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| From | From | email | The mailbox owner and sender of the message |
| To | To | email | The recipients for the message |
| CC | Cc | email | The Cc recipients for the message |
| BCC | Bcc | email | The Bcc recipients for the message |
| Reply To | ReplyTo | email | The email addresses to use when replying |
| Subject | Subject | string | The subject of the message |
| Importance | Importance | integer | The importance of the message (0 - Low, 1 - Normal, 2 - High) |
| Has Attachment | HasAttachment | boolean | Indicates whether the message has attachments |
| Message Id | Id | string | The unique identifier of the message |
| Received Time | DateTimeReceived | date-time | The date and time the message was received |
| Is Read | IsRead | boolean | Indicates whether the message has been read |

### ApprovalEmailResponse

Approval Email Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| SelectedOption | SelectedOption | string | User response |
| UserEmailAddress | UserEmailAddress | string | User email address. The value is the user's email address for individual users and user ID for the members in Distribution Group or Mail Enabled Security Group. |
| UserTenantId | UserTenantId | string | User tenant ID. The value is the tenant id of the user for both individual users and the members in Distribution Group or Mail Enabled Security Group. |
| UserId | UserId | string | User ID. The value is the user id for both individual users and the members in Distribution Group or Mail Enabled Security Group. |

### OutlookReceiveMessage

Received message from outlook rest api

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| InternetMessageId | InternetMessageId | string | Internet Message Id |
| BodyPreview | BodyPreview | string | Body preview |
| Id | Id | string | Id |
| ConversationId | ConversationId | string | Conversation Id |
| HasAttachments | HasAttachments | boolean | Has attachments |
| IsRead | IsRead | boolean | Is read |
| CreatedDateTime | CreatedDateTime | date-time | Created date and time |
| ReceivedDateTime | ReceivedDateTime | date-time | Received date and time |
| LastModifiedDateTime | LastModifiedDateTime | date-time | Last modified date and time |
| Attachments | Attachments | array of OutlookReceiveAttachment | Attachments |
| ToRecipients | ToRecipients | array of Recipient | To Recipient |
| CcRecipients | CcRecipients | array of Recipient | Cc Recipients |
| BccRecipients | BccRecipients | array of Recipient | Bcc Recipients |
| ReplyTo | ReplyTo | array of Recipient | The email addresses to use when replying |
| Subject | Subject | string | Subject |
| Body | Body | ItemBody |  |
| From | From | Recipient |  |
| Importance | Importance | string | Importance |
| InternetMessageHeaders | InternetMessageHeaders | array of InternetMessageHeader | Internet message headers |

### OutlookReceiveAttachment

Attachment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| @odata.type | @odata.type | string | OData type |
| Id | Id | string | Attachment Id |
| Name | Name | string | Attachment name |
| ContentBytes | ContentBytes | string | Attachment content |
| ContentType | ContentType | string | Attachment content type |
| Size | Size | integer | Attachment size in bytes |
| Permission | Permission | string | Permission associated with a reference attachment |
| ProviderType | ProviderType | string | Provider for the reference attachment |
| SourceUrl | SourceUrl | string | Reference attachment source url |
| IsInline | IsInline | boolean | Set to true if this is an inline attachment |
| LastModifiedDateTime | LastModifiedDateTime | date-time | The date and time when the attachment was last modified |
| ContentId | ContentId | string | Content Id |

### InternetMessageHeader

Class representing a data structure for an Internet message header which is considered as SMTP header by Exchange

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | Header name |
| Value | Value | string | Header value |

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

### EntityListResponse[GraphCalendarEventClientReceive]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphCalendarEventClientReceive | List of values |

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

### GraphCalendarEventListWithActionType

The list of calendar items with action type

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphCalendarEventClientWithActionType | List of calendar items |

### GraphCalendarEventClientWithActionType

Graph calendar event model with action type

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Action Type | ActionType | string | Changed action type of the event - added, updated or deleted. |
| Is Added | IsAdded | boolean | Flag that indicates whether the event was added since the last poll of the trigger. |
| Is Updated | IsUpdated | boolean | Flag that indicates whether the event was updated since the last poll of the trigger. |
| Subject | subject | string | Event subject |
| Start time | start | date-no-tz | Start time of the event (example: '2017-08-29T04:00:00.0000000') |
| End time | end | date-no-tz | End time of the event (example: '2017-08-29T05:00:00.0000000') |
| Start time with time zone | startWithTimeZone | date-time | Start time of the event with time zone (example: '2017-08-29T04:00:00.0000000+00:00') |
| End time with time zone | endWithTimeZone | date-time | End time of the event with time zone (example: '2017-08-29T05:00:00.0000000+00:00') |
| Body | body | html | Body of the message associated with the event |
| Is HTML | isHtml | boolean | Set to true if the body is Html |
| Response type | responseType | string | The response type of the event (none, organizer, tentativelyAccepted, accepted, declined or notResponded) |
| Response time | responseTime | date-time | The response time of the event |
| Id | id | string | The event's unique identifier |
| Created time | createdDateTime | date-time | The date and time that the event was created |
| Last modified time | lastModifiedDateTime | date-time | The date and time that the event was last modified |
| Organizer | organizer | email | The organizer of the event |
| Time zone | timeZone | string | Time zone of the event |
| Series master id | seriesMasterId | string | Unique identifier for Series Master event type |
| iCalUId | iCalUId | string | A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series |
| Categories | categories | array of string | The categories associated with the event |
| Web link | webLink | uri | The URL to open the event in Outlook Web App |
| Required attendees | requiredAttendees | email | Required attendees for the event separated by semicolons |
| Optional attendees | optionalAttendees | email | Optional attendees for the event separated by semicolons |
| Resource attendees | resourceAttendees | string | Resource attendees for the event separated by semicolons |
| Location | location | string | Location of the event |
| Importance | importance | string | The importance of the event: low, normal, or high |
| Is all day event? | isAllDay | boolean | Set to true if the event lasts all day |
| Recurrence | recurrence | string | The recurrence pattern for the event: none, daily, weekly, monthly or yearly |
| Recurrence end date | recurrenceEnd | date | End Date of the recurrence |
| Number of occurrences | numberOfOccurences | integer | How many times to repeat the event |
| Reminder | reminderMinutesBeforeStart | integer | Time in minutes before event start to remind |
| Is reminder on | isReminderOn | boolean | Set to true if an alert is set to remind the user of the event. |
| Show as | showAs | string | Status to show during the event: free, tentative, busy, oof, workingElsewhere or unknown |
| Response requested | responseRequested | boolean | Set to true if the sender would like a response when the event is accepted or declined |
| Sensitivity | sensitivity | string | The possible values are: normal, personal, private, confidential |

### EntityListResponse[GraphContactFolder]

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphContactFolder | List of values |

### GraphContactFolder

Contact folder data model returned by Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The ID of the contacts folder |
| Display Name | displayName | string | The name of the contacts folder |
| Parent Folder ID | parentFolderId | string | The ID of the parent folder |

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

### AutomaticRepliesSettingClient\_V2

Automatic replies setting model for the connector

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Status | status | string | Automatic reply setting status |
| External Audience | externalAudience | string | The audience that will see the external reply message |
| DateTime | scheduledStartDateTime.dateTime | string | Scheduled start time (example: '2017-08-29T04:00:00.0000000') |
| TimeZone | scheduledStartDateTime.timeZone | string | TimeZone (example: 'Pacific Standard Time') |
| DateTime | scheduledEndDateTime.dateTime | string | Scheduled end time (example: '2017-08-29T05:00:00.0000000') |
| TimeZone | scheduledEndDateTime.timeZone | string | TimeZone (example: 'Pacific Standard Time') |
| Internal Reply Message | internalReplyMessage | string | Message for people within your organization |
| External Reply Message | externalReplyMessage | string | Message for people outside your organization |

### MailTipsClientReceive\_V2

Mail tips client model returned to the caller

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| automaticReplies | automaticReplies | MailTipsAutomaticReplies\_V2 | Automatic replies as part of mail tips |
| Is delivery restricted | deliveryRestricted | boolean | Is delivery restricted |
| Is moderated | externalMemberCount | integer | Number of external members |
| Is moderated | isModerated | boolean | Is moderated |
| Is mailbox full | mailboxFull | boolean | Is mailbox full |
| Maximum message size | maxMessageSize | integer | Maximum message size |
| Total member count | totalMemberCount | integer | Total member count |

### MailTipsAutomaticReplies\_V2

Automatic replies as part of mail tips

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Automatic replies message | message | string | Automatic replies message |

### MeetingTimeSuggestions

Meeting Time Suggestions

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Confidence | Confidence | float | Confidence |
| Organizer Availability | OrganizerAvailability | string | Organizer Availability |
| Suggestion Reason | SuggestionReason | string | Suggestion Reason |
| DateTimeTimeZone | MeetingTimeSlot.Start | DateTimeTimeZone | DateTimeTimeZone |
| DateTimeTimeZone | MeetingTimeSlot.End | DateTimeTimeZone | DateTimeTimeZone |
| Attendee Availability | AttendeeAvailability | array of object | Attendee Availability |
| Availability | AttendeeAvailability.Availability | string | Availability |
| Type | AttendeeAvailability.Attendee.Type | string | Type |
| Address | AttendeeAvailability.Attendee.EmailAddress.Address | string | Address |
| Locations | Locations | array of object | Locations |
| Display Name | Locations.DisplayName | string | Display Name |
| Location Email Address | Locations.LocationEmailAddress | string | Location Email Address |
| Type | Locations.Address.Type | string | Type |
| Street | Locations.Address.Street | string | Street |
| City | Locations.Address.City | string | City |
| State | Locations.Address.State | string | State |
| Country Or Region | Locations.Address.CountryOrRegion | string | Country Or Region |
| Postal Code | Locations.Address.PostalCode | string | Postal Code |

### MeetingTimeSuggestions\_V2

Meeting Time Suggestions

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Confidence | confidence | float | Confidence |
| Organizer Availability | organizerAvailability | string | Organizer Availability |
| Suggestion Reason | suggestionReason | string | Suggestion Reason |
| DateTimeTimeZone | meetingTimeSlot.start | DateTimeTimeZone\_V2 | DateTimeTimeZone |
| DateTimeTimeZone | meetingTimeSlot.end | DateTimeTimeZone\_V2 | DateTimeTimeZone |
| Attendee Availability | attendeeAvailability | array of object | Attendee Availability |
| Availability | attendeeAvailability.availability | string | Availability |
| Type | attendeeAvailability.attendee.type | string | Type |
| Address | attendeeAvailability.attendee.emailAddress.address | string | Address |
| Locations | locations | array of object | Locations |
| Display Name | locations.displayName | string | Display Name |
| Location Email Address | locations.locationEmailAddress | string | Location Email Address |
| Street | locations.address.street | string | Street |
| City | locations.address.city | string | City |
| State | locations.address.state | string | State |
| Country Or Region | locations.address.countryOrRegion | string | Country Or Region |
| Postal Code | locations.address.postalCode | string | Postal Code |

### DateTimeTimeZone

DateTimeTimeZone

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| DateTime | DateTime | string | DateTime |
| TimeZone | TimeZone | string | TimeZone |

### DateTimeTimeZone\_V2

DateTimeTimeZone

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| DateTime | dateTime | string | DateTime (example: '2017-08-29T04:00:00.0000000') |
| TimeZone | timeZone | string | TimeZone (example: 'Pacific Standard Time') |

### EntityListResponse[ContactResponse]\_V2

Entity list response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ContactResponse\_V2 | List of values |

### EmailAddress\_V2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string |  |
| address | address | email |  |

### PhysicalAddress\_V2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Street | street | string | The contact's street address. |
| City | city | string | The contact's city. |
| State | state | string | The contact's state. |
| Country Or Region | countryOrRegion | string | The contact's country of region. |
| Postal code | postalCode | string | The contact's postal code. |

### ContactResponse\_V2

Contact

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The contact's unique identifier. |
| Parent folder id | parentFolderId | string | The ID of the contact's parent folder |
| Birthday | birthday | date-time | The contact's birthday |
| File as | fileAs | string | The name the contact is filed under |
| Display Name | displayName | string | The contact's display name |
| Given name | givenName | string | The contact's given name |
| Initials | initials | string | The contact's initials |
| Middle name | middleName | string | The contact's middle name |
| Nickname | nickName | string | The contact's nickname |
| Surname | surname | string | The contact's surname |
| Title | title | string | The contact's title |
| Generation | generation | string | The contact's generation |
| Email addresses | emailAddresses | array of EmailAddress\_V2 | The contact's email addresses |
| IM addresses | imAddresses | array of string | The contact's instant messaging (IM) addresses |
| JobTitle | jobTitle | string | The contact's job title |
| Company name | companyName | string | The name of the contact's company |
| Department | department | string | The contact's department |
| Office location | officeLocation | string | The location of the contact's office |
| Profession | profession | string | The contact's profession |
| Business home page | businessHomePage | string | The business home page of the contact |
| Assistant name | assistantName | string | The name of the contact's assistant |
| Manager | manager | string | The name of the contact's manager |
| Home phones | homePhones | array of string | The contact's home phone numbers |
| Business phones | businessPhones | array of string | The contact's business phone numbers |
| Mobile phone | mobilePhone | string | The contact's mobile phone number |
| homeAddress | homeAddress | PhysicalAddress\_V2 |  |
| businessAddress | businessAddress | PhysicalAddress\_V2 |  |
| otherAddress | otherAddress | PhysicalAddress\_V2 |  |
| Yomi company name | yomiCompanyName | string | The phonetic Japanese company name of the contact |
| Yomi given name | yomiGivenName | string | The phonetic Japanese given name (first name) of the contact |
| Yomi surname | yomiSurname | string | The phonetic Japanese surname (last name) of the contact |
| Categories | categories | array of string | The categories associated with the contact |
| Change key | changeKey | string | Identifies the version of the event object |
| Created time | createdDateTime | date-time | The time the contact was created |
| Last modified time | lastModifiedDateTime | date-time | The time the contact was modified |

### ObjectWithoutType

### sensitivityLabelMetadata

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

### MCPQueryResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| jsonrpc | jsonrpc | string |  |
| id | id | string |  |
| method | method | string |  |
| params | params | object |  |
| result | result | object |  |
| error | error | object |  |

### binary

This is the basic data type 'binary'.