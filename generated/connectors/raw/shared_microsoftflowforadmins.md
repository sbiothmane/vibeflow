---
layout: Reference
title: Power Automate for Admins - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/microsoftflowforadmins/
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
document_id: f99a610e-3726-b491-2da9-f6a73e6cb4e4
document_version_independent_id: c98a93ec-d598-a085-5d59-8fc47ad12dc0
updated_at: 2025-10-29T01:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/microsoftflowforadmins/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0/docs/microsoftflowforadmins/index.yml
git_commit_id: d459c69c9065cf5e5fd6ab20606ad73c60f8e4b0
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: microsoftflowforadmins/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/microsoftflowforadmins/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: c0703734-1fc3-3cfc-d960-7c350b8a7285
---

# Power Automate for Admins

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/microsoftflowforadmins/icon.png)
Power Automate Management Connector for Administrators. Service Principal authentication is not supported for administrative actions involving user details.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://admin.powerplatform.microsoft.com/ |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Not shareable |
| Microsoft Entra ID Integrated | Use Microsoft Entra ID to access this service. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Client Certificate Auth

Auth ID: CertOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string |  | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |

### Microsoft Entra ID Integrated

Auth ID: firstParty

Applicable: All regions

Use Microsoft Entra ID to access this service.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Disable Flow as Admin | Disables a Flow. |
| --- | --- |
| Edit Flow Owner Role as Admin | Sets permissions for a Flow. |
| Enable Flow as Admin | Enables a Flow. |
| Get Flow Owner Role as Admin | Returns permissions for a Flow. |
| Get Flow User Details | Returns the details of a specified user in the scope of Power Automate. |
| Remove Flow as Admin | Deletes a Flow. |
| Remove Flow User Details | Deletes a Power Automate user details record. |

### Disable Flow as Admin

- Operation ID:
    - Disable-AdminFlow

Disables a Flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Flow Name | flow | True | string | Name field of the Flow. |
| Field API Version | api-version |  | string | The date value of the API version. |

### Edit Flow Owner Role as Admin

- Operation ID:
    - Edit-AdminFlowOwnerRole

Sets permissions for a Flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Flow Name | flow | True | string | Name field of the flow. |
| Field API Version | api-version |  | string | The date value of the API version. |
| Field Content-Type | Content-Type |  | string | Name Field of the Content-Type. |
| id | id |  | string | Flow permission ID. |
| email | email |  | string | Flow permission principal email. |
| displayName | displayName |  | string | Flow permission principal displayName. |
| id | id |  | string | Flow permission principal object ID. |
| type | type |  | string | Flow permission principal type. |
| roleName | roleName |  | string | Flow permission property roleName. |

### Enable Flow as Admin

- Operation ID:
    - Enable-AdminFlow

Enables a Flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name field of the Environment | environment | True | string | Environment Name. |
| Flow Name | flow | True | string | Name field of the flow. |
| Field API Version | api-version |  | string | The date value of the API version. |

### Get Flow Owner Role as Admin

- Operation ID:
    - Get-AdminFlowOwnerRole

Returns permissions for a Flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Flow Name | flow | True | string | Name field of the flow. |
| Field API Version | api-version |  | string | The date value of the API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | Flow permission value object array. |
| name | value.name | string | Flow permission name field. |
| id | value.id | string | Flow permission ID field. |
| type | value.type | string | Flow permission type field. |
| roleName | value.properties.roleName | string | Flow permission property roleName. |
| permissionType | value.properties.permissionType | string | Flow permission property permission type. |
| id | value.properties.principal.id | string | Flow permission principal object ID. |
| type | value.properties.principal.type | string | Flow permission principal type. |

### Get Flow User Details

- Operation ID:
    - Get-AdminFlowUserDetails

Returns the details of a specified user in the scope of Power Automate.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Field userId | userId | True | string | Flow user principal object ID. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Tenant ID | tenantId | string | Flow user tenantId. |
| PUID | puid | string | Flow user puid. |
| Object ID | objectId | string | Flow user principal object ID. |
| Is Disallowed for Internal Plans | isDisallowedForInternalPlans | boolean | Flow user isDisallowedForInternalPlans. |
| Consent Time | consentTime | date-time | Flow user consentTime. |
| Service Settings Selection Time | serviceSettingsSelectionTime | date-time | Flow user serviceSettingsSelectionTime. |
| Consent Business App Platform Time | consentBusinessAppPlatformTime | date-time | The Flow user's consentBusinessAppPlatformTime. |

### Remove Flow as Admin

- Operation ID:
    - Remove-AdminFlow

Deletes a Flow.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Flow Name | flow | True | string | Name field of the flow. |
| Field API Version | api-version |  | string | The date value of the API version. |

### Remove Flow User Details

- Operation ID:
    - Remove-AdminFlowUserDetails

Deletes a Power Automate user details record.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Field UserId | userId | True | string | Flow user principal object ID. |