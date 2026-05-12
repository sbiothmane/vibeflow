---
layout: Reference
title: Azure Table Storage - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azuretables/
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
document_id: fe88d2b3-07cd-2c33-c835-4aec5f4b3473
document_version_independent_id: 2958cf7f-3c44-4f6f-0656-4aab4c8a8203
updated_at: 2025-11-04T19:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azuretables/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ebae6cad213ce08ef1a49556da0cfb74235fb057/docs/azuretables/index.yml
git_commit_id: ebae6cad213ce08ef1a49556da0cfb74235fb057
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azuretables/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azuretables/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/a9a12e3a-5d9d-4197-ad96-b826bc774b60
- https://authoring-docs-microsoft.poolparty.biz/devrel/653971be-c25b-47ce-b561-80221556af0c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/6dfd60ec-b0d6-48ef-9c74-057162ea03fb
- https://authoring-docs-microsoft.poolparty.biz/devrel/f998336e-f087-4bda-99f7-4001451d0bd2
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
platformId: 41452e59-f5ac-fbfc-286e-f75d0ac4e3d6
---

# Azure Table Storage

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/azuretables/icon.png)
Azure Table storage is a service that stores structured NoSQL data in the cloud, providing a key/attribute store with a schemaless design. Sign into your Storage account to create, update, and query tables and more.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | - | Not available |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/storage/tables/ |

To use this integration, you will need access to an Azure storage account. More information can be found [here](https://azure.microsoft.com/en-us/services/storage/tables/). When trying to make a connection, you will be prompted to provide your storage account name and your storage key. The name of your storage account can be found in the URL, for example if your URL is `https://myaccount.table.core.windows.net` then the account name would be "myaccount". If you have multiple accounts, provide the one you would like to use and select **Create**. If you see an error during creation, check the account name and the key and try again. You're now ready to start using this integration.

## Known issues and limitations

1. Logic apps can't directly access storage accounts that are behind firewalls if they're both in the same region. As a workaround, you can have your logic apps and storage account in different regions. For more information about enabling access from Azure Logic Apps to storage accounts behind firewalls, see the [Access storage accounts behind firewalls](/en-us/azure/connectors/connectors-create-api-azuretablestorage#access-storage-accounts-behind-firewalls)

## Managed identity authentication and Azure Table Storage connector

Currently, managed identity authentication is only supported in Logic Apps. Follow steps below to use it to connect to your Azure Table Storage data:

1. Create an [Azure Managed Identity](/en-us/azure/active-directory/managed-identities-azure-resources/overview)
2. Give identity access to Azure Blob resources. For more details, visit [Authorize access to blobs using Microsoft Entra ID](/en-us/azure/storage/blobs/authorize-access-azure-active-directory#assign-azure-roles-for-access-rights).
3. If using a user-assigned identity, associate the logic app with the managed identity
    1. Navigate to the Logic App that will use the managed identity.
    2. Under Settings section of the blade, click `Identity`
    3. Go to `User assigned` tab and click on `Add`
    4. Select the managed identity to be used and click on `Add`

For more information about authenticating with managed identities in Logic Apps visit [Authenticate access to Azure resources using managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity)

### Known limitations with Microsoft Entra ID authentication

Due to current authentication pipeline limitations, Microsoft Entra ID guest users aren't supported for Microsoft Entra ID connections to Azure Table Storage. When using Microsoft Entra ID or Managed identity authentication **only V2 actions are supported**. Deprecated actions will continue to work with `Access Key` authentication, but **will fail if used with an Microsoft Entra ID or Managed identity connection**.

## Connect to Azure Table Storage connector using table endpoint

Enter the full Azure Storage table endpoint when creating an "Access Key" connection or using V2 operations.

- For "Access Key" authentications, enter the full Azure Storage table endpoint on `Azure Storage account name or table endpoint` parameter.

    - When using "V2" operations with "Access Key" authentication, the table endpoint must be provided in the `storageAccountName` parameter as well.
- For "V2" operations, enter the full Azure Storage table endpoint on `storageAccountName` parameter.
- You must provide the full endpoint, including the schema, for example:

    - `https://account.table.core.windows.net/`
    - `https://account-secondary.table.core.windows.net/` (if connecting to the secondary endpoint)
    - Relative paths (for example, `account.table.core.windows.net`) will be rejected.

### Get the Azure Storage table endpoint for a given storage account

There are multiple ways to get this table endpoint:

- Using Azure portal

    1. On [Microsoft Azure](https://portal.azure.com), navigate to the Azure Storage account you wish to connect
    2. Under `Settings` section (left blade), click on `Endpoints`
    3. The table endpoint will be under **Table service**, on the `table service` text box.
- Using [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP) REST API call

    1. Get the Azure Storage account `subscription Id` and `resource group name`.
    2. Navigate to [Storage Accounts - Get Properties](/en-us/rest/api/storagerp/storage-accounts/get-properties?tabs=HTTP)
    3. Click on the `Try it` button on the top right corner of the HTTP call
    4. Sign in (the user should have access to the storage account)
    5. Choose the Azure tenant the Azure Storage account is located on
    6. Enter the Azure Storage's account name, resource group name, and select the subscription the storage account is located on.
    7. Click `Run`
    8. The table endpoint will be on `table` property under `primaryEndpoints` object on the response

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Access Key | Provide Azure Storage account name (or table endpoint) and Access Key to access your Azure Table Storage. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Shareable |
| Access Key (Azure Government) | Provide Azure Storage account name (or table endpoint) and Access Key to access your Azure Table Storage. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Shareable |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Logic Apps Managed Identity | Create a connection using a Managed Identity | LOGICAPPS only | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access your Azure Table storage. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your Azure Table storage. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Not shareable |
| Service principal authentication | Use your Microsoft Entra ID application for service principal authentication. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Access Key

Auth ID: keyBasedAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Provide Azure Storage account name (or table endpoint) and Access Key to access your Azure Table Storage.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or table endpoint | string | Name or table endpoint of your Azure Storage account | True |
| Shared Storage Key | securestring | The shared storage key of your Azure Storage account | True |

### Access Key (Azure Government)

Auth ID: keyBasedAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Provide Azure Storage account name (or table endpoint) and Access Key to access your Azure Table Storage.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or table endpoint | string | Name or table endpoint of your Azure Storage account | True |
| Shared Storage Key | securestring | The shared storage key of your Azure Storage account | True |

### Client Certificate Auth

Auth ID: certOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Tenant | string |  | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Managed Identity | managedIdentity | Sign in with a Managed Identity | True |

### Microsoft Entra ID Integrated

Auth ID: tokenBasedAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Use Microsoft Entra ID to access your Azure Table storage.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Government)

Auth ID: tokenBasedAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Use Microsoft Entra ID to access your Azure Table storage.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal authentication

Auth ID: servicePrincipalAuth

Applicable: All regions

Use your Microsoft Entra ID application for service principal authentication.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client secret | securestring |  | True |
| Tenant ID | string |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure Storage account name or table endpoint | string | Name or table endpoint of your Azure Storage account | True |
| Shared Storage Key | securestring | The shared storage key of your Azure Storage account | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Create table (V2) | This operation adds a table to the storage account. |
| --- | --- |
| Create table [DEPRECATED] | This action has been deprecated. Please use [Create table (V2)](/en-us/connectors/azuretables/#create-table-%28v2%29) instead.<br><br>~~This operation adds a table to the storage account.~~ |
| Delete a table (V2) | Delete a table. |
| Delete a table [DEPRECATED] | This action has been deprecated. Please use [Delete a table (V2)](/en-us/connectors/azuretables/#delete-a-table-%28v2%29) instead.<br><br>~~Delete a table.~~ |
| Delete Entity (V2) | Operation to delete an entity. |
| Delete Entity [DEPRECATED] | This action has been deprecated. Please use [Delete Entity (V2)](/en-us/connectors/azuretables/#delete-entity-%28v2%29) instead.<br><br>~~Operation to delete an entity.~~ |
| Get a table (V2) | This operation gets the metadata of a table. |
| Get a table [DEPRECATED] | This action has been deprecated. Please use [Get a table (V2)](/en-us/connectors/azuretables/#get-a-table-%28v2%29) instead.<br><br>~~This operation gets the metadata of a table.~~ |
| Get entities (V2) | This operation queries the entities in a table. |
| Get entities [DEPRECATED] | This action has been deprecated. Please use [Get entities (V2)](/en-us/connectors/azuretables/#get-entities-%28v2%29) instead.<br><br>~~This operation queries the entities in a table.~~ |
| Get entity (V2) | This operation gets the entity in a table based on the partition and row key. |
| Get entity [DEPRECATED] | This action has been deprecated. Please use [Get entity (V2)](/en-us/connectors/azuretables/#get-entity-%28v2%29) instead.<br><br>~~This operation gets the entity in a table based on the partition and row key.~~ |
| Insert Entity (V2) | Operation to add an entity to a table. |
| Insert Entity [DEPRECATED] | This action has been deprecated. Please use [Insert Entity (V2)](/en-us/connectors/azuretables/#insert-entity-%28v2%29) instead.<br><br>~~Operation to add an entity to a table.~~ |
| Insert or Merge Entity (V2) | Operation to merge data with an entity in a table, creating a new entity if needed. |
| Insert or Merge Entity [DEPRECATED] | This action has been deprecated. Please use [Insert or Merge Entity (V2)](/en-us/connectors/azuretables/#insert-or-merge-entity-%28v2%29) instead.<br><br>~~Operation to merge data with an entity in a table, creating a new entity if needed.~~ |
| Insert or Replace Entity (V2) | Operation to replace an entity in a table, creating a new entity if needed. |
| Insert or Replace Entity [DEPRECATED] | This action has been deprecated. Please use [Insert or Replace Entity (V2)](/en-us/connectors/azuretables/#insert-or-replace-entity-%28v2%29) instead.<br><br>~~Operation to replace an entity in a table, creating a new entity if needed.~~ |
| List tables (V2) | List all the tables for your storage account. |
| List tables [DEPRECATED] | This action has been deprecated. Please use [List tables (V2)](/en-us/connectors/azuretables/#list-tables-%28v2%29) instead.<br><br>~~This operation lists the tables in the account.~~ |
| Merge Entity (V2) | Operation to merge data with an entity in a table. |
| Merge Entity [DEPRECATED] | This action has been deprecated. Please use [Merge Entity (V2)](/en-us/connectors/azuretables/#merge-entity-%28v2%29) instead.<br><br>~~Operation to merge data with an entity in a table.~~ |
| Replace Entity (V2) | Operation to replace an entity in a table. |
| Replace Entity [DEPRECATED] | This action has been deprecated. Please use [Replace Entity (V2)](/en-us/connectors/azuretables/#replace-entity-%28v2%29) instead.<br><br>~~Operation to replace an entity in a table.~~ |

### Create table (V2)

- Operation ID:
    - CreateTable\_V2

This operation adds a table to the storage account.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | TableName | True | string | Specify the new table |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

The metadata for the table

- Table metadata
    - getTableResponse

### Create table [DEPRECATED]

- Operation ID:
    - CreateTable

This action has been deprecated. Please use [Create table (V2)](/en-us/connectors/azuretables/#create-table-%28v2%29) instead.

~~This operation adds a table to the storage account.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | TableName | True | string | Specify the new table |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

The metadata for the table

- Table metadata
    - getTableResponse

### Delete a table (V2)

- Operation ID:
    - DeleteTable\_V2

Delete a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

### Delete a table [DEPRECATED]

- Operation ID:
    - DeleteTable

This action has been deprecated. Please use [Delete a table (V2)](/en-us/connectors/azuretables/#delete-a-table-%28v2%29) instead.

~~Delete a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

### Delete Entity (V2)

- Operation ID:
    - DeleteEntity\_V2

Operation to delete an entity.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| ETag | If-Match |  | string | Etag to match for concurrency. \* to match all values. |

### Delete Entity [DEPRECATED]

- Operation ID:
    - DeleteEntity

This action has been deprecated. Please use [Delete Entity (V2)](/en-us/connectors/azuretables/#delete-entity-%28v2%29) instead.

~~Operation to delete an entity.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| ETag | If-Match |  | string | Etag to match for concurrency. \* to match all values. |

### Get a table (V2)

- Operation ID:
    - GetTable\_V2

This operation gets the metadata of a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

The metadata for the table

- Table metadata
    - getTableResponse

### Get a table [DEPRECATED]

- Operation ID:
    - GetTable

This action has been deprecated. Please use [Get a table (V2)](/en-us/connectors/azuretables/#get-a-table-%28v2%29) instead.

~~This operation gets the metadata of a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

The metadata for the table

- Table metadata
    - getTableResponse

### Get entities (V2)

- Operation ID:
    - GetEntities\_V2

This operation queries the entities in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |
| Filter Query | $filter |  | string | OData filter query for which entities to return. Example: Column eq 'Value' and Column2 ne 2. Invalid OData queries, such as not wrapping string values in quotes will return 501. |
| Select Query | $select |  | string | OData select query for the columns to be returned. Example: Column, PartitionKey |

#### Returns

Entity Response Object

- Get entities result
    - getEntitiesResponse

### Get entities [DEPRECATED]

- Operation ID:
    - GetEntities

This action has been deprecated. Please use [Get entities (V2)](/en-us/connectors/azuretables/#get-entities-%28v2%29) instead.

~~This operation queries the entities in a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |
| Filter Query | $filter |  | string | OData filter query for which entities to return. Example: Column eq 'Value' and Column2 ne 2. Invalid OData queries, such as not wrapping string values in quotes will return 501. |
| Select Query | $select |  | string | OData select query for the columns to be returned. Example: Column, PartitionKey |

#### Returns

Entity Response Object

- Get entities result
    - getEntitiesResponse

### Get entity (V2)

- Operation ID:
    - GetEntity\_V2

This operation gets the entity in a table based on the partition and row key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |
| Select Query | $select |  | string | OData select query for the columns to be returned. Example: Column, PartitionKey |

#### Returns

An entity

- An entity
    - getEntityResponse

### Get entity [DEPRECATED]

- Operation ID:
    - GetEntity

This action has been deprecated. Please use [Get entity (V2)](/en-us/connectors/azuretables/#get-entity-%28v2%29) instead.

~~This operation gets the entity in a table based on the partition and row key.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |
| Select Query | $select |  | string | OData select query for the columns to be returned. Example: Column, PartitionKey |

#### Returns

An entity

- An entity
    - getEntityResponse

### Insert Entity (V2)

- Operation ID:
    - CreateEntity\_V2

Operation to add an entity to a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

#### Returns

Data for a single entity

- Entity
    - InsertEntityResponse

### Insert Entity [DEPRECATED]

- Operation ID:
    - CreateEntity

This action has been deprecated. Please use [Insert Entity (V2)](/en-us/connectors/azuretables/#insert-entity-%28v2%29) instead.

~~Operation to add an entity to a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

#### Returns

Data for a single entity

- Entity
    - InsertEntityResponse

### Insert or Merge Entity (V2)

- Operation ID:
    - InsertMergeEntity\_V2

Operation to merge data with an entity in a table, creating a new entity if needed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

### Insert or Merge Entity [DEPRECATED]

- Operation ID:
    - InsertMergeEntity

This action has been deprecated. Please use [Insert or Merge Entity (V2)](/en-us/connectors/azuretables/#insert-or-merge-entity-%28v2%29) instead.

~~Operation to merge data with an entity in a table, creating a new entity if needed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

### Insert or Replace Entity (V2)

- Operation ID:
    - InsertReplaceEntity\_V2

Operation to replace an entity in a table, creating a new entity if needed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request.. |

### Insert or Replace Entity [DEPRECATED]

- Operation ID:
    - InsertReplaceEntity

This action has been deprecated. Please use [Insert or Replace Entity (V2)](/en-us/connectors/azuretables/#insert-or-replace-entity-%28v2%29) instead.

~~Operation to replace an entity in a table, creating a new entity if needed.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request.. |

### List tables (V2)

- Operation ID:
    - GetTables\_V2

List all the tables for your storage account.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

Table query response object

- Body
    - getTablesResponse

### List tables [DEPRECATED]

- Operation ID:
    - GetTables

This action has been deprecated. Please use [List tables (V2)](/en-us/connectors/azuretables/#list-tables-%28v2%29) instead.

~~This operation lists the tables in the account.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

#### Returns

Table query response object

- Body
    - getTablesResponse

### Merge Entity (V2)

- Operation ID:
    - MergeEntity\_V2

Operation to merge data with an entity in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| ETag | If-Match | True | string | Etag to match for concurrency. \* to match all values. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

### Merge Entity [DEPRECATED]

- Operation ID:
    - MergeEntity

This action has been deprecated. Please use [Merge Entity (V2)](/en-us/connectors/azuretables/#merge-entity-%28v2%29) instead.

~~Operation to merge data with an entity in a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| ETag | If-Match | True | string | Etag to match for concurrency. \* to match all values. |
| Client Request Id | x-ms-client-request-id |  | string | Unique identifier for tracking the request. |

### Replace Entity (V2)

- Operation ID:
    - ReplaceEntity\_V2

Operation to replace an entity in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage account name or table endpoint | storageAccountName | True | string | Azure Storage account name or table endpoint. |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| ETag | If-Match | True | string | ETag to match for concurrency. \* to match all values. |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

### Replace Entity [DEPRECATED]

- Operation ID:
    - ReplaceEntity

This action has been deprecated. Please use [Replace Entity (V2)](/en-us/connectors/azuretables/#replace-entity-%28v2%29) instead.

~~Operation to replace an entity in a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table | tableName | True | string | Specify the table. |
| Partition Key | PartitionKey | True | string | The partition id containing this entity |
| Row Key | RowKey | True | string | The row id containing this entity |
| ETag | If-Match | True | string | ETag to match for concurrency. \* to match all values. |
| Client Request Id | x-ms-client-request-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |

## Definitions

### getTablesResponse

Table query response object

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Account metadata location | odata.metadata | string | URL to the account metadata |
| List of tables | value | array of object | List of tables |
| Table location | value.odata.id | string | URL to the Table data |
| Table Name | value.TableName | string | Table Name |

### getTableResponse

The metadata for the table

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Table location | odata.id | string | URL to the Table data |
| Table Name | TableName | string | Table Name |

### Item

An entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Partition Key | PartitionKey | string | Partition Key |
| Row Key | RowKey | string | Row Key |
| Entity data | additionalProperties | string | The unique columns for the entity |

### getEntitiesResponse

Entity Response Object

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Table Metadata location | odata.metadata | string | Table Metadata location |
| List of Entities | value | array of Item | List of Entities |

### getEntityResponse

An entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Table Metadata location | odata.metadata | string | Table Metadata location |
| Partition Key | PartitionKey | string | Partition Key |
| Row Key | RowKey | string | Row Key |
| Entity data | additionalProperties | string | The unique columns for the entity |

### InsertEntityResponse

Data for a single entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Entity Metadata location | odata.metadata | string | Entity Metadata location |
| Partition Key | PartitionKey | string | Partition Key |
| Row Key | RowKey | string | Row Key |
| Entity data | additionalProperties | string | The unique columns for the entity |