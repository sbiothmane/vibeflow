---
layout: Reference
title: OneDrive - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/onedrive/
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
document_id: a93c9d5d-a9ba-bc6e-e978-c835c3415da6
document_version_independent_id: 9e792056-8840-b6fa-b3ae-cc4516c48134
updated_at: 2025-10-29T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/onedrive/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0/docs/onedrive/index.yml
git_commit_id: d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: onedrive/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/onedrive/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/7428317a-e6c2-4461-ad3e-8a8ad3608734
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/12ed19f9-ebdf-4c8a-8bcd-7a681836774d
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/e4f59707-f107-48f2-8d75-0afd91868cd7
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3a764584-4f97-452b-8f1d-36f19b12f6ae
platformId: 4f6ae09c-535c-a788-a50b-d40a947442bd
---

# OneDrive

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/onedrive/icon.png)
Connect to OneDrive to manage your files. You can perform various actions such as upload, update, get, and delete on files in OneDrive.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - China Cloud operated by 21Vianet |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/onedrive/online-cloud-storage |

## Known Issues and Limitations

The following are some of the known limitations and file size constraints in place for the protection of the connector’s service. Kindly note that attempting to perform operations beyond the limits will result in rejection, errors, or timeouts.

1. If you see an error while converting the file to PDF in the flow (e.g. “Bad gateway” or “The resource could not be found”) using OneDrive connector, the recommendation to workaround this issue would be to increase the delay between the file creation and converting to PDF.

    For troubleshooting the issue with HTML to PDF conversion, please learn more [here](/en-us/onedrive/developer/rest-api/api/driveitem_get_content_format?view=odsp-graph-online#known-issues-with-html-to-pdf-conversion).
2. The maximum archive size for Extract archive to folder action is 50 MB and 100 files inside.
3. The When a file is created or When a file is modified triggers will skip every file bigger than 50 MB.
4. The Copy File action for larger files may fail with time out error (due to needing to take longer to copy larger files). The size at which this occurs varies depending on the service load.
5. The Upload file from URL action will always report success after 20 seconds regardless of the actual result. Depending on file size or source download rate, the upload process may take a longer time. To be sure about actual results, you should always create logic in the Flow to check for the existence of the file and/or a timeout before operating on the uploaded file data.
6. Accessing shared files across tenant hostname boundaries is not supported. Example: a user in contoso-my.sharepoint.com cannot access a file in microsoft-my.sharepoint.com
7. Multi-geo scenarios are not supported. Example: a user in contosoeu-my.sharepoint.com cannot access a file in contosoaus-my.sharepoint.com
8. Some errors, like "Access Denied" usually indicate that the file is locked (e.g. by Excel services). Also, the user, file, folder, or tenant may have a policy preventing access. Please see the SharePoint/OneDrive for Business Policies page for details [here](/en-us/sharepoint/troubleshoot/sharing-and-permissions/access-denied-due-to-org-policies).
9. Please note that certain policies can prevent users from using parts or all of the OneDrive connector. The most common policies involve:

    - (Sharing) Prevent file download The OneDrive connector often relies on being able to download the contents of a file. The Prevent File Download policy can prevent the connector from downloading file contents, as it is an uncontrolled expatriation point for data.
    - [Control access from unmanaged devices](/en-us/sharepoint/control-access-from-unmanaged-devices) Similarly, to prevent file download, OneDrive Connector cannot be verified as a managed device since it provides an uncontrolled expatriation point for data.
    - [Control access to SharePoint and OneDrive data based on network location](/en-us/sharepoint/control-access-based-on-network-location) Same as above, OneDrive connector resides on trusted Microsoft networks but can expatriate data.
10. The When a file is modified and When a file is modified (properties only) triggers make a best effort to filter uninteresting modification events (such as instances where file metadata or sharing permissions are modified). However, as OneDrive itself does not provide any explicit facilities to differentiate different kinds of modifications, this process is purely heuristic-based and can occasionally fire the trigger when no noticeable change has occurred.

Note

The connector couldn't determine whenever a file change was initiated by a user or not. The OneDrive services and apps can automatically make the changes in files without user interaction (for example, the Office apps). (especially when using Office software). Therefore, you should make sure that your Flows do not rely solely on OneDrive connector's file changed detection as the trigger can fire one or more times than expected. To workaround this behavior, your processes should have checks or human approval, or be reimplemented using files as the basic unit (rather than entries within a file), as On New File does not have these constraints.

1. On new file and on modified file triggers (all variants) currently may have issues when there are more than approximately 30 pending changes between two trigger polls.
2. Cross-drive functionality is not supported in the OneDrive connector. The connector can only operate on the account used to make the connection to the connector and on data owned by that account. That limitation includes files and folders added with Add to Onedrive / Add shortcut.
3. If you are getting an error while trying to create a connection, please make sure that you use the Microsoft personal account instead of the Microsoft business account.
4. The OneDrive connector will only display up to 200 items per folder in the file picker. Users may have trouble finding items if they have more than 200 items in a folder.
5. The Convert file (Preview) action does not support converting digitally signed, password-protected, or IRM restricted documents from a Microsoft Word document to PDF, due to security reasons.
6. The Extract Archive to Folder action does not support multi-byte characters in the file name.

## Connector in-depth

For more information about the connector, see the [in-depth section](/en-us/azure/connectors/connectors-create-api-onedrive).

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Add file tag | This operation adds a tag to a file. |
| --- | --- |
| Convert file (Preview) | This operation converts a file to another format. The list of supported conversions can be found at https://aka.ms/onedriveconversions |
| Convert file using path (Preview) | This operation converts a file to another format using the path. The list of supported conversions can be found at https://aka.ms/onedriveconversions |
| Copy file | This operation copies a file within OneDrive. |
| Copy file using path | This operation copies a file within OneDrive by path. |
| Create file | This operation creates a file. |
| Create share link | This operation creates a share link for a file. |
| Create share link [DEPRECATED] | This action has been deprecated. Please use [Create share link](/en-us/connectors/onedrive/#create-share-link) instead.<br><br>~~This operation creates a share link for a file.~~ |
| Create share link by path | This operation creates a share link for a file using the path. |
| Create share link by path [DEPRECATED] | This action has been deprecated. Please use [Create share link by path](/en-us/connectors/onedrive/#create-share-link-by-path) instead.<br><br>~~This operation creates a share link for a file using the path.~~ |
| Delete file | This operation deletes a file. |
| Extract archive to folder | This operation extracts an archive file into a folder (example: .zip). Maximum archive size is 50 MB and 100 files inside. |
| Find files in folder | This operation finds files within a folder using search or name pattern match. |
| Find files in folder by path | This operation finds files within a folder by path using search or name pattern match. |
| Get file content | This operation gets the content of a file. |
| Get file content using path | This operation gets the content of a file using the path. |
| Get file metadata | This operation gets the metadata for a file. |
| Get file metadata using path | This operation gets the metadata of a file using the path. |
| Get file tags | This operation gets the tags of a file. |
| Get file thumbnail | This operation gets the thumbnail of a file. The thumbnail will only be valid for 6 hours. |
| List files in folder | This operation gets the list of files and subfolders in a folder. |
| List files in folder [DEPRECATED] | This action has been deprecated. Please use [List files in folder](/en-us/connectors/onedrive/#list-files-in-folder) instead.<br><br>~~This operation gets the list of files and subfolders in a folder.~~ |
| List files in root folder | This operation gets the list of files and subfolders in the root folder. |
| Move or rename a file | This operation moves or renames a file. |
| Move or rename a file using path | This operation moves or renames a file using the path. |
| Remove file tag | This operation removes a tag from a file. |
| Update file | This operation updates a file. |
| Upload file from URL | This operation uploads a file from a URL to OneDrive. |

### Add file tag

- Operation ID:
    - AddFileTag

This operation adds a tag to a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Tag | tag | True | string | The name of the tag. |

#### Returns

Tags

- Body
    - Tags

### Convert file (Preview)

- Operation ID:
    - ConvertFile

This operation converts a file to another format. The list of supported conversions can be found at https://aka.ms/onedriveconversions

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Target type | type |  | string | The target file type |

#### Returns

The content of the file.

- File content
    - binary

### Convert file using path (Preview)

- Operation ID:
    - ConvertFileByPath

This operation converts a file to another format using the path. The list of supported conversions can be found at https://aka.ms/onedriveconversions

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | path | True | string | The unique path of the file. |
| Target type | type |  | string | The target file type |

#### Returns

The content of the file.

- File content
    - binary

### Copy file

- Operation ID:
    - CopyDriveFile

This operation copies a file within OneDrive.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Destination File Path | destination | True | string | The destination file path, including target filename. |
| Overwrite | overwrite |  | boolean | Overwrites the destination file if set to 'true'. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Copy file using path

- Operation ID:
    - CopyDriveFileByPath

This operation copies a file within OneDrive by path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | source | True | string | The unique path of the file. |
| Destination File Path | destination | True | string | The destination file path, including target filename. |
| Overwrite | overwrite |  | boolean | Overwrites the destination file if set to 'true'. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create file

- Operation ID:
    - CreateFile

This operation creates a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder Path | folderPath | True | string | The unique path of the folder. |
| File Name | name | True | string | The name of the file. Certain characters are disallowed by OneDrive and will be replaced by underscores. |
| File Content | body | True | binary | The content of the file. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create share link

- Operation ID:
    - CreateShareLinkV2

This operation creates a share link for a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Link type | type | True | string | The type of link |

#### Returns

- Body
    - SharingLink

### Create share link [DEPRECATED]

- Operation ID:
    - CreateShareLink

This action has been deprecated. Please use [Create share link](/en-us/connectors/onedrive/#create-share-link) instead.

~~This operation creates a share link for a file.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Link type | type | True | string | The type of link |

#### Returns

- Body
    - SharingLink

### Create share link by path

- Operation ID:
    - CreateShareLinkByPathV2

This operation creates a share link for a file using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | path | True | string | The unique path of the file. |
| Link type | type | True | string | The type of link |

#### Returns

- Body
    - SharingLink

### Create share link by path [DEPRECATED]

- Operation ID:
    - CreateShareLinkByPath

This action has been deprecated. Please use [Create share link by path](/en-us/connectors/onedrive/#create-share-link-by-path) instead.

~~This operation creates a share link for a file using the path.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | path | True | string | The unique path of the file. |
| Link type | type | True | string | The type of link |

#### Returns

- Body
    - SharingLink

### Delete file

- Operation ID:
    - DeleteFile

This operation deletes a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |

### Extract archive to folder

- Operation ID:
    - ExtractFolderV2

This operation extracts an archive file into a folder (example: .zip). Maximum archive size is 50 MB and 100 files inside.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source Archive File Path | source | True | string | The path to the archive file. |
| Destination Folder Path | destination | True | string | The path to extract the archive contents. |
| Overwrite | overwrite |  | boolean | Overwrites the destination files if set to 'true'. |

#### Returns

- response
    - array of BlobMetadata

### Find files in folder

- Operation ID:
    - FindFiles

This operation finds files within a folder using search or name pattern match.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search Query | query | True | string | The search query to use |
| Folder | id | True | string | The unique identifier of the folder. |
| File Search Mode | findMode | True | string | The search method to use. "Search" mode searches your OneDrive using the search query (similar a normal search engine). When "Regular Expression Pattern Match" mode is selected, the search query will be treated as a regex pattern, and it will return files with names that match the query |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return (1-100) |

#### Returns

- response
    - array of BlobMetadata

### Find files in folder by path

- Operation ID:
    - FindFilesByPath

This operation finds files within a folder by path using search or name pattern match.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search Query | query | True | string | The search query to use |
| Folder Path | path | True | string | The unique path of the folder. |
| File Search Mode | findMode | True | string | The search method to use. "Search" mode searches your OneDrive using the search query (similar a normal search engine). When "Regular Expression Pattern Match" mode is selected, the search query will be treated as a regex pattern, and it will return files with names that match the query |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return (1-100) |

#### Returns

- response
    - array of BlobMetadata

### Get file content

- Operation ID:
    - GetFileContent

This operation gets the content of a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

### Get file content using path

- Operation ID:
    - GetFileContentByPath

This operation gets the content of a file using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | path | True | string | The unique path of the file. |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

### Get file metadata

- Operation ID:
    - GetFileMetadata

This operation gets the metadata for a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get file metadata using path

- Operation ID:
    - GetFileMetadataByPath

This operation gets the metadata of a file using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | path | True | string | The unique path of the file. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get file tags

- Operation ID:
    - GetFileTags

This operation gets the tags of a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |

#### Returns

Tags

- Body
    - Tags

### Get file thumbnail

- Operation ID:
    - GetFileThumbnail

This operation gets the thumbnail of a file. The thumbnail will only be valid for 6 hours.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Thumbnail Size | size | True | string | The size of the thumbnail to retrieve. |

#### Returns

Thumbnail response data

- Body
    - Thumbnail

### List files in folder

- Operation ID:
    - ListFolderV2

This operation gets the list of files and subfolders in a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | The unique identifier of the folder. |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### List files in folder [DEPRECATED]

- Operation ID:
    - ListFolder

This action has been deprecated. Please use [List files in folder](/en-us/connectors/onedrive/#list-files-in-folder) instead.

~~This operation gets the list of files and subfolders in a folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |

#### Returns

- response
    - array of BlobMetadata

### List files in root folder

- Operation ID:
    - ListRootFolder

This operation gets the list of files and subfolders in the root folder.

#### Returns

- response
    - array of BlobMetadata

### Move or rename a file

- Operation ID:
    - MoveFile

This operation moves or renames a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Destination File Path | destination | True | string | The destination file path, including target filename. |
| Overwrite | overwrite |  | boolean | Overwrites the destination file if set to 'true'. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Move or rename a file using path

- Operation ID:
    - MoveFileByPath

This operation moves or renames a file using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File Path | source | True | string | The unique path of the file. |
| Destination File Path | destination | True | string | The destination file path, including target filename. |
| Overwrite | overwrite |  | boolean | Overwrites the destination file if set to 'true'. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Remove file tag

- Operation ID:
    - RemoveFileTag

This operation removes a tag from a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| Tag | tag | True | string | The name of the tag. |

### Update file

- Operation ID:
    - UpdateFile

This operation updates a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | The unique identifier of the file. |
| File Content | body | True | binary | The content of the file. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Upload file from URL

- Operation ID:
    - CopyFile

This operation uploads a file from a URL to OneDrive.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source URL | source | True | string | The url to the source file. |
| Destination File Path | destination | True | string | The destination file path, including target filename. |
| Overwrite | overwrite |  | boolean | Overwrites the destination file if set to 'true'. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

## Triggers

| When a file is created | This operation triggers a flow when a new file is created in a folder. Files larger than 50 MB will be skipped and not returned by this trigger. Files moved within OneDrive are not considered new files. |
| --- | --- |
| When a file is created (properties only) | This operation triggers a flow when a new file is created in a folder. Files moved within OneDrive are not considered new files. |
| When a file is created (properties only) [DEPRECATED] | This action has been deprecated. Please use [When a file is created (properties only)](/en-us/connectors/onedrive/#when-a-file-is-created-%28properties-only%29) instead.<br><br>~~This operation triggers a flow when a new file is created in a folder. Files moved within OneDrive are not considered new files.~~ |
| When a file is created [DEPRECATED] | This action has been deprecated. Please use [When a file is created](/en-us/connectors/onedrive/#when-a-file-is-created) instead.<br><br>~~This operation triggers a flow when a new file is created in a folder. Files larger than 50 MB will be skipped and not returned by this trigger. Files moved within OneDrive are not considered new files.~~ |
| When a file is deleted (properties only) | This operation triggers a flow when a file is deleted from a folder. |
| When a file is modified | This operation triggers a flow when a file is modified in a folder. Files larger than 50 MB will be skipped and not returned by this trigger. |
| When a file is modified (properties only) | This operation triggers a flow when a file is modified in a folder. |
| When a file is modified (properties only) [DEPRECATED] | This action has been deprecated. Please use [When a file is modified (properties only)](/en-us/connectors/onedrive/#when-a-file-is-modified-%28properties-only%29) instead.<br><br>~~This operation triggers a flow when a file is modified in a folder.~~ |
| When a file is modified [DEPRECATED] | This action has been deprecated. Please use [When a file is modified](/en-us/connectors/onedrive/#when-a-file-is-modified) instead.<br><br>~~This operation triggers a flow when a file is modified in a folder. Files larger than 50 MB will be skipped and not returned by this trigger.~~ |

### When a file is created

- Operation ID:
    - OnNewFileV2

This operation triggers a flow when a new file is created in a folder. Files larger than 50 MB will be skipped and not returned by this trigger. Files moved within OneDrive are not considered new files.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

### When a file is created (properties only)

- Operation ID:
    - OnNewFilesV2

This operation triggers a flow when a new file is created in a folder. Files moved within OneDrive are not considered new files.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is created (properties only) [DEPRECATED]

- Operation ID:
    - OnNewFiles

This action has been deprecated. Please use [When a file is created (properties only)](/en-us/connectors/onedrive/#when-a-file-is-created-%28properties-only%29) instead.

~~This operation triggers a flow when a new file is created in a folder. Files moved within OneDrive are not considered new files.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is created [DEPRECATED]

- Operation ID:
    - OnNewFile

This action has been deprecated. Please use [When a file is created](/en-us/connectors/onedrive/#when-a-file-is-created) instead.

~~This operation triggers a flow when a new file is created in a folder. Files larger than 50 MB will be skipped and not returned by this trigger. Files moved within OneDrive are not considered new files.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

### When a file is deleted (properties only)

- Operation ID:
    - OnDeletedFiles

This operation triggers a flow when a file is deleted from a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is modified

- Operation ID:
    - OnUpdatedFileV2

This operation triggers a flow when a file is modified in a folder. Files larger than 50 MB will be skipped and not returned by this trigger.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

### When a file is modified (properties only)

- Operation ID:
    - OnUpdatedFilesV2

This operation triggers a flow when a file is modified in a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Include subfolders | includeSubfolders |  | boolean | Include items in subfolders |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is modified (properties only) [DEPRECATED]

- Operation ID:
    - OnUpdatedFiles

This action has been deprecated. Please use [When a file is modified (properties only)](/en-us/connectors/onedrive/#when-a-file-is-modified-%28properties-only%29) instead.

~~This operation triggers a flow when a file is modified in a folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is modified [DEPRECATED]

- Operation ID:
    - OnUpdatedFile

This action has been deprecated. Please use [When a file is modified](/en-us/connectors/onedrive/#when-a-file-is-modified) instead.

~~This operation triggers a flow when a file is modified in a folder. Files larger than 50 MB will be skipped and not returned by this trigger.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | The unique identifier of the folder. |
| Infer Content Type | inferContentType |  | boolean | A boolean value (true, false) to infer content-type based on extension. |

#### Returns

The content of the file.

- File content
    - binary

## Definitions

### BlobMetadata

Blob metadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The unique identifier of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| Name without extension | NameNoExt | string | The name of the file or folder, without the file extension. |
| Display name | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| Last modified time | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The file or folder size in bytes. |
| Media type | MediaType | string | The media type of the file or folder. |
| Is folder? | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| File locator | FileLocator | string | The file locator of the file or folder. |
| Last modified by | LastModifiedBy | string | The user who last modified the file or folder. |

### SharingLink

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Web URL | WebUrl | string | A URL that points to the file or folder. |

### Tags

Tags

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Tags | Tags | array of string | A list of tags. |

### Thumbnail

Thumbnail response data

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Url | Url | string | A URL that points to the thumbnail. |
| Width | Width | integer | The thumbnail width in pixels. |
| Height | Height | integer | The thumbnail height in pixels. |

### BlobMetadataPage

Represents a page of blob metadata.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of BlobMetadata | Blob metadata collection. |
| nextLink | nextLink | string | A URL which can be used to retrieve the next page. |

### binary

This is the basic data type 'binary'.