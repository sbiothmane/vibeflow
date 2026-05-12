---
layout: Reference
title: SharePoint - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/sharepointonline/
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
document_id: 69a01872-3062-4100-f807-7d43e8111e9f
document_version_independent_id: 48560378-76ed-cb42-e816-894179e1f16d
updated_at: 2026-05-07T19:05:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/sharepointonline/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/17b4f7c8286f2a336a10075fbd867b4459099c39/docs/sharepointonline/index.yml
git_commit_id: 17b4f7c8286f2a336a10075fbd867b4459099c39
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: sharepointonline/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/sharepointonline/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/9d7be3ef-f27c-4c7f-9eba-67c3cd429995
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/feeb50f3-b677-44f9-b3a6-5f2f58182b0d
platformId: 9b19081d-0d85-6968-6157-6942bcdef94d
---

# SharePoint

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1809/1.0.1809.4714/sharepointonline/icon.png)
SharePoint helps organizations share and collaborate with colleagues, partners, and customers. You can connect to SharePoint Online or to an on-premises SharePoint 2016 or 2019 farm using the On-Premises Data Gateway to manage documents and list items.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | SharePoint |
| URL | [https://learn.microsoft.com/en-us/connectors/sharepoint/](/en-us/connectors/sharepoint/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/sharepoint/collaboration |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Content and Files |

This reference article describes the operations and other information about the SharePoint connector available in the previously listed services and products.

## General known issues and limitations

- This connector supports list item attachment sizes up to 90 MB.
- "Deprecated" triggers and actions are no longer actively maintained. While these operations still exist in this connector, you're strongly advised to not use them in any new solutions or apps.
- Conditional access policies, such as multi-factor authentication or device compliance policies, might block access to data available through this connector. For more information, see [Microsoft Entra ID Conditional Access](/en-us/azure/active-directory/conditional-access/).
- Guest user accounts can't view or retrieve drop-down list information in connector operations.
- If you get an incomplete data set, or if you can't get accurate results from a SharePoint list, this problem might by caused by delegation limits. For more information, see [SharePoint delegation improvements](https://www.microsoft.com/power-platform/blog/power-apps/sharepoint-delegation-improvements/).
- This connector doesn't support setting up [sensitivity labels on a SharePoint file](/en-us/purview/sensitivity-labels-sharepoint-default-label).
- [Term set](/en-us/sharepoint/set-up-new-term-set) label updates don't automatically appear in a connected flow or app. To work around this problem, directly edit the affected list item to force refresh the term set label.
- If the extraction process encounters special characters, the action named **Extract folder** might lead to character distortion. To avoid this problem, use a modern zip archive tool or library that adheres to the standard zip specification. This guidance means that the action should use the UTF-8 encoding process and set the language encoding header flag when the action constructs the zip file. For an example library, see the [.NET Zip Archive SDK](/en-us/dotnet/api/system.io.compression.ziparchive?view=net-8.0)). This scenario isn't a limitation in the connector's ability to support special character zips in the operation, but rather an issue with the archive tool that leads to this problem.

## Logic Apps

- This connector supports file sizes up to 100 MB.
- Uploads or downloads for larger files might fail due to buffer size limits. For larger files, consider other approaches such as Microsoft Graph API calls or intermediate storage.

## Power Automate

- Flows for lists are supported only in generic lists and generic document libraries. Custom list and library templates are currently unsupported, including but not limited to lists such as Announcements, Contacts, Events, and Tasks.
- If you use the name for list or library as a dynamic value in the **List Name** parameter, and the name has a period anywhere, for example, `MySharePoint.List`, the name causes an error. To resolve this error, select the list from the dropdown menu in Power Automate. If you must use the name as a dynamic value, in the **List Name** parameter, enter the list's ID instead.
- For flows that use the SharePoint trigger named **For a selected file** or **For a selected item**, the SharePoint Automate menu lists only the flows in the [default environment](/en-us/power-platform/admin/environments-overview#the-default-environment).
- The Power Automate portal doesn't list specific built-in SharePoint flows, such as **Request sign-off**, which are also uneditable.
- For a flow with a SharePoint trigger, you [can't undo](/en-us/power-automate/limits-and-config#concurrency-looping-and-debatching-limits) the gesture to enable or disable the trigger's concurrency control. If you try, you get the **"CannotDisableTriggerConcurrency"** error. To work around this problem, export the flow and edit the JSON file to remove the "concurrency control" element. This action disables the concurrency option when you import the flow.

For more information about the connector in Power Automate, see:

- [Build workflows with Power Automate and SharePoint](/en-us/power-automate/sharepoint-overview)
- [Send an email when a new item is created in a SharePoint list](/en-us/sharepoint/dev/business-apps/power-automate/get-started/create-your-first-flow)
- [Microsoft SharePoint Connector in Power Automate](/en-us/sharepoint/dev/business-apps/power-automate/sharepoint-connector-actions-triggers)

## Power Apps

- [Custom forms](/en-us/powerapps/maker/canvas-apps/customize-list-form) for lists are supported only in generic lists and generic document libraries. Custom list and library templates are currently unsupported, including but not limited to lists such as Announcements, Contacts, Events, and Tasks.
- Custom forms for document libraries support only editing custom metadata. Editing or managing files is unsupported.
- You can't move custom forms after creation to a different list or [environment](/en-us/power-platform/admin/working-with-environments). However, you can [set the environment](/en-us/powershell/module/microsoft.powerapps.administration.powershell/set-adminpowerappsharepointformenvironment) where Power Apps saves new custom forms.
- If the **Customize forms** option isn't available or doesn't correctly work for your list, the list might contain data types that [Power Apps doesn't support](/en-us/powerapps/maker/canvas-apps/connections/connection-sharepoint-online#known-issues).

### SharePoint image column limitations in Power Apps

- This connector supports image file sizes up to 90 MB for uploads to a list through Power Apps.
- This connector supports only the [listed image formats](https://support.microsoft.com/office/file-types-supported-for-previewing-files-in-onedrive-sharepoint-and-teams-e054cd0f-8ef2-4ccb-937e-26e37419c5e4).
- SharePoint image types might show Full, Large, Medium, and Small modifiers, for example, **ThisItem.'Item Photo'.Small**. Images with Small, Medium, and Large sizes are created on demand and temporarily cached. An image cached for too long is removed and regenerated on demand.
- Power Apps generally refreshes image metadata every 30 seconds. If you create an app and want to immediately refresh the images, on the data source, select the ellipses button (...) to refresh the data.
- Images stored in a collection won't correctly render. Try directly accessing them by using a **Filter** expression.
- If you create an app from SharePoint or add a gallery control that connects to a SharePoint list with an image column, images might appear in the gallery even if the image column is hidden in the list. You can use the Power Apps fields list to show or hide any image field.

### Data type mappings in Power Apps

For more information, see [Data type mappings](/en-us/power-apps/maker/canvas-apps/connections/connection-sharepoint-online#power-apps-data-type-mappings).

### Functions and operations in Power Apps delegable to SharePoint

For more information, see [Delegable functions and operations for SharePoint](/en-us/power-apps/maker/canvas-apps/connections/connection-sharepoint-online#power-apps-delegable-functions-and-operations-for-sharepoint).

#### Delegation notes

- You can delegate expressions joined by **And** or **Or** to SharePoint. You can't delegate expressions joined by **Not**.
- SharePoint supports delegating complex types by deferring the delegation decision to the subfield involved. Check the subfield type on the complex type and then check the table in [Delegable functions and operations for SharePoint](/en-us/power-apps/maker/canvas-apps/connections/connection-sharepoint-online#power-apps-delegable-functions-and-operations-for-sharepoint) for delegation capabilities. For the **Person** data type, you can delegate only **Email** and **DisplayName**.
- The SharePoint ID field for a table is a number field in Power Apps. However, SharePoint supports only the equals operator (=) for delegation on an ID field.
- You can't delegate a formula such as `Filter(..., IsBlank(CustomerId))` to SharePoint. However, this formula is semantically close to `Filter(..., CustomerId = Blank())`, which you can delegate to SharePoint. These formulas aren't equivalent because the second formula doesn't treat the empty string ("") as empty. However, the second formula might work for your purposes. On SharePoint, this approach works for the equals operator (=) but not for the not equals operator (&lt;&gt;).
- You can't delegate SharePoint system fields, including the following:

    - ContentType
    - FilenameWithExtension
    - FullPath
    - ​​​​​​Identifier
    - IsCheckedOut
    - IsFolder
    - Link​
    - Name
    - Path
    - ModerationComment
    - ModerationStatus
    - Thumbnail
    - TriggerWindowStartToken
    - TriggerWindowEndToken
    - VersionNumber

### General Limits

| Name | Value |
| --- | --- |
| Maximum number of megabytes being transferred to/from the connector within a bandwidth time interval (per connection) | 1000 |
| Bandwidth time interval (in miliseconds) | 60000 |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Not shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |
| Authentication Type | string | Authentication type to connect to your database |  |
| Username | securestring | Username credential | True |
| Password | securestring | Password credential | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 600 | 60 seconds |

## Actions

| Add attachment | Adds a new attachment to the specified list item. |
| --- | --- |
| Agreements Solution - Generate document within Agreements Solution workspace | Use this action to create documents based on modern templates in a Agreements Solution workspace. This is behind a payment wall currently in planning (either license or PayG). |
| Approve hub site join request | Approve hub site join request. This will return an approval token that can be used to complete the join request using the join hub site action. |
| Cancel hub site join request | Cancel hub join request. If applicable, you should specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action. |
| Check if the scheduled version of the item is published [DEPRECATED] | Returns the result in the output variable IsFilePublished. |
| Check in file | Check in a checked out file in a document library, which makes the version of the document available to others. |
| Check out file | Check out a file in a document library to prevent others from editing the document, and your changes from being visible until the documented is checked in. |
| Copy file | Copies a file. Works in a similar way to the "Copy to" command in SharePoint libraries. Returns information about the new file after copy. |
| Copy file (deprecated) | Copies a file to a SharePoint site. |
| Copy folder | Copies a folder. Works in a similar way to the "Copy to" command in SharePoint libraries. Returns information about the new folder after copy. |
| Create an approval request for an item or file | Creates an approval request for an item or file. |
| Create file | Uploads a file to a SharePoint site. Make sure to pick an existing library. |
| Create item | Creates a new item in a SharePoint list. |
| Create new document set | Creates a new document set list item. |
| Create new folder | Creates a new folder or folder path. |
| Create sharing link for a file or folder | Create sharing link for a file or folder. |
| Delete attachment | Deletes the specified attachment. |
| Delete file | Deletes the file specified by the file identifier. |
| Delete item | Deletes an item from a SharePoint list. |
| Discard check out | If you check out a file and don’t make changes to it, or you make changes that you don’t want to keep, you can simply discard the checkout, rather than saving the file. If your organization tracks versions, a new version is created each time you check a file back into the library. By discarding the checkout, you can avoid making new versions when you haven’t made any changes to the file. |
| Extract folder | Extracts an archive file into a SharePoint folder (example: .zip). |
| Generate a document from a form (preview) | Use this action to create documents from a document generation template. Map the template fields to the corresponding content in the data source. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see: [https://learn.microsoft.com/sharepoint/dev/declarative-customization/structured-documents](/en-us/sharepoint/dev/declarative-customization/structured-documents). |
| Generate document using Microsoft Syntex (preview) | Use this action to create documents based on modern templates from Microsoft Syntex. This preview requires a Syntex license. Pricing is subject to change. For more info see: [https://docs.microsoft.com/en-us/microsoft-365/contentunderstanding/content-assembly](/en-us/microsoft-365/contentunderstanding/content-assembly). |
| Get all lists and libraries | Get all lists and libraries. |
| Get attachment content | Returns file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment. |
| Get attachments | Returns the list of attachments for the specified list item. You can add a "Get attachment content" step and use the "File identifier" property returned by this action to get to the contents of the file. |
| Get changes for an item or a file (properties only) | Returns information about columns that have changed within a given time window. Note: The list must have Versioning turned on. |
| Get file content | Gets file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment. |
| Get file content using path | Gets file contents using the file path. |
| Get file metadata | Gets information about the file such as size, etag, created date, etc. Uses a file identifier to pick the file. Use "Get file properties" action to get to the values stored in the columns in the library. |
| Get file metadata using path | Gets information about the file such as size, etag, created date, etc. Uses a file path to pick the file. Use "Get file properties" action to get to the values stored in the columns in the library. |
| Get file properties | Gets the properties saved in the columns in the library for the item specified by the item id. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually. |
| Get files (properties only) | Gets the properties saved in the columns in the library for all folders and files stored in the library. You can also filter down to the items that match a condition. An "Apply to each" section is usually used to work with the output from this action. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually. |
| Get folder metadata | Gets information about the folder. Uses a file identifier to pick the folder. |
| Get folder metadata using path | Gets information about the folder. Uses a folder path to pick the folder. |
| Get form metadata (preview) | Use this action to get the form metadata, which includes the form ID, title, link, form type, and the output format. It also gets the form questions used to collect information. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see: [https://learn.microsoft.com/sharepoint/dev/declarative-customization/structured-documents](/en-us/sharepoint/dev/declarative-customization/structured-documents). |
| Get item | Gets a single item by its id from a SharePoint list. |
| Get items | Gets items from a SharePoint list. |
| Get list views | Gets views from a SharePoint list. |
| Get lists | Gets SharePoint lists from a site. |
| Grant access to an item or a folder | Grant access to an item or a folder in SharePoint to specific people. |
| Join hub site | Join the requested site to the hub site. An Approval Token is required to complete the join successfully if that hub requires approval. If applicable, you should specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action. |
| List folder | Returns files contained in a SharePoint folder. |
| List root folder | Returns files in the root SharePoint folder. |
| Move file | Moves a file. Works in a similar way to the "Move to" command in SharePoint libraries. Returns information about the new file after move. |
| Move folder | Moves a folder. Works in a similar way to the "Move to" command in SharePoint libraries. Returns information about the new folder after move. |
| Resolve person | Returns a single matching user value so it can be assigned to a column of type person. If there are no matches, or multiple matches, this action will error out. |
| Send an HTTP request to SharePoint | Construct a SharePoint REST API to invoke. Note – This action may execute any SharePoint REST API you have access to. Please proceed with caution. |
| Set content approval status | Sets the content approval status for an item in a list or library that has content approval turned on. You must provide an ETag for pages and files. You can get the ETag using the Get File Metadata action. This action is only available for SharePoint Online and SharePoint 2019. |
| Set hub site join status to pending | Set the requested site's hub join request status to pending. The Approval Correlation Id is an optional parameter that helps SharePoint identify a particular hub join request. The requesting site can only have one pending request at a given time. |
| Stop sharing an item or a file | Delete all links giving access to an item or a file and remove all people with direct access except for owners. |
| Update file | Updates the contents of the file specified by the file identifier. |
| Update file properties | Updates the properties stored in columns in a library for the item specified by the item id. Use "Update file" action to update file contents. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually. |
| Update file properties using AI Builder model results | Updates the values stored in library columns for a file analyzed by the model specified by the ModelId. |
| Update item | Updates an item in a SharePoint list. |

### Add attachment

- Operation ID:
    - CreateAttachment

Adds a new attachment to the specified list item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List Name | table | True | string | SharePoint list name. |
| Id | itemId | True | integer | Id of the list item to attach the file to. |
| File Name | displayName | True | string | File name. |
| File Content | body | True | binary | Content of the file. |

#### Returns

SharePoint list item attachment

- Body
    - SPListItemAttachment

### Agreements Solution - Generate document within Agreements Solution workspace

- Operation ID:
    - CreateAgreementsSolutionDocument

Use this action to create documents based on modern templates in a Agreements Solution workspace. This is behind a payment wall currently in planning (either license or PayG).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Agreements Solution Workspace | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Agreements Solution Template | template | True | string | Agreements Solution template. |
| Fields | item | True | dynamic | Document placeholder values. |
| File Name | documentName |  | string | Document file name. |
| Table (no effect) | table |  | string | This parameter does nothing. Please do not use. |
| View (no effect) | view |  | string | This parameter does nothing. Please do not use. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Approve hub site join request

- Operation ID:
    - ApproveHubSiteJoin

Approve hub site join request. This will return an approval token that can be used to complete the join request using the join hub site action.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Hub Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Requesting Site Id | joiningSiteId | True | string | Id of the requesting site. |

#### Returns

Result object of ApproveHubSiteJoin action

- Body
    - ApproveHubSiteJoinResponse

### Cancel hub site join request

- Operation ID:
    - CancelHubSiteJoinApproval

Cancel hub join request. If applicable, you should specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Requesting Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Approval Correlation Id | approvalCorrelationId |  | string | Approval correlation identifier for this request. |

### Check if the scheduled version of the item is published [DEPRECATED]

- Operation ID:
    - CheckIfFileIsPublished

Returns the result in the output variable IsFilePublished.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Item ID | id | True | integer | Unique identifier of the file. |
| Scheduled Version | scheduledVersion | True | string | Version of file that was scheduled for publish. |

#### Returns

Output object of the CheckIfFileIsPublished endpoint on the SPO Connector shim

- Body
    - PublishedResult

### Check in file

- Operation ID:
    - CheckInFile

Check in a checked out file in a document library, which makes the version of the document available to others.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Id | id | True | integer | Id of the list item the file is attached to. |
| Comments | comment | True | string | Type comments describing what has changed in this version |
| Check in type | checkinType | True | integer | Select the type of version you would like to check in |

### Check out file

- Operation ID:
    - CheckOutFile

Check out a file in a document library to prevent others from editing the document, and your changes from being visible until the documented is checked in.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Id | id | True | integer | Id of the list item the file is attached to. |

### Copy file

- Operation ID:
    - CopyFileAsync

Copies a file. Works in a similar way to the "Copy to" command in SharePoint libraries. Returns information about the new file after copy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Current Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File to Copy | sourceFileId | True | string | File Identifier |
| Destination Site Address | destinationDataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Destination Folder | destinationFolderPath | True | string | Destination Folder |
| If another file is already there | nameConflictBehavior | True | integer | Pick one of the options available |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Copy file (deprecated)

- Operation ID:
    - CopyFile

Copies a file to a SharePoint site.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Source File Path | source | True | string | Path to the source file. |
| Destination File Path | destination | True | string | Path to the destination file. |
| Overwrite Flag | overwrite |  | boolean | Whether or not to overwrite the destination file if it exists. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Copy folder

- Operation ID:
    - CopyFolderAsync

Copies a folder. Works in a similar way to the "Copy to" command in SharePoint libraries. Returns information about the new folder after copy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Current Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder to Copy | sourceFolderId | True | string | File Identifier |
| Destination Site Address | destinationDataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Destination Folder | destinationFolderPath | True | string | Destination Folder |
| If another folder is already there | nameConflictBehavior | True | integer | Pick one of the options available |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Create an approval request for an item or file

- Operation ID:
    - CreateApprovalRequest

Creates an approval request for an item or file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library | table | True | string | SharePoint list or library name. |
| Id | id | True | integer | Id of the item the approval request is being created for. |
| Approval Type | approvalType | True | integer | Select an approval type. |
| Approval Schema | approvalSchema | True | dynamic | Schema for the selected approval type. |

#### Returns

Output object of the new approval request

- Body
    - ApprovalData

### Create file

- Operation ID:
    - CreateFile

Uploads a file to a SharePoint site. Make sure to pick an existing library.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder Path | folderPath | True | string | Must start with an existing library. Add folders if needed. |
| File Name | name | True | string | Name of the file. |
| File Content | body | True | binary | Content of the file. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Create item

- Operation ID:
    - PostItem

Creates a new item in a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Item | item | True | dynamic | Item to create |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Create new document set

- Operation ID:
    - CreateNewDocumentSet

Creates a new document set list item.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library | table | True | string | SharePoint library name. |
| Document Set Path | path | True | string | Example: folder1/folder2/dsName |
| Content Type Id | contentTypeId | True | string | Example: 0x0120D520 |
| DynamicProperties | DynamicProperties |  | object |  |

#### Returns

 The outputs of this operation are dynamic. 

### Create new folder

- Operation ID:
    - CreateNewFolder

Creates a new folder or folder path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library | table | True | string | SharePoint list or library name. |
| Folder Path | path | True | string | Example: folder1/folder2/folder3 |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view. |

#### Returns

 The outputs of this operation are dynamic. 

### Create sharing link for a file or folder

- Operation ID:
    - CreateSharingLink

Create sharing link for a file or folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Item Id | id | True | integer | Id of the file or folder item. |
| Link Type | type | True | string | The type of sharing link to create |
| Link Scope | scope | True | string | Choose who your sharing link gives access to. "Anyone" option will only work if your administrator has enabled it. |
| Link Expiration | expirationDateTime |  | date-time | The date after which the link will expire in yyyy-MM-dd format. Only applicable for anonymous links. |

#### Returns

Internal structure for sharing links

- Body
    - SharingLinkPermission

### Delete attachment

- Operation ID:
    - DeleteAttachment

Deletes the specified attachment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List Name | table | True | string | SharePoint list name. |
| Id | itemId | True | integer | Id of the list item the file is attached to. |
| File Identifier | attachmentId | True | string | File identifier for the attachment. |

### Delete file

- Operation ID:
    - DeleteFile

Deletes the file specified by the file identifier.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Select a file. |

### Delete item

- Operation ID:
    - DeleteItem

Deletes an item from a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Id | id | True | integer | Unique identifier of item to be deleted |

### Discard check out

- Operation ID:
    - DiscardFileCheckOut

If you check out a file and don’t make changes to it, or you make changes that you don’t want to keep, you can simply discard the checkout, rather than saving the file. If your organization tracks versions, a new version is created each time you check a file back into the library. By discarding the checkout, you can avoid making new versions when you haven’t made any changes to the file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Id | id | True | integer | Id of the list item the file is attached to. |

### Extract folder

- Operation ID:
    - ExtractFolderV2

Extracts an archive file into a SharePoint folder (example: .zip).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Source File Path | source | True | string | Path to the source file. |
| Destination Folder Path | destination | True | string | Path to the destination folder. |
| Overwrite Flag | overwrite |  | boolean | Whether or not to overwrite the destination file if it exists. |

#### Returns

- response
    - array of BlobMetadata

### Generate a document from a form (preview)

- Operation ID:
    - SubmitDocGenForm

Use this action to create documents from a document generation template. Map the template fields to the corresponding content in the data source. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see: [https://learn.microsoft.com/sharepoint/dev/declarative-customization/structured-documents](/en-us/sharepoint/dev/declarative-customization/structured-documents).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Document Library Name | table | True | string | SharePoint document library name. |
| Form Name | form | True | string | Form identifier. |
| Fields | item | True | dynamic | Form field values. |
| View (no effect) | view |  | string | This parameter does nothing. Please do not use. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Generate document using Microsoft Syntex (preview)

- Operation ID:
    - CreateContentAssemblyDocument

Use this action to create documents based on modern templates from Microsoft Syntex. This preview requires a Syntex license. Pricing is subject to change. For more info see: [https://docs.microsoft.com/en-us/microsoft-365/contentunderstanding/content-assembly](/en-us/microsoft-365/contentunderstanding/content-assembly).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Document Library Name | table | True | string | SharePoint document library name. |
| Document Template | template | True | string | Document template. |
| Placeholders | item | True | dynamic | Document placeholder values. |
| Folder Path | folderPath |  | string | Must start with an existing library. |
| File Name | fileName |  | string | Document file name. |
| View (no effect) | view |  | string | This parameter does nothing. Please do not use. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Get all lists and libraries

- Operation ID:
    - GetAllTables

Get all lists and libraries.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |

#### Returns

Represents a list of tables.

- Body
    - TablesList

### Get attachment content

- Operation ID:
    - GetAttachmentContent

Returns file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List Name | table | True | string | SharePoint list name. |
| Id | itemId | True | integer | Id of the list item the file is attached to. |
| File Identifier | attachmentId | True | string | File identifier for the attachment. |

#### Returns

The content of the attachment.

- Attachment Content
    - binary

### Get attachments

- Operation ID:
    - GetItemAttachments

Returns the list of attachments for the specified list item. You can add a "Get attachment content" step and use the "File identifier" property returned by this action to get to the contents of the file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List Name | table | True | string | SharePoint list name. |
| Id | itemId | True | string | Id of the list item to get attachments from. |

#### Returns

- response
    - array of SPListItemAttachment

### Get changes for an item or a file (properties only)

- Operation ID:
    - GetItemChanges

Returns information about columns that have changed within a given time window. Note: The list must have Versioning turned on.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library Name | table | True | string | SharePoint list or library name. |
| Id | id | True | integer | Id of the item you want to fetch changes for. |
| Since | since | True | string | Trigger Window Start token or an item version label (ex: 3.0) or an ISO 8601 date (YYYY-MM-DDThh:mmZ). |
| Until | until |  | string | Trigger Window End token or an item version label (ex: 3.0) or an ISO 8601 date (YYYY-MM-DDThh:mmZ). If blank, defaults to latest version. |
| Include Minor Versions | includeDrafts |  | boolean | Boolean for whether to consider changes from minor (draft) versions. |
| Limit Columns by View | view |  | string | Returns only columns defined in a view. |

#### Returns

 The outputs of this operation are dynamic. 

### Get file content

- Operation ID:
    - GetFileContent

Gets file contents using the file identifier. The contents can be copied somewhere else, or be used as an attachment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Select a file. |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get file content using path

- Operation ID:
    - GetFileContentByPath

Gets file contents using the file path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Path | path | True | string | Select a file. |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get file metadata

- Operation ID:
    - GetFileMetadata

Gets information about the file such as size, etag, created date, etc. Uses a file identifier to pick the file. Use "Get file properties" action to get to the values stored in the columns in the library.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Select a file. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Get file metadata using path

- Operation ID:
    - GetFileMetadataByPath

Gets information about the file such as size, etag, created date, etc. Uses a file path to pick the file. Use "Get file properties" action to get to the values stored in the columns in the library.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Path | path | True | string | Select a file. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Get file properties

- Operation ID:
    - GetFileItem

Gets the properties saved in the columns in the library for the item specified by the item id. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Id | id | True | integer | Unique identifier of item to be retrieved |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Get files (properties only)

- Operation ID:
    - GetFileItems

Gets the properties saved in the columns in the library for all folders and files stored in the library. You can also filter down to the items that match a condition. An "Apply to each" section is usually used to work with the output from this action. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Limit Entries to Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |
| Include Nested Items | viewScopeOption |  | string | Return entries contained in sub-folders (default = true) |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Get folder metadata

- Operation ID:
    - GetFolderMetadata

Gets information about the folder. Uses a file identifier to pick the folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Select a folder. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Get folder metadata using path

- Operation ID:
    - GetFolderMetadataByPath

Gets information about the folder. Uses a folder path to pick the folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder Path | path | True | string | Select a folder. |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Get form metadata (preview)

- Operation ID:
    - GetTableForm

Use this action to get the form metadata, which includes the form ID, title, link, form type, and the output format. It also gets the form questions used to collect information. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see: [https://learn.microsoft.com/sharepoint/dev/declarative-customization/structured-documents](/en-us/sharepoint/dev/declarative-customization/structured-documents).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library Name | table | True | string | SharePoint list name. |
| Form Name | form | True | string | Form identifier. |

#### Returns

Represents a table form with its metadata

- Body
    - TableForm

### Get item

- Operation ID:
    - GetItem

Gets a single item by its id from a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Id | id | True | integer | Unique identifier of item to be retrieved |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Get items

- Operation ID:
    - GetItems

Gets items from a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Limit Entries to Folder | folderPath |  | string | Select a folder, or leave blank for the whole list |
| Include Nested Items | viewScopeOption |  | string | Return entries contained in sub-folders (default = true) |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Get list views

- Operation ID:
    - GetTableViews

Gets views from a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List Name | table | True | string | SharePoint list name. |

#### Returns

- List of Tables
    - array of Table

### Get lists

- Operation ID:
    - GetTables

Gets SharePoint lists from a site.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |

#### Returns

Represents a list of tables.

- Body
    - TablesList

### Grant access to an item or a folder

- Operation ID:
    - GrantAccess

Grant access to an item or a folder in SharePoint to specific people.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library Name | table | True | string | SharePoint list or library name. |
| Id | id | True | integer | Unique identifier of the item or folder you want to grant access to. |
| Recipients | recipients | True | email | A collection of recipients who will receive the sharing invitation |
| Roles | roleValue | True | string | Specify a role that is to be granted to the recipients |
| Message | emailBody |  | string | A plain text formatted message that is included in the sharing invitation |
| Notify Recipients | sendEmail |  | boolean | Specify whether recipients should receive an email notification message |

### Join hub site

- Operation ID:
    - JoinHubSite

Join the requested site to the hub site. An Approval Token is required to complete the join successfully if that hub requires approval. If applicable, you should specify the same Approval Correlation Id as used in the "Set hub site join status to pending" action.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Requesting Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Hub Site Id | hubSiteId | True | string | Id of the hub site. |
| Approval Token | approvalToken |  | string | Approval token for this request. |
| Approval Correlation Id | approvalCorrelationId |  | string | Approval correlation identifier for this request. |

### List folder

- Operation ID:
    - ListFolder

Returns files contained in a SharePoint folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Unique identifier of the folder. |

#### Returns

- response
    - array of BlobMetadata

### List root folder

- Operation ID:
    - ListRootFolder

Returns files in the root SharePoint folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |

#### Returns

- response
    - array of BlobMetadata

### Move file

- Operation ID:
    - MoveFileAsync

Moves a file. Works in a similar way to the "Move to" command in SharePoint libraries. Returns information about the new file after move.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Current Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File to Move | sourceFileId | True | string | File Identifier |
| Destination Site Address | destinationDataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Destination Folder | destinationFolderPath | True | string | Destination Folder |
| If another file is already there | nameConflictBehavior | True | integer | Pick one of the options available |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Move folder

- Operation ID:
    - MoveFolderAsync

Moves a folder. Works in a similar way to the "Move to" command in SharePoint libraries. Returns information about the new folder after move.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Current Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder to Move | sourceFolderId | True | string | File Identifier |
| Destination Site Address | destinationDataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Destination Folder | destinationFolderPath | True | string | Destination Folder |
| If another folder is already there | nameConflictBehavior | True | integer | Pick one of the options available |

#### Returns

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

- Body
    - SPBlobMetadataResponse

### Resolve person

- Operation ID:
    - SearchForUser

Returns a single matching user value so it can be assigned to a column of type person. If there are no matches, or multiple matches, this action will error out.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library | table | True | string | Pick the list or library that the column is in. |
| Column | entityId | True | string | Pick the column you want to assign the value to. |
| Email or name | searchValue | True | string | Use the email address, or the full name of the user. |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view. |

#### Returns

SharePoint expanded user field

- Body
    - SPListExpandedUser

### Send an HTTP request to SharePoint

- Operation ID:
    - HttpRequest

Construct a SharePoint REST API to invoke. Note – This action may execute any SharePoint REST API you have access to. Please proceed with caution.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Method | method | True | string | Http Method |
| Uri | uri | True | string | Example: \_api/web/lists/getbytitle('Documents') |
| Headers | headers |  | object | Enter JSON object of request headers |
| Body | body |  | string | Enter request content in JSON |

#### Returns

### Set content approval status

- Operation ID:
    - SetApprovalStatus

Sets the content approval status for an item in a list or library that has content approval turned on. You must provide an ETag for pages and files. You can get the ETag using the Get File Metadata action. This action is only available for SharePoint Online and SharePoint 2019.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | SharePoint library name. |
| Id | id | True | integer | Id of the item you are setting the status of. |
| Action | approvalAction | True | string | Pick the approval action. |
| Comments | comments |  | string | Add the comments from the approver. |
| ETag | entityTag |  | string | Add an ETag (required for files and pages). |

#### Returns

SetApprovalStatus output

- Body
    - SetApprovalStatusOutput

### Set hub site join status to pending

- Operation ID:
    - NotifyHubSiteJoinApprovalStarted

Set the requested site's hub join request status to pending. The Approval Correlation Id is an optional parameter that helps SharePoint identify a particular hub join request. The requesting site can only have one pending request at a given time.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Requesting Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Approval Correlation Id | approvalCorrelationId |  | string | Approval correlation identifier for this request. |

### Stop sharing an item or a file

- Operation ID:
    - UnshareItem

Delete all links giving access to an item or a file and remove all people with direct access except for owners.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| List or Library Name | table | True | string | SharePoint list or library name. |
| Id | id | True | integer | Unique identifier of the item or file you want to stop sharing. |

### Update file

- Operation ID:
    - UpdateFile

Updates the contents of the file specified by the file identifier.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| File Identifier | id | True | string | Select a file. |
| File Content | body | True | binary | Content of the file. |

#### Returns

Represents blob datasets metadata response

- Body
    - BlobMetadataResponse

### Update file properties

- Operation ID:
    - PatchFileItem

Updates the properties stored in columns in a library for the item specified by the item id. Use "Update file" action to update file contents. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Id | id | True | integer | Unique identifier of item to be updated |
| Item | item | True | dynamic | Item with changed properties |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### Update file properties using AI Builder model results

- Operation ID:
    - PatchFileItemWithPredictedValues

Updates the values stored in library columns for a file analyzed by the model specified by the ModelId.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Library Name | table | True | string | Library Name. |
| Id | id | True | integer | Unique identifier of item to be updated. |
| ModelId | modelId |  | string | Enter modelId of the Model which is used for prediction |
| PredictResult | predictResult |  | string | Enter request content in JSON |

#### Returns

 The outputs of this operation are dynamic. 

### Update item

- Operation ID:
    - PatchItem

Updates an item in a SharePoint list.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Id | id | True | integer | Unique identifier of item to be updated |
| Item | item | True | dynamic | Item with changed properties |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

## Triggers

| For a selected file | This trigger allows you to start a flow for a selected file. Inputs: Site Address, Library Name. Outputs: Name, Link to Item, ID. (Available only for Power Automate.) |
| --- | --- |
| For a selected item | This trigger allows you to start a flow for a selected item in a SharePoint list or library. You can use the columns of the list or library as output parameters. For a file, you can use the "identifier" column to get file content. (Available only for Power Automate.) |
| When a file is classified by a Microsoft Syntex model | Triggers a flow when Microsoft Syntex changes the classification date of any file in the library. The date changes when a document processing model classifies or extracts information. |
| When a file is created (properties only) | Triggers when an item is created in a library. Returns only the properties stored in the library columns. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually. |
| When a file is created in a folder (deprecated) | Triggers when a file is created in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |
| When a file is created or modified (properties only) | Triggers when an item is created, or modified in a library. Returns only the properties stored in the library columns. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually. |
| When a file is created or modified in a folder (deprecated) | Triggers when a file is created, and also each time it is modified in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |
| When a file is deleted | Triggers when a file is deleted in a library. You can optionally specify a folder to watch as well. When a folder is deleted, the trigger will fire only once for the deleted folder. This can only be used by site collection admins of the site where the list is located. |
| When a form is submitted (preview) | This operation triggers a flow when a list, document generation, or file upload form is submitted. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see:https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-structured-document-generation |
| When a site has requested to join a hub site | Triggers a flow upon hub site join approval. (Available only for Power Automate.) |
| When an item is created | Triggers when an item is created. |
| When an item is created or modified | Triggers when an item is created, and also each time it is modified. |
| When an item is deleted | Triggers when an item is deleted in a list. This can only be used by site collection admins of the site where the list is located. |
| When an item or a file is modified | Triggers when an item is modified (but not when it is created). |

### For a selected file

- Operation ID:
    - OnFileSelected

This trigger allows you to start a flow for a selected file. Inputs: Site Address, Library Name. Outputs: Name, Link to Item, ID. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| schema | schema | True | object |  |
| headersSchema | headersSchema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rows | body.rows | array of object |  |
| ID | body.rows.ID | integer | File Identifier |
| itemUrl | body.rows.itemUrl | string | File Url |
| fileName | body.rows.fileName | string | File Name |
| User id | headers.x-ms-user-id-encoded | guid | The unique identifier of the user who triggered the flow in AAD. |
| User email | headers.x-ms-user-email-encoded | byte | The email address of the user who triggered the flow. |
| User name | headers.x-ms-user-name-encoded | byte | The display name of the user who triggered the flow. |
| Timestamp | headers.x-ms-user-timestamp | string | The time the flow was triggered. |

### For a selected item

- Operation ID:
    - OnItemSelected

This trigger allows you to start a flow for a selected item in a SharePoint list or library. You can use the columns of the list or library as output parameters. For a file, you can use the "identifier" column to get file content. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| schema | schema | True | object |  |
| headersSchema | headersSchema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rows | body.rows | array of object |  |
| ID | body.rows.ID | integer | File Identifier |
| itemUrl | body.rows.itemUrl | string | File Url |
| fileName | body.rows.fileName | string | File Name |
| User id | headers.x-ms-user-id-encoded | guid | The unique identifier of the user who triggered the flow in AAD. |
| User email | headers.x-ms-user-email-encoded | byte | The email address of the user who triggered the flow. |
| User name | headers.x-ms-user-name-encoded | byte | The display name of the user who triggered the flow. |
| Timestamp | headers.x-ms-user-timestamp | string | The time the flow was triggered. |

### When a file is classified by a Microsoft Syntex model

- Operation ID:
    - GetOnUpdatedFileClassifiedTimes

Triggers a flow when Microsoft Syntex changes the classification date of any file in the library. The date changes when a document processing model classifies or extracts information.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When a file is created (properties only)

- Operation ID:
    - GetOnNewFileItems

Triggers when an item is created in a library. Returns only the properties stored in the library columns. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When a file is created in a folder (deprecated)

- Operation ID:
    - OnNewFile

Triggers when a file is created in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder Id | folderId | True | string | Select a folder. |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### When a file is created or modified (properties only)

- Operation ID:
    - GetOnUpdatedFileItems

Triggers when an item is created, or modified in a library. Returns only the properties stored in the library columns. You can add a "Get file content" step and use the "File identifier" property returned by this action to get to the contents of the file. When using this with the On-Premises Data Gateway, the name of the library to connect to may need to be entered manually.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When a file is created or modified in a folder (deprecated)

- Operation ID:
    - OnUpdatedFile

Triggers when a file is created, and also each time it is modified in a SharePoint folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename`. |
| Folder Id | folderId | True | string | Select a folder. |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### When a file is deleted

- Operation ID:
    - GetOnDeletedFileItems

Triggers when a file is deleted in a library. You can optionally specify a folder to watch as well. When a folder is deleted, the trigger will fire only once for the deleted folder. This can only be used by site collection admins of the site where the list is located.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| Library Name | table | True | string | SharePoint library name |
| Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |

#### Returns

List of Deleted items

- Body
    - DeletedItemList

### When a form is submitted (preview)

- Operation ID:
    - GetOnNewItemsFromForm

This operation triggers a flow when a list, document generation, or file upload form is submitted. Document generation forms is a part of AI in SharePoint Public Preview. For more info on getting started, see:https://learn.microsoft.com/en-us/sharepoint/ai-in-sharepoint-structured-document-generation

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List or Library Name | table | True | string | SharePoint list or library name |
| Form Name | form | True | string | Form identifier |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When a site has requested to join a hub site

- Operation ID:
    - OnHubSiteJoinApproval

Triggers a flow upon hub site join approval. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId | True | string |  |
| host | host |  | object |  |
| parameters | parameters | True | object |  |
| schema | schema | True | object |  |
| headersSchema | headersSchema |  | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rows | body.rows | array of object |  |
| RequestingSiteUrl | body.rows.RequestingSiteUrl | string | Requesting Site Url |
| RequestingSiteId | body.rows.RequestingSiteId | string | Requesting Site Id |
| RequestingSiteTitle | body.rows.RequestingSiteTitle | string | Requesting Site Title |
| ApprovalCorrelationId | body.rows.ApprovalCorrelationId | string | Approval Correlation Id |
| User id | headers.x-ms-user-id-encoded | guid | The unique identifier of the user who triggered the flow in AAD. |
| User email | headers.x-ms-user-email-encoded | byte | The email address of the user who triggered the flow. |
| User name | headers.x-ms-user-name-encoded | byte | The display name of the user who triggered the flow. |
| Timestamp | headers.x-ms-user-timestamp | string | The time the flow was triggered. |

### When an item is created

- Operation ID:
    - GetOnNewItems

Triggers when an item is created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When an item is created or modified

- Operation ID:
    - GetOnUpdatedItems

Triggers when an item is created, and also each time it is modified.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

### When an item is deleted

- Operation ID:
    - GetOnDeletedItems

Triggers when an item is deleted in a list. This can only be used by site collection admins of the site where the list is located.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List Name | table | True | string | SharePoint list name |

#### Returns

List of Deleted items

- Body
    - DeletedItemList

### When an item or a file is modified

- Operation ID:
    - GetOnChangedItems

Triggers when an item is modified (but not when it is created).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Site Address | dataset | True | string | Example: `https://contoso.sharepoint.com/sites/sitename` |
| List or Library Name | table | True | string | SharePoint list name |
| Folder | folderPath |  | string | Select a folder, or leave blank for the whole library |
| Limit Columns by View | view |  | string | Avoid column threshold issues by only using columns defined in a view |

#### Returns

 The outputs of this operation are dynamic. 

## Definitions

### ApprovalData

Output object of the new approval request

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Approval Request ID | ApprovalId | string | The ID of the approval request created |

### ApproveHubSiteJoinResponse

Result object of ApproveHubSiteJoin action

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ApprovalToken | ApprovalToken | string | Approval Token |

### BlobMetadata

Blob metadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The unique id of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| DisplayName | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| LastModified | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The size of the file or folder. |
| MediaType | MediaType | string | The media type of the file or folder. |
| IsFolder | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| FileLocator | FileLocator | string | The filelocator of the file or folder. |

### BlobMetadataResponse

Represents blob datasets metadata response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The unique id of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| DisplayName | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| LastModified | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The size of the file or folder. |
| MediaType | MediaType | string | The media type of the file or folder. |
| IsFolder | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| FileLocator | FileLocator | string | The filelocator of the file or folder. |

### DeletedItem

An item deleted from a SharePoint list or library

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | ID | integer | List item id |
| Name | Name | string | File name of the item in document libraries, display name of the item in lists |
| Filename with extension | FileNameWithExtension | string | File name with extension of the item in document libraries, same as Name of the item in lists |
| Deleted by | DeletedByUserName | string | The name of the user who deleted this item |
| Time deleted | TimeDeleted | date-time | When this item was deleted |
| Is folder | IsFolder | boolean | A true/false value to indicate if the item is a folder |

### DeletedItemList

List of Deleted items

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of DeletedItem | List of Deleted Items |

### PublishedResult

Output object of the CheckIfFileIsPublished endpoint on the SPO Connector shim

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| IsFilePublished | IsFilePublished | boolean | A boolean value (true, false) to indicate whether the scheduled version of the file has been published |

### SetApprovalStatusOutput

SetApprovalStatus output

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ETag | ETag | string | ETag of the item after the approval status was set |
| ApprovalLink | ApprovalLink | string | A link to the item that needs approval |
| PublishStartDate | PublishStartDate | string | Date time at which the item will be Published |
| ContentApprovalStatus | ContentApprovalStatus | string | The content approval status of the list item |
| ScheduledVersion | ScheduledVersion | string | The version of the item that has been scheduled |

### SharingLink

Internal structure for sharing links

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Sharing Link | webUrl | string | A link to the item |

### SharingLinkPermission

Internal structure for sharing links

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| link | link | SharingLink | Internal structure for sharing links |

### SPBlobMetadataResponse

The SharePoint version of the BlobMetadataResponse extends the object by adding some additional fields that we want serialized

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ItemId | ItemId | integer | The value that can be used to Get or Update file properties in libraries. |
| Id | Id | string | The unique id of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| DisplayName | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| LastModified | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The size of the file or folder. |
| MediaType | MediaType | string | The media type of the file or folder. |
| IsFolder | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| FileLocator | FileLocator | string | The filelocator of the file or folder. |

### SPListExpandedUser

SharePoint expanded user field

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Claims | Claims | string | user claims |
| DisplayName | DisplayName | string | user title |
| Email | Email | string | user email |
| Picture | Picture | string | user picture |
| Department | Department | string | user department |
| JobTitle | JobTitle | string | user job title |
| @odata.type | @odata.type | string |  |

### SPListItemAttachment

SharePoint list item attachment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | File identifier |
| AbsoluteUri | AbsoluteUri | string | Link to attachment |
| DisplayName | DisplayName | string | Name |

### Table

Represents a table.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | Name | string | The name of the table. The name is used at runtime. |
| DisplayName | DisplayName | string | The display name of the table. |
| DynamicProperties | DynamicProperties | object | Additional table properties provided by the connector to the clients. |

### TablesList

Represents a list of tables.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Table | List of Tables |

### FormFieldMetadata

Represents metadata for a form field

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | ID | string | Gets or sets the field ID |
| Name | Name | string | Gets or sets the field Name |
| IsRequired | IsRequired | boolean | Gets or sets a value indicating whether the field is required |
| DataType | DataType | string | Gets or sets the field data type |
| DefaultValue | DefaultValue | string | Gets or sets the default value |

### TableForm

Represents a table form with its metadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| FormID | FormID | string | Gets or sets the form ID |
| DisplayName | DisplayName | string | Gets or sets the form display name |
| Type | Type | string | Gets or sets the form type |
| Link | Link | string | Gets or sets the form link/URL |
| CreatedBy | CreatedBy | string | Gets or sets the user who created the form |
| Created | Created | date-time | Gets or sets the date the form was created |
| Modified | Modified | date-time | Gets or sets the date the form was last modified |
| ModifiedBy | ModifiedBy | string | Gets or sets the user who last modified the form |
| OutputFormat | OutputFormat | string | Gets or sets the output format (e.g. "Word document", "PDF document", "None") |
| FieldsMetadata | FieldsMetadata | array of FormFieldMetadata | Gets or sets Form Fields |

### binary

This is the basic data type 'binary'.