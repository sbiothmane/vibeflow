---
layout: Reference
title: Azure File Storage - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azurefile/
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
document_id: fe55e39c-fee6-4dfa-4920-59cbcc51ce4d
document_version_independent_id: 43ebb921-ddef-49bd-7a5f-1416a6b50ca7
updated_at: 2026-03-26T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azurefile/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ddd50f862a19e850e063936ce2b61ad4eec06165/docs/azurefile/index.yml
git_commit_id: ddd50f862a19e850e063936ce2b61ad4eec06165
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azurefile/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azurefile/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/a9a12e3a-5d9d-4197-ad96-b826bc774b60
- https://authoring-docs-microsoft.poolparty.biz/devrel/01a89bec-e73f-4ce0-a00a-ae34ad62e5fe
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/6dfd60ec-b0d6-48ef-9c74-057162ea03fb
- https://authoring-docs-microsoft.poolparty.biz/devrel/50038ab9-5431-4515-9dfc-c24291ef4fce
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: 21f87878-98a7-fbe4-e3bf-15e1c4c2f25f
---

# Azure File Storage

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/azurefile/icon.png)
Microsoft Azure Storage provides a massively scalable, durable, and highly available storage for data on the cloud, and serves as the data storage solution for modern applications. Connect to File Storage to perform various operations such as create, update, get and delete on files in your Azure Storage account.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/storage/files/ |

## Actions that support [chunking](/en-us/azure/logic-apps/logic-apps-handle-large-messages) feature.

- Get file content
- Get file content using path
- Create file
- Update file

These actions can be used to handle files up to 300MB. The feature is enabled by default.

## Known issues and limitations

1. Logic apps can't directly access storage accounts that are behind firewalls if they're both in the same region. As a workaround, you can have your logic apps and storage account in different regions. For more information about enabling access from Azure Logic Apps to storage accounts behind firewalls, see the [Access storage accounts behind firewalls](/en-us/azure/connectors/connectors-create-api-azurefilestorage#access-storage-accounts-behind-firewalls)

## Connect to Azure File connector using file endpoint

- Enter the full Azure Storage file endpoint on `Azure Storage account name or file endpoint` parameter.
- You must provide the full endpoint, including the schema, for example:

    - `https://account.file.core.windows.net/`
    - `https://account-secondary.file.core.windows.net/` (if connecting to the secondary endpoint)
    - Relative URLs (for example, `account.file.core.windows.net`) will be rejected.

### Get the Azure Storage file endpoint for a given storage account

There are multiple ways to get this file endpoint:

- Using Azure portal

    1. On [Microsoft Azure](https://portal.azure.com), navigate to the Azure Storage account you wish to connect
    2. Under `Settings` section (left blade), click on `Endpoints`
    3. The file endpoint will be under **File service**, on the `file service` text box.
- Using [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP) REST API call

    1. Get the Azure Storage account `subscription Id` and `resource group name`.
    2. Navigate to [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP)
    3. Click on the `Try it` button on the top right corner of the HTTP call
    4. Sign in (the user should have access to the storage account)
    5. Choose the Azure tenant the Azure Storage account is located on
    6. Enter the Azure Storage's account name, resource group name, and select the subscription the storage account is located on
    7. Click `Run`
    8. The file endpoint will be on `file` property under `primaryEndpoints` object on the response

### General Limits

| Name | Value |
| --- | --- |
| Maximum file size (in MB) | 50 |
| Maximum number of megabytes being transferred to/from the connector within a bandwidth time interval (per connection) | 1000 |
| Bandwidth time interval (in miliseconds) | 60000 |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or file endpoint | string | Name or file endpoint of the Azure Storage account the connector should use. | True |
| Azure Storage Account Access Key | securestring | Specify a valid primary/secondary Azure Storage account access key. | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 600 | 60 seconds |

## Actions

| Copy file | This operation copies a file. |
| --- | --- |
| Create file | This operation uploads a file to Azure File Storage. |
| Delete file | This operation deletes a file. |
| Extract archive to folder | This operation extracts an archive file into a folder (example: .zip). |
| Get file content | This operation retrieves file contents using id. |
| Get file content using path | This operation retrieves file contents using path |
| Get file metadata | This operation retrieves file metadata using file id. |
| Get file metadata using path | This operation retrieves file metadata using path. |
| List files | This operation lists files in a folder. |
| Update file | This operation updates a file in Azure File Storage. |

### Copy file

- Operation ID:
    - CopyFile

This operation copies a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source url | source | True | string | Specify the Url to source file |
| Destination file path | destination | True | string | Specify the destination file path, including target filename |
| Overwrite? | overwrite |  | boolean | Should the destination file be overwritten (true/false)? |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create file

- Operation ID:
    - CreateFile

This operation uploads a file to Azure File Storage.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder path | folderPath | True | string | Specify folder path to upload |
| File name | name | True | string | Specify name of the file to create |
| File content | body | True | binary | Specify content of the file to upload |

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
| File | id | True | string | Specify the file to delete |

### Extract archive to folder

- Operation ID:
    - ExtractFolderV2

This operation extracts an archive file into a folder (example: .zip).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source archive file path | source | True | string | Specify the path to the archive file |
| Destination folder path | destination | True | string | Specify the path in Azure File Storage to extract the archive contents |
| Overwrite? | overwrite |  | boolean | Should destination file be overwritten (true/false)? |

#### Returns

- response
    - array of BlobMetadata

### Get file content

- Operation ID:
    - GetFileContent

This operation retrieves file contents using id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file to get contents |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file content using path

- Operation ID:
    - GetFileContentByPath

This operation retrieves file contents using path

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File path | path | True | string | Specify unique path to the file |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file metadata

- Operation ID:
    - GetFileMetadata

This operation retrieves file metadata using file id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file to get metadata |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get file metadata using path

- Operation ID:
    - GetFileMetadataByPath

This operation retrieves file metadata using path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File path | path | True | string | Specify unique path to the file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### List files

- Operation ID:
    - ListFolderV2

This operation lists files in a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | Specify the folder |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### Update file

- Operation ID:
    - UpdateFile

This operation updates a file in Azure File Storage.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file to update |
| File content | body | True | binary | Specify the content to update the file with |

#### Returns

Blob metadata

- Body
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

### BlobMetadataPage

Represents a page of blob metadata.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of BlobMetadata | Blob metadata collection. |

### binary

This is the basic data type 'binary'.