---
layout: Reference
title: Microsoft Teams - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/teams/
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
document_id: bb4ba692-98a2-2ec7-319b-d75b59d3fa50
document_version_independent_id: c24a9495-e4cb-28db-3657-ecf81005757b
updated_at: 2026-05-09T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/Teams/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/3bea2815dc4643546385b089e5f26faefe6bb453/docs/Teams/index.yml
git_commit_id: 3bea2815dc4643546385b089e5f26faefe6bb453
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: teams/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/Teams/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/63959238-cb90-4871-a33d-4a5519097e47
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/78d87f42-5582-4a6b-90be-7db2f12b34e6
platformId: c9a55b59-9ac8-25ec-4b9f-8748a6f7b002
---

# Microsoft Teams

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.0028/1.0.1811.4721/teams/icon.png)
Microsoft Teams enables you to get all your content, tools and conversations in the team workspace with Microsoft 365.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - China Cloud operated by 21Vianet |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com/en-us/contactus |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/microsoft-teams/group-chat-software |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Collaboration;Communication |

## Known issues and limitations with actions

| Short description | Operations | Long description |
| --- | --- | --- |
| Message size limit | Post adaptive card and wait for a responsePost adaptive card in a chat or channelPost message in a chat or channelReply with a message in a channelReply with adaptive card in a channelUpdate an adaptive card in a chat or channel | When an action posts a message, the message size limit is approximately 28 KB. This limit includes all HTML elements such as text, images, links, tables, mentions and so on. If the message size exceeds 28 KB, the action fails with the error "*Request Entity too large*". |
| Set guest users as team owners | Add a member to a team | When you add a member to a team, you can set guest users as team owners. |
| Requires an Exchange Online Mailbox | Create a Teams meeting | When you create a Teams meeting and want to select a time zone, this action requires an Exchange online Mailbox. |
| Maximum users per chat | Create a chat | When you create a chat, this action can handle a maximum of 20 users per chat, but doesn't have support for guest users. |
| Requires the Workflow app | Post adaptive card and wait for a responsePost adaptive card in a chat or channelPost message in a chat or channelReply with a message in a channelReply with adaptive card in a channelUpdate an adaptive card in a chat or channel | These actions require Workflows (formerly Power Automate) app availability and setting to the app to the "allow" state in the Teams admin center. |
| Cannot be combined with trigger When someone responds to an adaptive card | Post adaptive card in a chat or channel | Using this trigger in "trigger + listener" workflows can result in a "Something went wrong, please try again" error when submitting a card. This error occurs because the trigger flow (which posts the adaptive card in a chat or channel) does not handle the invoke response after posting the card. Instead, the listener flow is designed to capture the invoke response event and continue processing. However, since the trigger flow does not handle the response, it returns an error. Use Post adaptive card and wait for a response as an alternative. |
| Flow Bot is not supported in Government Cloud (GCC/GCCH/DoD) tenants | Post adaptive card and wait for a responsePost adaptive card in a chat or channelPost message in a chat or channelReply with a message in a channelReply with adaptive card in a channelUpdate an adaptive card in a chat or channel | The **Flow Bot** poster option is available only in commercial tenants. It is not supported in Government Cloud (GCC/GCCH/DoD) tenants. When using Flow Bot in a Government Cloud tenant, the action fails with the error "*BotNotInConversationRoster - The bot is not part of the conversation roster*". Use the **User** poster option instead of Flow Bot when working in Government Cloud environments. |

## Known issues and limitations with triggers

| Short description | Operations | Long description |
| --- | --- | --- |
| Supports only user per flow | When a new chat message is added | When a new chat message is posted in any chat where you're a participant in Teams, the trigger can support only one user per flow. |
| Supports only single words | When keywords are mentioned | The trigger won't fire for phrases that are longer than one word. |
| Fires for all message-related data | When keywords are mentioned | This data includes the message sender and the text that includes the time when the message was sent. |
| Fires only for root messages added to channel | When a new channel message is added | When a new message is posted to a channel in Teams, the trigger doesn't fire for replies to an existing channel message. |
| Works only in default environment | For a selected messageFrom the compose box (V2)When someone responds to an adaptive card | These triggers work only in a default environment. |
| Doesn't work for guest or external users | For a selected messageWhen someone responds to an adaptive card | This trigger doesn't work for guest or external users in a Team. |
| Has a 3-minute polling interval | When a new channel message is addedWhen I am mentioned in a channel message | These triggers use a 3-minute polling interval. |
| Has a 5-minute polling interval | When a new team member is addedWhen a new team member is removed | These triggers use a 5-minute polling interval due to a limitation in the underlying API. This could cause the trigger to fire multiple times for the same event. |
| Doesn't work on unified groups with hidden members | When a new team member is addedWhen a new team member is removed | These triggers doen't work on unified groups that have hidden members. |
| Requires Power Automate Actions app | For a selected message | In Power Automate, this trigger requires that the Power Automate Actions app (App ID: 00001016-de05-492e-9106-4828fc8a8687) must be unblocked. Use an admin account to check that the app is enabled in the [Teams admin center](https://admin.teams.microsoft.com/policies/manage-apps). |
| Unsupported in Microsoft Cloud for Sovereignty | For a selected messageFrom the compose box | These triggers are not supported in sovereign clouds such as GCC, GCCH, and DoD. |

## General known issues and limitations

- To use the Teams conector, you must have enabled one of these [subscriptions](/en-us/office365/servicedescriptions/teams-service-description).
- Posting a message or adaptive card to a private channel currently isn't supported.
- Posting message or card using [Power Virtual Agents](/en-us/power-virtual-agents/fundamentals-what-is-power-virtual-agents) requires the recipient to have the bot installed in Microsoft Teams. For more information, see [Send proactive messages to users in Microsoft Teams](/en-us/power-virtual-agents/advanced-proactive-message).
- A single message can @mention only up to 20 users and 20 tags.

## Microsoft Teams Webhook

### When a Teams webhook request is received

Operation ID: TeamsIncomingWebhookTrigger

This trigger allows you to start a flow by making a POST request to the endpoint exposed by the trigger. You can send an array of adaptive cards in the body of the request to the trigger to use in later actions of the flow. This trigger only supports POST requests and does not support GET requests.

Unlike deprecated Office Webhooks, the When a Teams webhook request is received trigger allows users to specify whether anyone, any user in the tenant, or only a specific subset of users in the tenant are allowed to call the trigger. This trigger also does not support actionable messages, unlike deprecated Office Webhooks.

The callback URL of the trigger will be displayed to you when you save the flow. You can also access the callback URL by editing the flow you created in the Power Automate designer in either Power Automate or Teams.

For more information on how to author adaptive cards, refer to: [Create flows that post adaptive cards to Microsoft Teams](/en-us/power-automate/create-adaptive-cards), as well as [Adaptive Card schema best practices](https://adaptivecards.io/explorer/) and the [Adaptive card designer](https://adaptivecards.io/explorer/).

#### Request Body Schema

##### Request Body

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| type | type | yes | string | Value should always be "message" |
| attachments | attachments | yes | array of object | Array of adaptive card item objects. See AdaptiveCardItemSchema below for object schema. |

##### AdaptiveCardItemSchema

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| contentType | contentType | yes | string | Value should always be "application/vnd.microsoft.card.adaptive" |
| contentUrl | contentUrl | yes | string | Value should always be null |
| content | content | yes | object | Adaptive card object formatted in JSON. For Samples and Templates, see https://adaptivecards.io/samples |

#### Request Body Example

# [Text](#tab/text1)
```json
    {
       "type":"message",
       "attachments":[
          {
             "contentType":"application/vnd.microsoft.card.adaptive",
             "contentUrl":null,
             "content":{
                "$schema":"http://adaptivecards.io/schemas/adaptive-card.json",
                "type":"AdaptiveCard",
                "version":"1.2",
                "body":[
                    {
                    "type": "TextBlock",
                    "text": "For Samples and Templates, see [https://adaptivecards.io/samples](https://adaptivecards.io/samples)"
                    }
                ]
             }
          }
       ]
    }
```

The properties for Adaptive Card JSON file are as follows:

- The `"type"` field must be `"message"`.
- The `"attachments"` array contains a set of card objects.
- The `"contentType"` field must be set to Adaptive Card type.
- The `"content"` object is the card formatted in JSON.

# [Base64 encoded image](#tab/image1)
```json
    {
      "type": "message",
      "attachments": [
        {
          "contentType": "application/vnd.microsoft.card.adaptive",
          "content": {
            "type": "AdaptiveCard",
            "body": [
              {
                "type": "Image",
                "url": "data&colon;image/jpeg;base64,/xxxxxxxx"
              }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.0"
          }
        }
      ]
    }
```

In this example, the image is included as an attachment of type `Image` with the URL set to the Base64 encoded image data. Ensure that you replace `/xxxxxxxx` with the actual Base64 encoded image data.

The properties for Adaptive Card JSON file are as follows:

- The `"type"` field must be `"message"`.
- The `"attachments"` array contains a set of card objects.
- The `"contentType"` field must be set to Adaptive Card type.
- The `"content"` object is the card formatted in JSON.

---

1. Test your Adaptive Card with Postman:

    1. Test the Adaptive Card using [Postman](https://www.postman.com) to send a POST request to the URL, created to set up Incoming Webhook.
    2. Paste the JSON file in the body of the request and view the Adaptive Card message in Teams.

Tip

Use Adaptive Card [code samples and templates](https://adaptivecards.io/samples) to test the body of POST request.

### Example of Sending Requests

# [C#](#tab/dotnet)
[Sample code reference](https://github.com/OfficeDev/Microsoft-Teams-Samples/blob/main/samples/incoming-webhook/csharp/IncomingWebhook/Controllers/CardController.cs#L28)

```csharp
var adaptiveCardJson = @"{
  ""type"": ""message"",
  ""attachments"": [
    {
      ""contentType"": ""application/vnd.microsoft.card.adaptive"",
      ""content"": {
        ""type"": ""AdaptiveCard"",
        ""body"": [
          {
            ""type"": ""TextBlock"",
            ""text"": ""Message Text""
          }
        ],
        ""$schema"": ""http://adaptivecards.io/schemas/adaptive-card.json"",
        ""version"": ""1.2""
      }
    }
  ]
}";

var webhookUrl = "Retrieve this from the url of the trigger, e.g. https://xxxxx.logic.azure.com:443/xxxxxxxxx";

var client = new HttpClient();
client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

var content = new StringContent(adaptiveCardJson, System.Text.Encoding.UTF8, "application/json");
var response = await client.PostAsync(webhookUrl, content);
```

# [JavaScript](#tab/javascript)
[Sample code reference](https://github.com/OfficeDev/Microsoft-Teams-Samples/blob/main/samples/incoming-webhook/nodejs/api/server/index.js#L28)

```javascript
var formatted_Card_Payload = {
        "type": "message",
        "attachments": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "contentUrl": null,
                "content": {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.2",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": "Submitted response:"+ response
                        }
                    ]
                }
            }
        ]
    }

var webhookUrl = "Retrieve this from the url of the trigger, e.g. https://xxxxx.logic.azure.com:443/xxxxxxxxx";

axios.post(webhookUrl , formatted_Card_Payload )
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
```

---

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| triggerAuthenticationType | triggerAuthenticationType |  | string | Whether the flow can be triggered by anyone, any user in the tenant, or only specific users in the tenant. |
| triggerAllowedUsers | triggerAllowedUsers |  | string | List of users allowed to trigger the flow. Only used if triggerAuthenticationType set to "Specific users in my tenant." |

- Do not pass an authentication token header if you selected the "Anyone" authentication option, or POST requests to the trigger will fail.
- If you select the "Any user in my tenant" or "Specific users in my tenant" authentication option, you will need to pass an authentication token in requests to the When a Teams webhook request is received trigger.
- You can find more information on the claims required in the following document: [Add OAuth authentication for HTTP request triggers](/en-us/power-automate/oauth-authentication?tabs=classic-designer)

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| body | body | object | Output is identical to request body sent to trigger, see above example for example of output or Request Body Schema |

### Throttling Limits

- Your Power Automate performance profile determines the throttling limits of the "When a Teams webhook request is received" trigger. You can determine your performance profile at [Performance profiles](/en-us/power-automate/limits-and-config#performance-profiles).
- These limits are the same as the [Runtime endpoint request limits](/en-us/power-automate/limits-and-config#runtime-endpoint-request-limits).
- For general information on flow throttling limits, see [Limits of automated, scheduled, and instant flows](/en-us/power-automate/limits-and-config#runtime-endpoint-request-limits).

| Name | Limit | Notes |
| --- | --- | --- |
| Concurrent inbound calls | ~1,000 | You can reduce the number of concurrent requests or reduce the duration as necessary. |
| Read calls per 5 minutes | 6,000 for Low; 60,000 for all others | This limit applies to calls that get the raw inputs and outputs from a cloud flow's run history. You can distribute the workload across more than one flow as necessary. |
| Invoke calls per 5 minutes | 4,500 for Low; 45,000 for all others | You can distribute workload across more than one flow as necessary. |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Microsoft Teams Credentials (Teams GCC High) | Log in with Microsoft Teams Credentials (Teams GCC High). | Azure Government only | Not shareable |
| Microsoft Teams Credentials (Teams Public/Teams GCC) | Log in with Microsoft Teams Credentials (Teams Public/Teams GCC). | Azure Government only | Not shareable |
| Default | Log in with your credentials. | All regions except Azure Government | Not shareable |

### Microsoft Teams Credentials (Teams GCC High)

Auth ID: oauthGccHigh

Applicable: Azure Government only

Log in with Microsoft Teams Credentials (Teams GCC High).

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Teams Credentials (Teams Public/Teams GCC)

Auth ID: oauthPublic

Applicable: Azure Government only

Log in with Microsoft Teams Credentials (Teams Public/Teams GCC).

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Default

Applicable: All regions except Azure Government

Log in with your credentials.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 600 seconds |
| Non-Get requests per connection (for List chats, Post a feed notification, Post an Adaptive Card as Flow bot, and any other Flow bot operations) | 25 | 300 seconds |
| Non-Get requests per connection (all other operations) | 300 | 300 seconds |

## Actions

| Add a member to a channel | Adds a member to a channel in Microsoft Teams. The channel must be a private or shared channel. |
| --- | --- |
| Add a member to a team | Adds a member to a team in Microsoft Teams |
| Add a member to a team tag | Adds a user to a team tag |
| Add a user to a chat | Adds a user to a chat in Microsoft Teams. |
| Add an item to a section | Adds an item (chat, channel, meeting, or community) currently in a system-defined section to a user-defined teamwork section. Use Move Section Item to relocate items already in another user-defined section. |
| Create a channel | Create a new channel within a specified team |
| Create a chat | Creates a one on one or group chat |
| Create a section | Creates a new teamwork section for the current user |
| Create a tag for a team | Creates a tag in a team |
| Create a team | Creates a new team in Microsoft Teams |
| Create a Teams meeting | Create a meeting with a link at the bottom of the invite to join the meeting online on Microsoft Teams. |
| Delete a member from a team tag | Deletes a member from a team tag |
| Delete a section | Deletes a teamwork section for the current user |
| Delete a team tag | Deletes a tag from a team |
| Get a section | Gets a specific teamwork section by ID |
| Get a team | Gets the details for a team in Microsoft Teams. |
| Get a team tag | Gets a specific tag by ID from a team |
| Get AI insight | Gets a specific AI-generated insight for an online meeting. Requires Microsoft 365 Copilot license. |
| Get all ad-hoc call recordings | Gets all recordings from ad-hoc calls for the signed-in user |
| Get all ad-hoc call transcripts | Gets all transcripts from ad-hoc calls for the signed-in user |
| Get an @mention token for a team tag | Creates a token that can be inserted into a message or adaptive card sent as a user in a channel to @mention a team tag. |
| Get an @mention token for a user | Creates a token that can be inserted into a message or adaptive card to @mention a user. |
| Get an online meeting | Retrieves the properties and relationships of an online meeting. You can look up a meeting by meeting ID, join web URL, or join meeting ID. |
| Get call recording | Gets a specific recording for an ad-hoc call |
| Get call recording content | Gets the content of a call recording |
| Get call transcript | Gets a specific transcript for an ad-hoc call |
| Get call transcript content | Gets the content of a call transcript |
| Get details for a specific channel in a team | Get the channel details |
| Get meeting recording | Gets a specific recording for an online meeting |
| Get meeting recording content | Gets the content stream of a meeting recording |
| Get meeting transcript | Gets a specific transcript for an online meeting |
| Get meeting transcript content | Gets the content of a meeting transcript |
| Get message details | Gets the details of a message in a chat or a channel. |
| Get messages in a channel | Gets messages from a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Get messages in a chat | Retrieves messages from a one on one or group chat |
| List AI insights | Lists AI-generated insights for an online meeting. Requires Microsoft 365 Copilot license. |
| List all channels | Lists all the channels for a specific team, including channels that are shared with the team |
| List all tags for a team | Lists the team's tags |
| List associated teams | Lists all the teams you are a direct member of, or are a member of a shared channel that is hosted inside the team. |
| List call recordings | Lists all recordings for an ad-hoc call |
| List call transcripts | Lists all transcripts for an ad-hoc call |
| List channels | Lists all the channels for a specific team |
| List chat or channel members | List direct members of a group chat or a channel |
| List chats | Lists recent chats you are a part of |
| List joined teams | Lists all the teams in Microsoft Teams that you are a member of |
| List meeting recordings | Lists all recordings for an online meeting |
| List meeting transcripts | Lists all transcripts for an online meeting |
| List replies of a channel message | List replies to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| List section items | Lists the items (chats, channels, meetings, communities) in a teamwork section. Each item belongs to exactly one section at a time. |
| List sections | Lists the current user's teamwork sections |
| List team members | Lists the members of a team in Microsoft Teams |
| List the members of a team tag | Lists the members of a team tag |
| Move a section item | Atomically moves an item from one user-defined teamwork section to another user-defined section. Each item can belong to only one section at a time. This action removes the item from its current section and adds it to the target section. |
| Post a choice of options as the Flow bot to a user | Send a set of options to a Microsoft Teams user, that they must respond to before the flow will continue. This action will pause the flow until the user response to the options |
| Post a feed notification | Posts a notification to a user's activity feed linking to a chat or team. |
| Post a message (V2) [DEPRECATED] | Post a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Post a message (V3) [DEPRECATED] | Posts a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Post a message [DEPRECATED] | Posts a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Post a message as the Flow bot to a channel [DEPRECATED] | Easily automate the process of posting a message to a Teams channel. |
| Post a message as the Flow bot to a user [DEPRECATED] | Easily automate the process of sending a message to someone in Teams. |
| Post a message to myself | Sends a message to the signed-in user's own Notes chat in Microsoft Teams. |
| Post a reply to a message (V2) [DEPRECATED] | Posts a reply to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Post a reply to a message [DEPRECATED] | Posts a reply to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| Post adaptive card and wait for a response | Posts an adaptive card to a chat or a channel and waits for a response from any user. This will pause the flow until any user responds. |
| Post an Adaptive Card to a Teams channel and wait for a response [DEPRECATED] | Easily automate the process of sending a message to a Teams channel that contains actions to continue a waiting flow. |
| Post an Adaptive Card to a Teams user and wait for a response [DEPRECATED] | Easily automate the process of sending a message to a Teams user that contains actions to continue a waiting flow. |
| Post card in a chat or channel | Posts a card to a chat or a channel |
| Post message in a chat or channel | Posts a message to a chat or a channel |
| Post your own adaptive card as the Flow bot to a channel [DEPRECATED] | Add the JSON card definition to create a custom post for a Teams channel. The post can contain images, graphs, text, and more. |
| Post your own adaptive card as the Flow bot to a user [DEPRECATED] | Add the JSON card definition to create a custom message for a Teams user. The message can contain images, graphs, text, and more. |
| Remove a direct member from a channel | Removes a direct member from a channel in Microsoft Teams. The channel must be a private or shared channel. |
| Remove a member from a team | Removes a member from a team in Microsoft Teams |
| Remove an item from a section | Removes an item from a user-defined teamwork section. The underlying chat, channel, meeting, or community is not deleted; the item returns to its default system-defined section. |
| Reply with a message in a channel | Replies with a message to a channel's message |
| Reply with an adaptive card in a channel | Replies with an adaptive card to a channel's message |
| Send a Microsoft Graph HTTP request | Construct a Microsoft Graph REST API request to invoke against the Microsoft Teams endpoints. These segments are supported: 1st segment: /teams, /me, /users 2nd segment: channels, chats, installedApps, messages, pinnedMessages, onlineMeetings. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api) |
| Shifts: Approve a Swap Shifts request [DEPRECATED] | This action has been deprecated. Please use [Approve a Swap Shifts request](/en-us/connectors/Shifts/#approve-a-swap-shifts-request) instead.<br><br>~~This operation allows a user to approve a Swap Shifts request.~~ |
| Shifts: Approve a Time Off request [DEPRECATED] | This action has been deprecated. Please use [Approve a Time Off request](/en-us/connectors/Shifts/#approve-a-time-off-request) instead.<br><br>~~This operation allows managers to approve a time off request.~~ |
| Shifts: Approve an Offer Shift request [DEPRECATED] | This action has been deprecated. Please use [Approve an Offer Shift request](/en-us/connectors/Shifts/#approve-an-offer-shift-request) instead.<br><br>~~This operation allows recipients/managers to approve an offer shift request.~~ |
| Shifts: Approve an Open Shift request [DEPRECATED] | This action has been deprecated. Please use [Approve an Open Shift request](/en-us/connectors/Shifts/#approve-an-open-shift-request) instead.<br><br>~~This operation allows managers to approve an Open Shift request.~~ |
| Shifts: Create a new Open Shift [DEPRECATED] | This action has been deprecated. Please use [Create a new Open Shift](/en-us/connectors/Shifts/#create-a-new-open-shift) instead.<br><br>~~Create a new open shift in a schedule~~ |
| Shifts: Decline a Swap Shifts request [DEPRECATED] | This action has been deprecated. Please use [Decline a Swap Shifts request](/en-us/connectors/Shifts/#decline-a-swap-shifts-request) instead.<br><br>~~This operation allows users to decline a swap shifts request.~~ |
| Shifts: Decline a Time Off request [DEPRECATED] | This action has been deprecated. Please use [Decline a Time Off request](/en-us/connectors/Shifts/#decline-a-time-off-request) instead.<br><br>~~This operation allows managers to decline a time off request.~~ |
| Shifts: Decline an Offer Shift request [DEPRECATED] | This action has been deprecated. Please use [Decline an Offer Shift request](/en-us/connectors/Shifts/#decline-an-offer-shift-request) instead.<br><br>~~This operation allows users to decline an offer shift request.~~ |
| Shifts: Decline an Open Shift request [DEPRECATED] | This action has been deprecated. Please use [Decline an Open Shift request](/en-us/connectors/Shifts/#decline-an-open-shift-request) instead.<br><br>~~This operation allows managers to decline an open shift request.~~ |
| Shifts: Delete a shift [DEPRECATED] | This action has been deprecated. Please use [Delete a Shift](/en-us/connectors/Shifts/#delete-a-shift) instead.<br><br>~~This operation deletes a shift using the shift's unique ID.~~ |
| Shifts: Delete an open shift [DEPRECATED] | This action has been deprecated. Please use [Delete an Open Shift](/en-us/connectors/Shifts/#delete-an-open-shift) instead.<br><br>~~This operation deletes an open shift.~~ |
| Shifts: Get a schedule's details [DEPRECATED] | This action has been deprecated. Please use [Get a Schedule's details](/en-us/connectors/Shifts/#get-a-schedule%27s-details) instead.<br><br>~~This operation returns details of a schedule using the schedule's unique ID.~~ |
| Shifts: Get a scheduling group [DEPRECATED] | This action has been deprecated. Please use [Get a Scheduling Group](/en-us/connectors/Shifts/#get-a-scheduling-group) instead.<br><br>~~This operation returns details for a scheduling group using its unique ID.~~ |
| Shifts: Get a shift [DEPRECATED] | This action has been deprecated. Please use [Get a Shift](/en-us/connectors/Shifts/#get-a-shift) instead.<br><br>~~This operation returns details for a shift using the shift's unique ID.~~ |
| Shifts: Get an open shift [DEPRECATED] | This action has been deprecated. Please use [Get an Open Shift](/en-us/connectors/Shifts/#get-an-open-shift) instead.<br><br>~~This operation returns details for an open shift.~~ |
| Shifts: List all Offer Shift requests [DEPRECATED] | This action has been deprecated. Please use [List all Offer Shift requests in a team](/en-us/connectors/Shifts/#list-all-offer-shift-requests-in-a-team) instead.<br><br>~~This operation returns all offer shift requests in a schedule~~ |
| Shifts: List all Open Shift requests [DEPRECATED] | This action has been deprecated. Please use [List all Open Shift requests in a team](/en-us/connectors/Shifts/#list-all-open-shift-requests-in-a-team) instead.<br><br>~~This operation returns all open shift change requests in a schedule~~ |
| Shifts: List all Open Shifts [DEPRECATED] | This action has been deprecated. Please use [List all Open Shifts in a team](/en-us/connectors/Shifts/#list-all-open-shifts-in-a-team) instead.<br><br>~~This operation returns all open shifts in a team~~ |
| Shifts: List all scheduling groups [DEPRECATED] | This action has been deprecated. Please use [List all Scheduling Groups in a team](/en-us/connectors/Shifts/#list-all-scheduling-groups-in-a-team) instead.<br><br>~~This operation returns all scheduling groups in a schedule~~ |
| Shifts: List all shifts [DEPRECATED] | This action has been deprecated. Please use [List all Shifts in a team](/en-us/connectors/Shifts/#list-all-shifts-in-a-team) instead.<br><br>~~This operation returns all shifts assigned to members of a team~~ |
| Shifts: List all Swap Shifts requests [DEPRECATED] | This action has been deprecated. Please use [List all Swap Shifts requests in a team](/en-us/connectors/Shifts/#list-all-swap-shifts-requests-in-a-team) instead.<br><br>~~This operation returns all swap shifts requests in a schedule~~ |
| Shifts: List all Time Off reasons [DEPRECATED] | This action has been deprecated. Please use [List all Time Off Reasons in a team](/en-us/connectors/Shifts/#list-all-time-off-reasons-in-a-team) instead.<br><br>~~This operation returns the list of time off reasons associated with a team.~~ |
| Shifts: List all Time Off requests [DEPRECATED] | This action has been deprecated. Please use [List all Time Off requests in a team](/en-us/connectors/Shifts/#list-all-time-off-requests-in-a-team) instead.<br><br>~~This operation returns all time off requests in a schedule~~ |
| Shifts: Update an Open Shift [DEPRECATED] | This action has been deprecated. Please use [Update an Open Shift](/en-us/connectors/Shifts/#update-an-open-shift) instead.<br><br>~~Update an open shift in a schedule.~~ |
| Update a section | Updates a teamwork section for the current user |
| Update a team tag | Updates the display name of a tag in a team |
| Update an adaptive card in a chat or channel | Updates an existing adaptive card |

### Add a member to a channel

- Operation ID:
    - AddMemberToChannel

Adds a member to a channel in Microsoft Teams. The channel must be a private or shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| User | userId | True | string | User principal name or Microsoft Entra ID to add |
| Set user as channel owner | owner |  | boolean | True, if the user should be a channel owner |

### Add a member to a team

- Operation ID:
    - AddMemberToTeam

Adds a member to a team in Microsoft Teams

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| User | userId | True | string | User principal name or Microsoft Entra ID to add |
| Set user as team owner | owner |  | boolean | True, if the user should be a team owner |

### Add a member to a team tag

- Operation ID:
    - AddMemberToTag

Adds a user to a team tag

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |
| User's ID | userId | True | string | The user's ID of the member to add to the tag, must be in a format like '550e8400-e29b-41d4-a716-446655440000'. |

#### Returns

- Body
    - AddMemberToTagResponseSchema

### Add a user to a chat

- Operation ID:
    - AddMemberToChat

Adds a user to a chat in Microsoft Teams.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Conversation ID | chatId | True | string | The chat's unique identifier |
| User | userId | True | string | User principal name or Microsoft Entra ID to add |
| Set user as chat owner | owner |  | boolean | True, if the user should be a chat owner |
| Visible history start date time | visibleHistoryStartDateTime |  | date-time | Timestamp that represents how far back in the chat history the new member can see. If not specified, no history is shared. |

### Add an item to a section

- Operation ID:
    - AddSectionItem

Adds an item (chat, channel, meeting, or community) currently in a system-defined section to a user-defined teamwork section. Use Move Section Item to relocate items already in another user-defined section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |
| Item ID | id | True | string | The conversation ID of the chat, channel, meeting, or community to add to the section. For community items, the service automatically normalizes the ID to the 19:{id}@EngageCommunity format. |

#### Returns

An item (chat, channel, meeting, or community) within a teamwork section

- Body
    - SectionItemResponse

### Create a channel

- Operation ID:
    - CreateChannel

Create a new channel within a specified team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Description | description |  | string | Optional textual description for the channel |
| Name | displayName | True | string | Channel name as it appears in Microsoft Teams |
| Membership Type | membershipType |  | string | The type of channel. Private channels are accessible only to specific members. Shared channels can be shared with users outside the team. Defaults to standard. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Description | description | string | Optional textual description for the channel |
| Display Name | displayName | string | Channel name as it appears in Microsoft Teams |
| ID | id | string | The channel's unique identifier |
| Membership Type | membershipType | string | The type of channel membership |

### Create a chat

- Operation ID:
    - CreateChat

Creates a one on one or group chat

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Title | topic |  | string | Title, displayed only in group chats |
| Members to add | members | True | string | User's IDs, separated by semicolons |

#### Returns

Response for new chat that was created

- Body
    - NewChatResponse

### Create a section

- Operation ID:
    - CreateSection

Creates a new teamwork section for the current user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |
| Display Name | displayName | True | string | The display name of the section |
| Icon Type | iconType |  | string | Type of icon. Emoji Unicode character. |
| Is Expanded | isExpanded |  | boolean | Whether the section is expanded |
| Sort Type | sortType |  | string | The sort type for the section |

#### Returns

A teamwork section

- Body
    - SectionResponse

### Create a tag for a team

- Operation ID:
    - CreateTag

Creates a tag in a team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Display Name | displayName | True | string | The name of the tag as it appears to the user in Microsoft Teams. |
| Members' IDs | members | True | string | List of users' IDs separated by semi-colons, identifier must be in a format like '550e8400-e29b-41d4-a716-446655440000'. |

#### Returns

The created tag for a team

- Tag
    - CreateTagResponseSchema

### Create a team

- Operation ID:
    - CreateATeam

Creates a new team in Microsoft Teams

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team Name | displayName | True | string | The name of the team |
| Description | description | True | string | An optional description for the team |
| Visibility | visibility |  | string | The visibility of the the team |

#### Returns

- Body
    - CreateATeamResponse

### Create a Teams meeting

- Operation ID:
    - CreateTeamsMeeting

Create a meeting with a link at the bottom of the invite to join the meeting online on Microsoft Teams.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Calendar id | calendarid | True | string | Select a value |
| Subject | subject | True | string | The text of the event's subject line |
| Event message content | content | True | string | The content of the event |
| Time zone | timeZone | True | string | Time zone of the event |
| Start time | dateTime | True | date-no-tz | Start time of the event (example: '2017-08-29T04:00:00') |
| End time | dateTime | True | date-no-tz | End time of the event (example: '2017-08-29T05:00:00') |
| Required attendees | requiredAttendees |  | email | Required attendees for the event separated by semicolons |
| Optional attendees | optionalAttendees |  | email | Optional attendees for the event separated by semicolons |
| display name | displayName |  | string | The name associated with the location |
| Importance | importance |  | string | The importance of the event: low, normal or high |
| Recurrence pattern | type |  | string | Pattern for the recurrence. Required when meeting is a recurrence |
| Recurrence interval | interval |  | integer | The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required when meeting is a recurrence |
| Days of week | daysOfWeek |  | array of string | Comma separated days of weeks (example: 'Monday,Wednesday,Friday') |
| Week Index | index |  | string | Specifies on which day of the week the event occurs. Default is first |
| Recurrence start date | startDate |  | date | Start date of the recurrence, format YYYY-MM-DD. Required when meeting is a recurrence |
| Recurrence end date | endDate |  | date | End date of the recurrence, format YYYY-MM-DD |
| All day event | isAllDay |  | boolean | Set to true if the event lasts all day |
| Pre-event reminder time | reminderMinutesBeforeStart |  | integer | The number of minutes before the event start time that the reminder alert occurs |
| Enable reminders | isReminderOn |  | boolean | Set to true if an alert is set to remind the user of the event |
| Status show as | showAs |  | string | Status to show during the event |
| Request response | responseRequested |  | boolean | Set to true if the sender would like a response when the event is accepted |

#### Returns

Response for new meeting that was created

- Body
    - NewMeetingRespone

### Delete a member from a team tag

- Operation ID:
    - DeleteTagMember

Deletes a member from a team tag

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |
| Tag Member ID | tagMemberId | True | string | ID of the member to remove from the tag |

### Delete a section

- Operation ID:
    - DeleteSection

Deletes a teamwork section for the current user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |

### Delete a team tag

- Operation ID:
    - DeleteTag

Deletes a tag from a team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |

### Get a section

- Operation ID:
    - GetSection

Gets a specific teamwork section by ID

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |

#### Returns

A teamwork section

- Body
    - SectionResponse

### Get a team

- Operation ID:
    - GetTeam

Gets the details for a team in Microsoft Teams.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |

#### Returns

Get team response

- Body
    - GetTeamResponse

### Get a team tag

- Operation ID:
    - GetTag

Gets a specific tag by ID from a team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |

#### Returns

The created tag for a team

- Tag
    - CreateTagResponseSchema

### Get AI insight

- Operation ID:
    - GetAiInsight

Gets a specific AI-generated insight for an online meeting. Requires Microsoft 365 Copilot license.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |
| AI Insight ID | aiInsightId | True | string | The AI insight ID |

#### Returns

An AI-generated insight for an online meeting

- Body
    - AiInsightResponse

### Get all ad-hoc call recordings

- Operation ID:
    - GetAllAdhocCallRecordings

Gets all recordings from ad-hoc calls for the signed-in user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date Time | startDateTime |  | date-time | The start date and time to filter recordings |
| End Date Time | endDateTime |  | date-time | The end date and time to filter recordings |
| Top | $top |  | integer | The number of recordings to return |
| Skip Token | $skiptoken |  | string | The skip token for pagination |
| Delta Token | $deltatoken |  | string | The delta token for tracking changes |

#### Returns

- Body
    - CallRecordingCollectionResponse

### Get all ad-hoc call transcripts

- Operation ID:
    - GetAllAdhocCallTranscripts

Gets all transcripts from ad-hoc calls for the signed-in user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date Time | startDateTime |  | date-time | The start date and time to filter transcripts |
| End Date Time | endDateTime |  | date-time | The end date and time to filter transcripts |
| Top | $top |  | integer | The number of transcripts to return |
| Skip Token | $skiptoken |  | string | The skip token for pagination |
| Delta Token | $deltatoken |  | string | The delta token for tracking changes |

#### Returns

- Body
    - CallTranscriptCollectionResponse

### Get an @mention token for a team tag

- Operation ID:
    - AtMentionTag

Creates a token that can be inserted into a message or adaptive card sent as a user in a channel to @mention a team tag.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |

#### Returns

@mention token for a tag

- Body
    - AtMentionTagResponse

### Get an @mention token for a user

- Operation ID:
    - AtMentionUser

Creates a token that can be inserted into a message or adaptive card to @mention a user.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User | userId | True | string | Specify a user principal or user ID to @mention |

#### Returns

@mention Token

- Body
    - AtMentionUser_V1

### Get an online meeting

- Operation ID:
    - GetOnlineMeeting

Retrieves the properties and relationships of an online meeting. You can look up a meeting by meeting ID, join web URL, or join meeting ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Lookup by | lookupType | True | string | Select how to identify the meeting |
| Lookup value | lookupValue | True | string | The value corresponding to the selected lookup type (meeting ID, join web URL, or join meeting ID) |

#### Returns

- Body
    - GetOnlineMeeting_Response

### Get call recording

- Operation ID:
    - GetCallRecording

Gets a specific recording for an ad-hoc call

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |
| Recording ID | recordingId | True | string | The recording ID |

#### Returns

A call recording

- Body
    - CallRecordingResponse

### Get call recording content

- Operation ID:
    - GetCallRecordingContent

Gets the content of a call recording

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |
| Recording ID | recordingId | True | string | The recording ID |

#### Returns

- response
    - file

### Get call transcript

- Operation ID:
    - GetCallTranscript

Gets a specific transcript for an ad-hoc call

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |
| Transcript ID | transcriptId | True | string | The transcript ID |

#### Returns

A call transcript

- Body
    - CallTranscriptResponse

### Get call transcript content

- Operation ID:
    - GetCallTranscriptContent

Gets the content of a call transcript

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |
| Transcript ID | transcriptId | True | string | The transcript ID |

#### Returns

- response
    - string

### Get details for a specific channel in a team

- Operation ID:
    - GetChannel

Get the channel details

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |

#### Returns

Get team channel details response

- Body
    - GetChannelResponse

### Get meeting recording

- Operation ID:
    - GetMeetingRecording

Gets a specific recording for an online meeting

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |
| Recording ID | recordingId | True | string | The recording ID |

#### Returns

A call recording

- Body
    - CallRecordingResponse

### Get meeting recording content

- Operation ID:
    - GetMeetingRecordingContent

Gets the content stream of a meeting recording

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |
| Recording ID | recordingId | True | string | The recording ID |

#### Returns

- response
    - file

### Get meeting transcript

- Operation ID:
    - GetMeetingTranscript

Gets a specific transcript for an online meeting

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |
| Transcript ID | transcriptId | True | string | The transcript ID |

#### Returns

A call transcript

- Body
    - CallTranscriptResponse

### Get meeting transcript content

- Operation ID:
    - GetMeetingTranscriptContent

Gets the content of a meeting transcript

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |
| Transcript ID | transcriptId | True | string | The transcript ID |

#### Returns

- response
    - string

### Get message details

- Operation ID:
    - GetMessageDetails

Gets the details of a message in a chat or a channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message | messageId | True | string | Message ID |
| Message type | threadType | True | string | Choose message type |
| Get message details request | body | True | dynamic | The get message details request |

#### Returns

 The outputs of this operation are dynamic. 

### Get messages in a channel

- Operation ID:
    - GetMessagesFromChannel

Gets messages from a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |

#### Returns

- Body
    - GetMessagesFromConversation_Response

### Get messages in a chat

- Operation ID:
    - GetMessagesFromChat

Retrieves messages from a one on one or group chat

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Conversation ID | chatId | True | string | The chat's unique identifier |
| Filter Query | $filter |  | string | An OData filter query to restrict the entries returned (e.g. membershipType eq 'standard'). |
| Order By | $orderby |  | string | An OData orderBy query option for specifying the order of entries (e.g., displayName asc). |
| Top | $top |  | string | An OData top query option for specifying the maximum number of entries returned. |

#### Returns

- Body
    - GetMessagesFromConversation_Response

### List AI insights

- Operation ID:
    - ListAiInsights

Lists AI-generated insights for an online meeting. Requires Microsoft 365 Copilot license.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |

#### Returns

- Body
    - AiInsightCollectionResponse

### List all channels

- Operation ID:
    - GetAllChannelsForTeam

Lists all the channels for a specific team, including channels that are shared with the team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Filter Query | $filter |  | string | An OData filter query to restrict the entries returned (e.g. membershipType eq 'standard'). |
| Order By | $orderby |  | string | An OData orderBy query option for specifying the order of entries (e.g., displayName asc). |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Channel List | value | array of ChannelWithOwnerTeamId | List of one or more channels for a specific team |

### List all tags for a team

- Operation ID:
    - GetTags

Lists the team's tags

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |

#### Returns

- Body
    - GetTagsResponseSchema

### List associated teams

- Operation ID:
    - GetAllAssociatedTeams

Lists all the teams you are a direct member of, or are a member of a shared channel that is hosted inside the team.

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Teams List | value | array of AssociatedTeamInfo | List of the teams you are associated with |

### List call recordings

- Operation ID:
    - ListCallRecordings

Lists all recordings for an ad-hoc call

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |

#### Returns

- Body
    - CallRecordingCollectionResponse

### List call transcripts

- Operation ID:
    - ListCallTranscripts

Lists all transcripts for an ad-hoc call

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Call ID | callId | True | string | The call ID |

#### Returns

- Body
    - CallTranscriptCollectionResponse

### List channels

- Operation ID:
    - GetChannelsForGroup

Lists all the channels for a specific team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Filter Query | $filter |  | string | An OData filter query to restrict the entries returned (e.g. membershipType eq 'standard'). |
| Order By | $orderby |  | string | An OData orderBy query option for specifying the order of entries (e.g., displayName asc). |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Channel List | value | array of GetChannelResponse | List of one or more channels for a specific team |

### List chat or channel members

- Operation ID:
    - ListMembers

List direct members of a group chat or a channel

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Thread type | threadType | True | string | Choose message type |
| Filter Query | $filter |  | string | An OData filter query to restrict the entries returned (e.g. membershipType eq 'standard'). |
| List members request | body | True | dynamic | The list members request |

#### Returns

List members response schema

- Body
    - ListMembersResponseSchema

### List chats

- Operation ID:
    - GetChats

Lists recent chats you are a part of

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Chat Types | chatType | True | string | Filter by type |
| Topic | topic | True | string | Filter by whether or not the topic name is defined |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Chats List | value | array of object | List of one or more chats you are a part of |
| Topic | value.topic | string | Subject or topic for the chat. Only available for group chats |
| Created Date Time | value.createdDateTime | date-time | Date and time when the chat was created |
| Last Updated Date Time | value.lastUpdatedDateTime | date-time | Date and time of when the chat was last renamed or its member list was last updated |
| Conversation ID | value.id | string | The chat's unique identifier |

### List joined teams

- Operation ID:
    - GetAllTeams

Lists all the teams in Microsoft Teams that you are a member of

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Teams List | value | array of object | List of the teams you are a member of |
| Description | value.description | string | An optional description for the team |
| Name | value.displayName | string | The name of the team |
| ID | value.id | string | The team's unique identifier, also called an Microsoft 365 Group ID |

### List meeting recordings

- Operation ID:
    - ListMeetingRecordings

Lists all recordings for an online meeting

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |

#### Returns

- Body
    - CallRecordingCollectionResponse

### List meeting transcripts

- Operation ID:
    - ListMeetingTranscripts

Lists all transcripts for an online meeting

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Meeting ID | meetingId | True | string | The online meeting ID |

#### Returns

- Body
    - CallTranscriptCollectionResponse

### List replies of a channel message

- Operation ID:
    - ListRepliesToMessage

List replies to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Message | messageId | True | string | Message ID |
| Latest replies count | $top |  | integer | The number of latest replies to return. The default value is 20. The supported value is between 1 and 50. |

#### Returns

List replies response schema

- Body
    - ListRepliesResponseSchema

### List section items

- Operation ID:
    - ListSectionItems

Lists the items (chats, channels, meetings, communities) in a teamwork section. Each item belongs to exactly one section at a time.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |

#### Returns

- Body
    - ListSectionItemsResponse

### List sections

- Operation ID:
    - ListSections

Lists the current user's teamwork sections

#### Returns

- Body
    - ListSectionsResponse

### List team members

- Operation ID:
    - ListTeamMembers

Lists the members of a team in Microsoft Teams

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Filter Query | $filter |  | string | An OData filter query to restrict the entries returned (e.g. membershipType eq 'standard'). |
| Top | $top |  | string | An OData top query option for specifying the maximum number of entries returned. |

#### Returns

List members response schema

- Body
    - ListMembersResponseSchema

### List the members of a team tag

- Operation ID:
    - GetTagMembers

Lists the members of a team tag

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |

#### Returns

- Body
    - GetTagMembersResponseSchema

### Move a section item

- Operation ID:
    - MoveSectionItem

Atomically moves an item from one user-defined teamwork section to another user-defined section. Each item can belong to only one section at a time. This action removes the item from its current section and adds it to the target section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |
| Section Item ID | sectionItemId | True | string | The section item ID (the conversation ID of the underlying chat, channel, meeting, or community) |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |
| Target Section ID | targetSectionId | True | string | The ID of the section to move the item to |

#### Returns

An item (chat, channel, meeting, or community) within a teamwork section

- Body
    - SectionItemResponse

### Post a choice of options as the Flow bot to a user

- Operation ID:
    - SubscribeUserMessageWithOptions

Send a set of options to a Microsoft Teams user, that they must respond to before the flow will continue. This action will pause the flow until the user response to the options

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User message with options subscription request | UserMessageWithOptionsSubscriptionRequest | True | dynamic | The user message with options subscription request |

#### Returns

 The outputs of this operation are dynamic. 

### Post a feed notification

- Operation ID:
    - PostFeedNotification

Posts a notification to a user's activity feed linking to a chat or team.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Notification type | notificationType | True | string | Choose notification type |
| Post feed notification request | body | True | dynamic | The post feed notification request |

### Post a message (V2) [DEPRECATED]

- Operation ID:
    - PostMessageToChannelV2

Post a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Subject | subject |  | string | Subject of the message. |
| Message | content | True | string | Body of the message. |
| Type | contentType | True | string | Content type: html or text. |

### Post a message (V3) [DEPRECATED]

- Operation ID:
    - PostMessageToChannelV3

Posts a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Subject | subject |  | string | Subject of the message. |
| Message | content | True | html | Body of the message. |

#### Returns

- Body
    - MessageId

### Post a message [DEPRECATED]

- Operation ID:
    - PostMessageToChannel

Posts a message to a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Message | content | True | html | Body of the message. |

### Post a message as the Flow bot to a channel [DEPRECATED]

- Operation ID:
    - PostChannelNotification

Easily automate the process of posting a message to a Teams channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Post notification request | PostNotificationRequest | True | dynamic | The post notification request |

### Post a message as the Flow bot to a user [DEPRECATED]

- Operation ID:
    - PostUserNotification

Easily automate the process of sending a message to someone in Teams.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post notification request | PostNotificationRequest | True | dynamic | The post notification request |

### Post a message to myself

- Operation ID:
    - PostMessageToSelf

Sends a message to the signed-in user's own Notes chat in Microsoft Teams.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Content type | contentType |  | string | The type of the message content |
| Content | content | True | string | The text or HTML content of the message |

#### Returns

A message in a channel, one on one chat, or group chat

- Message
    - ChatMessage

### Post a reply to a message (V2) [DEPRECATED]

- Operation ID:
    - PostReplyToMessageV2

Posts a reply to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Message | messageId | True | string | Message ID |
| Subject | subject |  | string | Subject of the message. |
| Reply | content | True | html | Body of the message. |

### Post a reply to a message [DEPRECATED]

- Operation ID:
    - PostReplyToMessage

Posts a reply to a message in a channel in a specific team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Message | messageId | True | string | Message ID |
| Subject | subject |  | string | Subject of the message. |
| Reply | content | True | string | Body of the message. |
| Type | contentType | True | string | Content type: html or text. |

### Post adaptive card and wait for a response

- Operation ID:
    - PostCardAndWaitForResponse

Posts an adaptive card to a chat or a channel and waits for a response from any user. This will pause the flow until any user responds.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Flow continuation subscription request | body | True | dynamic | The flow continuation subscription request |

#### Returns

 The outputs of this operation are dynamic. 

### Post an Adaptive Card to a Teams channel and wait for a response [DEPRECATED]

- Operation ID:
    - SubscribeChannelFlowContinuation

Easily automate the process of sending a message to a Teams channel that contains actions to continue a waiting flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Update message | updateMessage |  | string | Message to be included in an update to the original card following response |
| Should update card | shouldUpdateCard |  | boolean | Whether or not to update the card following response |
| Channel | channelId | True | string | Add channel ID |
| Message | messageBody | True | string |  |

#### Returns

 The outputs of this operation are dynamic. 

### Post an Adaptive Card to a Teams user and wait for a response [DEPRECATED]

- Operation ID:
    - SubscribeUserFlowContinuation

Easily automate the process of sending a message to a Teams user that contains actions to continue a waiting flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Update message | updateMessage |  | string | Message to be included in an update to the original card following response |
| Should update card | shouldUpdateCard |  | boolean | Whether or not to update the card following response |
| Recipient | to | True | string | Add an email address |
| Summary | summary |  | string | The message summary |
| IsAlert | isAlert |  | boolean | If the message will be shown in the activity feed |
| Message | messageBody | True | string |  |

#### Returns

 The outputs of this operation are dynamic. 

### Post card in a chat or channel

- Operation ID:
    - PostCardToConversation

Posts a card to a chat or a channel

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Post card request | body | True | dynamic | The post card request |

#### Returns

- Body
    - PostToConversationResponse

### Post message in a chat or channel

- Operation ID:
    - PostMessageToConversation

Posts a message to a chat or a channel

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Post message request | body | True | dynamic | The post message request |

#### Returns

- Body
    - PostToConversationResponse

### Post your own adaptive card as the Flow bot to a channel [DEPRECATED]

- Operation ID:
    - PostChannelAdaptiveCard

Add the JSON card definition to create a custom post for a Teams channel. The post can contain images, graphs, text, and more.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Post adaptive card request | PostAdaptiveCardRequest | True | dynamic | The post adaptive card request |

#### Returns

- Body
    - MessageId

### Post your own adaptive card as the Flow bot to a user [DEPRECATED]

- Operation ID:
    - PostUserAdaptiveCard

Add the JSON card definition to create a custom message for a Teams user. The message can contain images, graphs, text, and more.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post adaptive card request | PostAdaptiveCardRequest | True | dynamic | The post adaptive card request |

#### Returns

- Body
    - MessageId

### Remove a direct member from a channel

- Operation ID:
    - RemoveMemberFromChannel

Removes a direct member from a channel in Microsoft Teams. The channel must be a private or shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |
| Membership ID | membershipId | True | string | The membership ID of the direct member to remove from the channel |

### Remove a member from a team

- Operation ID:
    - RemoveMemberFromTeam

Removes a member from a team in Microsoft Teams

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Membership ID | membershipId | True | string | The membership ID of the member to remove from the team |

### Remove an item from a section

- Operation ID:
    - RemoveSectionItem

Removes an item from a user-defined teamwork section. The underlying chat, channel, meeting, or community is not deleted; the item returns to its default system-defined section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |
| Section Item ID | sectionItemId | True | string | The section item ID (the conversation ID of the underlying chat, channel, meeting, or community) |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |

### Reply with a message in a channel

- Operation ID:
    - ReplyWithMessageToConversation

Replies with a message to a channel's message

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Reply message request | body | True | dynamic | The reply message request |

#### Returns

- Body
    - PostToConversationResponse

### Reply with an adaptive card in a channel

- Operation ID:
    - ReplyWithCardToConversation

Replies with an adaptive card to a channel's message

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Reply adaptive card request | body | True | dynamic | The reply adaptive card request |

#### Returns

- Body
    - PostToConversationResponse

### Send a Microsoft Graph HTTP request

- Operation ID:
    - HttpRequest

Construct a Microsoft Graph REST API request to invoke against the Microsoft Teams endpoints. These segments are supported: 1st segment: /teams, /me, /users 2nd segment: channels, chats, installedApps, messages, pinnedMessages, onlineMeetings. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| URI | Uri | True | string | The full or relative URI. Example: `https://graph.microsoft.com/{version}/{resource}` |
| Method | Method | True | string | The HTTP method (default is GET) |
| Body | Body |  | binary | The request body content |
| Content-Type | ContentType |  | string | The content-type header for the body (default is application/json) |
| CustomHeader1 | CustomHeader1 |  | string | Custom header 1. Specify in format: header-name: header-value |
| CustomHeader2 | CustomHeader2 |  | string | Custom header 2. Specify in format: header-name: header-value |
| CustomHeader3 | CustomHeader3 |  | string | Custom header 3. Specify in format: header-name: header-value |
| CustomHeader4 | CustomHeader4 |  | string | Custom header 4. Specify in format: header-name: header-value |
| CustomHeader5 | CustomHeader5 |  | string | Custom header 5. Specify in format: header-name: header-value |

#### Returns

- response
    - ObjectWithoutType

### Shifts: Approve a Swap Shifts request [DEPRECATED]

- Operation ID:
    - SwapShiftsChangeRequestApprove

This action has been deprecated. Please use [Approve a Swap Shifts request](/en-us/connectors/Shifts/#approve-a-swap-shifts-request) instead.

~~This operation allows a user to approve a Swap Shifts request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Swap Shifts Change Request ID | swapShiftsChangeRequestId | True | string | The unique ID of the request |
| Message From Recipient/Manager | message |  | string | A message when a request is accepted. |

#### Returns

### Shifts: Approve a Time Off request [DEPRECATED]

- Operation ID:
    - TimeOffRequestApprove

This action has been deprecated. Please use [Approve a Time Off request](/en-us/connectors/Shifts/#approve-a-time-off-request) instead.

~~This operation allows managers to approve a time off request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Time Off Request ID | timeOffRequestId | True | string | The unique ID of the time off request |
| Message From Manager | message |  | string | A message from the manager to the sender/recipient when a request is accepted. |

#### Returns

### Shifts: Approve an Offer Shift request [DEPRECATED]

- Operation ID:
    - OfferShiftRequestApprove

This action has been deprecated. Please use [Approve an Offer Shift request](/en-us/connectors/Shifts/#approve-an-offer-shift-request) instead.

~~This operation allows recipients/managers to approve an offer shift request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Offer Shift Request ID | offerShiftRequestId | True | string | The unique ID of the offer shift request |
| Message From Recipient/Manager | message |  | string | A message when a request is accepted. |

#### Returns

### Shifts: Approve an Open Shift request [DEPRECATED]

- Operation ID:
    - OpenShiftChangeRequestApprove

This action has been deprecated. Please use [Approve an Open Shift request](/en-us/connectors/Shifts/#approve-an-open-shift-request) instead.

~~This operation allows managers to approve an Open Shift request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Open Shift Change Request ID | openShiftChangeRequestId | True | string | The unique ID of the request |
| Message From Manager | message |  | string | A message from the manager to the sender/recipient when a request is accepted. |

#### Returns

### Shifts: Create a new Open Shift [DEPRECATED]

- Operation ID:
    - CreateOpenShift

This action has been deprecated. Please use [Create a new Open Shift](/en-us/connectors/Shifts/#create-a-new-open-shift) instead.

~~Create a new open shift in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Scheduling Group ID | schedulingGroupId |  | string | Scheduling Group ID |
| Display Name | displayName |  | string | Display Name |
| Notes | notes |  | string | Notes |
| From Start Time | startDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme |  | string | Theme |
| Open Slot Count | openSlotCount | True | integer | Open Slot Count |
| Is Paid | isPaid |  | boolean | Is Paid |
| From Start Time | startDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Code | code |  | string | Code |
| Display Name | displayName |  | string | Display Name |

#### Returns

Open Shift Entity

- Open Shift
    - OpenShiftResponse

### Shifts: Decline a Swap Shifts request [DEPRECATED]

- Operation ID:
    - SwapShiftsChangeRequestDecline

This action has been deprecated. Please use [Decline a Swap Shifts request](/en-us/connectors/Shifts/#decline-a-swap-shifts-request) instead.

~~This operation allows users to decline a swap shifts request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Swap Shifts Change Request ID | swapShiftsChangeRequestId | True | string | The unique ID of the request |
| Message From Recipient/Manager | message |  | string | A message when a request is declined. |

#### Returns

### Shifts: Decline a Time Off request [DEPRECATED]

- Operation ID:
    - TimeOffRequestDecline

This action has been deprecated. Please use [Decline a Time Off request](/en-us/connectors/Shifts/#decline-a-time-off-request) instead.

~~This operation allows managers to decline a time off request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Time Off Request ID | timeOffRequestId | True | string | The unique ID of the time off request |
| Message From Manager | message |  | string | A message from the manager to the sender/recipient when a request is declined. |

#### Returns

### Shifts: Decline an Offer Shift request [DEPRECATED]

- Operation ID:
    - OfferShiftRequestDecline

This action has been deprecated. Please use [Decline an Offer Shift request](/en-us/connectors/Shifts/#decline-an-offer-shift-request) instead.

~~This operation allows users to decline an offer shift request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Offer Shift Request ID | offerShiftRequestId | True | string | The unique ID of the offer shift request |
| Message From Recipient/Manager | message |  | string | A message when a request is declined. |

#### Returns

### Shifts: Decline an Open Shift request [DEPRECATED]

- Operation ID:
    - OpenShiftChangeRequestDecline

This action has been deprecated. Please use [Decline an Open Shift request](/en-us/connectors/Shifts/#decline-an-open-shift-request) instead.

~~This operation allows managers to decline an open shift request.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Open Shift Change Request ID | openShiftChangeRequestId | True | string | The unique ID of the request |
| Message From Manager | message |  | string | A message from the manager to the sender/recipient when a request is declined. |

#### Returns

### Shifts: Delete a shift [DEPRECATED]

- Operation ID:
    - DeleteShift

This action has been deprecated. Please use [Delete a Shift](/en-us/connectors/Shifts/#delete-a-shift) instead.

~~This operation deletes a shift using the shift's unique ID.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Shift ID | shiftId | True | string | The unique ID of the shift. |

### Shifts: Delete an open shift [DEPRECATED]

- Operation ID:
    - DeleteOpenShift

This action has been deprecated. Please use [Delete an Open Shift](/en-us/connectors/Shifts/#delete-an-open-shift) instead.

~~This operation deletes an open shift.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Open Shift ID | openShiftId | True | string | The unique ID of the open shift. |

### Shifts: Get a schedule's details [DEPRECATED]

- Operation ID:
    - GetSchedule

This action has been deprecated. Please use [Get a Schedule's details](/en-us/connectors/Shifts/#get-a-schedule%27s-details) instead.

~~This operation returns details of a schedule using the schedule's unique ID.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |

#### Returns

Schedule Entity

- Body
    - ScheduleResponse

### Shifts: Get a scheduling group [DEPRECATED]

- Operation ID:
    - GetSchedulingGroup

This action has been deprecated. Please use [Get a Scheduling Group](/en-us/connectors/Shifts/#get-a-scheduling-group) instead.

~~This operation returns details for a scheduling group using its unique ID.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Scheduling Group ID | schedulingGroupId | True | string | The unique ID of the Scheduling Group. |

#### Returns

Scheduling Group Entity

- Scheduling Group
    - SchedulingGroupResponse

### Shifts: Get a shift [DEPRECATED]

- Operation ID:
    - GetShift

This action has been deprecated. Please use [Get a Shift](/en-us/connectors/Shifts/#get-a-shift) instead.

~~This operation returns details for a shift using the shift's unique ID.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Shift ID | shiftId | True | string | The unique ID of the shift. |

#### Returns

Shift Entity

- Shift
    - ShiftResponse

### Shifts: Get an open shift [DEPRECATED]

- Operation ID:
    - GetOpenShift

This action has been deprecated. Please use [Get an Open Shift](/en-us/connectors/Shifts/#get-an-open-shift) instead.

~~This operation returns details for an open shift.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Open Shift ID | openShiftId | True | string | The unique ID of the open shift. |

#### Returns

Open Shift Entity

- Open Shift
    - OpenShiftResponse

### Shifts: List all Offer Shift requests [DEPRECATED]

- Operation ID:
    - ListOfferShiftRequests

This action has been deprecated. Please use [List all Offer Shift requests in a team](/en-us/connectors/Shifts/#list-all-offer-shift-requests-in-a-team) instead.

~~This operation returns all offer shift requests in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of requests to retrieve |
| Request State | state |  | string | Request state filter |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Offer Shift Requests List | value | array of OfferShiftRequestResponse | List of Offer Shift requests in the schedule |

### Shifts: List all Open Shift requests [DEPRECATED]

- Operation ID:
    - ListOpenShiftChangeRequests

This action has been deprecated. Please use [List all Open Shift requests in a team](/en-us/connectors/Shifts/#list-all-open-shift-requests-in-a-team) instead.

~~This operation returns all open shift change requests in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of requests to retrieve |
| Request State | state |  | string | Request state filter |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Open Shift Change Requests List | value | array of OpenShiftChangeRequestResponse | List of Open Shift Change Requests in the schedule |

### Shifts: List all Open Shifts [DEPRECATED]

- Operation ID:
    - ListOpenShifts

This action has been deprecated. Please use [List all Open Shifts in a team](/en-us/connectors/Shifts/#list-all-open-shifts-in-a-team) instead.

~~This operation returns all open shifts in a team~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| From Start Time | startTime |  | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endTime |  | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Top Count | $top |  | integer | Total number of open shifts to retrieve |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Open Shifts List | value | array of OpenShiftResponse | List of open shifts in the schedule |

### Shifts: List all scheduling groups [DEPRECATED]

- Operation ID:
    - ListSchedulingGroups

This action has been deprecated. Please use [List all Scheduling Groups in a team](/en-us/connectors/Shifts/#list-all-scheduling-groups-in-a-team) instead.

~~This operation returns all scheduling groups in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of entries to retrieve |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Scheduling Groups List | value | array of SchedulingGroupResponse | List of schedule groups in the schedule |

### Shifts: List all shifts [DEPRECATED]

- Operation ID:
    - ListShifts

This action has been deprecated. Please use [List all Shifts in a team](/en-us/connectors/Shifts/#list-all-shifts-in-a-team) instead.

~~This operation returns all shifts assigned to members of a team~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| From Start Time | startTime |  | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endTime |  | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Top Count | $top |  | integer | Total number of shifts to retrieve |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Shifts List | value | array of ShiftResponse | List of shifts in the schedule |

### Shifts: List all Swap Shifts requests [DEPRECATED]

- Operation ID:
    - ListSwapShiftsChangeRequests

This action has been deprecated. Please use [List all Swap Shifts requests in a team](/en-us/connectors/Shifts/#list-all-swap-shifts-requests-in-a-team) instead.

~~This operation returns all swap shifts requests in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of requests to retrieve |
| Request State | state |  | string | Request state filter |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Swap Shifts Change Requests List | value | array of SwapShiftsChangeRequestResponse | List of Swap Shifts Change Requests in the schedule |

### Shifts: List all Time Off reasons [DEPRECATED]

- Operation ID:
    - ListTimeOffReasons

This action has been deprecated. Please use [List all Time Off Reasons in a team](/en-us/connectors/Shifts/#list-all-time-off-reasons-in-a-team) instead.

~~This operation returns the list of time off reasons associated with a team.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of Time Off reasons to retrieve |

#### Returns

The list of Time Off Reasons.

- List of time off reasons associated with a team
    - GetTimeOffReasonsResponse

### Shifts: List all Time Off requests [DEPRECATED]

- Operation ID:
    - ListTimeOffRequests

This action has been deprecated. Please use [List all Time Off requests in a team](/en-us/connectors/Shifts/#list-all-time-off-requests-in-a-team) instead.

~~This operation returns all time off requests in a schedule~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Top Count | $top |  | integer | Total number of requests to retrieve |
| Request State | state |  | string | Request state filter |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| TimeOff Requests List | value | array of TimeOffRequestResponse | List of Time Off requests in the schedule |

### Shifts: Update an Open Shift [DEPRECATED]

- Operation ID:
    - UpdateOpenShift

This action has been deprecated. Please use [Update an Open Shift](/en-us/connectors/Shifts/#update-an-open-shift) instead.

~~Update an open shift in a schedule.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | teamId | True | string | Select team |
| Open Shift ID | openShiftId | True | string | The unique ID of the open shift. |
| Scheduling Group ID | schedulingGroupId |  | string | Scheduling Group ID |
| Display Name | displayName |  | string | Display Name |
| Notes | notes |  | string | Notes |
| From Start Time | startDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme |  | string | Theme |
| Open Slot Count | openSlotCount | True | integer | Open Slot Count |
| Is Paid | isPaid |  | boolean | Is Paid |
| From Start Time | startDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | True | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Code | code |  | string | Code |
| Display Name | displayName |  | string | Display Name |

#### Returns

Open Shift Entity

- Open Shift
    - OpenShiftResponse

### Update a section

- Operation ID:
    - UpdateSection

Updates a teamwork section for the current user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Section ID | sectionId | True | string | The section ID |
| ETag | If-Match | True | string | The value of the @microsoft.graph.sectionsVersion annotation returned when you list sections, or the @odata.etag value from any previously retrieved section. Required for optimistic concurrency control. |
| Display Name | displayName |  | string | The display name of the section |
| Icon Type | iconType |  | string | Type of icon. Emoji Unicode character. |
| Is Expanded | isExpanded |  | boolean | Whether the section is expanded |
| Sort Type | sortType |  | string | The sort type for the section |

#### Returns

A teamwork section

- Body
    - SectionResponse

### Update a team tag

- Operation ID:
    - UpdateTag

Updates the display name of a tag in a team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Tag | tagId | True | string | Select tag |
| Display Name | displayName | True | string | The new name of the tag as it appears to the user in Microsoft Teams. |

#### Returns

The created tag for a team

- Tag
    - CreateTagResponseSchema

### Update an adaptive card in a chat or channel

- Operation ID:
    - UpdateCardInConversation

Updates an existing adaptive card

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Post as | poster | True | string | Select an option |
| Post in | location | True | string | Select an option |
| Update adaptive card request | body | True | dynamic | The update adaptive card request |

## Triggers

| For a selected message (V2) | This trigger allows you to start a flow for a selected message in Microsoft Teams. (Available only for Power Automate.) |
| --- | --- |
| From the compose box (V2) | This trigger allows you to start a flow from the compose message box in Microsoft Teams. (Available only for Power Automate.) |
| When a new channel message is added | Triggers when a new message is posted to a channel in a team. Note that this trigger only fires when a root messages is added in the channel. Replies to an existing channel message will not result in the trigger event firing. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| When a new chat message is added | Triggers when a new message is posted in any chat the user is a part of. |
| When a new message is added to a chat or channel | Triggers when a new message is posted in a specified chat or channel. Does not trigger if a message is edited. |
| When a new team member is added | Triggers when a member is added to the given team |
| When a new team member is removed | Triggers when a member is removed from the specified team |
| When a recording is available | Triggers when a recording becomes available for a meeting or ad-hoc call. |
| When a transcript is available | Triggers when a transcript becomes available for a meeting or ad-hoc call. |
| When I'm @mentioned | Triggers when a new message that @mentions the current user is added to a specified chat or channel. |
| When I am mentioned in a channel message | Triggers when a new message that @mentions the current user is added to a channel in a team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel. |
| When keywords are mentioned | Triggers when a keyword is mentioned in a specified chat or channel. Does not trigger if a message is edited. |
| When someone reacted to a message in chat | Triggers when someone reacts to a message in a specified chat or channel. |
| When someone responds to an adaptive card | This trigger allows you to handle responses for an adaptive card posted in Microsoft Teams. (Available only for Power Automate.) |

### For a selected message (V2)

- Operation ID:
    - OnMessageSelectedV2

This trigger allows you to start a flow for a selected message in Microsoft Teams. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| schema | schema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| body | body | object |  |

### From the compose box (V2)

- Operation ID:
    - OnComposeMessageV2

This trigger allows you to start a flow from the compose message box in Microsoft Teams. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| schema | schema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| body | body | object |  |

### When a new channel message is added

- Operation ID:
    - OnNewChannelMessage

Triggers when a new message is posted to a channel in a team. Note that this trigger only fires when a root messages is added in the channel. Replies to an existing channel message will not result in the trigger event firing. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |

#### Returns

A message in a channel, one on one chat, or group chat

- Message
    - ChatMessage

### When a new chat message is added

- Operation ID:
    - WebhookChatMessageTrigger

Triggers when a new message is posted in any chat the user is a part of.

#### Returns

Message details

- Body
    - ChatMessageWebhookResponseSchema

### When a new message is added to a chat or channel

- Operation ID:
    - WebhookNewMessageTrigger

Triggers when a new message is posted in a specified chat or channel. Does not trigger if a message is edited.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message type | threadType | True | string | Choose message type |
| requestBody | requestBody |  | dynamic | This is the request body of the Webhook |

#### Returns

 The outputs of this operation are dynamic. 

### When a new team member is added

- Operation ID:
    - OnGroupMembershipAdd

Triggers when a member is added to the given team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| User ID | id | string | Unique id of the user |

### When a new team member is removed

- Operation ID:
    - OnGroupMembershipRemoval

Triggers when a member is removed from the specified team

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| User ID | id | string | Unique id of the user |

### When a recording is available

- Operation ID:
    - RecordingTrigger

Triggers when a recording becomes available for a meeting or ad-hoc call.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Scope | scopeType | True | string | The scope of recordings to monitor |
| body | body | True | dynamic |  |

#### Returns

Recording details

- Body
    - RecordingWebhookResponseSchema

### When a transcript is available

- Operation ID:
    - TranscriptTrigger

Triggers when a transcript becomes available for a meeting or ad-hoc call.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Scope | scopeType | True | string | The scope of transcripts to monitor |
| body | body | True | dynamic |  |

#### Returns

Transcript details

- Body
    - TranscriptWebhookResponseSchema

### When I'm @mentioned

- Operation ID:
    - WebhookAtMentionTrigger

Triggers when a new message that @mentions the current user is added to a specified chat or channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message type | threadType | True | string | Choose message type |
| requestBody | requestBody |  | dynamic | This is the request body of the Webhook |

#### Returns

 The outputs of this operation are dynamic. 

### When I am mentioned in a channel message

- Operation ID:
    - OnNewChannelMessageMentioningMe

Triggers when a new message that @mentions the current user is added to a channel in a team. For shared channels, the team ID must refer to the host team, which is the team that owns the shared channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Team | groupId | True | string | Select team |
| Channel | channelId | True | string | Channel ID |

#### Returns

A message in a channel, one on one chat, or group chat

- Message
    - ChatMessage

### When keywords are mentioned

- Operation ID:
    - WebhookKeywordTrigger

Triggers when a keyword is mentioned in a specified chat or channel. Does not trigger if a message is edited.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Message type | threadType | True | string | Choose message type |
| Keywords to search for | $search | True | string | A comma separated list of keywords to search for |
| requestBody | requestBody |  | dynamic | This is the request body of the Webhook |

#### Returns

 The outputs of this operation are dynamic. 

### When someone reacted to a message in chat

- Operation ID:
    - WebhookMessageReactionTrigger

Triggers when someone reacts to a message in a specified chat or channel.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Emoji to Track | reactionKey | True | string | Choose emoji to monitor for message reactions |
| Trigger Frequency | frequency | True | string | Whether the flow should be triggered by every reaction or only the first reaction on a particular message |
| Who can trigger? | runningPolicy | True | string | Specify who can trigger this workflow |
| Message type | threadType | True | string | Choose message type |
| requestBody | requestBody |  | dynamic | This is the request body of the Webhook |

#### Returns

Message details

- Body
    - MessageReactionWebhookResponseSchema

### When someone responds to an adaptive card

- Operation ID:
    - TeamsCardTrigger

This trigger allows you to handle responses for an adaptive card posted in Microsoft Teams. (Available only for Power Automate.)

#### Returns

 The outputs of this operation are dynamic. 

## Definitions

### GetTagsResponseSchema

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| ID | value.id | string | Unique identifier of the tag |
| Team ID | value.teamId | string | ID of the team in which the tag is defined |
| Display name | value.displayName | string | The name of the tag as it appears to the user in Microsoft Teams. |
| Member count | value.memberCount | integer | The number of users assigned to the tag |

### GetTagMembersResponseSchema

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Tag member ID | value.id | string | The unique identifier for the member |
| Tenant ID | value.tenantId | string | The ID of the tenant that the tag member is a part of |
| User display name | value.displayName | string | The member's display name |
| User ID | value.userId | string | The user ID of the member |

### CreateTagResponseSchema

The created tag for a team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | Unique identifier of the tag |
| Team ID | teamId | string | ID of the team in which the tag is defined |
| Display name | displayName | string | The name of the tag as it appears to the user in Microsoft Teams. |
| Member count | memberCount | integer | The number of users assigned to the tag |

### AddMemberToTagResponseSchema

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | userId | string | User ID of the member added to the tag |

### ListMembersResponseSchema

List members response schema

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| List of members | value | array of object | List members response |
| Display Name | value.displayName | string | Display name of the member |
| E-Mail | value.email | string | Email address of the member |
| Membership ID | value.id | string | ID for the user's membership within the conversation |
| Roles | value.roles | array of string | The roles for that member |
| Tenant ID | value.tenantId | string | Tenant ID of the member |
| User ID | value.userId | string | User ID of the member |
| Start time of conversation's visible history | value.visibleHistoryStartDateTime | string | The timestamp denoting how far back a conversation's history is shared with the conversation member |

### ListRepliesResponseSchema

List replies response schema

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| List of message replies | value | array of object | List replies response |
| ID | value.id | string | Reply ID |
| Reply To ID | value.replyToId | string | ID of the message being replied to |
| ETag | value.etag | string | ETag of the reply |
| Message Type | value.messageType | string | Type of the message |
| Created Date Time | value.createdDateTime | string | Creation timestamp of the reply |
| Last Modified Date Time | value.lastModifiedDateTime | string | Last modification timestamp of the reply |
| Last Edited Date Time | value.lastEditedDateTime | string | Last edited timestamp of the reply |
| Deleted Date Time | value.deletedDateTime | string | Deletion timestamp of the reply |
| Subject | value.subject | string | Subject of the reply |
| Summary | value.summary | string | Summary of the reply |
| Chat ID | value.chatId | string | Chat ID associated with the reply |
| Importance | value.importance | string | Importance of the reply |
| Locale | value.locale | string | Locale of the reply |
| Web URL | value.webUrl | string | Web URL of the reply |
| Policy Violation | value.policyViolation | object | Policy violation details |
| Event Detail | value.eventDetail | object | Event details associated with the reply |
| Application | value.from.application | object | Application details |
| Device | value.from.device | object | Device details |
| User ID | value.from.user.id | string | User ID |
| Display Name | value.from.user.displayName | string | Display name of the user |
| User Identity Type | value.from.user.userIdentityType | string | Type of user identity |
| Tenant ID | value.from.user.tenantId | string | Tenant ID of the user |
| Content Type | value.body.contentType | string | Content type of the reply |
| Content | value.body.content | string | Content of the reply |
| Team ID | value.channelIdentity.teamId | string | Team ID |
| Channel ID | value.channelIdentity.channelId | string | Channel ID |
| Attachments | value.attachments | array of object | Attachments in the reply |
| items | value.attachments | object |  |
| Mentions | value.mentions | array of object | Mentions in the reply |
| items | value.mentions | object |  |
| Reactions | value.reactions | array of object | Reactions to the reply |
| items | value.reactions | object |  |
| Message History | value.messageHistory | array of object | History of the message |
| items | value.messageHistory | object |  |

### MessageReactionWebhookResponseSchema

Message details

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ThreadType | threadType | string |  |
| ChatId | chatId | string | The chat's unique identifier |
| TeamId | teamId | string | The team's unique identifier |
| ChannelId | channelId | string | The channel's unique identifier |
| MessageId | messageId | string | Id of the message which was reacted |
| ReplyToId | replyToId | string | ID of the parent message of the thread |
| Messagelink | messageLink | string | Link to the message which was reacted |
| UserId | userId | string | Reacting user's Id |
| MessageReaction | messageReaction | string | Message reaction used |

### TeamsIdentitySet

Identity set: one of application, device, or user is typically populated. Each identity is polymorphic via @odata.type.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OData Type | application.@odata.type | string |  |
| Application ID | application.id | string |  |
| Application Display Name | application.displayName | string |  |
| Application Identity Type | application.applicationIdentityType | string |  |
| OData Type | device.@odata.type | string |  |
| Device ID | device.id | string |  |
| Device Display Name | device.displayName | string |  |
| OData Type | user.@odata.type | string |  |
| User ID | user.id | string |  |
| User Identity Type | user.userIdentityType | string |  |
| User Principal Name | user.userPrincipalName | string |  |

### TranscriptWebhookResponseSchema

Transcript details

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Transcript ID | id | string | Transcript identifier |
| OData ID | @odata.id | string | OData identifier |
| Meeting ID | meetingId | string | Online meeting identifier (empty for ad-hoc call transcripts) |
| Call ID | callId | string | Call identifier (set for ad-hoc call transcripts) |
| Content Correlation ID | contentCorrelationId | string | Content correlation identifier |
| meetingOrganizer | meetingOrganizer | TeamsIdentitySet | Identity set: one of application, device, or user is typically populated. Each identity is polymorphic via @odata.type. |
| Transcript Content URL | transcriptContentUrl | string | URL to download the transcript content |
| Created Date Time | createdDateTime | date-time | When the transcript was created (UTC) |
| End Date Time | endDateTime | date-time | When the transcript ended (UTC) |

### RecordingWebhookResponseSchema

Recording details

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recording ID | id | string | Recording identifier |
| OData ID | @odata.id | string | OData identifier |
| Meeting ID | meetingId | string | Online meeting identifier (empty for ad-hoc call recordings) |
| Call ID | callId | string | Call identifier (set for ad-hoc call recordings) |
| Content Correlation ID | contentCorrelationId | string | Content correlation identifier |
| meetingOrganizer | meetingOrganizer | TeamsIdentitySet | Identity set: one of application, device, or user is typically populated. Each identity is polymorphic via @odata.type. |
| Recording Content URL | recordingContentUrl | string | URL to download the recording content |
| Created Date Time | createdDateTime | date-time | When the recording was created (UTC) |
| End Date Time | endDateTime | date-time | When the recording ended (UTC) |

### ChatMessageWebhookResponseSchema

Message details

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Message | value | array of object | Message details response |
| Conversation ID | value.conversationId | string | The chat's unique identifier |
| ID | value.messageId | string | Message ID |
| Link | value.linkToMessage | string | Message link |

### MessageId

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Message ID | id | string | Unique message identifier |

### GetMessagesFromConversation\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| @odata.context | @odata.context | string | @odata.context |
| @odata.count | @odata.count | integer | @odata.count |
| @odata.nextLink | @odata.nextLink | string | @odata.nextLink |
| Message List | value | ChatMessageList | List of one or more messages for a specific conversation in a team |

### ChatMessage

A message in a channel, one on one chat, or group chat

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| attachments | attachments | array of object | attachments |
| items | attachments | object |  |
| content | body.content | string | The content of the message |
| content type | body.contentType | string | The type of the content. Possible values are text and html |
| creation timestamp | createdDateTime | date-time | Timestamp of when the chat message was created |
| deleted | deleted | boolean | deleted |
| etag | etag | string | Version number of the chat message. |
| application | from.application | object | application |
| device | from.device | string | device |
| display name | from.user.displayName | string | display name |
| ID | from.user.id | string | user's identifier |
| identityProvider | from.user.identityProvider | string | identityProvider |
| id | id | string | Unique ID of the message |
| importance | importance | string | The importance of the message. The possible values are: normal, high, urgent. |
| last modified timestamp | lastModifiedDateTime | string | Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed |
| locale | locale | string | Locale of the chat message set by the client. |
| mentions | mentions | array of object | List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel. |
| items | mentions | object |  |
| messageType | messageType | string | The type of chat message |
| reactions | reactions | array of object | Reactions for this chat message (for example, Like) |
| items | reactions | object |  |
| replyToId | replyToId | string | ID of the parent message of the thread |
| subject | subject | string | The subject of the chat message, optional |
| summary | summary | string | Summary text of the message that could be used for push notifications and summary views or fall back views |

### ChatMessageList

List of one or more messages for a specific conversation in a team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Message |  | ChatMessage | A message in a channel, one on one chat, or group chat |

### GetTeamResponse

Get team response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Team ID | id | string | The unique identifier of the team |
| Display name | displayName | string | The name of the team |
| Description of team | description | string | The description of the team, optional |
| Internal ID | internalId | string | The internal ID of the team |
| Team's web url | webUrl | string | A hyperlink that will go to the team in the Microsoft Teams client |
| Archived | isArchived | boolean | Whether this team is in read-only mode |
| Member settings | memberSettings | MemberSettings | Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team |
| Guest settings | guestSettings | GuestSettings | Settings to configure whether guests can create, update, or delete channels in the team |
| Messaging settings | messagingSettings | MessagingSettings | Settings to configure messaging and mentions in the team |
| Fun settings | funSettings | FunSettings | Settings to configure use of Giphy, memes, and stickers in the team |
| Discovery settings | discoverySettings | DiscoverySettings | Settings to configure team discoverability by others. |

### AssociatedTeamInfo

Represents a team that is associated with a user

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Team ID | id | string | The unique identifier of the team |
| Display name | displayName | string | The name of the team |
| Tenant ID | tenantId | string | The ID of the Microsoft Entra tenant this team belongs to |

### GetChannelResponse

Get team channel details response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Channel ID | id | string | The unique identifier of the channel |
| Display name | displayName | string | The name of the channel |
| Description of channel | description | string | The description of the channel, optional |
| The email address for the channel | email | string | The email address for sending messages to the channel |
| Team tenant id | tenantId | string | The ID of the Microsoft Entra tenant. |
| A hyperlink for the channel in Microsoft Teams | webUrl | string | A hyperlink for the channel in Microsoft Teams |
| SharePoint folder URL for channel | filesFolderWebUrl | string | The SharePoint folder URL of the channel |
| Channel creation time | createdDateTime | date-time | Timestamp at which the channel was created. Read only |
| The type of the channel. | membershipType | string | The channel membership type |

### ChannelWithOwnerTeamId

Channel resource with owner team ID

| Name | Path | Type | Description |
| --- | --- | --- | --- |
|  |  | object | Channel resource with owner team ID |

### GetTimeOffReasonsResponse

The list of Time Off Reasons.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Array containing time off reasons | value | array of object | The list of time off reasons. |
| Time Off Reason ID | value.id | string | The unique ID of the time off reason. |
| Created Time | value.createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Date Time | value.lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Display Name | value.displayName | string | Display Name |
| Icon Type | value.iconType | string | Icon Type |
| Is Active | value.isActive | boolean | Is Active |
| Last Modified By | value.lastModifiedBy | LastModifiedBy | Last Modified By |

### TimeOffRequestResponse

TimeOff Request Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the TimeOff request. |
| Created Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Assigned To | assignedTo | string | The person the request is assigned to: 'manager' or 'recipient' |
| State | state | string | 'approved', 'pending' or 'declined' |
| Sender Time | senderDateTime | date-time | Time when the request was sent |
| Sender Message | senderMessage | string | The message from the request sender |
| Sender ID | senderUserId | string | The ID of the user that sent the request |
| Manager Action Time | managerActionDateTime | date-time | Time when the manager responded |
| Manager Message | managerActionMessage | string | The message from the manager |
| Manager ID | managerUserId | string | The ID of the manager that responded |
| From Start Time | startDateTime | date-time | Start of time requested off |
| To End Time | endDateTime | date-time | End of time requested off |
| TimeOff Reason ID | timeOffReasonId | string | The ID of the TimeOff Reason |

### OfferShiftRequestResponse

Offer Shift Request Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the Offer Shift request. |
| Created Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Assigned To | assignedTo | string | The person the request is assigned to: 'manager' or 'recipient' |
| State | state | string | 'approved', 'pending' or 'declined' |
| Sender Time | senderDateTime | date-time | Time when the request was sent |
| Sender Message | senderMessage | string | The message from the request sender |
| Sender ID | senderUserId | string | The ID of the user that sent the request |
| Sender Shift ID | senderShiftId | string | The ID of the shift from the sender |
| Receiver Time | recipientActionDateTime | date-time | Time when the recipient responded |
| Recipient Message | recipientActionMessage | string | The message from the recipient |
| Recipient ID | recipientUserId | string | The ID of the recipient of the request |
| Manager Action Time | managerActionDateTime | date-time | Time when the manager responded |
| Manager Message | managerActionMessage | string | The message from the manager |
| Manager ID | managerUserId | string | The ID of the manager that responded |

### SwapShiftsChangeRequestResponse

Swap Shift Request Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the Swap Shift request. |
| Created Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Assigned To | assignedTo | string | The person the request is assigned to: 'manager' or 'recipient' |
| State | state | string | 'approved', 'pending' or 'declined' |
| Sender Time | senderDateTime | date-time | Time when the request was sent |
| Sender Message | senderMessage | string | The message from the request sender |
| Sender ID | senderUserId | string | The ID of the user that sent the request |
| Sender Shift ID | senderShiftId | string | The ID of the shift from the sender |
| Receiver Time | recipientActionDateTime | date-time | Time when the recipient responded |
| Recipient Message | recipientActionMessage | string | The message from the recipient |
| Recipient ID | recipientUserId | string | The ID of the recipient of the request |
| Recipient Shift ID | recipientShiftId | string | The ID of the shift from the recipient |
| Manager Action Time | managerActionDateTime | date-time | Time when the manager responded |
| Manager Message | managerActionMessage | string | The message from the manager |
| Manager ID | managerUserId | string | The ID of the manager that responded |

### OpenShiftChangeRequestResponse

Open Shift Change Request Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the Open Shift Change request. |
| Created Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Assigned To | assignedTo | string | The person the request is assigned to: 'manager' or 'recipient' |
| State | state | string | 'approved', 'pending' or 'declined' |
| Sender Time | senderDateTime | date-time | Time when the request was sent |
| Sender Message | senderMessage | string | The message from the request sender |
| Sender ID | senderUserId | string | The ID of the user that sent the request |
| Manager Action Time | managerActionDateTime | date-time | Time when the manager responded |
| Manager Message | managerActionMessage | string | The message from the manager |
| Manager ID | managerUserId | string | The ID of the manager that responded |
| Open Shift ID | openShiftId | string | The ID of the open shift being requested |

### OpenShiftResponse

Open Shift Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the open shift. |
| Created Date Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Date Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Scheduling Group ID | schedulingGroupId | string | Scheduling Group ID |
| Last Modified By | lastModifiedBy | LastModifiedBy | Last Modified By |
| Shared Open Shift | sharedOpenShift | SharedOpenShift | Shared version of the open shift |
| Draft Open Shift | draftOpenShift | DraftOpenShift | Preliminary version of the open shift |

### SharedOpenShift

Shared version of the open shift

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | displayName | string | Display Name |
| Notes | notes | string | Notes |
| From Start Time | startDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme | string | Theme |
| Open Slot Count | openSlotCount | integer | Open Slot Count |
| activities | activities | Activities | Shift activities |

### DraftOpenShift

Preliminary version of the open shift

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | displayName | string | Display Name |
| Notes | notes | string | Notes |
| From Start Time | startDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme | string | Theme |
| Open Slot Count | openSlotCount | integer | Open Slot Count |
| activities | activities | Activities | Shift activities |

### ShiftResponse

Shift Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the shift. |
| Created Date Time | createdDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Modified Date Time | lastModifiedDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Assigned To User ID | userId | string | Assigned To User ID |
| Scheduling Group ID | schedulingGroupId | string | Scheduling Group ID |
| Last Modified By | lastModifiedBy | LastModifiedBy | Last Modified By |
| Shared Shift | sharedShift | SharedShift | Shared version of the shift |
| Draft Shift | draftShift | DraftShift | Preliminary version of the shift |

### SharedShift

Shared version of the shift

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | displayName | string | Display Name |
| Notes | notes | string | Notes |
| From Start Time | startDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme | string | Theme |
| activities | activities | Activities | Shift activities |

### DraftShift

Preliminary version of the shift

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | displayName | string | Display Name |
| Notes | notes | string | Notes |
| From Start Time | startDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Theme | theme | string | Theme |
| activities | activities | Activities | Shift activities |

### ScheduleResponse

Schedule Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Schedule ID | id | string | The unique ID of the schedule. |
| Schedule Time Zone | timeZone | string | The Time Zone of the schedule. |
| Schedule Provision Status | provisionStatus | string | The Provision Status of the schedule. |
| Schedule Provision Status Code | provisionStatusCode | string | The Provision Status Code of the schedule. |

### CreateATeamResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| New Team ID | newTeamId | string | Team ID of the team that was just created |

### PostToConversationResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Message ID | id | string | Unique message ID |
| Message link | messageLink | string | Link to the message in Microsoft Teams |
| Conversation ID | conversationId | string | The chat's unique identifier |

### Activities

Shift activities

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Is Paid | isPaid | boolean | Is Paid |
| From Start Time | startDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| To End Time | endDateTime | date-time | yyyy-MM-ddTHH:mm:ss.fffZ (UTC format) |
| Code | code | string | Code |
| Display Name | displayName | string | Display Name |

### SchedulingGroupResponse

Scheduling Group Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | The unique ID of the scheduling group. |
| Display Name | displayName | string | The display name for the scheduling group. |
| Is Active | isActive | boolean | Indicates whether the scheduling group can be used when creating new entities or updating existing ones. |
| User IDs | userIds | array of string | List of IDs of users in the scheduling group. |

### AtMentionUser\_V1

@mention Token

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| @mention | atMention | string | An @mention token for the user. This property can be inserted into messages |

### AtMentionTagResponse

@mention token for a tag

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| @mention tag | atMention | string | A token for the tag to @mention. It can be inserted into messages and adaptive cards sent from a person |

### NewChatResponse

Response for new chat that was created

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Conversation ID | id | string | The chat's unique identifier |

### NewMeetingRespone

Response for new meeting that was created

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | Unique identifier for the event |
| Created timestamp | createdDateTime | string | Timestamp the event was created |
| Last modified timestamp | lastModifiedDateTime | string | Timestamp the event was last modified |
| Categories | categories | array of | The categories associated with the event |
| Time Zone | timeZone | string | Time zone of the event |
| Pre-event reminder time | reminderMinutesBeforeStart | integer | The number of minutes before the event start time that the reminder alert occurs |
| Reminders enabled | isReminderOn | boolean | Set to true if an alert is set to remind the user of the event |
| Has Attachments | hasAttachments | boolean | Set to true if the event has attachments |
| Subject | subject | string | The text of the event's subject line |
| Body preview | bodyPreview | string | The preview of the message associated with the event |
| Importance | importance | string | The importance of the event. The possible values are: low, normal, high |
| Sensitivity | sensitivity | string | Sensitivity of the event |
| Is all day | isAllDay | boolean | Set to true if the event lasts all day |
| Is cancelled | isCancelled | boolean | Set to true if the event has been canceled |
| Is organizer | isOrganizer | boolean | Set to true if the calendar owner is the organizer of the event |
| Response requested | responseRequested | boolean | The organizer would like an invitee to send a response to the event |
| Show As | showAs | string | The status to show. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown. |
| Type | type | string | The event type. Possible values are: singleInstance, occurrence, exception, seriesMaster |
| Web last | webLink | string | The URL to open the event in Outlook on the web. |
| Online meeting URL | onlineMeetingUrl | string | A URL for an online meeting |
| Allow new time proposals | allowNewTimeProposals | boolean | True if the meeting organizer allows invitees to propose a new time when responding |
| Recurrence pattern | recurrence.pattern | object | The frequency of an event |
| Recurrence range | recurrence.range | object | The duration of an event |
| Response | responseStatus.response | string | The response type. Possible values are: none, organizer, tentativelyAccepted, accepted, declined, notResponded |
| Time | responseStatus.time | string | The date and time when the response was returned |
| Content type | body.contentType | string | The type of the content. Possible values are text and html |
| Event message content | body.content | string | The content of the event |
| date and time | start.dateTime | string | Start time of the event (example: '2017-08-29T04:00:00') |
| date and time | end.dateTime | string | End time of the event (example: '2017-08-29T04:00:00') |
| display name | location.displayName | string | The name associated with the location |
| Attendee | attendees | array of object | The collection of attendees for the event |
| type | attendees.type | string | The attendee type: required, optional, resource |
| response | attendees.status.response | string | The response type. Possible values are: none, organizer, tentativelyAccepted, accepted, declined, notResponded |
| time | attendees.status.time | string | The date and time when the response was returned |
| name | attendees.emailAddress.name | string | The display name of an attendee |
| address | attendees.emailAddress.address | string | The email address of an attendee |
| name | organizer.emailAddress.name | string | The display name of an organizer |
| address | organizer.emailAddress.address | string | The email address of an organizer |
| join url | onlineMeeting.joinUrl | string | The external link that launches the online meeting |

### LastModifiedBy

Last Modified By

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Application | application | string | Application |
| Device | device | string | Device |
| Conversation | conversation | string | Conversation |
| Id | user.id | string | Id |
| Display Name | user.displayName | string | Display Name |

### MemberSettings

Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Members are allowed create/update channels | allowCreateUpdateChannels | boolean | If set to true, members can add and update channels |
| Members are allowed delete channels | allowDeleteChannels | boolean | If set to true, members can delete channels |
| Members are allowed add/remove apps | allowAddRemoveApps | boolean | If set to true, members can add and remove apps |
| Members are allowed create/update/remove tabs | allowCreateUpdateRemoveTabs | boolean | If set to true, members can add, update, and remove tabs |
| Members are allowed create/update/remove connectors | allowCreateUpdateRemoveConnectors | boolean | If set to true, members can add, update, and remove connectors |

### GuestSettings

Settings to configure whether guests can create, update, or delete channels in the team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Guests are allowed create/update channels | allowCreateUpdateChannels | boolean | If set to true, guests can add and update channels |
| Guests are allowed delete channels | allowDeleteChannels | boolean | If set to true, guests can delete channels |

### MessagingSettings

Settings to configure messaging and mentions in the team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Allow user to edit messages | allowUserEditMessages | boolean | If set to true, users can edit their messages |
| Allow user to delete messages | allowUserDeleteMessages | boolean | If set to true, users can delete their messages |
| Allow owner to delete messages | allowOwnerDeleteMessages | boolean | If set to true, owners can delete any message |
| Allow team mentions | allowTeamMentions | boolean | If set to true, @team mentions are allowed |
| Allow channel mentions | allowChannelMentions | boolean | If set to true, @channel mentions are allowed |

### FunSettings

Settings to configure use of Giphy, memes, and stickers in the team

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Allow giphy | allowGiphy | boolean | If set to true, enables Giphy use |
| Giphy content rating | giphyContentRating | string | Giphy content rating. Possible values are: moderate, strict |
| Allow stickers and memes | allowStickersAndMemes | boolean | If set to true, enables users to include stickers and memes |
| Allow custom memes | allowCustomMemes | boolean | If set to true, enables users to include custom memes |

### DiscoverySettings

Settings to configure team discoverability by others.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Show in team's search and suggestions | showInTeamsSearchAndSuggestions | boolean | If set to true, the team is visible via search and suggestions from the Teams client |

### ObjectWithoutType

### GetOnlineMeeting\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Meeting ID | id | string | The unique identifier of the online meeting |
| Subject | subject | string | The subject of the online meeting |
| Start time | startDateTime | date-time | The start time of the meeting in UTC |
| End time | endDateTime | date-time | The end time of the meeting in UTC |
| Creation time | creationDateTime | date-time | The creation time of the meeting in UTC |
| Join web URL | joinWebUrl | string | The URL used to join the meeting online |
| Join meeting ID | joinMeetingIdSettings.joinMeetingId | string | The numeric ID used to join the meeting |
| Is passcode required | joinMeetingIdSettings.isPasscodeRequired | boolean | Indicates whether a passcode is required to join the meeting |
| Passcode | joinMeetingIdSettings.passcode | string | The passcode for joining the meeting |
| UPN | participants.organizer.upn | string | The user principal name of the organizer |
| ID | participants.organizer.identity.user.id | string | The unique identifier of the organizer |
| Display Name | participants.organizer.identity.user.displayName | string | The display name of the organizer |
| Conference ID | audioConferencing.conferenceId | string | The conference ID of the meeting |
| Toll number | audioConferencing.tollNumber | string | The dial-in phone number |
| Toll-free number | audioConferencing.tollFreeNumber | string | The free toll dial-in phone number |
| Dial-in URL | audioConferencing.dialinUrl | string | A URL to the web page with dial-in information |
| Announce on entry/exit | isEntryExitAnnounced | boolean | Whether announce notifications are enabled for callers joining or leaving the meeting |
| Allowed presenters | allowedPresenters | string | Specifies who can be a presenter in the meeting |
| Scope | lobbyBypassSettings.scope | string | Specifies the type of participants that are automatically admitted into a meeting |
| Dial-in bypass | lobbyBypassSettings.isDialInBypassEnabled | boolean | Specifies whether dial-in callers bypass the lobby |
| Record automatically | recordAutomatically | boolean | Indicates whether to record the meeting automatically |
| Allow meeting chat | allowMeetingChat | string | Specifies the mode of meeting chat |
| Meeting options web URL | meetingOptionsWebUrl | string | A URL for the organizer to change settings for the meeting |

### CallRecordingResponse

A call recording

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recording ID | id | string | The recording ID |
| Created Date Time | createdDateTime | date-time | The date and time when the recording was created |
| Recording Content URL | recordingContentUrl | string | The URL to access the recording content |
| Meeting ID | meetingId | string | The meeting ID |
| Meeting Organizer ID | meetingOrganizerId | string | The meeting organizer's user ID |
| Call ID | callId | string | The call ID |

### CallRecordingCollectionResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recordings | value | array of CallRecordingResponse | List of recordings |

### CallTranscriptResponse

A call transcript

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Transcript ID | id | string | The transcript ID |
| Created Date Time | createdDateTime | date-time | The date and time when the transcript was created |
| Transcript Content URL | transcriptContentUrl | string | The URL to access the transcript content |
| Meeting ID | meetingId | string | The meeting ID |
| Meeting Organizer ID | meetingOrganizerId | string | The meeting organizer's user ID |
| Call ID | callId | string | The call ID |

### CallTranscriptCollectionResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Transcripts | value | array of CallTranscriptResponse | List of transcripts |

### SectionResponse

A teamwork section

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ETag | @odata.etag | string | ETag for the sections collection. Pass as If-Match on Create, Update, and Delete. |
| Section ID | id | string | The section ID |
| Display Name | displayName | string | The display name of the section |
| Icon Type | displayIcon.iconType | string | Type of icon. Supported values: emoji Unicode characters or 'custom' for a custom icon. |
| Icon Display Name | displayIcon.displayName | string | The display name of the icon |
| Skin Tone | displayIcon.skinTone | string | Skin tone for emoji icons that support skin tone modifiers |
| Is Expanded | isExpanded | boolean | Whether the section is expanded |
| Sort Type | sortType | string | The sort type for the section |
| Section Type | sectionType | string | The type of section |
| Created Date Time | createdDateTime | date-time | The date and time when the section was created |
| Last Modified Date Time | lastModifiedDateTime | date-time | The date and time when the section was last modified |

### ListSectionsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Sections Version | @microsoft.graph.sectionsVersion | string | Version identifier for the sections hierarchy. Pass as If-Match on Create, Update, Delete, Add Item, Remove Item, and Move Item operations. |
| Sections | value | array of SectionResponse | List of sections |

### SectionItemResponse

An item (chat, channel, meeting, or community) within a teamwork section

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ETag | @odata.etag | string | ETag for the section items collection. Pass as If-Match on Add, Remove, and Move. |
| Item ID | id | string | The unique identifier of the item. Corresponds to the conversation ID of the underlying chat, channel, meeting, or community. |
| Item Type | itemType | string | The type of the item |
| Created Date Time | createdDateTime | date-time | The date and time when the item was added to the section |
| Last Modified Date Time | lastModifiedDateTime | date-time | The date and time when the item was last modified |

### ListSectionItemsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Section Items | value | array of SectionItemResponse | List of section items |

### AiInsightResponse

An AI-generated insight for an online meeting

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| AI Insight ID | id | string | The AI insight ID |
| Call ID | callId | string | The call ID |
| Content Correlation ID | contentCorrelationId | string | The content correlation ID |
| Created Date Time | createdDateTime | date-time | The date and time when the AI insight was created |
| End Date Time | endDateTime | date-time | The date and time when the AI insight ended |

### AiInsightCollectionResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| AI Insights | value | array of AiInsightResponse | List of AI insights |

### file

This is the basic data type 'file'.

### string

This is the basic data type 'string'.