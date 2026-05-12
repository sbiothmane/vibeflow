---
layout: Reference
title: Excel Online (Business) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/
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
document_id: 63dd2d5e-d90f-4654-c406-256e3e680e6d
document_version_independent_id: f2cd384b-2690-393d-3058-a363523f7d62
updated_at: 2025-08-05T18:54:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/excelonlinebusiness/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/834cde50281835abecff528fff0a3effa6c67341/docs/excelonlinebusiness/index.yml
git_commit_id: 834cde50281835abecff528fff0a3effa6c67341
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: excelonlinebusiness/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/excelonlinebusiness/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/60932d05-feee-4685-a73b-595e25dd9318
- https://authoring-docs-microsoft.poolparty.biz/devrel/9d7be3ef-f27c-4c7f-9eba-67c3cd429995
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/c43bb58b-1190-419b-8d18-e6052371b599
- https://authoring-docs-microsoft.poolparty.biz/devrel/feeb50f3-b677-44f9-b3a6-5f2f58182b0d
platformId: 85fe1a09-5e39-8a31-971f-9ad6d0f7a897
---

# Excel Online (Business)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1762/1.0.1762.4304/excelonlinebusiness/icon.png)
Excel Online (Business) connector lets you work with Excel files in document libraries supported by Microsoft Graph (OneDrive for Business, SharePoint Sites, and Office 365 Groups).

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - China Cloud operated by 21Vianet |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Contact | - |
| --- | --- |
| Name | Excel Online (Business) |
| URL | [https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/](/en-us/connectors/excelonlinebusiness/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/excel |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | AI;Business Intelligence |

## Known issues and limitations with actions

| Short description | Operations | Long description |
| --- | --- | --- |
| Outdated data | List rows present in a table | The data may not be up to date (there may be some delay) when filtering or sorting is used in the List rows present in a table action. |
| Filtering capabilities | List rows present in a table | The List rows present in a table action supports basic filtering and sorting:- Supports the following filter functions: `eq`, `ne`, `contains`, `startswith`, `endswith`.- Only 1 filter function can be applied on a column.- Only 1 column can be used for sorting. |
| Stacked Filters | List rows present in a table | When a filter is applied using the action List rows present in a table, it will be added on top of the existing filters. |
| Non-Stacked Filters | List rows present in a table | If a filter is not applied using the List rows present in a table action, any filters already set in the Excel file will be ignored. The action retrieves all rows regardless of any pre-existing filters in excel. |
| Pagination | List rows present in a table | The List rows present in a table action returns up to 256 rows by default. In order to get all rows, turn on [pagination](/en-us/connectors/common/known-issues#pagination-support). |
| Select nonsequential rows | List rows present in a table | The connector retrieves rows for 500 columns maximum in the List rows present in a table action. Rows for the first 500 columns are returned by default. You can provide a comma-separated list of specific columns to retrieve in a `Select Query` parameter. |
| Key column field name | Add a key column to a tableDelete a rowGet a rowUpdate a row | The key column field is case-sensitive. |
| Update/delete multiple rows | Delete a rowUpdate a row | In the case of multiple matches in operations such as Update a row and Delete a row, only the first row will be updated/deleted. |
| Microsoft Excel Macro-Enabled Spreadsheet support | Run script | The Run script action additionally supports the Microsoft Excel Macro-Enabled Spreadsheet (\*.xlsm) format. To learn more, go to [How to use macro files in Power Automate flows](/en-us/office/dev/scripts/develop/macros-power-automate). |
| Table column headers limitation | Add a rowUpdate a rowDelete a row | Changes committed by operations such as Add a row, Update a row, Delete a row do not always take affect immediately after successful response from a corresponding Power Automate, LogicApps or Power Apps actions. Delays up to 30 seconds are expected due to underlying backend service limitations. |
| Run script operation limitations | Run script | Run script operation allows up to 3 calls per 10 seconds and up to 1600 calls per day. |
| Run script operation sovereign clouds support | Run script | Run script operation is NOT available in sovereign clouds (including Gcc, GccHigh, DoD and other higher clouds). |

## Common errors

| Error | Solution |
| --- | --- |
| 403 Forbidden | Ensure that the file has write access. |
| 502 BadGateway | These errors will display if the spreadsheet is in read-only mode. To learn about disable read-only mode, go to [Change an Excel spreadsheet from read-only](https://answers.microsoft.com/en-us/msoffice/forum/all/how-do-i-change-an-excel-spreadsheet-from-read/bdc1f4f8-4366-4cb0-902e-559c47f68143). |
| 429 Too many requests | This happens if a user makes too many requests within a short period of time. The throttling limit is unique to each request and it varies based on the request count, memory used, and other important factors. If throttling is occurring, it is suggested to add explicit delays around the connector action.  Due to throttling limits in the Graph API, this could also happen due to multiple reasons:  1. When the global requests count from the Flow exceeds a limit, some requests will be throttled. Which requests get throttled and which don't is randomly picked by the Azure throttling solution.  2. Even if it didn't hit the limit in #1, it may still be throttled due to different reasons. Below are the most common reasons for throttling:  a. Hit Sharepoint service throttling policy.  b. Hit Excel Online service policy, for example, the operation queue was full due to too many requests.  c. The request is pending in the queue for a longer time than expected. For example, requests that are taking longer than 30s might return 504 and continued 504's would result in throttling.  d. Too many consecutive failures in a workbook session. e. When a request is made to OfficeScripting on Operation ID "RunScriptProd" , and if those requests are more than 3 within 10 seconds then it is throttled. |

## General known issues and limitations

- The maximum size of an Excel file that is supported by the Excel Online (Business) connector is 25 MB.
- An Excel file may be locked for an update or delete up to 6 minutes since the last use of the connector.
- Simultaneous file modifications made by other connectors, or manual edits are not supported. Users should avoid writing data to a single Excel file from multiple clients concurrently (Excel Desktop, Excel Web, Power Automate, LogicApps or Power Apps). This can cause possible merge conflicts and data inconsistency.
- The connector supports files in Microsoft Excel Open XML Spreadsheet (\*.xlsx) and Microsoft Excel Binary Workbook (\*.xlxb) formats.
- The `File`property expected by the connector's actions should be filled using one of the following options:
    - Pick a file from the file picker.
    - Use an output from the OneDrive for Business connector's triggers/actions (file's `Id` or `File identifier` property, depending on which one is present for the particular OneDrive for Business's action or trigger).
    - Use an output from the SharePoint connector's triggers/actions (file's `Id` or `Identifier` property, depending on which one is present for the particular Sharepoint's action or trigger).
    - Input the path to the file starting from **Drive**. Examples:
        - If the file is under **OneDrive** and the full path is **OneDrive/file.xlsx** and the **Drive** parameter is `OneDrive`, input **file.xlsx**.
        - If the file is under **O365 Groups** and the full path is **Documents/Inner Documents/file.xlsx** and the **Drive** parameter is `Documents`, input **Inner Documents/file.xlsx**.
- The connector doesn't support using OData parameters for tables that contain hidden columns.
- The connector timeout caused by re-calculations can occur if either there are complicated formulas, or there are too many rows in the worksheet. In both cases, data can be inserted multiple times because of retry policy. As a workaround, please see if the formulas could be simplified or reduced. Otherwise, you may set calculation mode for this workbook to **Manual**. For more details, please refer [here](/en-us/office/troubleshoot/excel/current-mode-of-calculation).
- `Filter Query` / `Order By` / `Select Query` operation parameters support only alphanumeric column names.
- Pivot tables aren't supported due to Graph API limitations.
- The connector always returns all document libraries available under the Document Library dropdown control. For most users, only one document library will be returned, but if there are multiple available, all of them will be listed. To learn more about document library (for example, drive resources) and expected behavior for users, Groups, and Sites, go to [List drives - Remarks](/en-us/graph/api/drive-list?view=graph-rest-1.0&amp;tabs=http#remarks).
- The connector can populate up to 64,000 rows automatically if the **Insert auto generated id into Excel table** option is selected during a table import in Power Apps.
- Tables column headers that contain only a number can cause unexpected behavior in operations such as Update a row, Delete a row due to underlying backend service limitations. As a workaround, rename such columns so that they contain other characters as well.
- An Excel file may be modified and a new version may be visible in **Version history** of the file even when a "read-only" action is executed. This behavior is by design due to internal save mechanisms of the connector's backend service.
- Guest users can't get access to document if they are from different tenant than main users. In this case, the user will get an HTTP 404 (Not Found) error.
- In Fairfax Logic Apps, this connector supports only connections using a commercial (.com) account.
- SharePoint files may not be available. The Graph API doesn't pass the user's IP address to SharePoint. Therefore, if a [location-based policy is enabled](/en-us/sharepoint/control-access-based-on-network-location), SharePoint cannot determine whether the user is within the trusted boundary. For this reason, when accessing the SharePoint library, you may get an error "Due to organizational policies, you can't access these resources from this network location". For more details, please refer [here](/en-us/sharepoint/troubleshoot/lists-and-libraries/401-error-when-using-graph-api-to-access-data).
- The file picker will only display up to 200 items per folder. Users may have trouble finding items if they have more than 200 items in a folder.
- If there are continuous 504 errors, customers might face throttling due to different Graph API restrictions. Below are some suggestions to reduce 504's for long running operations:
    - Update the table to be as simple as possible with fewer formulas and dependencies.
    - Use another empty worksheet/workbook with the same table format if the row count is large.
- Write access to a file is required for all actions, otherwise Graph API would return `403 Forbidden` error. Also, connector will return the `502 BadGateway` error if the spreadsheet is in a read-only mode. To disable read-only mode, please learn more [here](https://answers.microsoft.com/en-us/msoffice/forum/all/how-do-i-change-an-excel-spreadsheet-from-read/bdc1f4f8-4366-4cb0-902e-559c47f68143).
- The maximum supported size of each connector request is 5 MB.

### Column names handling

Column names in the action's response results can be transformed in order to be compatible with OData format:

| Character | Encoded value |
| --- | --- |
| . | \_x002e\_ |
| @ | \_x0040\_ |
| : | \_x003a\_ |
| # | \_x0023\_ |

For example, `Column [one]#1` -&gt; `Column [one]_x0023_1`

### General limits

| Name | Value |
| --- | --- |
| Maximum number of identity column variants that can be used to Get/Insert/Update/Delete a row from a single Excel table. Current value is set to 2, which means that up to two column name variants should be in use across workflows for one particular table. | 2 |

### Concepts and examples

- **Key column:** Column in a table that will be use to search a value (key value).
- **Key value:** Value in the key column that will be used to identify a specific row.

The following table is an example. To perform a row operation in the second row of the table, the `key column` should be `Column 1` and `key value` should be **200**.

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| 100 | A-2 | A-3 |
| 200 | B-2 | B-3 |
| 300 | C-2 | C-3 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Add a key column to a table | Add a key column to an Excel table. The new column will be appended to the right. |
| --- | --- |
| Add a row into a table | Add a new row into the Excel table. |
| Add a row into a table [DEPRECATED] | This action has been deprecated. Please use [Add a row into a table](/en-us/connectors/excelonlinebusiness/#add-a-row-into-a-table) instead.<br><br>~~Add a new row into the Excel table.~~ |
| Create table | Create a new table in the Excel workbook. |
| Create worksheet | Create a new worksheet in the Excel workbook. |
| Delete a row | Delete a row using a key column. |
| Get a row | Get a row using a key column. |
| Get tables | Get a list of tables in the Excel workbook. |
| Get worksheets | Get a list of worksheets in the Excel workbook. |
| List rows present in a table | List rows present in a table. |
| Run script | Runs an Office Script against an Excel workbook. Use this action when the script is saved in the default location. |
| Run script from SharePoint library | Runs an Office Script against an Excel workbook. Use this action when the script is saved outside of the default location. |
| Update a row | Update a row using a key column. The input value will overwrite the specified cells and columns left blank will not be updated. In order to append (instead of overwrite) a value, use the "Get a row" action to retrieve the content first. |

### Add a key column to a table

- Operation ID:
    - CreateIdColumn

Add a key column to an Excel table. The new column will be appended to the right.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn |  | string | Provide the key column name. |

### Add a row into a table

- Operation ID:
    - AddRowV2

Add a new row into the Excel table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Row | item | True | dynamic | Row to add into the specified Excel table. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

### Add a row into a table [DEPRECATED]

- Operation ID:
    - AddRow

This action has been deprecated. Please use [Add a row into a table](/en-us/connectors/excelonlinebusiness/#add-a-row-into-a-table) instead.

~~Add a new row into the Excel table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Row | item | True | dynamic | Row to insert into the specified Excel table. |

#### Returns

### Create table

- Operation ID:
    - CreateTable

Create a new table in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table name | TableName |  | string | Enter the Excel table name. |
| Table range | Range | True | string | Enter the table address using A1 notation. |
| Columns names | ColumnsNames |  | string | Enter the columns names separated by ';' or ','. |

#### Returns

Table metadata

- Body
    - TableMetadata

### Create worksheet

- Operation ID:
    - CreateWorksheet

Create a new worksheet in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Name | name |  | string | Worksheet name. |

#### Returns

- Body
    - WorksheetMetadata

### Delete a row

- Operation ID:
    - DeleteItem

Delete a row using a key column.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required) |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |

### Get a row

- Operation ID:
    - GetItem

Get a row using a key column.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required) |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

 The outputs of this operation are dynamic. 

### Get tables

- Operation ID:
    - GetTables

Get a list of tables in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Id | value.id | string | Table Id. |
| Name | value.name | string | Table name. |
| Show banded columns | value.showBandedColumns | boolean | Show banded columns. |
| Highlight first column | value.highlightFirstColumn | boolean | Highlight first column. |
| Highlight last column | value.highlightLastColumn | boolean | Highlight last column. |
| Show banded rows | value.showBandedRows | boolean | Show banded rows. |
| Show filter button | value.showFilterButton | boolean | Show filter button. |
| Show headers | value.showHeaders | boolean | Show headers. |
| Show totals | value.showTotals | boolean | Show totals. |
| Style | value.style | string | Table style. |
| sensitivityLabelInfo | sensitivityLabelInfo | array of SensitivityLabelMetadata |  |

### Get worksheets

- Operation ID:
    - GetAllWorksheets

Get a list of worksheets in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of WorksheetMetadata |  |
| sensitivityLabelInfo | sensitivityLabelInfo | array of SensitivityLabelMetadata |  |

### List rows present in a table

- Operation ID:
    - GetItems

List rows present in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required) |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned. |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Select Query | $select |  | string | Comma-separated list of columns to retrieve (first 500 by default). |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | A boolean whether to extract sensitivity label Id for associated artefact. |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

 The outputs of this operation are dynamic. 

### Run script

- Operation ID:
    - RunScriptProd

Runs an Office Script against an Excel workbook. Use this action when the script is saved in the default location.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Script | scriptId | True | string | Select the Office Script you want to run from the drop-down. |
| ScriptParameters | ScriptParameters | True | dynamic | Provide the Office Script's parameters. |

#### Returns

 The outputs of this operation are dynamic. 

### Run script from SharePoint library

- Operation ID:
    - RunScriptProdV2

Runs an Office Script against an Excel workbook. Use this action when the script is saved outside of the default location.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Workbook Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Workbook Library | drive | True | string | Select a document library from the drop-down. |
| Workbook | file | True | string | Select an Excel workbook through File Browse. |
| Script Location | scriptSource | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required). |
| Script Library | scriptDrive | True | string | Select the SharePoint library of your Office Script file (.osts) from the drop-down. |
| Script | scriptId | True | string | Select an Office Script file (.osts) in a SharePoint library from the drop-down. |
| ScriptParameters | ScriptParameters | True | dynamic | Provide parameters for the Office Script. |

#### Returns

 The outputs of this operation are dynamic. 

### Update a row

- Operation ID:
    - PatchItem

Update a row using a key column. The input value will overwrite the specified cells and columns left blank will not be updated. In order to append (instead of overwrite) a value, use the "Get a row" action to retrieve the content first.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (the colons are required) |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |
| Provide the item properties | item | True | dynamic | Provide the item properties. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

## Triggers

| For a selected row | Triggers a flow for a selected row in an Excel table. (Available only for Power Automate.) |
| --- | --- |

### For a selected row

- Operation ID:
    - OnRowSelected

Triggers a flow for a selected row in an Excel table. (Available only for Power Automate.)

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

## Definitions

### TableMetadata

Table metadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Table name |
| title | title | string | Table title |
| x-ms-permission | x-ms-permission | string | Table permission |
| x-ms-capabilities | x-ms-capabilities | TableCapabilitiesMetadata | Metadata for a table (capabilities) |
| schema | schema | Object |  |
| referencedEntities | referencedEntities | Object |  |
| webUrl | webUrl | string | Url link |

### TableCapabilitiesMetadata

Metadata for a table (capabilities)

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sortRestrictions | sortRestrictions | TableSortRestrictionsMetadata | Metadata for a table (sort restrictions) |
| filterRestrictions | filterRestrictions | TableFilterRestrictionsMetadata | Metadata for a table (filter restrictions) |
| selectRestrictions | selectRestrictions | TableSelectRestrictionsMetadata | Metadata for a table (select restrictions) |
| isOnlyServerPagable | isOnlyServerPagable | boolean | Server paging restrictions |
| filterFunctionSupport | filterFunctionSupport | array of string | List of supported filter capabilities |
| serverPagingOptions | serverPagingOptions | array of string | List of supported server-driven paging capabilities |

### Object

### TableSortRestrictionsMetadata

Metadata for a table (sort restrictions)

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sortable | sortable | boolean | Indicates whether this table has sortable columns |
| unsortableProperties | unsortableProperties | array of string | List of unsortable properties |
| ascendingOnlyProperties | ascendingOnlyProperties | array of string | List of properties which support ascending order only |

### TableFilterRestrictionsMetadata

Metadata for a table (filter restrictions)

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| filterable | filterable | boolean | Indicates whether this table has filterable columns |
| nonFilterableProperties | nonFilterableProperties | array of string | List of non filterable properties |
| requiredProperties | requiredProperties | array of string | List of required properties |

### TableSelectRestrictionsMetadata

Metadata for a table (select restrictions)

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| selectable | selectable | boolean | Indicates whether this table has selectable columns |

### WorksheetMetadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Worksheet Id. |
| Name | name | string | Worksheet name. |
| Position | position | integer | Worksheet position. |
| Visibility | visibility | string | Worksheet visibility. |

### SensitivityLabelMetadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sensitivityLabelId | sensitivityLabelId | string | SensitivityLabel Id. |
| name | name | string | SensitivityLabel name. |
| displayName | displayName | string | SensitivityLabel displayName info |
| tooltip | tooltip | string | SensitivityLabel details on tooltip. |
| priority | priority | integer | SensitivityLabel priority. |
| color | color | string | SensitivityLabel color. |
| isEncrypted | isEncrypted | boolean | is SensitivityLabel Encrypted. |
| isEnabled | isEnabled | boolean | Whether SensitivityLabel is Enabled. |
| isParent | isParent | boolean | Whether SensitivityLabel is Parent. |
| parentSensitivityLabelId | parentSensitivityLabelId | string | Parent SensitivityLabel Id. |