---
layout: Reference
title: Azure Resource Manager - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/arm/
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
document_id: d42574e1-1616-a834-454c-0775cfce46fb
document_version_independent_id: 35fd5c8f-fb21-6056-c100-80d418392ddc
updated_at: 2025-06-04T19:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/ARM/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/27fe194a230990f85821e4a5f2335e427558aed0/docs/ARM/index.yml
git_commit_id: 27fe194a230990f85821e4a5f2335e427558aed0
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: arm/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/ARM/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/68ec7f3a-2bc6-459f-b959-19beb729907d
- https://authoring-docs-microsoft.poolparty.biz/devrel/97159432-14a9-4307-a469-d2f2c75f0e33
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/90370425-aca4-4a39-9533-d52e5e002a5d
- https://authoring-docs-microsoft.poolparty.biz/devrel/50565c62-5f6b-4687-be38-323113c72c2e
platformId: 466319ec-0dac-4b19-be96-b3d48731732d
---

# Azure Resource Manager

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1751/1.0.1751.4207/arm/icon.png)
Azure Resource Manager exposes the APIs to manage all of your Azure resources.

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
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/features/resource-manager/ |

## Known Issues and Limitations

- If you experience an error with the message *"Could not find any valid connection for connection reference name 'shared\_office365' in APIM tokens header"*, you can troubleshoot by doing the following:
    - Clear the browser's cache.
    - Delete the connection and then re-add it.
- List subscription resource tags action may pull the deleted tag data due to limitations within the underlying service that manages tag data.
    - As a workaround use Azure Resource Graph([https://learn.microsoft.com/en-us/rest/api/azureresourcegraph/resourcegraph/resources/resources?view=rest-azureresourcegraph-resourcegraph-2022-10-01&tabs=HTTP](/en-us/rest/api/azureresourcegraph/resourcegraph/resources/resources?view=rest-azureresourcegraph-resourcegraph-2022-10-01&amp;tabs=HTTP)) call using Http connector.
- By design, the ARM Connector in Power Automate does not support direct user role assignments for Azure Key Vault secrets.

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
| API calls per connection | 1200 | 60 seconds |

## Actions

| Cancel a template deployment | Cancel a currently running template deployment. All pending template operations will be suspended. |
| --- | --- |
| Create or update a resource | Creates or updates a resource. The response code can be used to distinguish between a create (201) or update (200). |
| Create or update a resource group | Creates or updates a resource group. The response code can be used to distinguish between a create (201) or update (200). |
| Create or update a subscription resource tag name | Create or update a subscription resource tag name. |
| Create or update a subscription resource tag value | Create or update a subscription resource tag value. |
| Create or update a template deployment | Create or update a named resource group template deployment. A template and parameters are expected for the request to succeed. |
| Delete a resource | Deletes a resource. |
| Delete a resource group | Delete a particular resource group within the subscription. |
| Delete a subscription resource tag name | Delete a subscription resource tag name. |
| Delete a subscription resource tag value | Delete a subscription resource tag value. |
| Delete template deployment | Deletes a resource group template deployment. The resources will not be deleted; only the metadata about the template deployment. |
| Export a resource group template | Exports a deployment template from an existing resource group. This can only be successful if the underlying resources have a schema defined by Microsoft. |
| Export deployment template | Exports a template from a past resource group deployment. |
| Invoke resource operation | Invokes an operation on an Azure resource. |
| Invoke resource operation in provider | Invokes an operation on an Azure resource. |
| List resource groups | Lists all the resource groups within the subscription. The results are paginated at 1,000+ records. |
| List resource providers | Lists the resource providers available for the subscription. |
| List resources by resource group | Lists all the resources under a resource group. |
| List resources by subscription | Reads all of the resources under a particular subscription. The results are paginated at 1,000+ records. |
| List subscription resource tags | Lists all the subscription resource tags. |
| List subscriptions | Gets a list of all the subscriptions to which the principal has access. |
| List template deployments | Lists all the resource group template deployments. This operation is useful to know what has been provisioned thus far. |
| Lists template deployment operations | Lists all the template deployment operations. This is useful for troubleshooting failed template deployments. |
| Lists the subscription locations | Lists the locations available for the subscription. |
| Read a resource | Reads a resource object. |
| Read a resource group | Reads a particular resource group within the subscription. |
| Read a resource in provider | Reads a resource object. |
| Read a subscription | Reads the details for a particular subscription. |
| Read a template deployment | Reads a template deployment within a resource group. |
| Read a template deployment operation | Reads a particular resource group template deployment operation. This is useful for troubleshooting failed template deployments. |
| Read resource provider | Reads a particular resource provider within the subscription. |
| Register resource provider | Registers a resource provider to be used with a subscription. This will provision permissions for the service into your subscription. |
| Unregister resource provider | Unregisters provider from a subscription. This operation will fail if there are any resources from that resource provider in the subscription. |
| Update an existing resource group | Updates an existing resource group. If the resource does not exist, this request will fail. |
| Validate a template deployment | Validates a deployment template. This operation does not have side effects and can be used to test a template deployment for syntax or logical errors. |

### Cancel a template deployment

- Operation ID:
    - Deployments\_Cancel

Cancel a currently running template deployment. All pending template operations will be suspended.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |

### Create or update a resource

- Operation ID:
    - Resources\_CreateOrUpdateById

Creates or updates a resource. The response code can be used to distinguish between a create (201) or update (200).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |
| Id | id |  | string | Resource Id |
| Name | name |  | string | Resource name |
| Type | type |  | string | Resource type |
| Location | location |  | string | Resource location |
| Tags | tags |  | object | Resource tags |
| Id | name |  | string | The plan ID. |
| Publisher | publisher |  | string | The publisher ID. |
| Product | product |  | string | The offer ID. |
| Promotion Code | promotionCode |  | string | The promotion code. |
| Kind | kind |  | string | The kind of the resource. |
| Managed By | managedBy |  | string | Id of the resource that manages this resource. |
| Name | name |  | string | The sku name. |
| Tier | tier |  | string | The sku tier. |
| Size | size |  | string | The sku size. |
| Family | family |  | string | The sku family. |
| Model | model |  | string | The sku model. |
| Capacity | capacity |  | integer | The sku capacity. |
| Principal Id | principalId |  | string | The principal id of resource identity. |
| Tenant Id | tenantId |  | string | The tenant id of resource. |
| Type | type |  | string | The identity type. |
| Properties | properties |  | object | The resource properties. |

#### Returns

Resource information.

- Body
    - GenericResource

### Create or update a resource group

- Operation ID:
    - ResourceGroups\_CreateOrUpdate

Creates or updates a resource group. The response code can be used to distinguish between a create (201) or update (200).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group Name | resourceGroupName | True | string | The name of the resource group to be created or updated. |
| Id | id |  | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). |
| Name | name |  | string | The Name of the resource group. |
| Location | location | True | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. |
| Managed By | managedBy |  | string | Id of the resource that manages this resource group. |
| Tags | tags |  | object | The tags attached to the resource group. |
| Provisioning State | provisioningState |  | string | The provisioning state. |

#### Returns

Resource group information.

- Body
    - ResourceGroup

### Create or update a subscription resource tag name

- Operation ID:
    - Tags\_CreateOrUpdate

Create or update a subscription resource tag name.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Tag Name | tagName | True | string | The name of the tag. |

#### Returns

Tag details.

- Body
    - TagDetails

### Create or update a subscription resource tag value

- Operation ID:
    - Tags\_CreateOrUpdateValue

Create or update a subscription resource tag value.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Tag Name | tagName | True | string | The name of the tag. |
| Tag Value | tagValue | True | string | The value of the tag. |

#### Returns

Tag information.

- Body
    - TagValue

### Create or update a template deployment

- Operation ID:
    - Deployments\_CreateOrUpdate

Create or update a named resource group template deployment. A template and parameters are expected for the request to succeed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the deployment. |
| Template Content | template |  | object | The template content. It can be a JObject or a well formed JSON string. Use only one of Template or TemplateLink. |
| Template URI | uri | True | string | URI referencing the template. |
| Template Content Version | contentVersion |  | string | If included it must match the ContentVersion in the template. |
| Parameters | parameters |  | object | Deployment parameters. It can be a JObject or a well formed JSON string. Use only one of Parameters or ParametersLink. |
| Parameters URI | uri | True | string | URI referencing the template. |
| Parameters Content Version | contentVersion |  | string | If included it must match the ContentVersion in the template. |
| Deployment Mode | mode | True | string | The deployment mode. |
| Detail Level | detailLevel |  | string | The debug detail level. |
| Wait for Deployment | wait |  | boolean | If the action should wait until deployment is completed |

#### Returns

Deployment information.

- Body
    - DeploymentExtended

### Delete a resource

- Operation ID:
    - Resources\_DeleteById

Deletes a resource.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |

### Delete a resource group

- Operation ID:
    - ResourceGroups\_Delete

Delete a particular resource group within the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |

### Delete a subscription resource tag name

- Operation ID:
    - Tags\_Delete

Delete a subscription resource tag name.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Tag Name | tagName | True | string | The name of the tag. |

### Delete a subscription resource tag value

- Operation ID:
    - Tags\_DeleteValue

Delete a subscription resource tag value.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Tag Name | tagName | True | string | The name of the tag. |
| Tag Value | tagValue | True | string | The value of the tag. |

### Delete template deployment

- Operation ID:
    - Deployments\_Delete

Deletes a resource group template deployment. The resources will not be deleted; only the metadata about the template deployment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |

### Export a resource group template

- Operation ID:
    - ResourceGroups\_ExportTemplate

Exports a deployment template from an existing resource group. This can only be successful if the underlying resources have a schema defined by Microsoft.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| resources | resources |  | array of string | The ids of the resources. The only supported string currently is '\*' (all resources). Future api updates will support exporting specific resources. |
| options | options |  | string | The export template options. Supported values include 'IncludeParameterDefaultValue', 'IncludeComments' or 'IncludeParameterDefaultValue, IncludeComments |

#### Returns

- Body
    - ResourceGroupExportResult

### Export deployment template

- Operation ID:
    - Deployments\_ExportTemplate

Exports a template from a past resource group deployment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |

#### Returns

The deployment export result.

- Body
    - DeploymentExportResult

### Invoke resource operation

- Operation ID:
    - Resources\_Invoke

Invokes an operation on an Azure resource.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |
| Action name | actionName | True | string | Name of the resource action to invoke |

#### Returns

The response from the action operation.

- Action response
    - object

### Invoke resource operation in provider

- Operation ID:
    - Provider\_Resources\_Invoke

Invokes an operation on an Azure resource.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |

#### Returns

The response from the operation.

- Response
    - object

### List resource groups

- Operation ID:
    - ResourceGroups\_List

Lists all the resource groups within the subscription. The results are paginated at 1,000+ records.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Filter | $filter |  | string | The filter to apply on the operation. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |

#### Returns

List of resource groups.

- Body
    - ResourceGroupListResult

### List resource providers

- Operation ID:
    - Providers\_List

Lists the resource providers available for the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |
| Expand | $expand |  | string | The $expand query parameter. |

#### Returns

List of resource providers.

- Body
    - ProviderListResult

### List resources by resource group

- Operation ID:
    - ResourceGroups\_ListResources

Lists all the resources under a resource group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Filter | $filter |  | string | The filter to apply on the operation. |
| Expand | $expand |  | string | The $expand query parameter. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |

#### Returns

List of resources.

- Body
    - ResourceListResult

### List resources by subscription

- Operation ID:
    - Resources\_List

Reads all of the resources under a particular subscription. The results are paginated at 1,000+ records.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Filter | $filter |  | string | The filter to apply on the operation. |
| Expand | $expand |  | string | The $expand query parameter. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |

#### Returns

List of resources.

- Body
    - ResourceListResult

### List subscription resource tags

- Operation ID:
    - Tags\_List

Lists all the subscription resource tags.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |

#### Returns

List of subscription tags.

- Body
    - TagsListResult

### List subscriptions

- Operation ID:
    - Subscriptions\_List

Gets a list of all the subscriptions to which the principal has access.

#### Returns

Subscription list operation response.

- Body
    - SubscriptionListResult

### List template deployments

- Operation ID:
    - Deployments\_List

Lists all the resource group template deployments. This operation is useful to know what has been provisioned thus far.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Filter | $filter |  | string | The filter to apply on the operation. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |

#### Returns

List of deployments.

- Body
    - DeploymentListResult

### Lists template deployment operations

- Operation ID:
    - DeploymentOperations\_List

Lists all the template deployment operations. This is useful for troubleshooting failed template deployments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |
| Top | $top |  | integer | Query parameters. If nothing is passed returns all values. |

#### Returns

List of deployment operations.

- Body
    - DeploymentOperationsListResult

### Lists the subscription locations

- Operation ID:
    - Subscriptions\_ListLocations

Lists the locations available for the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |

#### Returns

Location list operation response.

- Body
    - LocationListResult

### Read a resource

- Operation ID:
    - Resources\_GetById

Reads a resource object.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |

#### Returns

Resource information.

- Body
    - GenericResource

### Read a resource group

- Operation ID:
    - ResourceGroups\_Get

Reads a particular resource group within the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |

#### Returns

Resource group information.

- Body
    - ResourceGroup

### Read a resource in provider

- Operation ID:
    - Provider\_Resources\_GetById

Reads a resource object.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Short Resource Id | shortResourceId | True | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite |
| Client Api Version | x-ms-api-version | True | string | Api Version to be used. |

#### Returns

Resource information.

- Body
    - GenericResource

### Read a subscription

- Operation ID:
    - Subscriptions\_Get

Reads the details for a particular subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |

#### Returns

Subscription information.

- Body
    - Subscription

### Read a template deployment

- Operation ID:
    - Deployments\_Get

Reads a template deployment within a resource group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |
| Wait for Deployment | wait |  | boolean | If the action should wait until deployment is completed |

#### Returns

Deployment information.

- Body
    - DeploymentExtended

### Read a template deployment operation

- Operation ID:
    - DeploymentOperations\_Get

Reads a particular resource group template deployment operation. This is useful for troubleshooting failed template deployments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |
| Operation Id | operationId | True | string | Operation Id. |

#### Returns

Deployment operation information.

- Body
    - DeploymentOperation

### Read resource provider

- Operation ID:
    - Providers\_Get

Reads a particular resource provider within the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |
| Expand | $expand |  | string | The $expand query parameter. |

#### Returns

Resource provider information.

- Body
    - Provider

### Register resource provider

- Operation ID:
    - Providers\_Register

Registers a resource provider to be used with a subscription. This will provision permissions for the service into your subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |

#### Returns

Resource provider information.

- Body
    - Provider

### Unregister resource provider

- Operation ID:
    - Providers\_Unregister

Unregisters provider from a subscription. This operation will fail if there are any resources from that resource provider in the subscription.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Provider | resourceProviderNamespace | True | string | Namespace of the resource provider. |

#### Returns

Resource provider information.

- Body
    - Provider

### Update an existing resource group

- Operation ID:
    - ResourceGroups\_Patch

Updates an existing resource group. If the resource does not exist, this request will fail.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Id | id |  | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). |
| Name | name |  | string | The Name of the resource group. |
| Location | location | True | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. |
| Managed By | managedBy |  | string | Id of the resource that manages this resource group. |
| Tags | tags |  | object | The tags attached to the resource group. |
| Provisioning State | provisioningState |  | string | The provisioning state. |

#### Returns

Resource group information.

- Body
    - ResourceGroup

### Validate a template deployment

- Operation ID:
    - Deployments\_Validate

Validates a deployment template. This operation does not have side effects and can be used to test a template deployment for syntax or logical errors.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | Resource group name. |
| Deployment Name | deploymentName | True | string | The name of the resource group template deployment. |
| Template Content | template |  | object | The template content. It can be a JObject or a well formed JSON string. Use only one of Template or TemplateLink. |
| Template URI | uri | True | string | URI referencing the template. |
| Template Content Version | contentVersion |  | string | If included it must match the ContentVersion in the template. |
| Parameters | parameters |  | object | Deployment parameters. It can be a JObject or a well formed JSON string. Use only one of Parameters or ParametersLink. |
| Parameters URI | uri | True | string | URI referencing the template. |
| Parameters Content Version | contentVersion |  | string | If included it must match the ContentVersion in the template. |
| Deployment Mode | mode | True | string | The deployment mode. |
| Detail Level | detailLevel |  | string | The debug detail level. |

#### Returns

Information from validate template deployment response.

- Body
    - DeploymentValidateResult

## Definitions

### Location

Location information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The fully qualified Id of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. |
| Subscription Id | subscriptionId | string | The subscription Id. |
| Location Name | name | string | The location name. |
| Display Name | displayName | string | The display name of the location. |
| Latitude | latitude | string | The latitude of the location. |
| Longitude | longitude | string | The longitude of the location. |

### LocationListResult

Location list operation response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Location | The locations. |

### Subscription

Subscription information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The fully qualified Id. For example, /subscriptions/00000000-0000-0000-0000-000000000000. |
| Subscription Id | subscriptionId | string | The subscription Id. |
| Tenant Id | tenantId | string | The tenant Id. |
| Display Name | displayName | string | The subscription display name. |
| State | state | string | The subscription state. |
| Subscription Policies | subscriptionPolicies | SubscriptionPolicies | Subscription policies. |
| Authorization Source | authorizationSource | string | The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'. |

### SubscriptionPolicies

Subscription policies.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Location Placement Id | locationPlacementId | string | The subscription location placement Id. The Id indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public\_2014-09-01 has access to Azure public regions. |
| Quota Id | quotaId | string | The subscription quota Id. |
| Spending Limit | spendingLimit | string | The subscription spending limit. |

### SubscriptionListResult

Subscription list operation response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Subscription | The subscriptions. |
| Next Link | nextLink | string | The URL to get the next set of results. |

### TemplateLink

Entity representing the reference to the template.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Template URI | uri | string | URI referencing the template. |
| Template Content Version | contentVersion | string | If included it must match the ContentVersion in the template. |

### ParametersLink

Entity representing the reference to the deployment paramaters.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Parameters URI | uri | string | URI referencing the template. |
| Parameters Content Version | contentVersion | string | If included it must match the ContentVersion in the template. |

### DebugSetting

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Detail Level | detailLevel | string | The debug detail level. |

### DeploymentExportResult

The deployment export result.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Template | template | object | The template content. |

### ResourceManagementErrorWithDetails

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | The error code returned from the server. |
| message | message | string | The error message returned from the server. |
| target | target | string | The target of the error. |
| details | details | array of object | Validation error. |

### AliasPathType

The type of the paths for alias.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| path | path | string | The path of an alias. |
| apiVersions | apiVersions | array of string | The api versions. |

### AliasType

The alias type.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The alias name. |
| paths | paths | array of AliasPathType | The paths for an alias. |

### ProviderResourceType

Resource type managed by the resource provider.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| resourceType | resourceType | string | The resource type. |
| locations | locations | array of ObjectWithoutType | The collection of locations where this resource type can be created in. |
| aliases | aliases | array of AliasType | The aliases that are supported by this resource type. |
| apiVersions | apiVersions | array of string | The api version. |
| properties | properties | object | The properties. |

### Provider

Resource provider information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The provider id. |
| Namespace | namespace | string | The namespace of the provider. |
| Registration State | registrationState | string | The registration state of the provider. |
| Resource Type | resourceTypes | array of ProviderResourceType | The collection of provider resource types. |

### BasicDependency

Deployment dependency information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The ID of the dependency. |
| resourceType | resourceType | string | The dependency resource type. |
| resourceName | resourceName | string | The dependency resource name. |

### Dependency

Deployment dependency information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| dependsOn | dependsOn | array of BasicDependency | The list of dependencies. |
| id | id | string | The ID of the dependency. |
| resourceType | resourceType | string | The dependency resource type. |
| resourceName | resourceName | string | The dependency resource name. |

### DeploymentPropertiesExtended

Deployment properties with additional details.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| provisioningState | provisioningState | string | The state of the provisioning. |
| correlationId | correlationId | string | The correlation ID of the deployment. |
| timestamp | timestamp | date-time | The timestamp of the template deployment. |
| outputs | outputs | object | Key/value pairs that represent deploymentoutput. |
| providers | providers | array of Provider | The list of resource providers needed for the deployment. |
| dependencies | dependencies | array of Dependency | The list of deployment dependencies. |
| template | template | object | The template content. Use only one of Template or TemplateLink. |
| templateLink | templateLink | TemplateLink | Entity representing the reference to the template. |
| parameters | parameters | object | Deployment parameters. Use only one of Parameters or ParametersLink. |
| parametersLink | parametersLink | ParametersLink | Entity representing the reference to the deployment paramaters. |
| Deployment Mode | mode | string | The deployment mode. |
| debugSetting | debugSetting | DebugSetting |  |

### DeploymentValidateResult

Information from validate template deployment response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| error | error | ResourceManagementErrorWithDetails |  |
| properties | properties | DeploymentPropertiesExtended | Deployment properties with additional details. |

### DeploymentExtended

Deployment information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The ID of the deployment. |
| Name | name | string | The name of the deployment. |
| properties | properties | DeploymentPropertiesExtended | Deployment properties with additional details. |

### DeploymentListResult

List of deployments.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of DeploymentExtended | The list of deployments. |
| Next Link | nextLink | string | The URL to get the next set of results. |

### ProviderListResult

List of resource providers.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Provider | The list of resource providers. |
| nextLink | nextLink | string | The URL to get the next set of results. |

### GenericResource

Resource information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Resource Id |
| Name | name | string | Resource name |
| Type | type | string | Resource type |
| Location | location | string | Resource location |
| Tags | tags | object | Resource tags |
| plan | plan | Plan | Plan for the resource. |
| Kind | kind | string | The kind of the resource. |
| Managed By | managedBy | string | Id of the resource that manages this resource. |
| SKU | sku | Sku | Sku for the resource. |
| Identity | identity | Identity | Identity for the resource. |
| Properties | properties | object | The resource properties. |

### Plan

Plan for the resource.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | name | string | The plan ID. |
| Publisher | publisher | string | The publisher ID. |
| Product | product | string | The offer ID. |
| Promotion Code | promotionCode | string | The promotion code. |

### Sku

Sku for the resource.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | The sku name. |
| Tier | tier | string | The sku tier. |
| Size | size | string | The sku size. |
| Family | family | string | The sku family. |
| Model | model | string | The sku model. |
| Capacity | capacity | integer | The sku capacity. |

### Identity

Identity for the resource.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Principal Id | principalId | string | The principal id of resource identity. |
| Tenant Id | tenantId | string | The tenant id of resource. |
| Type | type | string | The identity type. |

### ResourceListResult

List of resources.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GenericResource | The list of resources. |
| Next Link | nextLink | string | The URL to get the next set of results. |

### ResourceGroup

Resource group information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). |
| Name | name | string | The Name of the resource group. |
| Location | location | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. |
| Managed By | managedBy | string | Id of the resource that manages this resource group. |
| Tags | tags | object | The tags attached to the resource group. |
| properties | properties | ResourceGroupProperties | The resource group properties. |

### ResourceGroupProperties

The resource group properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Provisioning State | provisioningState | string | The provisioning state. |

### ResourceGroupListResult

List of resource groups.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ResourceGroup | The list of resource groups. |
| Next Link | nextLink | string | The URL to get the next set of results. |

### TagCount

Tag count.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Type | type | string | Type of count. |
| Value | value | integer | Value of count. |

### TagValue

Tag information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Tag Id | id | string | The tag ID. |
| Tag Value | tagValue | string | The tag value. |
| Tag Count | count | TagCount | Tag count. |

### TagDetails

Tag details.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The tag ID. |
| Name | tagName | string | The tag name. |
| Tag Count | count | TagCount | Tag count. |
| values | values | array of TagValue | The list of tag values. |

### TagsListResult

List of subscription tags.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of TagDetails | The list of tags. |
| nextLink | nextLink | string | The URL to get the next set of results. |

### TargetResource

Target resource.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The ID of the resource. |
| Name | resourceName | string | The name of the resource. |
| Type | resourceType | string | The type of the resource. |

### HttpMessage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | object | HTTP message content. |

### DeploymentOperationProperties

Deployment operation properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| provisioningState | provisioningState | string | The state of the provisioning. |
| timestamp | timestamp | date-time | The date and time of the operation. |
| serviceRequestId | serviceRequestId | string | Deployment operation service request id. |
| statusCode | statusCode | string | Operation status code. |
| statusMessage | statusMessage | object | Operation status message. |
| Target Resource | targetResource | TargetResource | Target resource. |
| request | request | HttpMessage |  |
| response | response | HttpMessage |  |

### DeploymentOperation

Deployment operation information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | Full deployment operation id. |
| Operation Id | operationId | string | Deployment operation id. |
| properties | properties | DeploymentOperationProperties | Deployment operation properties. |

### DeploymentOperationsListResult

List of deployment operations.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of DeploymentOperation | The list of deployments. |
| Next Link | nextLink | string | The URL to get the next set of results. |

### ResourceGroupExportResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Template | template | object | The template content. |
| error | error | ResourceManagementErrorWithDetails |  |

### ObjectWithoutType

### object

This is the type 'object'.