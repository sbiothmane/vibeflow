---
layout: Reference
title: Microsoft Dataverse - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/commondataserviceforapps/
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
document_id: 78bf3518-bce4-ecc5-8bf6-1fb627b9105e
document_version_independent_id: d46568f2-e080-cbbe-2f7e-a655bce20b64
updated_at: 2026-05-05T19:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/commondataserviceforapps/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/181182d93e37b1e3c2f362a907d452853c68778a/docs/commondataserviceforapps/index.yml
git_commit_id: 181182d93e37b1e3c2f362a907d452853c68778a
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: commondataserviceforapps/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/commondataserviceforapps/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/0ceb3227-2ff7-4d97-8e75-3d7b9ccc937a
- https://authoring-docs-microsoft.poolparty.biz/devrel/e6f942e8-55a7-4c86-b8e3-7456508ea850
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/4d680e1a-c470-4772-a236-5c714bd09be0
- https://authoring-docs-microsoft.poolparty.biz/devrel/f1834696-48d6-470d-966b-6ee418881596
platformId: 18bb2323-1180-38f7-3f1a-1534f878c0a6
---

# Microsoft Dataverse

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/commondataserviceforapps/icon.png)
Provides access to Microsoft Dataverse actions and triggers for Power Platform environments.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://make.powerautomate.com/en-us/support/ |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://make.powerautomate.com/ |
| Privacy policy | https://privacy.microsoft.com |
| Categories | Data |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Oauth | Oauth | All regions | Not shareable |
| Service Principal | Provide Microsoft Entra ID credentials using Client Id and Secret | All regions | Shareable |
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

### Oauth

Auth ID: Oauth

Applicable: All regions

Oauth

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service Principal

Auth ID: ServicePrincipalOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using Client Id and Secret

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string | Client (or Application) ID of the Microsoft Entra ID application. | True |
| Client Secret | securestring | Client secret of the Microsoft Entra ID application. | True |
| Tenant | string | The tenant ID of for the Microsoft Entra ID application. | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 6000 | 300 seconds |

## Actions

| Add a new row | This action allows you to add a new row in the selected Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment). |
| --- | --- |
| Add a new row to selected environment | Create a new row in a table in a Power Platform environment. |
| D365 Sales MCP Server (deprecated) | (deprecated) MCP server for Sales scenario which helps with Lead Qualification, Outreach Email Drafting and Sending Email to Customer. |
| D365 Service MCP Server (Deprecated) | (Deprecated) D365 Customer Service MCP server provides tools to solve customer's issues based on information recorded in case(incident) and account entities. |
| Dataverse MCP Server (Deprecated) | Dataverse MCP Server. This server can be used to get information from Dataverse as well as get knowledge from Dataverse and various other tabular sources. To check what all sources this server can access, use the list\_knowledge\_sources tool. list\_knowledge\_sources responsds with the source and tables that this server can access. |
| Delete a row | This action allows you to delete a row from a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment). |
| Delete a row from selected environment | Delete a row from a table in a Power Platform environment. |
| Download a file or an image | This action allows you to download a file or an image content from a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment). |
| Download a file or an image from selected environment | Retrieve file or image data from a row in a Power Platform environment. |
| Dynamics 365 Contact Center MCP (Deprecated) | (Deprecated) Dynamics 365 Contact Center MCP with tools |
| Dynamics 365 Conversation Orchestrator MCP (Preview) | Dynamics 365 Conversation Orchestrator MCP with tools (Preview) |
| Dynamics 365 ERP MCP (Deprecated) | Dynamics 365 ERP MCP with tools |
| Get a row by ID | This action allows you to get the row that matches an ID in a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment). |
| Get a row by ID from selected environment | Get a row from a table in a Power Platform environment. |
| List rows | This action allows you to list the rows in a Microsoft Dataverse table that match the selected options. This connector was formerly known as Common Data Service (current environment). |
| List rows from selected environment | List rows from a table in a Power Platform environment. |
| Microsoft Dataverse MCP Server (Preview) | Provides Remote MCP Server access to Dataverse |
| Microsoft Dataverse MCP Server (Preview) (Preview) | Provides Remote MCP Server access to Dataverse with preview tools |
| Perform a background operation (preview) | This action allows you to perform Microsoft Dataverse operations in the background using Custom APIs that are not classified as functions. The list of APIs listed in the dropdown menu are only compatible APIs with this action. |
| Perform a bound action | This action allows you to perform Microsoft Dataverse actions associated with a selected table. This connector was formerly known as Common Data Service (current environment). |
| Perform a bound action in selected environment | Run a Dataverse action bound to a table in a Power Platform environment, including custom actions. |
| Perform a changeset request | This action allows you to perform a group of Microsoft Dataverse connector operations as a single transaction. If one of the operations fails, all the successful actions are rolled back. This connector was formerly known as Common Data Service (current environment). |
| Perform an unbound action | This action allows you to perform Microsoft Dataverse actions available in the environment that are not associated with any table. This connector was formerly known as Common Data Service (current environment). |
| Perform an unbound action in selected environment | Run a global Dataverse action in a Power Platform environment, including custom actions. |
| Relate rows | This action allows you to link a row in one Microsoft Dataverse table to another if the tables have a one-to-many or many-to-many relationship. This connector was formerly known as Common Data Service (current environment). |
| Relate rows in selected environment | Associate individual rows in tables that have a one-to-many or many-to-many relationship in the same Power Platform environment. |
| Search rows (preview) | This action allows you to search a Microsoft Dataverse environment using Relevance Search, and returns the rows that match the search term most closely. This connector was formerly known as Common Data Service (current environment). |
| Unrelate rows | This action allows you to remove the link between a row in one Microsoft Dataverse table to another if the tables have a one-to-many or many-to-many relationship. This connector was formerly known as Common Data Service (current environment). |
| Unrelate rows in selected environment | Remove the association between individual rows in a Power Platform environment. |
| Update a row | This action allows you to modify any selected row in a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment). |
| Update a row in selected environment | Update a row in a table in a Power Platform environment. |
| Upload a file or an image | This action allows you to upload a file or an image content to a Microsoft Dataverse table with a compatible column type. This connector was formerly known as Common Data Service (current environment). |
| Upload a file or an image to selected environment | Update file or image content in a row in a Power Platform environment. |
| Upsert a row | This action allows you to modify any selected row in a Microsoft Dataverse table, or adds a new row if it doesn’t exist. This connector was formerly known as Common Data Service (current environment). |
| Upsert a row in selected environment | Update or add (upsert) a row in a table in a Power Platform environment. |

### Add a new row

- Operation ID:
    - CreateRecord

This action allows you to add a new row in the selected Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Table name | entityName | True | string | Choose a table |
|  |  |  | object |  |

#### Returns

- response
    - object

### Add a new row to selected environment

- Operation ID:
    - CreateRecordWithOrganization

Create a new row in a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row Item | item | True | dynamic | Row to create |

#### Returns

 The outputs of this operation are dynamic. 

### D365 Sales MCP Server (deprecated)

- Operation ID:
    - mcp\_SalesMCPServer

(deprecated) MCP server for Sales scenario which helps with Lead Qualification, Outreach Email Drafting and Sending Email to Customer.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### D365 Service MCP Server (Deprecated)

- Operation ID:
    - mcp\_ServiceMCPServer

(Deprecated) D365 Customer Service MCP server provides tools to solve customer's issues based on information recorded in case(incident) and account entities.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Dataverse MCP Server (Deprecated)

- Operation ID:
    - mcp\_DataverseMCPServer

Dataverse MCP Server. This server can be used to get information from Dataverse as well as get knowledge from Dataverse and various other tabular sources. To check what all sources this server can access, use the list\_knowledge\_sources tool. list\_knowledge\_sources responsds with the source and tables that this server can access.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Delete a row

- Operation ID:
    - DeleteRecord

This action allows you to delete a row from a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Partition Id | partitionId |  | string | An option to specify the partitionId while deleting row for NoSQL tables |

### Delete a row from selected environment

- Operation ID:
    - DeleteRecordWithOrganization

Delete a row from a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Partition Id | partitionId |  | string | An option to specify the partitionId while deleting row for NoSQL tables |

### Download a file or an image

- Operation ID:
    - GetEntityFileImageFieldContent

This action allows you to download a file or an image content from a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Column name | fileImageFieldName | True | string | Choose a column |
| Image size | size |  | string | Enter 'full' for entire image if enabled (default = thumbnail) |

#### Returns

The content of the file or image

- File or image content
    - binary

### Download a file or an image from selected environment

- Operation ID:
    - GetEntityFileImageFieldContentWithOrganization

Retrieve file or image data from a row in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Column name | fileImageFieldName | True | string | Choose a column |
| Image size | size |  | string | Enter 'full' for entire image if enabled (default = thumbnail) |

#### Returns

The content of the file or image

- File or image content
    - binary

### Dynamics 365 Contact Center MCP (Deprecated)

- Operation ID:
    - mcp\_ContactCenterMCPServer

(Deprecated) Dynamics 365 Contact Center MCP with tools

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Dynamics 365 Conversation Orchestrator MCP (Preview)

- Operation ID:
    - mcp\_ConversationOrchestratorMCPServer

Dynamics 365 Conversation Orchestrator MCP with tools (Preview)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Dynamics 365 ERP MCP (Deprecated)

- Operation ID:
    - mcp\_ERPMCPServer

Dynamics 365 ERP MCP with tools

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Get a row by ID

- Operation ID:
    - GetItem

This action allows you to get the row that matches an ID in a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Select columns | $select |  | string | Enter a comma-separated list of column unique names to limit which columns are listed |
| Expand Query | $expand |  | string | Enter an Odata style expand query to list related rows |
| Partition Id | partitionId |  | string | An option to specify the partitionId while retrieving data for NoSQL tables |

#### Returns

- response
    - object

### Get a row by ID from selected environment

- Operation ID:
    - GetItemWithOrganization

Get a row from a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Environment | organization | True | string | Choose an environment |
| Extract Sensitivity Label | MSCRM.IncludeMipSensitivityLabel |  | boolean | Select if you want to fetch Sensitivity Label ID |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Select columns | $select |  | string | Enter a comma-separated list of column unique names to limit which columns are listed |
| Expand Query | $expand |  | string | Enter an Odata style expand query to list related rows |
| Partition Id | partitionId |  | string | An option to specify the partitionId while retrieving data for NoSQL tables |

#### Returns

 The outputs of this operation are dynamic. 

### List rows

- Operation ID:
    - ListRecords

This action allows you to list the rows in a Microsoft Dataverse table that match the selected options. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Table name | entityName | True | string | Choose a table |
| Select columns | $select |  | string | Enter a comma-separated list of column unique names to limit which columns are listed |
| Filter rows | $filter |  | string | Enter an OData style filter expression to limit which rows are listed |
| Sort By | $orderby |  | string | Columns to sort by in OData orderBy style (excluding lookups) |
| Expand Query | $expand |  | string | Enter an Odata style expand query to list related rows |
| Fetch Xml Query | fetchXml |  | string | Enter a Fetch XML query for advanced customization |
| Row count | $top |  | integer | Enter the number of rows to be listed (default = 5000) |
| Skip token | $skiptoken |  | string | Enter the skip token obtained from a previous run to list rows from the next page |
| Partition ID | partitionId |  | string | An option to specify the partitionId while retrieving data for NoSQL tables |

#### Returns

List of tables

- Body
    - EntityItemList

### List rows from selected environment

- Operation ID:
    - ListRecordsWithOrganization

List rows from a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Environment | organization | True | string | Choose an environment |
| Extract Sensitivity Label | MSCRM.IncludeMipSensitivityLabel |  | boolean | Select if you want to fetch Sensitivity Label ID |
| Table name | entityName | True | string | Choose a table |
| Select columns | $select |  | string | Enter a comma-separated list of column unique names to limit which columns are listed |
| Filter rows | $filter |  | string | Enter an OData style filter expression to limit which rows are listed |
| Sort By | $orderby |  | string | Columns to sort by in OData orderBy style (excluding lookups) |
| Expand Query | $expand |  | string | Enter an Odata style expand query to list related rows |
| Fetch Xml Query | fetchXml |  | string | Enter a Fetch XML query for advanced customization |
| Row count | $top |  | integer | Enter rows to list. The default is 2000. Enable paging in settings for more rows. |
| Skip token | $skiptoken |  | string | Enter the skip token obtained from a previous run to list rows from the next page |
| Partition ID | partitionId |  | string | An option to specify the partitionId while retrieving data for NoSQL tables |

#### Returns

 The outputs of this operation are dynamic. 

### Microsoft Dataverse MCP Server (Preview)

- Operation ID:
    - InvokeMCP

Provides Remote MCP Server access to Dataverse

### Microsoft Dataverse MCP Server (Preview) (Preview)

- Operation ID:
    - InvokeMCPPreview

Provides Remote MCP Server access to Dataverse with preview tools

### Perform a background operation (preview)

- Operation ID:
    - PerformBackgroundOperation

This action allows you to perform Microsoft Dataverse operations in the background using Custom APIs that are not classified as functions. The list of APIs listed in the dropdown menu are only compatible APIs with this action.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Dynamic Items | item | True | dynamic | Dynamic Items |
| Catalog | catalog | True | string | Choose a catalog to filter tables and actions. |
| Category | category | True | string | Choose a category to filter tables and actions. |
| Action name | actionName | True | string | Choose an action. |

#### Returns

The action response object which includes background operation state code and status code.

- Body
    - WebhookNotificationContentForPerformBackgroundOperation

### Perform a bound action

- Operation ID:
    - PerformBoundAction

This action allows you to perform Microsoft Dataverse actions associated with a selected table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Action Name | actionName | True | string | Choose an action |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
|  |  |  | object |  |

#### Returns

- response
    - object

### Perform a bound action in selected environment

- Operation ID:
    - PerformBoundActionWithOrganization

Run a Dataverse action bound to a table in a Power Platform environment, including custom actions.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Action Name | actionName | True | string | Choose an action |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Action parameters | item |  | dynamic | Action parameters |

#### Returns

 The outputs of this operation are dynamic. 

### Perform a changeset request

- Operation ID:
    - ExecuteChangeset

This action allows you to perform a group of Microsoft Dataverse connector operations as a single transaction. If one of the operations fails, all the successful actions are rolled back. This connector was formerly known as Common Data Service (current environment).

### Perform an unbound action

- Operation ID:
    - PerformUnboundAction

This action allows you to perform Microsoft Dataverse actions available in the environment that are not associated with any table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Action Name | actionName | True | string | Choose an action |
|  |  |  | object |  |

#### Returns

- response
    - object

### Perform an unbound action in selected environment

- Operation ID:
    - PerformUnboundActionWithOrganization

Run a global Dataverse action in a Power Platform environment, including custom actions.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Action Name | actionName | True | string | Choose an action |
| Action parameters | item |  | dynamic | Action parameters |

#### Returns

 The outputs of this operation are dynamic. 

### Relate rows

- Operation ID:
    - AssociateEntities

This action allows you to link a row in one Microsoft Dataverse table to another if the tables have a one-to-many or many-to-many relationship. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Relationship | associationEntityRelationship | True | string | Choose relationship type |
| Relate with | @odata.id | True | string | Enter the row URL using OData ID from a previous step or typing the full URL (eg. [https://org0.crm.dynamics.com/api/data/v9.0/faxes(3ce6c728-3c8a-4b55-a4ee-a251b253c3ee)](https://org0.crm.dynamics.com/api/data/v9.0/faxes%283ce6c728-3c8a-4b55-a4ee-a251b253c3ee%29) |

### Relate rows in selected environment

- Operation ID:
    - AssociateEntitiesWithOrganization

Associate individual rows in tables that have a one-to-many or many-to-many relationship in the same Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Relationship | associationEntityRelationship | True | string | Choose relationship type |
| Relate with | @odata.id | True | string | Enter the row URL using OData ID from a previous step or typing the full URL (eg. [https://org0.crm.dynamics.com/api/data/v9.0/faxes(3ce6c728-3c8a-4b55-a4ee-a251b253c3ee)](https://org0.crm.dynamics.com/api/data/v9.0/faxes%283ce6c728-3c8a-4b55-a4ee-a251b253c3ee%29) |

### Search rows (preview)

- Operation ID:
    - GetRelevantRows

This action allows you to search a Microsoft Dataverse environment using Relevance Search, and returns the rows that match the search term most closely. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search term | search | True | string | Enter a search term, eg. Contoso. Searches modifiers like boolean operators, wildcards, fuzzy search, proximity search etc. require the search type full |
| Search type | searchtype |  | string | Enter whether simple or full search syntax should be used (default is simple) |
| Search mode | searchmode |  | string | Enter whether any or all of the search terms must be matched (default is any) |
| Row count | top |  | integer | Enter the number of search results to be listed (default = 50) |
| Row filter | filter |  | string | Enter an Odata style filter expression to narrow the search |
| Table filter | entities |  | array of string | Enter a comma-separated list of tables to be searched (default is all tables) |
| Sort by | orderby |  | array of string | Enter a comma-separated list of column unique names followed by asc or desc |
| Facet query | facets |  | array of string | Enter a comma-separated list of facet queries to narrow the search |
| Skip rows | skip |  | integer | Enter the number of search results to be skipped |
| Return row count | returntotalrecordcount |  | boolean | Choose an option |

#### Returns

The search output.

- Body
    - SearchOutput

### Unrelate rows

- Operation ID:
    - DisassociateEntities

This action allows you to remove the link between a row in one Microsoft Dataverse table to another if the tables have a one-to-many or many-to-many relationship. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Relationship | associationEntityRelationship | True | string | Choose relationship type |
| Unrelate with | $id | True | string | Enter the row URL using OData ID from a previous step or typing the full URL (eg. [https://org0.crm.dynamics.com/api/data/v9.0/faxes(3ce6c728-3c8a-4b55-a4ee-a251b253c3ee)](https://org0.crm.dynamics.com/api/data/v9.0/faxes%283ce6c728-3c8a-4b55-a4ee-a251b253c3ee%29) |

### Unrelate rows in selected environment

- Operation ID:
    - DisassociateEntitiesWithOrganization

Remove the association between individual rows in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Relationship | associationEntityRelationship | True | string | Choose relationship type |
| Unrelate with | $id | True | string | Enter the row URL using OData ID from a previous step or typing the full URL (eg. [https://org0.crm.dynamics.com/api/data/v9.0/faxes(3ce6c728-3c8a-4b55-a4ee-a251b253c3ee)](https://org0.crm.dynamics.com/api/data/v9.0/faxes%283ce6c728-3c8a-4b55-a4ee-a251b253c3ee%29) |

### Update a row

- Operation ID:
    - UpdateOnlyRecord

This action allows you to modify any selected row in a Microsoft Dataverse table. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
|  |  |  | object |  |

#### Returns

- response
    - object

### Update a row in selected environment

- Operation ID:
    - UpdateOnlyRecordWithOrganization

Update a row in a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Row Item | item | True | dynamic | Row to update |

#### Returns

 The outputs of this operation are dynamic. 

### Upload a file or an image

- Operation ID:
    - UpdateEntityFileImageFieldContent

This action allows you to upload a file or an image content to a Microsoft Dataverse table with a compatible column type. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Column name | fileImageFieldName | True | string | Choose a column |
| Content | item | True | binary | Add file or image content |
| Content name | x-ms-file-name | True | string | Enter a name for the file or image |

### Upload a file or an image to selected environment

- Operation ID:
    - UpdateEntityFileImageFieldContentWithOrganization

Update file or image content in a row in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Column name | fileImageFieldName | True | string | Choose a column |
| Content | item | True | binary | Add file or image content |
| Content name | x-ms-file-name | True | string | Enter a name for the file or image |

### Upsert a row

- Operation ID:
    - UpdateRecord

This action allows you to modify any selected row in a Microsoft Dataverse table, or adds a new row if it doesn’t exist. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
|  |  |  | object |  |

#### Returns

- response
    - object

### Upsert a row in selected environment

- Operation ID:
    - UpdateRecordWithOrganization

Update or add (upsert) a row in a table in a Power Platform environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Return Full Metadata | x-ms-odata-metadata-full |  | boolean | The header parameter to customer to opt-in returning full odata metadata in response. |
| Environment | organization | True | string | Choose an environment |
| Table name | entityName | True | string | Choose a table |
| Row ID | recordId | True | string | Enter the row's globally unique identifier (GUID) |
| Row Item | item | True | dynamic | Row to update |

#### Returns

 The outputs of this operation are dynamic. 

## Triggers

| When a flow step is run from a business process flow | This trigger allows you to start a flow when the Run Flow button in a business process flow step is clicked. (Available only for Power Automate.) |
| --- | --- |
| When a row is added, modified or deleted | This trigger allows you to start a flow when a row is added, modified or deleted in a Microsoft Dataverse table, such that it matches the selected options. This connector was formerly known as Common Data Service (current environment). |
| When a row is selected | Triggers a flow when a row is selected from the Flow menu in the command bar. (Available only for Power Automate.) |
| When an action is performed | Triggers when a Microsoft Dataverse action has completed. |

### When a flow step is run from a business process flow

- Operation ID:
    - OnFlowStepRun

This trigger allows you to start a flow when the Run Flow button in a business process flow step is clicked. (Available only for Power Automate.)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| operationId | operationId |  | string |  |
| host | host |  | object |  |
| schema | schema | True | object |  |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flows Workflow Log Id | entity.FlowsWorkflowLogId | string | Flow workflow log id. |
| BPF Instance Id | entity.BPFInstanceId | string | Business process flow instance id. |
| BPF Instance Table Name | entity.BPFInstanceEntityName | string | Business process flow instance table name. |
| BPF Definition Id | entity.BPFDefinitionId | string | Business process flow definition id. |
| BPF Definition Table Name | entity.BPFDefinitionEntityName | string | Business process flow definition table name. |
| Step Id | entity.StepId | string | Business process flow step id. |
| BPF Definition Name | entity.BPFDefinitionName | string | Business process flow definition name. |
| BPF Instance Name | entity.BPFInstanceName | string | Business process flow instance name. |
| BPF Flow Stage Localized Name | entity.BPFFlowStageLocalizedName | string | Business process flow stage localized name. |
| BPF Flow Stage Table Name | entity.BPFFlowStageEntityName | string | Business process flow stage table name. |
| BPF Flow Stage Table Collection Name | entity.BPFFlowStageEntityCollectionName | string | Business process flow stage table collection name. |
| BPF Flow Stage Table Row Id | entity.BPFFlowStageEntityRecordId | string | Business process flow stage table row id. |
| BPF Active Stage Id | entity.BPFActiveStageId | string | Business process flow active stage id. |
| BPF Active Stage Table Name | entity.BPFActiveStageEntityName | string | Business process flow active stage table name. |
| BPF Active Stage Localized Name | entity.BPFActiveStageLocalizedName | string | Business process flow active stage localized name. |

### When a row is added, modified or deleted

- Operation ID:
    - SubscribeWebhookTrigger

This trigger allows you to start a flow when a row is added, modified or deleted in a Microsoft Dataverse table, such that it matches the selected options. This connector was formerly known as Common Data Service (current environment).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Change type | message | True | integer | Choose when the flow triggers |
| Table name | entityname | True | string | Choose a table |
| Scope | scope | True | integer | Choose a scope to limit which rows can trigger the flow |
| Select columns | filteringattributes |  | string | Enter a comma-separated list of column unique names. The flow triggers if any of them are modified |
| Filter rows | filterexpression |  | string | Odata expression to limit rows that can trigger the flow, eg. statecode eq 0 |
| Delay until | postponeuntil |  | string | Enter a time to delay the trigger evaluation, eg. 2020-01-01T10:10:00Z |
| Run as | runas |  | integer | Choose the running user for steps where invoker connections are used |

#### Returns

A Table item.

- Body
    - WebhookNotificationContent

### When a row is selected

- Operation ID:
    - OnRecordSelected

Triggers a flow when a row is selected from the Flow menu in the command bar. (Available only for Power Automate.)

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
| items | body.rows | object |  |
| User id | headers.x-ms-user-id-encoded | guid | The unique identifier of the user who triggered the flow in AAD. |
| User email | headers.x-ms-user-email-encoded | byte | The email address of the user who triggered the flow. |
| User name | headers.x-ms-user-name-encoded | byte | The display name of the user who triggered the flow. |
| Timestamp | headers.x-ms-user-timestamp | string | The time the flow was triggered. |

### When an action is performed

- Operation ID:
    - BusinessEventsTrigger

Triggers when a Microsoft Dataverse action has completed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Catalog | catalog | True | string | Choose an option to filter tables and actions. |
| Category | category | True | string | Choose an option to filter tables and actions. |
| Table name | entityname | True | string | Choose a table to filter actions. |
| Action name | sdkmessagename | True | string | Choose an action. |

#### Returns

An action and table item.

- Body
    - WebhookNotificationContentForWhenAnActionIsPerformed

## Definitions

### EntityItemList

List of tables

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of EntityItem | List of Items |
| Next link | @odata.nextLink | string | The url to fetch next page data. |

### EntityItem

A Table item

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| dynamicProperties | dynamicProperties | object |  |

### Object

### WebhookNotificationContent

A Table item.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| schema | schema | Object |  |

### SearchOutput

The search output.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| List of rows | value | array of object | List of rows |
| Row search score | value.@search.score | number | Search score of row |
| Row table name | value.@search.entityname | string | Table that contains the row |
| Row object id | value.@search.objectid | string | Objectid of row |
| Row object type code | value.@search.objecttypecode | integer | Objecttypecode of row |
| Total row count | totalrecordcount | integer | Total count of results (-1 if returntotalrecordcount is set to false) |

### WebhookNotificationContentForWhenAnActionIsPerformed

An action and table item.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| schema | schema | Object |  |

### WebhookNotificationContentForPerformBackgroundOperation

The action response object which includes background operation state code and status code.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| schema | schema | Object |  |

### MCPQueryResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| jsonrpc | jsonrpc | string |  |
| id | id | string |  |
| method | method | string |  |
| params | params | object |  |
| result | result | object |  |
| error | error | object |  |

### object

This is the type 'object'.

### binary

This is the basic data type 'binary'.