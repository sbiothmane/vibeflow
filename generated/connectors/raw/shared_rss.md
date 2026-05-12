---
layout: Reference
title: RSS - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/rss/
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
document_id: e00bcf3a-a5c1-0c9b-71ef-095a008cba85
document_version_independent_id: abc941c4-8750-993f-d85a-c42ae7922b89
updated_at: 2026-03-27T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/RSS/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/cbe3fddfee6df7864687c0187c1bd3aabf415069/docs/RSS/index.yml
git_commit_id: cbe3fddfee6df7864687c0187c1bd3aabf415069
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: rss/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/RSS/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
platformId: aec937ca-ca11-99da-76aa-1c9fc74459e6
---

# RSS

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/rss/icon.png)
RSS is a popular web syndication format used to publish frequently updated content – like blog entries and news headlines. Many content publishers provide an RSS feed to allow users to subscribe to it. Use the RSS connector to retrieve feed information and trigger flows when new items are published in an RSS feed.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Known Issues and Limitations

- Trigger polling logic is based on feed item *pubDate* field. Each new feed item should have *pubDate* timestamp greater (not equal) than previous ones, otherwise the trigger won`t be able to distinct new and old entries and new feed items may be skipped.
- RSS feeds that do not include an "updated" tag for feed items will not function with the trigger when the sinceProperty is set to "UpdatedOn" value.

### General Limits

| Name | Value |
| --- | --- |
| Maximum content length (in MB) | 5 |
| Minimum polling interval of the RSS trigger (in seconds) | 1800 |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| List all RSS feed items | This operation retrieves all items from an RSS feed. |
| --- | --- |

### List all RSS feed items

- Operation ID:
    - ListFeedItems

This operation retrieves all items from an RSS feed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| The RSS feed URL | feedUrl | True | string | The RSS feed URL (Example: http://rss.cnn.com/rss/cnn_topstories.rss). |
| since | since |  | string | The date since when RSS feed should be retrieved (Example: 2018-12-29 10:24:05Z). |
| Chosen property will be used to determine which items are new. | sinceProperty |  | string | Chosen property will be used for trigger state. |

#### Returns

- response
    - array of FeedItem

## Triggers

| When a feed item is published | This operation triggers a workflow when a new item is published in an RSS feed. |
| --- | --- |

### When a feed item is published

- Operation ID:
    - OnNewFeed

This operation triggers a workflow when a new item is published in an RSS feed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| The RSS feed URL | feedUrl | True | string | The RSS feed URL (Example: http://rss.cnn.com/rss/cnn_topstories.rss). |
| Chosen property will be used to determine which items are new. | sinceProperty |  | string | Chosen property will be used for trigger state. |

#### Returns

Represents a wrapper object for batch trigger response

- Body
    - TriggerBatchResponse[FeedItem]

## Definitions

### TriggerBatchResponse[FeedItem]

Represents a wrapper object for batch trigger response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of FeedItem | A list of the response objects |

### FeedItem

Represents an RSS feed item.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Feed ID | id | string | Feed ID |
| Feed title | title | string | Feed title |
| Primary feed link | primaryLink | string | Primary feed link |
| Feed links | links | array of string | Feed links |
| Feed updated on | updatedOn | string | Feed updated on |
| Feed published on | publishDate | string | Feed published date |
| Feed summary | summary | string | Feed item summary |
| Feed copyright information | copyright | string | Copyright information |
| Feed categories | categories | array of string | Feed item categories |