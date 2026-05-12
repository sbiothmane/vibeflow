---
layout: Reference
title: Azure AI Document Intelligence (form recognizer) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/formrecognizer/
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
document_id: e84d6396-2e1e-2c2b-3c15-28c34c3d0557
document_version_independent_id: 4b1b05aa-bcab-57f6-9f6d-6ed2014d6d75
updated_at: 2025-11-21T19:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/formrecognizer/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/baf25e0901100c7342cfea45f436ac3453f89e71/docs/formrecognizer/index.yml
git_commit_id: baf25e0901100c7342cfea45f436ac3453f89e71
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: formrecognizer/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/formrecognizer/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/91df3d29-834f-4393-92e2-5e393da1897c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/c6f99e62-1cf6-4b71-af9b-649b05f80cce
- https://authoring-docs-microsoft.poolparty.biz/devrel/68ec7f3a-2bc6-459f-b959-19beb729907d
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/805a3516-ebe7-4153-baf7-2b9dfcf7b866
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3f56b378-07a9-4fa1-afe8-9889fdc77628
- https://authoring-docs-microsoft.poolparty.biz/devrel/90370425-aca4-4a39-9533-d52e5e002a5d
platformId: d98a4adc-2c55-b204-c15f-613f8edd7a83
---

# Azure AI Document Intelligence (form recognizer)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1783/1.0.1783.4453/formrecognizer/icon.png)
Extracts text (printed and handwritten OCR) and additional information (tables, checkboxes, fields / key value pairs) from PDFs, images or Microsoft Office documents and forms into structured data based on pre-trained models (layout, invoice, receipt, id, business card) or custom model created by a set of representative training forms using AI powered document understanding.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | - | Not available |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://aka.ms/formrecognizer |
| Email | formrecog\_contact@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://aka.ms/formrecognizer |
| Privacy policy | https://aka.ms/form-recognizer/privacy |
| Categories | AI;Business Intelligence |

The Azure AI Document Intelligence (formerly Form Recognizer) connector provide integration to [Azure AI Document Intelligence](https://azure.microsoft.com/products/ai-services/ai-document-intelligence/). It allows analyze and extract information from Forms, Invoices, Receipts, Business Cards, ID Documents, and multiple other document types.

## Prerequisites

To use this integration, you will need a [Azure AI Document Intelligence resource](/en-us/azure/ai-services/multi-service-resource) in the Azure portal. Create resource [link](https://portal.azure.com/#create/Microsoft.CognitiveServicesFormRecognizer). You will get an endpoint and a key for authenticating your applications. To make a connection, provide the Account key, site URL and select **Create connection**. For operation costs on your connection, learn more [here](https://azure.microsoft.com/pricing/details/ai-document-intelligence/).

## How to get credentials

1. Open Document Intelligence resource in Azure portal (see Prerequisites).
2. Select **Keys and Endpoint** under **Resource Management**
3. Copy **Endpoint** and **Key** and use them to create new connection.

## Getting started with your connector

Simplest way to try the Document Intelligence connector is to use any prebuilt models (prebuilt-invoice, prebuilt-layout, etc ). Provide PDF or image of your document. Analyze using connector operation based on your document type and inspect detected fields. Full list of models and supported features [here](/en-us/azure/ai-services/document-intelligence/model-overview?view=doc-intel-4.0.0#model-analysis-features).

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| API Key | Provide Document Intellignce resource name and API Key. | All regions | Shareable |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### API Key

Auth ID: keyBasedAuth

Applicable: All regions

Provide Document Intellignce resource name and API Key.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account Key | securestring | Document Intelligence Account Key | True |
| Endpoint URL | string | Document Intelligence Endpoint Url (Example: `https://your-documentintelligence-resource.cognitiveservices.azure.com/`) | True |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a LogicApps Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| LogicApps Managed Identity | managedIdentity | Sign in with a Logic Apps Managed Identity | True |
| Endpoint URL | string | Document Intelligence Endpoint Url (Example: `https://your-documentintelligence-resource.cognitiveservices.azure.com/`) | True |

### Microsoft Entra ID Integrated

Auth ID: oauth

Applicable: All regions

Use Microsoft Entra ID to access

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Endpoint URL | string | Document Intelligence Endpoint Url (Example: `https://your-documentintelligence-resource.cognitiveservices.azure.com/`) | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account Key | securestring | Document Intelligence Account Key | True |
| Endpoint URL | string | Document Intelligence Endpoint Url (Example: `https://your-documentintelligence-resource.cognitiveservices.azure.com/`) | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Analyze Business Card (deprecated) [DEPRECATED] | Extract field text and semantic values from a given business card document (deprecated). |
| --- | --- |
| Analyze Custom Form (deprecated) [DEPRECATED] | Extract key-value pairs, tables, and semantic values from a given document (deprecated). |
| Analyze Document for Prebuilt or Custom models (v3.x API) | Extract key-value pairs, tables, and semantic values from a given document (v3.x API). |
| Analyze Document for Prebuilt or Custom models (v4.x API) | Extract key-value pairs, tables, and semantic values from a given document (v4.x API). |
| Analyze ID Document (deprecated) [DEPRECATED] | Extract field text and semantic values from a given ID document (deprecated). |
| Analyze Invoice (deprecated) [DEPRECATED] | Extract field text and semantic values from a given invoice document (deprecated). |
| Analyze Layout (deprecated) [DEPRECATED] | Extract text and layout information from a given document (deprecated). |
| Analyze Receipt (deprecated) [DEPRECATED] | Extract field text and semantic values from a given receipt document (deprecated). |
| Classify document with document classifier (v3.1 API) | Classify document with document classifier (v3.1 API). |
| Classify document with document classifier (v4.x API) | Classify document with document classifier (v4.x API). |

### Analyze Business Card (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeBusinessCardAsync

Extract field text and semantic values from a given business card document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Text Details | includeTextDetails |  | boolean | Include text lines and element references in the result. Default: True (just for FR Connector). |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale of the invoice. Supported locale includes: en-US. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - BusinessCardAnalyzeOperationResult

### Analyze Custom Form (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeWithCustomForm

Extract key-value pairs, tables, and semantic values from a given document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Identifier | modelId | True | string | Format - uuid. Model identifier. |
| Include Text Details | includeTextDetails |  | boolean | Include text lines and element references in the result. Default: True (just for FR Connector). |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - CustomFormsAnalyzeOperationResult

### Analyze Document for Prebuilt or Custom models (v3.x API)

- Operation ID:
    - AnalyzeDocumentV30

Extract key-value pairs, tables, and semantic values from a given document (v3.x API).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Document Intelligence API version | api-version | True | string | Document Intelligence API version. |
| Model Identifier | modelId | True | string | Prebuilt modelIds: prebuilt-read, prebuilt-layout, prebuilt-document, prebuilt-businessCard, prebuilt-idDocument, prebuilt-invoice, prebuilt-receipt, prebuilt-tax.us.w2, prebuilt-vaccinationCard, prebuilt-healthInsuranceCard.us. Custom modelId format - [a-zA-Z0-9][a-zA-Z0-9.\_~-]{1,63}. Unique model name. |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale hint for text recognition and document analysis. Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). |
| String Index Type | stringIndexType |  | string | Method used to compute string offset and length. Supported options: textElements, unicodeCodePoint, utf16CodeUnit. |
| Optional and Premium features | features |  | array | List of optional analysis features ( such as ocrHighResolution, languages, barcodes, formulas, keyValuePairs and styleFont). |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG, PNG, BMP, TIFF) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the analyze operation.

- Body
    - AnalyzeResultOperation_V30

### Analyze Document for Prebuilt or Custom models (v4.x API)

- Operation ID:
    - AnalyzeDocumentV40

Extract key-value pairs, tables, and semantic values from a given document (v4.x API).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Document Intelligence API version | api-version | True | string | Document Intelligence API version. |
| Model Identifier | modelId | True | string | Prebuilt modelIds: prebuilt-read, prebuilt-layout, prebuilt-businessCard, prebuilt-idDocument, prebuilt-invoice, prebuilt-receipt, prebuilt-tax.us.w2, prebuilt-vaccinationCard, prebuilt-healthInsuranceCard.us, prebuilt-tax.us.1098, prebuilt-tax.us.1098E, prebuilt-tax.us.1098T, prebuilt-contract, etc. Custom modelId format - [a-zA-Z0-9][a-zA-Z0-9.\_~-]{1,63}. Unique model name. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG, PNG, BMP, TIFF) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale hint for text recognition and document analysis. Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). |
| String Index Type | stringIndexType |  | string | Method used to compute string offset and length. Supported options: textElements, unicodeCodePoint, utf16CodeUnit. |
| Optional and Premium features | features |  | array | List of optional analysis features ( such as ocrHighResolution, languages, barcodes, formulas, keyValuePairs, styleFont and queryFields). |
| Query Fields | queryFields |  | array | List of additional fields to extract. Ex. "NumberOfGuests,StoreNumber" |
| Output Content Format | outputContentFormat |  | string | Format of the analyze result top-level content. |

#### Returns

Status and result of the analyze operation.

- Body
    - AnalyzeResultOperation_V30

### Analyze ID Document (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeIdDocumentAsync

Extract field text and semantic values from a given ID document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Text Details | includeTextDetails |  | boolean | Include text lines and element references in the result. Default: True (just for FR Connector). |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - IdAnalyzeOperationResult

### Analyze Invoice (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeInvoice

Extract field text and semantic values from a given invoice document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Text Details | includeTextDetails |  | boolean | Include text lines and element references in the result. Default: True (just for FR Connector). |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale of the invoice. Supported locale includes: en-US. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - InvoiceAnalyzeOperationResult

### Analyze Layout (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeLayoutAsync

Extract text and layout information from a given document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Language | language |  | string | The BCP-47 language code of the text in the document. |
| Reading Order | readingOrder |  | string | Optional parameter to specify which reading order algorithm should be applied when ordering the extract text elements. Can be either 'basic' or 'natural'. Will default to basic if not specified. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - LayoutAnalyzeOperationResult

### Analyze Receipt (deprecated) [DEPRECATED]

- Operation ID:
    - AnalyzeReceiptAsync

Extract field text and semantic values from a given receipt document (deprecated).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Text Details | includeTextDetails |  | boolean | Include text lines and element references in the result. Default: True (just for FR Connector). |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract Invoice information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale of the invoice. Supported locale includes: en-US. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG or PNG) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the queued analyze operation.

- Body
    - ReceiptAnalyzeOperationResult

### Classify document with document classifier (v3.1 API)

- Operation ID:
    - ClassifyDocumentV31

Classify document with document classifier (v3.1 API).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Classifier Identifier | classifierId | True | string | Format - [a-zA-Z0-9][a-zA-Z0-9.\_~-]{1,63}. Unique classifier name. |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale hint for text recognition and document analysis. Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). |
| String Index Type | stringIndexType |  | string | Method used to compute string offset and length. Supported options: textElements, unicodeCodePoint, utf16CodeUnit. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG, PNG, BMP, TIFF) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |

#### Returns

Status and result of the analyze operation.

- Body
    - AnalyzeResultOperation_V30

### Classify document with document classifier (v4.x API)

- Operation ID:
    - ClassifyDocumentV40

Classify document with document classifier (v4.x API).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Document Intelligence API version | api-version | True | string | Document Intelligence API version. |
| Classifier Identifier | classifierId | True | string | Format - [a-zA-Z0-9][a-zA-Z0-9.\_~-]{1,63}. Unique classifier name. |
| Document/Image File Content | inputFileContent |  | binary | A PDF document or image (JPG, PNG, BMP, TIFF) file to analyze. |
| Document/Image URL | inputFileUrl |  | string | Url path for input file. Alternative to Document/Image File Content. |
| Split Mode | split |  | string | File splitting behavior. |
| Pages | pages |  | string | The page selection for multi-page PDF and TIFF documents, to extract information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will be processed. |
| Locale | locale |  | string | Locale hint for text recognition and document analysis. Value may contain only the language code (ex. "en", "fr") or BCP 47 language tag (ex. "en-US"). |
| String Index Type | stringIndexType |  | string | Method used to compute string offset and length. Supported options: textElements, unicodeCodePoint, utf16CodeUnit. |

#### Returns

Status and result of the analyze operation.

- Body
    - AnalyzeResultOperation_V30

## Definitions

### OperationStatus

Status of the queued operation.

Status of the queued operation.

    - string

### LayoutAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | LayoutAnalyzeResult | Analyze operation result. |

### InvoiceAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | InvoiceAnalyzeResult | Analyze operation result. |

### BusinessCardAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | BusinessCardAnalyzeResult | Analyze operation result. |

### ReceiptAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | ReceiptAnalyzeResult | Analyze operation result. |

### IdAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | IdAnalyzeResult | Analyze operation result. |

### CustomFormsAnalyzeOperationResult

Status and result of the queued analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | OperationStatus | Status of the queued operation. |
| createdDateTime | createdDateTime | string | Date and time (UTC) the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | string | Date and time (UTC) when the status is last updated. |
| analyzeResult | analyzeResult | CustomFormsAnalyzeResult | Analyze operation result. |

### FormOperationError

Error reported during an operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| message | message | string | Error message. |

### LayoutAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### InvoiceAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| documentResults | documentResults | array of InvoiceDocumentResult | Document-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### BusinessCardAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| documentResults | documentResults | array of BusinessCardDocumentResult | Document-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### ReceiptAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| documentResults | documentResults | array of ReceiptDocumentResult | Document-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### IdAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| documentResults | documentResults | array of IdDocumentResult | Document-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### CustomFormsAnalyzeResult

Analyze operation result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| version | version | string | Version of schema used for this result. |
| readResults | readResults | array of ReadResult | Text extracted from the input. |
| pageResults | pageResults | array of PageResult | Page-level information extracted from the input. |
| documentResults | documentResults | array of CustomFormsDocumentResult | Document-level information extracted from the input. |
| errors | errors | array of FormOperationError | List of errors reported during the analyze operation. |

### ReadResult

Text extracted from a page in the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| page | page | integer | The 1-based page number in the input document. |
| angle | angle | float | The general orientation of the text in clockwise direction, measured in degrees between (-180, 180]. |
| width | width | float | The width of the image/PDF in pixels/inches, respectively. |
| height | height | float | The height of the image/PDF in pixels/inches, respectively. |
| unit | unit | string | The unit used by the width, height and boundingBox properties. For images, the unit is "pixel". For PDF, the unit is "inch". |
| lines | lines | array of TextLine | When includeTextDetails is set to true, a list of recognized text lines. The maximum number of lines returned is 300 per page. The lines are sorted top to bottom, left to right, although in certain cases proximity is treated with higher priority. As the sorting order depends on the detected text, it may change across images and OCR version updates. Thus, business logic should be built upon the actual line location instead of order. |

### TextLine

An object representing an extracted text line.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The text content of the line. |
| boundingBox | boundingBox | BoundingBox | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| words | words | array of TextWord | List of words in the text line. |

### TextWord

An object representing a word.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The text content of the word. |
| boundingBox | boundingBox | BoundingBox | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| confidence | confidence | Confidence | Confidence value. |

### BoundingBox

Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | float |  |

### PageResult

Extracted information from a single page.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| page | page | integer | Page number. |
| clusterId | clusterId | integer | Cluster identifier. |
| keyValuePairs | keyValuePairs | array of KeyValuePair | List of key-value pairs extracted from the page. |
| tables | tables | array of DataTable | List of data tables extracted from the page. |

### KeyValuePair

Information about the extracted key-value pair.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| label | label | string | A user defined label for the key/value pair entry. |
| key | key | KeyValueElement | Information about the extracted key or value in a key-value pair. |
| value | value | KeyValueElement | Information about the extracted key or value in a key-value pair. |
| confidence | confidence | Confidence | Confidence value. |

### KeyValueElement

Information about the extracted key or value in a key-value pair.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The text content of the key or value. |
| boundingBox | boundingBox | BoundingBox | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| elements | elements | array of ElementReference | When includeTextDetails is set to true, a list of references to the text elements constituting this key or value. |

### ElementReference

Reference to a line or word.

Reference to a line or word.

    - string

### DataTable

Information about the extracted table contained in a page.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rows | rows | integer | Number of rows. |
| columns | columns | integer | Number of columns. |
| cells | cells | array of DataTableCell | List of cells contained in the table. |

### DataTableCell

Information about the extracted cell in a table.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rowIndex | rowIndex | integer | Row index of the cell. |
| columnIndex | columnIndex | integer | Column index of the cell. |
| rowSpan | rowSpan | integer | Number of rows spanned by this cell. |
| columnSpan | columnSpan | integer | Number of columns spanned by this cell. |
| text | text | string | Text content of the cell. |
| boundingBox | boundingBox | BoundingBox | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| elements | elements | array of ElementReference | When includeTextDetails is set to true, a list of references to the text elements constituting this table cell. |
| isHeader | isHeader | boolean | Return if the current cell is a header cell. |
| isFooter | isFooter | boolean | Return if the current cell a footer cell. |

### InvoiceDocumentResult

A set of extracted fields corresponding to the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | string | Document type. |
| pageRange | pageRange | array of integer | First and last page number where the document is found. |
| fields | fields | InvoiceFields | Invoice fields for 2.1. |

### BusinessCardDocumentResult

A set of extracted fields corresponding to the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | string | Document type. |
| pageRange | pageRange | array of integer | First and last page number where the document is found. |
| fields | fields | BusinessCardFields | BusinessCard fields for 2.1. |

### CustomFormsDocumentResult

A set of extracted fields corresponding to the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | string | Document type. |
| pageRange | pageRange | array of integer | First and last page number where the document is found. |
| Fields | \_fields | array of CustomFormsFields | Array of fields with fieldName and fieldValue properties. |

### ReceiptDocumentResult

A set of extracted fields corresponding to the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | string | Document type. |
| pageRange | pageRange | array of integer | First and last page number where the document is found. |
| fields | fields | ReceiptFields | Receiptfields for 2.1. |

### IdDocumentResult

A set of extracted fields corresponding to the input document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | string | Document type. |
| pageRange | pageRange | array of integer | First and last page number where the document is found. |
| fields | fields | IdFields | ID Document fields for 2.1. |

### CustomFormsFields

Custom Form fields.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Field Name | fieldName | string |  |
| Field Value | fieldValue | FieldValue | Predicted field value object. |

### InvoiceFields

Invoice fields for 2.1.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Amount due (text) | AmountDue.text | string | Returns amount due as written on the invoice. |
| Amount due (number) | AmountDue.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of amount due | AmountDue.confidence | float | How confident the model is in its prediction. |
| Billing address | BillingAddress.text | string |  |
| Confidence of billing address | BillingAddress.confidence | float | How confident the model is in its prediction. |
| Billing address recipient | BillingAddressRecipient.text | string |  |
| Confidence of billing address recipient | BillingAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Customer address | CustomerAddress.text | string |  |
| Confidence of customer address | CustomerAddress.confidence | float | How confident the model is in its prediction. |
| Customer address recipient | CustomerAddressRecipient.text | string |  |
| Confidence of customer address recipient | CustomerAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Customer ID | CustomerId.text | string |  |
| Confidence of customer ID | CustomerId.confidence | float | How confident the model is in its prediction. |
| Customer name | CustomerName.text | string |  |
| Confidence of customer name | CustomerName.confidence | float | How confident the model is in its prediction. |
| Due date (text) | DueDate.text | string | Returns due date as written on the invoice. |
| Due date (date) | DueDate.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of due date | DueDate.confidence | float | How confident the model is in its prediction. |
| Invoice date (text) | InvoiceDate.text | string | Returns invoice date as written on the invoice. |
| Invoice date (date) | InvoiceDate.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of invoice date | InvoiceDate.confidence | float | How confident the model is in its prediction. |
| Invoice ID | InvoiceId.text | string |  |
| Confidence of invoice ID | InvoiceId.confidence | float | How confident the model is in its prediction. |
| Invoice total (text) | InvoiceTotal.text | string | Returns invoice total as written on the invoice. |
| Invoice total (number) | InvoiceTotal.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of invoice total | InvoiceTotal.confidence | float | How confident the model is in its prediction. |
| Previous unpaid balance (text) | PreviousUnpaidBalance.text | string | Returns previous unpaid balance as written on the invoice. |
| Previous unpaid balance (number) | PreviousUnpaidBalance.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of previous unpaid balance | PreviousUnpaidBalance.confidence | float | How confident the model is in its prediction. |
| Purchase order | PurchaseOrder.text | string |  |
| Confidence of purchase order | PurchaseOrder.confidence | float | How confident the model is in its prediction. |
| Remittance address | RemittanceAddress.text | string |  |
| Confidence of remittance address | RemittanceAddress.confidence | float | How confident the model is in its prediction. |
| Remittance address recipient | RemittanceAddressRecipient.text | string |  |
| Confidence of remittance address recipient | RemittanceAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Service address | ServiceAddress.text | string |  |
| Confidence of service address | ServiceAddress.confidence | float | How confident the model is in its prediction. |
| Service address recipient | ServiceAddressRecipient.text | string |  |
| Confidence of service address recipient | ServiceAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Service end date (text) | ServiceEndDate.text | string | Returns service end date as written on the invoice. |
| Service end date (date) | ServiceEndDate.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of service end date | ServiceEndDate.confidence | float | How confident the model is in its prediction. |
| Service start date (text) | ServiceStartDate.text | string | Returns service start date as written on the invoice. |
| Service start date (date) | ServiceStartDate.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of service start date | ServiceStartDate.confidence | float | How confident the model is in its prediction. |
| Shipping address | ShippingAddress.text | string |  |
| Confidence of shipping address | ShippingAddress.confidence | float | How confident the model is in its prediction. |
| Shipping address recipient | ShippingAddressRecipient.text | string |  |
| Confidence of shipping address recipient | ShippingAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Subtotal (text) | SubTotal.text | string | Returns subtotal as written on the invoice. |
| Subtotal (number) | SubTotal.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of subtotal | SubTotal.confidence | float | How confident the model is in its prediction. |
| Total tax (text) | TotalTax.text | string | Returns total tax as written on the invoice. |
| Total tax (number) | TotalTax.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of total tax | TotalTax.confidence | float | How confident the model is in its prediction. |
| Vendor address | VendorAddress.text | string |  |
| Confidence of vendor address | VendorAddress.confidence | float | How confident the model is in its prediction. |
| Vendor address recipient | VendorAddressRecipient.text | string |  |
| Confidence of vendor address recipient | VendorAddressRecipient.confidence | float | How confident the model is in its prediction. |
| Vendor name | VendorName.text | string |  |
| Confidence of vendor name | VendorName.confidence | float | How confident the model is in its prediction. |
| Items | Items.valueArray | array of object | Array of line items |
| Amount (text) | Items.valueArray.valueObject.Amount.text | string | Returns amount as written on the invoice. |
| Amount (number) | Items.valueArray.valueObject.Amount.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of amount | Items.valueArray.valueObject.Amount.confidence | float | How confident the model is in its prediction. |
| Description | Items.valueArray.valueObject.Description.text | string |  |
| Confidence of description | Items.valueArray.valueObject.Description.confidence | float | How confident the model is in its prediction. |
| Quantity (text) | Items.valueArray.valueObject.Quantity.text | string | Returns quantity as written on the invoice. |
| Quantity (number) | Items.valueArray.valueObject.Quantity.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of quantity | Items.valueArray.valueObject.Quantity.confidence | float | How confident the model is in its prediction. |
| Unit price (text) | Items.valueArray.valueObject.UnitPrice.text | string | Returns unit price as written on the invoice. |
| Unit price (number) | Items.valueArray.valueObject.UnitPrice.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of unit price | Items.valueArray.valueObject.UnitPrice.confidence | float | How confident the model is in its prediction. |
| Product code | Items.valueArray.valueObject.ProductCode.text | string |  |
| Confidence of product code | Items.valueArray.valueObject.ProductCode.confidence | float | How confident the model is in its prediction. |
| Unit | Items.valueArray.valueObject.Unit.text | string |  |
| Confidence of unit | Items.valueArray.valueObject.Unit.confidence | float | How confident the model is in its prediction. |
| Date (text) | Items.valueArray.valueObject.Date.text | string | Returns date as written on the invoice. |
| Date (date) | Items.valueArray.valueObject.Date.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of date | Items.valueArray.valueObject.Date.confidence | float | How confident the model is in its prediction. |
| Tax (text) | Items.valueArray.valueObject.Tax.text | string | Returns tax as written on the invoice. |
| Tax (number) | Items.valueArray.valueObject.Tax.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of tax | Items.valueArray.valueObject.Tax.confidence | float | How confident the model is in its prediction. |

### BusinessCardFields

BusinessCard fields for 2.1.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Contact names | ContactNames.valueArray | array of object | Array of contact names |
| First name | ContactNames.valueArray.valueObject.FirstName.text | string |  |
| Confidence of first name | ContactNames.valueArray.valueObject.FirstName.confidence | float | How confident the model is in its prediction. |
| Last name | ContactNames.valueArray.valueObject.LastName.text | string |  |
| Confidence of last name | ContactNames.valueArray.valueObject.LastName.confidence | float | How confident the model is in its prediction. |
| Company names | CompanyNames.valueArray | array of object | Array of company names |
| Company name | CompanyNames.valueArray.text | string |  |
| Confidence of company name | CompanyNames.valueArray.confidence | float | How confident the model is in its prediction. |
| Departments | Departments.valueArray | array of object | Array of departments |
| Department | Departments.valueArray.text | string |  |
| Confidence of department | Departments.valueArray.confidence | float | How confident the model is in its prediction. |
| Job titles | JobTitles.valueArray | array of object | Array of job titles |
| Job title | JobTitles.valueArray.text | string |  |
| Confidence of job title | JobTitles.valueArray.confidence | float | How confident the model is in its prediction. |
| Emails | Emails.valueArray | array of object | Array of emails |
| Email | Emails.valueArray.text | string |  |
| Confidence of email | Emails.valueArray.confidence | float | How confident the model is in its prediction. |
| Websites | Websites.valueArray | array of object | Array of websites |
| Website | Websites.valueArray.text | string |  |
| Confidence of website | Websites.valueArray.confidence | float | How confident the model is in its prediction. |
| Addresses | Addresses.valueArray | array of object | Array of addresses |
| Address | Addresses.valueArray.text | string |  |
| Confidence of address | Addresses.valueArray.confidence | float | How confident the model is in its prediction. |
| Mobile phones | MobilePhones.valueArray | array of object | Array of mobile phones |
| Mobile phone | MobilePhones.valueArray.text | string |  |
| Confidence of mobile phone | MobilePhones.valueArray.confidence | float | How confident the model is in its prediction. |
| Faxes | Faxes.valueArray | array of object | Array of faxes |
| Fax | Faxes.valueArray.text | string |  |
| Confidence of fax | Faxes.valueArray.confidence | float | How confident the model is in its prediction. |
| Work phones | WorkPhones.valueArray | array of object | Array of work phones |
| Work phone | WorkPhones.valueArray.text | string |  |
| Confidence of work phone | WorkPhones.valueArray.confidence | float | How confident the model is in its prediction. |
| Other phones | OtherPhones.valueArray | array of object | Array of other phones |
| Other phone | OtherPhones.valueArray.text | string |  |
| Confidence of other phone | OtherPhones.valueArray.confidence | float | How confident the model is in its prediction. |

### ReceiptFields

Receiptfields for 2.1.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Receipt type | ReceiptType.text | string |  |
| Confidence of receipt type | ReceiptType.confidence | float | How confident the model is in its prediction. |
| Merchant name | MerchantName.text | string |  |
| Confidence of merchant name | MerchantName.confidence | float | How confident the model is in its prediction. |
| Merchant phone number | MerchantPhoneNumber.text | string |  |
| Confidence of merchant phone number | MerchantPhoneNumber.confidence | float | How confident the model is in its prediction. |
| Merchant address | MerchantAddress.text | string |  |
| Confidence of merchant address | MerchantAddress.confidence | float | How confident the model is in its prediction. |
| Transaction date (text) | TransactionDate.text | string | Returns transaction date as written on the invoice. |
| Transaction date (date) | TransactionDate.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of transaction date | TransactionDate.confidence | float | How confident the model is in its prediction. |
| Transaction time (text) | TransactionTime.text | string | Returns transaction time as written on the invoice. |
| Transaction time (time) | TransactionTime.valueDate | time | Formatted as a date. Example: 2019-05-31. |
| Confidence of transaction time | TransactionTime.confidence | float | How confident the model is in its prediction. |
| Total (text) | Total.text | string | Returns total as written on the invoice. |
| Total (number) | Total.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of total | Total.confidence | float | How confident the model is in its prediction. |
| Subtotal (text) | Subtotal.text | string | Returns subtotal as written on the invoice. |
| Subtotal (number) | Subtotal.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of subtotal | Subtotal.confidence | float | How confident the model is in its prediction. |
| Tax (text) | Tax.text | string | Returns tax as written on the invoice. |
| Tax (number) | Tax.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of tax | Tax.confidence | float | How confident the model is in its prediction. |
| Tip (text) | Tip.text | string | Returns tip as written on the invoice. |
| Tip (number) | Tip.valueNumber | number | Formatted as a number. Example: 1234.98. |
| Confidence of tip | Tip.confidence | float | How confident the model is in its prediction. |
| Items | Items.valueArray | array of object | Array of line items |
| Name | Items.valueArray.valueObject.Name.text | string |  |
| Confidence of name | Items.valueArray.valueObject.Name.confidence | float | How confident the model is in its prediction. |
| Quantity (text) | Items.valueArray.valueObject.Quantity.text | string | Returns quantity as written on the invoice. |
| Quantity (number) | Items.valueArray.valueObject.Quantity.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of quantity | Items.valueArray.valueObject.Quantity.confidence | float | How confident the model is in its prediction. |
| Price (text) | Items.valueArray.valueObject.Price.text | string | Returns price as written on the invoice. |
| Price (number) | Items.valueArray.valueObject.Price.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of price | Items.valueArray.valueObject.Price.confidence | float | How confident the model is in its prediction. |
| Total price (text) | Items.valueArray.valueObject.TotalPrice.text | string | Returns total price as written on the invoice. |
| Total price (number) | Items.valueArray.valueObject.TotalPrice.valueNumber | number | Formatted as a number. Example: 12. |
| Confidence of total price | Items.valueArray.valueObject.TotalPrice.confidence | float | How confident the model is in its prediction. |

### IdFields

ID Document fields for 2.1.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Country Region | CountryRegion.valueCountryRegion | string |  |
| Confidence of Country Region | CountryRegion.confidence | float | How confident the model is in its prediction. |
| Date of expiration | DateOfExpiration.text | string | Returns date of expiration as written on the invoice. |
| Date of expiration (date) | DateOfExpiration.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of date of expiration | DateOfExpiration.confidence | float | How confident the model is in its prediction. |
| Date of birth (text) | DateOfBirth.text | string | Returns date of birth as written on the invoice. |
| Date of birth (date) | DateOfBirth.valueDate | date | Formatted as a date. Example: 2019-05-31. |
| Confidence of date of birth | DateOfBirth.confidence | float | How confident the model is in its prediction. |
| Document number | DocumentNumber.text | string |  |
| Confidence of document number | DocumentNumber.confidence | float | How confident the model is in its prediction. |
| First name | FirstName.text | string |  |
| Confidence of first name | FirstName.confidence | float | How confident the model is in its prediction. |
| Last name | LastName.text | string |  |
| Confidence of last name | LastName.confidence | float | How confident the model is in its prediction. |
| Nationality | Nationality.valueCountryRegion | string |  |
| Confidence of nationality | Nationality.confidence | float | How confident the model is in its prediction. |
| Sex | Sex.text | string |  |
| Confidence of sex | Sex.confidence | float | How confident the model is in its prediction. |
| Machine readable zone | MachineReadableZone.text | string |  |
| Confidence of machine readable zone | MachineReadableZone.confidence | float | How confident the model is in its prediction. |
| Document type | DocumentType.text | string |  |
| Confidence of document type | DocumentType.confidence | float | How confident the model is in its prediction. |
| Address | Address.text | string |  |
| Confidence of address | Address.confidence | float | How confident the model is in its prediction. |
| Region | Region.text | string |  |
| Confidence of region | Region.confidence | float | How confident the model is in its prediction. |

### FieldValue

Predicted field value object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | FieldValueType | Semantic data type of the field value. |
| valueString | valueString | string | String value. |
| valueDate | valueDate | date-time | Date value. |
| valueTime | valueTime | date-time | Time value. |
| valuePhoneNumber | valuePhoneNumber | string | Phone number value. |
| valueNumber | valueNumber | number | Floating point value. |
| valueInteger | valueInteger | integer | Integer value. |
| text | text | string |  |
| boundingBox | boundingBox | BoundingBox | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. |
| confidence | confidence | Confidence | Confidence value. |
| elements | elements | array of ElementReference | When includeTextDetails is set to true, a list of references to the text elements constituting this field. |
| page | page | integer | The 1-based page number in the input document. |

### FieldValueType

Semantic data type of the field value.

Semantic data type of the field value.

    - string

### Confidence

Confidence value.

Confidence value.

    - float

### ApiVersion\_V30

API version.

API version.

    - string

### AnalyzeResultOperation\_V30

Status and result of the analyze operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | string | Operation status. |
| createdDateTime | createdDateTime | date-time | Date and time (UTC) when the analyze operation was submitted. |
| lastUpdatedDateTime | lastUpdatedDateTime | date-time | Date and time (UTC) when the status was last updated. |
| error | error | Error\_V30 | Error info. |
| analyzeResult | analyzeResult | AnalyzeResult\_V30 | Document analysis result. |

### AnalyzeResult\_V30

Document analysis result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| apiVersion | apiVersion | ApiVersion\_V30 | API version. |
| modelId | modelId | ModelId\_V30 | Unique model name. |
| stringIndexType | stringIndexType | StringIndexType\_V30 | Method used to compute string offset and length. |
| content | content | string | Concatenate string representation of all textual and visual elements in reading order. |
| contentFormat | contentFormat | ContentFormat\_V40 | Format of the content in analyzed result. |
| pages | pages | array of DocumentPage\_V30 | Analyzed pages. |
| paragraphs | paragraphs | array of DocumentParagraph\_V30 | Extracted paragraphs. |
| tables | tables | array of DocumentTable\_V30 | Extracted tables. |
| figures | figures | array of DocumentFigure\_V40 | Extracted figures. |
| sections | sections | array of DocumentSection\_V40 | Extracted sections. |
| keyValuePairs | keyValuePairs | array of DocumentKeyValuePair\_V30 | Extracted key-value pairs. |
| entities | entities | array of DocumentEntity\_V30 | Extracted entities. |
| styles | styles | array of DocumentStyle\_V30 | Extracted font styles. |
| languages | languages | array of DocumentLanguage\_V30 | Detected languages. |
| documents | documents | array of Document\_V30 | Extracted documents. |
| warnings | warnings | array of Warning\_V40 | List of warnings encountered. |

### DocumentPage\_V30

Content and layout elements extracted from a page from the input.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| kind | kind | string | Kind of document page. |
| pageNumber | pageNumber | integer | 1-based page number in the input document. |
| angle | angle | number | The general orientation of the content in clockwise direction, measured in degrees between (-180, 180]. |
| width | width | number | The width of the image/PDF in pixels/inches, respectively. |
| height | height | number | The height of the image/PDF in pixels/inches, respectively. |
| unit | unit | string | The unit used by the width, height, and polygon properties. For images, the unit is "pixel". For PDF, the unit is "inch". |
| spans | spans | array of DocumentSpan\_V30 | Location of the page in the reading order concatenated content. |
| words | words | array of DocumentWord\_V30 | Extracted words from the page. |
| selectionMarks | selectionMarks | array of DocumentSelectionMark\_V30 | Extracted selection marks from the page. |
| images | images | array of DocumentImage\_V30 | Extracted images from the page. |
| lines | lines | array of DocumentLine\_V30 | Extracted lines from the page, potentially containing both textual and visual elements. |
| barcodes | barcodes | array of DocumentBarcode\_V31 | Extracted barcodes from the page. |
| formulas | formulas | array of DocumentFormula\_V31 | Extracted formulas from the page. |

### DocumentWord\_V30

A word object consisting of a contiguous sequence of characters. For non-space delimited languages, such as Chinese, Japanese, and Korean, each character is represented as its own word.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | Text content of the word. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| span | span | DocumentSpan\_V30 | Contiguous region of the concatenated content property, specified as an offset and length. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentSelectionMark\_V30

A selection mark object representing check boxes, radio buttons, and other elements indicating a selection.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| state | state | DocumentSelectionMarkState\_V30 | State of the selection mark. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| span | span | DocumentSpan\_V30 | Contiguous region of the concatenated content property, specified as an offset and length. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentImage\_V30

An image object detected in the page.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| span | span | DocumentSpan\_V30 | Contiguous region of the concatenated content property, specified as an offset and length. |
| pageRef | pageRef | integer | 0-based index of the global pages array that containing the content of the image. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentSelectionMarkState\_V30

State of the selection mark.

State of the selection mark.

    - string

### DocumentStyle\_V30

An object representing observed text styles.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| backgroundColor | backgroundColor | string | Background color in #rrggbb hexadecimal format.. |
| color | color | string | Foreground color in #rrggbb hexadecimal format. |
| fontStyle | fontStyle | string | Font style. |
| fontWeight | fontWeight | string | Font weight. |
| isHandwritten | isHandwritten | boolean | Is content handwritten. |
| similarFontFamily | similarFontFamily | string | Visually most similar font from among the set of supported font families, with fallback fonts following CSS convention (ex. 'Arial, sans-serif'). |
| spans | spans | array of DocumentSpan\_V30 | Location of the text elements in the concatenated content the style applies to. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentLanguage\_V30

An object representing the detected language for a given text span.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| locale | locale | string | Detected language. Value may an ISO 639-1 language code (ex. "en", "fr") or BCP 47 language tag (ex. "zh-Hans"). |
| spans | spans | array of DocumentSpan\_V30 | Location of the text elements in the concatenated content the language applies to. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentLine\_V30

A content line object consisting of an adjacent sequence of content elements, such as words and selection marks.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | Concatenated content of the contained elements in reading order. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| spans | spans | array of DocumentSpan\_V30 | Location of the line in the reading order concatenated content. |

### DocumentParagraph\_V30

A paragraph object consisting with contiguous lines generally with common alignment and spacing.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| role | role | string | Semantic role of the paragraph. |
| content | content | string | Concatenated content of the paragraph in reading order. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the paragraph. |
| spans | spans | array of DocumentSpan\_V30 | Location of the paragraph in the reading order concatenated content. |

### DocumentTable\_V30

A table object consisting table cells arranged in a rectangular layout.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rowCount | rowCount | integer | Number of rows in the table. |
| columnCount | columnCount | integer | Number of columns in the table. |
| cells | cells | array of DocumentTableCell\_V30 | Cells contained within the table. |
| caption | caption | DocumentCaption\_V30 | An object representing the location and content of a table caption. |
| footnotes | footnotes | array of DocumentFootnote\_V30 | Footnotes associated with the table. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the table. |
| spans | spans | array of DocumentSpan\_V30 | Location of the table in the reading order concatenated content. |

### DocumentTableCell\_V30

An object representing the location and content of a table cell.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| kind | kind | string | Table cell kind. |
| rowIndex | rowIndex | integer | Row index of the cell. |
| columnIndex | columnIndex | integer | Column index of the cell. |
| rowSpan | rowSpan | integer | Number of rows spanned by this cell. |
| columnSpan | columnSpan | integer | Number of columns spanned by this cell. |
| content | content | string | Concatenated content of the table cell in reading order. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the table cell. |
| spans | spans | array of DocumentSpan\_V30 | Location of the table cell in the reading order concatenated content. |

### DocumentCaption\_V30

An object representing the location and content of a table caption.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | Table caption content. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the table caption. |
| spans | spans | array of DocumentSpan\_V30 | Location of the table caption in the reading order concatenated content. |

### DocumentFootnote\_V30

An object representing the location and content of a table footnote.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | Table footnote content. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the table footnote. |
| spans | spans | array of DocumentSpan\_V30 | Location of the table footnote in the reading order concatenated content. |

### DocumentKeyValuePair\_V30

An object representing a form field with distinct field label (key) and field value (may be empty).

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| key | key | DocumentKeyValueElement\_V30 | An object representing the field key or value in a key-value pair. |
| value | value | DocumentKeyValueElement\_V30 | An object representing the field key or value in a key-value pair. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentKeyValueElement\_V30

An object representing the field key or value in a key-value pair.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | Concatenated content of the key-value element in reading order. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the key-value element. |
| spans | spans | array of DocumentSpan\_V30 | Location of the key-value element in the reading order concatenated content. |

### DocumentEntity\_V30

An object representing various categories of entities.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| category | category | string | Entity type. |
| subCategory | subCategory | string | Entity sub type. |
| content | content | string | Entity content. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the entity. |
| spans | spans | array of DocumentSpan\_V30 | Location of the entity in the reading order concatenated content. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### DocumentBarcode\_V31

A barcode object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |
| kind | kind | string | Barcode kind. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| span | span | DocumentSpan\_V30 | Contiguous region of the concatenated content property, specified as an offset and length. |
| value | value | string | Barcode value |

### DocumentFormula\_V31

A formula object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |
| kind | kind | string | Formula kind. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |
| span | span | DocumentSpan\_V30 | Contiguous region of the concatenated content property, specified as an offset and length. |
| value | value | string | LaTex expression describing the formula. |

### DocumentFigure\_V40

An object representing a figure in the document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the figure. |
| spans | spans | array of DocumentSpan\_V30 | Location of the figure in the reading order concatenated content. |
| elements | elements | array of DocumentElement\_V40 | Child elements of the figure, excluding any caption or footnotes. |
| caption | caption | DocumentCaption\_V30 | An object representing the location and content of a table caption. |
| footnotes | footnotes | array of DocumentFootnote\_V30 | List of footnotes associated with the figure. |
| id | id | string | Figure ID. |

### DocumentSection\_V40

An object representing a section in the document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| spans | spans | array of DocumentSpan\_V30 | Location of the section in the reading order concatenated content. |
| elements | elements | array of DocumentElement\_V40 | Child elements of the section. |

### DocumentElement\_V40

An JSON pointer referencing an element of the document, such as paragraph, table, section, etc.

An JSON pointer referencing an element of the document, such as paragraph, table, section, etc.

    - string

### Warning\_V40

The error object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | One of a server-defined set of warning codes. |
| message | message | string | A human-readable representation of the warning. |
| target | target | string | The target of the error. |

### ContentFormat\_V40

Format of the content in analyzed result.

Format of the content in analyzed result.

    - string

### Document\_V30

An object describing the location and semantic content of a document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| docType | docType | DocType\_V30 | Document type name. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the document. |
| spans | spans | array of DocumentSpan\_V30 | Location of the document in the reading order concatenated content. |
| fields | fields | object | Dictionary of named field values. |
| Fields | \_fields | array of DocumentFieldNameValue\_V30 | Array of fields with fieldName and fieldValue properties. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### BoundingPolygon\_V30

Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | number |  |

### BoundingRegion\_V30

Bounding polygon on a specific page of the input.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| pageNumber | pageNumber | integer | 1-based page number of page containing the bounding region. |
| polygon | polygon | BoundingPolygon\_V30 | Bounding polygon, with coordinates specified relative to the top-left of the page. The numbers represent the x, y values of the polygon vertices, clockwise from the left (-180 degrees inclusive) relative to the element orientation. |

### DocumentFieldType\_V30

Semantic data type of the field value.

Semantic data type of the field value.

    - string

### DocumentFieldNameValue\_V30

Document field object with field name and its value.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Field Name | fieldName | string |  |
| fieldValue | fieldValue | DocumentField\_V30 | An object representing the content and location of a field value. |

### DocumentField\_V30

An object representing the content and location of a field value.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | DocumentFieldType\_V30 | Semantic data type of the field value. |
| valueString | valueString | string | String value. |
| valueDate | valueDate | date | Date value in YYYY-MM-DD format (ISO 8601). |
| valueTime | valueTime | time | Time value in hh:mm:ss format (ISO 8601). |
| valuePhoneNumber | valuePhoneNumber | string | Phone number value in E.164 format (ex. +19876543210). |
| valueNumber | valueNumber | number | Floating point value. |
| valueInteger | valueInteger | integer | Integer value. |
| valueSelectionMark | valueSelectionMark | DocumentSelectionMarkState\_V30 | State of the selection mark. |
| valueSignature | valueSignature | string | Presence of signature. |
| valueCountryRegion | valueCountryRegion | string | 3-letter country code value (ISO 3166-1 alpha-3). |
| valueCurrency | valueCurrency | CurrencyValue\_V30 | Currency field value. |
| valueAddress | valueAddress | AddressValue\_V30 | Address field value. |
| valueBoolean | valueBoolean | boolean | Boolean value. |
| content | content | string | Field content. |
| boundingRegions | boundingRegions | array of BoundingRegion\_V30 | Bounding regions covering the field. |
| spans | spans | array of DocumentSpan\_V30 | Location of the field in the reading order concatenated content. |
| confidence | confidence | Confidence\_V30 | Prediction confidence. |

### Confidence\_V30

Prediction confidence.

Prediction confidence.

    - number

### DocType\_V30

Document type name.

Document type name.

    - string

### DocumentSpan\_V30

Contiguous region of the concatenated content property, specified as an offset and length.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| offset | offset | integer | Zero-based index of the content represented by the span. |
| length | length | integer | Number of characters in the content represented by the span. |

### StringIndexType\_V30

Method used to compute string offset and length.

Method used to compute string offset and length.

    - string

### ModelId\_V30

Unique model name.

Unique model name.

    - string

### Error\_V30

Error info.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Error message. |
| target | target | string | Target of the error. |
| details | details | array of InnerError\_V30 | List of detailed errors. |
| innererror | innererror | InnerError\_V30 | Detailed error. |

### InnerError\_V30

Detailed error.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Error message. |

### CurrencyValue\_V30

Currency field value.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| amount | amount | double | Currency amount. |
| currencyCode | currencyCode | string | Resolved currency code (ISO 4217), if any. |
| currencySymbol | currencySymbol | string | Currency symbol label, if any. |

### AddressValue\_V30

Address field value.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| houseNumber | houseNumber | string | House or building number. |
| poBox | poBox | string | Post office box number. |
| road | road | string | Street name. |
| city | city | string | Name of city, town, village, etc. |
| state | state | string | First-level administrative division. |
| postalCode | postalCode | string | Postal code used for mail sorting. |
| countryRegion | countryRegion | string | Country or region. |
| streetAddress | streetAddress | string | Street-level address, excluding city, state, countryRegion, and postalCode. |
| cityDistrict | cityDistrict | string | Districts or boroughs within a city, such as Brooklyn in New York City or City of Westminster in London. |
| house | house | string | Build name, such as World Trade Center. |
| level | level | string | Floor number, such as 3F. |
| stateDistrict | stateDistrict | string | Second-level administrative division used in certain locales. |
| suburb | suburb | string | Unofficial neighborhood name, like Chinatown. |
| unit | unit | string | Apartment or office number. |