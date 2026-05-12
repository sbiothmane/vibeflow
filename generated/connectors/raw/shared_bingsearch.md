---
layout: Reference
title: Bing Search - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/bingsearch/
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
document_id: dfd3a72f-5e66-de38-1832-97f79a3cd5cb
document_version_independent_id: a593f7e9-b1a0-303b-bbc8-9528a9ca3426
updated_at: 2025-10-16T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/BingSearch/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/f398b8f5a0d8b77a6cb967dd994f0f7a11ba5dfc/docs/BingSearch/index.yml
git_commit_id: f398b8f5a0d8b77a6cb967dd994f0f7a11ba5dfc
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: bingsearch/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/BingSearch/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/12ed19f9-ebdf-4c8a-8bcd-7a681836774d
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3a764584-4f97-452b-8f1d-36f19b12f6ae
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: fbf8f79e-f4a3-d109-7b7a-f8db3113086e
---

# Bing Search (Preview)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1777/1.0.1777.4410/bingsearch/icon.png)
Microsoft Cognitive Services Bing Search API allows you to search content across the web.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://www.bing.com |

## Connector in-depth

For more information about the connector, see the [in-depth section](/en-us/azure/connectors/connectors-create-api-bingsearch).

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
| API Key | securestring | API Key | True |
| API Endpoint | string | API Endpoint |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |
| Frequency of trigger polls | 1 | 900 seconds |

## Actions

| List news by query | Returns a list of news articles for a given query. |
| --- | --- |

### List news by query

- Operation ID:
    - GetNews

Returns a list of news articles for a given query.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search Query | q | True | string | The search query string. |
| Market | mkt |  | string | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US. |
| Safe Search | safeSearch |  | string | A filter used to filter results for adult content. |
| Count | count |  | string | The number of search results to return in the response. The actual number delivered may be less than requested. |
| Offset | offset |  | string | The zero-based offset that indicates the number of search results to skip before returning results. |

#### Returns

- Items
    - BingNewsBatch

## Triggers

| On new news article | Triggers when a news article matches the given query. |
| --- | --- |

### On new news article

- Operation ID:
    - TrigNewNews

Triggers when a news article matches the given query.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search Query | q | True | string | The search query string. |
| Market | mkt |  | string | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US. |
| Safe Search | safeSearch |  | string | A filter used to filter results for adult content. |
| Count | count |  | string | The number of search results to return in the response. The actual number delivered may be less than requested. |
| Offset | offset |  | string | The zero-based offset that indicates the number of search results to skip before returning results. |

#### Returns

- Body
    - NewsArticle

## Definitions

### BingNewsBatch

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | NewsArticle |  |

### NewsArticle

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | The name of the news article. |
| URL | url | string | The URL to the news article. |
| Description | description | string | A short description of the news article. |
| Date Published | datePublished | date-time | The datetime the article was published. |
| Category | category | string | The category of the news article, such as ScienceAndTechnology. |