---
layout: Reference
title: Microsoft To-Do (Business) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/todo/
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
document_id: 0bb0c7e3-b092-e8e5-4aa2-f4a0ffa34595
document_version_independent_id: 6cfca140-0c7e-c27f-82d2-8864a4e24f3e
updated_at: 2026-04-09T19:04:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/todo/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/f7be96830f27ff20c9beaa60e4be74378750ef16/docs/todo/index.yml
git_commit_id: f7be96830f27ff20c9beaa60e4be74378750ef16
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: todo/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/todo/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/3e34b70d-bca0-4369-a01b-71d1edfd427b
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8ca32b3f-fa14-46df-b09a-9c4a591d6396
platformId: 11ba1efc-6be2-c019-f84c-e3a52fb7017c
---

# Microsoft To-Do (Business)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1797/1.0.1797.4628/todo/icon.png)
Microsoft To-Do is an intelligent task management app that makes it easy to plan and manage your day. Connect to Microsoft To-Do to manage your tasks from various services. You can perform actions such as creating tasks.

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
| URL | https://todo.microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://todo.microsoft.com/tasks/ |
| Privacy policy | https://privacy.microsoft.com/en-us/privacystatement |
| Categories | Productivity |

## Known Issues and Limitations

[To Do API](/en-us/graph/api/resources/todo-overview?view=graph-rest-1.0) has most of the [Outlook Task](/en-us/graph/api/outlookuser-post-tasks?view=graph-rest-beta&amp;tabs=csharp) capabilities. Please note that [outlookTaskGroup entity](/en-us/graph/api/resources/outlooktaskgroup?view=graph-rest-beta), extended properties and assignedTo, owner properties of [outlookTask entity](/en-us/graph/api/resources/outlooktask?view=graph-rest-beta) won’t be available in To Do API.

## Deprecation of Outlook Tasks APIs

> 
> ***[Graph Outlook Tasks APIs](/en-us/graph/api/outlookuser-post-tasks?view=graph-rest-beta) will stop returning data after February 20, 2023.***

Operations listed here **will be** affected by API deprecation and will stop to return data after **February 20, 2023.**

- ListToDosByFolder
- ListAllToDos
- OnNewToDoInFolder
- OnNewToDo
- OnUpdateToDoInFolder
- OnUpdateToDo
- GetAllTodoLists
- GetToDoList
- GetToDo
- GetToDoV2
- CreateToDoList
- CreateToDo
- CreateToDoV2
- UpdateToDo
- DeleteToDo

Operations listed here will **not** be affected by API deprecation.

- ListToDosByFolderV2
- OnNewToDoInFolderV2
- OnUpdateToDoInFolderV2
- GetAllTodoListsV2
- GetToDoListV2
- GetToDoV3
- CreateToDoListV2
- CreateToDoV3
- UpdateToDoList
- UpdateToDoV2
- DeleteToDoList
- DeleteToDoV2

## Devblogs on the To Do API release

- [Microsoft Build 2020](https://devblogs.microsoft.com/microsoft365dev/the-new-improved-microsoft-graph-to-do-apis-are-now-in-public-preview/#deprecation-of-outlook-tasks-apis)
- [Microsoft Ignite 2021](https://devblogs.microsoft.com/microsoft365dev/announcing-the-public-preview-of-to-do-tasks-api/)

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |

## Actions

| Add a to-do (V2) [DEPRECATED] | This action has been deprecated. Please use [Add a to-do (V3)](/en-us/connectors/todo/#add-a-to-do-%28v3%29) instead.<br><br>~~This operation is used to create a to-do in the specified to-do list (defaults to To-Do).~~ |
| --- | --- |
| Add a to-do (V3) | This operation is used to create a to-do in the specified to-do list. |
| Add a to-do [DEPRECATED] | This action has been deprecated. Please use [Add a to-do (V3)](/en-us/connectors/todo/#add-a-to-do-%28v3%29) instead.<br><br>~~This operation is used to create a to-do in the specified to-do list (defaults to To-Do).~~ |
| Create a to-do list (V2) | This operation is used to create a new to-do list. |
| Create a to-do list [DEPRECATED] | This action has been deprecated. Please use [Create a to-do list (V2)](/en-us/connectors/todo/#create-a-to-do-list-%28v2%29) instead.<br><br>~~This operation is used to create a new to-do list.~~ |
| Delete a to-do list | This operation is used to delete a specific to-do list. |
| Delete to-do (V2) | This operation is used to delete a task. |
| Delete to-do [DEPRECATED] | This action has been deprecated. Please use [Delete to-do (V2)](/en-us/connectors/todo/#delete-to-do-%28v2%29) instead.<br><br>~~This operation is used to delete a task.~~ |
| Get a to-do (V2) [DEPRECATED] | This action has been deprecated. Please use [Get a to-do (V3)](/en-us/connectors/todo/#get-a-to-do-%28v3%29) instead.<br><br>~~This operation is used to get the to-do with the given Id.~~ |
| Get a to-do (V3) | This operation is used to get the to-do with the given Id. |
| Get a to-do [DEPRECATED] | This action has been deprecated. Please use [Get a to-do (V3)](/en-us/connectors/todo/#get-a-to-do-%28v3%29) instead.<br><br>~~This operation is used to get the to-Do with the given Id.~~ |
| Get a to-do list (V2) | This operation is used to get a specific to-do list. |
| Get a to-do list [DEPRECATED] | This action has been deprecated. Please use [Get a to-do list (V2)](/en-us/connectors/todo/#get-a-to-do-list-%28v2%29) instead.<br><br>~~This operation is used to get a specific to-do list.~~ |
| List all to-do's [DEPRECATED] | This operation is used to retrieve all to-do's from all lists. |
| List all to-do lists (V2) | Returns a list of all the to-do lists. |
| List all to-do lists [DEPRECATED] | This action has been deprecated. Please use [List all to-do lists (V2)](/en-us/connectors/todo/#list-all-to-do-lists-%28v2%29) instead.<br><br>~~Returns a list of all the to-do lists.~~ |
| List to-do's by folder (V2) | This operation is used to retrieve all to-do's from a specific list. |
| List to-do's by folder [DEPRECATED] | This action has been deprecated. Please use [List to-do's by folder (V2)](/en-us/connectors/todo/#list-to-do%27s-by-folder-%28v2%29) instead.<br><br>~~This operation is used to retrieve all to-do's from a specific list.~~ |
| Update a to-do list | This operation is used to update a specific to-do list. |
| Update to-do (V2) | This operation is used to update a specific to-do. |
| Update to-do [DEPRECATED] | This action has been deprecated. Please use [Update to-do (V2)](/en-us/connectors/todo/#update-to-do-%28v2%29) instead.<br><br>~~This operation is used to update a specific to-do.~~ |

### Add a to-do (V2) [DEPRECATED]

- Operation ID:
    - CreateToDoV2

This action has been deprecated. Please use [Add a to-do (V3)](/en-us/connectors/todo/#add-a-to-do-%28v3%29) instead.

~~This operation is used to create a to-do in the specified to-do list (defaults to To-Do).~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId |  | string | To-do list |
| Due Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Reminder Date-Time | DateTime |  | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Start Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Importance | Importance |  | string | Low, normal or high. |
| Subject | Subject | True | string | Brief description or title of the to-do. |
| Status | Status |  | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Sensitivity | Sensitivity |  | string | Indicates the level of privacy for the event. |
| Content | Content |  | html | The content. |
| Categories | Categories |  | array of string | Collection of category names associated with the to-do. |
| Is Reminder On | IsReminderOn |  | boolean | True if an alert is set to remind the user of the to-do. |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDoHtml

### Add a to-do (V3)

- Operation ID:
    - CreateToDoV3

This operation is used to create a to-do in the specified to-do list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| Due Date | dateTime |  | date-time | YYYY-MM-DDThh:mm:ss |
| Reminder Date-Time | dateTime |  | date-time | YYYY-MM-DDThh:mm:ss |
| Importance | importance |  | string | Low, normal or high. |
| Title | title | True | string | Brief description or title of the to-do. |
| Status | status |  | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Content | content |  | html | The content of the item. |
| Is Reminder On | isReminderOn |  | boolean | True if an alert is set to remind the user of the to-do. |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo_V2

### Add a to-do [DEPRECATED]

- Operation ID:
    - CreateToDo

This action has been deprecated. Please use [Add a to-do (V3)](/en-us/connectors/todo/#add-a-to-do-%28v3%29) instead.

~~This operation is used to create a to-do in the specified to-do list (defaults to To-Do).~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId |  | string | To-do list |
| Due Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Reminder Date-Time | DateTime |  | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Start Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Importance | Importance |  | string | Low, normal or high. |
| Subject | Subject | True | string | Brief description or title of the to-do. |
| Status | Status |  | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Sensitivity | Sensitivity |  | string | Indicates the level of privacy for the event. |
| Content Type | ContentType |  | string | Text=0, HTML=1 |
| Content | Content |  | string | The text or HTML content. |
| Categories | Categories |  | array of string | Collection of category names associated with the to-do. |
| Is Reminder On | IsReminderOn |  | boolean | True if an alert is set to remind the user of the to-do. |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### Create a to-do list (V2)

- Operation ID:
    - CreateToDoListV2

This operation is used to create a new to-do list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name | displayName | True | string | List name |

#### Returns

An Microsoft To-Do list.

- Body
    - TodoList_V2

### Create a to-do list [DEPRECATED]

- Operation ID:
    - CreateToDoList

This action has been deprecated. Please use [Create a to-do list (V2)](/en-us/connectors/todo/#create-a-to-do-list-%28v2%29) instead.

~~This operation is used to create a new to-do list.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name | name | True | string | List name |

#### Returns

An Microsoft To-Do list.

- Body
    - TodoList

### Delete a to-do list

- Operation ID:
    - DeleteToDoList

This operation is used to delete a specific to-do list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

### Delete to-do (V2)

- Operation ID:
    - DeleteToDoV2

This operation is used to delete a task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |

### Delete to-do [DEPRECATED]

- Operation ID:
    - DeleteToDo

This action has been deprecated. Please use [Delete to-do (V2)](/en-us/connectors/todo/#delete-to-do-%28v2%29) instead.

~~This operation is used to delete a task.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |

### Get a to-do (V2) [DEPRECATED]

- Operation ID:
    - GetToDoV2

This action has been deprecated. Please use [Get a to-do (V3)](/en-us/connectors/todo/#get-a-to-do-%28v3%29) instead.

~~This operation is used to get the to-do with the given Id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### Get a to-do (V3)

- Operation ID:
    - GetToDoV3

This operation is used to get the to-do with the given Id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo_V2

### Get a to-do [DEPRECATED]

- Operation ID:
    - GetToDo

This action has been deprecated. Please use [Get a to-do (V3)](/en-us/connectors/todo/#get-a-to-do-%28v3%29) instead.

~~This operation is used to get the to-Do with the given Id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do Id | id | True | string | To-do Id |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### Get a to-do list (V2)

- Operation ID:
    - GetToDoListV2

This operation is used to get a specific to-do list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

#### Returns

An Microsoft To-Do list.

- Body
    - TodoList_V2

### Get a to-do list [DEPRECATED]

- Operation ID:
    - GetToDoList

This action has been deprecated. Please use [Get a to-do list (V2)](/en-us/connectors/todo/#get-a-to-do-list-%28v2%29) instead.

~~This operation is used to get a specific to-do list.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | id | True | string | To-do list |

#### Returns

An Microsoft To-Do list.

- Body
    - TodoList

### List all to-do's [DEPRECATED]

- Operation ID:
    - ListAllToDos

This operation is used to retrieve all to-do's from all lists.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = 10, maximum = 999). |

#### Returns

- response
    - array of ToDo

### List all to-do lists (V2)

- Operation ID:
    - GetAllTodoListsV2

Returns a list of all the to-do lists.

#### Returns

- response
    - array of TodoList_V2

### List all to-do lists [DEPRECATED]

- Operation ID:
    - GetAllTodoLists

This action has been deprecated. Please use [List all to-do lists (V2)](/en-us/connectors/todo/#list-all-to-do-lists-%28v2%29) instead.

~~Returns a list of all the to-do lists.~~

#### Returns

- response
    - array of TodoList

### List to-do's by folder (V2)

- Operation ID:
    - ListToDosByFolderV2

This operation is used to retrieve all to-do's from a specific list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = 10, maximum = 999). |

#### Returns

- response
    - array of ToDo_V2

### List to-do's by folder [DEPRECATED]

- Operation ID:
    - ListToDosByFolder

This action has been deprecated. Please use [List to-do's by folder (V2)](/en-us/connectors/todo/#list-to-do%27s-by-folder-%28v2%29) instead.

~~This operation is used to retrieve all to-do's from a specific list.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = 10, maximum = 999). |

#### Returns

- response
    - array of ToDo

### Update a to-do list

- Operation ID:
    - UpdateToDoList

This operation is used to update a specific to-do list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| Name | displayName | True | string | List name |

#### Returns

An Microsoft To-Do list.

- Body
    - TodoList_V2

### Update to-do (V2)

- Operation ID:
    - UpdateToDoV2

This operation is used to update a specific to-do.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |
| Due Date | dateTime |  | date-time | YYYY-MM-DDThh:mm:ss |
| Reminder Date-Time | dateTime |  | date-time | YYYY-MM-DDThh:mm:ss |
| Importance | importance |  | string | Low, normal or high. |
| Title | title |  | string | Brief description or title of the to-do. |
| Status | status |  | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Content | content |  | html | The content of the item. |
| Is Reminder On | isReminderOn |  | boolean | True if an alert is set to remind the user of the to-do. |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo_V2

### Update to-do [DEPRECATED]

- Operation ID:
    - UpdateToDo

This action has been deprecated. Please use [Update to-do (V2)](/en-us/connectors/todo/#update-to-do-%28v2%29) instead.

~~This operation is used to update a specific to-do.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |
| To-do task | id | True | string | To-do task |
| Due Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Reminder Date-Time | DateTime |  | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Start Date | DateTime |  | date-time | YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ (note the time portion will be ignored) |
| Importance | Importance |  | string | Low, normal or high. |
| Subject | Subject |  | string | Brief description or title of the to-do. |
| Status | Status |  | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Sensitivity | Sensitivity |  | string | Indicates the level of privacy for the event. |
| Content Type | ContentType |  | string | Text=0, HTML=1 |
| Content | Content |  | string | The text or HTML content. |
| Categories | Categories |  | array of string | Collection of category names associated with the to-do. |
| Is Reminder On | IsReminderOn |  | boolean | True if an alert is set to remind the user of the to-do. |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

## Triggers

| When a new to-do in a specific folder is created (V2) | Triggers when a new to-do in a specific folder is created. |
| --- | --- |
| When a new to-do in a specific folder is created [DEPRECATED] | This action has been deprecated. Please use [When a new to-do in a specific folder is created (V2)](/en-us/connectors/todo/#when-a-new-to-do-in-a-specific-folder-is-created-%28v2%29) instead.<br><br>~~Triggers when a new to-do in a specific folder is created.~~ |
| When a new to-do is created [DEPRECATED] | Triggers when a new to-do is created. |
| When a to-do in a specific folder is updated (V2) | Triggers when a to-do in a specific folder is updated. |
| When a to-do in a specific folder is updated [DEPRECATED] | This action has been deprecated. Please use [When a to-do in a specific folder is updated (V2)](/en-us/connectors/todo/#when-a-to-do-in-a-specific-folder-is-updated-%28v2%29) instead.<br><br>~~Triggers when a to-do in a specific folder is updated.~~ |
| When a to-do is updated [DEPRECATED] | Triggers when a to-do is updated. |

### When a new to-do in a specific folder is created (V2)

- Operation ID:
    - OnNewToDoInFolderV2

Triggers when a new to-do in a specific folder is created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo_V2

### When a new to-do in a specific folder is created [DEPRECATED]

- Operation ID:
    - OnNewToDoInFolder

This action has been deprecated. Please use [When a new to-do in a specific folder is created (V2)](/en-us/connectors/todo/#when-a-new-to-do-in-a-specific-folder-is-created-%28v2%29) instead.

~~Triggers when a new to-do in a specific folder is created.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### When a new to-do is created [DEPRECATED]

- Operation ID:
    - OnNewToDo

Triggers when a new to-do is created.

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### When a to-do in a specific folder is updated (V2)

- Operation ID:
    - OnUpdateToDoInFolderV2

Triggers when a to-do in a specific folder is updated.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo_V2

### When a to-do in a specific folder is updated [DEPRECATED]

- Operation ID:
    - OnUpdateToDoInFolder

This action has been deprecated. Please use [When a to-do in a specific folder is updated (V2)](/en-us/connectors/todo/#when-a-to-do-in-a-specific-folder-is-updated-%28v2%29) instead.

~~Triggers when a to-do in a specific folder is updated.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| To-do List | folderId | True | string | To-do list |

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

### When a to-do is updated [DEPRECATED]

- Operation ID:
    - OnUpdateToDo

Triggers when a to-do is updated.

#### Returns

A Microsoft To-Do object.

- Body
    - ToDo

## Definitions

### ToDo

A Microsoft To-Do object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the to-do. |
| Created Date-Time | createdDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Modified Date-Time | lastModifiedDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Categories | categories | array of string | Collection of category names associated with the to-do. |
| Assigned To | assignedTo | string | Name of the person who has been assigned the to-do. |
| Content Type | body.contentType | string | Text=0, HTML=1 |
| Content | body.content | string | The text or HTML content. |
| Date-Time | completedDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Date | dueDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Importance | importance | string | Low, normal or high. |
| Is reminder on | isReminderOn | boolean | True if an alert is set to remind the user of the to-do. |
| Owner | owner | string | Name of the person who created the to-do. |
| Parent folder identifier | parentFolderId | string | Unique identifier of the parent folder. |
| Date-Time | reminderDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Date | startDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Status | status | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Subject | subject | string | Brief description or title of the to-do. |

### ToDoHtml

A Microsoft To-Do object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the to-do. |
| Created Date-Time | createdDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Modified Date-Time | lastModifiedDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Categories | categories | array of string | Collection of category names associated with the to-do. |
| Assigned To | assignedTo | string | Name of the person who has been assigned the to-do. |
| Content | body.content | html | The content. |
| Date-Time | completedDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Date | dueDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Importance | importance | string | Low, normal or high. |
| Is reminder on | isReminderOn | boolean | True if an alert is set to remind the user of the to-do. |
| Owner | owner | string | Name of the person who created the to-do. |
| Parent folder identifier | parentFolderId | string | Unique identifier of the parent folder. |
| Date-Time | reminderDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Date | startDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Status | status | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Subject | subject | string | Brief description or title of the to-do. |

### TodoList

An Microsoft To-Do list.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the to-do list. |
| Name | name | string | Name of the to-do list. |
| Is Default | isDefaultFolder | boolean | True if this is the default to-do list. |

### TodoList\_V2

An Microsoft To-Do list.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the to-do list. |
| Name | displayName | string | Name of the to-do list. |
| Well-known name | wellknownListName | string | Property indicating the well-known list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue. |
| Is owner | isOwner | boolean | True if the user is owner of the given task list. |
| Is shared | isShared | boolean | True if the task list is shared with other users. |

### ToDo\_V2

A Microsoft To-Do object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the to-do. |
| Created Date-Time | createdDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Modified Date-Time | lastModifiedDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Content Type | body.contentType | string | The type of the content. Possible values are text and html. |
| Content | body.content | string | The content of the item. |
| Modified Date-Time | bodyLastModifiedDateTime | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) |
| Date | completedDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ss |
| Date | dueDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ss |
| Importance | importance | string | Low, normal or high. |
| Is reminder on | isReminderOn | boolean | True if an alert is set to remind the user of the to-do. |
| Date-Time | reminderDateTime.dateTime | date-time | YYYY-MM-DDThh:mm:ss |
| Status | status | string | Indicates state or progress of the to-do - not started, in progress, completed, waiting on others or deferred. |
| Title | title | string | Brief description or title of the to-do. |