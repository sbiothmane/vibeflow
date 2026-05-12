---
layout: Reference
title: Azure DevOps - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/visualstudioteamservices/
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
document_id: 1992475b-648a-9ebc-f165-abef6b5180a4
document_version_independent_id: da0b9096-309c-5d3f-11c2-0dba2c029c39
updated_at: 2026-04-28T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/VisualStudioTeamServices/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/38b2850b21859cf1397a730fa15d49904b4a64ed/docs/VisualStudioTeamServices/index.yml
git_commit_id: 38b2850b21859cf1397a730fa15d49904b4a64ed
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: visualstudioteamservices/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/VisualStudioTeamServices/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/63959238-cb90-4871-a33d-4a5519097e47
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bd2b3fa-c186-4b92-a3c8-09f22a249d37
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/78d87f42-5582-4a6b-90be-7db2f12b34e6
- https://authoring-docs-microsoft.poolparty.biz/devrel/7eba7926-b7b2-4a7a-bf89-e6ac53b3e7f6
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: cfe1eb13-fd6c-4c6c-4cbe-8226fa2c8349
---

# Azure DevOps

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/VisualStudioTeamServices/icon.png)
Azure DevOps provides services for teams to share code, track work, and ship software - for any language, all in a single package. It's the perfect complement to your IDE.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://azure.microsoft.com/en-us/support/?icid=devops |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | [https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops](/en-us/azure/devops/?view=azure-devops) |
| Privacy policy | https://privacy.microsoft.com |
| Categories | IT Operations |

To use this integration, you'll need access to an Azure DevOps account with API access enabled. To make a connection, select **Sign In**. You are then prompted to provide your Azure DevOps Services account. Follow the remainder of the screens to create a connection.

When using the connection, if you're not seeing the list of projects you're expecting please check the account you created the connection with and try again. More details can be found on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-Flow.microsoftflow).

You're now ready to start using this integration.

## Sending attachments

You can create file attachments using Send an HTTP request to Azure DevOps action, and then following these steps:

1. Convert file content to a Base64 string and put it in "Body" parameter.
2. Set "Body is Base64" parameter to Yes.

## Creating test plans

Before creating a Test Plan using Create a work item action you must first create a Test Suite. You can use the same Create a work item action for creating Test Suites and then create a Test Plan with a link to the Test Suite.

Your simplest option is to invoke [Test Plans - Create API](/en-us/rest/api/azure/devops/testplan/test-plans/create) directly using Send an HTTP request to Azure DevOps action. The API automatically creates the associated Test Suite.

## Other Fields parameter

Create a work item and Update a work item actions have support of `Other Fields` parameter. These fields give additional flexibility when updating work items. Key-value pairs are transformed to the following JSON:

```
{
  "op": "add",
  "path": "/fields/<key>",
  "value": <value>
}
```

Note that `op` is a constant, and `<key>` is expected to be a valid field name under DevOps `/fields` enumeration.

Here are a few usage examples. You can fine more examples in [Work Items - Update REST API](/en-us/rest/api/azure/devops/wit/wit/work-items/update#examples).

1. History update `key` = System.History `value` = Moving to the right area path`
2. Move work items: `key` = System.TeamProject `value` = Fabrikam-Scrum

## Known Issues and Limitations

The following list provides known limitations of using the Azure DevOps connector.

1. Trigger When a work item is updated will be skipped when new/existing links were added/deleted to work item.
2. Action Get work item details and work item based triggers can miss some fields (like System.AttachedFileCount) in a response since this is a limitation of Azure DevOps REST API. To workaround this issue, you can do either of the following:

    - Use Send an HTTP request to Azure DevOps with [Get Work Item](/en-us/rest/api/azure/devops/wit/work-items/get-work-item) endpoint to get specific fields
    - Use Get query results with a query that returns the required fields
3. Action Send an HTTP request to Azure DevOps has a limited set of scopes which control what resources can be accessed by the action and what operations the action is allowed to perform on those resources.

    Scopes:

    - vso.agentpools\_manage
    - vso.build\_execute
    - vso.chat\_manage
    - vso.code\_manage
    - vso.code\_status
    - vso.connected\_server
    - vso.dashboards\_manage
    - vso.entitlements
    - vso.extension.data\_write
    - vso.extension\_manage
    - vso.identity
    - vso.loadtest\_write
    - vso.packaging\_manage
    - vso.project\_manage
    - vso.release\_manage
    - vso.test\_write
    - vso.work\_write
4. Azure DevOps connector is designed to work on behalf of current user credentials only. There is no possibility to change the connection or to switch between accounts.
5. Please note that password changes under the Azure DevOps account will not affect the existing connection.
6. Azure DevOps Personal Access Tokens are not supported for authentication with the connector.
7. Action Create a work item has limitation for Repro Steps parameter - an image larger than 30 KB could be displayed incorrectly in the created item. Image larger than 500Kb could be removed from request. The recommended image size should be less than 30 KB.
8. Action Create a work item very rarely could return the 404 response code. Most often this happens for the following reason: immediately after an item is created all its fields are being requested. The request can be sent to the copied database. The changes synchronized almost real-time, but sometimes it takes a few seconds. Because of this, the GET request may return an empty result which represents as a 404 status code in a response. To avoid this exception, you can use the "Return all fields" flag and set it to the 'No' value.
9. When working across multiple directories, only organizations from the home tenant of the signed-in account are returned. Switching directories from the [Azure DevOps profile page](https://aex.dev.azure.com/me) does not affect the organizations available. To access organizations in another tenant, create the connection using credentials for an account that belongs to that tenant.

Note

In the Action Create a work item

- The field name must meet the criteria mentioned in [Azure DevOps documentation.](/en-us/azure/devops/boards/work-items/work-item-fields?toc=/azure/devops/reference/toc.json&amp;view=azure-devops#field-names)

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Log in with Azure DevOps Credentials | Log in with Azure DevOps Credentials | Azure Government and US Government (GCC) only | Not shareable |
| Log in with Microsoft Entra ID | Log in with Microsoft Entra ID | PRODUCTION only | Not shareable |
| Service principal authentication | Use your Microsoft Entra ID application for service principal authentication | All regions | Shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

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

### Log in with Azure DevOps Credentials

Auth ID: ADO3pAuthForGCC

Applicable: Azure Government and US Government (GCC) only

Log in with Azure DevOps Credentials

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Log in with Microsoft Entra ID

Auth ID: EntraOAuth

Applicable: PRODUCTION only

Log in with Microsoft Entra ID

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal authentication

Auth ID: OauthSP

Applicable: All regions

Use your Microsoft Entra ID application for service principal authentication

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string |  | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application | True |
| Client secret | securestring |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 300 | 60 seconds |

## Actions

| Add work item link (Preview) | Adds a link to a work item. |
| --- | --- |
| Create a new release | Create a release, based on an existing release definition. |
| Create a work item | Create a new work item with the provided attributes. |
| Create work item comment (Preview) | Adds a comment to a work item. |
| Delete work item comment (Preview) | Delete a comment on a work item. |
| Delete work item link (Preview) | Deletes a link from a work item. |
| Get a User Profile | Gets a user profile. |
| Get build (Preview) | Retrieves a build by its identifier. |
| Get build timeline (Preview) | Retrieves the timeline for a specific build. |
| Get query results | Retrieves the result of a work item query. |
| Get query results [DEPRECATED] | This action has been deprecated. Please use [Get query results](/en-us/connectors/visualstudioteamservices/#get-query-results) instead.<br><br>~~Retrieves the result of a work item query.~~ |
| Get work item attachment (Preview) | Downloads the content of a work item attachment. |
| Get work item children | Get a list of children (max size 1000) of a single work item. |
| Get work item comments (Preview) | Retrieves comments for a work item. |
| Get work item details | Get the details of a single work item. |
| Get work item details (V2) (Preview) | Get the details of a single work item with optional field selection and expand options. |
| List build requesters (Preview) | Retrieves unique project members who can be used to filter builds by the requested for identity. |
| List builds (Preview) | Retrieves builds for the specified project with optional filters. |
| List Git branches (Preview) | Retrieves the list of Git branches available within the project's repositories. |
| List Git repositories | Retrieves the list of Git repositories in a project. |
| List iterations | Retrieves the list of iterations for a project. |
| List Organizations | Retrieves the list of Organizations the user is a member of. |
| List pipeline runs | Gets top 10000 runs for a particular pipeline |
| List pipelines | Retrieves the list of pipelines in a project. |
| List projects | Retrieves the list of projects in an Organization. |
| List queries within folder | Retrieves the list of work item queries within a folder for a given project. |
| List release definitions | Retrieves the list of release definitions associated with a project. |
| List root level queries | Retrieves the list of root-level work item queries in a project. |
| List work item fields (Preview) | Retrieves the work item fields available within the specified Azure DevOps Organization or project. |
| List work item types | Retrieves the list of Work Item Types accessible in a given Azure DevOps project. |
| List work items | Returns a list of work items. |
| Queue a new build | Create a build, based on an existing build definition, and add it to the build queue. |
| Search for work items | Provides a set of results for the search text. |
| Send an HTTP request to Azure DevOps | Construct an Azure DevOps REST API request to invoke. Please refer to the following link for all available endpoints: [https://docs.microsoft.com/rest/api/azure/devops](/en-us/rest/api/azure/devops) |
| Update a work item | Update an existing work item by id. |
| Update work item comment (Preview) | Updates a comment on a work item. |

### Add work item link (Preview)

- Operation ID:
    - AddWorkItemLinkAsync

Adds a link to a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | Project ID or project name |
| Work Item Type | type | True | string | The work item type of the work item. |
| Work Item Id | workItemId | True | integer | Id of a work item. |
| Link Type | linkType | True | string | Relation type for the link. Defaults to 'System.LinkTypes.Related' when omitted. |
| Target URL | targetUrl | True | string | Absolute URL of the link target. Must be an absolute URI and match the expectations for the selected Link Type. |
| Comment | comment |  | string | Optional comment stored alongside the link. |

#### Returns

 The outputs of this operation are dynamic. 

### Create a new release

- Operation ID:
    - CreateRelease

Create a release, based on an existing release definition.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Release Definition Id | releaseDefId | True | string | The identifier of the release definition to use. |
| Description | Description |  | string | The description of the release start metadata. |
| Is Draft | IsDraft |  | boolean | Specifies whether the release is a draft. |
| Reason | Reason |  | string | The reason for the release start metadata. |
| Name | Name | True | string | The name of the configuration variable. |
| Value | Value |  | string | The value of the configuration variable. |

#### Returns

Release

- Body
    - Release

### Create a work item

- Operation ID:
    - CreateWorkItem

Create a new work item with the provided attributes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Type | type | True | string | Type of this work item |
| Return all fields | shouldReturnAllFields |  | boolean | When setting the value to 'No', only the work item ID will be returned. If the value is 'Yes', all fields of the created Item along with the ID will be returned. The default value is 'Yes' |
| Work Item Details | workItem | True | dynamic | Information to include in the new work item |

#### Returns

 The outputs of this operation are dynamic. 

### Create work item comment (Preview)

- Operation ID:
    - CreateWorkItemCommentAsync

Adds a comment to a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | Project ID or project name |
| Work Item Type | type |  | string | The work item type to generate schema for. |
| Work Item Id | workItemId | True | integer | Id of a work item. |
| Comment Format | format |  | string | Format of a work item comment (Markdown or Html). |
| Comment Text | text | True | string | The text of the comment. |

#### Returns

Work Item Comment

- Body
    - WorkItemComment

### Delete work item comment (Preview)

- Operation ID:
    - DeleteWorkItemCommentAsync

Delete a comment on a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Id | workItemId | True | integer | The unique id of the work item. |
| Comment Id | commentId | True | integer | The id of the comment to delete. |

### Delete work item link (Preview)

- Operation ID:
    - DeleteWorkItemLinkAsync

Deletes a link from a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | Project ID or project name |
| Work Item Type | type | True | string | The work item type of the work item. |
| Work Item Id | workItemId | True | integer | Id of a work item. |
| Relation Id | linkId |  | integer | Zero-based relation identifier (attributes.relationId) or array position from the work item response. |
| Work Item Link To Remove | workItemLinkToRemove |  | uri | Absolute URL of the link to delete when a relation identifier is not provided. |
| Link Relation Type | linkType |  | string | Relation type (rel) of the link to delete when matching by URL. |

#### Returns

 The outputs of this operation are dynamic. 

### Get a User Profile

- Operation ID:
    - GetProfile

Gets a user profile.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Profile Id | id | True | string | The ID of the profile within the same organization, or 'me' to get the profile of the current authenticated user. |

#### Returns

Profile

- Body
    - Profile

### Get build (Preview)

- Operation ID:
    - GetBuildAsync

Retrieves a build by its identifier.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Build Id | buildId | True | integer | The identifier of the build to retrieve. |

#### Returns

Build Result

- Body
    - BuildResult

### Get build timeline (Preview)

- Operation ID:
    - GetBuildTimelineAsync

Retrieves the timeline for a specific build.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Build Id | buildId | True | integer | The identifier of the build to retrieve the timeline for. |
| Timeline Id | timelineId |  | string | Optional timeline identifier when multiple timelines exist. |
| Change Id | changeId |  | integer | Optional change id to retrieve a specific timeline change. |
| Plan Id | planId |  | string | Optional plan identifier for the timeline. |

#### Returns

Build timeline

- Body
    - Timeline

### Get query results

- Operation ID:
    - GetQueryResultsV2

Retrieves the result of a work item query.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Query Id | queryId | True | string | The Id of the stored query to run. |
| Number of work items to return | workItemsCount |  | integer | Max work items count to retrieve (1 - 20000) |
| Fail if query results change | throwIfQueryChanged |  | boolean | If query results change during flow execution then flow run should fail to avoid inconsistencies. |

#### Returns

 The outputs of this operation are dynamic. 

### Get query results [DEPRECATED]

- Operation ID:
    - GetQueryResults

This action has been deprecated. Please use [Get query results](/en-us/connectors/visualstudioteamservices/#get-query-results) instead.

~~Retrieves the result of a work item query.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Query Id | queryId | True | string | The Id of the stored query to run. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[JObject]

### Get work item attachment (Preview)

- Operation ID:
    - GetWorkItemAttachmentAsync

Downloads the content of a work item attachment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Attachment Id | attachmentId | True | string | The unique id of the attachment to download. |
| Project Name | project |  | string | Optional project within the specified Organization to scope the request. |
| File Name | fileName |  | string | Optional file name hint passed to Azure DevOps when downloading the attachment. |

#### Returns

- Body
    - WorkItemAttachmentResponse

### Get work item children

- Operation ID:
    - GetWorkItemChildren

Get a list of children (max size 1000) of a single work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Id | id | True | string | The unique id of the work item to get the children for. |
| Children Work Item Type | workItemType |  | string | The type of the children work item(s) |

#### Returns

 The outputs of this operation are dynamic. 

### Get work item comments (Preview)

- Operation ID:
    - GetWorkItemCommentsAsync

Retrieves comments for a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Id | workItemId | True | integer | The unique id of the work item to get comments for. |
| Maximum comments to return | $top |  | integer | Maximum number of comments to return. |
| Comment sort order | order |  | string | Sort order for comments. Defaults to 'desc'. |
| Include deleted comments | includeDeleted |  | boolean | Whether to include comments that have been soft-deleted. |
| Expand options | $expand |  | string | Controls which additional comment data should be returned. |

#### Returns

Represents the response containing work item comments.

- Body
    - WorkItemCommentsResponse

### Get work item details

- Operation ID:
    - GetWorkItemDetails

Get the details of a single work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Type | typeName | True | string | The work item type of the work item. |
| Work Item Id | id | True | string | The unique id of the work item to get details for.The work item must be of the type specified in 'Work Item Type'. |

#### Returns

 The outputs of this operation are dynamic. 

### Get work item details (V2) (Preview)

- Operation ID:
    - GetWorkItemDetailsV2Async

Get the details of a single work item with optional field selection and expand options.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item Type | typeName | True | string | The work item type used to validate the returned work item and drive dynamic outputs. |
| Work Item Id | id | True | string | The unique id of the work item to get details for. |
| As-of Date | asOf |  | date-time | Retrieve the work item as of this date and time. |
| Expand | expand |  | string | Controls which additional data is included in the response. |

#### Returns

 The outputs of this operation are dynamic. 

### List build requesters (Preview)

- Operation ID:
    - ListBuildRequestersAsync

Retrieves unique project members who can be used to filter builds by the requested for identity.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[TeamMember]

### List builds (Preview)

- Operation ID:
    - ListBuilds

Retrieves builds for the specified project with optional filters.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Filter By Definition Ids | definitions |  | string | Comma-separated list of definition identifiers to include. |
| Filter By Build Number | buildNumber |  | string | Filter by build number. |
| Filter By Branch | branchName |  | string | Filter by branch name (for example, refs/heads/main). |
| Filter By Result | resultFilter |  | string | Filter by build result. |
| Filter By Status | statusFilter |  | string | Filter by build status. |
| Filter By Reason | reasonFilter |  | string | Filter by build reason. |
| Filter By Requested For | requestedFor |  | string | Filter by the identity for whom the build was requested. |
| Min Finish Time | minTime |  | date-time | Filter by minimum finish time (inclusive). |
| Max Finish Time | maxTime |  | date-time | Filter by maximum finish time (inclusive). |
| Maximum Results | $top |  | integer | Maximum number of builds to return. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[BuildResult]

### List Git branches (Preview)

- Operation ID:
    - ListBuildBranchesAsync

Retrieves the list of Git branches available within the project's repositories.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[GitRef]

### List Git repositories

- Operation ID:
    - ListGitRepositories

Retrieves the list of Git repositories in a project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[GitRepository]

### List iterations

- Operation ID:
    - ListIterations

Retrieves the list of iterations for a project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name | team | True | string | The name of the team within the project. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[TeamSettingsIteration]

### List Organizations

- Operation ID:
    - ListAccounts

Retrieves the list of Organizations the user is a member of.

#### Returns

A list of VSTS models.

- Body
    - VstsList[Account]

### List pipeline runs

- Operation ID:
    - ListPipelineRuns

Gets top 10000 runs for a particular pipeline

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| The pipeline ID | pipelineId | True | integer | The pipeline ID |

#### Returns

- Body
    - Run

### List pipelines

- Operation ID:
    - ListPipelines

Retrieves the list of pipelines in a project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

- Body
    - Pipeline

### List projects

- Operation ID:
    - ListProjects

Retrieves the list of projects in an Organization.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[Project]

### List queries within folder

- Operation ID:
    - ListQueriesInFolder

Retrieves the list of work item queries within a folder for a given project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Folder Path | folderPath | True | string | The folder path under which to look for queries. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[QueryHierarchyItem]

### List release definitions

- Operation ID:
    - ListReleaseDefinitions

Retrieves the list of release definitions associated with a project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[ReleaseDefinition]

### List root level queries

- Operation ID:
    - ListRootQueryFolders

Retrieves the list of root-level work item queries in a project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[QueryHierarchyItem]

### List work item fields (Preview)

- Operation ID:
    - ListWorkItemFieldsAsync

Retrieves the work item fields available within the specified Azure DevOps Organization or project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project |  | string | Optional project within the Organization to scope the fields list. |
| Expand options | expand |  | string | Controls which additional information is returned for each field. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[WorkItemField]

### List work item types

- Operation ID:
    - ListWorkItemTypes

Retrieves the list of Work Item Types accessible in a given Azure DevOps project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[WorkItemType]

### List work items

- Operation ID:
    - ListWorkItems

Returns a list of work items.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Work Item IDs | workItemIds | True | string | The comma-separated list of requested work item IDs. |
| Work Item Type | workItemType |  | string | The work item type to generate schema for. |

#### Returns

 The outputs of this operation are dynamic. 

### Queue a new build

- Operation ID:
    - QueueNewBuild

Create a build, based on an existing build definition, and add it to the build queue.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Build Definition Id | buildDefId | True | string | The identifier of the build definition to use. |
| Source Branch | sourceBranch |  | string | The source branch of the build. |
| Parameters | parameters |  | string | A JSON dictionary of optional build parameters. |

#### Returns

Build Result

- Body
    - BuildResult

### Search for work items

- Operation ID:
    - SearchWorkItemsAsync

Provides a set of results for the search text.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Search Text | searchText | True | string | The search text. |
| Skip | $skip |  | integer | Number of results to be skipped. Defaults to 0. |
| Top | $top |  | integer | Number of results to be returned. Defaults to 100. |
| Filters | filters |  | object | Filters to be applied. Set it to null if there are no filters to be applied. |
| Include Facets | includeFacets |  | boolean | Flag to opt for faceting in the result. Default behavior is false. |
| Field | field |  | string | Field name on which sorting should be done. |
| Sort Order | sortOrder |  | string | Order (ASC/DESC) in which the results should be sorted. |

#### Returns

Work Item Search Response

- Body
    - WorkItemSearchResponse

### Send an HTTP request to Azure DevOps

- Operation ID:
    - HttpRequest

Construct an Azure DevOps REST API request to invoke. Please refer to the following link for all available endpoints: [https://docs.microsoft.com/rest/api/azure/devops](/en-us/rest/api/azure/devops)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Method | Method | True | string | The HTTP method. |
| Relative URI | Uri | True | string | The relative URI. Example: {project}/{team}/\_apis/wit/templates?api-version=5.0-preview.1. |
| Headers | Headers |  | object | The request headers. |
| Body | Body |  | string | The request content. Can be JSON object or binary data encoded as Base64 string. |
| Body is Base64 | IsBase64 |  | boolean | Must be true if request content is encoded as Base64 string. |

#### Returns

- response
    - ObjectWithoutType

### Update a work item

- Operation ID:
    - UpdateWorkItem

Update an existing work item by id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Work Item Id | id | True | string | The unique id of the work item to update. |
| Project Name | project |  | string | The name of the project within the specified Organization. |
| Work Item Type | type |  | string | The work item type to generate schema for. |
| Work Item Details | workItem | True | dynamic | The details of the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### Update work item comment (Preview)

- Operation ID:
    - UpdateWorkItemCommentAsync

Updates a comment on a work item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | Project ID or project name |
| Work Item Id | workItemId | True | integer | Id of a work item. |
| Comment Id | commentId | True | integer | Id of the comment to update. |
| Comment Format | format |  | string | Format of a work item comment (Markdown or Html). |
| Comment Text | text | True | string | The text of the comment. |

#### Returns

Work Item Comment

- Body
    - WorkItemComment

## Triggers

| When a build completes | Triggers a flow when a build completes. |
| --- | --- |
| When a pull request is closed (Git) | Triggers a flow when a pull request which matches provided criteria is closed. |
| When a pull request is created (Git) | Triggers a flow when a pull request which matches provided criteria is created. |
| When a work item is assigned | Triggers a flow when a work item which matches provided criteria is assigned to the given user. |
| When a work item is assigned [DEPRECATED] | This action has been deprecated. Please use [When a work item is assigned](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-assigned) instead.<br><br>~~Triggers a flow when a work item which matches provided criteria is assigned to the given user.~~ |
| When a work item is closed | Triggers a flow when a work item which matches provided criteria is closed. |
| When a work item is closed [DEPRECATED] | This action has been deprecated. Please use [When a work item is closed](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-closed) instead.<br><br>~~Triggers a flow when a work item which matches provided criteria is closed.~~ |
| When a work item is created | Triggers a flow when a work item which matches provided criteria is created. |
| When a work item is created [DEPRECATED] | This action has been deprecated. Please use [When a work item is created](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-created) instead.<br><br>~~Triggers a flow when a work item which matches provided criteria is created.~~ |
| When a work item is updated | Triggers a flow when a work item which matches provided criteria is updated. |
| When a work item is updated [DEPRECATED] | This action has been deprecated. Please use [When a work item is updated](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-updated) instead.<br><br>~~Triggers a flow when a work item which matches provided criteria is updated.~~ |
| When code is checked in (TFVC) | Triggers a flow when code is checked in to a Team Foundation Version Control project. |
| When code is pushed (Git) | Triggers a flow when code is pushed to a Git repository. |

### When a build completes

- Operation ID:
    - OnBuildCompleted

Triggers a flow when a build completes.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Filter By Result | resultFilter |  | string | An option indicating which build result to trigger on. Valid options include '', 'succeeded', 'partiallySucceeded', 'failed', or 'canceled'. |
| Filter By Definition Id | definitions |  | string | An option indicating which build definition id to trigger on. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[BuildResult]

### When a pull request is closed (Git)

- Operation ID:
    - OnGitPullClosed

Triggers a flow when a pull request which matches provided criteria is closed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Repository Name | repository | True | string | The name of the repository within the specified project. |
| Source Ref Name | sourceRefName |  | string | The name of the Git ref, such as a branch or tag. |
| Target Ref Name | targetRefName |  | string | The name of the Git ref, such as a branch or tag. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[GitPullRequest]

### When a pull request is created (Git)

- Operation ID:
    - OnGitPullCreated

Triggers a flow when a pull request which matches provided criteria is created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Repository Name | repository | True | string | The name of the repository within the specified project. |
| Source Ref Name | sourceRefName |  | string | The name of the Git ref, such as a branch or tag. |
| Target Ref Name | targetRefName |  | string | The name of the Git ref, such as a branch or tag. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[GitPullRequest]

### When a work item is assigned

- Operation ID:
    - OnWorkItemAssignedV2

Triggers a flow when a work item which matches provided criteria is assigned to the given user.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team | True | string | The name of the team from which to select a member. |
| Assigned To | wiql\_\_System\_AssignedTo | True | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is assigned [DEPRECATED]

- Operation ID:
    - OnWorkItemAssigned

This action has been deprecated. Please use [When a work item is assigned](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-assigned) instead.

~~Triggers a flow when a work item which matches provided criteria is assigned to the given user.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Assigned To | wiql\_\_System\_AssignedTo | True | string | The name of the team member who currently owns the work item. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select a member. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Team Project | wiql\_\_System\_TeamProject |  | string | The team project to which this work item belongs. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is closed

- Operation ID:
    - OnWorkItemClosedV2

Triggers a flow when a work item which matches provided criteria is closed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Closed State | closedState |  | string | The comma-separated list of values of the State field indicating how the work item was closed (Done, Closed, Completed, Inactive). |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is closed [DEPRECATED]

- Operation ID:
    - OnWorkItemClosed

This action has been deprecated. Please use [When a work item is closed](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-closed) instead.

~~Triggers a flow when a work item which matches provided criteria is closed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Team Project | wiql\_\_System\_TeamProject |  | string | The team project to which this work item belongs. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is created

- Operation ID:
    - OnWorkItemCreatedV2

Triggers a flow when a work item which matches provided criteria is created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is created [DEPRECATED]

- Operation ID:
    - OnWorkItemCreated

This action has been deprecated. Please use [When a work item is created](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-created) instead.

~~Triggers a flow when a work item which matches provided criteria is created.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Team Project | wiql\_\_System\_TeamProject |  | string | The team project to which this work item belongs. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is updated

- Operation ID:
    - OnWorkItemUpdatedV2

Triggers a flow when a work item which matches provided criteria is updated.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When a work item is updated [DEPRECATED]

- Operation ID:
    - OnWorkItemUpdated

This action has been deprecated. Please use [When a work item is updated](/en-us/connectors/visualstudioteamservices/#when-a-work-item-is-updated) instead.

~~Triggers a flow when a work item which matches provided criteria is updated.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name (to pick Assigned To) | team |  | string | The name of the team from which to select an assignee. |
| Assigned To | wiql\_\_System\_AssignedTo |  | string | The name of the team member who currently owns the work item. |
| Type | wiql\_\_System\_WorkItemType |  | string | The name of the work item type. |
| Area Path | wiql\_\_System\_AreaPath |  | string | The product feature or team area the work item is in. |
| Area Path Comparison | areaPathComparison |  | string | The rule to be used while comparing Area Path field. |
| Iteration Path | wiql\_\_System\_IterationPath |  | string | The named sprint or time period the work item is in. |
| Iteration Path Comparison | iterationPathComparison |  | string | The rule to be used while comparing Iteration Path field. |
| Priority | wiql\_\_Microsoft\_VSTS\_Common\_Priority |  | string | A subjective rating of the bug, issue, task, or test case as it relates to the business. |
| Team Project | wiql\_\_System\_TeamProject |  | string | The team project to which this work item belongs. |
| Created By | wiql\_\_System\_CreatedBy |  | string | The name of the team member who created the work item. |

#### Returns

 The outputs of this operation are dynamic. 

### When code is checked in (TFVC)

- Operation ID:
    - OnTfvcCheckIn

Triggers a flow when code is checked in to a Team Foundation Version Control project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Team Name | team |  | string | The name of the team which to select an author. |
| Team Member | author |  | string | The unique name of the team member who authored the check in. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[TfvcChangeset]

### When code is pushed (Git)

- Operation ID:
    - OnGitPush

Triggers a flow when code is pushed to a Git repository.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Organization Name | account | True | string | The name of the Organization. This can be found in the instance URL i.e. {Organization}.visualstudio.com. The Organization should have "Third-party application access via OAuth" enabled to prevent errors in the operation. |
| Project Name | project | True | string | The name of the project within the specified Organization. |
| Repository Name | repository | True | string | The name of the repository within the specified project. |
| Ref Name | refName |  | string | The name of the Git ref, such as a branch or tag. |

#### Returns

A list of VSTS models.

- Body
    - VstsList[GitPush]

## Definitions

### VstsList[Account]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of Account | The VSTS Models |

### Account

Account

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Account Id | accountId | string | The id of the account. |
| Account URI | accountUri | string | The URI of the account. |
| Account Name | accountName | string | The name of the account. |
| Account Owner | accountOwner | string | The set owner of the account. |
| Organization Name | organizationName | string | The organization name corresponding to the account. |
| Account Type | accountType | string | The type of the account. |

### Profile

Profile

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| displayName | displayName | string | Display Name of User |
| id | id | string | The unique identifier of the profile. |
| publicAlias | publicAlias | string | Public Alias. |
| Email Address | emailAddress | string | Email Address of the account. |
| timeStamp | timeStamp | date-time | The time at which this profile was last changed. |
| revision | revision | integer | The maximum revision number of any attribute. |
| CoreRevision | coreRevision | integer | CoreRevision |

### VstsList[TeamSettingsIteration]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of TeamSettingsIteration | The VSTS Models |

### TeamSettingsIteration

Work (Agile) Iteration

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Attributes | Attributes | TeamIterationAttributes | Team Iteration Attributes |
| Id | Id | string | Id of the resource. |
| Name | Name | string | Name of the resource. |
| Path | Path | string | Relative path to the iteration. |
| Links | \_links | object | Collection of links relevant to resource. |
| URL | Url | string | Full HTTP link to the resource. |

### TeamIterationAttributes

Team Iteration Attributes

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Finish Date | FinishDate | date-time | The finish date team iteration attribute. |
| Start Date | StartDate | date-time | The start date team iteration attribute. |

### Links

Links

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| web | web | WebLinks | Web Links |

### WebLinks

Web Links

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| HTML Link | href | string | The web URL of build details |

### BuildResult

Build Result

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Build Id | id | integer | The unique identifier of the build. |
| Build Number | buildNumber | string | The build number. |
| Source Branch | sourceBranch | string | The source control branch the build used. |
| Source version | sourceVersion | string | The source control version the build used. |
| Status | status | string | The status of the build. |
| Priority | priority | string | The priority of the build. |
| Queue Time | queueTime | date-time | The time the build was queued. |
| Start Time | startTime | date-time | The time the build started. |
| Finish Time | finishTime | date-time | The time the build finished. |
| Reason | reason | string | The reason for the build. |
| Result | result | string | The result of the build. |
| requestedFor | requestedFor | BuildRequestUser | Build Request User |
| Parameters | parameters | string | Parameters passed to the build, if any. |
| definition | definition | BuildResultDefinition | Build Result Definition |
| \_links | \_links | Links | Links |

### BuildRequestUser

Build Request User

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Requested For | uniqueName | string | The unique name of the user the build was requested for. |

### BuildResultDefinition

Build Result Definition

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Build Definition Id | id | integer | The identifier of the build definiton. |
| Build Definition Name | name | string | The name of the build definition. |

### VstsList[BuildResult]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of BuildResult | The VSTS Models |

### Timeline

Build timeline

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Timeline Id | id | uuid | Timeline identifier. |
| Change Id | changeId | integer | Timeline change identifier. |
| Last Changed By | lastChangedBy | uuid | The process or person that last changed the timeline. |
| Last Changed On | lastChangedOn | date-time | Time the timeline was last changed. |
| Timeline Records | records | array of TimelineRecord | Timeline records. |

### TimelineRecord

Timeline record

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Record Id | id | uuid | Record identifier. |
| Change Id | changeId | integer | Record change identifier. |
| Parent Id | parentId | uuid | Parent record identifier. |
| Type | type | string | Record type. |
| Name | name | string | Record name. |
| Start Time | startTime | date-time | Record start time. |
| Finish Time | finishTime | date-time | Record finish time. |
| State | state | string | Record state. |
| Result | result | string | Record result. |
| Worker Name | workerName | string | Worker processing the record. |
| Attempt | attempt | integer | Record attempt number. |
| Identifier | identifier | string | Record identifier value. |
| Issues | issues | array of TimelineIssue | Issues encountered by the record. |
| log | log | TimelineLogReference | Timeline log reference |
| Order | order | integer | Record execution order. |
| details | details | TimelineReference | Timeline reference |
| task | task | TimelineTask | Timeline task |
| Previous Attempts | previousAttempts | array of TimelineReference | Previous record attempts. |
| Percent Complete | percentComplete | integer | Record percent complete. |
| Current Operation | currentOperation | string | Current record operation. |
| URL | url | string | Record URL. |
| Result Code | resultCode | string | Record result code. |
| Properties | properties | object | Record properties. |

### TimelineIssue

Timeline issue

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Type | type | string | Issue type. |
| Category | category | string | Issue category. |
| Message | message | string | Issue message. |
| Data | data | object | Issue data. |
| Error Code | errorCode | string | Issue error code. |
| Warning Code | warningCode | string | Issue warning code. |

### TimelineLogReference

Timeline log reference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Log Id | id | integer | Log identifier. |
| Type | type | string | Log type. |
| Line Count | lineCount | integer | Number of lines in the log. |
| URL | url | string | Log URL. |

### TimelineReference

Timeline reference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | uuid | Reference identifier. |
| Change Id | changeId | integer | Reference change identifier. |

### TimelineTask

Timeline task

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Task Id | id | uuid | Task identifier. |
| Name | name | string | Task name. |
| Version | version | string | Task version. |

### VstsList[GitRepository]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of GitRepository | The VSTS Models |

### GitRepository

Git Repository

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Repository Id | id | string | The unique id of the repository. |
| Repository Name | name | string | The name of the repository. |
| Repository Browser URL | url | string | The URL is the API endpoint for the repository. |
| Repository Remote URL | remoteUrl | string | The URL via which git can sync with this repository. |

### VstsList[GitRef]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of GitRef | The VSTS Models |

### GitRef

Git Ref

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Ref Id | objectId | string | The unique id of the ref. |
| Ref Name | name | string | The name of the ref. |

### VstsList[GitPush]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of GitPush | The VSTS Models |

### GitPush

Git Push

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| repository | repository | GitRepository | Git Repository |
| pushedBy | pushedBy | GitPushUser | Git Push User |
| Ref Updates | refUpdates | array of GitRefUpdate | The Refs that were updated as part of this push. |
| Push Id | pushId | integer | The unique id of the push. |
| Date | date | date-time | The date the push was created. |

### GitPushUser

Git Push User

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Pusher Id | id | string | The unique identifier of the user who created the push. |
| Pusher Name | displayName | string | The name of the user who created the push. |
| Pusher Unique Name | uniqueName | string | The unique name of the user who created the push. |
| Pusher Image Url | imageUrl | string | The url to the image for this user. |

### VstsList[GitPullRequest]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of GitPullRequest | The VSTS Models |

### GitPullRequest

Git Pull Request

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| repository | repository | GitRepository | Git Repository |
| Pull Request Id | pullRequestId | integer | The unique id of the pull request. |
| createdBy | createdBy | PullRequestCreatedBy | Pull Request Created By |
| Creation Date | creationDate | date-time | The date the pull request was created |
| Closed Date | closedDate | date-time | The date when the pull request was closed (completed, abandoned, or merged externally) |
| Title | title | string | The title of the pull request |
| Description | description | string | The description of the pull request |
| Source Ref Name | sourceRefName | string | The name of the source branch of the pull request |
| Target Ref Name | targetRefName | string | The name of the target branch of the pull request |
| Is Draft | isDraft | boolean | Draft / WIP pull request |
| Reviewers | reviewers | array of PullRequestReviewer | Groups or teams that that this reviewer contributed to. |
| Reviewer List | reviewerList | string | A semicolon separated list of reviewer unique names which are valid email addresses |
| Required Reviewer List | requiredReviewerList | string | A semicolon separated list of required reviewer unique names which are valid email addresses |
| Commits | commits | array of GitCommitRef | The commits contained in the pull request. |
| completionOptions | completionOptions | PullRequestCompletionOptions | Pull Request Completion Options |
| mergeOptions | mergeOptions | PullRequestMergeOptions | Pull Request Merge Options |
| Merge Failure Message | mergeFailureMessage | string | If set, pull request merge failed for this reason. |
| closedBy | closedBy | PullRequestClosedBy | Pull Request Closed By |
| autoCompleteSetBy | autoCompleteSetBy | PullRequestAutoCompleteSetBy | Pull Request Auto Complete Set By |
| Url | url | string | The url of the pull request. |
| Remote Url | remoteUrl | string | The remote url to the pull request. |
| Artifact Id | artifactId | string | A string which uniquely identifies this pull request. |
| Merge Id | mergeId | string | The merge id of the pull request. |
| Code Review Id | codeReviewId | integer | The code review id of the pull request. |
| Completion Queue Time | completionQueueTime | string | The most recent date at which the pull request entered the queue to be completed. |
| Supports Iterations | supportsIterations | boolean | If true, this pull request supports multiple iterations. |

### PullRequestCreatedBy

Pull Request Created By

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Created By Display Name | displayName | string | The display name of the pull request creator. |
| Created By Unique Name | uniqueName | string | The unique name of the pull request creator. |
| Created By Id | id | string | The Id of the pull request creator. |
| Created By Image Url | imageUrl | string | The url to the image of the pull request creator. |
| Created By Url | url | string | The url of the pull request creator. |

### PullRequestClosedBy

Pull Request Closed By

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Closed By Display Name | displayName | string | The display name of the pull request closer. |
| Closed By Unique Name | uniqueName | string | The unique name of the pull request closer. |
| Closed By Id | id | string | The Id of the pull request closer. |
| Closed By Image Url | imageUrl | string | The url to the image of the pull request closer. |
| Closed By Url | url | string | The url of the pull request closer. |

### PullRequestAutoCompleteSetBy

Pull Request Auto Complete Set By

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Auto Complete Set By Display Name | displayName | string | The display name of the user who enabled auto complete. |
| Auto Complete Set By Unique Name | uniqueName | string | The unique name of the user who enabled auto complete. |
| Auto Complete Set By Id | id | string | The Id of the user who enabled auto complete. |
| Auto Complete Set By Image Url | imageUrl | string | The url to the image of the user who enabled auto complete. |
| Auto Complete Set By Url | url | string | The url of the user who enabled auto complete. |

### PullRequestReviewer

Pull Request Reviewer

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Reviewer Display Name | displayName | string | The display name of the pull request reviewer. |
| Reviewer Unique Name | uniqueName | string | The unique name of the pull request reviewer. |
| Reviewer Id | id | string | The Id of the pull request reviewer. |
| Reviewer Url | url | string | The url of the pull request reviewer. |
| Has Declined | hasDeclined | boolean | Indicates if this reviewer has declined to review this pull request. |
| Is Flagged | isFlagged | boolean | Indicates if this reviewer is flagged for attention on this pull request. |
| Is Required | isRequired | boolean | Indicates if this is a required reviewer for this pull request. |
| Vote | vote | integer | Vote on a pull request: approved(10), approved with suggestions(5), no vote(0), waiting for author(-5), rejected(-10). |
| Voted For | votedFor | array of PullRequestReviewer | Groups or teams that that this reviewer contributed to. |

### PullRequestMergeOptions

Pull Request Merge Options

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| No Fast Forward | noFastForward | string | A two-parent, no-fast-forward merge. The source branch is unchanged. This is the default behavior. |
| Rebase | rebase | string | Rebase the source branch on top of the target branch HEAD commit, and fast-forward the target branch. |
| Rebase Merge | rebaseMerge | string | Rebase the source branch on top of the target branch HEAD commit, and create a two-parent, no-fast-forward merge. |
| Squash | squash | string | Put all changes from the pull request into a single-parent commit. |

### PullRequestMergeStrategy

Pull Request Merge Strategy

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Conflict Authorship Commits | conflictAuthorshipCommits | boolean | If true, conflict resolutions applied during the merge will be put in separate commits to preserve authorship info for git blame. |
| Detect Rename False Positives | detectRenameFalsePositives | boolean | If true, detects rename false positives. |
| Disable Renames | disableRenames | boolean | If true, rename detection will not be performed during the merge. |

### PullRequestCompletionOptions

Pull Request Completion Options

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Auto Complete Ignore Config Ids | autoCompleteIgnoreConfigIds | array of integer | List of any policy configuration Id's which auto-complete should not wait for |
| Bypass Policy | bypassPolicy | boolean | If true, policies will be explicitly bypassed while the pull request is completed. |
| Bypass Reason | bypassReason | string | If policies are bypassed, this reason is stored as to why bypass was used. |
| Delete Source Branch | deleteSourceBranch | boolean | If true, the source branch of the pull request will be deleted after completion. |
| Merge Commit Message | mergeCommitMessage | string | If set, this will be used as the commit message of the merge commit. |
| mergeStrategy | mergeStrategy | PullRequestMergeStrategy | Pull Request Merge Strategy |
| Squash Merge | squashMerge | boolean | If MergeStrategy is not set, the merge strategy will be no-fast-forward if this flag is false, or squash if true. |
| Transition Work Items | transitionWorkItems | boolean | If true, we will attempt to transition any work items linked to the pull request into the next logical state (i.e. Active -&gt; Resolved). |

### CommitGitUserDate

Commit Git User Date

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Commit User Date | date | string | Date of the Git operation. |
| Commit User Email | email | string | Email address of the user performing the Git operation. |
| Commit Image Url | imageUrl | string | Url for the user's avatar. |
| Commit User Name | name | string | Name of the user performing the Git operation. |

### GitCommitRef

Git Commit Ref

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| author | author | CommitGitUserDate | Commit Git User Date |
| Commit Comment | comment | string | Comment or message of the commit. |
| Commit Comment Truncated | commentTruncated | string | Indicates if the comment is truncated from the full Git commit comment message. |
| Commit Id | commitId | string | Id of the commit. |
| committer | committer | CommitGitUserDate | Commit Git User Date |
| Parents | parents | array of string | An enumeration of the parent commit IDs for this commit. |
| Commit Remote Url | remoteUrl | string | Remote URL path to the commit. |
| Commit Url | url | string | REST URL for this resource. |

### GitRefUpdate

Git Ref Update

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Ref Name | name | string | The name of the Git Ref that was updated. |
| Repository Id | repositoryId | string | The unique id of the repository. |
| Old Commit Id | oldObjectId | string | The id of the previous commit this Ref pointed to before the update. |
| New Commit Id | newObjectId | string | The id of the new commit this Ref pointed to before the update. |

### VstsList[Project]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of Project | The VSTS Models |

### Project

Project

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Project Id | id | string | The unique identifier of the project. |
| Project Name | name | string | The name of the project. |
| Project URL | url | string | The API URL of the project. |

### VstsList[TeamMember]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of TeamMember | The VSTS Models |

### TeamMember

Team Member

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Team Member Id | id | string | The unique id of the team member. |
| Display Name | displayName | string | The display name of the team member. |
| Unique Name | uniqueName | string | The username of the team member. |
| Member URI | url | string | The URI of the team member. |
| Image URI | imageUrl | string | The image URI of the team member. |

### VstsList[ReleaseDefinition]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of ReleaseDefinition | The VSTS Models |

### ReleaseDefinition

Release Definition

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Comment | Comment | string | The comment of the release definition. |
| Created On | CreatedOn | date-time | The date on which the release definition was created. |
| Description | Description | string | The description of the release definition. |
| Id | Id | integer | The unique identifier of the release definition. |
| ModifiedBy | ModifiedBy | IdentityRef | Identity Ref |
| Modified On | ModifiedOn | date-time | The date on which the release definition was modified. |
| Name | Name | string | The name of the release definition. |
| Path | Path | string | The path of the release definition. |
| Release Name Format | ReleaseNameFormat | string | The release name format of the release definition. |
| Revision | Revision | integer | The revision number of the release definition. |
| Source | Source | string | The source of the release definition. |
| Tags | Tags | array of string | The list of tags of the release definition. |
| URL | Url | string | The URL to access the release definition. |

### IdentityRef

Identity Ref

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Directory Alias | DirectoryAlias | string | The directory alias of the identity reference. |
| Display Name | DisplayName | string | The display name of the identity reference. |
| Unique Name | UniqueName | string | The unique name of the identity reference. |
| URL | Url | string | The URL of the identity reference. |
| Id | Id | string | The Id of the identity reference. |

### ReleaseDefinitionShallowReference

Release Definition Shallow Reference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | integer | The unique identifier of the release definition. |
| Name | Name | string | The name of the release definition. |
| URL | Url | string | The REST API URL to access the release definition. |

### Object

### ObjectWithoutType

### Release

Release

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Comment | Comment | string | The comment of the release. |
| CreatedBy | CreatedBy | IdentityRef | Identity Ref |
| Created On | CreatedOn | date-time | The date on which the release was created. |
| Description | Description | string | The description of the release. |
| Id | Id | integer | The unique Identifier of the release. |
| Keep Forever | KeepForever | boolean | Whether to exclude the release from retention policies. |
| Logs Container URL | LogsContainerUrl | string | The logs Container URL of this release. |
| ModifiedBy | ModifiedBy | IdentityRef | Identity Ref |
| Modified On | ModifiedOn | date-time | Date on which the release was modified. |
| Name | Name | string | The name of the release. |
| Reason | Reason | string | The reason of the release. |
| ReleaseDefinition | ReleaseDefinition | ReleaseDefinitionShallowReference | Release Definition Shallow Reference |
| Status | Status | string | The status of the release. |
| URL | Url | string | The URL of the release. |

### VstsList[TfvcChangeset]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of TfvcChangeset | The VSTS Models |

### TfvcChangeset

Team Foundation Version Control Changeset

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Changeset Id | changesetId | integer | The unique id of the changeset. |
| author | author | ChangesetAuthor | Changeset Author |
| checkedInBy | checkedInBy | ChangesetCheckedInBy | Changeset Checked In By |
| Created Date | createdDate | date-time | The datetime the changeset was created. |
| Comment | comment | string | The comment describing the changeset. |

### ChangesetAuthor

Changeset Author

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Author Name | displayName | string | The name of the user who created the changeset. |
| Author Unique Name | uniqueName | string | The unique name of the user who created the changeset. |

### ChangesetCheckedInBy

Changeset Checked In By

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Checked In By Name | displayName | string | The name of the user who checked in the changeset. |
| Checked In By Unique Name | uniqueName | string | The unique name of the user who created the changeset. |

### VstsList[WorkItemType]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of WorkItemType | The VSTS Models. |

### WorkItemHit

Matched terms in the field of the work item result

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Field Reference Name | fieldReferenceName | string | Reference name of the highlighted field. |
| Highlights | highlights | array of string | Matched/highlighted snippets of the field. |

### WorkItemResult

Work Item Result that matched a work item search request

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| project | project | SearchProject | Project details for search results |
| Fields | fields | object | A standard set of work item fields and their values. |
| Hits | hits | array of WorkItemHit | Highlighted snippets of fields that match the search request. |
| URL | url | string | Reference to the work item. |

### SearchProject

Project details for search results

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Id of the project. |
| Name | name | string | Name of the project. |

### WorkItemSearchResponse

Work Item Search Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Count | count | integer | Total number of matched work items. |
| Results | results | array of WorkItemResult | List of top matched work items. |
| Info Code | infoCode | integer | Numeric code indicating any additional information. |
| Facets | facets | object | A dictionary storing an array of Filter object against each facet. |

### WorkItemType

Work Item Type

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Description | Description | string | The description of the type. |
| Name | Name | string | The name of the type. |
| XML Form | XmlForm | string | An XML representation of the type. |
| Fields | FieldInstances | array of WorkItemTypeFieldInstance | A list of field instances associated with the type. |
| icon Id | icon.id | string | The identifier of the icon |
| icon url | icon.url | string | The REST URL of the resource |
| States | states | array of WorkItemStateColor | States of work item type |

### WorkItemTypeFieldInstance

Work Item Type Field Instance

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Always Required | AlwaysRequired | boolean | Specifies whether the field instance is always required. |
| Reference Name | ReferenceName | string | The reference name of the field instance. |
| Name | Name | string | The name of the field instance. |
| URL | Url | string | A URL pointing to field instance details. |

### WorkItemComment

Work Item Comment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_links | \_links | ReferenceLinks | Collection of REST reference links. |
| Comment Id | id | integer | The unique id of the comment. |
| Work Item Id | workItemId | integer | The work item id the comment belongs to. |
| Version | version | integer | The work item revision associated with this comment. |
| Comment Format | format | CommentFormat | Specifies how comment text is interpreted. |
| Comment Text | text | string | The text of the comment. |
| Rendered Text | renderedText | string | The rendered HTML version of the comment text. |
| createdBy | createdBy | IdentityRef | Identity Ref |
| Created Date | createdDate | date-time | The date the comment was created. |
| createdOnBehalfOf | createdOnBehalfOf | IdentityRef | Identity Ref |
| Created On Behalf Date | createdOnBehalfDate | date-time | Effective creation date on behalf of another identity. |
| modifiedBy | modifiedBy | IdentityRef | Identity Ref |
| Modified Date | modifiedDate | date-time | The date the comment was last modified. |
| Is Deleted | isDeleted | boolean | Indicates if the comment has been deleted. |
| Mentions | mentions | array of CommentMention | Mentions included in the comment. |
| Reactions | reactions | array of CommentReaction | Reactions on the comment. |
| URL | url | string | The REST API URL of the comment. |

### CommentFormat

Specifies how comment text is interpreted.

Specifies how comment text is interpreted.

- Comment Format
    - string

### CommentMention

Represents a mention within a comment.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_links | \_links | ReferenceLinks | Collection of REST reference links. |
| Artifact Id | artifactId | string | The artifact portion of the parsed text (for example, the work item id). |
| Artifact Type | artifactType | string | The type assigned to the mention (person, work item, etc). |
| Comment Id | commentId | integer | The comment id that contains the mention. |
| Target Id | targetId | string | The resolved target of the mention. |
| URL | url | string | The REST API URL of the mention. |

### CommentReactionType

Type of the comment reaction.

Type of the comment reaction.

- Reaction Type
    - string

### CommentReaction

Contains information about a work item comment reaction.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_links | \_links | ReferenceLinks | Collection of REST reference links. |
| Comment Id | commentId | integer | The id of the comment this reaction belongs to. |
| Count | count | integer | Total number of reactions for this reaction type. |
| Is Current User Engaged | isCurrentUserEngaged | boolean | Indicates whether the current user has engaged with this reaction. |
| Reaction Type | type | CommentReactionType | Type of the comment reaction. |
| URL | url | string | The REST API URL of the reaction. |

### ReferenceLinks

Collection of REST reference links.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
|  |  | object | Collection of REST reference links. |

### WorkItemAttachmentResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| attachmentId | attachmentId | string | Identifier of the attachment. |
| fileName | fileName | string | Attachment file name. |
| contentType | contentType | string | MIME type of the attachment. |
| contentLength | contentLength | integer | Size of the attachment in bytes. |
| lastModified | lastModified | date-time | Last modified timestamp for the attachment. |
| content | content | byte | Attachment content encoded as a Base64 string. |

### WorkItemCommentsResponse

Represents the response containing work item comments.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Count | count | integer | The total count of comments. |
| Comments | comments | array of WorkItemComment | The list of comments. |

### VstsList[JObject]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of Object | The VSTS Models |

### VstsList[WorkItemField]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of WorkItemField | The VSTS Models |

### VstsList[QueryHierarchyItem]

A list of VSTS models.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Value | value | array of QueryHierarchyItem | The VSTS Models |

### QueryHierarchyItem

Query Hierarchy Item

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Children | Children | array of QueryHierarchyItem | The list of children items associated with the query hierarchy item. |
| Clauses | Clauses | WorkItemQueryClause | Work Item Query Clause |
| Columns | Columns | array of WorkItemFieldReference | The list of work item field columns associated with the query hierarchy item. |
| Filter Options | FilterOptions | string | The filter options of the query hierarchy item. |
| Has Children | HasChildren | boolean | Specifies whether the query hierarchy item has children. |
| Id | Id | string | The unique identifer of the query hierarchy item. |
| Is Deleted | IsDeleted | boolean | Specifies whether the query hierarchy item is deleted. |
| Is Folder | IsFolder | boolean | Specifies whether the query hierarchy item is a folder. |
| Is Invalid Syntax | IsInvalidSyntax | boolean | Specifies whether the query hierarchy item has invalid syntax. |
| Is Public | IsPublic | boolean | Specifies whether the query hierarchy item is public. |
| LinkClauses | LinkClauses | WorkItemQueryClause | Work Item Query Clause |
| Name | Name | string | The name of the query hierarchy item. |
| Path | Path | string | The path of the query hierarchy item. |
| Query Type | QueryType | string | The query type of the query hierarchy item. |
| Sort Columns | SortColumns | array of WorkItemQuerySortColumn | The list of sort columns of the query hierarchy item. |
| SourceClauses | SourceClauses | WorkItemQueryClause | Work Item Query Clause |
| TargetClauses | TargetClauses | WorkItemQueryClause | Work Item Query Clause |
| Wiql | Wiql | string | The WIQL of the query hierarchy item. |
| Links | \_links | object | The collection of links relevant to the query hierarchy item. |
| URL | Url | string | The full HTTP link to the query hierarchy item. |

### WorkItemStateColor

Work Item State Color

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| category of state | category | string | category of state |
| Color value | color | string | Color value |
| state name | name | string | Work item type state name |

### WorkItemQueryClause

Work Item Query Clause

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Clauses | Clauses | WorkItemQueryClause | Work Item Query Clause |
| Field | Field | WorkItemFieldReference | Work Item Field Reference |
| FieldValue | FieldValue | WorkItemFieldReference | Work Item Field Reference |
| Is Field Value | IsFieldValue | boolean | Specifies whether the work item query clause is a field value. |
| Logical Operator | LogicalOperator | string | The logical operator of the work item query clause. |
| Operator | Operator | WorkItemFieldOperation | Work Item Field Operation |
| Value | Value | string | The value of the work item query clause. |

### WorkItemFieldReference

Work Item Field Reference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | The name of the work item field reference. |
| Reference Name | ReferenceName | string | The reference name of the work item field reference. |
| URL | Url | string | The URL of the work item field reference. |

### WorkItemQuerySortColumn

Work Item Query Sort Column

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Descending | Descending | boolean | Specifies whether the work item query sort column is descending. |
| Field | Field | WorkItemFieldReference | Work Item Field Reference |

### WorkItemField

Work Item Field

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | The display name of the work item field. |
| Read Only | ReadOnly | boolean | Specifies whether the field is read-only. |
| Is Identity | IsIdentity | boolean | Specifies whether the field contains identity information. |
| Is Picklist | IsPicklist | boolean | Specifies whether the field uses a picklist. |
| Reference Name | ReferenceName | string | The reference name of the work item field. |
| Description | Description | string | The description of the work item field. |
| Supported Operations | SupportedOperations | array of WorkItemFieldOperation | The list of operations supported by the field. |
| Type | Type | string | The data type of the work item field. |
| URL | Url | string | The URL of the work item field. |

### WorkItemFieldOperation

Work Item Field Operation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | The name of the work item field operation. |
| Reference Name | ReferenceName | string | The reference name of the work item field operation. |

### Pipeline

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| count | count | integer | count |
| value | value | array of object | Array that has the list of all pipelines |
| href | value.\_links.self.href | string | href |
| href | value.\_links.web.href | string | href |
| folder | value.folder | string | folder |
| id | value.id | integer | id |
| name | value.name | string | name |
| revision | value.revision | integer | revision |
| url | value.url | string | url |

### Run

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| count | count | integer | count |
| value | value | array of object | Pipeline Run |
| href | value.\_links.self.href | string |  |
| href | value.\_links.web.href | string |  |
| href | value.\_links.pipeline.web.href | string |  |
| href | value.\_links.pipeline.href | string |  |
| url | value.pipeline.url | string |  |
| id | value.pipeline.id | integer |  |
| revision | value.pipeline.revision | integer |  |
| name | value.pipeline.name | string |  |
| folder | value.pipeline.folder | string |  |
| state | value.state | RunState | Run State |
| createdDate | value.createdDate | string | created date |
| url | value.url | string | URL to pipeline |
| id | value.id | integer | pipeline id |
| name | value.name | string | name |
| result | value.result | RunResult | Run Result |
| finishedDate | value.finishedDate | string | run finished date |

### RunResult

Run Result

Run Result

    - string

### RunState

Run State

Run State

    - string