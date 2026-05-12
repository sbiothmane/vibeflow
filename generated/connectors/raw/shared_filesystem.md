---
layout: Reference
title: File System - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/filesystem/
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
document_id: 1e32f470-9966-6207-ed34-db39f7e79395
document_version_independent_id: a0654443-876d-3d36-afb7-189a559d4e9f
updated_at: 2026-03-27T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/filesystem/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/cbe3fddfee6df7864687c0187c1bd3aabf415069/docs/filesystem/index.yml
git_commit_id: cbe3fddfee6df7864687c0187c1bd3aabf415069
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: filesystem/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/filesystem/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 59c0a6b1-2615-6f0b-0c26-3884957457ef
---

# File System

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/filesystem/icon.png)
Connect to File Systems on your local or network machines to read from and write to files using the On-Premises Data Gateway.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Connector in-depth

For more information about the connector, see the [in-depth section](/en-us/azure/logic-apps/logic-apps-using-file-connector).

## Known issues and limitations

1. In some cases, When a file is added or modified (properties only) and When a file is created (properties only) triggers may delay in returning files immediately and postpone newly created/modified files for the next trigger runs. This means that the trigger does not guarantee to return all files in a single run when "Split On" option is disabled.

### General Limits

| Name | Value |
| --- | --- |
| Maximum file size for general operations (in MB) | 30 |
| Maximum file size for create file operation (in MB) | 20 |
| On-premises data gateway connection timeout (in seconds) | 30 |
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
| Root folder | string | Root folder path (examples: \MACHINE\myShare or C:\myShare) | True |
| Authentication Type | string | Authentication type to connect to your gateway computer |  |
| Username | securestring | Username credential (e.g. DOMAIN\Username) | True |
| Password | securestring | Password credential | True |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Append file | This operation appends data to a file. |
| --- | --- |
| Copy file | This operation copies a file to a file system. |
| Create file | This operation creates a file. If the file already exists, the existing content is replaced. |
| Delete file | This operation deletes a file. |
| Extract archive to folder | This operation extracts an archive file into a folder (example: .zip). |
| Get file content | This operation gets the content of a file. |
| Get file content using path | This operation gets the content of a file using the path. |
| Get file metadata | This operation gets the metadata for a file. |
| Get file metadata using path | This operation gets the metadata of a file using the path. |
| List files in folder | This operation gets the list of files and subfolders in a folder. |
| List files in root folder | This operation gets the list of files and subfolders in the root folder. |
| Rename File | This operation renames a file. |
| Update file | This operation updates a file. |

### Append file

- Operation ID:
    - AppendFile

This operation appends data to a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |
| File content | body | True | binary | Content to add to the file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Copy file

- Operation ID:
    - CopyFile

This operation copies a file to a file system.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source path | source | True | string | Path to source file |
| Destination file path | destination | True | string | Destination file path, including target filename |
| Overwrite? | overwrite |  | boolean | Overwrites the destination file if set to 'true |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create file

- Operation ID:
    - CreateFile

This operation creates a file. If the file already exists, the existing content is replaced.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder path | folderPath | True | string | Select a folder |
| File name | name | True | string | Name of the file |
| File content | body | True | binary | Content of the file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Delete file

- Operation ID:
    - DeleteFile

This operation deletes a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |

### Extract archive to folder

- Operation ID:
    - ExtractFolderV2

This operation extracts an archive file into a folder (example: .zip).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source archive file path | source | True | string | Path to the archive file |
| Destination folder path | destination | True | string | Path to the destination folder |
| Overwrite? | overwrite |  | boolean | Overwrites the destination files if set to 'true' |

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
| File | id | True | string | Select a file |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file content using path

- Operation ID:
    - GetFileContentByPath

This operation gets the content of a file using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File path | path | True | string | Select a file |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file metadata

- Operation ID:
    - GetFileMetadata

This operation gets the metadata for a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |

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
| File path | path | True | string | Select a file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### List files in folder

- Operation ID:
    - ListFolder

This operation gets the list of files and subfolders in a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | Select a folder |

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

### Rename File

- Operation ID:
    - RenameFile

This operation renames a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |
| New name | newName | True | string | New name for the file |

#### Returns

Represents blob datasets metadata response

- Body
    - BlobMetadataResponse

### Update file

- Operation ID:
    - UpdateFile

This operation updates a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |
| File content | body | True | binary | Content of the file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

## Triggers

| When a file is added or modified (properties only) | This operation triggers a flow when one or more files are added or modified in a folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |
| --- | --- |
| When a file is created (properties only) | This operation triggers a flow when one or more files are created in a folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |

### When a file is added or modified (properties only)

- Operation ID:
    - OnUpdatedFiles

This operation triggers a flow when one or more files are added or modified in a folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | Select a folder |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |
| Check Created and Modified Time | checkBothCreatedAndModifiedDateTime |  | boolean | If the flag is set to true, the trigger will check the file's created date and time and the file's last modified date and time. If the flag is set to false, the trigger will only check the file's last modified date and time. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a file is created (properties only)

- Operation ID:
    - OnNewFiles

This operation triggers a flow when one or more files are created in a folder. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | Select a folder |
| Number of files to return | maxFileCount |  | integer | Maximum number of files to return by single trigger run (1-100). Note that 'Split On' setting can force trigger to process each item individually. |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

## Definitions

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

### binary

This is the basic data type 'binary'.