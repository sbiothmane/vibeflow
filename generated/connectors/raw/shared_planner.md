---
layout: Reference
title: Planner - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/planner/
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
document_id: 24185ffe-d266-c113-9327-4e305c276697
document_version_independent_id: 98978ace-f736-e07a-bde3-9156cd815100
updated_at: 2026-05-05T19:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/Planner/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/181182d93e37b1e3c2f362a907d452853c68778a/docs/Planner/index.yml
git_commit_id: 181182d93e37b1e3c2f362a907d452853c68778a
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: planner/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/Planner/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 4a6ea6cf-e3d5-afc5-486a-8c67ea902f58
---

# Planner

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/planner/icon.png)
Microsoft Planner lets you easily bring together teams, tasks, documents, and conversations for better results.

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
| URL | https://support.microsoft.com/en-us/planner |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://planner.cloud.microsoft |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Productivity |

For more information, please refer to [Planner API Docs](/en-us/graph/api/resources/planner-overview?view=graph-rest-1.0)

## Known Issues and Limitations

Important

The Planner connector currently supports basic plans only.

Please note, certain actions and triggers require you to provide a `Group Id`, but this is only for the purposes of populating other dependent dropdowns (e.g. *Create a task* action populates the `Plan Id` dropdown based on the provided `Group Id`). Once the dependent dropdown is populated, any value can be inserted into the `Group Id` field and the action would still work as expected despite any warnings the connector might give you regarding the `Group Id` field.

Below is the full list of actions/triggers to which the above applies:

- Create a bucket
- Create a task
- Create a task (Preview)
- List buckets
- List tasks
- When a new task is created
- When a task is completed

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
| Frequency of trigger polls | 1 | 360 seconds |

## Actions

| Add assignees to a task | Add assignees to an existing Planner task. |
| --- | --- |
| Create a bucket | Create a bucket in Planner for the specified plan and group. |
| Create a bucket [DEPRECATED] | This action has been deprecated. Please use [Create a bucket](/en-us/connectors/planner/#create-a-bucket) instead.<br><br>~~Create a bucket in Planner.~~ |
| Create a task | Create a new task in Planner. |
| Create a task (Preview) | Create a new task in Planner. |
| Create a task [DEPRECATED] | This action has been deprecated. Please use [Create a task](/en-us/connectors/planner/#create-a-task) instead.<br><br>~~Create a new task in Planner.~~ |
| Create a task [DEPRECATED] | This action has been deprecated. Please use [Create a task](/en-us/connectors/planner/#create-a-task) instead.<br><br>~~Create a new task in Planner.~~ |
| Delete a task (Preview) | Deletes an existing Planner task. |
| Get a task | Get an existing Planner task. |
| Get a task [DEPRECATED] | This action has been deprecated. Please use [Get a task](/en-us/connectors/planner/#get-a-task) instead.<br><br>~~Get an existing Planner task.~~ |
| Get plan details (Preview) | Get plan details where the task belongs to |
| Get task details | Get the task details for an existing task. |
| Get task details [DEPRECATED] | This action has been deprecated. Please use [Get task details](/en-us/connectors/planner/#get-task-details) instead.<br><br>~~Get the task details for an existing task.~~ |
| List buckets | List the buckets in a plan. |
| List buckets [DEPRECATED] | This action has been deprecated. Please use [List buckets](/en-us/connectors/planner/#list-buckets) instead.<br><br>~~List the buckets in a plan.~~ |
| List buckets [DEPRECATED] | This action has been deprecated. Please use [List buckets](/en-us/connectors/planner/#list-buckets) instead.<br><br>~~List the buckets in a plan.~~ |
| List my plans [DEPRECATED] | List the plans the user has subscribed to. |
| List my plans [DEPRECATED] | List the plans the user has subscribed to. |
| List my tasks | List the tasks assigned to me. |
| List my tasks [DEPRECATED] | This action has been deprecated. Please use [List my tasks](/en-us/connectors/planner/#list-my-tasks) instead.<br><br>~~List the tasks assigned to me.~~ |
| List plans for a group | List plans owned by the group specified. |
| List tasks | List the tasks in a plan. |
| List tasks [DEPRECATED] | This action has been deprecated. Please use [List tasks](/en-us/connectors/planner/#list-tasks) instead.<br><br>~~List the tasks in a plan.~~ |
| List tasks [DEPRECATED] | This action has been deprecated. Please use [List tasks](/en-us/connectors/planner/#list-tasks) instead.<br><br>~~List the tasks in a plan.~~ |
| Remove assignees from a task | Remove assignees from an existing Planner task. |
| Update a task | Update an existing Planner task. |
| Update a task (V2) (Preview) | Update an existing Planner task. |
| Update a task [DEPRECATED] | This action has been deprecated. Please use [Update a task (V2)](/en-us/connectors/planner/#update-a-task-%28v2%29) instead.<br><br>~~Update an existing Planner task.~~ |
| Update task details | Update the task details for an existing task. |
| Update task details [DEPRECATED] | This action has been deprecated. Please use [Update task details](/en-us/connectors/planner/#update-task-details) instead.<br><br>~~Update the task details for an existing task.~~ |

### Add assignees to a task

- Operation ID:
    - AssignUsers

Add assignees to an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |
| Assigned User Ids | assignments | True | string | Semi-colon seperated ids or email addresses of users who should be assigned to this task. |

#### Returns

- Body
    - GetTask_Response_V2

### Create a bucket

- Operation ID:
    - CreateBucket\_V2

Create a bucket in Planner for the specified plan and group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name | name | True | string | Name of the bucket |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | planId | True | string | The plan for the new bucket. |

#### Returns

- Body
    - CreateBucket_Response

### Create a bucket [DEPRECATED]

- Operation ID:
    - CreateBucket

This action has been deprecated. Please use [Create a bucket](/en-us/connectors/planner/#create-a-bucket) instead.

~~Create a bucket in Planner.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name | name | True | string | Name of the bucket |
| Plan Id | planId | True | string | The plan for the new bucket |

#### Returns

- Body
    - CreateBucket_Response

### Create a task

- Operation ID:
    - CreateTask\_V3

Create a new task in Planner.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | planId | True | string | The plan for the new task. |
| Title | title | True | string | The title of the new task (maximum of 255 chars). |
| Bucket Id | bucketId |  | string | The bucket to place this task in. |
| Start Date Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Due Date Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Assigned User Ids | assignments |  | string | Semi-colon separated ids or email addresses of users to assign this task to. |
| Pink | category1 |  | boolean | True if the task has the Pink category. |
| Red | category2 |  | boolean | True if the task has the Red category. |
| Yellow | category3 |  | boolean | True if the task has the Yellow category. |
| Green | category4 |  | boolean | True if the task has the Green category. |
| Blue | category5 |  | boolean | True if the task has the Blue category. |
| Purple | category6 |  | boolean | True if the task has the Purple category. |
| Bronze | category7 |  | boolean | True if the task has the Bronze category. |
| Lime | category8 |  | boolean | True if the task has the Lime category. |
| Aqua | category9 |  | boolean | True if the task has the Aqua category. |
| Gray | category10 |  | boolean | True if the task has the Gray category. |
| Silver | category11 |  | boolean | True if the task has the Silver category. |
| Brown | category12 |  | boolean | True if the task has the Brown category. |
| Cranberry | category13 |  | boolean | True if the task has the Cranberry category. |
| Orange | category14 |  | boolean | True if the task has the Orange category. |
| Peach | category15 |  | boolean | True if the task has the Peach category. |
| Marigold | category16 |  | boolean | True if the task has the Marigold category. |
| Light green | category17 |  | boolean | True if the task has the Light green category. |
| Dark green | category18 |  | boolean | True if the task has the Dark green category. |
| Teal | category19 |  | boolean | True if the task has the Teal category. |
| Light blue | category20 |  | boolean | True if the task has the Light blue category. |
| Dark blue | category21 |  | boolean | True if the task has the Dark blue category. |
| Lavender | category22 |  | boolean | True if the task has the Lavender category. |
| Plum | category23 |  | boolean | True if the task has the Plum category. |
| Light gray | category24 |  | boolean | True if the task has the Light gray category. |
| Dark gray | category25 |  | boolean | True if the task has the Dark gray category. |

#### Returns

- Body
    - GetTask_Response_V2

### Create a task (Preview)

- Operation ID:
    - CreateTask\_V4

Create a new task in Planner.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | planId | True | string | The plan for the new task. |
| Title | title | True | string | The title of the new task (maximum of 255 chars). |
| Bucket Id | bucketId |  | string | The bucket to place this task in. |
| Start Date Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Due Date Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Assigned User Ids | assignments |  | string | Semi-colon separated ids or email addresses of users to assign this task to. |
| Pink | category1 |  | boolean | True if the task has the Pink category. |
| Red | category2 |  | boolean | True if the task has the Red category. |
| Yellow | category3 |  | boolean | True if the task has the Yellow category. |
| Green | category4 |  | boolean | True if the task has the Green category. |
| Blue | category5 |  | boolean | True if the task has the Blue category. |
| Purple | category6 |  | boolean | True if the task has the Purple category. |
| Bronze | category7 |  | boolean | True if the task has the Bronze category. |
| Lime | category8 |  | boolean | True if the task has the Lime category. |
| Aqua | category9 |  | boolean | True if the task has the Aqua category. |
| Gray | category10 |  | boolean | True if the task has the Gray category. |
| Silver | category11 |  | boolean | True if the task has the Silver category. |
| Brown | category12 |  | boolean | True if the task has the Brown category. |
| Cranberry | category13 |  | boolean | True if the task has the Cranberry category. |
| Orange | category14 |  | boolean | True if the task has the Orange category. |
| Peach | category15 |  | boolean | True if the task has the Peach category. |
| Marigold | category16 |  | boolean | True if the task has the Marigold category. |
| Light green | category17 |  | boolean | True if the task has the Light green category. |
| Dark green | category18 |  | boolean | True if the task has the Dark green category. |
| Teal | category19 |  | boolean | True if the task has the Teal category. |
| Light blue | category20 |  | boolean | True if the task has the Light blue category. |
| Dark blue | category21 |  | boolean | True if the task has the Dark blue category. |
| Lavender | category22 |  | boolean | True if the task has the Lavender category. |
| Plum | category23 |  | boolean | True if the task has the Plum category. |
| Light gray | category24 |  | boolean | True if the task has the Light gray category. |
| Dark gray | category25 |  | boolean | True if the task has the Dark gray category. |
| Priority | priority |  | integer | Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority). Currently, Planner interprets values 0 and 1 as "urgent", 2 and 3 and 4 as "important", 5, 6, and 7 as "medium", and 8, 9, and 10 as "low". Currently, Planner sets the value 1 for "urgent", 3 for "important", 5 for "medium", and 9 for "low". |

#### Returns

- Body
    - GetTask_Response_V3

### Create a task [DEPRECATED]

- Operation ID:
    - CreateTask\_V2

This action has been deprecated. Please use [Create a task](/en-us/connectors/planner/#create-a-task) instead.

~~Create a new task in Planner.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | planId | True | string | The plan for the new task. |
| Title | title | True | string | The title of the new task. |
| Bucket Id | bucketId |  | string | The bucket to place this task in. |
| Start Date Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Due Date Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Assigned User Ids | assignments |  | string | Semi-colon seperated ids or email addresses of users to assign this task to. |

#### Returns

- Body
    - GetTask_Response_V2

### Create a task [DEPRECATED]

- Operation ID:
    - CreateTask

This action has been deprecated. Please use [Create a task](/en-us/connectors/planner/#create-a-task) instead.

~~Create a new task in Planner.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | planId | True | string | The plan for the new task. |
| Title | title | True | string | The title of the new task. |
| Bucket Id | bucketId |  | string | The bucket to place this task in. |
| Start Date Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Due Date Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Assigned User Id | assignments |  | string | The id or email address of the user to assign this task to. |

#### Returns

- Body
    - GetTask_Response

### Delete a task (Preview)

- Operation ID:
    - DeleteTask

Deletes an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to delete. |

### Get a task

- Operation ID:
    - GetTask\_V2

Get an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |

#### Returns

- Body
    - GetTask_Response_V2

### Get a task [DEPRECATED]

- Operation ID:
    - GetTask

This action has been deprecated. Please use [Get a task](/en-us/connectors/planner/#get-a-task) instead.

~~Get an existing Planner task.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifer of the task. |

#### Returns

- Body
    - GetTask_Response

### Get plan details (Preview)

- Operation ID:
    - GetPlanDetails

Get plan details where the task belongs to

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique plan id. |

#### Returns

- Body
    - GetPlanDetails_Response

### Get task details

- Operation ID:
    - GetTaskDetails\_V2

Get the task details for an existing task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |

#### Returns

- Body
    - GetTaskDetails_Response

### Get task details [DEPRECATED]

- Operation ID:
    - GetTaskDetails

This action has been deprecated. Please use [Get task details](/en-us/connectors/planner/#get-task-details) instead.

~~Get the task details for an existing task.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifer of the task. |

#### Returns

- Body
    - GetTaskDetails_Response

### List buckets

- Operation ID:
    - ListBuckets\_V3

List the buckets in a plan.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListBuckets_Response

### List buckets [DEPRECATED]

- Operation ID:
    - ListBuckets\_V2

This action has been deprecated. Please use [List buckets](/en-us/connectors/planner/#list-buckets) instead.

~~List the buckets in a plan.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListBuckets_Response

### List buckets [DEPRECATED]

- Operation ID:
    - ListBuckets

This action has been deprecated. Please use [List buckets](/en-us/connectors/planner/#list-buckets) instead.

~~List the buckets in a plan.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListBuckets_Response

### List my plans [DEPRECATED]

- Operation ID:
    - ListMyPlans\_V2

List the plans the user has subscribed to.

#### Returns

- Body
    - ListMyPlans_Response

### List my plans [DEPRECATED]

- Operation ID:
    - ListMyPlans

List the plans the user has subscribed to.

#### Returns

- Body
    - ListMyPlans_Response

### List my tasks

- Operation ID:
    - ListMyTasks\_V2

List the tasks assigned to me.

#### Returns

- Body
    - ListTasks_Response_V2

### List my tasks [DEPRECATED]

- Operation ID:
    - ListMyTasks

This action has been deprecated. Please use [List my tasks](/en-us/connectors/planner/#list-my-tasks) instead.

~~List the tasks assigned to me.~~

#### Returns

- Body
    - ListTasks_Response

### List plans for a group

- Operation ID:
    - ListGroupPlans

List plans owned by the group specified.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | Id of the group. |

#### Returns

- Body
    - ListMyPlans_Response

### List tasks

- Operation ID:
    - ListTasks\_V3

List the tasks in a plan.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### List tasks [DEPRECATED]

- Operation ID:
    - ListTasks

This action has been deprecated. Please use [List tasks](/en-us/connectors/planner/#list-tasks) instead.

~~List the tasks in a plan.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response

### List tasks [DEPRECATED]

- Operation ID:
    - ListTasks\_V2

This action has been deprecated. Please use [List tasks](/en-us/connectors/planner/#list-tasks) instead.

~~List the tasks in a plan.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### Remove assignees from a task

- Operation ID:
    - UnassignUsers

Remove assignees from an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |
| Remove assigned users | assignments | True | string | Semi-colon seperated ids or email addresses of users who should be unassigned to this task. |

#### Returns

- Body
    - GetTask_Response_V2

### Update a task

- Operation ID:
    - UpdateTask\_V2

Update an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |
| Title | title |  | string | The title of the plan. |
| Due Date-Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Start Date-Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Progress | percentComplete |  | string | The progress of the task. |
| Add assigned users | assignments |  | string | Semi-colon seperated ids or email addresses of users who should be assigned to this task. |
| Remove assigned users | unassignedUsers |  | string | Semi-colon seperated ids or email addresses of users who should be unassigned from this task. |

#### Returns

- Body
    - GetTask_Response_V2

### Update a task (V2) (Preview)

- Operation ID:
    - UpdateTask\_V3

Update an existing Planner task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |
| Title | title |  | string | The title of the plan (maximum of 255 chars). |
| Due Date-Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Start Date-Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Percent Complete | percentComplete |  | integer | The completion percentage of the task. |
| Bucket Id | bucketId |  | string | The bucket to place this task in. |
| Pink | category1 |  | boolean | True if the task has the Pink category. |
| Red | category2 |  | boolean | True if the task has the Red category. |
| Yellow | category3 |  | boolean | True if the task has the Yellow category. |
| Green | category4 |  | boolean | True if the task has the Green category. |
| Blue | category5 |  | boolean | True if the task has the Blue category. |
| Purple | category6 |  | boolean | True if the task has the Purple category. |
| Bronze | category7 |  | boolean | True if the task has the Bronze category. |
| Lime | category8 |  | boolean | True if the task has the Lime category. |
| Aqua | category9 |  | boolean | True if the task has the Aqua category. |
| Gray | category10 |  | boolean | True if the task has the Gray category. |
| Silver | category11 |  | boolean | True if the task has the Silver category. |
| Brown | category12 |  | boolean | True if the task has the Brown category. |
| Cranberry | category13 |  | boolean | True if the task has the Cranberry category. |
| Orange | category14 |  | boolean | True if the task has the Orange category. |
| Peach | category15 |  | boolean | True if the task has the Peach category. |
| Marigold | category16 |  | boolean | True if the task has the Marigold category. |
| Light green | category17 |  | boolean | True if the task has the Light green category. |
| Dark green | category18 |  | boolean | True if the task has the Dark green category. |
| Teal | category19 |  | boolean | True if the task has the Teal category. |
| Light blue | category20 |  | boolean | True if the task has the Light blue category. |
| Dark blue | category21 |  | boolean | True if the task has the Dark blue category. |
| Lavender | category22 |  | boolean | True if the task has the Lavender category. |
| Plum | category23 |  | boolean | True if the task has the Plum category. |
| Light gray | category24 |  | boolean | True if the task has the Light gray category. |
| Dark gray | category25 |  | boolean | True if the task has the Dark gray category. |

#### Returns

- Body
    - GetTask_Response_V2

### Update a task [DEPRECATED]

- Operation ID:
    - UpdateTask

This action has been deprecated. Please use [Update a task (V2)](/en-us/connectors/planner/#update-a-task-%28v2%29) instead.

~~Update an existing Planner task.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the tast to update. |
| Title | title |  | string | The title of the plan. |
| Due Date-Time | dueDateTime |  | date-time | The datetime the task is due (Ex. '2018-04-13T00:42:19.284Z'). |
| Start Date-Time | startDateTime |  | date-time | The datetime the task starts (Ex. '2018-04-13T00:42:19.284Z'). |
| Progress | percentComplete |  | string | The progress of the task. |
| Assisgned User Id | assignments |  | string | The id or email address of the user to assign this task to. |

#### Returns

- Body
    - GetTask_Response

### Update task details

- Operation ID:
    - UpdateTaskDetails\_V2

Update the task details for an existing task.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifier of the task to update. |
| Description | description |  | string | The description of the task. |
| Alias | alias |  | string | A name alias to describe the reference. |
| Resource link | resourceLink | True | uri | A valid URL based on the HTTP/HTTPS protocols. |
| Type of the reference | type |  |  | Used to describe the type of the reference. |
| Id | id | True | string | A number representing the checklist item. |
| Title | title | True | string | The name of the checklist item. |
| Is Checked | isChecked | True | boolean | Whether or not the item is checked. |

#### Returns

- Body
    - GetTaskDetails_Response

### Update task details [DEPRECATED]

- Operation ID:
    - UpdateTaskDetails

This action has been deprecated. Please use [Update task details](/en-us/connectors/planner/#update-task-details) instead.

~~Update the task details for an existing task.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Task Id | id | True | string | The unique identifer of the task. |
| Description | description |  | string | The description of the task. |
| Alias | alias |  | string | A name alias to describe the reference. |
| Resource link | resourceLink | True | uri | A valid URL based on the HTTP/HTTPS protocols. |
| Type of the reference | type |  |  | Used to describe the type of the reference. |
| Id | id | True | string | A number representing the checklist item. |
| Title | title | True | string | The name of the checklist item. |
| Is Checked | isChecked | True | boolean | Whether or not the item is checked. |

#### Returns

- Body
    - GetTaskDetails_Response

## Triggers

| When a new task is created | This operation triggers when a new task is created. |
| --- | --- |
| When a new task is created [DEPRECATED] | This action has been deprecated. Please use [When a new task is created](/en-us/connectors/planner/#when-a-new-task-is-created) instead.<br><br>~~This operation triggers when a new task is created.~~ |
| When a new task is created [DEPRECATED] | This action has been deprecated. Please use [When a new task is created](/en-us/connectors/planner/#when-a-new-task-is-created) instead.<br><br>~~This operation triggers when a new task is created.~~ |
| When a task is assigned to me | This operation triggers when a task is assigned to me. |
| When a task is assigned to me [DEPRECATED] | This action has been deprecated. Please use [When a task is assigned to me](/en-us/connectors/planner/#when-a-task-is-assigned-to-me) instead.<br><br>~~This operation triggers when a task is assigned to me.~~ |
| When a task is completed | This operation triggers when a task is completed. |
| When a task is completed [DEPRECATED] | This action has been deprecated. Please use [When a task is completed](/en-us/connectors/planner/#when-a-task-is-completed) instead.<br><br>~~This operation triggers when a task is completed.~~ |
| When a task is completed [DEPRECATED] | This action has been deprecated. Please use [When a task is completed](/en-us/connectors/planner/#when-a-task-is-completed) instead.<br><br>~~This operation triggers when a task is completed.~~ |

### When a new task is created

- Operation ID:
    - OnNewTask\_V3

This operation triggers when a new task is created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### When a new task is created [DEPRECATED]

- Operation ID:
    - OnNewTask\_V2

This action has been deprecated. Please use [When a new task is created](/en-us/connectors/planner/#when-a-new-task-is-created) instead.

~~This operation triggers when a new task is created.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### When a new task is created [DEPRECATED]

- Operation ID:
    - OnNewTask

This action has been deprecated. Please use [When a new task is created](/en-us/connectors/planner/#when-a-new-task-is-created) instead.

~~This operation triggers when a new task is created.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response

### When a task is assigned to me

- Operation ID:
    - OnTaskAssignedToMe\_V2

This operation triggers when a task is assigned to me.

#### Returns

- Body
    - ListTasks_Response_V2

### When a task is assigned to me [DEPRECATED]

- Operation ID:
    - OnTaskAssignedToMe

This action has been deprecated. Please use [When a task is assigned to me](/en-us/connectors/planner/#when-a-task-is-assigned-to-me) instead.

~~This operation triggers when a task is assigned to me.~~

#### Returns

- Body
    - ListTasks_Response

### When a task is completed

- Operation ID:
    - OnCompleteTask\_V3

This operation triggers when a task is completed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group to retrieve the plan. |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### When a task is completed [DEPRECATED]

- Operation ID:
    - OnCompleteTask\_V2

This action has been deprecated. Please use [When a task is completed](/en-us/connectors/planner/#when-a-task-is-completed) instead.

~~This operation triggers when a task is completed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response_V2

### When a task is completed [DEPRECATED]

- Operation ID:
    - OnCompleteTask

This action has been deprecated. Please use [When a task is completed](/en-us/connectors/planner/#when-a-task-is-completed) instead.

~~This operation triggers when a task is completed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Plan Id | id | True | string | The unique identifier of the plan. |

#### Returns

- Body
    - ListTasks_Response

## Definitions

### ListBuckets\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Name | value.name | string | The name of the bucket. |
| Plan Id | value.planId | string | The id of the plan this bucket belongs to. |
| Id | value.id | string | The id of the bucket. |

### ListMyPlans\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Title | value.title | string | The title of the Plan. |
| Id | value.id | string | The id of the plan. |

### GetTaskDetails\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Description | description | string | The description of the task. |
| Id | id | string | The id of the task. |
| References | references | array of object | The collection of references on the task |
| Resource link | references.resourceLink | uri | A valid URL based on the HTTP/HTTPS protocols. |
| Alias | references.value.alias | string | A name alias to describe the reference. |
| Type of the reference | references.value.type |  | Used to describe the type of the reference. |
| Checklist | checklist | array of object | The collection of checklist items on the task. |
| Id | checklist.id | string | A number representing the checklist item. |
| Title | checklist.value.title | string | The name of the checklist item. |
| Is Checked | checklist.value.isChecked | boolean | Whether or not the item is checked. |

### CreateBucket\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | Name of the bucket |
| Plan Id | planId | string | Plan ID to which the bucket belongs |
| Order hint | orderHint | string | Hint used to order items of this type in a list view |
| Id | id | string | ID of the bucket |

### GetTask\_Response\_V2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | createdBy.user.displayName | string | The display name of the user who created this task. |
| Id | createdBy.user.id | string | The id of the user who created this task. |
| Plan Id | planId | string | The id of the plan this task belongs to. |
| Bucket Id | bucketId | string | The id of the bucket this task belongs to. |
| Title | title | string | The title of the task. |
| Percent Complete | percentComplete | integer | The completion percentage of the task. |
| Start Date Time | startDateTime | date-time | The start datetime of the task. |
| Created Date Time | createdDateTime | date-time | The datetime the task was created. |
| Due Date Time | dueDateTime | date-time | The datetime the task is due. |
| Has Description | hasDescription | boolean | Set to true if the task has a description. |
| Completed Date Time | completedDateTime | date-time | The datetime the task was completed. |
| Reference Count | referenceCount | integer | The number of external references that exist on the task. |
| Id | id | string | The id of the task. |
| appliedCategories | appliedCategories | AppliedCategories | The categories to which the task has been applied. |
| assignments | \_assignments | array of object |  |
| Assigned To User Id | \_assignments.userId | string | The id of the user to whom this task was assigned to. |
| Assigned By User Id | \_assignments.value.assignedBy.user.id | string | The id of the user who assigned this task. |
| Assigned Date Time | \_assignments.value.assignedDateTime | date-time | The datetime the task was assigned. |
| Order Hint | \_assignments.value.orderHint | string | Order Hint |

### GetTask\_Response\_V3

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | createdBy.user.displayName | string | The display name of the user who created this task. |
| Id | createdBy.user.id | string | The id of the user who created this task. |
| Plan Id | planId | string | The id of the plan this task belongs to. |
| Bucket Id | bucketId | string | The id of the bucket this task belongs to. |
| Title | title | string | The title of the task. |
| Percent Complete | percentComplete | integer | The completion percentage of the task. |
| Start Date Time | startDateTime | date-time | The start datetime of the task. |
| Created Date Time | createdDateTime | date-time | The datetime the task was created. |
| Due Date Time | dueDateTime | date-time | The datetime the task is due. |
| Has Description | hasDescription | boolean | Set to true if the task has a description. |
| Completed Date Time | completedDateTime | date-time | The datetime the task was completed. |
| Reference Count | referenceCount | integer | The number of external references that exist on the task. |
| Id | id | string | The id of the task. |
| appliedCategories | appliedCategories | AppliedCategories | The categories to which the task has been applied. |
| Priority | priority | integer | Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority). Currently, Planner interprets values 0 and 1 as "urgent", 2 and 3 and 4 as "important", 5, 6, and 7 as "medium", and 8, 9, and 10 as "low". Currently, Planner sets the value 1 for "urgent", 3 for "important", 5 for "medium", and 9 for "low". |
| assignments | \_assignments | array of object |  |
| Assigned To User Id | \_assignments.userId | string | The id of the user to whom this task was assigned to. |
| Assigned By User Id | \_assignments.value.assignedBy.user.id | string | The id of the user who assigned this task. |
| Assigned Date Time | \_assignments.value.assignedDateTime | date-time | The datetime the task was assigned. |
| Order Hint | \_assignments.value.orderHint | string | Order Hint |

### ListTasks\_Response\_V2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GetTask\_Response\_V2 |  |

### AppliedCategories

The categories to which the task has been applied.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Pink | category1 | boolean | True if the task has the Pink category. |
| Red | category2 | boolean | True if the task has the Red category. |
| Yellow | category3 | boolean | True if the task has the Yellow category. |
| Green | category4 | boolean | True if the task has the Green category. |
| Blue | category5 | boolean | True if the task has the Blue category. |
| Purple | category6 | boolean | True if the task has the Purple category. |
| Bronze | category7 | boolean | True if the task has the Bronze category. |
| Lime | category8 | boolean | True if the task has the Lime category. |
| Aqua | category9 | boolean | True if the task has the Aqua category. |
| Gray | category10 | boolean | True if the task has the Gray category. |
| Silver | category11 | boolean | True if the task has the Silver category. |
| Brown | category12 | boolean | True if the task has the Brown category. |
| Cranberry | category13 | boolean | True if the task has the Cranberry category. |
| Orange | category14 | boolean | True if the task has the Orange category. |
| Peach | category15 | boolean | True if the task has the Peach category. |
| Marigold | category16 | boolean | True if the task has the Marigold category. |
| Light green | category17 | boolean | True if the task has the Light green category. |
| Dark green | category18 | boolean | True if the task has the Dark green category. |
| Teal | category19 | boolean | True if the task has the Teal category. |
| Light blue | category20 | boolean | True if the task has the Light blue category. |
| Dark blue | category21 | boolean | True if the task has the Dark blue category. |
| Lavender | category22 | boolean | True if the task has the Lavender category. |
| Plum | category23 | boolean | True if the task has the Plum category. |
| Light gray | category24 | boolean | True if the task has the Light gray category. |
| Dark gray | category25 | boolean | True if the task has the Dark gray category. |

### GetTask\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Display Name | createdBy.user.displayName | string | The display name of the user who created this task. |
| Id | createdBy.user.id | string | The id of the user who created this task. |
| Plan Id | planId | string | The id of the plan this task belongs to. |
| Bucket Id | bucketId | string | The id of the bucket this task belongs to. |
| Title | title | string | The title of the task. |
| Percent Complete | percentComplete | integer | The completion percentage of the task. |
| Start Date Time | startDateTime | date-time | The start datetime of the task. |
| Created Date Time | createdDateTime | date-time | The datetime the task was created. |
| Due Date Time | dueDateTime | date-time | The datetime the task is due. |
| Has Description | hasDescription | boolean | Set to true if the task has a description. |
| Completed Date Time | completedDateTime | date-time | The datetime the task was completed. |
| Reference Count | referenceCount | integer | The number of external references that exist on the task. |
| Id | id | string | The id of the task. |

### ListTasks\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Created by Display Name | value.createdBy.user.displayName | string | The display name of the user who created this task. |
| Id | value.createdBy.user.id | string | The id of the user who created this task. |
| Completed By Display Name | value.completedBy.user.displayName | string | displayName |
| id | value.completedBy.user.id | string | id |
| Plan Id | value.planId | string | The id of the plan this task belongs to. |
| Bucket Id | value.bucketId | string | The id of the bucket this task belongs to. |
| Title | value.title | string | The title of the task. |
| Percent Complete | value.percentComplete | integer | The completion percentage of the task. |
| Start Date Time | value.startDateTime | date-time | The start datetime of the task. |
| Created Date Time | value.createdDateTime | date-time | The datetime the task was created. |
| Due Date Time | value.dueDateTime | date-time | The datetime the task is due. |
| Has Description | value.hasDescription | boolean | Set to True if the task has a description. |
| Completed Date Time | value.completedDateTime | date-time | The date time that the task was completed. |
| Reference Count | value.referenceCount | integer | The number of external references that exist on the task. |
| Id | value.id | string | The id of the task. |

### GetPlanDetails\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Category 1 | categoryDescriptions.category1 | string | The category 1. |
| Category 2 | categoryDescriptions.category2 | string | The category 2. |
| Category 3 | categoryDescriptions.category3 | string | The category 3. |
| Category 4 | categoryDescriptions.category4 | string | The category 4. |
| Category 5 | categoryDescriptions.category5 | string | The category 5. |
| Category 6 | categoryDescriptions.category6 | string | The category 6. |
| Category 7 | categoryDescriptions.category7 | string | The category 7. |
| Category 8 | categoryDescriptions.category8 | string | The category 8. |
| Category 9 | categoryDescriptions.category9 | string | The category 9. |
| Category 10 | categoryDescriptions.category10 | string | The category 10. |
| Category 11 | categoryDescriptions.category11 | string | The category 11. |
| Category 12 | categoryDescriptions.category12 | string | The category 12. |
| Category 13 | categoryDescriptions.category13 | string | The category 13. |
| Category 14 | categoryDescriptions.category14 | string | The category 14. |
| Category 15 | categoryDescriptions.category15 | string | The category 15. |
| Category 16 | categoryDescriptions.category16 | string | The category 16. |
| Category 17 | categoryDescriptions.category17 | string | The category 17. |
| Category 18 | categoryDescriptions.category18 | string | The category 18. |
| Category 19 | categoryDescriptions.category19 | string | The category 19. |
| Category 20 | categoryDescriptions.category20 | string | The category 20. |
| Category 21 | categoryDescriptions.category21 | string | The category 21. |
| Category 22 | categoryDescriptions.category22 | string | The category 22. |
| Category 23 | categoryDescriptions.category23 | string | The category 23. |
| Category 24 | categoryDescriptions.category24 | string | The category 24. |
| Category 25 | categoryDescriptions.category25 | string | The category 25. |
| Id | id | string | The ID of the plan details |