---
layout: Reference
title: Power Apps for Makers - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerappsforappmakers/
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
document_id: 18157721-8329-6b36-a411-31476b22a5a3
document_version_independent_id: 5d9b2803-d6e9-029f-d29b-caa532fa29ad
updated_at: 2025-10-07T19:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/powerappsforappmakers/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/37cc84992792cea5a3d0a3fc022dca1f19f25071/docs/powerappsforappmakers/index.yml
git_commit_id: 37cc84992792cea5a3d0a3fc022dca1f19f25071
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerappsforappmakers/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/powerappsforappmakers/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: fa476809-2ca0-dd29-87a4-5df4a5c2a085
---

# Power Apps for Makers

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1774/1.0.1774.4397/powerappsforappmakers/icon.png)
Power Apps Management Connector for Makers

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
| Website | https://powerapps.microsoft.com/ |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Edit App Role Assignment | Sets permissions to a PowerApp. |
| --- | --- |
| Edit Connection Role Assignment | Sets permissions to a Connection. |
| Edit Connector Role Assignment | Sets permissions to a Connector. |
| Get App | Returns a PowerApp. |
| Get App Role Assignments | Returns a list of permissions for the specified PowerApp name. |
| Get App Versions | Returns a list of versions for a given PowerApp. |
| Get Apps | Returns a list of apps. |
| Get Connection Role Assignment | Returns a list of permissions to a Connection. |
| Get Connections | Returns a list of Connections. |
| Get Connector | Returns a Connector. |
| Get Connector Role Assignment | Returns a list of permissions for the specified Connector. |
| Get Connectors | Returns a list of Connectors. |
| Get Environments | Returns a list of Environments. |
| Publish App | Publishes the latest saved version of a PowerApp to all users with view access. |
| Remove App | Deletes a PowerApp. |
| Remove Connection | Deletes a Connection. |
| Remove Connector | Deletes a Connector. |
| Restore App Version | Restores the specified App Version as the current version. |
| Set App Display Name | Updates the display name of a PowerApp. |

### Edit App Role Assignment

- Operation ID:
    - Edit-AppRoleAssignment

Sets permissions to a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| id | id |  | string | Role Id of User. |
| email | email |  | string | Email of the User. |
| tenantId | tenantId |  | string | Tenant Id of the User. |
| id | id |  | string | ID of the user. |
| type | type |  | string | Type of User. |
| NotifyShareTargetOption | NotifyShareTargetOption |  | string | Notify ShareTarget Option. |
| roleName | roleName |  | string | Role Name of User. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| put | put | array of object | The field put. |
| id | put.id | string | The field id. |
| roleName | put.properties.roleName | string | The field roleName. |
| scope | put.properties.scope | string | The field scope. |
| id | put.properties.principal.id | string | The field id. |
| email | put.properties.principal.email | string | The field email. |
| type | put.properties.principal.type | string | The field type. |
| resourceResponses | put.properties.resourceResponses | array of object | The field resourceResponses. |
| id | put.properties.resourceResponses.id | string | The field id. |
| statusCode | put.properties.resourceResponses.statusCode | string | The field statusCode. |
| responseCode | put.properties.resourceResponses.responseCode | string | The field responseCode. |
| message | put.properties.resourceResponses.message | string | The field message. |
| type | put.properties.resourceResponses.type | string | The field type. |

### Edit Connection Role Assignment

- Operation ID:
    - Edit-ConnectionRoleAssignment

Sets permissions to a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Connection Name | connectionName | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| id | id |  | string | Role Id of User. |
| email | email |  | string | Email of User. |
| tenantId | tenantId |  | string | TenantId of User. |
| id | id |  | string | Id of User. |
| type | type |  | string | Type of User. |
| NotifyShareTargetOption | NotifyShareTargetOption |  | string | NotifyShareTargetOption of User. |
| roleName | roleName |  | string | RoleName of User. |

### Edit Connector Role Assignment

- Operation ID:
    - Edit-ConnectorRoleAssignment

Sets permissions to a Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| id | id |  | string | Role id of User. |
| email | email |  | string | Email of User. |
| tenantId | tenantId |  | string | TenantId of User. |
| id | id |  | string | Id of User. |
| type | type |  | string | Type of User. |
| NotifyShareTargetOption | NotifyShareTargetOption |  | string | NotifyShareTargetOption of User. |
| roleName | roleName |  | string | RoleName of User. |

### Get App

- Operation ID:
    - Get-App

Returns a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

#### Returns

- Body
    - PowerApp

### Get App Role Assignments

- Operation ID:
    - Get-AppRoleAssignment

Returns a list of permissions for the specified PowerApp name.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of App Role Assignments. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| roleName | value.properties.roleName | string | The field roleName. |
| id | value.properties.principal.id | string | The field id. |
| displayName | value.properties.principal.displayName | string | The field displayName. |
| email | value.properties.principal.email | string | The field email. |
| type | value.properties.principal.type | string | The field type. |
| scope | value.properties.scope | string | The field scope. |
| notifyShareTargetOption | value.properties.notifyShareTargetOption | string | The field notifyShareTargetOption. |

### Get App Versions

- Operation ID:
    - Get-AppVersions

Returns a list of versions for a given PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Apps versions to return. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| primaryDeviceWidth | value.tags.primaryDeviceWidth | string | The field primaryDeviceWidth. |
| primaryDeviceHeight | value.tags.primaryDeviceHeight | string | The field primaryDeviceHeight. |
| sienaVersion | value.tags.sienaVersion | string | The field sienaVersion. |
| deviceCapabilities | value.tags.deviceCapabilities | string | The field deviceCapabilities. |
| supportsPortrait | value.tags.supportsPortrait | string | The field supportsPortrait. |
| supportsLandscape | value.tags.supportsLandscape | string | The field supportsLandscape. |
| primaryFormFactor | value.tags.primaryFormFactor | string | The field primaryFormFactor. |
| publisherVersion | value.tags.publisherVersion | string | The field publisherVersion. |
| minimumRequiredApiVersion | value.tags.minimumRequiredApiVersion | string | The field minimumRequiredApiVersion. |
| ownerTenantId | value.properties.ownerTenantId | string | The field ownerTenantId. |
| app | value.properties.app | string | The field app. |
| appVersion | value.properties.appVersion | date-time | The field appVersion. |
| lifeCycleId | value.properties.lifeCycleId | string | The field lifeCycleId. |
| major | value.properties.createdByClientVersion.major | integer | The field major. |
| minor | value.properties.createdByClientVersion.minor | integer | The field minor. |
| build | value.properties.createdByClientVersion.build | integer | The field build. |
| revision | value.properties.createdByClientVersion.revision | integer | The field revision. |
| majorRevision | value.properties.createdByClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | value.properties.createdByClientVersion.minorRevision | integer | The field minorRevision. |
| major | value.properties.minClientVersion.major | integer | The field major. |
| minor | value.properties.minClientVersion.minor | integer | The field minor. |
| build | value.properties.minClientVersion.build | integer | The field build. |
| revision | value.properties.minClientVersion.revision | integer | The field revision. |
| majorRevision | value.properties.minClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | value.properties.minClientVersion.minorRevision | integer | The field minorRevision. |
| name | value.properties.appDefinition.name | string | The field name. |
| id | value.properties.appDefinition.id | string | The field id. |
| type | value.properties.appDefinition.type | string | The field type. |
| primaryDeviceWidth | value.properties.appDefinition.tags.primaryDeviceWidth | string | The field primaryDeviceWidth. |
| primaryDeviceHeight | value.properties.appDefinition.tags.primaryDeviceHeight | string | The field primaryDeviceHeight. |
| sienaVersion | value.properties.appDefinition.tags.sienaVersion | string | The field sienaVersion. |
| deviceCapabilities | value.properties.appDefinition.tags.deviceCapabilities | string | The field deviceCapabilities. |
| supportsPortrait | value.properties.appDefinition.tags.supportsPortrait | string | The field supportsPortrait. |
| supportsLandscape | value.properties.appDefinition.tags.supportsLandscape | string | The field supportsLandscape. |
| primaryFormFactor | value.properties.appDefinition.tags.primaryFormFactor | string | The field primaryFormFactor. |
| publisherVersion | value.properties.appDefinition.tags.publisherVersion | string | The field publisherVersion. |
| minimumRequiredApiVersion | value.properties.appDefinition.tags.minimumRequiredApiVersion | string | The field minimumRequiredApiVersion. |
| appVersion | value.properties.appDefinition.properties.appVersion | date-time | The field appVersion. |
| lastDraftVersion | value.properties.appDefinition.properties.lastDraftVersion | date-time | The field lastDraftVersion. |
| lifeCycleId | value.properties.appDefinition.properties.lifeCycleId | string | The field lifeCycleId. |
| status | value.properties.appDefinition.properties.status | string | The field status. |
| major | value.properties.appDefinition.properties.createdByClientVersion.major | integer | The field major. |
| minor | value.properties.appDefinition.properties.createdByClientVersion.minor | integer | The field minor. |
| build | value.properties.appDefinition.properties.createdByClientVersion.build | integer | The field build. |
| revision | value.properties.appDefinition.properties.createdByClientVersion.revision | integer | The field revision. |
| majorRevision | value.properties.appDefinition.properties.createdByClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | value.properties.appDefinition.properties.createdByClientVersion.minorRevision | integer | The field minorRevision. |
| major | value.properties.appDefinition.properties.minClientVersion.major | integer | The field major. |
| minor | value.properties.appDefinition.properties.minClientVersion.minor | integer | The field minor. |
| build | value.properties.appDefinition.properties.minClientVersion.build | integer | The field build. |
| revision | value.properties.appDefinition.properties.minClientVersion.revision | integer | The field revision. |
| majorRevision | value.properties.appDefinition.properties.minClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | value.properties.appDefinition.properties.minClientVersion.minorRevision | integer | The field minorRevision. |
| id | value.properties.appDefinition.properties.owner.id | string | The field id. |
| displayName | value.properties.appDefinition.properties.owner.displayName | string | The field displayName. |
| email | value.properties.appDefinition.properties.owner.email | string | The field email. |
| type | value.properties.appDefinition.properties.owner.type | string | The field type. |
| tenantId | value.properties.appDefinition.properties.owner.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.appDefinition.properties.owner.userPrincipalName | string | The field userPrincipalName. |
| id | value.properties.appDefinition.properties.createdBy.id | string | The field id. |
| displayName | value.properties.appDefinition.properties.createdBy.displayName | string | The field displayName. |
| email | value.properties.appDefinition.properties.createdBy.email | string | The field email. |
| type | value.properties.appDefinition.properties.createdBy.type | string | The field type. |
| tenantId | value.properties.appDefinition.properties.createdBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.appDefinition.properties.createdBy.userPrincipalName | string | The field userPrincipalName. |
| id | value.properties.appDefinition.properties.lastModifiedBy.id | string | The field id. |
| displayName | value.properties.appDefinition.properties.lastModifiedBy.displayName | string | The field displayName. |
| email | value.properties.appDefinition.properties.lastModifiedBy.email | string | The field email. |
| type | value.properties.appDefinition.properties.lastModifiedBy.type | string | The field type. |
| tenantId | value.properties.appDefinition.properties.lastModifiedBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.appDefinition.properties.lastModifiedBy.userPrincipalName | string | The field userPrincipalName. |
| id | value.properties.appDefinition.properties.lastPublishedBy.id | string | The field id. |
| displayName | value.properties.appDefinition.properties.lastPublishedBy.displayName | string | The field displayName. |
| email | value.properties.appDefinition.properties.lastPublishedBy.email | string | The field email. |
| type | value.properties.appDefinition.properties.lastPublishedBy.type | string | The field type. |
| tenantId | value.properties.appDefinition.properties.lastPublishedBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.appDefinition.properties.lastPublishedBy.userPrincipalName | string | The field userPrincipalName. |
| backgroundColor | value.properties.appDefinition.properties.backgroundColor | string | The field backgroundColor. |
| backgroundImageUri | value.properties.appDefinition.properties.backgroundImageUri | string | The field backgroundImageUri. |
| displayName | value.properties.appDefinition.properties.displayName | string | The field displayName. |
| description | value.properties.appDefinition.properties.description | string | The field description. |
| value | value.properties.appDefinition.properties.appUris.documentUri.value | string | The field value. |
| readonlyValue | value.properties.appDefinition.properties.appUris.documentUri.readonlyValue | string | The field readonlyValue. |
| imageUris | value.properties.appDefinition.properties.appUris.imageUris | array of string | The field imageUris. |
| createdTime | value.properties.appDefinition.properties.createdTime | date-time | The field createdTime. |
| lastModifiedTime | value.properties.appDefinition.properties.lastModifiedTime | date-time | The field lastModifiedTime. |
| lastPublishTime | value.properties.appDefinition.properties.lastPublishTime | date-time | The field lastPublishTime. |
| sharedGroupsCount | value.properties.appDefinition.properties.sharedGroupsCount | integer | The field sharedGroupsCount. |
| sharedUsersCount | value.properties.appDefinition.properties.sharedUsersCount | integer | The field sharedUsersCount. |
| appOpenProtocolUri | value.properties.appDefinition.properties.appOpenProtocolUri | string | The field appOpenProtocolUri. |
| appOpenUri | value.properties.appDefinition.properties.appOpenUri | string | The field appOpenUri. |
| favorite | value.properties.appDefinition.properties.userAppMetadata.favorite | string | The field favorite. |
| includeInAppsList | value.properties.appDefinition.properties.userAppMetadata.includeInAppsList | boolean | The field includeInAppsList. |
| isFeaturedApp | value.properties.appDefinition.properties.isFeaturedApp | boolean | The field isFeaturedApp. |
| bypassConsent | value.properties.appDefinition.properties.bypassConsent | boolean | The field bypassConsent. |
| isHeroApp | value.properties.appDefinition.properties.isHeroApp | boolean | The field isHeroApp. |
| id | value.properties.appDefinition.properties.environment.id | string | The field id. |
| name | value.properties.appDefinition.properties.environment.name | string | The field name. |

### Get Apps

- Operation ID:
    - Get-Apps

Returns a list of apps.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Page size | $top |  | integer | Number of Apps to return. |

#### Returns

- Body
    - ResourceArray[PowerApp]

### Get Connection Role Assignment

- Operation ID:
    - Get-ConnectionRoleAssignment

Returns a list of permissions to a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Connection Name | connectionName | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Page size | $top |  | integer | Number of Connection Role Assignments. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| roleName | value.properties.roleName | string | The field roleName. |
| id | value.properties.principal.id | string | The field id. |
| displayName | value.properties.principal.displayName | string | The field displayName. |
| email | value.properties.principal.email | string | The field email. |
| type | value.properties.principal.type | string | The field type. |
| notifyShareTargetOption | value.properties.notifyShareTargetOption | string | The field notifyShareTargetOption. |

### Get Connections

- Operation ID:
    - Get-Connections

Returns a list of Connections.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Page size | $top |  | integer | Number of Connections. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| apiId | value.properties.apiId | string | The field apiId. |
| displayName | value.properties.displayName | string | The field displayName. |
| iconUri | value.properties.iconUri | string | The field iconUri. |
| statuses | value.properties.statuses | array of object | The field statuses. |
| status | value.properties.statuses.status | string | The field status. |
| target | value.properties.statuses.target | string | The field target. |
| code | value.properties.statuses.error.code | string | The field code. |
| message | value.properties.statuses.error.message | string | The field message. |
| sku | value.properties.connectionParameters.sku | string | The field sku. |
| workflowName | value.properties.connectionParameters.workflowName | string | The field workflowName. |
| workflowPath | value.properties.connectionParameters.workflowPath | string | The field workflowPath. |
| workflowEndpoint | value.properties.connectionParameters.workflowEndpoint | string | The field workflowEndpoint. |
| workFlowCallbackUri | value.properties.connectionParameters.workFlowCallbackUri | string | The field workFlowCallbackUri. |
| apiId | value.properties.connectionParameters.$connections.shared\_msnweather.apiId | string | The field apiId. |
| connectionId | value.properties.connectionParameters.$connections.shared\_msnweather.connectionId | string | The field connectionId. |
| source | value.properties.connectionParameters.$connections.shared\_msnweather.source | string | The field source. |
| apiId | value.properties.connectionParameters.$connections.shared\_flowpush.apiId | string | The field apiId. |
| connectionId | value.properties.connectionParameters.$connections.shared\_flowpush.connectionId | string | The field connectionId. |
| source | value.properties.connectionParameters.$connections.shared\_flowpush.source | string | The field source. |
| server | value.properties.connectionParameters.server | string | The field server. |
| database | value.properties.connectionParameters.database | string | The field database. |
| keywordsRemaining | value.properties.keywordsRemaining | integer | The field keywordsRemaining. |
| id | value.properties.createdBy.id | string | The field id. |
| displayName | value.properties.createdBy.displayName | string | The field displayName. |
| email | value.properties.createdBy.email | string | The field email. |
| type | value.properties.createdBy.type | string | The field type. |
| tenantId | value.properties.createdBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.createdBy.userPrincipalName | string | The field userPrincipalName. |
| createdTime | value.properties.createdTime | date-time | The field createdTime. |
| lastModifiedTime | value.properties.lastModifiedTime | date-time | The field lastModifiedTime. |
| id | value.properties.environment.id | string | The field id. |
| name | value.properties.environment.name | string | The field name. |
| shared\_msnweather | value.properties.metadata.shared\_msnweather | string | The field shared\_msnweather. |
| shared\_flowpush | value.properties.metadata.shared\_flowpush | string | The field shared\_flowpush. |
| expirationTime | value.properties.expirationTime | date-time | The field expirationTime. |
| testLinks | value.properties.testLinks | array of object | The field testLinks. |
| requestUri | value.properties.testLinks.requestUri | string | The field requestUri. |
| method | value.properties.testLinks.method | string | The field method. |

### Get Connector

- Operation ID:
    - Get-Connector

Returns a Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Filter Query | $filter |  | string | A filter query parameter. |
| API Version | api-version |  | string | The date value of the API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The field name. |
| id | id | string | The field id. |
| type | type | string | The field type. |
| displayName | properties.displayName | string | The field displayName. |
| iconUri | properties.iconUri | string | The field iconUri. |
| iconBrandColor | properties.iconBrandColor | string | The field iconBrandColor. |
| apiEnvironment | properties.apiEnvironment | string | The field apiEnvironment. |
| isCustomApi | properties.isCustomApi | boolean | The field isCustomApi. |
| type | properties.connectionParameters.token.type | string | The field type. |
| identityProvider | properties.connectionParameters.token.oAuthSettings.identityProvider | string | The field identityProvider. |
| clientId | properties.connectionParameters.token.oAuthSettings.clientId | string | The field clientId. |
| scopes | properties.connectionParameters.token.oAuthSettings.scopes | array of string | The field scopes. |
| redirectUrl | properties.connectionParameters.token.oAuthSettings.redirectUrl | string | The field redirectUrl. |
| IsFirstParty | properties.connectionParameters.token.oAuthSettings.properties.IsFirstParty | string | The field IsFirstParty. |
| value | properties.connectionParameters.token.oAuthSettings.customParameters.capability.value | string | The field value. |
| displayName | properties.connectionParameters.token.uiDefinition.displayName | string | The field displayName. |
| description | properties.connectionParameters.token.uiDefinition.description | string | The field description. |
| tooltip | properties.connectionParameters.token.uiDefinition.tooltip | string | The field tooltip. |
| required | properties.connectionParameters.token.uiDefinition.constraints.required | string | The field required. |
| runtimeUrls | properties.runtimeUrls | array of string | The field runtimeUrls. |
| primaryRuntimeUrl | properties.primaryRuntimeUrl | string | The field primaryRuntimeUrl. |
| source | properties.metadata.source | string | The field source. |
| brandColor | properties.metadata.brandColor | string | The field brandColor. |
| capabilities | properties.capabilities | array of string | The field capabilities. |
| baseUrl | properties.interfaces.CDPBlob0.revisions.1.baseUrl | string | The field baseUrl. |
| status | properties.interfaces.CDPBlob0.revisions.1.status | string | The field status. |
| deprecated | properties.interfaces.CDPBlob0.revisions.1.deprecated | boolean | The field deprecated. |
| baseUrl | properties.interfaces.CDPBlob1.revisions.1.baseUrl | string | The field baseUrl. |
| status | properties.interfaces.CDPBlob1.revisions.1.status | string | The field status. |
| description | properties.description | string | The field description. |
| createdTime | properties.createdTime | date-time | The field createdTime. |
| changedTime | properties.changedTime | date-time | The field changedTime. |
| releaseTag | properties.releaseTag | string | The field releaseTag. |
| tier | properties.tier | string | The field tier. |
| publisher | properties.publisher | string | The field publisher. |
| will | properties.scopes.will | array of string | The field will. |
| wont | properties.scopes.wont | array of string | The field wont. |

### Get Connector Role Assignment

- Operation ID:
    - Get-ConnectorRoleAssignment

Returns a list of permissions for the specified Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |
| Page size | $top |  | integer | Number of Connector Role Assignments. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| roleName | value.properties.roleName | string | The field roleName. |
| id | value.properties.principal.id | string | The field id. |
| displayName | value.properties.principal.displayName | string | The field displayName. |
| email | value.properties.principal.email | string | The field email. |
| type | value.properties.principal.type | string | The field type. |
| notifyShareTargetOption | value.properties.notifyShareTargetOption | string | The field notifyShareTargetOption. |

### Get Connectors

- Operation ID:
    - Get-Connectors

Returns a list of Connectors.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| ShowAllApis | showApisWithToS |  | string | Show all the Apis. |
| Filter Query | $filter |  | string | A filter query parameter. |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Connectors. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| name | value.name | string | The field name. |
| id | value.id | string | The field id. |
| type | value.type | string | The field type. |
| displayName | value.properties.displayName | string | The field displayName. |
| iconUri | value.properties.iconUri | string | The field iconUri. |
| iconBrandColor | value.properties.iconBrandColor | string | The field iconBrandColor. |
| apiEnvironment | value.properties.apiEnvironment | string | The field apiEnvironment. |
| isCustomApi | value.properties.isCustomApi | boolean | The field isCustomApi. |
| type | value.properties.connectionParameters.token.type | string | The field type. |
| identityProvider | value.properties.connectionParameters.token.oAuthSettings.identityProvider | string | The field identityProvider. |
| clientId | value.properties.connectionParameters.token.oAuthSettings.clientId | string | The field clientId. |
| scopes | value.properties.connectionParameters.token.oAuthSettings.scopes | array of string | The field scopes. |
| redirectUrl | value.properties.connectionParameters.token.oAuthSettings.redirectUrl | string | The field redirectUrl. |
| IsFirstParty | value.properties.connectionParameters.token.oAuthSettings.properties.IsFirstParty | string | The field IsFirstParty. |
| value | value.properties.connectionParameters.token.oAuthSettings.customParameters.capability.value | string | The field value. |
| displayName | value.properties.connectionParameters.token.uiDefinition.displayName | string | The field displayName. |
| description | value.properties.connectionParameters.token.uiDefinition.description | string | The field description. |
| tooltip | value.properties.connectionParameters.token.uiDefinition.tooltip | string | The field tooltip. |
| required | value.properties.connectionParameters.token.uiDefinition.constraints.required | string | The field required. |
| capability | value.properties.connectionParameters.token.uiDefinition.constraints.capability | array of string | The field capability. |
| type | value.properties.connectionParameters.gateway.type | string | The field type. |
| dataSourceType | value.properties.connectionParameters.gateway.gatewaySettings.dataSourceType | string | The field dataSourceType. |
| connectionDetails | value.properties.connectionParameters.gateway.gatewaySettings.connectionDetails | array of string | The field connectionDetails. |
| tabIndex | value.properties.connectionParameters.gateway.uiDefinition.tabIndex | integer | The field tabIndex. |
| hidden | value.properties.connectionParameters.gateway.uiDefinition.constraints.hidden | string | The field hidden. |
| capability | value.properties.connectionParameters.gateway.uiDefinition.constraints.capability | array of string | The field capability. |
| type | value.properties.connectionParameters.authType.type | string | The field type. |
| allowedValues | value.properties.connectionParameters.authType.allowedValues | array of object | The field allowedValues. |
| value | value.properties.connectionParameters.authType.allowedValues.value | string | The field value. |
| displayName | value.properties.connectionParameters.authType.uiDefinition.displayName | string | The field displayName. |
| description | value.properties.connectionParameters.authType.uiDefinition.description | string | The field description. |
| tooltip | value.properties.connectionParameters.authType.uiDefinition.tooltip | string | The field tooltip. |
| tabIndex | value.properties.connectionParameters.authType.uiDefinition.constraints.tabIndex | integer | The field tabIndex. |
| required | value.properties.connectionParameters.authType.uiDefinition.constraints.required | string | The field required. |
| allowedValues | value.properties.connectionParameters.authType.uiDefinition.constraints.allowedValues | array of object | The field allowedValues. |
| text | value.properties.connectionParameters.authType.uiDefinition.constraints.allowedValues.text | string | The field text. |
| value | value.properties.connectionParameters.authType.uiDefinition.constraints.allowedValues.value | string | The field value. |
| capability | value.properties.connectionParameters.authType.uiDefinition.constraints.capability | array of string | The field capability. |
| type | value.properties.connectionParameters.username.type | string | The field type. |
| displayName | value.properties.connectionParameters.username.uiDefinition.displayName | string | The field displayName. |
| description | value.properties.connectionParameters.username.uiDefinition.description | string | The field description. |
| tooltip | value.properties.connectionParameters.username.uiDefinition.tooltip | string | The field tooltip. |
| tabIndex | value.properties.connectionParameters.username.uiDefinition.constraints.tabIndex | integer | The field tabIndex. |
| clearText | value.properties.connectionParameters.username.uiDefinition.constraints.clearText | boolean | The field clearText. |
| required | value.properties.connectionParameters.username.uiDefinition.constraints.required | string | The field required. |
| capability | value.properties.connectionParameters.username.uiDefinition.constraints.capability | array of string | The field capability. |
| type | value.properties.connectionParameters.password.type | string | The field type. |
| displayName | value.properties.connectionParameters.password.uiDefinition.displayName | string | The field displayName. |
| description | value.properties.connectionParameters.password.uiDefinition.description | string | The field description. |
| tooltip | value.properties.connectionParameters.password.uiDefinition.tooltip | string | The field tooltip. |
| tabIndex | value.properties.connectionParameters.password.uiDefinition.constraints.tabIndex | integer | The field tabIndex. |
| required | value.properties.connectionParameters.password.uiDefinition.constraints.required | string | The field required. |
| capability | value.properties.connectionParameters.password.uiDefinition.constraints.capability | array of string | The field capability. |
| runtimeUrls | value.properties.runtimeUrls | array of string | The field runtimeUrls. |
| primaryRuntimeUrl | value.properties.primaryRuntimeUrl | string | The field primaryRuntimeUrl. |
| source | value.properties.metadata.source | string | The field source. |
| brandColor | value.properties.metadata.brandColor | string | The field brandColor. |
| capabilities | value.properties.capabilities | array of string | The field capabilities. |
| baseUrl | value.properties.interfaces.CDPTabular1.revisions.1.baseUrl | string | The field baseUrl. |
| status | value.properties.interfaces.CDPTabular1.revisions.1.status | string | The field status. |
| baseUrl | value.properties.interfaces.CDPBlob0.revisions.1.baseUrl | string | The field baseUrl. |
| status | value.properties.interfaces.CDPBlob0.revisions.1.status | string | The field status. |
| deprecated | value.properties.interfaces.CDPBlob0.revisions.1.deprecated | boolean | The field deprecated. |
| baseUrl | value.properties.interfaces.CDPBlob1.revisions.1.baseUrl | string | The field baseUrl. |
| status | value.properties.interfaces.CDPBlob1.revisions.1.status | string | The field status. |
| description | value.properties.description | string | The field description. |
| createdTime | value.properties.createdTime | date-time | The field createdTime. |
| changedTime | value.properties.changedTime | date-time | The field changedTime. |
| releaseTag | value.properties.releaseTag | string | The field releaseTag. |
| tier | value.properties.tier | string | The field tier. |
| publisher | value.properties.publisher | string | The field publisher. |
| will | value.properties.scopes.will | array of string | The field will. |
| wont | value.properties.scopes.wont | array of string | The field wont. |

### Get Environments

- Operation ID:
    - Get-Environments

Returns a list of Environments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API version. |
| Page size | $top |  | integer | Number of Environments. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | The field value. |
| id | value.id | string | The field id. |
| name | value.name | string | The field name. |
| location | value.location | string | The field location. |
| type | value.type | string | The field type. |
| azureRegionHint | value.properties.azureRegionHint | string | The field azureRegionHint. |
| displayName | value.properties.displayName | string | The field displayName. |
| createdTime | value.properties.createdTime | date-time | The field createdTime. |
| admin | value.properties.clientUris.admin | string | Admin portal Uri for the environment. |
| maker | value.properties.clientUris.maker | string | Maker portal Uri for the environment. |
| id | value.properties.createdBy.id | string | The field id. |
| displayName | value.properties.createdBy.displayName | string | The field displayName. |
| type | value.properties.createdBy.type | string | The field type. |
| email | value.properties.createdBy.email | string | The field email. |
| tenantId | value.properties.createdBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.createdBy.userPrincipalName | string | The field userPrincipalName. |
| provisioningState | value.properties.provisioningState | string | The field provisioningState. |
| creationType | value.properties.creationType | string | The field creationType. |
| environmentSku | value.properties.environmentSku | string | The field environmentSku. |
| environmentType | value.properties.environmentType | string | The field environmentType. |
| isDefault | value.properties.isDefault | boolean | The field isDefault. |
| displayName | value.properties.permissions.CreatePowerApp.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ReadEnvironment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.GenerateResourceStorage.displayName | string | The field displayName. |
| displayName | value.properties.permissions.CreateGateway.displayName | string | The field displayName. |
| displayName | value.properties.permissions.CreateFlow.displayName | string | The field displayName. |
| displayName | value.properties.permissions.CreateCustomApi.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ExportEnvironmentPackage.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ImportEnvironmentPackage.displayName | string | The field displayName. |
| displayName | value.properties.permissions.CreateFunction.displayName | string | The field displayName. |
| displayName | value.properties.permissions.AdminReadEnvironment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.UpdateEnvironment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.DeleteEnvironment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.SetDLPPolicy.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ListAnyPowerApp.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ListAnyFlow.displayName | string | The field displayName. |
| displayName | value.properties.permissions.DeleteAnyPowerApp.displayName | string | The field displayName. |
| displayName | value.properties.permissions.DeleteAnyFlow.displayName | string | The field displayName. |
| displayName | value.properties.permissions.AddEnvironmentRoleAssignment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ReadEnvironmentRoleInformation.displayName | string | The field displayName. |
| displayName | value.properties.permissions.RemoveEnvironmentRoleAssignment.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ModifyDatabaseRoleAssignments.displayName | string | The field displayName. |
| displayName | value.properties.permissions.CreateDatabase.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ManageAnyPowerApp.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ManageAnyConnection.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ManageCDSMigration.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ManageTalentEnvironmentSettings.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ManageAnyCustomApi.displayName | string | The field displayName. |
| displayName | value.properties.permissions.ListAnyFunction.displayName | string | The field displayName. |
| displayName | value.properties.permissions.DeleteAnyFunction.displayName | string | The field displayName. |
| microsoft.BusinessAppPlatform | value.properties.runtimeEndpoints.microsoft.BusinessAppPlatform | string | The field microsoft BusinessAppPlatform. |
| microsoft.CommonDataModel | value.properties.runtimeEndpoints.microsoft.CommonDataModel | string | The field microsoft CommonDataModel. |
| microsoft.PowerApps | value.properties.runtimeEndpoints.microsoft.PowerApps | string | The field microsoft Power Apps. |
| microsoft.Flow | value.properties.runtimeEndpoints.microsoft.Flow | string | The field microsoft Flow. |
| lastModifiedTime | value.properties.lastModifiedTime | date-time | The field lastModifiedTime. |
| id | value.properties.lastModifiedBy.id | string | The field id. |
| displayName | value.properties.lastModifiedBy.displayName | string | The field displayName. |
| email | value.properties.lastModifiedBy.email | string | The field email. |
| type | value.properties.lastModifiedBy.type | string | The field type. |
| tenantId | value.properties.lastModifiedBy.tenantId | string | The field tenantId. |
| userPrincipalName | value.properties.lastModifiedBy.userPrincipalName | string | The field userPrincipalName. |
| type | value.properties.linkedEnvironmentMetadata.type | string | The field type. |
| resourceId | value.properties.linkedEnvironmentMetadata.resourceId | string | The field resourceId. |
| friendlyName | value.properties.linkedEnvironmentMetadata.friendlyName | string | The field friendlyName. |
| uniqueName | value.properties.linkedEnvironmentMetadata.uniqueName | string | The field uniqueName. |
| domainName | value.properties.linkedEnvironmentMetadata.domainName | string | The field domainName. |
| version | value.properties.linkedEnvironmentMetadata.version | string | The field version. |
| instanceUrl | value.properties.linkedEnvironmentMetadata.instanceUrl | string | The field instanceUrl. |
| instanceApiUrl | value.properties.linkedEnvironmentMetadata.instanceApiUrl | string | The field instanceApiUrl. |
| baseLanguage | value.properties.linkedEnvironmentMetadata.baseLanguage | integer | The field baseLanguage. |
| instanceState | value.properties.linkedEnvironmentMetadata.instanceState | string | The field instanceState. |
| createdTime | value.properties.linkedEnvironmentMetadata.createdTime | date-time | The field createdTime. |
| modifiedTime | value.properties.linkedEnvironmentMetadata.modifiedTime | date-time | The field modifiedTime. |
| hostNameSuffix | value.properties.linkedEnvironmentMetadata.hostNameSuffix | string | The field hostNameSuffix. |
| bapSolutionId | value.properties.linkedEnvironmentMetadata.bapSolutionId | string | The field bapSolutionId. |
| creationTemplates | value.properties.linkedEnvironmentMetadata.creationTemplates | array of string | The field creationTemplates. |
| managementPackageVersion | value.properties.linkedEnvironmentMetadata.managementPackageVersion | string | The field managementPackageVersion. |
| softDeletedTime | value.properties.softDeletedTime | date-time | The field softDeletedTime. |
| message | value.properties.provisioningDetails.message | string | The field message. |
| operations | value.properties.provisioningDetails.operations | array of object | The field operations. |
| httpStatus | value.properties.provisioningDetails.operations.httpStatus | string | The field httpStatus. |
| code | value.properties.provisioningDetails.operations.code | string | The field code. |

### Publish App

- Operation ID:
    - Publish-App

Publishes the latest saved version of a PowerApp to all users with view access.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

### Remove App

- Operation ID:
    - Remove-App

Deletes a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

### Remove Connection

- Operation ID:
    - Remove-Connection

Deletes a Connection.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| Connection Name | connectionName | True | string | Name field of the Connection. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |

### Remove Connector

- Operation ID:
    - Remove-Connector

Deletes a Connector.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connector Name | connectorName | True | string | Name field of the Connector. |
| API Version | api-version |  | string | The date value of the API version. |
| Filter Query | $filter |  | string | A filter query parameter. |

### Restore App Version

- Operation ID:
    - Restore-AppVersion

Restores the specified App Version as the current version.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| PowerApp Version | appVersionName | True | string | Version field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The field name. |
| id | id | string | The field id. |
| type | type | string | The field type. |
| primaryDeviceWidth | tags.primaryDeviceWidth | string | The field primaryDeviceWidth. |
| primaryDeviceHeight | tags.primaryDeviceHeight | string | The field primaryDeviceHeight. |
| sienaVersion | tags.sienaVersion | string | The field sienaVersion. |
| deviceCapabilities | tags.deviceCapabilities | string | The field deviceCapabilities. |
| supportsPortrait | tags.supportsPortrait | string | The field supportsPortrait. |
| supportsLandscape | tags.supportsLandscape | string | The field supportsLandscape. |
| primaryFormFactor | tags.primaryFormFactor | string | The field primaryFormFactor. |
| publisherVersion | tags.publisherVersion | string | The field publisherVersion. |
| minimumRequiredApiVersion | tags.minimumRequiredApiVersion | string | The field minimumRequiredApiVersion. |
| appVersion | properties.appVersion | date-time | The field appVersion. |
| lastDraftVersion | properties.lastDraftVersion | date-time | The field lastDraftVersion. |
| lifeCycleId | properties.lifeCycleId | string | The field lifeCycleId. |
| status | properties.status | string | The field status. |
| major | properties.createdByClientVersion.major | integer | The field major. |
| minor | properties.createdByClientVersion.minor | integer | The field minor. |
| build | properties.createdByClientVersion.build | integer | The field build. |
| revision | properties.createdByClientVersion.revision | integer | The field revision. |
| majorRevision | properties.createdByClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | properties.createdByClientVersion.minorRevision | integer | The field minorRevision. |
| major | properties.minClientVersion.major | integer | The field major. |
| minor | properties.minClientVersion.minor | integer | The field minor. |
| build | properties.minClientVersion.build | integer | The field build. |
| revision | properties.minClientVersion.revision | integer | The field revision. |
| majorRevision | properties.minClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | properties.minClientVersion.minorRevision | integer | The field minorRevision. |
| id | properties.owner.id | string | The field id. |
| displayName | properties.owner.displayName | string | The field displayName. |
| email | properties.owner.email | string | The field email. |
| type | properties.owner.type | string | The field type. |
| tenantId | properties.owner.tenantId | string | The field tenantId. |
| userPrincipalName | properties.owner.userPrincipalName | string | The field userPrincipalName. |
| id | properties.createdBy.id | string | The field id. |
| displayName | properties.createdBy.displayName | string | The field displayName. |
| email | properties.createdBy.email | string | The field email. |
| type | properties.createdBy.type | string | The field type. |
| tenantId | properties.createdBy.tenantId | string | The field tenantId. |
| userPrincipalName | properties.createdBy.userPrincipalName | string | The field userPrincipalName. |
| id | properties.lastModifiedBy.id | string | The field id. |
| displayName | properties.lastModifiedBy.displayName | string | The field displayName. |
| email | properties.lastModifiedBy.email | string | The field email. |
| type | properties.lastModifiedBy.type | string | The field type. |
| tenantId | properties.lastModifiedBy.tenantId | string | The field tenantId. |
| userPrincipalName | properties.lastModifiedBy.userPrincipalName | string | The field userPrincipalName. |
| id | properties.lastPublishedBy.id | string | The field id. |
| displayName | properties.lastPublishedBy.displayName | string | The field displayName. |
| email | properties.lastPublishedBy.email | string | The field email. |
| type | properties.lastPublishedBy.type | string | The field type. |
| tenantId | properties.lastPublishedBy.tenantId | string | The field tenantId. |
| userPrincipalName | properties.lastPublishedBy.userPrincipalName | string | The field userPrincipalName. |
| backgroundColor | properties.backgroundColor | string | The field backgroundColor. |
| backgroundImageUri | properties.backgroundImageUri | string | The field backgroundImageUri. |
| displayName | properties.displayName | string | The field displayName. |
| description | properties.description | string | The field description. |
| value | properties.appUris.documentUri.value | string | The field value. |
| readonlyValue | properties.appUris.documentUri.readonlyValue | string | The field readonlyValue. |
| imageUris | properties.appUris.imageUris | array of string | The field imageUris. |
| createdTime | properties.createdTime | date-time | The field createdTime. |
| lastModifiedTime | properties.lastModifiedTime | date-time | The field lastModifiedTime. |
| lastPublishTime | properties.lastPublishTime | date-time | The field lastPublishTime. |
| sharedGroupsCount | properties.sharedGroupsCount | integer | The field sharedGroupsCount. |
| sharedUsersCount | properties.sharedUsersCount | integer | The field sharedUsersCount. |
| appOpenProtocolUri | properties.appOpenProtocolUri | string | The field appOpenProtocolUri. |
| appOpenUri | properties.appOpenUri | string | The field appOpenUri. |
| favorite | properties.userAppMetadata.favorite | string | The field favorite. |
| includeInAppsList | properties.userAppMetadata.includeInAppsList | boolean | The field includeInAppsList. |
| isFeaturedApp | properties.isFeaturedApp | boolean | The field isFeaturedApp. |
| bypassConsent | properties.bypassConsent | boolean | The field bypassConsent. |
| isHeroApp | properties.isHeroApp | boolean | The field isHeroApp. |
| id | properties.environment.id | string | The field id. |
| name | properties.environment.name | string | The field name. |

### Set App Display Name

- Operation ID:
    - Set-AppDisplayName

Updates the display name of a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| PowerApp Name | app | True | string | Name field of the PowerApp. |
| API Version | api-version |  | string | The date value of the API version. |
| Content Type | Content-Type |  | string | The content type of the API request. |
| displayName | displayName |  | string | Display Name of App. |

## Definitions

### ResourceArray[PowerApp]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of PowerApp | The field value. |

### PowerApp

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The field name. |
| id | id | string | The field id. |
| type | type | string | The field type. |
| primaryDeviceWidth | tags.primaryDeviceWidth | string | The field primaryDeviceWidth. |
| primaryDeviceHeight | tags.primaryDeviceHeight | string | The field primaryDeviceHeight. |
| sienaVersion | tags.sienaVersion | string | The field sienaVersion. |
| deviceCapabilities | tags.deviceCapabilities | string | The field deviceCapabilities. |
| supportsPortrait | tags.supportsPortrait | string | The field supportsPortrait. |
| supportsLandscape | tags.supportsLandscape | string | The field supportsLandscape. |
| primaryFormFactor | tags.primaryFormFactor | string | The field primaryFormFactor. |
| publisherVersion | tags.publisherVersion | string | The field publisherVersion. |
| minimumRequiredApiVersion | tags.minimumRequiredApiVersion | string | The field minimumRequiredApiVersion. |
| appVersion | properties.appVersion | date-time | The field appVersion. |
| major | properties.createdByClientVersion.major | integer | The field major. |
| minor | properties.createdByClientVersion.minor | integer | The field minor. |
| build | properties.createdByClientVersion.build | integer | The field build. |
| revision | properties.createdByClientVersion.revision | integer | The field revision. |
| majorRevision | properties.createdByClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | properties.createdByClientVersion.minorRevision | integer | The field minorRevision. |
| major | properties.minClientVersion.major | integer | The field major. |
| minor | properties.minClientVersion.minor | integer | The field minor. |
| build | properties.minClientVersion.build | integer | The field build. |
| revision | properties.minClientVersion.revision | integer | The field revision. |
| majorRevision | properties.minClientVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | properties.minClientVersion.minorRevision | integer | The field minorRevision. |
| id | properties.owner.id | string | The field id. |
| displayName | properties.owner.displayName | string | The field displayName. |
| email | properties.owner.email | string | The field email. |
| type | properties.owner.type | string | The field type. |
| tenantId | properties.owner.tenantId | string | The field tenantId. |
| userPrincipalName | properties.owner.userPrincipalName | string | The field userPrincipalName. |
| id | properties.createdBy.id | string | The field id. |
| displayName | properties.createdBy.displayName | string | The field displayName. |
| email | properties.createdBy.email | string | The field email. |
| type | properties.createdBy.type | string | The field type. |
| tenantId | properties.createdBy.tenantId | string | The field tenantId. |
| userPrincipalName | properties.createdBy.userPrincipalName | string | The field userPrincipalName. |
| id | properties.lastModifiedBy.id | string | The field id. |
| displayName | properties.lastModifiedBy.displayName | string | The field displayName. |
| email | properties.lastModifiedBy.email | string | The field email. |
| type | properties.lastModifiedBy.type | string | The field type. |
| tenantId | properties.lastModifiedBy.tenantId | string | The field tenantId. |
| userPrincipalName | properties.lastModifiedBy.userPrincipalName | string | The field userPrincipalName. |
| backgroundColor | properties.backgroundColor | string | The field backgroundColor. |
| backgroundImageUri | properties.backgroundImageUri | string | The field backgroundImageUri. |
| displayName | properties.displayName | string | The field displayName. |
| description | properties.description | string | The field description. |
| value | properties.appUris.documentUri.value | string | The field value. |
| readonlyValue | properties.appUris.documentUri.readonlyValue | string | The field readonlyValue. |
| imageUris | properties.appUris.imageUris | array of string | The field imageUris. |
| createdTime | properties.createdTime | date-time | The field createdTime. |
| lastModifiedTime | properties.lastModifiedTime | date-time | The field lastModifiedTime. |
| sharedGroupsCount | properties.sharedGroupsCount | integer | The field sharedGroupsCount. |
| sharedUsersCount | properties.sharedUsersCount | integer | The field sharedUsersCount. |
| appOpenProtocolUri | properties.appOpenProtocolUri | string | The field appOpenProtocolUri. |
| appOpenUri | properties.appOpenUri | string | The field appOpenUri. |
| favorite | properties.userAppMetadata.favorite | string | The field favorite. |
| lastOpenedTime | properties.userAppMetadata.lastOpenedTime | date-time | The field lastOpenedTime. |
| includeInAppsList | properties.userAppMetadata.includeInAppsList | boolean | The field includeInAppsList. |
| isFeaturedApp | properties.isFeaturedApp | boolean | The field isFeaturedApp. |
| bypassConsent | properties.bypassConsent | boolean | The field bypassConsent. |
| isHeroApp | properties.isHeroApp | boolean | The field isHeroApp. |
| id | properties.environment.id | string | The field id. |
| name | properties.environment.name | string | The field name. |
| value | properties.appPackageDetails.playerPackage.value | string | The field value. |
| readonlyValue | properties.appPackageDetails.playerPackage.readonlyValue | string | The field readonlyValue. |
| value | properties.appPackageDetails.webPackage.value | string | The field value. |
| readonlyValue | properties.appPackageDetails.webPackage.readonlyValue | string | The field readonlyValue. |
| major | properties.appPackageDetails.documentServerVersion.major | integer | The field major. |
| minor | properties.appPackageDetails.documentServerVersion.minor | integer | The field minor. |
| build | properties.appPackageDetails.documentServerVersion.build | integer | The field build. |
| revision | properties.appPackageDetails.documentServerVersion.revision | integer | The field revision. |
| majorRevision | properties.appPackageDetails.documentServerVersion.majorRevision | integer | The field majorRevision. |
| minorRevision | properties.appPackageDetails.documentServerVersion.minorRevision | integer | The field minorRevision. |
| appPackageResourcesKind | properties.appPackageDetails.appPackageResourcesKind | string | The field appPackageResourcesKind. |
| packagePropertiesJson | properties.appPackageDetails.packagePropertiesJson | string | The field packagePropertiesJson. |