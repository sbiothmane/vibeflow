---
layout: Reference
title: Power Automate Management - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/flowmanagement/
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
document_id: 0624dd98-0950-674d-ae2e-aef1f0de9188
document_version_independent_id: 7f2dd0dd-fdf3-7e7c-cd79-bd45a606b6a1
updated_at: 2025-10-28T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/flowmanagement/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/8206e49762de48d8b819bd5b28fb62edb257ef8d/docs/flowmanagement/index.yml
git_commit_id: 8206e49762de48d8b819bd5b28fb62edb257ef8d
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: flowmanagement/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/flowmanagement/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: ea356b25-4534-c57f-6490-18e2efe762ca
---

# Power Automate Management

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1778/1.0.1778.4417/flowmanagement/icon.png)
Power Automate Management connector enables interaction with Power Automate Management service. For example: creating, editing, and updating flows. Administrators who want to perform operations with admin privileges should call actions with the 'as Admin' suffix. Service Principal authentication is supported for administrative actions only.

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
| Website | https://make.powerautomate.com/ |

### General Limits

| Name | Value |
| --- | --- |
| Connections per account | 50 |

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
| Client ID | string | The client ID of for the Microsoft Entra ID application |  |
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
| API calls per connection | 5 | 60 seconds |
| Non-Get requests per connection | 300 | 3600 seconds |

## Actions

| Cancel Flow Run | Cancel a flow run. |
| --- | --- |
| Create Connection | Create a connection for the given connector in an environment. |
| Create Flow | Create flow |
| Delete Flow | Delete the given flow in an environment |
| Get Connector | Get the given connector in an environment. |
| Get Flow | Get the given flow in an environment. |
| Get Flow as Admin | Get the given flow from an environment you have admin access to. |
| List Callback URL | List callback URL for the given flow in an environment. |
| List Connectors | Lists all of the connectors available in the given environment. This list will include custom connectors as well as the built-in connectors. |
| List Flow Owners | List all owners of the given flow in an environment. |
| List Flow Run-Only Users | List all run only users of the given flow in an environment. |
| List Flows as Admin (V2) | List all flows in the given environment you have admin access to. This V2 action is a higher performance action that returns only the identifying information about the flow. The flow definition and much of the metadata is not returned. For additional metadata and the flow definition, make a subsequent call to the Get Flows as Admin action. |
| List My Connections | Lists all your connection available in the given environment. |
| List My Environments | List the environments you have access to. |
| List My Flows | List all flows you created in the given environment. |
| Modify Flow Owners | Modify owners of the given flow in an environment. |
| Modify Flow Owners as Admin | Modify owners of the given flow created in an environment you have admin access to. |
| Modify Run-Only Users | Modify run-only users of the given flow in an environment. |
| Restore Deleted Flow as Admin | Restore the given soft-deleted flow in an environment you have admin access to. |
| Resubmit Flow | Resubmit the given flow run in an environment. |
| Turn Off Flow | Stop the given flow in an environment. |
| Turn On Flow | Start the given flow in an environment. |
| Update Flow | Update the given flow in an environment. |

### Cancel Flow Run

- Operation ID:
    - CancelFlowRun

Cancel a flow run.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Run ID | runId | True | string | The ID of the flow run to resubmit. |

### Create Connection

- Operation ID:
    - CreateConnection

Create a connection for the given connector in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Connector | apiName | True | string | Select connector |
| connection | connection |  | dynamic | Connection |

#### Returns

 The outputs of this operation are dynamic. 

### Create Flow

- Operation ID:
    - CreateFlow

Create flow

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow Name | name |  | string |  |
| Flow Display Name | displayName | True | string |  |
| Flow State | state | True | string |  |
| Connection Name | connectionName |  | string |  |
| Connection Display Name | displayName |  | string |  |
| Connector Id | id | True | string |  |
| Either Embedded or Invoker connection | source |  | string |  |
| Logical name of the connection reference | connectionReferenceLogicalName |  | string |  |
| Connector Name | name |  | string |  |
| Connector Display Name | displayName |  | string |  |
| Connection Created Time | createdTime |  | date-time |  |
| Connector Runtime Url | primaryRuntimeUrl |  | string |  |
| Connector Icon Url | iconUri |  | string |  |
| Connector is Custom Api | isCustomApi |  | boolean |  |
| Connector Tier | tier |  | string |  |
| Flow Created Time | createdTime |  | date-time |  |
| Flow Modified Time | lastModifiedTime |  | date-time |  |
| Flow Template Name | templateName |  | string |  |
| Flow Trigger Uri | flowTriggerUri |  | string |  |
| Flow Installation Status | installationStatus |  | string |  |
| Creator tenant ID | tenantId | True | string |  |
| Creator object ID | objectId |  | string |  |
| Creator user ID | userId | True | string |  |
| Creator user type | userType | True | string |  |
| Flow trigger type | type |  | string |  |
| Flow trigger kind | kind |  | string |  |
| Action type | type |  | string |  |
| Swagger operation Id | swaggerOperationId |  | string |  |
| Action Api name | name |  | string |  |
| Action Api id | id |  | string |  |
| Action Api type | type |  | string |  |

#### Returns

- Body
    - Flow

### Delete Flow

- Operation ID:
    - DeleteFlow

Delete the given flow in an environment

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

### Get Connector

- Operation ID:
    - GetApi

Get the given connector in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Connector | apiName | True | string | Select connector |

#### Returns

 The outputs of this operation are dynamic. 

### Get Flow

- Operation ID:
    - GetFlow

Get the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

#### Returns

- Body
    - FlowWithConnectionReferences

### Get Flow as Admin

- Operation ID:
    - AdminGetFlow

Get the given flow from an environment you have admin access to.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Include Flow Definition | includeFlowDefinition |  | boolean | Whether or not to include flow definition. |

#### Returns

- Body
    - AdminFlowWithConnectionReferences

### List Callback URL

- Operation ID:
    - ListCallbackUrl

List callback URL for the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

#### Returns

- Body
    - FlowListCallbackUrlResponse

### List Connectors

- Operation ID:
    - ListApis

Lists all of the connectors available in the given environment. This list will include custom connectors as well as the built-in connectors.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |

#### Returns

- Body
    - ResourceArray[ApiWithoutConnectionParameters]

### List Flow Owners

- Operation ID:
    - ListFlowOwners

List all owners of the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

#### Returns

- Body
    - ResourceArray[FlowPermission]

### List Flow Run-Only Users

- Operation ID:
    - ListFlowUsers

List all run only users of the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

#### Returns

- Body
    - ResourceArray[FlowPermission]

### List Flows as Admin (V2)

- Operation ID:
    - ListFlowsInEnvironment\_V2

List all flows in the given environment you have admin access to. This V2 action is a higher performance action that returns only the identifying information about the flow. The flow definition and much of the metadata is not returned. For additional metadata and the flow definition, make a subsequent call to the Get Flows as Admin action.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Top count | $top |  | integer | Top count |
| Expand Suspension Info | expandSuspensionInfo |  | boolean | Expands the suspension information |
| Include Soft-Deleted Flows | includeSoftDeletedFlows |  | boolean | Whether or not to include soft-deleted flows. |

#### Returns

- Body
    - ResourceArray[AdminFlowWithoutDefinition]

### List My Connections

- Operation ID:
    - ListConnections

Lists all your connection available in the given environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |

#### Returns

- Body
    - ResourceArray[ConnectionWithoutConnectionParameters]

### List My Environments

- Operation ID:
    - ListUserEnvironments

List the environments you have access to.

#### Returns

- Body
    - ResourceArray[Environment]

### List My Flows

- Operation ID:
    - ListMyFlows

List all flows you created in the given environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |

#### Returns

- Body
    - ResourceArray[AdminFlow]

### Modify Flow Owners

- Operation ID:
    - ModifyFlowOwners

Modify owners of the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Add User Object Id | id | True | string |  |
| Add User Type | type | True | string |  |
| Remove User Object Id | id | True | string |  |
| Remove User Type | type | True | string |  |

### Modify Flow Owners as Admin

- Operation ID:
    - AdminModifyFlowOwners

Modify owners of the given flow created in an environment you have admin access to.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Add User Object Id | id | True | string |  |
| Add User Type | type | True | string |  |
| Remove User Object Id | id | True | string |  |
| Remove User Type | type | True | string |  |

### Modify Run-Only Users

- Operation ID:
    - ModifyRunOnlyUsers

Modify run-only users of the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Add User Object Id | id | True | string |  |
| Add User Type | type | True | string |  |
| Remove User Object Id | id | True | string |  |
| Remove User Type | type | True | string |  |

### Restore Deleted Flow as Admin

- Operation ID:
    - AdminRestoreFlow

Restore the given soft-deleted flow in an environment you have admin access to.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

#### Returns

- Body
    - AdminFlowWithConnectionReferences

### Resubmit Flow

- Operation ID:
    - ResubmitFlow

Resubmit the given flow run in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Trigger Name | triggerName | True | string | Name of the flow trigger to resubmit. |
| Run ID | runId | True | string | The ID of the flow run to resubmit. |

### Turn Off Flow

- Operation ID:
    - StopFlow

Stop the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

### Turn On Flow

- Operation ID:
    - StartFlow

Start the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |

### Update Flow

- Operation ID:
    - UpdateFlow

Update the given flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environmentName | True | string | Select environment |
| Flow | flowName | True | string | Select flow |
| Flow Name | name |  | string |  |
| Flow Display Name | displayName | True | string |  |
| Flow State | state | True | string |  |
| Connection Name | connectionName |  | string |  |
| Connection Display Name | displayName |  | string |  |
| Connector Id | id | True | string |  |
| Either Embedded or Invoker connection | source |  | string |  |
| Logical name of the connection reference | connectionReferenceLogicalName |  | string |  |
| Connector Name | name |  | string |  |
| Connector Display Name | displayName |  | string |  |
| Connection Created Time | createdTime |  | date-time |  |
| Connector Runtime Url | primaryRuntimeUrl |  | string |  |
| Connector Icon Url | iconUri |  | string |  |
| Connector is Custom Api | isCustomApi |  | boolean |  |
| Connector Tier | tier |  | string |  |
| Flow Created Time | createdTime |  | date-time |  |
| Flow Modified Time | lastModifiedTime |  | date-time |  |
| Flow Template Name | templateName |  | string |  |
| Flow Trigger Uri | flowTriggerUri |  | string |  |
| Flow Installation Status | installationStatus |  | string |  |
| Creator tenant ID | tenantId | True | string |  |
| Creator object ID | objectId |  | string |  |
| Creator user ID | userId | True | string |  |
| Creator user type | userType | True | string |  |
| Flow trigger type | type |  | string |  |
| Flow trigger kind | kind |  | string |  |
| Action type | type |  | string |  |
| Swagger operation Id | swaggerOperationId |  | string |  |
| Action Api name | name |  | string |  |
| Action Api id | id |  | string |  |
| Action Api type | type |  | string |  |

#### Returns

- Body
    - Flow

## Definitions

### ResourceArray[ApiWithoutConnectionParameters]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ApiWithoutConnectionParameters |  |

### ResourceArray[ConnectionWithoutConnectionParameters]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ConnectionWithoutConnectionParameters |  |

### ResourceArray[Environment]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Environment |  |

### ResourceArray[AdminFlow]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of AdminFlow |  |

### ResourceArray[AdminFlowWithoutDefinition]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of AdminFlowWithoutDefinition |  |

### ResourceArray[FlowPermission]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of FlowPermission |  |

### FlowPermission

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Permission Name | name | string |  |
| properties | properties | PermissionProperties |  |

### PermissionProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| roleName | roleName | string |  |
| principal | principal | Principal |  |

### Principal

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Object Id | id | string |  |
| Display Name | displayName | string |  |
| Email | email | string |  |
| Type | type | string |  |
| Tenant Id | tenantId | string |  |
| Principal Name | userPrincipalName | string |  |
| Owner Thumbnail Photo | thumbnailPhoto | string |  |

### Flow

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Name | name | string |  |
| properties | properties | FlowProperties |  |

### FlowProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Display Name | displayName | string |  |
| Flow State | state | string |  |
| connectionReferences | connectionReferences | ConnectionReferencesDictionary |  |
| Flow Created Time | createdTime | date-time |  |
| Flow Modified Time | lastModifiedTime | date-time |  |
| Flow Template Name | templateName | string |  |
| Flow Trigger Uri | flowTriggerUri | string |  |
| Flow Installation Status | installationStatus | string |  |

### FlowListCallbackUrlResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Callback URL | response.value | string |  |

### FlowWithConnectionReferences

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Name | name | string |  |
| properties | properties | FlowWithConnectionReferencesProperties |  |

### FlowWithConnectionReferencesProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Display Name | displayName | string |  |
| Flow State | state | string |  |
| connectionReferences | connectionReferences | ConnectionReferencesArray |  |
| Flow Created Time | createdTime | date-time |  |
| Flow Modified Time | lastModifiedTime | date-time |  |
| Flow Template Name | templateName | string |  |
| Flow Trigger Uri | flowTriggerUri | string |  |
| Flow Installation Status | installationStatus | string |  |
| creator | creator | UserIdentity |  |
| definitionSummary | definitionSummary | DefinitionSummary |  |

### AdminFlow

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Name | name | string |  |
| properties | properties | AdminFlowProperties |  |

### AdminFlowWithoutDefinition

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Name | name | string |  |
| properties | properties | AdminFlowWithoutDefinitionProperties |  |

### AdminFlowProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Display Name | displayName | string |  |
| Flow State | state | string |  |
| connectionReferences | connectionReferences | ConnectionReferencesDictionary |  |
| Flow Created Time | createdTime | date-time |  |
| Flow Modified Time | lastModifiedTime | date-time |  |
| Flow Template Name | templateName | string |  |
| Flow Trigger Uri | flowTriggerUri | string |  |
| Flow Installation Status | installationStatus | string |  |
| creator | creator | UserIdentity |  |
| definitionSummary | definitionSummary | DefinitionSummary |  |
| estimatedSuspensionData | estimatedSuspensionData | EstimatedSuspensionData |  |

### AdminFlowWithoutDefinitionProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Display Name | displayName | string |  |
| Flow State | state | string |  |
| Flow Created Time | createdTime | date-time |  |
| Flow Modified Time | lastModifiedTime | date-time |  |

### AdminFlowWithConnectionReferences

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Name | name | string |  |
| properties | properties | AdminFlowWithConnectionReferencesProperties |  |

### AdminFlowWithConnectionReferencesProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow Display Name | displayName | string |  |
| Flow State | state | string |  |
| connectionReferences | connectionReferences | ConnectionReferencesArray |  |
| Flow Created Time | createdTime | date-time |  |
| Flow Modified Time | lastModifiedTime | date-time |  |
| Flow Template Name | templateName | string |  |
| Flow Trigger Uri | flowTriggerUri | string |  |
| Flow Installation Status | installationStatus | string |  |
| creator | creator | UserIdentity |  |
| definitionSummary | definitionSummary | DefinitionSummary |  |

### EstimatedSuspensionData

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Flow estimated suspension reason | reason | string |  |
| Flow estimated suspension time | time | date-time |  |
| If the flow is power app plan excluded or not | powerAppPlanExcluded | boolean |  |

### DefinitionSummary

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| triggers | triggers | array of object |  |
| Flow trigger type | triggers.type | string |  |
| Flow trigger kind | triggers.kind | string |  |
| actions | actions | array of object |  |
| Action type | actions.type | string |  |
| Swagger operation Id | actions.swaggerOperationId | string |  |
| Action Api name | actions.api.name | string |  |
| Action Api id | actions.api.id | string |  |
| Action Api type | actions.api.type | string |  |

### UserIdentity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Creator tenant ID | tenantId | string |  |
| Creator object ID | objectId | string |  |
| Creator user ID | userId | string |  |
| Creator user type | userType | string |  |

### Environment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Environment Name | name | string |  |
| Environment Location | location | string |  |
| properties | properties | EnvironmentProperties |  |

### EnvironmentProperties

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Environment Display Name | displayName | string |  |
| Environment Description | description | string |  |
| Environment Created Time | createdTime | date-time |  |
| Environment Last Modified Time | lastModifiedTime | date-time |  |
| Environment Provisioning State | provisioningState | string |  |
| Environment Creation Type | creationType | string |  |
| Environment Sku | environmentSku | string |  |
| Environment Type | environmentType | string |  |
| Is Default Environment | isDefault | boolean |  |

### ConnectionReferencesArray

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | ConnectionReference |  |

### ConnectionReferencesDictionary

### ConnectionReference

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connection Name | connectionName | string |  |
| Connection Display Name | displayName | string |  |
| Connector Id | id | string |  |
| Either Embedded or Invoker connection | source | string |  |
| Logical name of the connection reference | connectionReferenceLogicalName | string |  |
| apiDefinition | apiDefinition | ApiWithoutConnectionParameters |  |

### ApiWithoutConnectionParameters

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connector Name | name | string |  |
| properties | properties | ApiPropertiesWithoutConnectionParameters |  |

### ApiPropertiesWithoutConnectionParameters

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connector Display Name | displayName | string |  |
| Connection Created Time | createdTime | date-time |  |
| Connector Runtime Url | primaryRuntimeUrl | string |  |
| Connector Icon Url | iconUri | string |  |
| Connector is Custom Api | isCustomApi | boolean |  |
| Connector Tier | tier | string |  |

### ConnectionWithoutConnectionParameters

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connection Name | name | string |  |
| properties | properties | ConnectionPropertiesWithoutConnectionParameters |  |

### ConnectionPropertiesWithoutConnectionParameters

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Connector Display Name | displayName | string |  |
| Connector Id | apiId | string |  |
| Connection Created Time | createdTime | date-time |  |
| Connection Last Modified Time | lastModifiedTime | date-time |  |