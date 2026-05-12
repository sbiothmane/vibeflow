---
layout: Reference
title: Word Online (Business) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/wordonlinebusiness/
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
document_id: d39ce977-b1fc-d4be-3776-ad31a5b780ec
document_version_independent_id: 21c81572-7742-f033-cdc1-07c1090e9878
updated_at: 2025-08-06T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/wordonlinebusiness/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/4b84da19b1d2d4484eb2966ade81f35b967697f4/docs/wordonlinebusiness/index.yml
git_commit_id: 4b84da19b1d2d4484eb2966ade81f35b967697f4
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: wordonlinebusiness/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/wordonlinebusiness/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/7e593268-8d01-46ef-aa78-9d1388e6a294
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/9d7be3ef-f27c-4c7f-9eba-67c3cd429995
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/264d03ab-bab8-454b-a56c-0fedead7f602
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/feeb50f3-b677-44f9-b3a6-5f2f58182b0d
platformId: b8de444d-15f2-a6d0-6f52-ddc48ff61bca
---

# Word Online (Business)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1762/1.0.1762.4304/wordonlinebusiness/icon.png)
Word Online (Business) connector lets you work with Word files in document libraries supported by Microsoft Graph (OneDrive for Business, SharePoint Online Sites, and Office 365 Groups).

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [https://learn.microsoft.com/en-us/connectors/wordonlinebusiness/](/en-us/connectors/wordonlinebusiness/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://products.office.com/en-us/word |
| Privacy policy | https://privacy.microsoft.com/en-us/privacystatement |
| Categories | Content and Files |

## How to create Microsoft Word templates

You can build Microsoft Word templates on either Windows or your Mac by [enabling the Developer tab](https://support.office.com/article/show-the-developer-tab-e1192344-5e56-4d45-931b-e5fd9bea2d45). Once you have enabled that tab, under the **Controls** section you can add [any content controls](https://support.office.com/article/create-forms-that-users-complete-or-print-in-word-040c5cc1-e309-445b-94ac-542f732c8c8b) into your document (see below what is the list of currently supported controls). Use the control **Properties** to give the control a friendly name that you will use in the Power Automate. Once you are done creating your Word document, save it to one of the document libraries supported by Microsoft Graph: OneDrive for Business, SharePoint Sites, and Office 365 Groups.

Now, you can start building the flow. Add the **Populate a Microsoft Word template** action to your flow, and when you select that file you should see a list of all the controls that you added. Populate these fields with values you'll want to insert in the new Microsoft Word Document. Finally, you can then use the outputs of the action and send an email, save the document to another location, or any number of other actions.

## Currently Supported Content Controls

- Plain Text Content Control
- Combo Box Content Control
- Drop-Down List Content Control
- Image Content Control
- Repeating Section Content Control

## Known issues and limitations

1. The Microsoft Word (Business) connector doesn't currently support the following content controls:
    - Rich Text Content Control
    - Building Block Gallery Content Control
    - Date Picker Content Control
    - Check Box Content Control
    - Legacy form controls
2. The maximum size of the input file for both actions of this connector is 10MB
3. Nested image content controllers are not supported.
4. New line characters will be rendered when "Allow carriage returns (multiple paragraphs)" setting is turned on in the content controller properties.
5. Developer tab is not available on Word online, in addition when editing a generated document it is recommended to use the Word desktop client.
6. Template creation in Word for Mac is not supported.
7. DisplayBarcode field codes are not supported for the Convert to PDF action.
8. SharePoint On-Premises is not supported.
9. When using mailto links multiple addresses are not supported (Ex: mailto:emailAddress1@contoso.com;emailAddress2@contoso.com?subject=MyEmailSubject). As a workaround if using mailto links with two addresses users can specify a cc field instead (Ex: `emailAddress1@contoso.com?cc=emailAddress2@contoso.com?subject=MyEmailSubject`) or alternately to use a single address distribution address instead.
10. Content controller names within the document template have to be unique
11. Images are not supported within headers in word templates
12. When using the file created from this connector, adding a small delay (~1min) would ensure the file is available in follow up actions.
13. If a Multi-factor Authentication (MFA) conditional access policy is enabled, the Populate a Microsoft Word template action cannot be used.
14. Documents must be able to convert in less than 2 minutes or the request will time out.
15. Images uploaded using **Populate a Microsoft Word template** does not automatically resize to its aspect ratio. Image will take size of Image content controller set when creating template. Users need to manually resize.
16. Content controls will be locked for editing, greyed out and spelling checks in Word desktop application for files generated using **Populate a Microsoft Word template** action.

- As a workaround , When adding any content control while creating the template, double-click on control to remove the existing text and replace it with the required display text. This allows users to edit the content of word document generated from template using power automate

1. If Unicode characters display correctly in Word’s default export, they will also work with action convertFile in Word Online Connector. By default, Microsoft Word does not fully embed all fonts, especially for PUA characters or non-standard glyphs for example Yu Mincho font which uses private-use area (PUA) characters, these aren't part of standard Unicode and require font embedding in the PDF to render correctly.
2. The Convert Word Document to PDF action does not support files marked with sensitivity label values of "Confidential" or "Highly Confidential".

## Guide for using Repeating Section Content Control in the Word Online connector.

We're enabling repeating tables in the Word Online connector. When creating a template in Word, you need to add the Repeating Section Content Control. This is the control in the developer tab that helps us create a repeating table. Repeating Section Content Control enables users to repeat rows in a table and plain text. Here is a guide to work with the Repeating Section Content Control:

1. To make a template with repeating text: First add a Repeating Section Content Control from the developer tab. Then add Plain Text Content Controllers within the parent repeat content controller. Any text that is outside a nested content controller would be static. **While adding the nested content controllers, make sure to go to properties and add a unique title for them.** For example, if the template looks like `<repeat> I would like to <plain> a </plain> and <plain> b </plain> </repeat>` then the user can dynamically change the values of `a` and `b`.
2. To add a repeating row to the template, simply add a table, select the full row (which you want to repeat) and select the repeat content controller from the developer tab. Now you can add nested plain text content controllers in the columns that you want to be dynamic. **While adding the nested content controllers, make sure to go to properties and add a unique title for them.**
3. Once you have added a Repeating Section Content Control, the nested content controllers would show up in the Word connector action. You can click on the "Add new item" button to add a new row. If the number of rows you want is dynamic, then user should make a array of values and pass it into the repeat field. For example, a valid array for the above example would look like: [{"a": "value for row 1", "b": "value for row 1"}, {"a": "value for row 2", "b": "value for row 2"}] Here the keys of the objects are the titles of the nested content controllers. Hence, adding a unique title is necessary. This array can be easily constructed using the "Select" data operation by mapping the values of an array with data to the input array.

![Select data operation example](media/selectactionscreenshot.png)

Additional notes:

- To format the table simply format the text and table in the template and the formatting would persist in the generated document.
- If there is no title for a nested content controller in repeat, it would be get a random title.
- If there is a duplicate title, both the content controllers will be replaced with the same content

## Guide for using Images in the Word Online connector.

1. Add an Image content controller in your template. Don’t delete the placeholder image. You can re-size and re-position it.
2. Add a title property to the image content controller so that you can easily identify it in the Power Automate designer.
3. When the image field shows up in the designer, add file contents of a JPG or PNG image as the value. The value should look like this: { "$content-type": "image/png", "$content": "iVBORw0KG...i/DhQmCC" } where the content is the base64 encoded image.

## Guide for formatting the generated Word document in the Word Online connector.

Any formatting done on text, image or table in the template would persist in the generated document. To add formatting to an empty content controller, you can go to properties of the content controller and check the "Use a style to format text typed into the empty control". Then you can add new styling.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Convert Word Document to PDF | Gets a PDF version of the selected file |
| --- | --- |
| Create a Microsoft Word document with the given content | Creates a Microsoft Word file with the given content in the root directory (use only from Copilot Studio) |
| Populate a Microsoft Word template | Reads a Microsoft Word template to then fill the template fields with selected dynamic values to generate a Word Document. |

### Convert Word Document to PDF

- Operation ID:
    - GetFilePDF

Gets a PDF version of the selected file

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select a Word file through File Browse. |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label (false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

- PDF document
    - binary

### Create a Microsoft Word document with the given content

- Operation ID:
    - CreateWordFileWithContent

Creates a Microsoft Word file with the given content in the root directory (use only from Copilot Studio)

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Content | content | True | string | Content of the word document |
| File Name | fileName |  | string | Name of the file |

#### Returns

- Microsoft Word document URL
    - string

### Populate a Microsoft Word template

- Operation ID:
    - CreateFileItem

Reads a Microsoft Word template to then fill the template fields with selected dynamic values to generate a Word Document.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | source | True | string | Select from the drop-down or specify one of the following: - "me" - "SharePoint Site URL" - "users/someone's UPN" - "groups/group Id" - "sites/SharePoint Site URL:/teams/team name:" (colons are required). |
| Document Library | drive | True | string | Select a document library from the drop-down. |
| File | file | True | string | Select a Word file through File Browse. |
| dynamicFileSchema | dynamicFileSchema |  | dynamic | Dynamic Schema of items in selected File |

#### Returns

- Microsoft Word document
    - binary

## Definitions

### string

This is the basic data type 'string'.

### binary

This is the basic data type 'binary'.