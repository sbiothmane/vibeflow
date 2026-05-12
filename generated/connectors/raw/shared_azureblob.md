---
layout: Reference
title: Azure Blob Storage - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureblob/
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
document_id: b4a1ef15-eee8-e31f-e05d-34ae84216545
document_version_independent_id: 01cf0d74-3e50-c6c9-fe0d-7d639886318c
updated_at: 2025-07-02T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azureblob/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/70b4ce8e0e173553e34b919ec1525f9f4460f1b2/docs/azureblob/index.yml
git_commit_id: 70b4ce8e0e173553e34b919ec1525f9f4460f1b2
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureblob/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azureblob/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/ea957f26-244e-4bd1-9b19-105f0a0a73d6
- https://authoring-docs-microsoft.poolparty.biz/devrel/a9a12e3a-5d9d-4197-ad96-b826bc774b60
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/85dd85bb-c2e5-412e-96b2-f2765a3fe51c
- https://authoring-docs-microsoft.poolparty.biz/devrel/6dfd60ec-b0d6-48ef-9c74-057162ea03fb
platformId: 98475f3a-57a7-0940-74d0-6a67b5b1ea4e
---

# Azure Blob Storage

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1747/1.0.1748.4181/azureblob/icon.png)
Microsoft Azure Storage provides a massively scalable, durable, and highly available storage for data on the cloud, and serves as the data storage solution for modern applications. Connect to Blob Storage to perform various operations such as create, update, get and delete on blobs in your Azure Storage account.

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
| URL | https://azure.microsoft.com/support/ |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/storage/blobs/ |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Productivity |

## Azure Data Lake Storage Gen2

The Azure Blob Storage connector now supports connecting to Azure Data Lake Storage Gen2 (ADLS Gen2) accounts, using [multi-protocol access](/en-us/azure/storage/blobs/data-lake-storage-multi-protocol-access). You can read more about this new feature, including the availability and known limitations in this [blog](https://azure.microsoft.com/blog/silo-busting-2-0-multi-protocol-access-for-azure-data-lake-storage/).

## Known issues and limitations

1. The action **Extract archive to folder** ignores empty files and folders in the archive, they are not extracted to the destination.
2. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.
3. In some cases, When a blob is added or modified (properties only) [DEPRECATED] trigger may delay in returning blobs immediately and postpone newly created/modified blobs for the next trigger runs. This means that the trigger does not guarantee to return all files in a single run when "Split On" option is disabled.
4. For V2 operations, `Storage account name` parameter is auto-populated **only** when using key-based authentication. When using Microsoft Entra ID and Managed identity connections, enter the storage account name as a custom value.
5. Logic apps can't directly access storage accounts that are behind firewalls if they're both in the same region. As a workaround, you should keep your storage account in different region. For more information about enabling access from Azure Logic Apps to storage accounts behind firewalls, see the [Access storage accounts behind firewalls](/en-us/azure/connectors/connectors-create-api-azureblobstorage#access-storage-accounts-behind-firewalls)
6. In Power Automate and Power Apps **we don't support connecting to storage accounts that are behind firewalls**. Even if your connection works now, please don't rely on it since it can be broken in the future. There is only one reliable workaround as of now - don't use firewalls in your storage accounts if you want to connect to them from Power Platform.
7. The connector does not support blob names and paths that contain URL decodable characters, i.e. "+" or "%" followed by two hexadecimal digits.
8. The connector does not support gateways. Although creating an Azure Blob Storage in the Connection and Dataflow tab, an incorrect option "Choose a gateway" is displayed.
9. When using "CreateFileV2" operation with "Access Key" authentication from Power Apps the dataset parameter should be "AccountNameFromSettings" instead of the blob endpoint.
10. When the "CreateBlockBlob\_V2" action is used without implementing chunking, it occasionally leads to the creation of blobs with the content type set as "application/octet-stream".
11. As per [Azure Logic Apps documentation](/en-us/azure/logic-apps/logic-apps-limits-and-config?tabs=consumption#messages), Message size supports 100MB only in PowerApps and it's by design. To work around this limit, consider allowing chunking under the action content transfer settings. However, some connectors and APIs might not support chunking or even the default limit. Note: When you send files through a connector, the overall size of the payload and not just the file needs to be under 100 MB.

## Microsoft Entra ID authentication and Azure Blob connector

In order to use Microsoft Entra ID authentication, the account that is being used needs to be assigned an specific role assignment, for more information, visit [Assign an Azure role for access to blob data - Azure Storage](/en-us/azure/storage/blobs/assign-azure-role-data-access?tabs=portal):

Note

Only roles explicitly defined for data access permit a security principal to access blob or queue data. Built-in roles such as Owner, Contributor, and Storage Account Contributor permit a security principal to manage a storage account, but do not provide access to the blob or queue data within that account via Microsoft Entra ID.

Here is a quick test to verify if an account has the required role to perform operations in a container:

1. Sign-in with that account in the Azure Portal.
2. Navigate to the container in the storage account and that will be used and click on `Switch to Microsoft Entra ID User Account` in the Authentication method. This option appears just on top of the search box for blobs.

If an un-authorized message pops-up, the user needs to be assigned Storage Account specific permissions. To do this, the storage account manager should:

1. Navigate to the container's `Access Control (IAM)` tab.
2. Click on `Add`
3. Click on `Add role assignment`
4. Assign a specific `Storage Account` role to the user (for example, `Storage Account Contributor`)

For more information about access roles on Azure Blob, visit [Authorize access to blobs using Microsoft Entra ID](/en-us/azure/storage/blobs/authorize-access-azure-active-directory#assign-azure-roles-for-access-rights)

## Managed identity authentication and Azure Blob connector

Currently, managed identity authentication is only supported in Logic Apps. It is not supported on managed connectors in Integration Service Environment (ISE). Follow steps below to use it to connect to your Azure Blob data:

1. Create an [Azure Managed Identity](/en-us/azure/active-directory/managed-identities-azure-resources/overview)
2. Give identity access to Azure Blob resources. For more details, visit [Authorize access to blobs using Microsoft Entra ID](/en-us/azure/storage/blobs/authorize-access-azure-active-directory#assign-azure-roles-for-access-rights).
3. If using a user-assigned identity, associate the logic app with the managed identity
    1. Navigate to the Logic App that will use the managed identity.
    2. Under Settings section of the blade, click `Identity`
    3. Go to `User assigned` tab and click on `Add`
    4. Select the managed identity to be used and click on `Add`

For more information about authenticating with managed identities in Logic Apps visit [Authenticate access to Azure resources using managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity)

### Known limitations with Microsoft Entra ID and Managed Identity authentication

Due to current authentication pipeline limitations, Microsoft Entra ID guest users aren't supported for Microsoft Entra ID connections to Azure Blob Storage. When using Microsoft Entra ID or Managed identity authentication **only V2 actions are supported**. Deprecated actions will continue to work with `Access Key` authentication, but **will fail if used with an Microsoft Entra ID or Managed identity connection**.

Currently, the following V2 actions are not supported by Microsoft Entra ID OR Managed identity authentication, as a work around, use the action with an access key authentication:

1. Create SAS URI by Path (V2)
2. Get available access policies (V2)

## Connect to Azure Blob connector using blob endpoint

Enter the full Azure Storage blob endpoint when creating an "Access Key" connection or using V2 operations.

- For "Access Key" authentications, enter the full Azure Storage blob endpoint on `Azure Storage account name or blob endpoint` parameter.

    - When using "V2" operations with "Access Key" authentication, the blob endpoint must be provided in the `dataset` parameter as well.
- For "V2" operations, enter the full Azure Storage blob endpoint on `dataset` parameter.
- You must provide the full endpoint, including the schema, for example:

    - `https://account.blob.core.windows.net/`
    - `https://account-secondary.blob.core.windows.net/` (if connecting to the secondary endpoint)
    - Relative paths (for example, `account.blob.core.windows.net`) will be rejected.

### Get the Azure Storage blob endpoint for a given storage account

There are multiple ways to get this blob endpoint:

- Using Azure portal

    1. On [Microsoft Azure](https://portal.azure.com), navigate to the Azure Storage account you wish to connect
    2. Under `Settings` section (left blade), click on `Endpoints`
    3. The blob endpoint will be under **Blob service**, on the `Blob service` text box.
- Using [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP) REST API call

    1. Get the Azure Storage account `subscription Id` and `resource group name`.
    2. Navigate to [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP)
    3. Click on the `Try it` button on the top right corner of the HTTP call
    4. Sign in (the user should have access to the storage account)
    5. Choose the Azure tenant the Azure Storage account is located on
    6. Enter the Azure Storage's account name, resource group name, and select the subscription the storage account is located on.
    7. Click `Run`
    8. The blob endpoint will be on `blob` property under `primaryEndpoints` object on the response

## Connector in-depth

For more information about the connector, see the [in-depth section](/en-us/azure/connectors/connectors-create-api-azureblobstorage).

Important

**Microsoft Entra ID Integrated (Azure Commercial)** connections are disabled in **US Government (GCC)** environments by default. To enable these types of connections, the **Connect to Azure Commercial** setting must be enabled in the Power Platform Admin center by a tenant administrator.

Turning on this setting allows connections to resources in Azure Commercial that operate and send data outside the Power Platform US Government compliance boundary. This is specifically used to allow access to commercial resources from GCC cloud versions of Power Platform Connectors.

**Microsoft Entra ID Integrated (Azure Commercial)** is the **only** authentication type that works from **US Government (GCC)** environments to Azure Commercial resources.

Azure Commercial Authentication disabled by default: ![Disabled by default](assets/disablegsscommercialaccess-disabled.png)

The **Connect to Azure Commercial** setting in the Power Platform Admin center: ![Admin view](assets/disablegsscommercialaccess-admin-view.png)

![Setting](assets/disablegsscommercialaccess-setting.png)

### General Limits

| Name | Value |
| --- | --- |
| Maximum file size with enabled chunking (in MB) | 1024 |
| Maximum file size with disabled chunking, maximum archive size for extraction, maximum size of a source for copy blob operation in case of absolute Uri (in MB) | 50 |
| Maximum number of files in archive | 100 |
| Maximum total size of files in archive (in MB) | 750 |
| Maximum page size for List blobs | 5000 |
| Maximum trackable number of items inside of a virtual folder for trigger | 30000 |
| Maximum number of megabytes being transferred to/from the connector within a bandwidth time interval (per connection) | 300 |
| Bandwidth time interval (in miliseconds) | 1000 |
| Maximum number of requests being processed by the connector concurrently | 100 |
| Maximum number of responses being transferred by the connector concurrently | 200 |
| API calls per connection per 1 minute for "Extract archive to folder operation" | 150 |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Access Key | Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Shareable |
| Access Key (Azure Government) | Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC-High) only | Shareable |
| Access Key (Azure Government) | Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage in Azure Government. | US Government (GCC) only | Shareable |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access your Azure Blob storage. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Not shareable |
| Microsoft Entra ID Integrated (Azure Commercial) | Use Microsoft Entra ID to access your Azure Blob Storage in Azure Commercial. | US Government (GCC) only | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your Azure Blob storage. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC-High) only | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your Azure Blob storage in Azure Government. | US Government (GCC) only | Not shareable |
| Service principal authentication | Use your own Microsoft Entra ID app for service principal authentication. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Access Key

Auth ID: keyBasedAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or blob endpoint | string | Name or blob endpoint of the Azure Storage account the connector should use. | True |
| Azure Storage Account Access Key | securestring | Specify a valid primary/secondary Azure Storage account access key. |  |

### Access Key (Azure Government)

Auth ID: keyBasedAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC-High) only

Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or blob endpoint | string | Name or blob endpoint of the Azure Storage account the connector should use. | True |
| Azure Storage Account Access Key | securestring | Specify a valid primary/secondary Azure Storage account access key. |  |

### Access Key (Azure Government)

Auth ID: keyBasedAuth

Applicable: US Government (GCC) only

Provide Azure Storage account name (or blob endpoint) and Access Key to access your Azure Blob Storage in Azure Government.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or blob endpoint | string | Name or blob endpoint of the Azure Storage account the connector should use. | True |
| Azure Storage Account Access Key | securestring | Specify a valid primary/secondary Azure Storage account access key. |  |

### Client Certificate Auth

Auth ID: certOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |
| Tenant | string |  | True |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a LogicApps Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| LogicApps Managed Identity | managedIdentity | Sign in with a Logic Apps Managed Identity | True |

### Microsoft Entra ID Integrated

Auth ID: tokenBasedAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Use Microsoft Entra ID to access your Azure Blob storage.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Commercial)

Auth ID: oauthCom

Applicable: US Government (GCC) only

Use Microsoft Entra ID to access your Azure Blob Storage in Azure Commercial.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Government)

Auth ID: tokenBasedAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC-High) only

Use Microsoft Entra ID to access your Azure Blob storage.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Government)

Auth ID: tokenBasedAuth

Applicable: US Government (GCC) only

Use Microsoft Entra ID to access your Azure Blob storage in Azure Government.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal authentication

Auth ID: servicePrincipalAuth

Applicable: All regions

Use your own Microsoft Entra ID app for service principal authentication.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client Secret | securestring |  | True |
| Tenant | string |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or blob endpoint | string | Name or blob endpoint of the Azure Storage account the connector should use. | True |
| Azure Storage Account Access Key | securestring | Specify a valid primary/secondary Azure Storage account access key. |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1500 | 60 seconds |

## Actions

| Copy blob (V2) | This operation copies a blob. If blob is being deleted/renamed on server right after it was copied, connector may return HTTP 404 error by it's design. Please use a delay for 1 minute before deleting or renaming newly created blob. Chunk transfer is not supported in this action. If source and destination are present in same storage account, please use relative path. Otherwise, maximum size of a source for copy blob operation is 50 MB. |
| --- | --- |
| Copy blob [DEPRECATED] | This action has been deprecated. Please use [Copy blob (V2)](/en-us/connectors/azureblob/#copy-blob-%28v2%29) instead.<br><br>~~This operation copies a blob. If blob is being deleted/renamed on server right after it was copied, connector may return HTTP 404 error by it's design. Please use a delay for 1 minute before deleting or renaming newly created blob. Chunk transfer is not supported in this action. If source and destination are present in same storage account, please use relative path. Otherwise, maximum size of a source for copy blob operation is 50 MB.~~ |
| Create blob (V2) | This operation uploads a blob to Azure Blob Storage. |
| Create blob [DEPRECATED] | This action has been deprecated. Please use [Create blob (V2)](/en-us/connectors/azureblob/#create-blob-%28v2%29) instead.<br><br>~~This operation uploads a blob to Azure Blob Storage.~~ |
| Create block blob (V2) | This operation uploads a block blob to Azure Blob Storage. |
| Create block blob [DEPRECATED] | This action has been deprecated. Please use [Create block blob (V2)](/en-us/connectors/azureblob/#create-block-blob-%28v2%29) instead.<br><br>~~This operation uploads a block blob to Azure Blob Storage.~~ |
| Create SAS URI by path (V2) | This operation creates a SAS link for a blob using the path. |
| Create SAS URI by path [DEPRECATED] | This action has been deprecated. Please use [Create SAS URI by path (V2)](/en-us/connectors/azureblob/#create-sas-uri-by-path-%28v2%29) instead.<br><br>~~This operation creates a SAS link for a blob using the path.~~ |
| Delete blob (V2) | This operation deletes a blob. |
| Delete blob [DEPRECATED] | This action has been deprecated. Please use [Delete blob (V2)](/en-us/connectors/azureblob/#delete-blob-%28v2%29) instead.<br><br>~~This operation deletes a blob.~~ |
| Extract archive to folder (V2) | This operation extracts an archive blob into a folder (example: .zip). |
| Extract archive to folder [DEPRECATED] | This action has been deprecated. Please use [Extract archive to folder (V2)](/en-us/connectors/azureblob/#extract-archive-to-folder-%28v2%29) instead.<br><br>~~This operation extracts an archive blob into a folder (example: .zip).~~ |
| Get available access policies (V2) | This operation gets available shared access policies for a blob. |
| Get available access policies [DEPRECATED] | This action has been deprecated. Please use [Get available access policies (V2)](/en-us/connectors/azureblob/#get-available-access-policies-%28v2%29) instead.<br><br>~~This operation gets available shared access policies for a blob.~~ |
| Get blob content (V2) | This operation retrieves blob contents using id. |
| Get blob content [DEPRECATED] | This action has been deprecated. Please use [Get blob content (V2)](/en-us/connectors/azureblob/#get-blob-content-%28v2%29) instead.<br><br>~~This operation retrieves blob contents using id.~~ |
| Get blob content using path (V2) | This operation retrieves blob contents using path. |
| Get blob content using path [DEPRECATED] | This action has been deprecated. Please use [Get blob content using path (V2)](/en-us/connectors/azureblob/#get-blob-content-using-path-%28v2%29) instead.<br><br>~~This operation retrieves blob contents using path.~~ |
| Get Blob Metadata (V2) | This operation retrieves blob metadata using blob id. |
| Get Blob Metadata [DEPRECATED] | This action has been deprecated. Please use [Get Blob Metadata (V2)](/en-us/connectors/azureblob/#get-blob-metadata-%28v2%29) instead.<br><br>~~This operation retrieves blob metadata using blob id.~~ |
| Get Blob Metadata using path (V2) | This operation retrieves blob metadata using path. |
| Get Blob Metadata using path [DEPRECATED] | This action has been deprecated. Please use [Get Blob Metadata using path (V2)](/en-us/connectors/azureblob/#get-blob-metadata-using-path-%28v2%29) instead.<br><br>~~This operation retrieves blob metadata using path.~~ |
| Lists blobs (V2) | This operation lists blobs in a container. |
| Lists blobs [DEPRECATED] | This action has been deprecated. Please use [Lists blobs (V2)](/en-us/connectors/azureblob/#lists-blobs-%28v2%29) instead.<br><br>~~This operation lists blobs in a container.~~ |
| Lists blobs in the root folder (V2) | This operation lists blobs in the Azure Blob Storage root folder. |
| Lists blobs in the root folder [DEPRECATED] | This action has been deprecated. Please use [Lists blobs in the root folder (V2)](/en-us/connectors/azureblob/#lists-blobs-in-the-root-folder--%28v2%29) instead.<br><br>~~This operation lists blobs in the Azure Blob Storage root folder.~~ |
| Set blob tier by path (V2) | This operation sets a tier for a block blob on a standard storage account using the path. |
| Set blob tier by path [DEPRECATED] | This action has been deprecated. Please use [Set blob tier by path (V2)](/en-us/connectors/azureblob/#set-blob-tier-by-path-%28v2%29) instead.<br><br>~~This operation sets a tier for a block blob on a standard storage account using the path.~~ |
| Update blob (V2) | This operation updates a blob in Azure Blob Storage. |
| Update blob [DEPRECATED] | This action has been deprecated. Please use [Update blob (V2)](/en-us/connectors/azureblob/#update-blob-%28v2%29) instead.<br><br>~~This operation updates a blob in Azure Blob Storage.~~ |

### Copy blob (V2)

- Operation ID:
    - CopyFile\_V2

This operation copies a blob. If blob is being deleted/renamed on server right after it was copied, connector may return HTTP 404 error by it's design. Please use a delay for 1 minute before deleting or renaming newly created blob. Chunk transfer is not supported in this action. If source and destination are present in same storage account, please use relative path. Otherwise, maximum size of a source for copy blob operation is 50 MB.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Source url | source | True | string | Specify the url to source blob. |
| Destination blob path | destination | True | string | Specify the destination blob path, including the target blob name. |
| Overwrite? | overwrite |  | boolean | Should the destination blob be overwritten (true/false)?. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Copy blob [DEPRECATED]

- Operation ID:
    - CopyFile

This action has been deprecated. Please use [Copy blob (V2)](/en-us/connectors/azureblob/#copy-blob-%28v2%29) instead.

~~This operation copies a blob. If blob is being deleted/renamed on server right after it was copied, connector may return HTTP 404 error by it's design. Please use a delay for 1 minute before deleting or renaming newly created blob. Chunk transfer is not supported in this action. If source and destination are present in same storage account, please use relative path. Otherwise, maximum size of a source for copy blob operation is 50 MB.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source url | source | True | string | Specify the url to source blob. |
| Destination blob path | destination | True | string | Specify the destination blob path, including the target blob name. |
| Overwrite? | overwrite |  | boolean | Should the destination blob be overwritten (true/false)?. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create blob (V2)

- Operation ID:
    - CreateFile\_V2

This operation uploads a blob to Azure Blob Storage.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Folder path | folderPath | True | string | Specify folder path to upload. |
| Blob name | name | True | string | Specify name of the blob to create. |
| Blob content | body | True | binary | Specify the content of the blob to upload. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create blob [DEPRECATED]

- Operation ID:
    - CreateFile

This action has been deprecated. Please use [Create blob (V2)](/en-us/connectors/azureblob/#create-blob-%28v2%29) instead.

~~This operation uploads a blob to Azure Blob Storage.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder path | folderPath | True | string | Specify folder path to upload. |
| Blob name | name | True | string | Specify name of the blob to create. |
| Blob content | body | True | binary | Specify the content of the blob to upload. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create block blob (V2)

- Operation ID:
    - CreateBlockBlob\_V2

This operation uploads a block blob to Azure Blob Storage.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | storageAccountName | True | string | The storage account name. |
| Specify folder path to upload | folderPath | True | string | Specify folder path to upload. |
| Specify name of the blob to create | name | True | string | Specify name of the blob to create. |
| Blob content | body | True | binary | Specify content of the blob to upload. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

### Create block blob [DEPRECATED]

- Operation ID:
    - CreateBlockBlob

This action has been deprecated. Please use [Create block blob (V2)](/en-us/connectors/azureblob/#create-block-blob-%28v2%29) instead.

~~This operation uploads a block blob to Azure Blob Storage.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Specify folder path to upload | folderPath | True | string | Specify folder path to upload. |
| Specify name of the blob to create | name | True | string | Specify name of the blob to create. |
| Blob content | body | True | binary | Specify content of the blob to upload. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

### Create SAS URI by path (V2)

- Operation ID:
    - CreateShareLinkByPath\_V2

This operation creates a SAS link for a blob using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | storageAccountName | True | string | Azure Storage account name or blob endpoint. |
| Blob path | path | True | string | The unique path of the blob. |
| Group Policy Identifier | GroupPolicyIdentifier |  | string | The string identifying a stored access policy. The Group policy parameters (e.g. Start time and End time) have precedence over input parameters mentioned in actions. |
| Permissions | Permissions |  | string | The permissions specified on the SAS (Values separated by comma). |
| Start Time | StartTime |  | date-time | The date and time at which the SAS becomes valid (example: '2017-11-01T15:30:00+00:00'). Default = now(). |
| Expiry Time | ExpiryTime |  | date-time | The date and time after which the SAS is no longer valid (example: '2017-12-01T15:30:00+00:00'). Default = now() + 24h. |
| Shared Access Protocol | AccessProtocol |  | string | The allowed protocols (https only, or http and https). Null if you don't want to restrict protocol. |
| IP address or IP address range | IpAddressOrRange |  | string | The allowed IP address or IP address range. Null if you don't want to restrict based on IP address. |

#### Returns

Shared access signature

- Body
    - SharedAccessSignature

### Create SAS URI by path [DEPRECATED]

- Operation ID:
    - CreateShareLinkByPath

This action has been deprecated. Please use [Create SAS URI by path (V2)](/en-us/connectors/azureblob/#create-sas-uri-by-path-%28v2%29) instead.

~~This operation creates a SAS link for a blob using the path.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob path | path | True | string | The unique path of the blob. |
| Group Policy Identifier | GroupPolicyIdentifier |  | string | The string identifying a stored access policy. The Group policy parameters (e.g. Start time and End time) have precedence over input parameters mentioned in actions. |
| Permissions | Permissions |  | string | The permissions specified on the SAS (Values separated by comma). |
| Start Time | StartTime |  | date-time | The date and time at which the SAS becomes valid (example: '2017-11-01T15:30:00+00:00'). Default = now(). |
| Expiry Time | ExpiryTime |  | date-time | The date and time after which the SAS is no longer valid (example: '2017-12-01T15:30:00+00:00'). Default = now() + 24h. |
| Shared Access Protocol | AccessProtocol |  | string | The allowed protocols (https only, or http and https). Null if you don't want to restrict protocol. |
| IP address or IP address range | IpAddressOrRange |  | string | The allowed IP address or IP address range. Null if you don't want to restrict based on IP address. |

#### Returns

Shared access signature

- Body
    - SharedAccessSignature

### Delete blob (V2)

- Operation ID:
    - DeleteFile\_V2

This operation deletes a blob.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob | id | True | string | Specify the blob to delete. |

### Delete blob [DEPRECATED]

- Operation ID:
    - DeleteFile

This action has been deprecated. Please use [Delete blob (V2)](/en-us/connectors/azureblob/#delete-blob-%28v2%29) instead.

~~This operation deletes a blob.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob | id | True | string | Specify the blob to delete. |

### Extract archive to folder (V2)

- Operation ID:
    - ExtractFolder\_V3

This operation extracts an archive blob into a folder (example: .zip).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Source archive blob path | source | True | string | Specify the path to the archive blob. |
| Destination folder path | destination | True | string | Specify the path in Azure Blob Storage to extract the archive contents. |
| Overwrite? | overwrite |  | boolean | Should destination blob be overwritten (true/false)?. |

#### Returns

- response
    - array of BlobMetadata

### Extract archive to folder [DEPRECATED]

- Operation ID:
    - ExtractFolderV2

This action has been deprecated. Please use [Extract archive to folder (V2)](/en-us/connectors/azureblob/#extract-archive-to-folder-%28v2%29) instead.

~~This operation extracts an archive blob into a folder (example: .zip).~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source archive blob path | source | True | string | Specify the path to the archive blob. |
| Destination folder path | destination | True | string | Specify the path in Azure Blob Storage to extract the archive contents. |
| Overwrite? | overwrite |  | boolean | Should destination blob be overwritten (true/false)?. |

#### Returns

- response
    - array of BlobMetadata

### Get available access policies (V2)

- Operation ID:
    - GetAccessPolicies\_V2

This operation gets available shared access policies for a blob.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | storageAccountName | True | string | Azure Storage account name or blob endpoint. |
| Blob path | path | True | string | The unique path of the blob. |

#### Returns

- response
    - array of SharedAccessSignatureBlobPolicy

### Get available access policies [DEPRECATED]

- Operation ID:
    - GetAccessPolicies

This action has been deprecated. Please use [Get available access policies (V2)](/en-us/connectors/azureblob/#get-available-access-policies-%28v2%29) instead.

~~This operation gets available shared access policies for a blob.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob path | path | True | string | The unique path of the blob. |

#### Returns

- response
    - array of SharedAccessSignatureBlobPolicy

### Get blob content (V2)

- Operation ID:
    - GetFileContent\_V2

This operation retrieves blob contents using id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob | id | True | string | Specify the blob. |
| Infer content type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get blob content [DEPRECATED]

- Operation ID:
    - GetFileContent

This action has been deprecated. Please use [Get blob content (V2)](/en-us/connectors/azureblob/#get-blob-content-%28v2%29) instead.

~~This operation retrieves blob contents using id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob | id | True | string | Specify the blob. |
| Infer content type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get blob content using path (V2)

- Operation ID:
    - GetFileContentByPath\_V2

This operation retrieves blob contents using path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob path | path | True | string | Specify unique path to the blob. |
| Infer content type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get blob content using path [DEPRECATED]

- Operation ID:
    - GetFileContentByPath

This action has been deprecated. Please use [Get blob content using path (V2)](/en-us/connectors/azureblob/#get-blob-content-using-path-%28v2%29) instead.

~~This operation retrieves blob contents using path.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob path | path | True | string | Specify unique path to the blob. |
| Infer content type | inferContentType |  | boolean | Infer content-type based on extension. |

#### Returns

The content of the file.

- File Content
    - binary

### Get Blob Metadata (V2)

- Operation ID:
    - GetFileMetadata\_V2

This operation retrieves blob metadata using blob id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob | id | True | string | Specify the blob. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get Blob Metadata [DEPRECATED]

- Operation ID:
    - GetFileMetadata

This action has been deprecated. Please use [Get Blob Metadata (V2)](/en-us/connectors/azureblob/#get-blob-metadata-%28v2%29) instead.

~~This operation retrieves blob metadata using blob id.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob | id | True | string | Specify the blob. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get Blob Metadata using path (V2)

- Operation ID:
    - GetFileMetadataByPath\_V2

This operation retrieves blob metadata using path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob path | path | True | string | Specify unique path to the blob. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get Blob Metadata using path [DEPRECATED]

- Operation ID:
    - GetFileMetadataByPath

This action has been deprecated. Please use [Get Blob Metadata using path (V2)](/en-us/connectors/azureblob/#get-blob-metadata-using-path-%28v2%29) instead.

~~This operation retrieves blob metadata using path.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob path | path | True | string | Specify unique path to the blob. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Lists blobs (V2)

- Operation ID:
    - ListFolder\_V4

This operation lists blobs in a container.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Folder | id | True | string | Specify the folder. |
| Paging Marker | nextPageMarker |  | string | A marker that identifies the portion of the list to be returned with the list operation". |
| Flat Listing | useFlatListing |  | boolean | Whether or not to list blobs in flat listing". |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### Lists blobs [DEPRECATED]

- Operation ID:
    - ListFolderV2

This action has been deprecated. Please use [Lists blobs (V2)](/en-us/connectors/azureblob/#lists-blobs-%28v2%29) instead.

~~This operation lists blobs in a container.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | Specify the folder. |
| Paging Marker | nextPageMarker |  | string | A marker that identifies the portion of the list to be returned with the list operation". |
| Flat Listing | useFlatListing |  | boolean | Whether or not to list blobs in flat listing". |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### Lists blobs in the root folder (V2)

- Operation ID:
    - ListRootFolder\_V4

This operation lists blobs in the Azure Blob Storage root folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Paging Marker | nextPageMarker |  | string | A marker that identifies the portion of the list to be returned with the list operation. |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### Lists blobs in the root folder [DEPRECATED]

- Operation ID:
    - ListRootFolderV2

This action has been deprecated. Please use [Lists blobs in the root folder (V2)](/en-us/connectors/azureblob/#lists-blobs-in-the-root-folder--%28v2%29) instead.

~~This operation lists blobs in the Azure Blob Storage root folder.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Paging Marker | nextPageMarker |  | string | A marker that identifies the portion of the list to be returned with the list operation. |

#### Returns

Represents a page of blob metadata.

- Body
    - BlobMetadataPage

### Set blob tier by path (V2)

- Operation ID:
    - SetBlobTierByPath\_V2

This operation sets a tier for a block blob on a standard storage account using the path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | storageAccountName | True | string | Azure Storage account name or blob endpoint. |
| Blob path | path | True | string | The unique path of the blob. |
| Blob Tier | newTier | True | string | The new tier for the blob. |

### Set blob tier by path [DEPRECATED]

- Operation ID:
    - SetBlobTierByPath

This action has been deprecated. Please use [Set blob tier by path (V2)](/en-us/connectors/azureblob/#set-blob-tier-by-path-%28v2%29) instead.

~~This operation sets a tier for a block blob on a standard storage account using the path.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob path | path | True | string | The unique path of the blob. |
| Blob Tier | newTier | True | string | The new tier for the blob. |

### Update blob (V2)

- Operation ID:
    - UpdateFile\_V2

This operation updates a blob in Azure Blob Storage.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Blob | id | True | string | Specify the blob to update. |
| Blob content | body | True | binary | Specify the content of the blob to update. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Update blob [DEPRECATED]

- Operation ID:
    - UpdateFile

This action has been deprecated. Please use [Update blob (V2)](/en-us/connectors/azureblob/#update-blob-%28v2%29) instead.

~~This operation updates a blob in Azure Blob Storage.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Blob | id | True | string | Specify the blob to update. |
| Blob content | body | True | binary | Specify the content of the blob to update. |
| Content-Type | Content-Type |  | string | Specify content-type of the blob to upload. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

## Triggers

| When a blob is added or modified (properties only) (V2) | This operation triggers a flow when one or more blobs are added or modified in a container. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |
| --- | --- |
| When a blob is added or modified (properties only) [DEPRECATED] | This action has been deprecated. Please use [When a blob is added or modified (properties only) (V2)](/en-us/connectors/azureblob/#when-a-blob-is-added-or-modified-%28properties-only%29-%28v2%29) instead.<br><br>~~This operation triggers a flow when one or more blobs are added or modified in a container. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.~~ |

### When a blob is added or modified (properties only) (V2)

- Operation ID:
    - OnUpdatedFiles\_V2

This operation triggers a flow when one or more blobs are added or modified in a container. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or blob endpoint | dataset | True | string | Azure Storage account name or blob endpoint. |
| Container | folderId | True | string | Select a container. |
| Number of blobs to return | maxFileCount |  | integer | Maximum number of blobs to return from the trigger (1-100). |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

### When a blob is added or modified (properties only) [DEPRECATED]

- Operation ID:
    - OnUpdatedFiles

This action has been deprecated. Please use [When a blob is added or modified (properties only) (V2)](/en-us/connectors/azureblob/#when-a-blob-is-added-or-modified-%28properties-only%29-%28v2%29) instead.

~~This operation triggers a flow when one or more blobs are added or modified in a container. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Container | folderId | True | string | Select a container. |
| Number of blobs to return | maxFileCount |  | integer | Maximum number of blobs to return from the trigger (1-100). |

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

### BlobMetadataPage

Represents a page of blob metadata.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of BlobMetadata | Blob metadata collection. |
| nextLink | nextLink | string | An Url which can be used to retrieve the next page. |
| Next page marker | nextPageMarker | string | A marker which can be used to retrieve the next page. |

### SharedAccessSignatureBlobPolicy

The set of parameters to generate a SAS link.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Group Policy Identifier | GroupPolicyIdentifier | string | The string identifying a stored access policy. The Group policy parameters (e.g. Start time and End time) have precedence over input parameters mentioned in actions. |
| Permissions | Permissions | string | The permissions specified on the SAS (Values separated by comma). |
| Start Time | StartTime | date-time | The date and time at which the SAS becomes valid (example: '2017-11-01T15:30:00+00:00'). Default = now(). |
| Expiry Time | ExpiryTime | date-time | The date and time after which the SAS is no longer valid (example: '2017-12-01T15:30:00+00:00'). Default = now() + 24h. |
| Shared Access Protocol | AccessProtocol | string | The allowed protocols (https only, or http and https). Null if you don't want to restrict protocol. |
| IP address or IP address range | IpAddressOrRange | string | The allowed IP address or IP address range. Null if you don't want to restrict based on IP address. |

### SharedAccessSignature

Shared access signature

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Web Url | WebUrl | uri | A URL to an object with access token. |

### binary

This is the basic data type 'binary'.