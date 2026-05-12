---
layout: Reference
title: Power Apps for Admins - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerappsforadmins/
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
document_id: 1faea297-c470-ea36-66fb-566720727487
document_version_independent_id: 5fa0970f-ea2a-a168-fb18-920f15b02725
updated_at: 2026-04-28T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/powerappsforadmins/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/38b2850b21859cf1397a730fa15d49904b4a64ed/docs/powerappsforadmins/index.yml
git_commit_id: 38b2850b21859cf1397a730fa15d49904b4a64ed
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerappsforadmins/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/powerappsforadmins/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: 4e9e00dc-cfa3-79c2-9f51-d495b59195cf
---

# Power Apps for Admins

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/powerappsforadmins/icon.png)
Power Apps Management Connector for Administrators

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
| Website | https://admin.powerapps.com/ |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1000 | 60 seconds |

## Actions

| Edit App Role Assignment as Admin | Sets permissions for a PowerApp. |
| --- | --- |
| Edit Connection Role Assignment as Admin | Sets permissions for a Connection. |
| Edit Connector Role Assignment as Admin | Sets permissions for a Connector. |
| Get App as Admin | Returns a PowerApp. |
| Get App Role Assignments as Admin | Returns permissions for a PowerApp. |
| Get Apps as Admin | Returns a list of apps. |
| Get Connection Role Assignments as Admin | Returns all permissions for a Connection. |
| Get Connections as Admin | Returns a list of Connections. |
| Get Connector Role Assignments as Admin | Returns permissions for a custom Connector. |
| Get Custom Connectors as Admin | Returns a list of custom Connectors. |
| Get PowerApp Conditional Access | Gets a PowerApp's conditional access properties. |
| Remove App as Admin | Deletes a PowerApp. |
| Remove Connection as Admin | Deletes a Connection. |
| Set App Owner | Updates a PowerApp's owner role, and specifies the old owner's new role. |
| Set App Quarantine State | Updates a PowerApp's quarantine state. |
| Set PowerApp Conditional Access | Updates a PowerApp's conditional access. |

### Edit App Role Assignment as Admin

- Operation ID:
    - Edit-AdminAppRoleAssignment

Sets permissions for a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Role Name | roleName |  | string | The name of the permission role. Choose from CanView, CanViewWithShare, and CanEdit. |
| capabilities | capabilities |  | array of string | capabilities |
| Notify Share Target Option | NotifyShareTargetOption |  | string | Notifies the new user if provided the string value 'Notify'. |
| Principal Email | email |  | string | The principal email of the user. |
| Principal Object ID | id |  | string | The principal object ID of the user. |
| Principal Type | type |  | string | The principal type of the user. |
| Tenant ID | tenantId |  | string | The principal tenant ID of the user. |
| Role ID | id |  | string | The ID field of the Role Assignment. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| put | put | array of object | App Role Assignment put object. |
| id | put.id | string | App Role Assignment ID field. |
| roleName | put.properties.roleName | string | App Role Assignment property roleName. |
| scope | put.properties.scope | string | App Role Assignment property scope. |
| id | put.properties.principal.id | string | App Role Assignment principal object ID. |
| email | put.properties.principal.email | string | App Role Assignment principal email. |
| type | put.properties.principal.type | string | App Role Assignment principal type. |
| resourceResponses | put.properties.resourceResponses | array of object | App Role Assignment resourceResponse object. |
| id | put.properties.resourceResponses.id | string | App Role Assignment resourceResponse ID. |
| statusCode | put.properties.resourceResponses.statusCode | string | App Role Assignment resourceResponse statusCode. |
| responseCode | put.properties.resourceResponses.responseCode | string | App Role Assignment resourceResponse responseCode. |
| message | put.properties.resourceResponses.message | string | App Role Assignment resourceResponse message. |
| type | put.properties.resourceResponses.type | string | App Role Assignment resourceResponse type. |

### Edit Connection Role Assignment as Admin

- Operation ID:
    - Edit-AdminConnectionRoleAssignment

Sets permissions for a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Connector Name | connector | True | string | Name field of the Connector. |
| Connection Name | connection | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |
| Field Content Type | Content-Type |  | string | The content type of the API request. |
| Role ID | id |  | string | The ID field of the Role Assignment. |
| Role Name | roleName |  | string | The name of the permission role. |
| Principal ID | id |  | string | The principal ID of the user. |

### Edit Connector Role Assignment as Admin

- Operation ID:
    - Edit-AdminConnectorRoleAssignment

Sets permissions for a Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| API Version | api-version |  | string | The date value of the API version. |
| Field Content Type | Content-Type |  | string | The content type of the API request. |
| Role ID | id |  | string | The ID field of the Role Assignment. |
| Role Name | roleName |  | string | The name of the role. |
| Principal Object ID | id |  | string | The principal object ID of the user. |

### Get App as Admin

- Operation ID:
    - Get-AdminApp

Returns a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

#### Returns

- Body
    - PowerApp

### Get App Role Assignments as Admin

- Operation ID:
    - Get-AdminAppRoleAssignment

Returns permissions for a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of App Role Assignments in the response. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | PowerApp Role Assignment value array. |
| Name | value.name | string | PowerApp Role Assignment name field. |
| id | value.id | string | PowerApp Role Assignment ID field. |
| type | value.type | string | PowerApp Role Assignment type field. |
| roleName | value.properties.roleName | string | PowerApp Role Assignment roleName. |
| id | value.properties.principal.id | string | PowerApp Role Assignment principal object ID. |
| displayName | value.properties.principal.displayName | string | PowerApp Role Assignment principal displayName. |
| email | value.properties.principal.email | string | PowerApp Role Assignment principal email. |
| type | value.properties.principal.type | string | PowerApp Role Assignment principal type. |
| scope | value.properties.scope | string | PowerApp Role Assignment scope. |
| Notify Share Target Option | value.properties.notifyShareTargetOption | string | PowerApp Role Assignment notifyShareTargetOption. |

### Get Apps as Admin

- Operation ID:
    - Get-AdminApps

Returns a list of apps.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Apps in the response. |
| Skip token | $skiptoken |  | string | Used to get next page of responses. |

#### Returns

- Body
    - ResourceArray[PowerApp]

### Get Connection Role Assignments as Admin

- Operation ID:
    - Get-AdminConnectionRoleAssignment

Returns all permissions for a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Connection Name | connectionName | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Connection Role Assignments in the response. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | Connection Role Assignment value array. |
| name | value.name | string | Connection Role Assignment name field. |
| id | value.id | string | Connection Role Assignment ID field. |
| type | value.type | string | Connection Role Assignment type field. |
| roleName | value.properties.roleName | string | Connection Role Assignment role name. |
| id | value.properties.principal.id | string | Connection Role Assignment principal object ID. |
| displayName | value.properties.principal.displayName | string | Connection Role Assignment principal displayName. |
| email | value.properties.principal.email | string | Connection Role Assignment principal email. |
| type | value.properties.principal.type | string | Connection Role Assignment principal type. |
| notifyShareTargetOption | value.properties.notifyShareTargetOption | string | Connection Role Assignment notify share target option. |

### Get Connections as Admin

- Operation ID:
    - Get-AdminConnections

Returns a list of Connections.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Connections in the response. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | Connection value array. |
| name | value.name | string | Connection name field. |
| id | value.id | string | Connection ID field. |
| type | value.type | string | Connection type field. |
| apiId | value.properties.apiId | string | Connection property apiId. |
| displayName | value.properties.displayName | string | Connection property displayName. |
| iconUri | value.properties.iconUri | string | Connection icon URI. |
| statuses | value.properties.statuses | array of object | Connection statuses. |
| status | value.properties.statuses.status | string | Connection status. |
| target | value.properties.statuses.target | string | Connection status target. |
| code | value.properties.statuses.error.code | string | Connection status error code. |
| message | value.properties.statuses.error.message | string | Connection status error message. |
| sku | value.properties.connectionParameters.sku | string | Connection parameter sku. |
| workflowName | value.properties.connectionParameters.workflowName | string | Connection parameter workflow name. |
| workflowPath | value.properties.connectionParameters.workflowPath | string | Connection parameter workflow path. |
| workflowEndpoint | value.properties.connectionParameters.workflowEndpoint | string | Connection parameter workflow endpoint. |
| workFlowCallbackUri | value.properties.connectionParameters.workFlowCallbackUri | string | Connection parameter workFlow Callback URI. |
| server | value.properties.connectionParameters.server | string | Connection parameter server. |
| database | value.properties.connectionParameters.database | string | Connection parameter database. |
| keywordsRemaining | value.properties.keywordsRemaining | integer | Connection property keywordsRemaining. |
| id | value.properties.createdBy.id | string | Connection creator principal object ID. |
| displayName | value.properties.createdBy.displayName | string | Connection creator principal display name. |
| email | value.properties.createdBy.email | string | Connection creator principal email. |
| type | value.properties.createdBy.type | string | Connection creator principal type. |
| tenantId | value.properties.createdBy.tenantId | string | Connection creator principal tenantId. |
| userPrincipalName | value.properties.createdBy.userPrincipalName | string | Connection creator user principal name. |
| createdTime | value.properties.createdTime | date-time | Connection created time. |
| lastModifiedTime | value.properties.lastModifiedTime | date-time | Connection last modified time. |
| id | value.properties.environment.id | string | Connection Environment ID. |
| name | value.properties.environment.name | string | Connection Environment name. |
| expirationTime | value.properties.expirationTime | date-time | Connection property expirationTime. |
| testLinks | value.properties.testLinks | array of object | Connection property testLinks. |
| requestUri | value.properties.testLinks.requestUri | string | Connection property testLink requestUri. |
| method | value.properties.testLinks.method | string | Connection property testLink method |

### Get Connector Role Assignments as Admin

- Operation ID:
    - Get-AdminConnectorRoleAssignment

Returns permissions for a custom Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Connector Role Assignments in the response. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| name | value.name | string | Connector Role Assignment name field. |
| id | value.id | string | Connector Role Assignment ID field. |
| type | value.type | string | Connector Role Assignment type field. |
| roleName | value.properties.roleName | string | Connector Role Assignment role name. |
| id | value.properties.principal.id | string | Connector Role Assignment principal object ID. |
| displayName | value.properties.principal.displayName | string | Connector Role Assignment principal displayName. |
| email | value.properties.principal.email | string | Connector Role Assignment principal email. |
| type | value.properties.principal.type | string | Connector Role Assignment principal type. |
| notifyShareTargetOption | value.properties.notifyShareTargetOption | string | The Name field of the notifyShareTargetOption. |

### Get Custom Connectors as Admin

- Operation ID:
    - Get-AdminConnectors

Returns a list of custom Connectors.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Custom Connectors in the response. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | value |
| name | value.name | string | Connector name field. |
| id | value.id | string | Connector id field. |
| type | value.type | string | Connector type field. |
| displayName | value.properties.displayName | string | Connector property displayName. |
| iconUri | value.properties.iconUri | string | Connector icon Uri. |
| iconBrandColor | value.properties.iconBrandColor | string | Connector icon brand color. |
| apiEnvironment | value.properties.apiEnvironment | string | Connector api Environment. |
| isCustomApi | value.properties.isCustomApi | boolean | True if the Connector is a Custom Api. |
| runtimeUrls | value.properties.runtimeUrls | array of string | runtimeUrls |
| primaryRuntimeUrl | value.properties.primaryRuntimeUrl | string | Connector primary Runtime Url. |
| source | value.properties.metadata.source | string | Connector source metadata. |
| brandColor | value.properties.metadata.brandColor | string | Connector brand Color metadata. |
| publisherUrl | value.properties.metadata.publisherUrl | string | Connector publisher URL metadata. |
| serviceUrl | value.properties.metadata.serviceUrl | string | Connector service URL metadata. |
| documentationUrl | value.properties.metadata.documentationUrl | string | Connector documentation URL. |
| environment | value.properties.metadata.environment | string | Connector environment metadata. |
| allowSharing | value.properties.metadata.allowSharing | boolean | Connector allow Sharing field. |
| capabilities | value.properties.capabilities | array of string | Connector capabilities. |
| description | value.properties.description | string | Connector description. |
| originalSwaggerUrl | value.properties.apiDefinitions.originalSwaggerUrl | string | Connector original swagger URL. |
| modifiedSwaggerUrl | value.properties.apiDefinitions.modifiedSwaggerUrl | string | Connector modified swagger URL. |
| id | value.properties.createdBy.id | string | Connector creator's principal object ID. |
| displayName | value.properties.createdBy.displayName | string | Connector creator's principal displayName. |
| email | value.properties.createdBy.email | string | Connector creator's principal email. |
| type | value.properties.createdBy.type | string | Connector creator's principal type. |
| tenantId | value.properties.createdBy.tenantId | string | Connector creator's principal tenantId. |
| userPrincipalName | value.properties.createdBy.userPrincipalName | string | Connector creator's user principal name. |
| id | value.properties.modifiedBy.id | string | Connector last modified by principal object ID. |
| displayName | value.properties.modifiedBy.displayName | string | Connector last modified by principal displayName. |
| email | value.properties.modifiedBy.email | string | Connector last modified by principal email. |
| type | value.properties.modifiedBy.type | string | Connector last modified by principal type. |
| tenantId | value.properties.modifiedBy.tenantId | string | Connector last modified by principal tenantId. |
| userPrincipalName | value.properties.modifiedBy.userPrincipalName | string | Connector last modified by user principal name. |
| createdTime | value.properties.createdTime | date-time | Connector created time. |
| changedTime | value.properties.changedTime | date-time | Connector changed time. |
| id | value.properties.environment.id | string | Connector Environment ID. |
| name | value.properties.environment.name | string | Connector Environment name. |
| tier | value.properties.tier | string | Connector tier. |
| publisher | value.properties.publisher | string | Connector publisher's principal display name. |

### Get PowerApp Conditional Access

- Operation ID:
    - Get-PowerAppConditionalAccess

Gets a PowerApp's conditional access properties.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
|  |  | array of string | Conditional Access Properties. |

### Remove App as Admin

- Operation ID:
    - Remove-AdminApp

Deletes a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

### Remove Connection as Admin

- Operation ID:
    - Remove-AdminConnection

Deletes a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Connection Name | connectionName | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |

### Set App Owner

- Operation ID:
    - Set-AdminAppOwner

Updates a PowerApp's owner role, and specifies the old owner's new role.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| Role For Old App Owner | roleForOldAppOwner |  | string | The role name for the old app owner. Choose from CanView, CanViewWithShare, or CanEdit. |
| New PowerApp Owner | newAppOwner |  | string | The principal object ID of the new owner. |

### Set App Quarantine State

- Operation ID:
    - Set-AppQuarantineState

Updates a PowerApp's quarantine state.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| Quarantine Status | quarantineStatus |  | string | The quarantine status of the app. Choose from NotSpecified, Quarantined, or Unquarantined. |

### Set PowerApp Conditional Access

- Operation ID:
    - Set-PowerAppConditionalAccess

Updates a PowerApp's conditional access.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Name | environment | True | string | Name field of the Environment. |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| Auth Context Ids | authContextIds |  | array of string |  |

## Definitions

### ResourceArray[PowerApp]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of PowerApp |  |
| Next Link | nextLink | string | The URL to get the next page of the Apps list. Contains the skiptoken. |

### PowerApp

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | PowerApp ID field. |
| name | name | string | PowerApp name field. |
| appVersion | properties.appVersion | date-time | PowerApp property appVersion. |
| major | properties.createdByClientVersion.major | integer | PowerApp property createdByClientVersion major. |
| minor | properties.createdByClientVersion.minor | integer | PowerApp property createdByClientVersion minor. |
| build | properties.createdByClientVersion.build | integer | PowerApp property createdByClientVersion build. |
| revision | properties.createdByClientVersion.revision | integer | PowerApp property createdByClientVersion revision. |
| majorRevision | properties.createdByClientVersion.majorRevision | integer | PowerApp property createdByClientVersion majorRevision. |
| minorRevision | properties.createdByClientVersion.minorRevision | integer | PowerApp property createdByClientVersion minorRevision. |
| major | properties.minClientVersion.major | integer | PowerApp property minClientVersion major. |
| minor | properties.minClientVersion.minor | integer | PowerApp property minClientVersion minor. |
| build | properties.minClientVersion.build | integer | PowerApp property minClientVersion build. |
| revision | properties.minClientVersion.revision | integer | PowerApp property minClientVersion revision. |
| majorRevision | properties.minClientVersion.majorRevision | integer | PowerApp property minClientVersion majorRevision. |
| minorRevision | properties.minClientVersion.minorRevision | integer | PowerApp property minClientVersion minorRevision. |
| id | properties.owner.id | string | PowerApp owner principal user ID. |
| displayName | properties.owner.displayName | string | PowerApp owner principal displayName. |
| email | properties.owner.email | string | PowerApp owner principal email. |
| type | properties.owner.type | string | PowerApp owner principal type. |
| tenantId | properties.owner.tenantId | string | PowerApp owner principal tenantId. |
| userPrincipalName | properties.owner.userPrincipalName | string | PowerApp owner principal userPrincipalName. |
| id | properties.createdBy.id | string | PowerApp creator principal object ID. |
| displayName | properties.createdBy.displayName | string | PowerApp creator principal displayName. |
| email | properties.createdBy.email | string | PowerApp creator principal email. |
| type | properties.createdBy.type | string | PowerApp creator principal type. |
| tenantId | properties.createdBy.tenantId | string | PowerApp creator principal tenantId. |
| userPrincipalName | properties.createdBy.userPrincipalName | string | PowerApp creator principal userPrincipalName. |
| id | properties.lastModifiedBy.id | string | PowerApp last modified by principal object ID. |
| displayName | properties.lastModifiedBy.displayName | string | PowerApp last modified by principal displayName. |
| email | properties.lastModifiedBy.email | string | PowerApp last modified by principal email. |
| type | properties.lastModifiedBy.type | string | PowerApp last modified by principal type. |
| tenantId | properties.lastModifiedBy.tenantId | string | PowerApp last modified by principal tenantId. |
| userPrincipalName | properties.lastModifiedBy.userPrincipalName | string | PowerApp last modified by principal userPrincipalName. |
| backgroundColor | properties.backgroundColor | string | PowerApp backgroundColor. |
| backgroundImageUri | properties.backgroundImageUri | string | PowerApp backgroundImageUri. |
| displayName | properties.displayName | string | PowerApp displayName. |
| description | properties.description | string | PowerApp description. |
| value | properties.appUris.documentUri.value | string | PowerApp appUri documentUri value. |
| readonlyValue | properties.appUris.documentUri.readonlyValue | string | PowerApp appUri documentUri readonlyValue. |
| imageUris | properties.appUris.imageUris | array of string | PowerApp appUri imageUris array. |
| createdTime | properties.createdTime | date-time | PowerApp property createdTime. |
| lastModifiedTime | properties.lastModifiedTime | date-time | PowerApp property lastModifiedTime. |
| sharedGroupsCount | properties.sharedGroupsCount | integer | PowerApp property sharedGroupsCount. |
| sharedUsersCount | properties.sharedUsersCount | integer | PowerApp property sharedUsersCount. |
| appOpenProtocolUri | properties.appOpenProtocolUri | string | PowerApp property appOpenProtocolUri. |
| appOpenUri | properties.appOpenUri | string | PowerApp property appOpenUri. |
| favorite | properties.userAppMetadata.favorite | string | PowerApp property userAppMetadata favorite. |
| includeInAppsList | properties.userAppMetadata.includeInAppsList | boolean | PowerApp property userAppMetadata includeInAppsList. |
| isFeaturedApp | properties.isFeaturedApp | boolean | PowerApp property isFeaturedApp. |
| bypassConsent | properties.bypassConsent | boolean | PowerApp property bypassConsent. |
| isHeroApp | properties.isHeroApp | boolean | PowerApp property isHeroApp. |
| id | properties.environment.id | string | PowerApp Environment ID. |
| name | properties.environment.name | string | PowerApp Environment name. |
| connectionReferences | properties.connectionReferences | ConnectionReferences |  |
| primaryDeviceWidth | tags.primaryDeviceWidth | string | PowerApp tag primaryDeviceWidth. |
| primaryDeviceHeight | tags.primaryDeviceHeight | string | PowerApp tag primaryDeviceHeight. |
| sienaVersion | tags.sienaVersion | string | PowerApp tag sienaVersion. |
| deviceCapabilities | tags.deviceCapabilities | string | PowerApp tag deviceCapabilities. |
| supportsPortrait | tags.supportsPortrait | string | PowerApp tag supportsPortrait. |
| supportsLandscape | tags.supportsLandscape | string | PowerApp tag supportsLandscape. |
| primaryFormFactor | tags.primaryFormFactor | string | PowerApp tag primaryFormFactor. |
| publisherVersion | tags.publisherVersion | string | PowerApp tag publisherVersion. |
| minimumRequiredApiVersion | tags.minimumRequiredApiVersion | string | PowerApp tag minimumRequiredApiVersion. |
| type | type | string | PowerApp type field. |

### ConnectionReferences

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | ConnectionReference |  |

### ConnectionReference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connector Id | id | string |  |
| Connector display name | displayName | string |  |
| Icon URI | iconUri | string |  |
| Data sources | dataSources | array of string | List of data sources for the connection |
| Dependencies | dependencies | array of string | List of dependencies for the connection |
| Dependents | dependents | array of string | List of dependant connectors for the connector |
| Is on premise connection | isOnPremiseConnection | boolean | Flag indicates on premise data gateway |
| Bypass consent | bypassConsent | boolean | Flag indicates bypassed api consent |
| API tier | apiTier | string | Api tier is standard or premium |
| Custom API flag | isCustomApiConnection | boolean | Flag indicates custom connector |
| Runtime Policy Name | runtimePolicyName | string | String indicating the name of the runtime policy |
| Execution Restrictions | executionRestrictions | object | Execution restrictions for the runtime policy |
| Shared Connection Id | sharedConnectionId | string | String indicating the id of the shared connection |