---
layout: Reference
title: OneNote (Business) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/onenote/
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
document_id: c776f9cc-dd2d-13fc-27b1-00e5a548c9ff
document_version_independent_id: 5c53313c-5dd9-81d2-2f5f-92982e93d9bd
updated_at: 2026-05-09T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/OneNote/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/3bea2815dc4643546385b089e5f26faefe6bb453/docs/OneNote/index.yml
git_commit_id: 3bea2815dc4643546385b089e5f26faefe6bb453
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: onenote/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/OneNote/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/7428317a-e6c2-4461-ad3e-8a8ad3608734
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/e4f59707-f107-48f2-8d75-0afd91868cd7
platformId: 91a89666-2b06-5bb2-5b53-d2b58897e7b9
---

# OneNote (Business)

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1810/1.0.1810.4710/onenote/icon.png)
OneNote is a note taking app from Microsoft that makes it easy to sync your ideas, sketches and notes across all your devices! Connect to your Office 365 account with OneDrive for Business enabled to track new sections, create notes and more.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/onenote/digital-note-taking-app |
| Privacy policy | https://privacy.microsoft.com |
| Categories | Productivity |

To use this integration, you will need access to a OneNote notebook stored on OneDrive For Business. To make a connection, select **Sign In**. You will be prompted to provide your O365 account with OneDrive for Business enabled, follow the remainder of the screens to create a connection.

## Known Issues and Limitations

1. When using the connection, if you're not seeing the list of notebook you're expecting please check the account you created the connection with and try again. If you see an error while using the connector you may look up the [error code](https://msdn.microsoft.com/library/office/dn750990.aspx) for more information.
2. This integration requires connecting with an account that has the "UserRemoteAPIs" permission. If you see this error: "Error: the user doesn't have permissions to access the requested resource", the account may not have the correct permissions. A SharePoint administrator can control permission levels by browsing to the site collection and opening the Site settings. Select the Site Permissions and then the Permission Level to see the permissions (such as the Use Remote Interfaces) the level contains. If a user belonging to a certain level doesn't have the required permission, either modify the level by checking the box for the permission or create a new permission level and assign that to the user.
3. The connector currently does not support an explicit input parameter **Page Title** for the **Create Page** actions. This is a limitation arising from the OneNote API implementation. However, the title can be specified as a part of the **Page Content** in HTML by using the &lt;title&gt;&lt;/title&gt; [tags](/en-us/graph/onenote-create-page#supported-html-and-css-for-onenote-pages).
4. **Notebook section**. If you want to provide a custom value for the Notebook Section parameter, please specify it in the API URL format. The api url pattern: `https://www.onenote.com/api/v1.0/myOrganization/siteCollections/{siteCollectionsId}/sites/{SiteId}/notes/sections/{SectionId}/pages`. For more information, you can take a look at [OneNote API documentation](/en-us/graph/onenote-get-content).
5. Create a page in Quick Notesaction is not supported in following regions:
    - Logic Apps:
        - Azure Government
        - Azure China regions
    - Power Automate and Power Apps:
        - US Government (GCC)
        - US Government (GCC High)
        - China Cloud operated by 21Vianet
6. The Get page content action is not supported in Power Apps, however this action is supported in Power Automate.

Note

The following characters are not allowed in the notebook name: \*":&lt;&gt;?/|%

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 1200 seconds |

## Actions

| Create a page in Quick Notes | Create a new page in the Quick Notes section. |
| --- | --- |
| Create page in a section | Create new page in a specified section. |
| Create section in a notebook | Create section in a notebook. |
| Delete a page | Delete a page. |
| Get page content | Get HTML page content. |
| Get pages for a specific section | Get pages for a specific section. |
| Get recent notebooks | Get recent notebooks. |
| Get sections in notebook | Get sections in a specific notebook. |
| Update page content | Update HTML page content. |

### Create a page in Quick Notes

- Operation ID:
    - CreatePageInQuickNotes

Create a new page in the Quick Notes section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Page Content | pageContent | True | html | Page content. |

#### Returns

- Body
    - Page

### Create page in a section

- Operation ID:
    - CreatePageInSection

Create new page in a specified section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |
| Page Content | pageContent | True | html | Page content. |

#### Returns

- Body
    - Page

### Create section in a notebook

- Operation ID:
    - CreateSectionInNotebook

Create section in a notebook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Name of the new section | name | True | string | The name of the new section. |

#### Returns

- Body
    - CreateSectionInNotebookResponse

### Delete a page

- Operation ID:
    - DeletePage

Delete a page.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |
| Page Id | pageId | True | string | Unique id of the page. |

### Get page content

- Operation ID:
    - GetPageContent

Get HTML page content.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |
| Page Id | pageId | True | string | Unique id of the page. |

#### Returns

The page HTML content

- response
    - string

### Get pages for a specific section

- Operation ID:
    - GetPagesInSection

Get pages for a specific section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |

#### Returns

- Body
    - GetPagesInSectionResponse

### Get recent notebooks

- Operation ID:
    - GetNotebooks

Get recent notebooks.

#### Returns

- response
    - array of Notebook

### Get sections in notebook

- Operation ID:
    - GetSectionsInNotebook

Get sections in a specific notebook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of SectionListItem |  |

### Update page content

- Operation ID:
    - UpdatePageContent

Update HTML page content.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |
| Page Id | pageId | True | string | Unique id of the page. |
| Target | target |  | string | The element to update. |
| Action | action |  | string | The action to perform on the target element. |
| Location | position |  | string | The location to add the supplied content. |
| Content | content |  | html | The new content. |

#### Returns

The page HTML content

- response
    - string

## Triggers

| When a new page is created in a section | Triggers a flow when a new page is added to a section. |
| --- | --- |
| When a new section group is created | Triggers a flow when a new section group is added to a notebook. |
| When a new section is created | Triggers a flow when a new section is added to a notebook. |

### When a new page is created in a section

- Operation ID:
    - OnNewPageInSection

Triggers a flow when a new page is added to a section.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |
| Notebook section | sectionId | True | string | API URL of the section pages. |

#### Returns

Response for a new page.

- Body
    - NewPageResponse

### When a new section group is created

- Operation ID:
    - OnNewSectionGroupInNotebook

Triggers a flow when a new section group is added to a notebook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |

#### Returns

Response for a new section group.

- Body
    - NewSectionGroupResponse

### When a new section is created

- Operation ID:
    - OnNewSectionInNotebook

Triggers a flow when a new section is added to a notebook.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Notebook Key | notebookKey | True | string | A key identifying the notebook. Note this is specific to the API and cannot be hand-typed. |

#### Returns

Response for a new section.

- Body
    - NewSectionResponse

## Definitions

### CreateSectionInNotebookResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OData context | @odata.context | string | The OData context. |
| Created by name | createdBy | string | This section created by name. |
| Created time | createdTime | date-time | This section created time. |
| Create section in notebook object id | id | string |  |
| Default section flag | isDefault | boolean | A flag to indication if this is the default section. |
| Last Modified By | lastModifiedBy | string | Last modified by name. |
| Last Modified Time | lastModifiedTime | date-time | The time this section was last modified. |
| Desktop client href | links.oneNoteClientUrl.href | string | OneNote desktop client href. |
| Web client href | links.oneNoteWebUrl.href | string | OneNote web client href. |
| Section Name | name | string | The name of the section. |
| The pages Url | pagesUrl | string | The url of the pages. |
| Url to create section in notebook | self | string | The url to create section in notebook group. |

### Page

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Page title | title | string | The title of the page. |
| links | links | Link | The links associated with the OneNote page. |
| Content Url | contentUrl | string | A url to the page content. |
| Last Modified Date | lastModifiedTime | date-time | The last modified date of the page. |
| Created Date | createdTime | date-time | The date the page was created. |
| Id | id | string | The unique identifier of the page. |

### Notebook

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| FileName | FileName | string |  |
| Key | Key | string |  |

### ParentNotebook

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Parent Notebook Key | id | string | The unique identifier of the parent notebook. |
| Parent Notebook Name | name | string | The name of the parent notebook. |
| Parent Notebook Url | self | string | A url link to the parent notebook. |

### Link

The links associated with the OneNote page.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| oneNoteClientUrl | oneNoteClientUrl | OneNoteClientUrl |  |
| oneNoteWebUrl | oneNoteWebUrl | OneNoteWebUrl |  |

### OneNoteClientUrl

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OneNote client url | href | string | A link to the notebook using the OneNote windows client. |

### OneNoteWebUrl

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OneNote web url | href | string | A link to the notebook using the OneNote web client. |

### SectionListItem

The fields included in a section list item.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Section name | name | string | The name of the section. |
| Section key | pagesUrl | string | The key used to reference this section; also a url to the pages. |
| Section Identifier | id | string | Unique identifier of the section. |

### SectionResponse

The fields included in a section.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Creator | createdBy | string | The creator of the section. |
| Creation Date | createdTime | date-time | The creation date and time of the section. |
| Section Identifier | id | string | Unique identifier of the section. |
| Last Modified By | lastModifiedBy | string | The user who last modified the section. |
| Last Modified Date | lastModifiedTime | date-time | The last modified date and time of the section. |
| Section Name | name | string | The name of the section. |
| Pages Url | pagesUrl | string | Url to the pages in this section. |
| parentNotebook | parentNotebook | ParentNotebook |  |
| Url | self | string | The url to this section. |

### SectionGroupResponse

The fields included in a section group.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Creation date | createdTime | date-time | The creation date and time of the section group. |
| Creator | createdBy | string | The creator of the section group. |
| Identifier | id | string | Unique identifier of the section group. |
| Last modifier | lastModifiedBy | string | The user who last modified the section group. |
| Last modified date | lastModifiedTime | date-time | The last modification date and time of the section group. |
| Name | name | string | The name of the section group. |
| Sections Url | sectionsUrl | string | Url of the sections within this section group. |
| Section Group Url | self | string | The url to this section group. |

### NewSectionResponse

Response for a new section.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Sections | value | array of SectionResponse | An array of objects, each representing a specific section. |

### NewSectionGroupResponse

Response for a new section group.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Section Groups | value | array of SectionGroupResponse | An array of objects, each representing a specific section group. |

### NewPageResponse

Response for a new page.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Pages | value | array of Page | An array of objects, each representing a specific page. |

### GetPagesInSectionResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| OData context | @odata.context | string | The OData context. |
| Pages in section value object | value | array of object | value |
| Content Url | value.contentUrl | string | The content url. |
| Created by app id | value.createdByAppId | string | The created by app id. |
| Created time | value.createdTime | date-time | The created time for this response. |
| Unique identifier for response | value.id | string | The unique identifier for this response. |
| Last modified time | value.lastModifiedTime | date-time | The last modified time for this object. |
| OneNote desktop client href | value.links.oneNoteClientUrl.href | string | OneNote desktop client href. |
| OneNote web client href | value.links.oneNoteWebUrl.href | string | OneNote web client href. |
| Parent section unique identifier | value.parentSection.id | string | The unique identifier for this object parent section. |
| Parent section name | value.parentSection.name | string |  |
| Pages in Section parent section | value.parentSection.self | string | The url to the pages in section parent section. |
| Parent Section OData context | value.parentSection@odata.context | string | Parent Section OData context. |
| Pages In Section group | value.self | string | The url to the Pages In Section group. |
| Page title | value.title | string | Page title. |

### string

This is the basic data type 'string'.