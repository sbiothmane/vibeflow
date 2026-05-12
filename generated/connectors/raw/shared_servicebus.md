---
layout: Reference
title: Service Bus - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/servicebus/
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
document_id: 2658ff5e-3ad5-4c91-4442-3ab99b8b5bf0
document_version_independent_id: e1daa665-94cc-bdf8-ce4c-674d4ee564fc
updated_at: 2026-04-15T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/ServiceBus/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/f8b9e8e2ebe4156cb27b41d78e4a22a2bcf2991e/docs/ServiceBus/index.yml
git_commit_id: f8b9e8e2ebe4156cb27b41d78e4a22a2bcf2991e
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: servicebus/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/ServiceBus/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/828c518e-a2df-46f1-8871-b760959c8fa8
- https://authoring-docs-microsoft.poolparty.biz/devrel/653971be-c25b-47ce-b561-80221556af0c
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/54f6b674-eb1d-48ca-9254-9665ddd64677
- https://authoring-docs-microsoft.poolparty.biz/devrel/f998336e-f087-4bda-99f7-4001451d0bd2
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 3c2609af-093f-8210-bc23-376d52165e5c
---

# Service Bus

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1802/1.0.1802.4640/servicebus/icon.png)
Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC High) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/service-bus/ |

## General known issues and limitations

- Infinite loops

    Use caution when you select both a trigger and action that have the same connector type and use them to work with the same entity, such as a queue or topic subscription. This combination can create an infinite loop, which results in a workflow that never ends.

    For example, suppose your workflow uses a Service Bus trigger that returns a newly received message in a queue and follows that trigger with a Service Bus action that sends a message back to the same queue. This pattern can create an infinite loop, causing an unending workflow.
- Limit on saved sessions in connector cache

    Per Service Bus [messaging entity](/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions), such as a subscription or topic, the Service Bus connector can save up to 1,500 unique sessions at a time to the connector cache. If the session count exceeds this limit, old sessions are removed from the cache. For more information, see [Message sessions](/en-us/azure/service-bus-messaging/message-sessions).
- Long-polling triggers

    For the Azure Service Bus managed connector, all triggers are *long-polling*. This trigger type processes all the messages and then waits 30 seconds for more messages to appear in the queue or topic subscription. If no messages appear in 30 seconds, the trigger run is skipped. Otherwise, the trigger continues reading messages until the queue or topic subscription is empty. The next trigger poll is based on the recurrence interval specified in the trigger's properties.

## Microsoft Entra ID authentication

To use Microsoft Entra ID authentication, the user account requires a specific role assignment. For more information, see [Assign an Azure role for access rights - Azure Service Bus](/en-us/azure/service-bus-messaging/authenticate-application#azure-built-in-roles-for-azure-service-bus).

## Managed identity authentication

Currently, [managed identity authentication](/en-us/azure/active-directory/managed-identities-azure-resources/overview) is supported only for Azure Logic Apps.

- To use a managed identity that authenticates access from your logic app workflow to your Service Bus namespace and messaging entity, make sure that you assign role permissions at the corresponding levels. For example, to access a queue, the managed identity requires a role that has the necessary permissions for that queue.
- Each managed identity that accesses a different messaging entity should have a separate connection to that entity. If you use different Azure Service Bus actions to send and receive messages, and those actions require different permissions, make sure to use different connections.

To enable a managed identity for use with Azure Service Bus, follow these high-level steps:

1. Enable or create the managed identity for your logic app resource. For more information, see [Authenticate access to Azure resources with managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity).
2. Give the identity access to Azure Service Bus resources. For more information, see [Assign an Azure role for access rights - Azure Service Bus](/en-us/azure/service-bus-messaging/authenticate-application#azure-built-in-roles-for-azure-service-bus)
3. For a user-assigned identity, add the identity to the logic app resource. For more information about managed identities in Azure Logic Apps, see [Authenticate access to Azure resources using managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity)

## Connector in-depth

This article describes the operations for the Azure Service Bus *managed* connector, which is available for Azure Logic Apps, Power Automate, and Power Apps. The Azure Service Bus *built-in* connector is available only for Standard logic app workflows in Azure Logic Apps.

For more information about the Azure Service Bus built-in connector and managed connector in Azure Logic Apps, see [Connect to Azure Service Bus from workflows in Azure Logic Apps](/en-us/azure/connectors/connectors-create-api-servicebus).

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Access Key | Provide connection string to access your Azure Service Bus. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Not shareable |
| Access Key (Azure Government) | Provide connection string to access your Azure Service Bus. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Not shareable |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access your Azure Service Bus. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your Azure Service Bus. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Access Key

Auth ID: connectionstringauth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Provide connection string to access your Azure Service Bus.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Connection String | securestring | Azure Service Bus Connection String | True |

### Access Key (Azure Government)

Auth ID: connectionstringauth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Provide connection string to access your Azure Service Bus.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Connection String | securestring | Azure Service Bus Connection String | True |

### Client Certificate Auth

Auth ID: CertOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string |  | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |
| Namespace Endpoint | string | Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/) | True |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a LogicApps Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| LogicApps Managed Identity | managedIdentity | Sign in with a Logic Apps Managed Identity | True |
| Namespace Endpoint | string | Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/) | True |

### Microsoft Entra ID Integrated

Auth ID: aadAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Use Microsoft Entra ID to access your Azure Service Bus.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Namespace Endpoint | string | Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/) | True |

### Microsoft Entra ID Integrated (Azure Government)

Auth ID: aadAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Use Microsoft Entra ID to access your Azure Service Bus.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Namespace Endpoint | string | Provide Service Bus Namespace Endpoint (e.g: sb://testsb.servicebus.windows.net/) | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Connection String | securestring | Azure Service Bus Connection String | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 6000 | 60 seconds |

## Actions

| Abandon the message in a queue | The operation abandons a message in a queue. |
| --- | --- |
| Abandon the message in a topic subscription | The operation abandons a message in a topic subscription. |
| Close a session in a queue | The operation closes a session in a queue. |
| Close a session in the topic | The operation closes a session in the topic. |
| Complete the message in a queue | The operation completes a message in a queue. |
| Complete the message in a topic subscription | The operation completes a message in a topic subscription. |
| Create a topic subscription | The operation creates a topic subscription. |
| Dead-letter the message in a queue | The operation moves the message to the Dead-Letter Queue. |
| Dead-letter the message in a topic subscription | The operation moves the message to the topic Dead-Letter Queue. |
| Defer the message in a queue | The operation defers a message in a queue. |
| Defer the message in a topic subscription | The operation defers a message in a topic subscription. |
| Delete a topic subscription | The operation deletes a topic subscription. |
| Get deferred message from a queue | The operation gets a deferred message from a queue. |
| Get deferred message from a topic subscription | The operation gets a deferred message from a topic subscription. |
| Get messages from a queue (peek-lock) | The operation receives messages from a queue with peek-lock. If maximum message count is not provided, it reads 20 messages. |
| Get messages from a topic subscription (peek-lock) | The operation receives messages from a topic subscription with peek-lock. If maximum message count is not provided, it reads 20 messages. |
| Renew lock on the message in a queue | The operation renews lock on a message in a queue. |
| Renew lock on the message in a topic subscription | The operation renews lock on a message in a topic subscription. |
| Renew lock on the session in a queue | The operation renews a session in a queue. |
| Renew lock on the session in a topic subscription | The operation renews a session in a topic subscription. |
| Send message | This operation sends a message to a queue or topic. |
| Send one or more messages | This operation sends one or more messages to a queue or topic. |

### Abandon the message in a queue

- Operation ID:
    - AbandonMessageInQueue

The operation abandons a message in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Lock token of the message | lockToken | True | string | Lock token of the message to abandon |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Abandon the message in a topic subscription

- Operation ID:
    - AbandonMessageInTopic

The operation abandons a message in a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Lock token of the message | lockToken | True | string | Lock token of the message to abandon |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Close a session in a queue

- Operation ID:
    - CloseSessionInQueue

The operation closes a session in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of a queue |
| Session id | sessionId | True | string | Session id |

### Close a session in the topic

- Operation ID:
    - CloseSessionInTopic

The operation closes a session in the topic.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Session id | sessionId | True | string | Session id |

### Complete the message in a queue

- Operation ID:
    - CompleteMessageInQueue

The operation completes a message in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Lock token of the message | lockToken | True | string | Lock token of the message to complete |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Complete the message in a topic subscription

- Operation ID:
    - CompleteMessageInTopic

The operation completes a message in a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Lock token of the message | lockToken | True | string | Lock token of the message to complete |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Create a topic subscription

- Operation ID:
    - CreateTopicSubscription

The operation creates a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Filter | subscriptionFilter | True | dynamic | Subscription filter |
| Filter type | subscriptionFilterType |  | string | Filter type |

#### Returns

The topic subscription.

- Body
    - Subscription

### Dead-letter the message in a queue

- Operation ID:
    - DeadLetterMessageInQueue

The operation moves the message to the Dead-Letter Queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Lock token of the message | lockToken | True | string | Lock token of the message to dead-letter |
| Session id | sessionId |  | string | Session id |
| Dead letter reason | deadLetterReason |  | string | Dead letter reason |
| Dead letter error description | deadLetterErrorDescription |  | string | Dead letter error description |

### Dead-letter the message in a topic subscription

- Operation ID:
    - DeadLetterMessageInTopic

The operation moves the message to the topic Dead-Letter Queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Lock token of the message | lockToken | True | string | Lock token of the message to dead-letter |
| Session id | sessionId |  | string | Session id |
| Dead letter reason | deadLetterReason |  | string | Dead letter reason |
| Dead letter error description | deadLetterErrorDescription |  | string | Dead letter error description |

### Defer the message in a queue

- Operation ID:
    - DeferMessageInQueue

The operation defers a message in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Lock token of the message | lockToken | True | string | Lock token of the message to defer |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Defer the message in a topic subscription

- Operation ID:
    - DeferMessageInTopic

The operation defers a message in a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Lock token of the message | lockToken | True | string | Lock token of the message to defer |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

### Delete a topic subscription

- Operation ID:
    - DeleteTopicSubscription

The operation deletes a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |

### Get deferred message from a queue

- Operation ID:
    - GetDeferredMessageFromQueue

The operation gets a deferred message from a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Sequence number of message | sequenceNumber | True | integer | Sequence number of message |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### Get deferred message from a topic subscription

- Operation ID:
    - GetDeferredMessageFromTopic

The operation gets a deferred message from a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Sequence number of message | sequenceNumber | True | integer | Sequence number of message |
| Subscription type | subscriptionType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### Get messages from a queue (peek-lock)

- Operation ID:
    - GetMessagesFromQueueWithPeekLock

The operation receives messages from a queue with peek-lock. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

#### Returns

- response
    - array of ServiceBusMessage

### Get messages from a topic subscription (peek-lock)

- Operation ID:
    - GetMessagesFromTopicWithPeekLock

The operation receives messages from a topic subscription with peek-lock. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id |

#### Returns

- response
    - array of ServiceBusMessage

### Renew lock on the message in a queue

- Operation ID:
    - RenewLockOnMessageInQueue

The operation renews lock on a message in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Lock token of the message | lockToken | True | string | Lock token of the message to renew lock |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |

### Renew lock on the message in a topic subscription

- Operation ID:
    - RenewLockOnMessageInTopic

The operation renews lock on a message in a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Lock token of the message | lockToken | True | string | Lock token of the message to renew lock |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |

### Renew lock on the session in a queue

- Operation ID:
    - RenewLockOnSessionInQueue

The operation renews a session in a queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Session id | sessionId | True | string | Session id |

### Renew lock on the session in a topic subscription

- Operation ID:
    - RenewLockOnSessionInTopic

The operation renews a session in a topic subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Session id | sessionId | True | string | Session id |

### Send message

- Operation ID:
    - SendMessage

This operation sends a message to a queue or topic.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue/Topic name | entityName | True | string | Name of the queue or topic |
| Content | ContentData |  | byte | Content of the message |
| Content Type | ContentType |  | string | Content type of the message content |
| Properties | Properties |  | object | Key-value pairs for each brokered property |
| Message Id | MessageId |  | string | This is a user-defined value that Service Bus can use to identify duplicate messages, if enabled. |
| To | To |  | string | Send to address |
| Reply To | ReplyTo |  | string | Address of the queue to reply to |
| Reply To Session Id | ReplyToSessionId |  | string | Identifier of the session to reply to |
| Label | Label |  | string | Application specific label |
| ScheduledEnqueueTimeUtc | ScheduledEnqueueTimeUtc |  | date-time | Date and time, in UTC, when the message will be added to the queue |
| Session Id | SessionId |  | string | Identifier of the session |
| Correlation Id | CorrelationId |  | string | Identifier of the correlation |
| Sequence Number | SequenceNumber |  | integer | Identifier of the sequence number |
| Lock Token | LockToken |  | string | The lock token of the message as a string. |
| Time To Live | TimeToLive |  | integer | This is the duration, in ticks, that a message is valid. The duration starts from when the message is sent to the Service Bus. |
| System properties | systemProperties |  | string | System properties - None or Run Details. Run Details will add run metadata property details as custom properties in the message. |

### Send one or more messages

- Operation ID:
    - SendMessages

This operation sends one or more messages to a queue or topic.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue/Topic name | entityName | True | string | Name of the queue or topic |
| Content | ContentData |  | byte | Content of the message |
| Content Type | ContentType |  | string | Content type of the message content |
| Properties | Properties |  | object | Key-value pairs for each brokered property |
| Message Id | MessageId |  | string | This is a user-defined value that Service Bus can use to identify duplicate messages, if enabled. |
| To | To |  | string | Send to address |
| Reply To | ReplyTo |  | string | Address of the queue to reply to |
| Reply To Session Id | ReplyToSessionId |  | string | Identifier of the session to reply to |
| Label | Label |  | string | Application specific label |
| ScheduledEnqueueTimeUtc | ScheduledEnqueueTimeUtc |  | date-time | Date and time, in UTC, when the message will be added to the queue |
| Session Id | SessionId |  | string | Identifier of the session |
| Correlation Id | CorrelationId |  | string | Identifier of the correlation |
| Sequence Number | SequenceNumber |  | integer | Identifier of the sequence number |
| Lock Token | LockToken |  | string | The lock token of the message as a string. |
| Time To Live | TimeToLive |  | integer | This is the duration, in ticks, that a message is valid. The duration starts from when the message is sent to the Service Bus. |
| System properties | systemProperties |  | string | System properties - None or Run Details. Run Details will add run metadata property details as custom properties in the message. |

## Triggers

| When a message is received in a queue (auto-complete) | This operation triggers a flow when a message is received in a queue and auto completes the message. |
| --- | --- |
| When a message is received in a queue (peek-lock) | The operation triggers a flow when a message received in a queue with peek-lock mode. |
| When a message is received in a topic subscription (auto-complete) | This operation triggers a flow when a message is received in a topic subscription and auto completes the message. |
| When a message is received in a topic subscription (peek-lock) | The operation triggers a flow when a message received in a topic subscription with peek-lock mode. |
| When one or more messages arrive in a queue (auto-complete) | The operation receives one or more messages from a queue. If maximum message count is not provided, it reads 20 messages. |
| When one or more messages arrive in a queue (peek-lock) | The operation receives one or more messages from a queue with peek-lock. If maximum message count is not provided, it reads 20 messages. |
| When one or more messages arrive in a topic (auto-complete) | The operation receives one or more messages from a topic. If maximum message count is not provided, it reads 20 messages. |
| When one or more messages arrive in a topic (peek-lock) | The operation receives one or more messages from a topic with peek-lock. If maximum message count is not provided, it reads 20 messages. |

### When a message is received in a queue (auto-complete)

- Operation ID:
    - GetMessageFromQueue

This operation triggers a flow when a message is received in a queue and auto completes the message.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When a message is received in a queue (peek-lock)

- Operation ID:
    - GetNewMessageFromQueueWithPeekLock

The operation triggers a flow when a message received in a queue with peek-lock mode.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id - None or Next Available or provide session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When a message is received in a topic subscription (auto-complete)

- Operation ID:
    - GetMessageFromTopic

This operation triggers a flow when a message is received in a topic subscription and auto completes the message.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When a message is received in a topic subscription (peek-lock)

- Operation ID:
    - GetNewMessageFromTopicWithPeekLock

The operation triggers a flow when a message received in a topic subscription with peek-lock mode.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id - None or Next Available or provide session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When one or more messages arrive in a queue (auto-complete)

- Operation ID:
    - GetMessagesFromQueue

The operation receives one or more messages from a queue. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When one or more messages arrive in a queue (peek-lock)

- Operation ID:
    - GetNewMessagesFromQueueWithPeekLock

The operation receives one or more messages from a queue with peek-lock. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Queue name | queueName | True | string | Name of the queue |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Queue type | queueType |  | string | Queue type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id - None or Next Available or provide session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When one or more messages arrive in a topic (auto-complete)

- Operation ID:
    - GetMessagesFromTopic

The operation receives one or more messages from a topic. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

### When one or more messages arrive in a topic (peek-lock)

- Operation ID:
    - GetNewMessagesFromTopicWithPeekLock

The operation receives one or more messages from a topic with peek-lock. If maximum message count is not provided, it reads 20 messages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Topic name | topicName | True | string | Name of the topic |
| Topic subscription name | subscriptionName | True | string | Name of the topic subscription |
| Maximum message count | maxMessageCount |  | integer | The maximum number of messages to return in the batch |
| Subscription type | subscriptionType |  | string | Subscription type - Main or DeadLetter |
| Session id | sessionId |  | string | Session id - None or Next Available or provide session id |

#### Returns

Service Bus Message

- Body
    - ServiceBusMessage

## Definitions

### ServiceBusMessage

Service Bus Message

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Content | ContentData | byte | Content of the message |
| Content Type | ContentType | string | Content type of the message content |
| Properties | Properties | object | Key-value pairs for each brokered property |
| Message Id | MessageId | string | This is a user-defined value that Service Bus can use to identify duplicate messages, if enabled. |
| To | To | string | Send to address |
| Reply To | ReplyTo | string | Address of the queue to reply to |
| Reply To Session Id | ReplyToSessionId | string | Identifier of the session to reply to |
| Label | Label | string | Application specific label |
| ScheduledEnqueueTimeUtc | ScheduledEnqueueTimeUtc | date-time | Date and time, in UTC, when the message will be added to the queue |
| Session Id | SessionId | string | Identifier of the session |
| Correlation Id | CorrelationId | string | Identifier of the correlation |
| Sequence Number | SequenceNumber | integer | Identifier of the sequence number |
| Lock Token | LockToken | string | The lock token of the message as a string. |
| Time To Live | TimeToLive | integer | This is the duration, in ticks, that a message is valid. The duration starts from when the message is sent to the Service Bus. |

### Subscription

The topic subscription.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Subscription name | SubscriptionName | string | Subscription name. |