---
layout: Reference
title: SQL Server - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/sql/
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
document_id: 58c0b60a-fdc5-6ce7-e73f-c5071c0f9356
document_version_independent_id: 5865c7d1-abc2-4a70-56dd-4ebef0b411c4
updated_at: 2025-08-19T19:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/Sql/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ae6395006a7dfb27df502f5ed40bc5604ddfefb8/docs/Sql/index.yml
git_commit_id: ae6395006a7dfb27df502f5ed40bc5604ddfefb8
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: sql/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/Sql/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/cbe4ca68-43ac-4375-aba5-5945a6394c20
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/ced846cc-6a3c-4c8f-9dfb-3de0e90e2742
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: db6ac99c-ff05-9873-2a3e-c52adf27cd46
---

# SQL Server

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1746/1.0.1746.4174/sql/icon.png)
Microsoft SQL Server is a relational database management system developed by Microsoft. Connect to SQL Server to manage data. You can perform various actions such as create, update, get, and delete on rows in a table.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Connector in-depth

This article describes the operations for the SQL Server *managed* connector, which is available for Azure Logic Apps, Power Automate, and Power Apps. The SQL Server *built-in* connector is available only for Standard logic app workflows in Azure Logic Apps.

- For more information about this connector in Power Apps, see [Connect to SQL Server from Power Apps](/en-us/powerapps/maker/canvas-apps/connections/connection-azure-sqldatabase).
- For more information about the SQL Server built-in connector and managed connector in Azure Logic Apps, see [Connect to SQL databases from workflows in Azure Logic Apps](/en-us/azure/connectors/connectors-create-api-sqlazure).

## Authentication

If you want to create non-Microsoft Entra ID (Microsoft Entra ID) connections, use the connection string authentication option. Make sure that you provide the same **Server name** and **Database name** values as defined in your connection.

### Microsoft Entra ID authentication

#### Known limitations with Microsoft Entra ID authentication

Due to current authentication pipeline limitations, Microsoft Entra ID guest users aren't supported for Microsoft Entra ID connections to SQL Server. To resolve this problem, use SQL Server authentication or Windows authentication instead.

#### Enable Microsoft Entra ID authentication for SQL Server

1. Set up and provision your account as a SQL Microsoft Entra ID (Microsoft Entra ID) member. For more information, see [Configure and manage Microsoft Entra ID authentication with Azure SQL](/en-us/azure/azure-sql/database/authentication-aad-configure).
2. On your SQL server, set up your Microsoft Entra ID administrator.

    1. In the Azure portal, go to the SQL server where you want to enable Microsoft Entra ID authentication.
    2. On your SQL server resource menu, under **Settings**, select **Microsoft Entra ID**.
    3. On the **Microsoft Entra ID** pane toolbar, select **Set admin**.
    4. Find and select an Microsoft Entra ID user account in the current tenant to make them a server administrator. Save your changes.
3. In your Microsoft Entra ID tenant, create and register an Microsoft Entra ID application for accessing your SQL database. For more information, see [SQL Server - Set up Microsoft Entra ID authentication](/en-us/sql/relational-databases/security/authentication-access/azure-ad-authentication-sql-server-setup-tutorial#create-and-register-an-azure-ad-application).

    1. In the Azure portal, go to your Microsoft Entra ID tenant where you want to create the Microsoft Entra ID application.
    2. On the tenant menu, under **Manage**, select **App registrations** &gt; **New registration**.
    3. On the **Register an application** pane, provide a name for the application. Remember this name so you can later create a user and grant role access to your SQL database.
    4. When you're done, select **Register**, which creates the Microsoft Entra ID application.
    5. On the **App registrations** pane, select your new Microsoft Entra ID application. On the application menu, select **Certificates & secrets** &gt; **New client secret**.
    6. Provide a description for the secret, and select an expiration.
4. Sign in to your SQL server and database with the credentials for the Microsoft Entra ID user account that you set up as a server administrator.
5. In your SQL database, create a contained user to represent the Microsoft Entra ID application. This step requires [Microsoft SQL Server Management Studio (SSMS)](/en-us/sql/ssms/download-sql-server-management-studio-ssms).

    The following steps assign the roles of `db_datareader` and `db_datawriter` to the Microsoft Entra ID application with the name `example-Azure-AD-application-name`. When you run the specified commands, remember to replace `example-Azure-AD-application-name` with the name for your Microsoft Entra ID application, and assign the required roles for your needs.

    1. Start SSMS and connect to the SQL server where the Microsoft Entra ID application will access.
    2. In **Authentication**, use **Active Directory - Universal with MFA support** and the Microsoft Entra ID account that you set up as the server administrator.
    3. In the **Object Explorer**, expand the **Databases** folder.
    4. Find your database, open the database shortcut menu, and select **New query**.
    5. In the query window, execute the following command to link the Microsoft Entra ID application to a new user in the database:

        ```sql
        CREATE USER [example-Azure-AD-app-name] FROM EXTERNAL PROVIDER
        ```
    6. Clear the query window. Then, run the following command to assign the `db_datareader` role to the Microsoft Entra ID application:

        ```sql
        ALTER ROLE db_datareader ADD MEMBER [example-Azure-AD-application-name]
        ```
    7. Repeat the previous step to assign the `db_datawriter` role to the Microsoft Entra ID application:

        ```sql
        ALTER ROLE db_datawriter ADD MEMBER [example-Azure-AD-application-name]
        ```

### Managed identity authentication

Currently, only Azure Logic Apps supports [managed identity authentication](/en-us/azure/active-directory/managed-identities-azure-resources/overview) for the SQL Server connector.

### Service principal authentication

#### Set up managed identity on your logic app

1. In the Azure portal, go to your logic app resource.
2. Enable either the system-assigned identity or user-assigned identity. If you don't have a user-assigned identity, you have to first create that identity. For more information, see [Authenticate access to Azure resources with managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity).
3. If you selected user-assigned identity, make sure that you added that identity to your logic app resource.

    1. In the Azure portal, browse to the logic app resource where you want to use the managed identity.
    2. On the logic app navigation menu, under the **Settings**, select **Identity**.
    3. On the **User assigned** tab, select **Add**.
    4. Select the managed identity to use, and select **Add**.

#### Set up SQL server for managed identity authentication

1. On your SQL server, set up your Microsoft Entra ID administrator.

    1. In the Azure portal, browse to the SQL server where you want to enable Microsoft Entra ID authentication.
    2. On your SQL server resource menu, under **Settings**, select **Microsoft Entra ID**.
    3. On the **Microsoft Entra ID** pane toolbar, select **Set admin**.
    4. Find and select an Microsoft Entra ID user account in the current tenant to make them a server administrator. Save your changes.
2. In your SQL database, create a contained user to represent the managed identity. This step requires [Microsoft SQL Server Management Studio (SSMS)](/en-us/sql/ssms/download-sql-server-management-studio-ssms).

    The following steps assign the role of `db_datareader` to a managed identity with the name `example-managed-identity-name`. When you run the specified commands, remember to replace `example-managed-identity-name` with the name for your managed identity, and assign the correct role for your needs. For example, `db_datareader` can't execute write operations.

    1. Start SSMS and connect to the SQL server where the managed identity will access.
    2. In **Authentication**, use **Active Directory - Universal with MFA support** and the Microsoft Entra ID account that you set up as the server administrator.
    3. In the **Object Explorer**, expand the **Databases** folder.
    4. Find your database, open the database shortcut menu, and select **New query**.
    5. In the query window, execute the following command to link the managed identity to a new user in the database:

        ```sql
        CREATE USER [example-managed-identity-name] FROM EXTERNAL PROVIDER
        ```
    6. Clear the query window. Then, run the following command to assign a role to the manage identity:

        ```sql
        ALTER ROLE db_datareader ADD MEMBER [example-managed-identity-name]
        ```

        Note

        If you assign roles to the managed identity at the database level, the identity won't have the required scopes to list all databases. When you select from the **Database name** list in a SQL trigger or action, you'll get an error like the following example:

        ```
        Couldn't retrieve values. Error code: 'Unauthorized', Message: 'Credentials are missing or not valid'.
        Inner exception: The credentials provided for the SQL source are invalid
        ```

        To resolve this problem, you have the following options:

        - Assign a server-level role that can list all databases to the managed identity.
        - In the SQL trigger or action, enter the database name using the **Enter custom value** option.

For more information, review the following documentation:

- [Authenticate access to Azure resources using managed identities in Azure Logic Apps](/en-us/azure/logic-apps/create-managed-service-identity)
- [Tutorial: Use a Windows VM system-assigned managed identity to access Azure SQL](/en-us/azure/active-directory/managed-identities-azure-resources/tutorial-windows-vm-access-sql)
- [Configure and manage Microsoft Entra ID authentication with Azure SQL](/en-us/azure/azure-sql/database/authentication-aad-configure?tabs=azure-powershell#azure-ad-admin-with-a-server-in-sql-database)
- [Database-level roles](/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15)
- [Server-level roles](/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15)

## Virtual Network support

When the connector is used in a [Power Platform environment linked to a Virtual Network](/en-in/power-platform/admin/vnet-support-overview), limitations apply:

- The following actions are the only supported actions:

    - [Delete row (V2)](/en-us/connectors/sql/#delete-row-%28v2%29)
    - [Execute a SQL query (V2)](/en-us/connectors/sql/#execute-a-sql-query-%28v2%29)
    - [Get row (V2)](/en-us/connectors/sql/#get-row-%28v2%29)
    - [Get rows (V2)](/en-us/connectors/sql/#get-rows-%28v2%29)
    - [Get tables (V2)](/en-us/connectors/sql/#get-tables-%28v2%29)
    - [Insert row (V2)](/en-us/connectors/sql/#insert-row-%28v2%29)
    - [Update row (V2)](/en-us/connectors/sql/#update-row-%28v2%29)
    - [Execute stored procedure (V2)](/en-us/connectors/sql/#execute-stored-procedure-%28v2%29)
- Any action outside of this list will return a "403 Unauthorized" error
- On-premise data gateway is not supported
- When using Microsoft Entra ID Integrated authentication, please type in the database name manually as a Custom Value

## Known issues and limitations with actions

| Short description | Operations | Long description |
| --- | --- | --- |
| Get deterministic results in an action output | Get rows (V2) | Usage of the `Order By` parameter is recommended in order to get deterministic results in action output. If `Order By` isn't specified, primary keys or unique keys are used by SQL Server by default. Non-deterministic results might cause issues, such as duplicating records in the action output when pagination is enabled. SQL views don't support primary key, which is the limitation from SQL Server itself. |
| Execute a SQL query limited support | Execute a SQL query (V2) | Not supported for on-premises SQL Server. |
| General CRUD requirements | Get row (V2)Get rows (V2)Update row (V2)Delete row (V2) | String values will be trimmed in the case of Azure SQL instance usage. Therefore, blank strings will be converted into empty strings.For INSERT and UPDATE operations, the connector will return the updated rows. This requires that the connection will need to have permission to read data from the SQL Server as well.A Primary Key is required for the following operations:- GetItem- PatchItem- DeleteItem |
| Aggregation transformation parameter support | Get rows (V2) | Only the following Aggregation transformations are supported:- **filter**: Allows filtering input set. Supports the same expressions as `$filter`. Example: `filter(ColName1 eq 1)`.- **aggregate**: Allows aggregation using one of following methods: `average`, `max`, `min`, `sum`, `countdistinct`. Example: `aggregate(ColName2 with max as MaxValue)`.You can combine several operators separated by forward slashes to express that they are consecutively applied. This means the result of each transformation is the input to the next transformation. Example: `filter(ColName1 eq 4)/aggregate(ColName2 with sum as MaxWorkItemId)`. |
| Formal parameter's data type overridden when executing a SQL query | Execute a SQL query [DEPRECATED]Execute a SQL query (V2) | Data type entered when defining a formal parameter on a SQL query might be overridden since the underlying implementation of the connector determines the type via the provided **value** of the parameter. |
| IN operator using formal parameters requires passed in values to be defined separately | Execute a SQL query (V2) | When utilizing formal parameters with the IN operator all passed in values need to be defined separately rather than as a single formal parameter housing multiple comma separated values. Example: `SELECT * FROM tableName WHERE columnName IN (@formalParameterA, @formalParameterB, @formalParameterC)`. |
| Failure Using Azure Sql DataWareHouse DB | Insert row (V2) | Using Azure SQL Datawarehouse DB in Power Apps results in failure due to a syntax mismatch in the connector's execution on the DB. Please create a flow with the Azure SQL Datawarehouse connector in Power Automate, trigger it from PowerApps, or form a query and use it in the Execute a SQL query (V2) Action. |

## Known issues and limitations with triggers

Note

Turning off and turning on a flow won't reset the trigger state.

| Short description | Operations | Long description |
| --- | --- | --- |
| Modify an item: row operations | When an item is modified (V2) | Fires on both INSERT and UPDATE row operations. |
| Modify an item: column requirements | When an item is modified (V2) | A ROWVERSION column is required. |
| Create an item: column requirement | When an item is created (V2) | An IDENTITY column is required. |
| Create an item | When an item is created (V2) | Use the latest inserted row's identity column value as a threshold (trigger state) to identify newly inserted rows later. The logic assumes every new row's identity has to be bigger than the previous one. Therefore, in case identity sequence is reset for a table due to explicit t-sql command or table truncation, trigger logic will skip new rows for the existing flow. There are two different workarounds possible: First, you can reset the flow trigger state by updating the trigger action card (for example, rename it, update parameters, or add a new connection), and save the changes. Or, you can restore the target table identity sequence [using the following approach](/en-us/sql/t-sql/database-console-commands/dbcc-checkident-transact-sql?view=sql-server-ver15#c-forcing-the-current-identity-value-to-a-new-value). |

## General known issues and limitations

- Insert and update to a table won't work if you defined a SQL server-side trigger on the table.

    To resolve this problem, you have the following options:

    - Use a stored procedure or native query.
    - Remove the trigger from your SQL table.
- The following limitations apply to using the SQL connector with an on-premises SQL server:

    - The minimum supported version for on-premises SQL Server is SQL Server 2005.
    - The request size limit is 2 MB through on-premises SQL Server.
    - The response size limit is 8 MB through on-premises SQL Server.
- The following limitations apply to invoking a stored procedure on an on-premises SQL server via a gateway:

    - Output values for `OUTPUT` parameters aren't returned. You can still specify input values for `OUTPUT` parameters.
    - ResultSets value is Untyped.
    - Return value isn't available.
    - Only the first result set is returned.
    - Dynamics schemas aren't supported for result sets.
- The following data types can't be used as query option predicates:

    - `date`
    - `datetime`
    - `datetime2`
    - `smalldatetime`
- Setting Force Encryption isn't supported. By default, SQL Database and SQL Managed Instance secure customer data by encrypting data in motion with Transport Layer Security (TLS). For more information, see [Azure SQL security overview](/en-us/azure/azure-sql/database/security-overview#transport-layer-security-encryption-in-transit).
- Multiple result sets support is currently limited for SQL native query execution. Only result sets, up to the first empty one result set, are returned.

    To resolve this problem, use stored procedures.
- After SQL queries and stored procedures execute, the result set schema should contain unique non-empty column names.
- For any operation inside the stored procedure that returns some set of results, such as any inner `SELECT` statement, the result set schema should contain unique non-empty column names.
- If the execution time exceeds 110 seconds for a SQL query or stored procedure, actions will time out.

    In Azure Logic Apps, to work around this limitation and learn how to execute long-running stored procedures, see [Long-running SQL stored procedures in Logic Apps](https://techcommunity.microsoft.com/t5/integrations-on-azure/long-running-sql-stored-procedures-in-logicapps/ba-p/1800712).
- In Azure Logic Apps, you can access the private endpoint on SQL Server only from within an integration service environment (ISE). For more information, see [Access to Azure virtual networks](/en-us/azure/logic-apps/connect-virtual-network-vnet-isolated-environment-overview/).
- When creating a query with many filters, the following error can occur: "OData query syntax tree has exceeded nodes count limit of '100'. Please try to simplify OData query parameters expressions". To avoid this issue, please optimize the filtering conditions to reduce their number (for example, using ranges).
- It is not recommended to store large amounts of data (more than 30 megabytes) in the target table fields (e.g. xml or text data types). It can lead to a significamt performance degradation of actions and triggers, causing 504 timeout errors. Please use 'Select Query' parameter to include only relatively small fields and avoid large output data fields. Or please use specialized file storages instead, such as [Azure Blob Storage](/en-us/connectors/azureblob/).
- CRUD operations are not supported for Azure Synapse sources due to lack of OUTPUT clause support. It is highly recommended to use dedicated [Azure SQL Data Warehouse](/en-us/connectors/sqldw/) connector instead.
- Power Platform and Logic Apps navigator views are limited to a list size of 10,000 tables.
- Database schema that do not conform to [OData standard identifiers](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_SimpleIdentifier) are not supported (column name starting with number, containing surrogate pair character, etc.). Customers can either use a View to abstract the name of the column(s), or they can use SQL Extended properties to handle the use of supplementary plane characters keeping them separate from the database schema, see: [Add an extended property to a column in a table](/en-us/sql/relational-databases/system-stored-procedures/sp-addextendedproperty-transact-sql?view=sql-server-ver16#b-add-an-extended-property-to-a-column-in-a-table).
- When using the SQL connector as a data source for virtual tables, the server and database values must match between the source dataset and the connection being used. When using SQL authentication, the dataset values can be set to default,default as the connection will already contain server and database values. If dataset connection values are explicitly stated, they must match those of the connection otherwise errors such as "Something went wrong. We weren't able to open your table. Try reloading or reopening." or "invalid data source" may occur.
- When schema changes occur to views used in Power Automate flows, triggers may not fire until a new connection is created against the updated view - only refreshing the connection is not sufficient for resetting the trigger against updated views.
- [Tabular Data Stream (TDS)](/en-us/sql/relational-databases/security/networking/tds-8?view=sql-server-ver17) protocol 8.0 is currently not supported by the SQL connector.

## Special throttling limits

- In different cases, the SQL connector has different throttling limits. In the following table, **Native** operations include SQL stored procedure and SQL Query. **CRUD** stands for create, read, update, and delete operations.
- Along with the below limits, connectionID level throttling is also applied based on total time spent by previous requests in a given time period.

| Service | Environment | Operations | Name | Calls | Renewal period (seconds) |
| --- | --- | --- | --- | --- | --- |
| Logic Apps & Power Automate | Shared Environment | Native | API calls per connection | 500 | 10 |
| Logic Apps & Power Automate | Shared Environment | CRUD | API calls per connection | 100 | 10 |
| Logic Apps & Power Automate | Shared Environment | Native | Concurrent calls per connection | 200 | - |
| Logic Apps & Power Automate | Shared Environment | CRUD | Concurrent calls per connection | 125 | - |
| Power Apps | Shared Environment | All | API calls per user | 300 | 30 |
| Power Apps | Shared Environment | All | Concurrent calls per connection | 125 | - |

Note

Concurrent calls are the number of in-progress requests that a particular connection can make. For example, with Azure Logic Apps native calls, a single connection can make 200 concurrent calls. Any subsequent calls return a 429 error if all 200 calls are still executing. No time limit exists because the calls can take an arbitrary amount of time. However, the point of the calls limit is to prevent too many long-running queries from a single connection and negatively affecting other connections.

> 
> For example, if a connection makes 200 calls at the same time, and each call takes 50 seconds to execute, all other calls will fail with a 429 error for the next 50 seconds. After one or more queries finish execution, and results are returned, any subsequent calls are processed.

## Power Apps data type mappings

See the Power Apps [SQL documentation](/en-us/power-apps/maker/canvas-apps/connections/sql-connection-overview#power-apps-data-type-mappings)

## Power Apps functions and operations delegable to SQL Server

See the Power Apps [SQL delegation documentation](/en-us/power-apps/maker/canvas-apps/connections/sql-connection-overview#power-apps-functions-and-operations-delegable-to-sql-server)

## Formal parameters in operations

Execute a SQL query [DEPRECATED] and Execute a SQL query (V2) actions allow usage of formal parameters. They're defined as key-value pairs, where `key` is the parameter name and `value` is the SQL data type, such as `INT` or `NVARCHAR(255)`. After you define the name and data type, a new input field for the value is shown.

## Migrate V1 operations to V2 equivalent

Follow the steps here to migrate from a V1 operation to its V2 equivalent.

Important

Before starting the migration **always** save a copy of your Logic App, Power Automate flow, or Power App to have a backup.

Note

All V2 operations have two extra parameters: `Server Name`, and `Database Name`. This enables V2 operations to support Microsoft Entra ID authentications.

| Operation type | V1 operation | V2 operation equivalent |
| --- | --- | --- |
| Action | Delete row [DEPRECATED] | Delete row (V2) |
| Action | Execute a SQL query [DEPRECATED] | Execute a SQL query (V2) |
| Action | Execute stored procedure | Execute stored procedure (V2) |
| Action | Get row [DEPRECATED] | Get row (V2) |
| Action | Get rows [DEPRECATED] | Get rows (V2) |
| Action | Insert row [DEPRECATED] | Insert row (V2) |
| Action | Lists tables exposed by the connection [DEPRECATED] | Get tables (V2) |
| Action | Update row [DEPRECATED] | Update row (V2) |
| Trigger | When an item is created [DEPRECATED] | When an item is created (V2) |
| Trigger | When an item is modified [DEPRECATED] | When an item is modified (V2) |

### Identify V1 actions

#### Power Automate

For Power Automate operations, open the SQL Server operation's `Code View` and check the `host.operationId` value. If the value matches one of the SQL Server V1 operation IDs listed above, that operation needs to be migrated to its V2 equivalent.

For example, `PatchItem` operation needs to be migrated to `PatchItem_V2`.

![Select server name](assets/identify-v1-action-powerplatform.png)

#### Logic Apps

To get an overview of the Logic Apps that contain at least one SQL Server V1 operation:

1. Open the Azure Portal
2. Open the [Azure Resource Graph Explorer](/en-us/azure/governance/resource-graph/overview)
3. Enter your subscription ID in the placeholder and run the query below to get a summary of the Logic Apps that need your attention and the count of SQL Server V1 actions in each of them.

    - [Azure Resource Graph Explorer](/en-us/azure/governance/resource-graph/overview) script to identify Logic Apps with V1 actions.

        ```kql
        resources
        | where subscriptionId == "<subscription-id>"
        | where type == "microsoft.logic/workflows"
        | extend propertiesJson=parse_json(properties)
        | extend actionsJson=propertiesJson["definition"]["actions"]
        | mv-expand actionsJson
        | where notnull(actionsJson)
        | extend path=extract("\"path\":\"(.*?)\"", 1, tostring(actionsJson))
        | where notnull(path) and path startswith "/datasets/default/"
        | extend actionConnectionName=extract("\"connection\":{\"name\":\"(.*?)\"}", 1, tostring(actionsJson))
        | where notnull(actionConnectionName)
        | parse actionConnectionName with "@parameters('$connections')['"parsedActionConnectionName"']['connectionId']"
        | extend tmpConnection = propertiesJson["parameters"]["$connections"]["value"][parsedActionConnectionName]
        | where notnull(tmpConnection)
        | extend connectionId=extract("\"id\":\"(.*?)\"", 1, tostring(tmpConnection))
        | where notnull(connectionId) and connectionId endswith "/managedApis/sql"
        | project id, name, resourceGroup, actionsJson
        | summarize v1ActionCount = count() by resourceGroup, logicAppName = name
        ```
    - [Azure Resource Graph Explorer](/en-us/azure/governance/resource-graph/overview) script to identify Logic Apps with V1 triggers.

        ```kql
        resources
        | where subscriptionId == "<subscription-id>"
        | where type == "microsoft.logic/workflows"
        | extend propertiesJson=parse_json(properties)
        | extend triggersJson=propertiesJson["definition"]["triggers"]
        | mv-expand triggersJson
        | where notnull(triggersJson)
        | extend path=extract("\"path\":\"(.*?)\"", 1, tostring(triggersJson))
        | where notnull(path) and path startswith "/datasets/default/"
        | extend triggerConnectionName=extract("\"connection\":{\"name\":\"(.*?)\"}", 1, tostring(triggersJson))
        | where notnull(triggerConnectionName)
        | parse triggerConnectionName with "@parameters('$connections')['"parsedTriggerConnectionName"']['connectionId']"
        | extend tmpConnection = propertiesJson["parameters"]["$connections"]["value"][parsedTriggerConnectionName]
        | where notnull(tmpConnection)
        | extend connectionId=extract("\"id\":\"(.*?)\"", 1, tostring(tmpConnection))
        | where notnull(connectionId) and connectionId endswith "/managedApis/sql"
        | project id, name, resourceGroup, triggersJson
        | summarize v1TriggerCount = count() by resourceGroup, logicAppName = name
        ```

### Migrate to V2 operations on the UX

#### Migrate Logic Apps and Power Automate automation

1. Open the Logic App or Power Automate flow that contains the V1 action.
2. Add an action right before or after the V1 action you want to update.

    ![Add an action](assets/migrate-action-add-action.png)
3. Click on the SQL Server connector and look for the V2 equivalent of the action being migrated.

    ![Select V2 action](assets/migrate-action-select-v2-equivalent.png)
4. Select the connection to use on the V2 action.

    Tip

    V2 actions support Microsoft Entra ID authentication types. Logic Apps also supports Azure Logic Apps supports [managed identity authentication](/en-us/azure/active-directory/managed-identities-azure-resources/overview) on V2 actions.

    See more on the Authentication section.
5. Enter the Server name.

    - If you are using `Windows Authentication` or `SQL Server Authentication`, select the server name from the drop-down.

        ![Select server name](assets/migrate-action-select-server.png)
    - If you are using `Service principal`, `Microsoft Entra ID` or `Managed Identity` authentication type, click "Enter custom value" on the drop-down, then enter your server name.

        ![Enter custom server name](assets/migrate-action-select-enter-custom-value-server.png)
6. Enter your database by selecting it from the drop-down.

    ![Select database](assets/migrate-action-select-database.png)
7. Enter the remaining of the parameters so they are the same as the V1 action.
8. After completing configuring the V1 action, delete the V2 action.

    ![Delete V1 action](assets/migrate-action-delete-v1-operation.png)

    Important

    Deleting the V1 action will cause all the dynamic content from V1 to be deleted; V2 dynamic content will need to be re-added.

#### Migrate Power Apps

1. Open the app that needs to be updated.
2. Delete all the SQL data sources.

    Note

    Formulas using the deleted data sources will show an error, this is expected and will get fixed on next steps.

    ![Delete data sources](assets/migrate-powerapp-delete-datasource.png)
3. Open the Upcoming features tab on the Settings, and type in "SQL" on the search box. The "Enable enhanced Microsoft SQL Server connector" feature will come up.

    ![Open upcoming features](assets/migrate-powerapp-open-upcoming-features.png)
4. Turn on the "Enable enhanced Microsoft SQL Server connector" feature.

    Note

    This feature is on by default for all new Power Apps.

    ![Turn on SQL Server enhanced feature](assets/migrate-powerapp-turn-on-enhanced-sql.png)
5. Readd the data source.

    ![Readd data sources](assets/migrate-powerapp-readd-datasource.png)
6. Verify the app behavior, specially on tables that handle DateTime data types.
7. Save the app.

### Migrate operations via Code View in Azure Logic Apps

For more complex scenarios, actions can be migrated by updating the definition of the workflow.

1. Identify the name of the operations (trigger and/or actions) that need to be migrated in the Logic App.
2. Open the designer of the Logic App to be modified, and click on "Code view".

    ![Open code view](assets/migrate-code-view-open-code-view.png)
3. For each action that needs to be migrated:

    1. Find the action or trigger path property
    2. Substitute `/datasets/default/` in the path property with `/v2/datasets/@{encodeURIComponent(encodeURIComponent('default'))},@{encodeURIComponent(encodeURIComponent('default'))}/`.
4. Once all operations are updated, click on "Designer".

    ![Open designer view](assets/migrate-code-view-open-designer-view.png)
5. Verify that all operations were migrated successfully.

    - The server and database name should be populated with the values of the connection.
    - All other parameters should be populated as well.

    ![Final V2 view](assets/migrate-code-view-final-view.png)
6. Save and test the Logic App.

Tip

If desired, once actions are migrated to the V2 version, the operation's name and connection can be updated.

Here is an example for migrating Get rows [DEPRECATED].

1. Open "Code View".
2. Find the "Get rows [DEPRECATED]" action.

    ```json
    "actions": {
      "Get_rows_[DEPRECATED]": {
        "inputs": {
          "host": {
            "connection": {"name": "..."},
            "method": "get",
            "path": "/datasets/default/tables/.../items"
          },
          "runAfter": {},
          "type": "ApiConnection"
        }
      }
    }
    ```
3. Update the datasets segment of the path with the provided substitute above.

    ```json
    "actions": {
      "Get_rows_[DEPRECATED]": {
        "inputs": {
          "host": {
            "connection": {"name": "..."},
            "method": "get",
            "path": "/v2/datasets/@{encodeURIComponent(encodeURIComponent('default'))},@{encodeURIComponent(encodeURIComponent('default'))}/tables/.../items"
          },
          "runAfter": {},
          "type": "ApiConnection"
        }
      }
    }
    ```
4. Click on "Designer" to go back to the initial view and verify that the action was correctly populated.

### Migrate operations via editing the flow definition

1. Identify the name of the operations (trigger and/or actions) that need to be migrated in the Logic App.
2. Export your flow as a package (ZIP).

    ![Export flow](assets/migrate-flow-export-flow.png)
3. Extract the ZIP file.
4. Open the folder where ZIP was extracted.
5. Navigate to `Microsoft.Flow`, then `flows`, then the GUID named folder.
6. Open the definition.json file in a text editor.

    - To improve the readability, format the JSON.
7. For each action that needs to be migrated:

    1. Find the action or trigger property
    2. Update `inputs.host.operationId` property to the V2 equivalent. You can find the value in the documentation of the operation.

        ![ZIP structure](assets/migrate-flow-operation-id.png)
    3. Add to `inputs.parameters` two properties:

        - `server` with value `default`
        - `database` with value `default`
8. Save the definition.json file
9. Navigate back to where manifest.json and Microsoft.Flow are located
10. Select both Microsoft.Flow and manifest.json, and compress to a ZIP file.

    Important

    Make sure that the new ZIP file has the exact same file and folder structure as the original ZIP file.

    The folder Microsoft.Flow and the file manifest.json **must** be at the root of the new ZIP file. Failure to have the same structure will cause errors when uploading the package.

    ![ZIP structure](assets/migrate-flow-zip-structure.png)
11. Navigate to your flows on Power Automate.
12. Import the updated flow by importing the package. Select the newly created ZIP, and upload the package.

    ![Import package](assets/migrate-flow-import-package.png)
13. Select the import setup (import/create a new one), and select the connections that will be used by the flow.
14. Once the import completes, open the new/updated flow.
15. Verify that the actions have been updated

- The server and database name should be populated with the values of the connection.
- All other parameters should be populated as well.

    ![V2 final view](assets/migrate-code-view-final-view.png)

Tip

If desired, once actions are migrated to the V2 version, the operation's name and connection can be updated on the UX.

Here is an example for migrating Execute a SQL query [DEPRECATED].

1. Open "Code View".
2. Find the "Execute a SQL query [DEPRECATED]" action.

    ```json
    "actions": {
      "Execute_a_SQL_query_[DEPRECATED]": {
        // ...
        "inputs": {
          "host": {
            // ...
            "operationId": "ExecutePassThroughNativeQuery"
          },
          "parameters": {
            "query/query": "SELECT * from [dbo].[SampleTable] WHERE AnyId = 42",
          },
          // ..
        }
      }
    }
    ```
3. Update the operation ID with the V2 operation ID equivalent, then add the server and database parameters with the `default` value like instructed above.

    ```json
    "actions": {
      "Execute_a_SQL_query_[DEPRECATED]": {
        // ...
        "inputs": {
          "host": {
            // ...
            "operationId": "ExecutePassThroughNativeQuery_V2"
          },
          "parameters": {
            "server": "default",
            "database": "default",
            "query/query": "SELECT * from [dbo].[SampleTable] WHERE AnyId = 42",
          },
          // ..
        }
      }
    }
    
    ```

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
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access your SQL database. | All regions except US Government (GCC) | Not shareable |
| Microsoft Entra ID Integrated (Azure Commercial) | Use Microsoft Entra ID to access your SQL database in Azure Commercial. | US Government (GCC) only | Not shareable |
| Microsoft Entra ID Integrated (Azure Government) | Use Microsoft Entra ID to access your SQL database in Azure Government. | US Government (GCC) only | Not shareable |
| Service principal (Microsoft Entra ID application) | Use Microsoft Entra ID application to access your SQL database. | All regions | Shareable |
| SQL Server Authentication | Use an account name and password to access your SQL database. | All regions | Shareable |
| Windows Authentication | Use an on-premise Microsoft Entra ID account name and password to access your SQL database. | All regions | Shareable |
| Windows Authentication (Non Shared) | Use an on-premise Microsoft Entra ID account name and password to access your SQL database. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Client Certificate Auth

Auth ID: certOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string |  | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application |  |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |

### Microsoft Entra ID Integrated

Auth ID: oauth

Applicable: All regions except US Government (GCC)

Use Microsoft Entra ID to access your SQL database.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Commercial)

Auth ID: oauthCom

Applicable: US Government (GCC) only

Use Microsoft Entra ID to access your SQL database in Azure Commercial.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Microsoft Entra ID Integrated (Azure Government)

Auth ID: oauth

Applicable: US Government (GCC) only

Use Microsoft Entra ID to access your SQL database in Azure Government.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal (Microsoft Entra ID application)

Auth ID: oauthSP

Applicable: All regions

Use Microsoft Entra ID application to access your SQL database.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string |  | True |
| Client ID | string |  | True |
| Client Secret | securestring |  | True |

### SQL Server Authentication

Auth ID: sqlAuthentication

Applicable: All regions

Use an account name and password to access your SQL database.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| SQL server name | string | Specify the name of the SQL server (server[:port]) | True |
| SQL database name | string | SQL database name | True |
| Username | securestring | Username credential | True |
| Password | securestring | Password credential | True |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

### Windows Authentication

Auth ID: windowsAuthentication

Applicable: All regions

Use an on-premise Microsoft Entra ID account name and password to access your SQL database.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| SQL server name | string | Specify the name of the SQL server (server[:port]) | True |
| SQL database name | string | SQL database name | True |
| Username | securestring | Username credential | True |
| Password | securestring | Password credential | True |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details | True |

### Windows Authentication (Non Shared)

Auth ID: windowsAuthenticationNonShared

Applicable: All regions

Use an on-premise Microsoft Entra ID account name and password to access your SQL database.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Username | securestring | Username credential | True |
| Password | securestring | Password credential | True |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| SQL server name | string | SQL server name | True |
| SQL database name | string | SQL database name | True |
| Authentication Type | string | Authentication type to connect to your database |  |
| Username | securestring | Username credential | True |
| Password | securestring | Password credential | True |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 10 seconds |

## Actions

| Delete row (V2) | This operation deletes a row from a table. |
| --- | --- |
| Delete row [DEPRECATED] | This action has been deprecated. Please use [Delete row (V2)](/en-us/connectors/sql/#delete-row-%28v2%29) instead.<br><br>~~This operation deletes a row from a table.~~ |
| Execute a SQL query (V2) | Execute a SQL query (V2) |
| Execute a SQL query [DEPRECATED] | This action has been deprecated. Please use [Execute a SQL query (V2)](/en-us/connectors/sql/#execute-a-sql-query-%28v2%29) instead.<br><br>~~Execute a SQL query~~ |
| Execute stored procedure | This operation runs a stored procedure. |
| Execute stored procedure (V2) | This operation runs a stored procedure. |
| Get row (V2) | This operation gets a row from a table. |
| Get row [DEPRECATED] | This action has been deprecated. Please use [Get row (V2)](/en-us/connectors/sql/#get-row-%28v2%29) instead.<br><br>~~This operation gets a row from a table.~~ |
| Get rows (V2) | This operation gets rows from a table. |
| Get rows [DEPRECATED] | This action has been deprecated. Please use [Get rows (V2)](/en-us/connectors/sql/#get-rows-%28v2%29) instead.<br><br>~~This operation gets rows from a table.~~ |
| Get tables (V2) | This operation gets tables from a database. |
| Insert row (V2) | This operation inserts a new row into a table. |
| Insert row [DEPRECATED] | This action has been deprecated. Please use [Insert row (V2)](/en-us/connectors/sql/#insert-row-%28v2%29) instead.<br><br>~~This operation inserts a new row into a table.~~ |
| Lists tables exposed by the connection [DEPRECATED] | This action has been deprecated. Please use [Get tables (V2)](/en-us/connectors/sql/#get-tables-%28v2%29) instead.<br><br>~~Lists tables exposed by the connection~~ |
| Transform data using Power Query | Transform data using Power Query. Note: This operation does not work when connecting using SQL Microsoft Entra ID. |
| Update row (V2) | This operation updates an existing row in a table. |
| Update row [DEPRECATED] | This action has been deprecated. Please use [Update row (V2)](/en-us/connectors/sql/#update-row-%28v2%29) instead.<br><br>~~This operation updates an existing row in a table.~~ |

### Delete row (V2)

- Operation ID:
    - DeleteItem\_V2

This operation deletes a row from a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of table |
| Row id | id | True | string | Unique identifier of the row to delete |

### Delete row [DEPRECATED]

- Operation ID:
    - DeleteItem

This action has been deprecated. Please use [Delete row (V2)](/en-us/connectors/sql/#delete-row-%28v2%29) instead.

~~This operation deletes a row from a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of table |
| Row id | id | True | string | Unique identifier of the row to delete |

### Execute a SQL query (V2)

- Operation ID:
    - ExecutePassThroughNativeQuery\_V2

Execute a SQL query (V2)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Query | query | True | dynamic | query body |

#### Returns

 The outputs of this operation are dynamic. 

### Execute a SQL query [DEPRECATED]

- Operation ID:
    - ExecutePassThroughNativeQuery

This action has been deprecated. Please use [Execute a SQL query (V2)](/en-us/connectors/sql/#execute-a-sql-query-%28v2%29) instead.

~~Execute a SQL query~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Query | query | True | dynamic | query body |

#### Returns

 The outputs of this operation are dynamic. 

### Execute stored procedure

- Operation ID:
    - ExecuteProcedure

This operation runs a stored procedure.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Procedure name | procedure | True | string | Name of stored procedure |
| Parameters list | parameters | True | dynamic | Input parameters to the stored procedure |

#### Returns

 The outputs of this operation are dynamic. 

### Execute stored procedure (V2)

- Operation ID:
    - ExecuteProcedure\_V2

This operation runs a stored procedure.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Procedure name | procedure | True | string | Name of stored procedure |
| Parameters list | parameters | True | dynamic | Input parameters to the stored procedure |

#### Returns

 The outputs of this operation are dynamic. 

### Get row (V2)

- Operation ID:
    - GetItem\_V2

This operation gets a row from a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of SQL table |
| Row id | id | True | string | Unique identifier of the row to retrieve |

#### Returns

 The outputs of this operation are dynamic. 

### Get row [DEPRECATED]

- Operation ID:
    - GetItem

This action has been deprecated. Please use [Get row (V2)](/en-us/connectors/sql/#get-row-%28v2%29) instead.

~~This operation gets a row from a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of SQL table |
| Row id | id | True | string | Unique identifier of the row to retrieve |

#### Returns

 The outputs of this operation are dynamic. 

### Get rows (V2)

- Operation ID:
    - GetItems\_V2

This operation gets rows from a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of SQL table |
| Aggregation transformation | $apply |  | string | A sequence of OData aggregation transformations |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

### Get rows [DEPRECATED]

- Operation ID:
    - GetItems

This action has been deprecated. Please use [Get rows (V2)](/en-us/connectors/sql/#get-rows-%28v2%29) instead.

~~This operation gets rows from a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of SQL table |
| Aggregation transformation | $apply |  | string | A sequence of OData aggregation transformations |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

### Get tables (V2)

- Operation ID:
    - GetTables\_V2

This operation gets tables from a database.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |

#### Returns

Represents a list of tables.

- Body
    - TablesList

### Insert row (V2)

- Operation ID:
    - PostItem\_V2

This operation inserts a new row into a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of table |
| Row | item | True | dynamic | Row to insert into the specified table |

#### Returns

 The outputs of this operation are dynamic. 

### Insert row [DEPRECATED]

- Operation ID:
    - PostItem

This action has been deprecated. Please use [Insert row (V2)](/en-us/connectors/sql/#insert-row-%28v2%29) instead.

~~This operation inserts a new row into a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of table |
| Row | item | True | dynamic | Row to insert into the specified table |

#### Returns

 The outputs of this operation are dynamic. 

### Lists tables exposed by the connection [DEPRECATED]

- Operation ID:
    - GetTables

This action has been deprecated. Please use [Get tables (V2)](/en-us/connectors/sql/#get-tables-%28v2%29) instead.

~~Lists tables exposed by the connection~~

#### Returns

Represents a list of tables.

- Body
    - TablesList

### Transform data using Power Query

- Operation ID:
    - SqlExecutePassThroughPowerQuery

Transform data using Power Query. Note: This operation does not work when connecting using SQL Microsoft Entra ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | query |  | mquery | Query Text |

#### Returns

 The outputs of this operation are dynamic. 

### Update row (V2)

- Operation ID:
    - PatchItem\_V2

This operation updates an existing row in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of table |
| Row id | id | True | string | Unique identifier of the row to update |
| Row | item | True | dynamic | Row with updated values |

#### Returns

 The outputs of this operation are dynamic. 

### Update row [DEPRECATED]

- Operation ID:
    - PatchItem

This action has been deprecated. Please use [Update row (V2)](/en-us/connectors/sql/#update-row-%28v2%29) instead.

~~This operation updates an existing row in a table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of table |
| Row id | id | True | string | Unique identifier of the row to update |
| Row | item | True | dynamic | Row with updated values |

#### Returns

 The outputs of this operation are dynamic. 

## Triggers

| When an item is created (V2) | Triggers a flow when an item is created in SQL |
| --- | --- |
| When an item is created [DEPRECATED] | This action has been deprecated. Please use [When an item is created (V2)](/en-us/connectors/sql/#when-an-item-is-created-%28v2%29) instead.<br><br>~~Triggers a flow when an item is created in SQL~~ |
| When an item is modified (V2) | Triggers a flow when an item is modified/inserted in SQL |
| When an item is modified [DEPRECATED] | This action has been deprecated. Please use [When an item is modified (V2)](/en-us/connectors/sql/#when-an-item-is-modified-%28v2%29) instead.<br><br>~~Triggers a flow when an item is modified/inserted in SQL~~ |

### When an item is created (V2)

- Operation ID:
    - GetOnNewItems\_V2

Triggers a flow when an item is created in SQL

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of SQL table |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

### When an item is created [DEPRECATED]

- Operation ID:
    - GetOnNewItems

This action has been deprecated. Please use [When an item is created (V2)](/en-us/connectors/sql/#when-an-item-is-created-%28v2%29) instead.

~~Triggers a flow when an item is created in SQL~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of SQL table |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

### When an item is modified (V2)

- Operation ID:
    - GetOnUpdatedItems\_V2

Triggers a flow when an item is modified/inserted in SQL

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Server name | server | True | string | Name of SQL server |
| Database name | database | True | string | Database name |
| Table name | table | True | string | Name of SQL table |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

### When an item is modified [DEPRECATED]

- Operation ID:
    - GetOnUpdatedItems

This action has been deprecated. Please use [When an item is modified (V2)](/en-us/connectors/sql/#when-an-item-is-modified-%28v2%29) instead.

~~Triggers a flow when an item is modified/inserted in SQL~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Table name | table | True | string | Name of SQL table |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned (e.g. stringColumn eq 'string' OR numberColumn lt 123). |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Select Query | $select |  | string | Specific fields to retrieve from entries (default = all). |

#### Returns

 The outputs of this operation are dynamic. 

## Definitions

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