---
layout: Reference
title: Excel Online (OneDrive) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/excelonline/
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
document_id: 3bbdfc54-809f-5f87-b707-0137aff397ea
document_version_independent_id: b035def8-7d52-5518-df0b-504c03236212
updated_at: 2026-03-20T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/excelonline/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d3c2ea8192375aac2575a7c5165eb1524f0adbf6/docs/excelonline/index.yml
git_commit_id: d3c2ea8192375aac2575a7c5165eb1524f0adbf6
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: excelonline/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/excelonline/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/60932d05-feee-4685-a73b-595e25dd9318
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/c43bb58b-1190-419b-8d18-e6052371b599
platformId: e5fa0409-2550-6900-bc27-9636451ca9a2
---

# Excel Online (OneDrive)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/excelonline/icon.png)
Excel Online (OneDrive) connection provider lets you work with Excel files stored in OneDrive. This connection provider only supports personal (MSA) accounts.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | - | Not available |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Known Issues and Limitations

- The maximum size of an Excel file that is supported by the Excel Online (OneDrive) connector is 5 MB.
- The data may not be up to date (there may be some delay) when filtering or sorting is used in the `List rows present in a table` action.
- The `List rows present in a table`action supports basic filtering and sorting:
    - Supports the following filter functions: eq, ne, contains, startswith, endswith.
    - Only 1 filter function can be applied on a column.
    - Only 1 column can be used for sorting.
- The `List rows present in a table` action returns up to 256 rows by default. In order to get all rows, please turn on [pagination](/en-us/connectors/common/known-issues#pagination-support).
- An Excel file may be locked in OneDrive for an update or delete up to 12 minutes since the last use of the connector.
- Simultaneous file modifications made by other connectors or manual edits are not supported. Users should avoid writing data to a single Excel file from multiple clients concurrently (Excel Desktop, Excel Web, Power Automate, LogicApps or PowerApps). This can cause possible merge conflicts and data inconsistency.
- The connector supports files in Microsoft Excel Open XML Spreadsheet (\*.xlsx) and Microsoft Excel Binary Workbook (.xlxb) formats.
- The connector retrieves rows for 500 columns maximum in the `List rows present in a table` action. Rows for first 500 columns are returned by default. You can provide comma-separated list of specific columns to retrieve in `Select Query` parameter.
- The connector doesn't support using OData parameters for tables that contain hidden columns.
- The connector timeout caused by re-calculations can occur, either there are complicated formulas or there are too many rows in the worksheet. In both cases, data can be inserted multiple times because of retry policy. As a workaround, please see if the formulas could be simplified or reduced. Otherwise, you may set calculation mode for this workbook to **Manual**. For more details, please refer [here](/en-us/office/troubleshoot/excel/current-mode-of-calculation)
- Write access to a file is required for all actions, otherwise Graph API would return `403 Forbidden` error. Also, connector will return the `502 BadGateway` error if the spreadsheet is in a read-only mode. To disable read-only mode, please learn more [here](https://answers.microsoft.com/en-us/msoffice/forum/msoffice_excel-mso_win10-mso_o365b/how-do-i-change-an-excel-spreadsheet-from-read/bdc1f4f8-4366-4cb0-902e-559c47f68143).
- `Filter Query` / `Order By` / `Select Query` operation parameters support only alphanumeric column names.
- Pivot tables are not supported due to Graph API limitations.
- If a user makes too many requests within a short period of time, it is possible to get a 429 response. The throttling limit is unique to each request and it varies based on the request count, memory used, and other important factors.
- In operations such as `Delete a row`, the `key column` field is `case-sensitive`.
- In case of multiple matches in operations such as `Update a row`, `Delete a row` operations, only the first row will be updated/deleted.
- Changes committed by operations such as `Create a row`, `Update a row`, `Delete a row` do not always take affect immediately after successful response from a corresponding Power Automate, LogicApps or Power Apps actions. Delays up to 30 seconds are expected due to underlying backend service limitations.
- The connector can populate up to 64000 rows automatically if `Insert auto generated id into Excel table` option is selected during a table import in PowerApps.
- Tables column headers that contain only a number can cause unexpected behavior in operations such as `Update a row`, `Delete a row` due to underlying backend service limitations. As a workaround please rename such columns so that they contain other characters as well.
- An Excel file may be modified and a new version may be visible in **Version history** of the file even when a "read-only" action is executed. This behavior is by design due to internal save mechanisms of the connector's backend service.
- Excrypted or marked as protected sheets, throw a corrupt file error, even though the file can be opened manually.

### Column names handling

Please note that column names in the action's response results may be transformed in order to be compatible with OData format:

| Character | Encoded value |
| --- | --- |
| . | \_x002e\_ |
| @ | \_x0040\_ |
| : | \_x003a\_ |
| # | \_x0023\_ |

E.g. `Column [one]#1` -&gt; `Column [one]_x0023_1`

### Concepts and examples

- `Key column`: column in a table that will be use to search a value (`key value`)
- `Key value`: value in the `key column` that will be used to identify a specific row.

Take the following table as an example. To perform a row operation in the second row of the table, the `key column` should be `Column 1` and `key value` should be `200`.

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |
| 100 | A-2 | A-3 |
| 200 | B-2 | B-3 |
| 300 | C-2 | C-3 |

### General Limits

| Name | Value |
| --- | --- |
| Maximum number of identity column variants that can be used to Get/Insert/Update/Delete a row from a single excel table. Current value is set to 2, which means that up to two column name variants should be in use across workflows for one particular table. | 2 |
| Maximum number of rows the connector can populate automatically if 'Insert auto generated id into Excel table option' is selected during a table import in PowerApps. | 64000 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Add a key column to a table | Add a key column to an Excel table. The new column will be appended to the right. The new key column must be unique in the table. |
| --- | --- |
| Add a row into a table | Add a new row into the Excel table. |
| Add a row into a table [DEPRECATED] | This action has been deprecated. Please use [Add a row into a table](/en-us/connectors/excelonline/#add-a-row-into-a-table) instead.<br><br>~~Add a new row into the Excel table.~~ |
| Create table | Create a new table in the Excel workbook. |
| Create worksheet | Create a new worksheet in the Excel workbook. |
| Delete a row | Delete a row using a key column. |
| Get a row | Get a row using a key column. This action will retrieve all the values of the specified row given a column and key column. |
| Get tables | Get a list of tables in the Excel workbook. |
| Get worksheets | Get a list of worksheets in the Excel workbook. |
| List rows present in a table | List rows present in a table. |
| Update a row | Update a row using a key column. The input value will overwrite the specified cells and columns left blank will not be updated. In order to append (instead of overwrite) a value, use the "Get a row" action to retrieve the content first. |

### Add a key column to a table

- Operation ID:
    - CreateIdColumn

Add a key column to an Excel table. The new column will be appended to the right. The new key column must be unique in the table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
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
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Row | item | True | dynamic | Row to add into the specified Excel table. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

### Add a row into a table [DEPRECATED]

- Operation ID:
    - AddRow

This action has been deprecated. Please use [Add a row into a table](/en-us/connectors/excelonline/#add-a-row-into-a-table) instead.

~~Add a new row into the Excel table.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
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
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |

### Get a row

- Operation ID:
    - GetItem

Get a row using a key column. This action will retrieve all the values of the specified row given a column and key column.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

### Get tables

- Operation ID:
    - GetTables

Get a list of tables in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | file | True | string | Select an Excel file through File Browse. |

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

### Get worksheets

- Operation ID:
    - GetAllWorksheets

Get a list of worksheets in the Excel workbook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | file | True | string | Select an Excel file through File Browse. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of WorksheetMetadata |  |

### List rows present in a table

- Operation ID:
    - GetItems

List rows present in a table.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Filter Query | $filter |  | string | An ODATA filter query to restrict the entries returned. |
| Order By | $orderby |  | string | An ODATA orderBy query for specifying the order of entries. |
| Top Count | $top |  | integer | Total number of entries to retrieve (default = all). |
| Skip Count | $skip |  | integer | The number of entries to skip (default = 0). |
| Select Query | $select |  | string | Comma-separated list of columns to retrieve (first 500 by default). |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

### Update a row

- Operation ID:
    - PatchItem

Update a row using a key column. The input value will overwrite the specified cells and columns left blank will not be updated. In order to append (instead of overwrite) a value, use the "Get a row" action to retrieve the content first.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | file | True | string | Select an Excel file through File Browse. |
| Table | table | True | string | Select a table from the drop-down. |
| Key Column | idColumn | True | string | Select a column from the drop-down. |
| Key Value | id | True | string | Enter the key value. |
| Provide the item properties | item | True | dynamic | Provide the item properties. |
| DateTime Format | dateTimeFormat |  | string | DateTime Format. |

#### Returns

 The outputs of this operation are dynamic. 

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