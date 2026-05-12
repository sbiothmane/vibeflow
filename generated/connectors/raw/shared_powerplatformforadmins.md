---
layout: Reference
title: Power Platform for Admins - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerplatformforadmins/
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
document_id: 23643230-6ac3-2db9-58fa-5cade62a3808
document_version_independent_id: 272a10c3-d672-f035-20a0-8a272cb93a81
updated_at: 2026-03-26T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/powerplatformforadmins/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/ddd50f862a19e850e063936ce2b61ad4eec06165/docs/powerplatformforadmins/index.yml
git_commit_id: ddd50f862a19e850e063936ce2b61ad4eec06165
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerplatformforadmins/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/powerplatformforadmins/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/e6f942e8-55a7-4c86-b8e3-7456508ea850
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/0ceb3227-2ff7-4d97-8e75-3d7b9ccc937a
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/c6f99e62-1cf6-4b71-af9b-649b05f80cce
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f1834696-48d6-470d-966b-6ee418881596
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/4d680e1a-c470-4772-a236-5c714bd09be0
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3f56b378-07a9-4fa1-afe8-9889fdc77628
platformId: fbc9df94-af0e-56e6-7048-507985c3f6f6
---

# Power Platform for Admins

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1802/1.0.1802.4640/powerplatformforadmins/icon.png)
Power Platform Management Connector provides access to environment lifecycle management capabilities, DLP policy management, and other admin capabilities provided in the BAP API.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft Power Apps Support |
| URL | https://powerapps.microsoft.com/en-us/support/ |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://admin.powerplatform.microsoft.com/ |
| Privacy policy | https://privacy.microsoft.com/en-us/privacystatement |
| Categories | IT Operations |

Power Platform for Admins is a connector interface to access the Business Applications Platform (BAP) API, which is used to manage the admin-related resources of the Power Platform -- the same API that operates the [Power Platform Admin Center](https://aka.ms/ppac). This includes management of Environment lifecycle and permissions, Dataverse provisioning operations, DLP policies, and User sync.

## Prerequisites

Any user can create an Microsoft Entra ID authenticated connection to this connector, the data will be returned based on the scope of the user.

- Power Platform service admins will have access to all resources and operations available in their tenant from this endpoint.
- Environment admins will only have access to data and operations on their environments, DLP policies they can manage or are affected by.

## Known issues and limitations

1. **Do not pass a null or Blank() value as an API connector group** (array) when creating or updating a DLP policy, it could break the policy and become unusable with other unintended consequences. If the group is not supposed to have connectors in it, pass an empty set of square brackets [ ].
2. The old DLP operations do not work with the updated DLP blocked groups and are being deprecated. Please use the 'V2' versions of all DLP operations.
3. DLP policy groups do not auto-populate with connectors, so they will need to be retrieved, formatted, and added as input parameters:
    - Make an array variable to store the connectors.
    - Save the tenant's default environment ID into a variable.
    - Use the [GetConnectors](/en-us/connectors/powerappsforappmakers/#get-connectors) operation from the Power Platform for App Makers to retrieve all the connectors for an environment (use the filter: "environment eq '{environmentName}' ", where the environment name is from the previous step).
    - Use the Select operation to only use the id, name, and type fields from the GetConnectors response (use the last 'value' dynamic content option). Put id, name, and type in the left side, and map the id, displayName, and type in the right side of the select action.
    - Save the output of Select to the array variable
    - Append these hardcoded connectors to the array variable (they do not show up in the GetConnectors response): 

        ```
        [
            {
              "id": "/providers/Microsoft.PowerApps/apis/shared_microsoftspatialservices",
              "name": "Spatial Services",
              "type": "Microsoft.PowerApps/apis"
            },
            {
              "id": "HttpRequestReceived",
              "name": "When a HTTP request is received",
              "type": "Microsoft.PowerApps/apis"
            },
            {
              "id": "HttpWebhook",
              "name": "HTTP Webhook",
              "type": "Microsoft.PowerApps/apis"
            },
              {
              "id": "Http",
              "name": "HTTP",
              "type": "Microsoft.PowerApps/apis"
            }
        ]
        ```

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Create CDS Database | Creates a new CDS instance in the specified Environment. |
| --- | --- |
| Create DLP Policy V2 | Creates a new DLP policy. |
| Create Environment | Creates a new Environment. |
| Create Environment DLP Policy | Creates an Environment DLP Policy. |
| Create Tenant DLP Policy | Creates a new Tenant DLP Policy. |
| Delete DLP Policy V2 | Deletes a DLP Policy. |
| Delete Environment | Deletes an Environment. |
| Delete Environment DLP Policy | Deletes an Environment DLP Policy. |
| Delete Tenant DLP Policy | Deletes a Tenant DLP Policy. |
| Edit Environment Role Assignment | Sets permissions for an Environment. |
| Force Sync user | Used to sync user to CRM. |
| Get CDS Provisioning Status | Used to check the status of a provisioning operation. |
| Get database provisioning status | Used to check the status of a provisioning operation. |
| Get DLP Policy V2 | Returns a DLP Policy. |
| Get Environment as Admin | Returns a single Environment as Admin. |
| Get Environment DLP Policy | Returns an Environment DLP Policy. |
| Get Environment Operation Status (Preview) | Used to check the status of an environment operation, sucn as deletion. |
| Get Lifecycle Operation Status | Returns the current status of the lifecycle operation that occurs after an environment patch. |
| Get Tenant DLP Policy | Returns a Tenant DLP Policy. |
| List DLP Policies | Returns a list of all Tenant and Environment DLP Policies. |
| List DLP Policies V2 | Returns an list of all DLP policies the account can access. |
| List Environment Role Assignments | Returns a list of permissions for an Environment without CDS for Apps. |
| List Environments as Admin | Returns a list of Environments. |
| List Supported Environment Currencies | Returns a list of supported Currencies based on the location. |
| List Supported Environment Languages | Returns a list of supported Languages based on the location. |
| List Supported Locations | Returns a list of Locations where BAP service is supported. |
| List Unblockable Connectors | Returns a list of connectors that cannot be blocked with a DLP policy. |
| List Virtual Connectors | Returns a list of virtual connectors. |
| Update DLP Policy V2 | Updates a DLP Policy. |
| Update Environment | Updates properties of an environment. |
| Update Environment DLP Policy | Updates an Environment DLP Policy. |
| Update Tenant DLP Policy | Updates the fields in a DLP Policy. |
| Validate Environment Delete | Used to check if an Environment can be deleted. |

### Create CDS Database

- Operation ID:
    - ProvisionInstance

Creates a new CDS instance in the specified Environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Base language | baseLanguage |  | integer | Any language returned from List Environment Languages. |
| Currency code | code |  | string | Any currency code returned from List Environment Currencies. |
| Templates | templates |  | array of string | Validated list of CRM templates to pass to the provision call. |

#### Returns

Environment object.

- Body
    - Environment

### Create DLP Policy V2

- Operation ID:
    - CreatePolicyV2

Creates a new DLP policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Display name | displayName |  | string |  |
| Default connectors classification | defaultConnectorsClassification |  | string |  |
| classification | classification | True | string |  |
| id | id | True | string |  |
| type | type | True | string |  |
| name | name | True | string |  |
| Policy environment type | environmentType |  | string |  |
| id | id | True | string |  |
| type | type | True | string |  |
| name | name | True | string |  |

#### Returns

- Body
    - PolicyV2

### Create Environment

- Operation ID:
    - NewAdminEnvironment

Creates a new Environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version | True | string | The date value of the API. |
| Location | location | True | string | Region the Environment is deployed in. |
| Display Name | displayName | True | string | Vanity name of the Environment. |
| Environment Sku | environmentSku | True | string | Type of Environment. |

#### Returns

Environment object.

- Body
    - Environment

### Create Environment DLP Policy

- Operation ID:
    - NewEnvironmentPolicy

Creates an Environment DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |
| Environment | environment | True | string | Name of the Environment. |
| Display Name | displayName | True | string | Api Policy display name. |
| Schema Version | $schema | True | string | Api Policy definition $schema. |
| Name | name | True | string | Policy Environment name field. |
| ID | id | True | string | Policy Environment ID field. |
| Type | type | True | string | Policy Environment type field. |
| Business Data description | description |  | string | Policy business data group description. |
| Connector ID | id |  | string | Business Data connector ID field. |
| Connector Name | name |  | string | Business Data connector name field. |
| Connector Type | type |  | string | Business Data connector type field. |
| Non Business Data description | description |  | string | Policy non business data group description. |
| Connector ID | id |  | string | Non Business Data connector ID field. |
| Connector Name | name |  | string | Non Business Data connector name field. |
| Connector Type | type |  | string | Non Business Data connector type field. |
| Default Group | defaultApiGroup | True | string | Group a new connector is automatically added to. |
| type | type | True | string | Policy rule apiGroupRule type. |
| apiGroup | apiGroup | True | string | Policy rule apiGroupRule parameter apiGroup. |
| Block Action Type | type | True | string | Block action type, leave blank if adding a block is not desired. |

#### Returns

- Body
    - Policy

### Create Tenant DLP Policy

- Operation ID:
    - NewTenantPolicy

Creates a new Tenant DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |
| Display Name | displayName | True | string | Api Policy display name. |
| Schema Version | $schema | True | string | Api Policy definition $schema. |
| Constraint Type | type | True | string | Policy constraint type, leave blank to apply policy to all Environments. |
| Name | name | True | string | Policy Environment name field. |
| ID | id | True | string | Policy Environment ID field. |
| Type | type | True | string | Policy Environment type field. |
| Environment Filter Type | filterType | True | string | Api Policy constraint environmentFilter1 parameter filterType. |
| Business Data description | description |  | string | Policy business data group description. |
| Connector ID | id |  | string | Business Data connector ID field. |
| Connector Name | name |  | string | Business Data connector name field. |
| Connector Type | type |  | string | Business Data connector type field. |
| Non Business Data description | description |  | string | Policy non business data group description. |
| Connector ID | id |  | string | Non Business Data connector ID field. |
| Connector Name | name |  | string | Non Business Data connector name field. |
| Connector Type | type |  | string | Non Business Data connector type field. |
| Default Group | defaultApiGroup | True | string | Group a new connector is automatically added to. |
| type | type | True | string | Policy rule apiGroupRule type. |
| apiGroup | apiGroup | True | string | Policy rule apiGroupRule parameter apiGroup. |
| Block Action Type | type | True | string | Block action type, leave blank if adding a block is not desired. |

#### Returns

- Body
    - Policy

### Delete DLP Policy V2

- Operation ID:
    - DeletePolicyV2

Deletes a DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |

#### Returns

- response
    - object

### Delete Environment

- Operation ID:
    - Remove-AdminEnvironment

Deletes an Environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- response
    - object

### Delete Environment DLP Policy

- Operation ID:
    - RemoveEnvironmentPolicy

Deletes an Environment DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- response
    - object

### Delete Tenant DLP Policy

- Operation ID:
    - RemoveTenantPolicy

Deletes a Tenant DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- response
    - object

### Edit Environment Role Assignment

- Operation ID:
    - Edit-AdminEnvironmentRoleAssignment

Sets permissions for an Environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |
| Principal Email | email |  | string | The principal email of the user. |
| Principal Tenant ID | tenantId |  | string | The principal tenant ID of the user. |
| Principal Object ID | id |  | string | The principal object ID of the user. |
| Principal Type | type |  | string | The principal type of the user. |
| Role Definition ID | id |  | string | The role definition ID. Format: /providers/Microsoft.BusinessAppPlatform/scopes/admin/environments/{environment}/{roleName}. |
| id | id |  | string | The id field. |

#### Returns

- Body
    - RoleAssignment

### Force Sync user

- Operation ID:
    - Add-AdminPowerAppsSyncUser

Used to sync user to CRM.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| ObjectId | ObjectId | True | string | User object Id. |
| API Version | api-version |  | string | The date value of the API. |

### Get CDS Provisioning Status

- Operation ID:
    - GetProvisionOperation

Used to check the status of a provisioning operation.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Operation | operationName | True | string | Name of the Operation. |
| API Version | api-version |  | string | The date value of the API. |

### Get database provisioning status

- Operation ID:
    - GetProvisionOperationV2

Used to check the status of a provisioning operation.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Operation | operationName | True | string | The name of the operation. This entire URI will be returned as the Location header from /provisionInstance, and will include this value. |
| API Version | api-version |  | string | The date value of the API. |

### Get DLP Policy V2

- Operation ID:
    - GetPolicyV2

Returns a DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - PolicyV2

### Get Environment as Admin

- Operation ID:
    - GetSingleEnvironment

Returns a single Environment as Admin.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

Environment object.

- Body
    - Environment

### Get Environment DLP Policy

- Operation ID:
    - GetEnvironmentPolicy

Returns an Environment DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - Policy

### Get Environment Operation Status (Preview)

- Operation ID:
    - GetEnvironmentOperation

Used to check the status of an environment operation, sucn as deletion.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Operation | operationName | True | string | Name of the Operation. |
| API Version | api-version |  | string | The date value of the API. |

### Get Lifecycle Operation Status

- Operation ID:
    - GetLifecycleOperationStatus

Returns the current status of the lifecycle operation that occurs after an environment patch.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Lifecycle Operation | lifecycleOperationId | True | string | The Id of the lifecycle operation. |
| API Version | api-version |  | string | The date value of the API. |

### Get Tenant DLP Policy

- Operation ID:
    - GetTenantPolicy

Returns a Tenant DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - Policy

### List DLP Policies

- Operation ID:
    - Get-AdminDlpPolicies

Returns a list of all Tenant and Environment DLP Policies.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - ResourceArray[Policy]

### List DLP Policies V2

- Operation ID:
    - ListPoliciesV2

Returns an list of all DLP policies the account can access.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |
| Skip Token | $skiptoken |  | string | The input used to get the next page of the response. |
| Page size | $top |  | integer | Number of DLP Policies in the response. |

#### Returns

- Body
    - ResourceArray[PolicyV2]

### List Environment Role Assignments

- Operation ID:
    - Get-AdminEnvironmentRoleAssignment

Returns a list of permissions for an Environment without CDS for Apps.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - ResourceArray[RoleAssignment]

### List Environments as Admin

- Operation ID:
    - Get-AdminEnvironment

Returns a list of Environments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |
| Skip Token | $skiptoken |  | string | The input used to get the next page of the response. |
| Page size | $top |  | integer | Number of Environments in the response. |
| Expand properties | $expand |  | string | Allows access to expand response properties. |

#### Returns

- Body
    - ResourceArray[Environment]

### List Supported Environment Currencies

- Operation ID:
    - ListEnvironmentCurrencies

Returns a list of supported Currencies based on the location.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | environmentLocation | True | string | The location of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - Currencies

### List Supported Environment Languages

- Operation ID:
    - ListEnvironmentLanguages

Returns a list of supported Languages based on the location.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Location | environmentLocation | True | string | The location of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - Languages

### List Supported Locations

- Operation ID:
    - ListSupportedLocations

Returns a list of Locations where BAP service is supported.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - Locations

### List Unblockable Connectors

- Operation ID:
    - ListUnblockableConnectors

Returns a list of connectors that cannot be blocked with a DLP policy.

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
|  |  | array of object |  |
| id | id | string |  |
| unblockable | metadata.unblockable | boolean |  |

### List Virtual Connectors

- Operation ID:
    - ListVirtualConnectors

Returns a list of virtual connectors.

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
|  |  | array of object |  |
| id | id | string |  |
| virtualConnector | metadata.virtualConnector | boolean |  |
| name | metadata.name | string |  |
| type | metadata.type | string |  |
| iconUri | metadata.iconUri | string |  |
| displayName | metadata.displayName | string |  |

### Update DLP Policy V2

- Operation ID:
    - UpdatePolicyV2

Updates a DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |
| Display name | displayName |  | string |  |
| Default connectors classification | defaultConnectorsClassification |  | string |  |
| classification | classification | True | string |  |
| id | id | True | string |  |
| type | type | True | string |  |
| name | name | True | string |  |
| Policy environment type | environmentType |  | string |  |
| id | id | True | string |  |
| type | type | True | string |  |
| name | name | True | string |  |

#### Returns

- Body
    - PolicyV2

### Update Environment

- Operation ID:
    - UpdateEnvironment

Updates properties of an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |
| description | description |  | string |  |
| displayName | displayName |  | string |  |
| securityGroupId | securityGroupId |  | string |  |

### Update Environment DLP Policy

- Operation ID:
    - EditEnvironmentPolicy

Updates an Environment DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |
| Display Name | displayName | True | string | Api Policy display name. |
| Schema Version | $schema | True | string | Api Policy definition $schema. |
| Name | name | True | string | Policy Environment name field. |
| ID | id | True | string | Policy Environment ID field. |
| Type | type | True | string | Policy Environment type field. |
| Business Data description | description |  | string | Policy business data group description. |
| Connector ID | id |  | string | Business Data connector ID field. |
| Connector Name | name |  | string | Business Data connector name field. |
| Connector Type | type |  | string | Business Data connector type field. |
| Non Business Data description | description |  | string | Policy non business data group description. |
| Connector ID | id |  | string | Non Business Data connector ID field. |
| Connector Name | name |  | string | Non Business Data connector name field. |
| Connector Type | type |  | string | Non Business Data connector type field. |
| Default Group | defaultApiGroup | True | string | Group a new connector is automatically added to. |
| type | type | True | string | Policy rule apiGroupRule type. |
| apiGroup | apiGroup | True | string | Policy rule apiGroupRule parameter apiGroup. |
| Block Action Type | type | True | string | Block action type, leave blank if adding a block is not desired. |

#### Returns

- Body
    - Policy

### Update Tenant DLP Policy

- Operation ID:
    - Edit-AdminDlpPolicy

Updates the fields in a DLP Policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy | policy | True | string | The name field of the Policy. |
| API Version | api-version |  | string | The date value of the API. |
| Display Name | displayName | True | string | Api Policy display name. |
| Schema Version | $schema | True | string | Api Policy definition $schema. |
| Constraint Type | type | True | string | Policy constraint type, leave blank to apply policy to all Environments. |
| Name | name | True | string | Policy Environment name field. |
| ID | id | True | string | Policy Environment ID field. |
| Type | type | True | string | Policy Environment type field. |
| Environment Filter Type | filterType | True | string | Api Policy constraint environmentFilter1 parameter filterType. |
| Business Data description | description |  | string | Policy business data group description. |
| Connector ID | id |  | string | Business Data connector ID field. |
| Connector Name | name |  | string | Business Data connector name field. |
| Connector Type | type |  | string | Business Data connector type field. |
| Non Business Data description | description |  | string | Policy non business data group description. |
| Connector ID | id |  | string | Non Business Data connector ID field. |
| Connector Name | name |  | string | Non Business Data connector name field. |
| Connector Type | type |  | string | Non Business Data connector type field. |
| Default Group | defaultApiGroup | True | string | Group a new connector is automatically added to. |
| type | type | True | string | Policy rule apiGroupRule type. |
| apiGroup | apiGroup | True | string | Policy rule apiGroupRule parameter apiGroup. |
| Block Action Type | type | True | string | Block action type, leave blank if adding a block is not desired. |

#### Returns

- Body
    - Policy

### Validate Environment Delete

- Operation ID:
    - ValidateDelete

Used to check if an Environment can be deleted.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment | environment | True | string | Name of the Environment. |
| API Version | api-version |  | string | The date value of the API. |

#### Returns

- Body
    - ValidateDeleteResponse

## Definitions

### ResourceArray[Policy]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Policy |  |

### Policy

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Policy ID | id | string | Policy ID field. |
| Policy Type | type | string | Policy type field. |
| Policy Name | name | string | Policy name field. |
| Display Name | properties.displayName | string | Api Policy display name. |
| Created time | properties.createdTime | date-time | Api Policy created time. |
| Created by | properties.createdBy | Principal[CreatedBy] | Policy created by principal object. |
| Modified time | properties.lastModifiedTime | date-time | Api Policy modified time. |
| Modified by | properties.lastModifiedBy | Principal[ModifiedBy] | Policy modified by principal object. |
| Schema Version | properties.definition.$schema | PolicySchema | Api Policy definition $schema. |
| Type | properties.definition.constraints.environmentFilter1.type | string | Policy environmentFilter type. |
| Environments | properties.definition.constraints.environmentFilter1.parameters.environments | PolicyEnvironments | Policy Environment. |
| Filter Type | properties.definition.constraints.environmentFilter1.parameters.filterType | string | Api Policy constraint environmentFilter1 parameter filterType. |
| apiGroups | properties.definition.apiGroups | PolicyApiGroups |  |
| Default Group | properties.definition.defaultApiGroup | PolicyDefaultApiGroup | Group a new connector is automatically added to. |
| rules | properties.definition.rules | PolicyRules | Policy rules object. |

### ResourceArray[PolicyV2]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of PolicyV2 | DLP Policy value object array. |
| Next Link | nextLink | string | The URL to get the next page of the DLP Policies list. |

### PolicyV2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string |  |
| displayName | displayName | string |  |
| defaultConnectorsClassification | defaultConnectorsClassification | string |  |
| connectorGroups | connectorGroups | array of object |  |
| classification | connectorGroups.classification | string |  |
| connectors | connectorGroups.connectors | array of object |  |
| id | connectorGroups.connectors.id | string |  |
| name | connectorGroups.connectors.name | string |  |
| type | connectorGroups.connectors.type | string |  |
| environmentType | environmentType | string |  |
| environments | environments | array of object |  |
| id | environments.id | string |  |
| type | environments.type | string |  |
| name | environments.name | string |  |
| id | createdBy.id | string |  |
| displayName | createdBy.displayName | string |  |
| createdTime | createdTime | string |  |
| id | lastModifiedBy.id | string |  |
| displayName | lastModifiedBy.displayName | string |  |
| lastModifiedTime | lastModifiedTime | string |  |
| isLegacySchemaVersion | isLegacySchemaVersion | boolean |  |

### ResourceArray[Environment]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Environment | Environment value object array. |
| Next Link | nextLink | string | The URL to get the next page of the Environments list. |

### Environment

Environment object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | Environment ID field. |
| Type | type | string | Environment type field. |
| Name | name | string | Environment name field. |
| Location | location | string | Environment location field. |
| Azure Region Hint | properties.azureRegionHint | string | Environment azureRegionHint field. |
| Display Name | properties.displayName | string | Display Name of Environment. |
| Created Time | properties.createdTime | date-time | Created Time of Environment. |
| Created by | properties.createdBy | Principal[CreatedBy] | Policy created by principal object. |
| lastModifiedTime | properties.lastModifiedTime | date-time | Environment lastModified date and time. |
| Modified by | properties.lastModifiedBy | Principal[ModifiedBy] | Policy modified by principal object. |
| Provisioning State | properties.provisioningState | string | Environment provisioningState. |
| capacity | properties.capacity | array of object |  |
| capacityType | properties.capacity.capacityType | string |  |
| actualConsumption | properties.capacity.actualConsumption | number |  |
| ratedConsumption | properties.capacity.ratedConsumption | number |  |
| capacityUnit | properties.capacity.capacityUnit | string |  |
| updatedOn | properties.capacity.updatedOn | string |  |
| addons | properties.addons | array of object |  |
| addonType | properties.addons.addonType | string |  |
| allocated | properties.addons.allocated | number |  |
| addonUnit | properties.addons.addonUnit | string |  |
| Creation Type | properties.creationType | string | Creation Type of Environment. |
| Environment Sku | properties.environmentSku | string | Sku ID of Environment. |
| Environment Type | properties.environmentType | string | Type of Environment. |
| Is Default | properties.isDefault | boolean | Is Default Environment or not. |
| Business App Platform | properties.runtimeEndpoints.microsoft.BusinessAppPlatform | string | BusinessAppPlatform runtime endpoint. |
| Common Data Model | properties.runtimeEndpoints.microsoft.CommonDataModel | string | CommonDataModel runtime endpoint. |
| PowerApps | properties.runtimeEndpoints.microsoft.PowerApps | string | PowerApps runtime endpoint. |
| Flow | properties.runtimeEndpoints.microsoft.Flow | string | Flow runtime endpoint. |
| Soft Deleted Time | properties.softDeletedTime | date-time | Environment softDeletedTime. |
| Type | properties.linkedEnvironmentMetadata.type | string | Environment linkedEnvironmentMetadata type. |
| Resource Id | properties.linkedEnvironmentMetadata.resourceId | string | Environment linkedEnvironmentMetadata resourceId. |
| Friendly Name | properties.linkedEnvironmentMetadata.friendlyName | string | Environment linkedEnvironmentMetadata friendlyName. |
| Unique Name | properties.linkedEnvironmentMetadata.uniqueName | string | Environment linkedEnvironmentMetadata uniqueName. |
| Domain Name | properties.linkedEnvironmentMetadata.domainName | string | Environment linkedEnvironmentMetadata domainName. |
| Version | properties.linkedEnvironmentMetadata.version | string | Environment linkedEnvironmentMetadata version. |
| Instance URL | properties.linkedEnvironmentMetadata.instanceUrl | string | Environment linkedEnvironmentMetadata instanceUrl. |
| Instance API URL | properties.linkedEnvironmentMetadata.instanceApiUrl | string | Environment linkedEnvironmentMetadata instanceApiUrl. |
| Base Language | properties.linkedEnvironmentMetadata.baseLanguage | integer | Environment linkedEnvironmentMetadata baseLanguage. |
| Instance State | properties.linkedEnvironmentMetadata.instanceState | string | Environment linkedEnvironmentMetadata instanceState. |
| Created Time | properties.linkedEnvironmentMetadata.createdTime | date-time | Environment linkedEnvironmentMetadata createdTime. |
| Modified Time | properties.linkedEnvironmentMetadata.modifiedTime | date-time | Environment linkedEnvironmentMetadata modifiedTime. |
| Host Name Suffix | properties.linkedEnvironmentMetadata.hostNameSuffix | string | Environment linkedEnvironmentMetadata hostNameSuffix. |
| BAP Solution Id | properties.linkedEnvironmentMetadata.bapSolutionId | string | Environment linkedEnvironmentMetadata bapSolutionId. |
| Creation Templates | properties.linkedEnvironmentMetadata.creationTemplates | array of string | Environment linkedEnvironmentMetadata creationTemplates. |
| Management Package Version | properties.linkedEnvironmentMetadata.managementPackageVersion | string | Environment linkedEnvironmentMetadata managementPackageVersion. |

### PolicyEnvironments

Policy Environment.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | Policy Environment name field. |
| ID | id | string | Policy Environment ID field. |
| Type | type | string | Policy Environment type field. |

### PolicyRules

Policy rules object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | apiGroupRule.type | string | Policy rule apiGroupRule type. |
| apiGroup | apiGroupRule.parameters.apiGroup | string | Policy rule apiGroupRule parameter apiGroup. |
| Block Action Type | apiGroupRule.actions.blockAction.type | string | Block action type, leave blank if adding a block is not desired. |

### PolicySchema

Api Policy definition $schema.

Api Policy definition $schema.

- Schema Version
    - string

### PolicyApiGroups

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| hbi | hbi | PolicyHbi | Policy Hbi group. |
| lbi | lbi | PolicyLbi |  |

### PolicyHbi

Policy Hbi group.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Business Data description | description | string | Policy business data group description. |
| Business Data | apis | array of object | Business Data APIs. |
| Connector ID | apis.id | string | Business Data connector ID field. |
| Connector Name | apis.name | string | Business Data connector name field. |
| Connector Type | apis.type | string | Business Data connector type field. |

### PolicyLbi

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Non Business Data description | description | string | Policy non business data group description. |
| Non Business Data | apis | array of object | Non Business Data APIs. |
| Connector ID | apis.id | string | Non Business Data connector ID field. |
| Connector Name | apis.name | string | Non Business Data connector name field. |
| Connector Type | apis.type | string | Non Business Data connector type field. |

### PolicyDefaultApiGroup

Group a new connector is automatically added to.

Group a new connector is automatically added to.

- Default Group
    - string

### ValidateDeleteResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Can Delete | canInitiateDelete | boolean | Environment can be deleted. |
| Errors array | errors | array of object | Errors array |
| Code | errors.error.code | string | Error code for validate delete. |
| Message | errors.error.message | string | Error message. |
| resourcesToBeDeleted | resourcesToBeDeleted | array of object |  |
| ID | resourcesToBeDeleted.id | string | Resource to be deleted ID. |
| Name | resourcesToBeDeleted.name | string | Resource to be deleted name. |
| Type | resourcesToBeDeleted.type | string | Resource to be deleted type. |

### ResourceArray[RoleAssignment]

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | Environment Role Assignment value object array. |
| id | value.id | string | Environment Role Assignment ID field. |
| type | value.type | string | Environment Role Assignment type field. |
| name | value.name | string | Environment Role Assignment field name. |
| scope | value.properties.scope | string | Environment Role Assignment scope. |
| id | value.properties.roleDefinition.id | string | Environment Role Assignment roleDefinition ID field. |
| type | value.properties.roleDefinition.type | string | Environment Role Assignment roleDefinition type field. |
| name | value.properties.roleDefinition.name | string | Environment Role Assignment roleDefinition field name. |
| id | value.properties.principal.id | string | Environment Role Assignment principal object ID. |
| displayName | value.properties.principal.displayName | string | Environment Role Assignment principal displayName. |
| email | value.properties.principal.email | string | Environment Role Assignment principal email. |
| type | value.properties.principal.type | string | Environment Role Assignment principal type. |

### RoleAssignment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| add | add | array of object | Environment Role Assignment add object. |
| id | add.roleAssignment.id | string | Environment Role Assignment roleAssignment ID field. |
| type | add.roleAssignment.type | string | Environment Role Assignment roleAssignment type field. |
| name | add.roleAssignment.name | string | Environment Role Assignment roleAssignment name field. |
| scope | add.roleAssignment.properties.scope | string | Environment Role Assignment scope. |
| id | add.roleAssignment.properties.roleDefinition.id | string | Environment Role Assignment roleDefinition ID field. |
| type | add.roleAssignment.properties.roleDefinition.type | string | Environment Role Assignment roleDefinition ID field. |
| name | add.roleAssignment.properties.roleDefinition.name | string | Environment Role Assignment roleDefinition name field. |
| id | add.roleAssignment.properties.principal.id | string | Environment Role Assignment principal object ID. |
| displayName | add.roleAssignment.properties.principal.displayName | string | Environment Role Assignment principal displayName. |
| email | add.roleAssignment.properties.principal.email | string | Environment Role Assignment principal email. |
| type | add.roleAssignment.properties.principal.type | string | Environment Role Assignment principal type. |
| httpStatus | add.httpStatus | string | Environment Role Assignment httpStatus. |

### Principal[ModifiedBy]

Policy modified by principal object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | Modified by principal object ID. |
| Display name | displayName | string | Modified by principal displayName. |
| Email | email | string | Modified by principal. |
| Type | type | string | Modified by principal type. |
| Tenant ID | tenantId | string | Modified by principal tenant ID. |
| UPN | userPrincipalName | string | Modified by userPrincipalName. |

### Principal[CreatedBy]

Policy created by principal object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ID | id | string | Api Policy creator principal object ID. |
| Display name | displayName | string | Api Policy creator principal displayName. |
| Email | email | string | Api Policy creator principal email. |
| Type | type | string | Api Policy creator principal type. |
| Tenant ID | tenantId | string | Api Policy creator principal tenant ID. |
| UPN | userPrincipalName | string | Api Policy creator userPrincipalName. |

### Locations

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| ID | value.id | string | Location ID. |
| Name | value.name | string | Location Name. |
| Display Name | value.properties.displayName | string | Location display name. |
| Is Default | value.properties.isDefault | boolean | Is the default location. |
| Is Disabled | value.properties.isDisabled | boolean | Location is Disabled. |

### Currencies

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| ID | value.id | string | Currency ID. |
| Name | value.name | string | Currency name. |
| Locale ID | value.properties.localeId | integer | Locale ID of the currency. |
| Localized Name | value.properties.localizedName | string | Localized name of the currency. |
| Display Name | value.properties.displayName | string | Currency display name. |

### Languages

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| Name | value.name | string | Language name field. |
| ID | value.id | string | Language ID field. |
| Type | value.type | string | Language type field. |
| Locale ID | value.properties.localeId | integer | Language locale ID field. |
| Localized Name | value.properties.localizedName | string | Language localized name field. |
| Display Name | value.properties.displayName | string | Language display name field. |
| Is Tenant Default | value.properties.isTenantDefault | boolean | Language is tenant default field. |

### object

This is the type 'object'.