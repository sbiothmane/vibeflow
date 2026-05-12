---
layout: Reference
title: Azure Cosmos DB - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/documentdb/
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
document_id: c6de37f0-2e5d-f0ee-bbf9-c6f5d7cdd6e6
document_version_independent_id: 4db5c39c-b2fb-9ed5-598c-6901fd17d3e3
updated_at: 2025-07-02T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/DocumentDB/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/70b4ce8e0e173553e34b919ec1525f9f4460f1b2/docs/DocumentDB/index.yml
git_commit_id: 70b4ce8e0e173553e34b919ec1525f9f4460f1b2
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: documentdb/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/DocumentDB/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/cd668c2f-f5b3-4573-8ad1-019570e3e2db
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/653971be-c25b-47ce-b561-80221556af0c
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/cc82e69d-afbe-4554-9f4c-6705fc860c42
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/f998336e-f087-4bda-99f7-4001451d0bd2
platformId: 96964578-e180-9b2f-ed65-42461b656c23
---

# Azure Cosmos DB

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1747/1.0.1748.4181/documentdb/icon.png)
Azure Cosmos DB is a globally distributed multi-model database service designed to enable you to elastically and independently scale throughput and storage across any number of geographical regions with a comprehensive SLA.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | - | Not available |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

To use this integration, you will need a Cosmos DB SQL API account configured in the Azure Portal. Note that Mongo DB API accounts are not currently supported.

Once the SQL API account is created, provide the account ID (without 'documents.azure.com') when creating a connection with the Azure Cosmos DB connector if creating a connection of `Access Key` type. This account ID is also required for newer operation versions that support Microsoft Entra ID authentication.

## Microsoft Entra ID authentication and Cosmos DB connector

In order to use Microsoft Entra ID authentication, the account that is being used needs to be assigned an specific role assignment, for more information, visit [Configure role-based access control with Microsoft Entra ID for your Azure Cosmos DB account](/en-us/azure/cosmos-db/how-to-setup-rbac).

Note

Only roles **explicitly** defined for data access permit a security principal to access Cosmos DB data. Built-in roles such as `Owner`, or `Contributor`**do not** provide access to the Cosmos DB data within that account via Microsoft Entra ID. There are 2 [built-in roles exposed by Azure Cosmos DB](/en-us/azure/cosmos-db/how-to-setup-rbac#built-in-role-definitions):

1. `Cosmos DB Built-in Data Reader` (role definition ID `00000000-0000-0000-0000-000000000001`)
2. `Cosmos DB Built-in Data Contributor` (role definition ID `00000000-0000-0000-0000-000000000002`)

Roles can be assigned numerous ways and custom roles can be created for more granular access.

Here is an example on who to assign `Cosmos DB Built-in Data Reader` via PowerShell (more information on this command [New-AzCosmosDBSqlRoleAssignment](/en-us/powershell/module/az.cosmosdb/new-azcosmosdbsqlroleassignment?view=azps-6.3.0)):

```ps1
$resourceGroupName = "<myResourceGroup>"
$accountName = "<myCosmosAccount>"
$principalId = "<myPrincipalId>"
$roleDefinitionId = "/subscriptions/<<mySubscription>>/resourceGroups/<<myResourceGroup>>/providers/Microsoft.DocumentDB/databaseAccounts/<<myCosmosAccount>>/sqlRoleDefinitions/00000000-0000-0000-0000-000000000001"
New-AzCosmosDBSqlRoleAssignment -AccountName $accountName `
    -ResourceGroupName $resourceGroupName `
    -RoleDefinitionId $roleDefinitionId `
    -PrincipalId $principalId `
    -AssignableScope "/"
```

Failure to add these role assignments, will end up with unauthorized requests like this one: `Request is blocked because principal [<<principal-id>>] does not have the required RBAC permissions to perform action <unauthorized actions>.`

Note

Azure Cosmos DB **doesn't support** any kind of management operations with Microsoft Entra ID authentication (documented [here](/en-us/azure/cosmos-db/how-to-setup-rbac#permission-model)). The following operations **will only work** with `Access Key` connections:

1. Create stored procedure (V1 and V2 versions)
2. Delete stored procedure (V1 and V2 versions)
3. Update stored procedure (V1 and V2 versions)

### Operations not supported with Microsoft Entra ID authentication

When using Microsoft Entra ID authentication **only actions with the Cosmos DB account name as parameter are supported**. Deprecated actions will continue to work with `Access Key` authentication, but **will fail if used with an Microsoft Entra ID connection**.

## Known Issues and Limitations

- The maximum size of a document that is supported by the DocumentDB (Azure Cosmos DB) connector is 2 MB.
- The Azure Cosmos DB limitations are documented [here](/en-us/azure/cosmos-db/sql-api-resources#documents).
- Choosing a write region and multi-write regions is not supported by the connector.
- The "Partition key value" must be provided according to its type. For example, a string value should be enclosed in quotes, a number should be provided as is. For example: **"string value"**, **123**, **0.5**.
- The "Partition key value" is required for queries with `ORDER BY`, `DISTINCT`, etc, that run on partitioned collections.
- Query documents V2 [DEPRECATED], Query documents V3, Get all documents V2 (Preview) actions uses Azure Cosmos DB .NET SDK for SQL API (version 2.13.1).
- Query documents V4 (Preview) action uses Azure Cosmos DB .NET SDK for SQL API (version 3.15.0).
- Query documents (V5) (Preview) action uses Azure Cosmos DB .NET SDK for SQL API (version 3.20.0).
- "Max Item Count" parameter value could be any number from 1 to 1000. Any number outside of this range will be implicitly converted to "-1", which tells Cosmos DB service to determine the optimal item count.
- If left empty, following operations will work only with documents that **do not** have a partition key value. Items with a partition key value **will be excluded** from this actions.

    1. Get a document
    2. Get a document (V2)
    3. Replace a document
    4. Replace a document (V2)
    5. Delete a document
    6. Delete a document (V2)
    7. Execute stored procedure
    8. Execute stored procedure (v2)
- Due to Azure Cosmos DB not supporting any kind of management operations with Microsoft Entra ID authentication (documented [here](/en-us/azure/cosmos-db/how-to-setup-rbac#permission-model)), operation Execute stored procedure (V2) (Preview) will only display the available stored procedures (for the `SprocId` parameter) when using an `Access Key` based connection. `Token` based authentications (Microsoft Entra ID authentications) will show an empty list and the `sprocId` should be entered manually as a custom value.

Important

**Microsoft Entra ID Integrated (Azure Commercial)** connections are disabled in **US Government (GCC)** environments by default. To enable these types of connections, the **Connect to Azure Commercial** setting must be enabled in the Power Platform Admin center by a tenant administrator.

Turning on this setting allows connections to resources in Azure Commercial that operate and send data outside the Power Platform US Government compliance boundary. This is specifically used to allow access to commercial resources from GCC cloud versions of Power Platform Connectors.

**Microsoft Entra ID Integrated (Azure Commercial)** is the **only** authentication type that works from **US Government (GCC)** environments to Azure Commercial resources.

Azure Commercial Authentication disabled by default: ![Disabled by default](assets/disablegsscommercialaccess-disabled.png)

The **Connect to Azure Commercial** setting in the Power Platform Admin center: ![Admin view](assets/disablegsscommercialaccess-admin-view.png)

![Setting](assets/disablegsscommercialaccess-setting.png)

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Access Key | Provide Account Name and Access Key to access your Cosmos DB account. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Shareable |
| Access Key (Azure Government) | Provide Account Name and Access Key to access your Cosmos DB account. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Shareable |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access your Azure Blob storage. | All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) | Not shareable |
| Microsoft Entra ID Integrated (Azure Commercial) | Use Microsoft Entra ID to access your Azure Blob Storage in Azure Commercial. | US Government (GCC) only | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your Azure Blob storage. | Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Access Key

Auth ID: keyBasedAuth

Applicable: All regions except Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High)

Provide Account Name and Access Key to access your Cosmos DB account.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account ID | string | Name of the account without 'documents.azure.com' part | True |
| Access Key to your Azure Cosmos DB account | securestring | Primary or Secondary Key | True |

### Access Key (Azure Government)

Auth ID: keyBasedAuth

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Provide Account Name and Access Key to access your Cosmos DB account.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account ID | string | Name of the account without 'documents.azure.com' part | True |
| Access Key to your Azure Cosmos DB account | securestring | Primary or Secondary Key | True |

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

Applicable: Azure Government and Department of Defense (DoD) in Azure Government and US Government (GCC) and US Government (GCC-High) only

Use Microsoft Entra ID to access your Azure Blob storage.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account ID | string | Name of the account without 'documents.azure.com' part | True |
| Access Key to your Azure Cosmos DB account | securestring | Primary or Secondary Key | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1500 | 60 seconds |

## Actions

| Create or update document (V2) [DEPRECATED] | This action has been deprecated. Please use [Create or update document (V3)](/en-us/connectors/documentdb/#create-or-update-document-%28v3%29) instead.<br><br>~~Create or update document. When creating a document in DocumentDB, the body must include an id property.~~ |
| --- | --- |
| Create or update document (V3) | Create or update document. When creating a document in DocumentDB, the body must include an id property. |
| Create or update document [DEPRECATED] | This action has been deprecated. Please use [Create or update document (V3)](/en-us/connectors/documentdb/#create-or-update-document-%28v3%29) instead.<br><br>~~Create or update document. When creating a document in DocumentDB, the body must include an id property.~~ |
| Create stored procedure (V2) | Create stored procedure (V2). |
| Create stored procedure [DEPRECATED] | This action has been deprecated. Please use [Create stored procedure (V2)](/en-us/connectors/documentdb/#create-stored-procedure-%28v2%29) instead.<br><br>~~Create stored procedure.~~ |
| Delete a document (V2) | Delete a document (V2). |
| Delete a document [DEPRECATED] | This action has been deprecated. Please use [Delete a document (V2)](/en-us/connectors/documentdb/#delete-a-document-%28v2%29) instead.<br><br>~~Delete a document.~~ |
| Delete stored procedure (V2) | Delete stored procedure (V2). |
| Delete stored procedure [DEPRECATED] | This action has been deprecated. Please use [Delete stored procedure (V2)](/en-us/connectors/documentdb/#delete-stored-procedure-%28v2%29) instead.<br><br>~~Delete stored procedure.~~ |
| Execute stored procedure (V2) | Execute stored procedure in specified collection (V2). |
| Execute stored procedure [DEPRECATED] | This action has been deprecated. Please use [Execute stored procedure (V2)](/en-us/connectors/documentdb/#execute-stored-procedure-%28v2%29) instead.<br><br>~~Execute stored procedure in specified collection.~~ |
| Get a document (V2) | Get a document (V2). |
| Get a document [DEPRECATED] | This action has been deprecated. Please use [Get a document (V2)](/en-us/connectors/documentdb/#get-a-document-%28v2%29) instead.<br><br>~~Get a document.~~ |
| Get all documents (V3) | Get all documents (V3). |
| Get all documents [DEPRECATED] | This action has been deprecated. Please use [Get all documents (V3)](/en-us/connectors/documentdb/#get-all-documents-%28v3%29) instead.<br><br>~~Get all documents.~~ |
| Get all documents V2 [DEPRECATED] | This action has been deprecated. Please use [Get all documents (V3)](/en-us/connectors/documentdb/#get-all-documents-%28v3%29) instead.<br><br>~~Get all documents V2.~~ |
| Get stored procedures (V2) | Get stored procedures in the specified collection (V2). |
| Get stored procedures [DEPRECATED] | This action has been deprecated. Please use [Get stored procedures (V2)](/en-us/connectors/documentdb/#get-stored-procedures-%28v2%29) instead.<br><br>~~Get stored procedures in the specified collection.~~ |
| Query documents [DEPRECATED] | This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.<br><br>~~Query documents.~~ |
| Query documents V2 [DEPRECATED] | This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.<br><br>~~Query documents V2.~~ |
| Query documents V3 [DEPRECATED] | This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.<br><br>~~Query documents V3.~~ |
| Query documents V4 [DEPRECATED] | This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.<br><br>~~Query documents V4.~~ |
| Query documents V5 | Query documents (V5). |
| Replace a document (V2) | Replace a document (V2). |
| Replace a document [DEPRECATED] | This action has been deprecated. Please use [Replace a document (V2)](/en-us/connectors/documentdb/#replace-a-document-%28v2%29) instead.<br><br>~~Replace a document.~~ |
| Replace stored procedure (V2) | Replace stored procedure (V2). |
| Replace stored procedure [DEPRECATED] | This action has been deprecated. Please use [Replace stored procedure (V2)](/en-us/connectors/documentdb/#replace-stored-procedure-%28v2%29) instead.<br><br>~~Replace stored procedure.~~ |

### Create or update document (V2) [DEPRECATED]

- Operation ID:
    - CreateDocumentV2

This action has been deprecated. Please use [Create or update document (V3)](/en-us/connectors/documentdb/#create-or-update-document-%28v3%29) instead.

~~Create or update document. When creating a document in DocumentDB, the body must include an id property.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| IsUpsert | x-ms-documentdb-is-upsert |  | boolean | If set to true, the document will be replaced if it exists else created. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - postDocumentsResponse

### Create or update document (V3)

- Operation ID:
    - CreateDocument\_V3

Create or update document. When creating a document in DocumentDB, the body must include an id property.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| IsUpsert | x-ms-documentdb-is-upsert |  | boolean | If set to true, the document will be replaced if it exists else created. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - postDocumentsResponse

### Create or update document [DEPRECATED]

- Operation ID:
    - CreateDocument

This action has been deprecated. Please use [Create or update document (V3)](/en-us/connectors/documentdb/#create-or-update-document-%28v3%29) instead.

~~Create or update document. When creating a document in DocumentDB, the body must include an id property.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| IsUpsert | x-ms-documentdb-is-upsert |  | boolean | If set to true, the document will be replaced if it exists else created. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - postDocumentsResponse

### Create stored procedure (V2)

- Operation ID:
    - CreateStoredProcedure\_V2

Create stored procedure (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Function definition | body |  | string | Function that defines the stored procedure, e.g. 'function(params){ ... }' |
| id | id |  | string | New id of the stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - createStoredProcedureResponse

### Create stored procedure [DEPRECATED]

- Operation ID:
    - CreateStoredProcedure

This action has been deprecated. Please use [Create stored procedure (V2)](/en-us/connectors/documentdb/#create-stored-procedure-%28v2%29) instead.

~~Create stored procedure.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Function definition | body |  | string | Function that defines the stored procedure, e.g. 'function(params){ ... }' |
| id | id |  | string | New id of the stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - createStoredProcedureResponse

### Delete a document (V2)

- Operation ID:
    - DeleteDocument\_V2

Delete a document (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier of the document. |
| API version | x-ms-version |  | string | API version. |

### Delete a document [DEPRECATED]

- Operation ID:
    - DeleteDocument

This action has been deprecated. Please use [Delete a document (V2)](/en-us/connectors/documentdb/#delete-a-document-%28v2%29) instead.

~~Delete a document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier of the document. |
| API version | x-ms-version |  | string | API version. |

### Delete stored procedure (V2)

- Operation ID:
    - DeleteStoredProcedure\_V2

Delete stored procedure (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - string

### Delete stored procedure [DEPRECATED]

- Operation ID:
    - DeleteStoredProcedure

This action has been deprecated. Please use [Delete stored procedure (V2)](/en-us/connectors/documentdb/#delete-stored-procedure-%28v2%29) instead.

~~Delete stored procedure.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - string

### Execute stored procedure (V2)

- Operation ID:
    - ExecuteStoredProcedure\_V2

Execute stored procedure in specified collection (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| Parameters for the stored procedure | parameters |  | string | Specify valid JSON for the parameters of the stored procedure, e.g. ["param1", "param2"]. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - ObjectWithoutType

### Execute stored procedure [DEPRECATED]

- Operation ID:
    - ExecuteStoredProcedure

This action has been deprecated. Please use [Execute stored procedure (V2)](/en-us/connectors/documentdb/#execute-stored-procedure-%28v2%29) instead.

~~Execute stored procedure in specified collection.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| Parameters for the stored procedure | parameters |  | string | Specify valid JSON for the parameters of the stored procedure, e.g. ["param1", "param2"]. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - ObjectWithoutType

### Get a document (V2)

- Operation ID:
    - GetDocument\_V2

Get a document (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier for the document. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - object

### Get a document [DEPRECATED]

- Operation ID:
    - GetDocument

This action has been deprecated. Please use [Get a document (V2)](/en-us/connectors/documentdb/#get-a-document-%28v2%29) instead.

~~Get a document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier for the document. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- response
    - object

### Get all documents (V3)

- Operation ID:
    - GetDocuments\_V3

Get all documents (V3).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - getDocumentsResponse

### Get all documents [DEPRECATED]

- Operation ID:
    - GetDocuments

This action has been deprecated. Please use [Get all documents (V3)](/en-us/connectors/documentdb/#get-all-documents-%28v3%29) instead.

~~Get all documents.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - getDocumentsResponse

### Get all documents V2 [DEPRECATED]

- Operation ID:
    - GetDocumentsV2

This action has been deprecated. Please use [Get all documents (V3)](/en-us/connectors/documentdb/#get-all-documents-%28v3%29) instead.

~~Get all documents V2.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Partition key value | partitionKey |  | string | If empty, all partitions will be used to search for documents. |
| Max Item Count | maxItemCount |  | integer | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | continuationToken |  | string | A token to fetch additional results. |
| Consistency Level | consistencyLevel |  | string | Consistency level required for the feed (query/read feed) operation. |
| Session Token | sessionToken |  | string | The session token for use with session consistency. |

#### Returns

Array of documents that match the requested query and the related metadata.

- Body
    - DocumentsCollection

### Get stored procedures (V2)

- Operation ID:
    - GetStoredProcedures\_V2

Get stored procedures in the specified collection (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - getStoredProceduresResponse

### Get stored procedures [DEPRECATED]

- Operation ID:
    - GetStoredProcedures

This action has been deprecated. Please use [Get stored procedures (V2)](/en-us/connectors/documentdb/#get-stored-procedures-%28v2%29) instead.

~~Get stored procedures in the specified collection.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - getStoredProceduresResponse

### Query documents [DEPRECATED]

- Operation ID:
    - QueryDocuments

This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.

~~Query documents.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Enable Cross Partition | x-ms-documentdb-query-enablecrosspartition |  | boolean | If the collection is partitioned, this must be set to True to allow execution across multiple partitions. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| query | query |  | string |  |

#### Returns

- Body
    - queryResponse

### Query documents V2 [DEPRECATED]

- Operation ID:
    - QueryDocumentsV2

This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.

~~Query documents V2.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| QueryText | QueryText |  | string | SQL Syntax Query over documents |
| Partition key value | partitionKey |  | string | Partition key value. |
| Continuation Token | continuationToken |  | string | A token to fetch additional results from the operation. |

#### Returns

Array of documents that match the requested query and the related metadata.

- Body
    - QueryDocumentsResponse

### Query documents V3 [DEPRECATED]

- Operation ID:
    - QueryDocumentsV3

This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.

~~Query documents V3.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| SQL Syntax Query | queryText | True | string | SQL query. |
| Partition key value | partitionKey |  | string | If empty, all partitions will be used to search for documents. |
| Max Item Count | maxItemCount |  | integer | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | continuationToken |  | string | A token to fetch additional results. |
| Enable Cross Partition | enableCrossPartition |  | boolean | Indicates whether user are enabled to send more than one request to execute the query. |
| Consistency Level | consistencyLevel |  | string | Consistency level required for the feed (query/read feed) operation. |
| Session Token | sessionToken |  | string | The session token for use with session consistency. |

#### Returns

Array of documents that match the requested query and the related metadata.

- Body
    - DocumentsCollection

### Query documents V4 [DEPRECATED]

- Operation ID:
    - QueryDocumentsV4

This action has been deprecated. Please use [Query documents V5](/en-us/connectors/documentdb/#query-documents-v5) instead.

~~Query documents V4.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Container ID | containerId | True | string | The name of the container. |
| SQL Syntax Query | queryText |  | string | SQL query. If empty, will return all documents. |
| Partition key value | partitionKey |  | string | If empty, all partitions will be used to search for documents. |
| Max Item Count | maxItemCount |  | integer | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | continuationToken |  | string | A token to fetch additional results. |
| Consistency Level | consistencyLevel |  | string | Consistency level required for the feed (query/read feed) operation. |
| Session Token | sessionToken |  | string | The session token for use with session consistency. |

#### Returns

Array of documents that match the requested query and the related metadata.

- Body
    - DocumentsCollection

### Query documents V5

- Operation ID:
    - QueryDocuments\_V5

Query documents (V5).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Container ID | containerId | True | string | The name of the container. |
| SQL Syntax Query | queryText |  | string | SQL query. If empty, will return all documents. |
| Partition key value | partitionKey |  | string | Value must be provided according to its type ("string", 42, 0.5). If empty, all partitions will be used to search for documents. |
| Max Item Count | maxItemCount |  | integer | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | continuationToken |  | string | A token to fetch additional results. |
| Consistency Level | consistencyLevel |  | string | Consistency level required for the feed (query/read feed) operation. |
| Session Token | sessionToken |  | string | The session token for use with session consistency. |

#### Returns

Array of documents that match the requested query and the related metadata.

- Body
    - DocumentsCollection

### Replace a document (V2)

- Operation ID:
    - ReplaceDocument\_V2

Replace a document (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier of the document. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - putDocumentResponse

### Replace a document [DEPRECATED]

- Operation ID:
    - ReplaceDocument

This action has been deprecated. Please use [Replace a document (V2)](/en-us/connectors/documentdb/#replace-a-document-%28v2%29) instead.

~~Replace a document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Partition key value | x-ms-documentdb-raw-partitionkey |  | string | The partition key value for the requested document or attachment operation. |
| Max Item Count | x-ms-max-item-count |  | number | An integer indicating the maximum number of items to be returned per page. |
| Continuation Token | x-ms-continuation |  | string | A string token returned for queries and read-feed operations if there are more results to be read. |
| Consistency Level | x-ms-consistency-level |  | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). |
| Session Token | x-ms-session-token |  | string | A string token used with session level consistency. |
| Activity id | x-ms-activity-id |  | string | A client supplied identifier for the operation, which will be echoed in the server response. |
| Pre-Trigger | x-ms-documentdb-pre-trigger-include |  | string | Comma-separated list of trigger names to run before the document operation is executed. |
| Post-Trigger | x-ms-documentdb-post-trigger-include |  | string | Comma-separated list of trigger names to run after the document operation is executed. |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Document ID | documentId | True | string | The identifier of the document. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - putDocumentResponse

### Replace stored procedure (V2)

- Operation ID:
    - ReplaceStoredProcedure\_V2

Replace stored procedure (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Azure Cosmos DB account name | cosmosDbAccountName | True | string | The Azure Cosmos DB account name (without documents.azure.com). |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| Function definition | body |  | string | Function that defines the stored procedure, e.g. 'function(params){ ... }' |
| id | id |  | string | Id of the existing stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - createStoredProcedureResponse

### Replace stored procedure [DEPRECATED]

- Operation ID:
    - ReplaceStoredProcedure

This action has been deprecated. Please use [Replace stored procedure (V2)](/en-us/connectors/documentdb/#replace-stored-procedure-%28v2%29) instead.

~~Replace stored procedure.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Database ID | databaseId | True | string | The name of the database. |
| Collection ID | collectionId | True | string | The name of the collection. |
| Sproc ID | sprocId | True | string | The name of the stored procedure. |
| Function definition | body |  | string | Function that defines the stored procedure, e.g. 'function(params){ ... }' |
| id | id |  | string | Id of the existing stored procedure. |
| API version | x-ms-version |  | string | API version. |

#### Returns

- Body
    - createStoredProcedureResponse

## Definitions

### QueryDocumentsResponse

Array of documents that match the requested query and the related metadata.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Documents | Documents | array of ObjectWithoutType | Array of documents that match the request. |
| Number of Documents | \_count | integer | Number of documents. |
| Activity ID | ActivityId | string | Azure Cosmos DB service activity ID. |

### DocumentsCollection

Array of documents that match the requested query and the related metadata.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Documents | value | array of ObjectWithoutType |  |
| Continuation Token | ContinuationToken | string |  |
| Number of Documents | Count | integer |  |
| Request Charge | RequestCharge | double |  |
| Session Token | SessionToken | string |  |
| Activity Id | ActivityId | string |  |

### postDocumentsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_rid | \_rid | string |  |
| \_ts | \_ts | integer |  |
| \_self | \_self | string |  |
| \_etag | \_etag | string |  |
| \_attachments | \_attachments | string |  |
| id | id | string |  |

### putDocumentResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_rid | \_rid | string |  |
| id | id | string |  |

### getDocumentsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_rid | \_rid | string |  |
| Documents | Documents | array of object |  |

### queryResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_rid | \_rid | string |  |
| \_count | \_count | number |  |
| Documents | Documents | array of |  |

### getStoredProceduresResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_count | \_count | integer | \_count |
| \_rid | \_rid | string | \_rid |
| StoredProcedures | StoredProcedures | array of object | StoredProcedures |
| \_etag | StoredProcedures.\_etag | string | \_etag |
| \_rid | StoredProcedures.\_rid | string | \_rid |
| \_self | StoredProcedures.\_self | string | \_self |
| \_ts | StoredProcedures.\_ts | integer | \_ts |
| body | StoredProcedures.body | string | body |
| id | StoredProcedures.id | string | id |

### createStoredProcedureResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| \_etag | \_etag | string | \_etag |
| \_rid | \_rid | string | \_rid |
| \_self | \_self | string | \_self |
| \_ts | \_ts | integer | \_ts |
| body | body | string | body |
| id | id | string | id |

### ObjectWithoutType

### string

This is the basic data type 'string'.

### object

This is the type 'object'.