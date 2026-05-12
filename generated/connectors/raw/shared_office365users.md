---
layout: Reference
title: Office 365 Users - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/office365users/
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
document_id: c8635712-d5a2-e58a-301f-cf849f2cf2e4
document_version_independent_id: 4cfdd73e-f074-0446-2aee-2dd013a8b30f
updated_at: 2026-04-30T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/office365users/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/2c7dc167f9b82a0072e283bc2f0866b53f80c3aa/docs/office365users/index.yml
git_commit_id: 2c7dc167f9b82a0072e283bc2f0866b53f80c3aa
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: office365users/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/office365users/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/6ab06385-661e-4214-8870-bbe4071c960d
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/12ed19f9-ebdf-4c8a-8bcd-7a681836774d
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/131ba09e-4280-4ae7-8622-1f9f1c0daad1
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3a764584-4f97-452b-8f1d-36f19b12f6ae
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
platformId: 04c2de3f-c661-831b-11a1-9d2eb6c1e7b6
---

# Office 365 Users

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1807/1.0.1807.4725/office365users/icon.png)
Office 365 Users Connection provider lets you access user profiles in your organization using your Office 365 account. You can perform various actions such as get your profile, a user's profile, a user's manager or direct reports and also update a user profile.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Office 365 Users |
| URL | [https://learn.microsoft.com/en-us/connectors/office365users/](/en-us/connectors/office365users/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://www.office.com/ |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | AI;Business Intelligence |

To use this connector in Power Apps, learn more [here](https://powerapps.microsoft.com/tutorials/connection-office365-users/).

## Known Issues and Limitations

The followings are some of the known limitations of using Office 365 Users connector.

1. To use this integration, you will need access to an Office 365 mailbox that has the REST API enabled. To make a connection, select **Sign In**. You will be prompted to provide your Office 365 account, follow the remainder of the screens to create a connection.
2. The connector does not support Government Community Cloud High (GCCH) accounts in LogicApps US Government Cloud.
3. If you see an error using the connector, please check that the REST API is enabled. Accounts on a dedicated (on-premise) mail server or accounts that are sandbox (test) accounts may also see an error. Your administrator can learn how to migrate a mailbox [here](https://support.microsoft.com/help/2798131/how-to-migrate-mailbox-data-by-using-the-exchange-admin-center-in-offi). Additionally, if you are using an EWS application access policy, please ensure that the following user-agents are allowed: "**LogicAppsDesigner/\***","**azure-logic-apps/\***","**PowerApps/\***", "**Mozilla/\***"
4. Get manager (V2)action returns "No manager found for the specified user".
    - This happens when the user does not have a manager configured in Microsoft Entra ID. Learn how to update an Microsoft Entra ID user's profile to configure a manager [here](/en-us/azure/active-directory/active-directory-users-profile-azure-portal).
5. Get direct reports (V2), Get manager (V2), Get my profile (V2) and Get user profile (V2) actions declare an input parameter `Select fields`. You can specify a coma separated list of fields to select in this parameter (learn more about available fields [here](https://developer.microsoft.com/graph/docs/api-reference/v1.0/resources/user#properties)). For example:
    - `department, jobTitle`
    - `displayName, surname, mailNickname, userPrincipalName`
6. If the parameter is not specified, the following fields are selected by default: aboutMe, accountEnabled, birthday, businessPhones, city, companyName, country, department, displayName, givenName, hireDate, id, interests, jobTitle, mail, mailNickname, mobilePhone, mySite, officeLocation, pastProjects, postalCode, preferredLanguage, preferredName, responsibilities, schools, skills, state, streetAddress, surname, userPrincipalName, userType.
7. Get direct reports (V2), Get manager (V2), Get my profile (V2) and Get user profile (V2) actions may fail with `403 Forbidden` error if some of the fields that are selected by default as stated above are blocked by your tenant policies. Please contact your tenant admin to allowlist the fields or try specifying `Select fields`parameter explicitly.
    - Make sure that **Everyone except external users** has permissions to `My Site Host` for both “My setting” and “Permission” sections in SharePoint Admin center in order to query the fields that are selected by default as stated above.
8. Conditional Access policies can prevent the connector from running as expected. Example of an error: "AADSTS53003: Access has been blocked by Conditional Access policies. The access policy does not allow token issuance.". Please refer to [Microsoft Entra ID Conditional Access documentation](/en-us/azure/active-directory/conditional-access/) for more details.
9. Get my profile (V2) action may fail with `401 Unauthorized` error when used by guest users. To workaround this, try specifying `Select fields` parameter explicitly to: `id, displayName, givenName, surname, mail, mailNickname, accountEnabled, userPrincipalName, department, jobTitle, mobilePhone, businessPhones, city, companyName, country, officeLocation, postalCode`.
10. SearchUser (v2) may fail with `403 Insufficient privileges to complete the operation`error.
    - **Guest users are limited by design.** An alternative suggestion is to create a user list populated by the Office365 user list on SharePoint, and then use this list as your data source.
    - Additionally, restricting the access rights of guests can enhance the information security of your organization. It is recommended to evaluate the security implications of this operation.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Not shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1000 | 60 seconds |

## Actions

| Get direct reports (V1) [DEPRECATED] | This action has been deprecated. Please use [Get direct reports (V2)](/en-us/connectors/office365users/#get-direct-reports-%28v2%29) instead.<br><br>~~Retrieves the user profiles of the specified user's direct reports.~~ |
| --- | --- |
| Get direct reports (V2) | Retrieves the user profiles of the specified user's direct reports. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties |
| Get manager (V1) [DEPRECATED] | This action has been deprecated. Please use [Get manager (V2)](/en-us/connectors/office365users/#get-manager-%28v2%29) instead.<br><br>~~Retrieves the profile of the specified user's manager.~~ |
| Get manager (V2) | Retrieves the profile of the specified user's manager. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties |
| Get my profile (V1) [DEPRECATED] | This action has been deprecated. Please use [Get my profile (V2)](/en-us/connectors/office365users/#get-my-profile-%28v2%29) instead.<br><br>~~Retrieves the profile of the current user.~~ |
| Get my profile (V2) | Retrieves the profile of the current user. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties |
| Get my trending documents | Retrieves the trending documents for the signed in user |
| Get relevant people | Get relevant people. |
| Get trending documents | Retrieves the trending documents for a user |
| Get user photo (V1) [DEPRECATED] | This action has been deprecated. Please use [Get user photo (V2)](/en-us/connectors/office365users/#get-user-photo-%28v2%29) instead.<br><br>~~Retrieves the photo of the specified user if they have one.~~ |
| Get user photo (V2) | Retrieves the photo of the specified user if they have one |
| Get user photo metadata | Get user photo metadata. |
| Get user profile (V1) [DEPRECATED] | This action has been deprecated. Please use [Get user profile (V2)](/en-us/connectors/office365users/#get-user-profile-%28v2%29) instead.<br><br>~~Retrieves the profile of a specific user.~~ |
| Get user profile (V2) | Retrieves the profile of a specific user. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties |
| Search for users (V2) | Retrieves the user profiles that match the search term (V2). |
| Search for users [DEPRECATED] | This action has been deprecated. Please use [Search for users (V2)](/en-us/connectors/office365users/#search-for-users-%28v2%29) instead.<br><br>~~Retrieves the user profiles that match the search term.~~ |
| Send an HTTP request | Construct a Microsoft Graph REST API request to invoke. These segments are supported: 1st segement: /me, /users/&lt;userId&gt; 2nd segment: messages, mailFolders, events, calendar, calendars, outlook, inferenceClassification. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api). |
| Update my profile | Updates the profile of the current user |
| Update my profile photo | Updates the profile photo of the current user. The size of the photo must be less than 4 MB. |

### Get direct reports (V1) [DEPRECATED]

- Operation ID:
    - DirectReports

This action has been deprecated. Please use [Get direct reports (V2)](/en-us/connectors/office365users/#get-direct-reports-%28v2%29) instead.

~~Retrieves the user profiles of the specified user's direct reports.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

- response
    - array of User

### Get direct reports (V2)

- Operation ID:
    - DirectReports\_V2

Retrieves the user profiles of the specified user's direct reports. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | id | True | string | User principal name or id. |
| Select fields | $select |  | string | Comma separated list of fields to select. Example: surname, department, jobTitle |
| Top | $top |  | integer | Limit on the number of results to return. By default returns all entries. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphUser\_V1 | Value |

### Get manager (V1) [DEPRECATED]

- Operation ID:
    - Manager

This action has been deprecated. Please use [Get manager (V2)](/en-us/connectors/office365users/#get-manager-%28v2%29) instead.

~~Retrieves the profile of the specified user's manager.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

Represents a User object in the directory

- Body
    - User

### Get manager (V2)

- Operation ID:
    - Manager\_V2

Retrieves the profile of the specified user's manager. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | id | True | string | User principal name or id. |
| Select fields | $select |  | string | Comma separated list of fields to select. Example: surname, department, jobTitle |

#### Returns

User from Graph API

- Body
    - GraphUser_V1

### Get my profile (V1) [DEPRECATED]

- Operation ID:
    - MyProfile

This action has been deprecated. Please use [Get my profile (V2)](/en-us/connectors/office365users/#get-my-profile-%28v2%29) instead.

~~Retrieves the profile of the current user.~~

#### Returns

Represents a User object in the directory

- Body
    - User

### Get my profile (V2)

- Operation ID:
    - MyProfile\_V2

Retrieves the profile of the current user. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Select fields | $select |  | string | Comma separated list of fields to select. Example: surname, department, jobTitle |

#### Returns

User from Graph API

- Body
    - GraphUser_V1

### Get my trending documents

- Operation ID:
    - MyTrendingDocuments

Retrieves the trending documents for the signed in user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Filter query | $filter |  | string | An OData filter to filter the resources selected. Filter selected resources on ResourceVisualization/Type or ResourceVisualization/containerType |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label ( false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphTrending | value |

### Get relevant people

- Operation ID:
    - RelevantPeople

Get relevant people.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

Represents a list from the Graph API

- Body
    - LinklessEntityListResponse[List[Person]]

### Get trending documents

- Operation ID:
    - TrendingDocuments

Retrieves the trending documents for a user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | id | True | string | User principal name or id. |
| Filter query | $filter |  | string | An OData filter to filter the resources selected. Filter selected resources on ResourceVisualization/Type or ResourceVisualization/containerType |
| Extract Sensitivity Label | extractSensitivityLabel |  | boolean | Select if you want to extract Sensitivity label ( false, true). |
| Sensitivity Label Metadata | fetchSensitivityLabelMetadata |  | boolean | A boolean whether to fetch sensitivity label Metadata for associated LabelId. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GraphTrending | value |

### Get user photo (V1) [DEPRECATED]

- Operation ID:
    - UserPhoto

This action has been deprecated. Please use [Get user photo (V2)](/en-us/connectors/office365users/#get-user-photo-%28v2%29) instead.

~~Retrieves the photo of the specified user if they have one.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

- Image file content
    - binary

### Get user photo (V2)

- Operation ID:
    - UserPhoto\_V2

Retrieves the photo of the specified user if they have one

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | id | True | string | User principal name or id. |

#### Returns

- Image file content
    - binary

### Get user photo metadata

- Operation ID:
    - UserPhotoMetadata

Get user photo metadata.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

Photo Metadata class

- Body
    - ClientPhotoMetadata

### Get user profile (V1) [DEPRECATED]

- Operation ID:
    - UserProfile

This action has been deprecated. Please use [Get user profile (V2)](/en-us/connectors/office365users/#get-user-profile-%28v2%29) instead.

~~Retrieves the profile of a specific user.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | userId | True | string | User principal name or id. |

#### Returns

Represents a User object in the directory

- Body
    - User

### Get user profile (V2)

- Operation ID:
    - UserProfile\_V2

Retrieves the profile of a specific user. Learn more about available fields to select: https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/user#properties

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User (UPN) | id | True | string | User principal name or id. |
| Select fields | $select |  | string | Comma separated list of fields to select. Example: surname, department, jobTitle |

#### Returns

User from Graph API

- Body
    - GraphUser_V1

### Search for users (V2)

- Operation ID:
    - SearchUserV2

Retrieves the user profiles that match the search term (V2).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search term | searchTerm |  | string | Search string (applies to: display name, given name, surname, mail, mail nickname and user principal name). |
| Top | top |  | integer | Limit on the number of results to return. Minimum value is 1. Default value is 1000. |
| Is search term required | isSearchTermRequired |  | boolean | If set to 'Yes' then no user profiles will be returned when the search term is empty. If set to 'No' then no filtering will be applied when the search term is empty. |

#### Returns

Class representing entity list response from an Office API.

- Body
    - EntityListResponse[IReadOnlyList[User]]

### Search for users [DEPRECATED]

- Operation ID:
    - SearchUser

This action has been deprecated. Please use [Search for users (V2)](/en-us/connectors/office365users/#search-for-users-%28v2%29) instead.

~~Retrieves the user profiles that match the search term.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Search term | searchTerm |  | string | Search string (applies to: display name, given name, surname, mail, mail nickname and user principal name). |
| Top | top |  | integer | Limit on the number of results to return. By default returns all entries. |

#### Returns

- response
    - array of User

### Send an HTTP request

- Operation ID:
    - HttpRequest

Construct a Microsoft Graph REST API request to invoke. These segments are supported: 1st segement: /me, /users/&lt;userId&gt; 2nd segment: messages, mailFolders, events, calendar, calendars, outlook, inferenceClassification. Learn more: [https://docs.microsoft.com/en-us/graph/use-the-api](/en-us/graph/use-the-api).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| URI | Uri | True | string | The full or relative URI. Example: `https://graph.microsoft.com/{version}/{resource}`. |
| Method | Method | True | string | The HTTP method (default is GET). |
| Body | Body |  | binary | The request body content. |
| Content-Type | ContentType |  | string | The content-type header for the body (default is application/json). |
| CustomHeader1 | CustomHeader1 |  | string | Custom header 1. Specify in format: header-name: header-value |
| CustomHeader2 | CustomHeader2 |  | string | Custom header 2. Specify in format: header-name: header-value |
| CustomHeader3 | CustomHeader3 |  | string | Custom header 3. Specify in format: header-name: header-value |
| CustomHeader4 | CustomHeader4 |  | string | Custom header 4. Specify in format: header-name: header-value |
| CustomHeader5 | CustomHeader5 |  | string | Custom header 5. Specify in format: header-name: header-value |

#### Returns

- response
    - ObjectWithoutType

### Update my profile

- Operation ID:
    - UpdateMyProfile

Updates the profile of the current user

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| About Me | aboutMe |  | string | About Me |
| Birthday | birthday |  | date-time | Birthday |
| Interests | interests |  | array of string | Interests |
| My Site | mySite |  | string | My Site |
| Past Projects | pastProjects |  | array of string | Past Projects |
| Schools | schools |  | array of string | Schools |
| Skills | skills |  | array of string | Skills |

### Update my profile photo

- Operation ID:
    - UpdateMyPhoto

Updates the profile photo of the current user. The size of the photo must be less than 4 MB.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Image content | body | True | binary | Image content |
| Content-Type | Content-Type | True | string | Image content type (like 'image/jpeg') |

## Definitions

### GraphTrending

Trending documents from Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Unique identifier of the relationship |
| Weight | weight | float | Value indicating how much the document is currently trending |
| Resource visualization | resourceVisualization | resourceVisualization | resourceVisualization |
| sensitivityLabelInfo | sensitivityLabelInfo | array of sensitivityLabelMetadata |  |

### resourceVisualization

resourceVisualization

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Title | title | string | The item's title text |
| Type | type | string | The item's media type (can be used for filtering for a specific file based on a specific type) |
| Media type | mediaType | string | The items media type (can be used for filtering for a specific type of file based on supported IANA Media MIME types) |
| Preview image URL | previewImageUrl | string | A URL leading to the preview image for the item |
| Preview text | previewText | string | A preview text for the item |
| Container web URL | containerWebUrl | string | A path leading to the folder in which the item is stored |
| Container display name | containerDisplayName | string | A string describing where the item is stored |
| Container type | containerType | string | Can be used for filtering by the type of container in which the file is stored |

### sensitivityLabelMetadata

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

### LinklessEntityListResponse[List[Person]]

Represents a list from the Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Person | Value |

### Person

Represents a Person

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Person id | id | string | A unique identifier for the Person object in the directory |
| Display name | displayName | string | The person's display name |
| Given name | givenName | string | The person's given name |
| Surname | surname | string | The person's surname |
| Birthday | birthday | string | The person's birthday |
| Person Notes | personNotes | string | Free-form notes that the current user has taken about this person |
| Is Favorite? | isFavorite | boolean | If the current user has flagged this person as a favorite |
| Job title | jobTitle | string | The person's job title |
| Company name | companyName | string | The name of the person's company |
| Department | department | string | The person's department |
| Office location | officeLocation | string | The location of the person's office |
| Profession | profession | string | The person's profession |
| User Principal Name (UPN) | userPrincipalName | string | The user principal name(UPN) of the user.The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name.The general format is alias @domain, where domain must be present in the tenant's collection of verified domains. |
| IM Address | imAddress | string | The person's VOIP SIP address |
| Scored Email Addresses | scoredEmailAddresses | array of ScoredEmailAddress | Collection of the person's email addresses with a relevance score |
| Phones | phones | array of Phone | The person's phone numbers |

### ScoredEmailAddress

Represents a scored email address

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Email Address | address | string | The email address |
| Relevance Score | relevanceScore | double | The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user's communication and collaboration patterns and business relationships. |

### Phone

Represents a phone number

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Phone Number | number | string | The phone number |
| Phone Type | type | string | The type of phone number. Possible values: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio. |

### User

Represents a User object in the directory

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| User id | Id | string | A unique identifier for the user object in the directory. |
| Account enabled? | AccountEnabled | boolean | true if the account is enabled; otherwise, false. This property is required when a user is created. |
| Business phones | BusinessPhones | array of string | A list of business phone numbers for the user |
| City | City | string | The city in which the user is located. |
| Company name | CompanyName | string | The name of the company in which the user works. |
| Country | Country | string | The country/region in which the user is located; for example, "US" or "UK". |
| Department | Department | string | The name of the department in which the user works. |
| Display name | DisplayName | string | The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. |
| Given name | GivenName | string | The given name (first name) of the user. |
| Job title | JobTitle | string | The user’s job title. |
| Email | Mail | string | The SMTP/email address for the user, for example, "jeff@contoso.onmicrosoft.com". Read-Only. |
| Nickname | MailNickname | string | The mail alias for the user. This property must be specified when a user is created. |
| Office location | OfficeLocation | string | The office location in the user's place of business. |
| Postal code | PostalCode | string | The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. |
| Surname | Surname | string | The user's surname (family name or last name). |
| Telephone number | TelephoneNumber | string | The primary cellular telephone number for the user. |
| User Principal Name (UPN) | UserPrincipalName | string | The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user’s email name. The general format is alias@domain, where domain must be present in the tenant’s collection of verified domains. |

### ClientPhotoMetadata

Photo Metadata class

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Has photo | HasPhoto | boolean | Has photo |
| Height | Height | integer | Height of photo |
| Width | Width | integer | Width of photo |
| ContentType | ContentType | string | Content Type of photo |
| Image File Extension | ImageFileExtension | string | File extension for the photo (ex: ".jpg") |

### EntityListResponse[IReadOnlyList[User]]

Class representing entity list response from an Office API.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of User | Value |
| @odata.nextLink | @odata.nextLink | string | Next page link |

### GraphUser\_V1

User from Graph API

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| About Me | aboutMe | string | About Me |
| Account enabled? | accountEnabled | boolean | true if the account is enabled; otherwise, false. This property is required when a user is created. |
| Birthday | birthday | date-time | Birthday |
| Business Phones | businessPhones | array of string | Business Phones |
| City | city | string | The city in which the user is located. |
| Company name | companyName | string | The name of the company in which the user works. |
| Country | country | string | The country/region in which the user is located; for example, "US" or "UK". |
| Department | department | string | The name of the department in which the user works. |
| Display Name | displayName | string | Display Name |
| Given Name | givenName | string | Given Name |
| Hire Date | hireDate | date-time | Hire Date |
| Id | id | string | Id |
| Interests | interests | array of string | Interests |
| Job Title | jobTitle | string | Job Title |
| Mail | mail | string | Mail |
| Nickname | mailNickname | string | The mail alias for the user. This property must be specified when a user is created. |
| Mobile Phone | mobilePhone | string | Mobile Phone |
| My Site | mySite | string | My Site |
| Office Location | officeLocation | string | Office Location |
| Past Projects | pastProjects | array of string | Past Projects |
| Postal code | postalCode | string | The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. |
| Preferred Language | preferredLanguage | string | Preferred Language |
| Preferred Name | preferredName | string | Preferred Name |
| Responsibilities | responsibilities | array of string | Responsibilities |
| Schools | schools | array of string | Schools |
| Skills | skills | array of string | Skills |
| State | state | string | State |
| Street Address | streetAddress | string | Street Address |
| Surname | surname | string | Surname |
| User Principal Name | userPrincipalName | string | User Principal Name |
| User Type | userType | string | User Type |

### ObjectWithoutType

### binary

This is the basic data type 'binary'.