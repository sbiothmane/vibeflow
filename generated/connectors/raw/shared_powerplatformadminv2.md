---
layout: Reference
title: Power Platform for Admins V2 - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/powerplatformadminv2/
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
document_id: 427d7574-2e04-ea8a-5e59-53bc6e582cb9
document_version_independent_id: 427d7574-2e04-ea8a-5e59-53bc6e582cb9
updated_at: 2026-04-28T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/powerplatformadminv2/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/38b2850b21859cf1397a730fa15d49904b4a64ed/docs/powerplatformadminv2/index.yml
git_commit_id: 38b2850b21859cf1397a730fa15d49904b4a64ed
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: powerplatformadminv2/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/powerplatformadminv2/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/c2975bf6-bf61-46d5-8621-bc6aec151623
- https://authoring-docs-microsoft.poolparty.biz/devrel/e8fdebed-2921-4997-a75a-fa863723a535
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/93eba64c-cee2-4c90-a45b-c5546aae2cb8
- https://authoring-docs-microsoft.poolparty.biz/devrel/cf1e63a8-325f-42be-b60c-d84a95a42b1f
platformId: c54b9456-8ca3-c2bb-e631-4dd32bdf56a2
---

# Power Platform for Admins V2

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/powerplatformadminv2/icon.png)
Unified connector for all administrative capabilities in Microsoft Power Platform

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft Support |
| URL | https://admin.powerplatform.microsoft.com/support |
| Email | support@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://admin.powerplatform.com |
| Privacy policy | https://admin.powerplatform.com/privacy |
| Categories | IT Operations |

## Power Platform for Admins V2

The Power Platform for Admins V2 connector is the next evolution in admin and control plane management for Power Platform customers. Leveraging all of the capabilities available from [Microsoft Power Platform API](/en-us/rest/api/power-platform/), this connector will be routinely refreshed to have the latest and greatest capabilities from Power Platform admin center.

## Service Principal authentication

Service Principal authentication is supported for most actions, however it does require additional setup before you make the connection using this connector. For more information, visit [Creating a service principal application using PowerShell](/en-us/power-platform/admin/powershell-create-service-principal).

## Known issues and limitations

1. Service Principal authentication is not supported when creating Billing Policies. You will need to use OAuth connections for these actions.
2. Some actions like Recommendations require Managed Environments to be enabled for at least one environment in your tenant.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| OAuth Connection | OAuth Connection | All regions | Not shareable |
| Service Principal Connection | Service Principal Connection | All regions | Shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### OAuth Connection

Auth ID: oauth2-auth

Applicable: All regions

OAuth Connection

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service Principal Connection

Auth ID: oAuthClientCredentials

Applicable: All regions

Service Principal Connection

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client Secret | securestring |  | True |
| Tenant | string |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Add allowed IP addresses on a Power Pages website | These IP addresses will be able to access the website. |
| --- | --- |
| Add the environment to the environment group | Ability to Add the environment to the environment group. |
| Allocate and deallocate the currencies for the environment | Ability to Allocate and deallocate the currencies for the environment. |
| Apply the system administrator role to the selected user | Ability to Apply the system administrator role to the selected user. |
| Convert a trial Power Pages website to production | Convert a trial website to a production website. |
| Copy the environment from the specified source to the target (Preview) | Copy the environment from the specified source to the target. |
| Create a Power Pages website | Trigger the creation of a new website. |
| Create an ISV contract | Create an ISV contract. |
| Create environment group role assignment | Creates a new role assignment for the specified environment group. Preview. |
| Create environment group rule based assignment | Creates a rule-based policy assignment for an environment group. |
| Create environment management settings | Ability to Create environment management settings. |
| Create environment role assignment | Creates a new role assignment for the specified environment. Preview. |
| Create environment rule based assignment | Creates a rule-based policy assignment for an environment. |
| Create role assignment | Creates a new role assignment. Preview. |
| Create rule based policy | Creates a rule-based policy with rule sets and metadata. |
| Create Rule Set | Creates the Rule Set for the environment group. |
| Create the environment group | Ability to Create the environment group. |
| Create web application Firewall rules on a Power Pages website | Create web application Firewall rules on the given website. |
| Creates a backup of the specified environment (Preview) | Creates a backup of the specified environment. |
| Creates the billing policy at tenant level | Ability to Creates the billing policy at tenant level. |
| Delete a bot in Copilot Studio | Delete a bot. |
| Delete a connection for DSR compliance | Deletes a connection for DSR compliance. |
| Delete a flow for DSR compliance | Deletes a flow in the M365 Copilot workflows environment for DSR compliance. |
| Delete a Power Pages website | Trigger the deletion of a website by specifying the website ID. |
| Delete an AI model prompt for DSR compliance | Deletes an AI model prompt for DSR compliance. |
| Delete an approval for DSR compliance | Deletes an approval and associated records for DSR compliance. |
| Delete an ISV contract | Delete an ISV contract. |
| Delete billing policy | Ability to Delete billing policy. |
| Delete environment group role assignment | Deletes a role assignment by ID for the specified environment group. Preview. |
| Delete environment role assignment | Deletes a role assignment by ID for the specified environment. Preview. |
| Delete role assignment | Deletes a role assignment by ID. Preview. |
| Delete Rule Set | Deletes the Rule Set. Only tenant admins can delete. |
| Delete the environment group | Ability to Delete the environment group. |
| Deletes the specified backup (Preview) | Deletes the specified backup. |
| Deletes the specified environment by ID (Preview) | Deletes the specified environment by ID. |
| Deletes web application firewall custom rules on a Power Pages website | Deletes web application firewall custom rules on the given website. |
| Disable web application Firewall on a Power Pages website | Disable web application Firewall on the given website. |
| Disables disaster recovery on the specified environment (Preview) | Disables disaster recovery on the specified environment. |
| Disables managed governance for the specified environment (Preview) | Disables managed governance for the specified environment. |
| Disables the specified environment (Preview) | Disables the specified environment. |
| Enable web application firewall on a Power Pages website | Enable web application firewall on the given website. |
| Enables disaster recovery on the specified environment (Preview) | Enables disaster recovery on the specified environment. |
| Enables managed governance for the specified environment (Preview) | Enables managed governance for the specified environment. |
| Enables the specified environment (Preview) | Enables the specified environment. |
| Environment Management MCP Server | MCP server for environment lifecycle management in Power Platform. |
| Execute quick scan for a Power Pages website | Execute a quick scan for a Power Pages website. |
| Execute recommendation action | Execute a recommended action on a set of recommendation resource(s). |
| Force failover for the specified environment (Preview) | Fails over environment to its paired region as of LastSyncTime. |
| Generate or fetch a cross-tenant connection report | Ability to Generate or fetch a cross-tenant connection report. |
| Get a cross-tenant connection report by report ID for a tenant | Ability to Get a cross-tenant connection report by report ID for a tenant. |
| Get AI model prompts for DSR export | Returns AI prompt records for DSR compliance export. |
| Get an ISV contract by its identifier (ID) | Get an ISV contract by its identifier (ID). |
| Get app as administrator | Returns a PowerApp. |
| Get approvals for DSR export | Returns approval records for DSR compliance export. |
| Get apps as administrator | Returns a list of apps. |
| Get Bot Quarantine Status | Retrieve the quarantine status of a bot. |
| Get connections for DSR export | Returns user connections for DSR compliance export. |
| Get connector by ID | Retrieves a specific connector by ID in the specified environment. |
| Get conversation transcripts for DSR export | Returns conversation transcripts for DSR compliance export. |
| Get conversation transcripts for DSR export (environment-scoped) | Returns conversation transcripts for a given environment. |
| Get currency allocations for the environment | Ability to Get currency allocations for the environment. |
| Get deep scan report for a Power Pages website | Get the deep scan report for a Power Pages website. |
| Get deep scan score for a Power Pages website | Get the deep scan score for a Power Pages website. |
| Get environment management setting by ID | Ability to Get environment management setting by ID. |
| Get Finance and Operations Maintenance Settings | Retrieves the F&O maintenance settings for an environment managed by Power Platform admin center. |
| Get flow context summary for a specific user's per flow capacity source | Ability to Get flow context summary for a specific user's per flow capacity source. |
| Get flow context summary for user per flow capacity source | Ability to Get flow context summary for user per flow capacity source. |
| Get flow run actions for DSR export | Returns the action history for a specific flow run. |
| Get flow run actions for DSR export (environment-scoped) | Returns action history for a flow run in an environment. |
| Get flow runs for DSR export | Returns flow run records for a flow for DSR export. |
| Get flow runs for DSR export (environment-scoped) | Returns flow run records for a flow in an environment. |
| Get flows for DSR export | Returns flows owned by the calling user for DSR export. |
| Get operation status | Ability to Get operation status. |
| Get recommendation resources | Gets the list of resources for a recommendation for the tenant. |
| Get recommendations | Gets the list of recommendations for the tenant. |
| Get rule based policy by ID | Gets policy details by ID including rule sets and metadata. |
| Get Rule Set for Environment Group | Returns the Rule Set for the given environment group. |
| Get run history customer data for DSR export | Returns run history customer data for a flow run. |
| Get run history customer data for DSR export (environment-scoped) | Returns run history data for a flow run in an environment. |
| Get tenant context summary for user per flow capacity source | Ability to Get tenant context summary for user per flow capacity source. |
| Get the billing policy at tenant level by policy ID | Ability to Get the billing policy at tenant level by policy ID. |
| Get the currency report for the tenant | Ability to Get the currency report for the tenant. |
| Get the environment group | Ability to Get the environment group. |
| Get the environment linked to the billing policy | Ability to Get the environment linked to the billing policy. |
| Get the linked billing policy details for an environment | Ability to Get the linked billing policy details for an environment. |
| Get the list of application packages that are available for install | Lists available app packages for a target environment with OData filtering. |
| Get the list of billing policies for the tenant | Ability to Get the list of billing policies for the tenant. |
| Get the list of environments linked to the billing policy | Ability to Get the list of environments linked to the billing policy. |
| Get the list of ISV contracts for the tenant | Get the list of ISV contracts for the tenant. |
| Get the polling status for a previously triggered installation | Gets install progress for an operation by its operation ID. |
| Get the Power Pages website details by specifying its unique identifier (ID) | Get website details using a specified website ID. |
| Get the temporary currency count and limit for the month by type | Ability to Get the temporary currency count and limit for the month by type. |
| Get the tenant capacity details for the tenant | Ability to Get the tenant capacity details for the tenant. |
| Get the user per flow capacity source user context summary | Ability to Get the user per flow capacity source user context summary. |
| Get the web application firewall rules | Get the web application firewall rules associated with the given website. |
| Get the web application firewall status | Get the status of web application firewall associated with the given website. |
| Get user context summary for a specific user's per flow capacity source | Ability to Get user context summary for a specific user's per flow capacity source. |
| Get user per flow capacity source data with pagination and filtering options | Ability to Get user per flow capacity source data with pagination and filtering options. |
| Gets business continuity snapshot for environment (Preview) | Gets business continuity snapshot including LastSyncTime. |
| Gets copy target candidate environments (Preview) | Gets the list of environments that can be copied as the target environment. |
| Gets restore candidate environments (Preview) | Gets the list of restore candidates when restore from the specified environment. |
| Gets the backups for the specified environment (Preview) | Gets the backups for the specified environment. |
| Gets the status of an environment lifecycle operation (Preview) | Gets the status of an environment lifecycle operation. |
| Link billing policy ID with environments | Ability to Link billing policy ID with environments. |
| List connections in environment | Retrieves a list of connections in the specified environment. |
| List connectors in environment | Retrieves a list of connectors in the specified environment. |
| List cross-tenant connection reports for a tenant | Ability to List cross-tenant connection reports for a tenant. |
| List environment group role assignments | Retrieves a list of role assignments for the specified environment group. Preview. |
| List environment role assignments | Retrieves a list of role assignments for the specified environment. Preview. |
| List Power Pages websites | Get a list of all the websites in your environment. |
| List role assignments | Retrieves a list of role assignments. Preview. |
| List role definitions | Retrieves a list of role definitions. Preview. |
| List rule based policies | List rule based policies available in the tenant. |
| List rule based policy assignments | Lists rule assignments for a tenant with rule set details. |
| List rule based policy assignments for a specific environment | Lists rule assignments for a specific environment. |
| List rule based policy assignments for a specific environment group | Lists rule assignments for an environment group. |
| List rule based policy assignments for a specific policy | Lists rule assignments for a policy with rule set details. |
| List Rule Sets for Tenant | Returns all the Rule Sets under the given tenant with OData pagination support. |
| List the environment groups | Ability to List the environment groups. |
| List the installable application packages for a tenant | Get the list of available application packages for a tenant. |
| Lists the environment lifecycle operations for a specific environment (Preview) | Lists the environment lifecycle operations for a specific environment. |
| Modifies sku for the specified environment (Preview) | Modifies sku for the specified environment. |
| Performs DR Drill for the specified environment (Preview) | Performs DR Drill for the specified environment. |
| Query Power Platform resources | Executes a KQL query against Azure Resource Graph with ARG paging. |
| Reassign the owner of the bot | Reassign the owner of the bot. |
| Recover the deleted environment (Preview) | Recover the deleted environment. |
| Refresh the billing policy provisioning status | Ability to Refresh the billing policy provisioning status. |
| Remove the environment from the environment group | Ability to Remove the environment from the environment group. |
| Restart a Power Pages website | Restart the website for the given site ID. |
| Restores the specified environment to a previous backup (Preview) | Restores the specified environment to a previous backup. |
| Retrieve a list of environments (preview) | Returns a list of environments available for the authenticated user. |
| Retrieve cloud flows with filters | Returns a list of cloud flows. |
| Retrieve flow actions with filters | Returns a list of flow actions. |
| Retrieve flow runs by workflow ID | Returns a list of flow runs. |
| Retrieves a single environment by ID (preview) | Ability to Retrieves a single environment by ID (preview). |
| Set Bot as Quarantined | Set the quarantine status of a bot to true. |
| Set Bot as Unquarantined | Set the quarantine status of a bot to false. |
| Stamp bootstrap version five (5) status as enabled for website | Stamp bootstrap version five (5) status as enabled for website. |
| Stamp data model version for website | Stamp data model version for website. |
| Start a Power Pages website | Start the website for the given site ID. |
| Start deep scan for a Power Pages website | Start deep scan for a Power Pages website. |
| Start the install of application package in target environment | Installs an app package by unique name into a target environment. |
| Stop a Power Pages website | Stop the website for the given site ID. |
| Storage warning thresholds | Ability to Storage warning thresholds. |
| Storage warning thresholds filtered by category | Ability to Storage warning thresholds filtered by category. |
| Storage warning thresholds filtered by category and storage entity name | Ability to Storage warning thresholds filtered by category and storage entity name. |
| Unlink billing policy ID from environments | Ability to Unlink billing policy ID from environments. |
| Update an ISV contract | Update an ISV contract. |
| Update fields on the environment management setting | Ability to Update fields on the environment management setting. |
| Update Finance and Operations Maintenance Settings | Updates the F&O maintenance settings for an environment managed by Power Platform admin center. |
| Update rule based policy by ID | Updates a policy by ID including rule sets and metadata. |
| Update Rule Set | Updates the Rule Set. |
| Update security group for site visibility for a website | Update the security group for site visibility for a website. |
| Update site visibility for a website | Update site visibility for a website. |
| Update the environment group | Ability to Update the environment group. |
| Updates the billing policy at tenant level | Ability to Updates the billing policy at tenant level. |

### Add allowed IP addresses on a Power Pages website

- Operation ID:
    - AddAllowedIpAddresses

These IP addresses will be able to access the website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |
| IpAddress | IpAddress |  | string | The IP address or CIDR range |
| IpAddressType | IpAddressType |  | string | The type of the IP address |

#### Returns

- Body
    - AllowedIpAddressesConfiguration

### Add the environment to the environment group

- Operation ID:
    - AddEnvironmentToGroup

Ability to Add the environment to the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | uuid | The group ID. |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

### Allocate and deallocate the currencies for the environment

- Operation ID:
    - PatchCurrencyAllocationByEnvironment

Ability to Allocate and deallocate the currencies for the environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |
| currencyType | currencyType |  | string | Available currency type which can be allocated to environment. |
| allocated | allocated |  | integer | Specify the currency count. |

#### Returns

The response body includes environment ID and allocated currencies.

- Body
    - AllocationsByEnvironmentResponseModelV1

### Apply the system administrator role to the selected user

- Operation ID:
    - ApplyAdminRole

Ability to Apply the system administrator role to the selected user.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

### Convert a trial Power Pages website to production

- Operation ID:
    - ConvertTrialToProduction

Convert a trial website to a production website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |
| EnableCDN | EnableCDN |  | boolean | Enable Content Delivery Network (CDN) for the website |
| EnableWAF | EnableWAF |  | boolean | Enable Web Application Firewall (WAF) for the website |
| UseDynamics365PortalAddOnLicense | UseDynamics365PortalAddOnLicense |  | boolean | Use Dynamics 365 Portal Add-On License for the website |

### Copy the environment from the specified source to the target (Preview)

- Operation ID:
    - CopyEnvironment

Copy the environment from the specified source to the target.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Target Environment Id | targetEnvironmentId | True | string | The target environment will be overwritten. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| sourceEnvironmentId | sourceEnvironmentId | True | string | Source environment ID to copy from. |
| copyType | copyType | True | string | Represents the type of copy operation. |
| environmentNameToOverride | environmentNameToOverride |  | string | Environment name to override on target environment. |
| securityGroupIdToOverride | securityGroupIdToOverride |  | string | Security group ID to override on target environment. |
| skipAuditData | skipAuditData |  | boolean | Boolean flag to skip audit data for copy. |
| executeAdvancedCopyForFinanceAndOperations | executeAdvancedCopyForFinanceAndOperations |  | boolean | Boolean flag to execute advanced copy for Finance and Operation data. |

### Create a Power Pages website

- Operation ID:
    - CreateWebsite

Trigger the creation of a new website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |
| dataverseOrganizationId | dataverseOrganizationId | True | uuid | Dataverse organization's unique identifier (ID) |
| name | name | True | string | Name of the website |
| templateName | templateName | True | string | Website template name |
| selectedBaseLanguage | selectedBaseLanguage | True | integer | Language ID - https://go.microsoft.com/fwlink/?linkid=2208135 |
| subdomain | subdomain | True | string | Subdomain for the website URL |
| websiteRecordId | websiteRecordId |  | string | Dataverse record unique identifier (ID) of the website |

### Create an ISV contract

- Operation ID:
    - CreateISVContract

Create an ISV contract.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| name | name | True | string |  |
| status | status | True | string | The desired ISV contract status. |
| geo | geo | True | string | Resource location for billing account creation. Immutable. |
| tenantId | tenantId |  | uuid | The ID of the customer tenant. |
| allowOtherPremiumConnectors | allowOtherPremiumConnectors |  | boolean | Whether metered usage with premium connectors may be attributed. |
| name | name |  | string | The name of an API connector. |
| subscriptionId | subscriptionId |  | uuid | The tenant subscription Id. |
| resourceGroup | resourceGroup |  | string | The resource group within the tenant subscription. |
| id | id |  | string |  |
| cloudFlowRunsPayAsYouGoState | cloudFlowRunsPayAsYouGoState |  | string |  |

#### Returns

- Body
    - IsvContractResponseModel

### Create environment group role assignment

- Operation ID:
    - CreateEnvironmentGroupRoleAssignment

Creates a new role assignment for the specified environment group. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Group Id | environmentGroupId | True | string | The unique identifier of the environment group. |
| Api-version | api-version | True | string | The API version. |
| principalObjectId | principalObjectId |  | string | The Id of the principal to assign |
| roleDefinitionId | roleDefinitionId |  | string | The Id of the role definition |
| scope | scope |  | string | The assignment scope |
| principalType | principalType |  | string | The type of the principal |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### Create environment group rule based assignment

- Operation ID:
    - CreateEnviornmentGroupRuleBasedAssignment

Creates a rule-based policy assignment for an environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy Id | policyId | True | string | The unique identifier of the policy. |
| Group Id | groupId | True | string | The unique identifier of the environment group. |
| Api-version | api-version | True | string | The API version. |
| resourceId | resourceId | True | string | Resource Id ex. the environment group id. |
| resourceType | resourceType | True | string | The Resource type. |
| behaviorType | behaviorType | True | string | The Behavior type. |

#### Returns

- Body
    - RuleAssignment

### Create environment management settings

- Operation ID:
    - CreateEnvironmentManagementSettings

Ability to Create environment management settings.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |
|  |  |  | object |  |

#### Returns

Represents the response object for APIs in this service.

- Body
    - CreateEnvironmentManagementSettingResponse

### Create environment role assignment

- Operation ID:
    - CreateEnvironmentRoleAssignment

Creates a new role assignment for the specified environment. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The unique identifier of the environment. |
| Api-version | api-version | True | string | The API version. |
| principalObjectId | principalObjectId |  | string | The Id of the principal to assign |
| roleDefinitionId | roleDefinitionId |  | string | The Id of the role definition |
| scope | scope |  | string | The assignment scope |
| principalType | principalType |  | string | The type of the principal |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### Create environment rule based assignment

- Operation ID:
    - CreateEnvironmentRuleBasedAssignment

Creates a rule-based policy assignment for an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy Id | policyId | True | string | The unique identifier of the policy. |
| Environment Id | environmentId | True | string | The unique identifier of the environment. |
| Api-version | api-version | True | string | The API version. |
| resourceId | resourceId | True | string | Resource Id ex. the environment group id. |
| resourceType | resourceType | True | string | The Resource type. |
| behaviorType | behaviorType | True | string | The Behavior type. |

#### Returns

- Body
    - RuleAssignment

### Create role assignment

- Operation ID:
    - CreateRoleAssignment

Creates a new role assignment. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| principalObjectId | principalObjectId |  | string | The Id of the principal to assign |
| roleDefinitionId | roleDefinitionId |  | string | The Id of the role definition |
| scope | scope |  | string | The assignment scope |
| principalType | principalType |  | string | The type of the principal |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### Create rule based policy

- Operation ID:
    - CreateRuleBasedPolicy

Creates a rule-based policy with rule sets and metadata.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string | The name of the policy. |
| id | id |  | string | The unique identifier of the rule set. |
| version | version |  | string | The version of the rule set. |
| inputs | inputs |  | object | The inputs for the rule set, which may vary based on the rule. |

#### Returns

- Body
    - Policy

### Create Rule Set

- Operation ID:
    - CreateRuleSet

Creates the Rule Set for the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | uuid | The unique identifier of the environment. |
| Group Id | groupId | True | uuid | The unique identifier of the environment group. |
| Api-version | api-version | True | string | The API version. |
| id | id |  | string | The ID of the Rule Set. |
| lastModified | lastModified |  | date-time | The last modified timestamp. |
| type | type |  | string | The type of environment filter. |
| id | id |  | string | The ID of the environment. |
| type | type |  | string | The type of the environment. |
| name | name |  | string | The name of the environment. |
| type | type | True | string | The type of the Rule Set. |
| resourceType | resourceType | True | string | The type of resource. |
| id | id |  | string | The rule ID. |
| value | value |  | string | The rule value. |

#### Returns

Rule Set data transfer object.

- Body
    - RuleSetDto

### Create the environment group

- Operation ID:
    - CreateEnvironmentGroup

Ability to Create the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| id | id |  | uuid |  |
| displayName | displayName |  | string |  |
| description | description |  | string |  |
| parentGroupId | parentGroupId |  | uuid |  |
| childrenGroupIds | childrenGroupIds |  | array of uuid |  |
| createdTime | createdTime |  | date-time |  |
| id | id |  | string |  |
| displayName | displayName |  | string |  |
| email | email |  | string |  |
| type | type |  | string |  |
| tenantId | tenantId |  | string |  |
| userPrincipalName | userPrincipalName |  | string |  |
| lastModifiedTime | lastModifiedTime |  | date-time |  |
| id | id |  | string |  |
| displayName | displayName |  | string |  |
| email | email |  | string |  |
| type | type |  | string |  |
| tenantId | tenantId |  | string |  |
| userPrincipalName | userPrincipalName |  | string |  |

#### Returns

- Body
    - EnvironmentGroup

### Create web application Firewall rules on a Power Pages website

- Operation ID:
    - CreateWafRules

Create web application Firewall rules on the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string | Name of the custom rule |
| priority | priority |  | integer | Priority of the rule |
| enabledState | enabledState |  | string | State of the rule |
| ruleType | ruleType |  | string | WAF rule type |
| rateLimitDurationInMinutes | rateLimitDurationInMinutes |  | integer | Duration in minutes for rate limiting |
| rateLimitThreshold | rateLimitThreshold |  | integer | Threshold for rate limiting |
| matchVariable | matchVariable |  | string | Variable to match |
| selector | selector |  | string | Selector for the match variable |
| operator | operator |  | string | Operator for the match condition |
| negateCondition | negateCondition |  | boolean | Whether to negate the condition |
| matchValue | matchValue |  | array of string | Values to match |
| transforms | transforms |  | array of string | Transformations to apply |
| action | action |  | string | Action to take when the rule matches |
| RuleSetType | RuleSetType |  | string | Type of the managed rule set |
| RuleSetVersion | RuleSetVersion |  | string | Version of the managed rule set |
| RuleSetAction | RuleSetAction |  | string | Action to take for the rule set |
| Exclusions | Exclusions |  | array of string | List of exclusions for the rule set |
| RuleGroupName | RuleGroupName |  | string | Name of the rule group |
| Exclusions | Exclusions |  | array of string | List of exclusions for the rule group |
| RuleId | RuleId |  | string | ID of the rule |
| EnabledState | EnabledState |  | string | State of the rule |
| Action | Action |  | string | Action to take for the rule |
| Exclusions | Exclusions |  | array of string | List of exclusions for the rule |

### Creates a backup of the specified environment (Preview)

- Operation ID:
    - CreateEnvironmentBackup

Creates a backup of the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Api-version | api-version | True | string | The API version. |
| label | label | True | string | The label for the manually created backup. |

#### Returns

- Body
    - EnvironmentBackup

### Creates the billing policy at tenant level

- Operation ID:
    - CreateBillingPolicy

Ability to Creates the billing policy at tenant level.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string |  |
| location | location |  | string |  |
| subscriptionId | subscriptionId |  | uuid | The tenant subscription Id. |
| resourceGroup | resourceGroup |  | string | The resource group within the tenant subscription. |
| id | id |  | string |  |
| status | status |  | string | The desired ISV contract status. |

#### Returns

- Body
    - BillingPolicyResponseModel

### Delete a bot in Copilot Studio

- Operation ID:
    - DeleteCopilotAgent

Delete a bot.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | EnvironmentId | True | string | The environment ID. |
| Bot Id | BotId | True | string | The bot ID. |
| Api-version | api-version | True | string | The API version. |

### Delete a connection for DSR compliance

- Operation ID:
    - DeleteConnection

Deletes a connection for DSR compliance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Connection Id | connectionIdentifier | True | string | The connection ID in apiName/connectionName format. |
| Api-version | api-version | True | string | The API version. |

### Delete a flow for DSR compliance

- Operation ID:
    - DeleteFlow

Deletes a flow in the M365 Copilot workflows environment for DSR compliance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Flow Id | flowId | True | uuid | The flow ID. |
| Api-version | api-version | True | string | The API version. |

### Delete a Power Pages website

- Operation ID:
    - DeleteWebsite

Trigger the deletion of a website by specifying the website ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Operation- Location | Operation-Location | True | string | Operation location. |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Delete an AI model prompt for DSR compliance

- Operation ID:
    - DeletePrompt

Deletes an AI model prompt for DSR compliance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Prompt Id | promptId | True | uuid | The AI model prompt ID. |
| Api-version | api-version | True | string | The API version. |

### Delete an approval for DSR compliance

- Operation ID:
    - DeleteApproval

Deletes an approval and associated records for DSR compliance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Approval Id | approvalId | True | uuid | The approval ID. |
| Api-version | api-version | True | string | The API version. |

### Delete an ISV contract

- Operation ID:
    - DeleteISVContract

Delete an ISV contract.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Isv Contract Id | isvContractId | True | string | The ISV contract ID. |
| Api-version | api-version | True | string | The API version. |

### Delete billing policy

- Operation ID:
    - DeleteBillingPolicy

Ability to Delete billing policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |

### Delete environment group role assignment

- Operation ID:
    - DeleteEnvironmentGroupRoleAssignment

Deletes a role assignment by ID for the specified environment group. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Group Id | environmentGroupId | True | string | The unique identifier of the environment group. |
| Role Assignment Id | roleAssignmentId | True | string | The unique identifier of the role assignment. |
| Api-version | api-version | True | string | The API version. |

### Delete environment role assignment

- Operation ID:
    - DeleteEnvironmentRoleAssignment

Deletes a role assignment by ID for the specified environment. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The unique identifier of the environment. |
| Role Assignment Id | roleAssignmentId | True | string | The unique identifier of the role assignment. |
| Api-version | api-version | True | string | The API version. |

### Delete role assignment

- Operation ID:
    - DeleteRoleAssignment

Deletes a role assignment by ID. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Role Assignment Id | roleAssignmentId | True | string | The unique identifier of the role assignment. |
| Api-version | api-version | True | string | The API version. |

### Delete Rule Set

- Operation ID:
    - DeleteRuleSet

Deletes the Rule Set. Only tenant admins can delete.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Rule Set Id | ruleSetId | True | uuid | The unique identifier of the Rule Set. |
| Api-version | api-version | True | string | The API version. |

### Delete the environment group

- Operation ID:
    - DeleteEnvironmentGroup

Ability to Delete the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group ID. |
| Api-version | api-version | True | string | The API version. |

### Deletes the specified backup (Preview)

- Operation ID:
    - DeleteEnvironmentBackup

Deletes the specified backup.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Backup Id | backupId | True | string | The ID of the backup. |
| Api-version | api-version | True | string | The API version. |

### Deletes the specified environment by ID (Preview)

- Operation ID:
    - DeleteEnvironmentByID

Deletes the specified environment by ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

### Deletes web application firewall custom rules on a Power Pages website

- Operation ID:
    - DeleteWafCustomRules

Deletes web application firewall custom rules on the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |
| body | body | True | array of string | List of custom rule names |

### Disable web application Firewall on a Power Pages website

- Operation ID:
    - DisableWaf

Disable web application Firewall on the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

#### Returns

Web application firewall status

- response
    - WebApplicationFirewallStatus

### Disables disaster recovery on the specified environment (Preview)

- Operation ID:
    - DisableDisasterRecovery

Disables disaster recovery on the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Disables managed governance for the specified environment (Preview)

- Operation ID:
    - DisableManagedEnvironment

Disables managed governance for the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Disables the specified environment (Preview)

- Operation ID:
    - DisableEnvironment

Disables the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| reason | reason |  | string | The reason of this state change. |

### Enable web application firewall on a Power Pages website

- Operation ID:
    - EnableWAF

Enable web application firewall on the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Enables disaster recovery on the specified environment (Preview)

- Operation ID:
    - EnableDisasterRecovery

Enables disaster recovery on the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Enables managed governance for the specified environment (Preview)

- Operation ID:
    - EnableManagedEnvironment

Enables managed governance for the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Enables the specified environment (Preview)

- Operation ID:
    - EnableEnvironment

Enables the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| reason | reason |  | string | The reason of this state change. |

### Environment Management MCP Server

- Operation ID:
    - mcp\_EnvironmentManagement

MCP server for environment lifecycle management in Power Platform.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| jsonrpc | jsonrpc |  | string |  |
| id | id |  | string |  |
| method | method |  | string |  |
| params | params |  | object |  |
| result | result |  | object |  |
| error | error |  | object |  |
| sessionId | sessionId |  | string |  |

#### Returns

- Body
    - MCPQueryResponse

### Execute quick scan for a Power Pages website

- Operation ID:
    - StartQuickScan

Execute a quick scan for a Power Pages website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Lcid | lcid |  | string | Language code identifier (LCID) for the website. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Items
    - PortalScanIssues

### Execute recommendation action

- Operation ID:
    - ExecuteRecommendationAction

Execute a recommended action on a set of recommendation resource(s).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| body | body | True | dynamic | Request body for the action to execute |
| Action Name | actionName | True | string | The name of the action to execute. |
| Api-version | api-version | True | string | The API version. |

#### Returns

The response for action performed on resources

- Body
    - AdvisorActionResponse

### Force failover for the specified environment (Preview)

- Operation ID:
    - PerformForceFailover

Fails over environment to its paired region as of LastSyncTime.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| lastSyncTime | lastSyncTime | True | date-time | Last sync time used for the force failover operation. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Generate or fetch a cross-tenant connection report

- Operation ID:
    - CreateCrossTenantConnectionReport

Ability to Generate or fetch a cross-tenant connection report.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - CrossTenantConnectionReport

### Get a cross-tenant connection report by report ID for a tenant

- Operation ID:
    - GetCrossTenantConnectionReport

Ability to Get a cross-tenant connection report by report ID for a tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Report Id | reportId | True | string | The report ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - CrossTenantConnectionReport

### Get AI model prompts for DSR export

- Operation ID:
    - GetPrompts

Returns AI prompt records for DSR compliance export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get an ISV contract by its identifier (ID)

- Operation ID:
    - GetISVContract

Get an ISV contract by its identifier (ID).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Isv Contract Id | isvContractId | True | string | The ISV contract ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - IsvContractResponseModel

### Get app as administrator

- Operation ID:
    - Get-AdminApp

Returns a PowerApp.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment name | environmentId | True | string | Name field of the environment. |
| PowerApp name | app | True | string | Name field of the PowerApp. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - PowerApp

### Get approvals for DSR export

- Operation ID:
    - GetApprovals

Returns approval records for DSR compliance export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get apps as administrator

- Operation ID:
    - Get-AdminApps

Returns a list of apps.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment name | environmentId | True | string | Name field of the environment. |
| Page size | $top |  | integer | Number of apps in the response. |
| Skip token | $skiptoken |  | string | Get next page of responses. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ResourceArrayPowerApp

### Get Bot Quarantine Status

- Operation ID:
    - GetBotQuarantineStatus

Retrieve the quarantine status of a bot.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | EnvironmentId | True | string | The environment ID. |
| Bot Id | BotId | True | string | The bot ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BotQuarantineStatus

### Get connections for DSR export

- Operation ID:
    - GetConnections

Returns user connections for DSR compliance export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get connector by ID

- Operation ID:
    - GetConnectorById

Retrieves a specific connector by ID in the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | ID of the environment. |
| Connector Id | connectorId | True | string | ID of the connector. |
| $filter | $filter | True | string | Filter query to specify the environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - GetConnectorByIdResponse

### Get conversation transcripts for DSR export

- Operation ID:
    - GetConversationTranscriptsForDsr

Returns conversation transcripts for DSR compliance export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Response containing conversation transcripts for DSR export.

- Body
    - DsrConversationTranscriptsResponse

### Get conversation transcripts for DSR export (environment-scoped)

- Operation ID:
    - GetConversationTranscriptsWithEnvironment

Returns conversation transcripts for a given environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Response containing conversation transcripts for DSR export.

- Body
    - DsrConversationTranscriptsResponse

### Get currency allocations for the environment

- Operation ID:
    - GetCurrencyAllocationByEnvironment

Ability to Get currency allocations for the environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

The response body includes environment ID and allocated currencies.

- Body
    - AllocationsByEnvironmentResponseModelV1

### Get deep scan report for a Power Pages website

- Operation ID:
    - GetSecurityScanReport

Get the deep scan report for a Power Pages website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - SiteSecurityResult

### Get deep scan score for a Power Pages website

- Operation ID:
    - GetSecurityScanScore

Get the deep scan score for a Power Pages website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - SiteSecurityScore

### Get environment management setting by ID

- Operation ID:
    - ListEnvironmentManagementSettings

Ability to Get environment management setting by ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | ID for the environment management setting. |
| $top | $top |  | integer | Number of records to retrieve. Defaults to 500 if not set. |
| $select | $select |  | string | List of properties to select for this entity. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the response object for APIs in this service.

- Body
    - GetEnvironmentManagementSettingResponse

### Get Finance and Operations Maintenance Settings

- Operation ID:
    - GetFinOpsMaintenanceSettings

Retrieves the F&O maintenance settings for an environment managed by Power Platform admin center.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | uuid | The unique identifier of the environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Finance and Operations Maintenance response.

- Body
    - FinOpsAdminSettingsResponse

### Get flow context summary for a specific user's per flow capacity source

- Operation ID:
    - GetUserPerFlowCapacitySourceFlowContextSummaryForUserId

Ability to Get flow context summary for a specific user's per flow capacity source.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User Id | userId | True | uuid | The user identifier. |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Page Number | pageNumber |  | integer | The page number for pagination. |
| Page Size | pageSize |  | integer | The page size for pagination. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paginated result container for flow context summary records.

- Body
    - PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceFlowContextRecord

### Get flow context summary for user per flow capacity source

- Operation ID:
    - GetUserPerFlowCapacitySourceFlowContextSummary

Ability to Get flow context summary for user per flow capacity source.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Page Number | pageNumber |  | integer | The page number for pagination. |
| Page Size | pageSize |  | integer | The page size for pagination. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paginated result container for flow context summary records.

- Body
    - PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceFlowContextRecord

### Get flow run actions for DSR export

- Operation ID:
    - GetFlowRunActionsForDsr

Returns the action history for a specific flow run.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Ai Flow Id | aiFlowId | True | string | The workflow ID. |
| Run Id | runId | True | string | The run ID. |
| Continuation Token | continuationToken |  | integer | Byte offset continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Response containing flow run action history for DSR export.

- Body
    - DsrFlowRunsResponse

### Get flow run actions for DSR export (environment-scoped)

- Operation ID:
    - GetFlowRunActionsWithEnvironment

Returns action history for a flow run in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Ai Flow Id | aiFlowId | True | string | The workflow ID. |
| Run Id | runId | True | string | The run ID. |
| Continuation Token | continuationToken |  | integer | Byte offset continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Response containing flow run action history for DSR export.

- Body
    - DsrFlowRunsResponse

### Get flow runs for DSR export

- Operation ID:
    - GetFlowRunsSingleton

Returns flow run records for a flow for DSR export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Flow Id | flowId | True | uuid | The flow ID. |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get flow runs for DSR export (environment-scoped)

- Operation ID:
    - GetFlowRunsNonSingleton

Returns flow run records for a flow in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Flow Id | flowId | True | uuid | The flow ID. |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get flows for DSR export

- Operation ID:
    - GetFlows

Returns flows owned by the calling user for DSR export.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Continuation Token | continuationToken |  | string | Continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get operation status

- Operation ID:
    - GetEnvironmentGroupOperation

Ability to Get operation status.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Operation Id | operationId | True | uuid | The operation ID. |
| Api-version | api-version | True | string | The API version. |

### Get recommendation resources

- Operation ID:
    - GetRecommendationResources

Gets the list of resources for a recommendation for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Recommendation Name | scenario | True | string | The recommendation name. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paged list of recommendation resources

- Body
    - AdvisorRecommendationResourceIEnumerableResponseWithContinuation

### Get recommendations

- Operation ID:
    - GetRecommendations

Gets the list of recommendations for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paged list of recommendations

- Body
    - AdvisorRecommendationIEnumerableResponseWithContinuation

### Get rule based policy by ID

- Operation ID:
    - GetRuleBasedPolicyByID

Gets policy details by ID including rule sets and metadata.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy Id | policyId | True | string | The unique identifier of the policy. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - Policy

### Get Rule Set for Environment Group

- Operation ID:
    - GetRuleSet

Returns the Rule Set for the given environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | uuid | The unique identifier of the environment. |
| Group Id | groupId | True | uuid | The unique identifier of the environment group. |
| Api-version | api-version | True | string | The API version. |

#### Returns

OData response wrapper with continuation support.

- Body
    - MgGovODataResponse

### Get run history customer data for DSR export

- Operation ID:
    - GetRunHistoryData

Returns run history customer data for a flow run.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Flow Id | flowId | True | uuid | The flow ID. |
| Run Id | runId | True | string | The run ID. |
| Continuation Token | continuationToken |  | string | Base64-encoded continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get run history customer data for DSR export (environment-scoped)

- Operation ID:
    - GetRunHistoryDataNonSingleton

Returns run history data for a flow run in an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Flow Id | flowId | True | uuid | The flow ID. |
| Run Id | runId | True | string | The run ID. |
| Continuation Token | continuationToken |  | string | Base64-encoded continuation token for paging. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Generic paged response for DSR compliance APIs.

- Body
    - DsrPagedResponse

### Get tenant context summary for user per flow capacity source

- Operation ID:
    - GetUserPerFlowCapacitySourceTenantContextSummary

Ability to Get tenant context summary for user per flow capacity source.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- response
    - array of UserPerFlowCapacitySourceTenantContextSummaryRecord

### Get the billing policy at tenant level by policy ID

- Operation ID:
    - GetBillingPolicy

Ability to Get the billing policy at tenant level by policy ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyResponseModel

### Get the currency report for the tenant

- Operation ID:
    - ListCurrencyReports

Ability to Get the currency report for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Allocations | includeAllocations |  | boolean | Flag indicating to include allocations. |
| Include Consumptions | includeConsumptions |  | boolean | Flag indicating to include consumptions. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- response
    - array of CurrencyReportV2

### Get the environment group

- Operation ID:
    - GetEnvironmentGroup

Ability to Get the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | string | The group ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentGroup

### Get the environment linked to the billing policy

- Operation ID:
    - GetBillingPolicyEnvironment

Ability to Get the environment linked to the billing policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyEnvironmentResponseModelV1

### Get the linked billing policy details for an environment

- Operation ID:
    - GetEnvironmentBillingPolicy

Ability to Get the linked billing policy details for an environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyResponseModel

### Get the list of application packages that are available for install

- Operation ID:
    - GetEnvironmentApplicationPackage

Lists available app packages for a target environment with OData filtering.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | Environment ID (not to be confused with Org ID). |
| App Install State | appInstallState |  | string | Application package install state. |
| Lcid | lcid |  | string | Application package supported language ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ApplicationPackageContinuationResponse

### Get the list of billing policies for the tenant

- Operation ID:
    - ListBillingPolicies

Ability to Get the list of billing policies for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| $top | $top |  | string | The ISV contract ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyResponseModelResponseWithOdataContinuation

### Get the list of environments linked to the billing policy

- Operation ID:
    - ListBillingPolicyEnvironments

Ability to Get the list of environments linked to the billing policy.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyEnvironmentResponseModelV1ResponseWithOdataContinuation

### Get the list of ISV contracts for the tenant

- Operation ID:
    - ListISVContracts

Get the list of ISV contracts for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| $top | $top |  | string | Top limit of results. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - IsvContractResponseModelResponseWithOdataContinuation

### Get the polling status for a previously triggered installation

- Operation ID:
    - GetApplicationPackageInstallStatus

Gets install progress for an operation by its operation ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | Environment ID (not to be confused with organization ID). |
| Operation Id | operationId | True | uuid | Operation ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - InstancePackageOperationPollingResponse

### Get the Power Pages website details by specifying its unique identifier (ID)

- Operation ID:
    - GetWebsiteById

Get website details using a specified website ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - WebsiteDto

### Get the temporary currency count and limit for the month by type

- Operation ID:
    - RetrieveTemporaryCurrencyEntitlementCount

Ability to Get the temporary currency count and limit for the month by type.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Currency Type | currencyType | True | string | The currency type. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - GetTemporaryCurrencyEntitlementCountResponseModel

### Get the tenant capacity details for the tenant

- Operation ID:
    - GetTenantCapacityDetails

Ability to Get the tenant capacity details for the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - TenantCapacityDetailsModel

### Get the user per flow capacity source user context summary

- Operation ID:
    - GetUserPerFlowCapacitySourceUserContextSummary

Ability to Get the user per flow capacity source user context summary.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Page Number | pageNumber |  | integer | The page number for pagination. |
| Page Size | pageSize |  | integer | The page size for pagination. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paginated result container for user context summary records.

- Body
    - PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceUserContextRecord

### Get the web application firewall rules

- Operation ID:
    - GetWAFRules

Get the web application firewall rules associated with the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Rule Type | ruleType |  | string | Type of web application firewall rules to retrieve. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - WebApplicationFirewallConfiguration

### Get the web application firewall status

- Operation ID:
    - GetWAFStatus

Get the status of web application firewall associated with the given website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

#### Returns

Web application firewall status

- response
    - WebApplicationFirewallStatus

### Get user context summary for a specific user's per flow capacity source

- Operation ID:
    - GetUserPerFlowCapacitySourceUserContextSummaryForUserId

Ability to Get user context summary for a specific user's per flow capacity source.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| User Id | userId | True | uuid | The user identifier. |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Page Number | pageNumber |  | integer | The page number for pagination. |
| Page Size | pageSize |  | integer | The page size for pagination. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paginated result container for user context summary records.

- Body
    - PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceUserContextRecord

### Get user per flow capacity source data with pagination and filtering options

- Operation ID:
    - GetUserPerFlowCapacitySource

Ability to Get user per flow capacity source data with pagination and filtering options.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Start Date | startDate | True | date-time | The start date for the query range. |
| End Date | endDate |  | date-time | The end date for the query range. Defaults to current UTC time if not provided. |
| Page Number | pageNumber |  | integer | The page number for pagination. |
| Page Size | pageSize |  | integer | The page size for pagination. |
| User Id | userId |  | string | Filter by user identifier. |
| Flow Context | flowContext |  | string | Filter by flow context. |
| Flow License Categorization | flowLicenseCategorization |  | string | Filter by flow license categorization. |
| Resource Id | resourceId |  | string | Filter by resource identifier. |
| Environment Id | environmentId |  | uuid | Filter by environment identifier. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Paginated result container for user per flow capacity source records.

- Body
    - PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceRecord

### Gets business continuity snapshot for environment (Preview)

- Operation ID:
    - GetBusinessContinuityStateFullSnapshot

Gets business continuity snapshot including LastSyncTime.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BusinessContinuityStateFullSnapshot

### Gets copy target candidate environments (Preview)

- Operation ID:
    - GetEnvironmentCopyCandidates

Gets the list of environments that can be copied as the target environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source Environment Id | sourceEnvironmentId | True | string | The source environment ID. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentPagedCollection

### Gets restore candidate environments (Preview)

- Operation ID:
    - GetRestoreCandidates

Gets the list of restore candidates when restore from the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source Environment Id | sourceEnvironmentId | True | string | The environment ID of restore from. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentPagedCollection

### Gets the backups for the specified environment (Preview)

- Operation ID:
    - GetEnvironmentBackups

Gets the backups for the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentBackupPagedCollection

### Gets the status of an environment lifecycle operation (Preview)

- Operation ID:
    - GetOperationByID

Gets the status of an environment lifecycle operation.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Operation Id | operationId | True | string | The operation ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Link billing policy ID with environments

- Operation ID:
    - AddBillingPolicyEnvironment

Ability to Link billing policy ID with environments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |
| environmentIds | environmentIds |  | array of string |  |

### List connections in environment

- Operation ID:
    - ListConnections

Retrieves a list of connections in the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | ID of the environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ListConnectionsResponse

### List connectors in environment

- Operation ID:
    - ListConnectors

Retrieves a list of connectors in the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | ID of the environment. |
| $filter | $filter | True | string | Filter query to specify the environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ListConnectorsResponse

### List cross-tenant connection reports for a tenant

- Operation ID:
    - ListCrossTenantConnectionReports

Ability to List cross-tenant connection reports for a tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - CrossTenantConnectionReportsResponseWithOdataContinuation

### List environment group role assignments

- Operation ID:
    - ListEnvironmentGroupRoleAssignments

Retrieves a list of role assignments for the specified environment group. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Group Id | environmentGroupId | True | string | The unique identifier of the environment group. |
| Api-version | api-version | True | string | The API version. |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### List environment role assignments

- Operation ID:
    - ListEnvironmentRoleAssignments

Retrieves a list of role assignments for the specified environment. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The unique identifier of the environment. |
| Api-version | api-version | True | string | The API version. |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### List Power Pages websites

- Operation ID:
    - GetWebsites

Get a list of all the websites in your environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Skip | skip |  | string | The number of items to skip before returning the remaining items. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ODataListWebsitesDto

### List role assignments

- Operation ID:
    - ListRoleAssignments

Retrieves a list of role assignments. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

The role assignments.

- Body
    - RoleAssignmentResponse

### List role definitions

- Operation ID:
    - ListRoleDefinitions

Retrieves a list of role definitions. Preview.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

The available role definitions for assignment.

- Body
    - RoleDefinitionResponse

### List rule based policies

- Operation ID:
    - ListRuleBasedPolicies

List rule based policies available in the tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - ListPolicyResponse

### List rule based policy assignments

- Operation ID:
    - ListRuleAssignments

Lists rule assignments for a tenant with rule set details.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Include Rule Set Counts | includeRuleSetCounts | True | boolean | Flag to include rule set counts in the response. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - RuleAssignmentsResponse

### List rule based policy assignments for a specific environment

- Operation ID:
    - ListRuleAssignmentsByEnvironmentId

Lists rule assignments for a specific environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The unique identifier of the environment group. |
| Include Rule Set Counts | includeRuleSetCounts | True | boolean | Flag to include rule set counts in the response. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - RuleAssignmentsResponse

### List rule based policy assignments for a specific environment group

- Operation ID:
    - ListRuleAssignmentsByEnvironmentGroupId

Lists rule assignments for an environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Group Id | environmentGroupId | True | string | The unique identifier of the environment group. |
| Include Rule Set Counts | includeRuleSetCounts | True | boolean | Flag to include rule set counts in the response. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - RuleAssignmentsResponse

### List rule based policy assignments for a specific policy

- Operation ID:
    - ListRuleAssignmentsByPolicyId

Lists rule assignments for a policy with rule set details.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy Id | policyId | True | string | The unique identifier of the policy. |
| Include Rule Set Counts | includeRuleSetCounts | True | boolean | Flag to include rule set counts in the response. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - RuleAssignmentsResponse

### List Rule Sets for Tenant

- Operation ID:
    - GetRuleSetListForTenant

Returns all the Rule Sets under the given tenant with OData pagination support.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| $select | $select |  | string | OData select query option. |
| $filter | $filter |  | string | OData filter query option. |
| $expand | $expand |  | string | OData expand query option. |
| $skiptoken | $skiptoken |  | string | OData skip token for pagination. |
| $top | $top |  | integer | OData top query option to limit results. |
| Api-version | api-version | True | string | The API version. |

#### Returns

OData response wrapper with continuation support.

- Body
    - MgGovODataResponse

### List the environment groups

- Operation ID:
    - ListEnvironmentGroups

Ability to List the environment groups.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentGroupResponseWithOdataContinuation

### List the installable application packages for a tenant

- Operation ID:
    - GetTenantApplicationPackage

Get the list of available application packages for a tenant.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - TenantApplicationPackageContinuationResponse

### Lists the environment lifecycle operations for a specific environment (Preview)

- Operation ID:
    - GetOperationsForEnvironment

Lists the environment lifecycle operations for a specific environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Limit | limit |  | string | The limit. |
| Continuation Token | continuationToken |  | string | The continuation token. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - OperationExecutionResultPagedCollection

### Modifies sku for the specified environment (Preview)

- Operation ID:
    - ModifyEnvironmentSku

Modifies sku for the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| environmentSku | environmentSku | True | string | The environment SKU. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Performs DR Drill for the specified environment (Preview)

- Operation ID:
    - PerformDRDrill

Performs DR Drill for the specified environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID of Environment. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

#### Returns

Represents the result of an operation execution.

- Body
    - OperationExecutionResult

### Query Power Platform resources

- Operation ID:
    - QueryResources

Executes a KQL query against Azure Resource Graph with ARG paging.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |
| TableName | TableName | True | string | Target table/resource set (e.g., "PowerPlatformResources") |
| $type | $type | True | string | Discriminator for the clause type. |
| Top | Top |  | integer | Max rows per page |
| Skip | Skip |  | integer | Offset; typically 0 when using SkipToken |
| SkipToken | SkipToken |  | string | Continuation token from previous page |

#### Returns

- Body
    - ResourceQueryResponse

### Reassign the owner of the bot

- Operation ID:
    - ReassignCopilotAgent

Reassign the owner of the bot.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | EnvironmentId | True | string | The environment ID. |
| Bot Id | BotId | True | string | The bot ID. |
| Api-version | api-version | True | string | The API version. |
| NewOwnerAadUserId | NewOwnerAadUserId | True | string | The new owner aad id. |

### Recover the deleted environment (Preview)

- Operation ID:
    - RecoverEnvironment

Recover the deleted environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment that will be recovered. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |

### Refresh the billing policy provisioning status

- Operation ID:
    - RefreshProvisioningStatus

Ability to Refresh the billing policy provisioning status.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BillingPolicyResponseModel

### Remove the environment from the environment group

- Operation ID:
    - RemoveEnvironmentFromGroup

Ability to Remove the environment from the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | uuid | The group ID. |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

### Restart a Power Pages website

- Operation ID:
    - RestartWebsite

Restart the website for the given site ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Restores the specified environment to a previous backup (Preview)

- Operation ID:
    - RestoreEnvironment

Restores the specified environment to a previous backup.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Target Environment Id | targetEnvironmentId | True | string | The target environment ID. |
| Validate Only | ValidateOnly |  | boolean | If true, validates the request without executing it. |
| Validate Properties | ValidateProperties |  | string | Comma-separated property names to validate with ValidateOnly. |
| Api-version | api-version | True | string | The API version. |
| restorePointDateTime | restorePointDateTime | True | date-time | Restore point date-time with timezone offset per RFC 3339. |
| skipAuditData | skipAuditData |  | boolean | A value indicating whether to skip audit data during the restore process. |
| sourceEnvironmentId | sourceEnvironmentId | True | string | The ID of the source environment from which the backup will be restored from. |

### Retrieve a list of environments (preview)

- Operation ID:
    - ListEnvironmentsForUser

Returns a list of environments available for the authenticated user.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentList

### Retrieve cloud flows with filters

- Operation ID:
    - ListCloudFlows

Returns a list of cloud flows.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Workflow Id | workflowId |  | uuid | The workflow ID. |
| Resource Id | resourceId |  | uuid | The resource ID. |
| Created By | createdBy |  | uuid | The creator Dataverse ID. |
| Owner Id | ownerId |  | uuid | The owner Dataverse ID. |
| Created On Start Date | createdOnStartDate |  | date | Filter for created on or after this date. |
| Created On End Date | createdOnEndDate |  | date | Filter for created on or before this date. |
| Modified On Start Date | modifiedOnStartDate |  | date | Filter for modified on or after this date. |
| Modified On End Date | modifiedOnEndDate |  | date | Filter for modified on or before this date. |
| Api-version | api-version | True | string | The API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CloudFlow |  |
| nextLink | nextLink | string | URL to retrieve the next page of results, if any. Page size is 250. |

### Retrieve flow actions with filters

- Operation ID:
    - ListFlowActions

Returns a list of flow actions.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Workflow Id | workflowId |  | uuid | The workflow ID. |
| Parent Process Stage Id | parentProcessStageId |  | uuid | The parent process stage ID. |
| Connector | connector |  | string | The connector name. |
| Is Trigger | isTrigger |  | boolean | Indicates if the action is a trigger. No filter if unset. |
| Parameter Name | parameterName |  | string | A keyword to search within the parameter name field. |
| Parameter Value | parameterValue |  | string | A keyword to search within the parameter value field. |
| Exact | exact |  | boolean | Use exact matching for parameterName and parameterValue. |
| Api-version | api-version | True | string | The API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of FlowAction |  |
| nextLink | nextLink | string | URL to retrieve the next page of results, if any. Page size is 250. |

### Retrieve flow runs by workflow ID

- Operation ID:
    - ListFlowRuns

Returns a list of flow runs.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Workflow Id | workflowId | True | uuid | The workflow ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of FlowRun |  |
| nextLink | nextLink | string | URL to retrieve the next page of results, if any. Page size is 250. |

### Retrieves a single environment by ID (preview)

- Operation ID:
    - GetEnvironmentByIdForUser

Ability to Retrieves a single environment by ID (preview).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - EnvironmentResponse

### Set Bot as Quarantined

- Operation ID:
    - SetBotAsQuarantined

Set the quarantine status of a bot to true.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | EnvironmentId | True | string | The environment ID. |
| Bot Id | BotId | True | string | The bot ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BotQuarantineStatus

### Set Bot as Unquarantined

- Operation ID:
    - SetBotAsUnquarantined

Set the quarantine status of a bot to false.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | EnvironmentId | True | string | The environment ID. |
| Bot Id | BotId | True | string | The bot ID. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- Body
    - BotQuarantineStatus

### Stamp bootstrap version five (5) status as enabled for website

- Operation ID:
    - SetPortalBootstrapV5Enabled

Stamp bootstrap version five (5) status as enabled for website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Stamp data model version for website

- Operation ID:
    - SetPortalDataModelVersion

Stamp data model version for website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |
| dataModelVersionValue | dataModelVersionValue | True | boolean | value of data model version for IsNewDataModel |

### Start a Power Pages website

- Operation ID:
    - StartWebsite

Start the website for the given site ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Start deep scan for a Power Pages website

- Operation ID:
    - StartDeepScan

Start deep scan for a Power Pages website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Start the install of application package in target environment

- Operation ID:
    - InstallApplicationPackage

Installs an app package by unique name into a target environment.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | Environment ID (not to be confused with the organization ID). |
| Unique Name | uniqueName | True | string | Package unique name. |
| Api-version | api-version | True | string | The API version. |
| payloadValue | payloadValue |  | string |  |

#### Returns

- Body
    - InstancePackage

### Stop a Power Pages website

- Operation ID:
    - StopWebsite

Stop the website for the given site ID.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Api-version | api-version | True | string | The API version. |

### Storage warning thresholds

- Operation ID:
    - ListStorageWarnings

Ability to Storage warning thresholds.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Api-version | api-version | True | string | The API version. |

#### Returns

- response
    - array of StorageWarningThresholdsDocument

### Storage warning thresholds filtered by category

- Operation ID:
    - GetStorageWarningByCategory

Ability to Storage warning thresholds filtered by category.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage Category | storageCategory | True | string | The storage category value. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- response
    - array of StorageWarningThresholdsDocument

### Storage warning thresholds filtered by category and storage entity name

- Operation ID:
    - GetStorageWarningByCategoryAndEntity

Ability to Storage warning thresholds filtered by category and storage entity name.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Storage Category | storageCategory | True | string | The storage category value. |
| Entity Name | entityName | True | string | The name of the entity. |
| Api-version | api-version | True | string | The API version. |

#### Returns

- response
    - array of StorageWarningThresholdsDocument

### Unlink billing policy ID from environments

- Operation ID:
    - RemoveBillingPolicyEnvironment

Ability to Unlink billing policy ID from environments.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |
| environmentIds | environmentIds |  | array of string |  |

### Update an ISV contract

- Operation ID:
    - UpdateISVContract

Update an ISV contract.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Isv Contract Id | isvContractId | True | string | The ISV contract ID. |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string |  |
| status | status |  | string | The desired ISV contract status. |
| allowOtherPremiumConnectors | allowOtherPremiumConnectors |  | boolean | Whether metered usage with premium connectors may be attributed. |
| name | name |  | string | The name of an API connector. |
| cloudFlowRunsPayAsYouGoState | cloudFlowRunsPayAsYouGoState |  | string |  |

#### Returns

- Body
    - IsvContractResponseModel

### Update fields on the environment management setting

- Operation ID:
    - UpdateEnvironmentManagementSettings

Ability to Update fields on the environment management setting.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The ID for the environment management setting being updated. |
| Api-version | api-version | True | string | The API version. |
|  |  |  | object |  |

#### Returns

Represents the response object for APIs in this service.

- Body
    - OperationResponse

### Update Finance and Operations Maintenance Settings

- Operation ID:
    - UpdateFinOpsMaintenanceSettings

Updates the F&O maintenance settings for an environment managed by Power Platform admin center.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | uuid | The unique identifier of the environment. |
| Api-version | api-version | True | string | The API version. |
| updatedMaintenanceWindowDaysOfWeek | updatedMaintenanceWindowDaysOfWeek |  | string | Day of the week (aligned with .NET System.DayOfWeek enum). |
| updatedMaintenanceWindowCadence | updatedMaintenanceWindowCadence |  | string | Cadence for major version application updates. |

#### Returns

Finance and Operations Maintenance response.

- Body
    - FinOpsAdminSettingsResponse

### Update rule based policy by ID

- Operation ID:
    - UpdateRuleBasedPolicyByID

Updates a policy by ID including rule sets and metadata.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Policy Id | policyId | True | string | The unique identifier of the policy. |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string | The name of the policy. |
| id | id |  | string | The unique identifier of the rule set. |
| version | version |  | string | The version of the rule set. |
| inputs | inputs |  | object | The inputs for the rule set, which may vary based on the rule. |

#### Returns

- Body
    - RuleAssignment

### Update Rule Set

- Operation ID:
    - UpdateRuleSet

Updates the Rule Set.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Rule Set Id | ruleSetId | True | uuid | The unique identifier of the Rule Set. |
| Api-version | api-version | True | string | The API version. |
| id | id |  | string | The ID of the Rule Set. |
| lastModified | lastModified |  | date-time | The last modified timestamp. |
| type | type |  | string | The type of environment filter. |
| id | id |  | string | The ID of the environment. |
| type | type |  | string | The type of the environment. |
| name | name |  | string | The name of the environment. |
| type | type | True | string | The type of the Rule Set. |
| resourceType | resourceType | True | string | The type of resource. |
| id | id |  | string | The rule ID. |
| value | value |  | string | The rule value. |

#### Returns

Rule Set data transfer object.

- Body
    - RuleSetDto

### Update security group for site visibility for a website

- Operation ID:
    - UpdatePortalSecurityGroup

Update the security group for site visibility for a website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Security Group Id | securityGroupId |  | string | Security group ID. |
| Api-version | api-version | True | string | The API version. |

### Update site visibility for a website

- Operation ID:
    - UpdateSiteVisibility

Update site visibility for a website.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Environment Id | environmentId | True | string | The environment ID. |
| Id | id | True | string | Website unique identifier (ID). |
| Site Visibility | siteVisibility |  | string | Site visibility. |
| Api-version | api-version | True | string | The API version. |

### Update the environment group

- Operation ID:
    - UpdateEnvironmentGroup

Ability to Update the environment group.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Group Id | groupId | True | uuid | The group ID. |
| Api-version | api-version | True | string | The API version. |
| id | id |  | uuid |  |
| displayName | displayName |  | string |  |
| description | description |  | string |  |
| parentGroupId | parentGroupId |  | uuid |  |
| childrenGroupIds | childrenGroupIds |  | array of uuid |  |
| createdTime | createdTime |  | date-time |  |
| id | id |  | string |  |
| displayName | displayName |  | string |  |
| email | email |  | string |  |
| type | type |  | string |  |
| tenantId | tenantId |  | string |  |
| userPrincipalName | userPrincipalName |  | string |  |
| lastModifiedTime | lastModifiedTime |  | date-time |  |
| id | id |  | string |  |
| displayName | displayName |  | string |  |
| email | email |  | string |  |
| type | type |  | string |  |
| tenantId | tenantId |  | string |  |
| userPrincipalName | userPrincipalName |  | string |  |

#### Returns

- Body
    - EnvironmentGroup

### Updates the billing policy at tenant level

- Operation ID:
    - UpdateBillingPolicy

Ability to Updates the billing policy at tenant level.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Billing Policy Id | billingPolicyId | True | string | The billing policy ID. |
| Api-version | api-version | True | string | The API version. |
| name | name |  | string |  |
| status | status |  | string | The desired ISV contract status. |

#### Returns

- Body
    - BillingPolicyResponseModel

## Definitions

### ActionEvent

An action event in a flow run. Type determines properties.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | ActionEventType | The type of action event. |

### ActionEventType

The type of action event.

The type of action event.

    - string

### AdvisorActionResponse

The response for action performed on resources

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | array of AdvisorActionResult |  |

### AdvisorActionResult

The result of an action performed on a resource

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Resource ID | resourceId | string | The unique ID of the resource for which the action was performed |
| Status Code | statusCode | integer | The status code of the action request for the given resource |
| Action Result | actionFinalResult | string | Final status of the action request |
| Error Code | errorCode | string | The error code associated with any error encountered during the action execution |
| Error Message | error | string | The error message associated with any error encountered during the action execution |

### AdvisorRecommendation

Information for a recommendation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Recommendation Name | scenario | string | The recommendation name. |
| details | details | AdvisorRecommendationDetails | Details for a recommendation |

### AdvisorRecommendationDetails

Details for a recommendation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Resource count | resourceCount | integer | The number of resources |
| Last refresh timestamp | lastRefreshedTimestamp | date-time | Time when the recommendation was refreshed |
| Expected next refresh timestamp | expectedNextRefreshTimestamp | date-time | Time when the recommendation will be refreshed again |

### AdvisorRecommendationIEnumerableResponseWithContinuation

Paged list of recommendations

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of AdvisorRecommendation | List of recommendations |
| Next link | nextLink | string | Link to get the next page of recommendations |

### AdvisorRecommendationResource

Details of a resource included in a recommendation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Resource display name | resourceName | string | The resource display name |
| Resource ID | resourceId | string | The resource unique ID |
| Owner ID | resourceOwnerId | string | The resource owner object ID |
| Owner name | resourceOwner | string | The resource owner display name |
| Resource type | resourceType | string | The type of resource |
| Resource sub type | resourceSubType | string | The sub type of the resource |
| Resource description | resourceDescription | string | The resource description |
| Resource usage | resourceUsage | double | Number of unique users who used the resource in the last thirty (30) days |
| Environment name | environmentName | string | The environment display name |
| Environment ID | environmentId | string | The environment unique ID |
| Last modfified date | lastModifiedDate | date-time | Time when the resource was last modified |
| Last used date | lastAccessedDate | date-time | Time when the resource was last used |
| Action Status | resourceActionStatus | string | Current status of any action taken since the last refresh time |

### AdvisorRecommendationResourceIEnumerableResponseWithContinuation

Paged list of recommendation resources

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of AdvisorRecommendationResource | List of recommendation resources |
| Next link | nextLink | string | Link to get the next page of resources |

### Alert

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| AlertId | AlertId | string | Unique identifier of the alert |
| AlertName | AlertName | string | Name of the alert |
| Description | Description | string | Detailed description of the alert |
| Mitigation | Mitigation | string | Steps to mitigate the issue |
| Risk | Risk | integer | Risk level associated with the alert |
| RuleId | RuleId | string | Identifier of the rule that generated the alert |
| LearnMoreLink | LearnMoreLink | array of uri | Links to learn more about the alert |
| CallToAction | CallToAction | array of string | Actions to address the alert |

### AllocationsByEnvironmentResponseModelV1

The response body includes environment ID and allocated currencies.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| environmentId | environmentId | string | The environment ID for which the currency has been allocated. |
| currencyAllocations | currencyAllocations | array of CurrencyAllocationResponseModelV1 | The collection of currencies with allocation count. |

### AllowedIpAddressesConfiguration

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| AllowedIpAddresses | AllowedIpAddresses | array of object |  |
| IpAddress | AllowedIpAddresses.IpAddress | string | The IP address or CIDR range |
| IpType | AllowedIpAddresses.IpType | IpAddressType | The type of the IP address |
| TenantId | AllowedIpAddresses.TenantId | uuid | The unique identifier of the tenant |
| CreatedOn | AllowedIpAddresses.CreatedOn | date-time | The creation timestamp of the IP address entry |
| LastModifiedOn | AllowedIpAddresses.LastModifiedOn | string |  |

### ApplicationPackage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | uuid | Package or instance package ID that maps to the app package ID |
| uniqueName | uniqueName | string | Available package unique name or instance package unique name |
| version | version | string | Available package version or instance package version |
| localizedDescription | localizedDescription | string | Localized description for the application package |
| localizedName | localizedName | string | Localized name of application package |
| applicationId | applicationId | uuid | Application ID |
| applicationName | applicationName | string | Application name |
| applicationDescription | applicationDescription | string | Application description |
| singlePageApplicationUrl | singlePageApplicationUrl | string | Single Page Application (SPA) URL associated with the application |
| publisherName | publisherName | string | Publisher name |
| publisherId | publisherId | uuid | Publisher ID |
| learnMoreUrl | learnMoreUrl | string | Learn more URL for the application |
| platformMinVersion | platformMinVersion | string | Available package platform minimum version |
| platformMaxVersion | platformMaxVersion | string | Available package platform maximum version |
| customHandleUpgrade | customHandleUpgrade | boolean | Available package custom upgrade |
| instancePackageId | instancePackageId | uuid | Instance package ID used only for install retry (e.g., reinstall). |
| state | state | InstancePackageState | State of the instance package |
| catalogVisibility | catalogVisibility | CatalogVisibility | Catalog visibility for the application |
| applicationVisibility | applicationVisibility | ApplicationVisibility | Application visibility |
| lastError | lastError | ErrorDetails |  |
| startDateUtc | startDateUtc | date-time | Start date for application package |
| endDateUtc | endDateUtc | date-time | End date for application package |
| supportedCountries | supportedCountries | array of string | List of supported countries/regions for the application |

### ApplicationPackageContinuationResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ApplicationPackage |  |
| @odata.nextLink | @odata.nextLink | string |  |

### ApplicationVisibility

Application visibility

Application visibility

    - string

### BillingInstrumentModel

The ISV billing instrument information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| subscriptionId | subscriptionId | uuid | The tenant subscription Id. |
| resourceGroup | resourceGroup | string | The resource group within the tenant subscription. |
| id | id | string |  |

### BillingPolicyConditionsApiFilterModel

The Power Platform connector filter.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| allowOtherPremiumConnectors | allowOtherPremiumConnectors | boolean | Whether metered usage with premium connectors may be attributed. |
| requiredApis | requiredApis | array of BillingPolicyConditionsApiModel | Connectors where at least one must be in the metered usage. |

### BillingPolicyConditionsApiModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The name of an API connector. |

### BillingPolicyConditionsModel

The ISV Contract API filter conditions.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| apiFilter | apiFilter | BillingPolicyConditionsApiFilterModel | The Power Platform connector filter. |

### BillingPolicyEnvironmentResponseModelV1

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| billingPolicyId | billingPolicyId | string |  |
| environmentId | environmentId | string |  |

### BillingPolicyEnvironmentResponseModelV1ResponseWithOdataContinuation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of BillingPolicyEnvironmentResponseModelV1 |  |
| @odata.nextLink | @odata.nextLink | string |  |

### BillingPolicyResponseModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| name | name | string |  |
| status | status | BillingPolicyStatus | The desired ISV contract status. |
| location | location | string |  |
| billingInstrument | billingInstrument | BillingInstrumentModel | The ISV billing instrument information. |
| createdOn | createdOn | date-time |  |
| createdBy | createdBy | Principal |  |
| lastModifiedOn | lastModifiedOn | date-time |  |
| lastModifiedBy | lastModifiedBy | Principal |  |

### BillingPolicyResponseModelResponseWithOdataContinuation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of BillingPolicyResponseModel |  |
| @odata.nextLink | @odata.nextLink | string |  |

### BillingPolicyStatus

The desired ISV contract status.

The desired ISV contract status.

    - string

### BotQuarantineStatus

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| isBotQuarantined | isBotQuarantined | boolean | Indicates whether the bot is quarantined. |
| lastUpdateTimeUtc | lastUpdateTimeUtc | date-time | The last update time in UTC. |

### BusinessContinuityStateFullSnapshot

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| lastSyncTime | lastSyncTime | date-time |  |

### CapacityAvailabilityStatus

    - string

### CapacityEntitlementType

    - string

### CapacityStatusMessageCode

    - string

### CapacitySummary

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | CapacityAvailabilityStatus |  |
| statusMessage | statusMessage | string |  |
| statusMessageCode | statusMessageCode | CapacityStatusMessageCode |  |
| finOpsStatus | finOpsStatus | CapacityAvailabilityStatus |  |
| finOpsStatusMessage | finOpsStatusMessage | string |  |
| finOpsStatusMessageCode | finOpsStatusMessageCode | CapacityStatusMessageCode |  |

### CapacityType

    - string

### CapacityUnits

    - string

### CatalogVisibility

Catalog visibility for the application

Catalog visibility for the application

    - string

### CloudFlow

The cloud flow object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The display name of the flow. |
| createdOn | createdOn | date-time | Created date and time of the flow (UTC). |
| modifiedOn | modifiedOn | date-time | Last modified date and time of the flow (UTC). |
| description | description | string | Description of the flow. |
| workflowId | workflowId | uuid | The workflow ID. |
| resourceId | resourceId | uuid | The resource ID. |
| parentWorkflowId | parentWorkflowId | uuid | The parent workflow ID. |
| stateCode | stateCode | WorkflowStateCode | Indicates the workflow state. |
| statusCode | statusCode | WorkflowStatusCode | Indicates the workflow status. |
| modernFlowType | modernFlowType | ModernFlowType | Indicates the modernflow type. |
| definition | definition | string | Client data field of the workflow record. |
| uniqueName | uniqueName | string | The Dataverse unique name. |
| createdBy | createdBy | uuid | The created by Dataverse ID. |
| createdOnBehalfBy | createdOnBehalfBy | uuid | The created on behalf by Dataverse ID. |
| modifiedBy | modifiedBy | uuid | The modified by Dataverse ID. |
| modifiedOnBehalfBy | modifiedOnBehalfBy | uuid | The modified on behalf by ID. |
| ownerId | ownerId | uuid | The owner Dataverse ID. |
| owningBusinessUnit | owningBusinessUnit | uuid | The owning business unit Dataverse ID. |
| owningTeam | owningTeam | uuid | The owning team Dataverse ID. |
| owningUser | owningUser | uuid | The owning user Dataverse ID. |

### Connection

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string |  |
| id | id | string |  |
| type | type | string |  |
| apiId | properties.apiId | string |  |
| displayName | properties.displayName | string |  |
| iconUri | properties.iconUri | uri |  |
| statuses | properties.statuses | array of ConnectionStatus |  |
| name | properties.connectionParametersSet.name | string |  |
| values | properties.connectionParametersSet.values | object |  |
| connectionParameters | properties.connectionParameters | object |  |
| keywordsRemaining | properties.keywordsRemaining | integer |  |
| isSsoConnection | properties.isSsoConnection | boolean |  |
| createdBy | properties.createdBy | ConnectionCreatedBy |  |
| createdTime | properties.createdTime | date-time |  |
| lastModifiedTime | properties.lastModifiedTime | date-time |  |
| expirationTime | properties.expirationTime | date-time |  |
| testLinks | properties.testLinks | array of object |  |
| requestUri | properties.testLinks.requestUri | uri |  |
| method | properties.testLinks.method | string |  |
| id | properties.environment.id | string |  |
| name | properties.environment.name | string |  |
| accountName | properties.accountName | string |  |
| metadata | properties.metadata | object |  |
| allowSharing | properties.allowSharing | boolean |  |

### ConnectionCreatedBy

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| displayName | displayName | string |  |
| email | email | string |  |
| type | type | string |  |
| tenantId | tenantId | string |  |
| userPrincipalName | userPrincipalName | string |  |

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
| Bypass consent | bypassConsent | boolean | Flag indicates bypassed API consent |
| API tier | apiTier | string | API tier is standard or premium |
| Custom API flag | isCustomApiConnection | boolean | Flag indicates custom connector |
| Runtime Policy Name | runtimePolicyName | string | String indicating the name of the runtime policy |
| Execution Restrictions | executionRestrictions | object | Execution restrictions for the runtime policy |
| Shared Connection ID | sharedConnectionId | string | String indicating the ID of the shared connection |

### ConnectionReferences

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | ConnectionReference |  |

### ConnectionStatus

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | string |  |
| target | target | string |  |
| code | error.code | string |  |
| message | error.message | string |  |

### ConsumerIdentityModel

The consumer identity for ISV contract.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The ID of the customer tenant. |

### ConsumptionModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| actual | actual | double |  |
| rated | rated | double |  |
| actualUpdatedOn | actualUpdatedOn | date-time |  |
| ratedUpdatedOn | ratedUpdatedOn | date-time |  |

### ConversationTranscript

A single conversation transcript record.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | string | The tenant ID. |
| objectId | objectId | string | The user object ID. |
| timestamp | timestamp | date-time | Timestamp of the conversation. |
| serviceRequestCorrelationId | serviceRequestCorrelationId | string | Service request correlation ID for tracing. |
| requestCorrelationId | requestCorrelationId | string | Request correlation ID for tracing. |
| systemMetadata | systemMetadata | ConversationTranscriptSystemMetadata | System metadata for a conversation transcript. |
| request | request | ConversationTranscriptRequest | The request portion of a conversation transcript. |
| response | response | ConversationTranscriptResponse | The response portion of a conversation transcript. |

### ConversationTranscriptCompletion

A completion generated in the conversation response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | Generated text content. |
| finishReason | finishReason | string | Reason the completion finished (e.g. stop, tool\_calls). |
| toolCalls | toolCalls | array of ConversationTranscriptToolCall | Tool calls requested by the completion. |

### ConversationTranscriptFunction

Function details of a tool call.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Name of the function called. |
| arguments | arguments | string | JSON-encoded arguments passed to the function. |

### ConversationTranscriptMessage

A message in the conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| role | role | string | Role of the message sender (e.g. user, assistant, system, tool). |
| content | content | string | Text content of the message. |
| name | name | string | Name of the message sender, if applicable. |
| isCustomerContent | isCustomerContent | boolean | Whether this message contains customer content. |
| toolCalls | toolCalls | array of ConversationTranscriptToolCall | Tool calls made in this message. |
| toolCallId | toolCallId | string | ID of the tool call this message is responding to. |

### ConversationTranscriptRequest

The request portion of a conversation transcript.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| messages | messages | array of ConversationTranscriptMessage | Messages in the conversation request. |
| tools | tools | array of ConversationTranscriptTool | Tools available during the conversation. |
| toolChoice | toolChoice | string | The tool choice strategy. |

### ConversationTranscriptResponse

The response portion of a conversation transcript.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| completions | completions | array of ConversationTranscriptCompletion | Completions generated by the model. |
| succeeded | succeeded | boolean | Whether the response was successful. |

### ConversationTranscriptScenario

The scenario under which the conversation occurred.

The scenario under which the conversation occurred.

    - string

### ConversationTranscriptSystemMetadata

System metadata for a conversation transcript.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| scenario | scenario | ConversationTranscriptScenario | The scenario under which the conversation occurred. |

### ConversationTranscriptTool

A tool available during the conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | string | Type of the tool. |
| function | function | ConversationTranscriptToolFunction | Function definition of a tool. |

### ConversationTranscriptToolCall

A tool call within a conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique identifier of the tool call. |
| type | type | string | Type of the tool call. |
| function | function | ConversationTranscriptFunction | Function details of a tool call. |

### ConversationTranscriptToolFunction

Function definition of a tool.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| description | description | string | Description of what the function does. |
| name | name | string | Name of the function. |
| parameters | parameters | object | JSON Schema defining the function parameters. |

### CreateEnvironmentManagementSettingResponse

Represents the response object for APIs in this service.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| objectResult | objectResult | string | Gets or sets the ID of the entity being created in the response |
| errors | errors | ErrorResponse |  |
| nextLink | nextLink | uri | Gets or sets the next link if there are more records to be returned |
| responseMessage | responseMessage | string | Gets or sets the error message. |

### CrossTenantConnection

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The Azure AD tenant ID to or from which the cross-tenant connection occurred. |
| connectionType | connectionType | string | The direction of the cross-tenant connection. |

### CrossTenantConnectionReport

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The Azure AD tenant ID for which the report was generated. |
| reportId | reportId | uuid | The report ID. |
| requestDate | requestDate | date-time | The date when the cross-tenant connection report was requested. |
| startDate | startDate | date-time | The start of the report date window. |
| endDate | endDate | date-time | The end of the report date window. |
| status | status | string |  |
| connections | connections | array of CrossTenantConnection | The page of cross-tenant connections occurring within the report date window. |
| @odata.nextLink | @odata.nextLink | string | Next page URI for additional cross-tenant connections. |

### CrossTenantConnectionReportsResponseWithOdataContinuation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of CrossTenantConnectionReport | The cross-tenant connection reports for the tenant. |
| @odata.nextLink | @odata.nextLink | string | The URI of the next page of the list response. |

### CurrencyAllocationResponseModelV1

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| currencyType | currencyType | ExternalCurrencyType | Available currency type which can be allocated to environment. |
| allocated | allocated | integer | The allocated count of currency type |

### CurrencyConsumption

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| unitsConsumed | unitsConsumed | integer |  |
| lastUpdatedDay | lastUpdatedDay | date-time |  |

### CurrencyReportV2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| currencyType | currencyType | ExternalCurrencyType | Available currency type which can be allocated to environment. |
| purchased | purchased | integer |  |
| allocated | allocated | integer |  |
| consumed | consumed | CurrencyConsumption |  |

### CustomRule

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Name of the custom rule |
| priority | priority | integer | Priority of the rule |
| enabledState | enabledState | string | State of the rule |
| ruleType | ruleType | WafRuleType | WAF rule type |
| rateLimitDurationInMinutes | rateLimitDurationInMinutes | integer | Duration in minutes for rate limiting |
| rateLimitThreshold | rateLimitThreshold | integer | Threshold for rate limiting |
| matchConditions | matchConditions | array of object |  |
| matchVariable | matchConditions.matchVariable | string | Variable to match |
| selector | matchConditions.selector | string | Selector for the match variable |
| operator | matchConditions.operator | string | Operator for the match condition |
| negateCondition | matchConditions.negateCondition | boolean | Whether to negate the condition |
| matchValue | matchConditions.matchValue | array of string | Values to match |
| transforms | matchConditions.transforms | array of string | Transformations to apply |
| action | action | string | Action to take when the rule matches |

### DsrConversationTranscriptsResponse

Response containing conversation transcripts for DSR export.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of ConversationTranscript | List of conversation transcripts. |
| nextLink | nextLink | string | URL to retrieve the next page of results, if available. |

### DsrFlowRunData

Action event data for a single flow run.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| runId | runId | string | The run ID. |
| actionEvents | actionEvents | array of ActionEvent | List of action events in the run. |

### DsrFlowRunsResponse

Response containing flow run action history for DSR export.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| flowId | flowId | string | The workflow ID. |
| value | value | array of DsrFlowRunData | List of flow run data entries. |
| nextLink | nextLink | string | URL to retrieve the next page of results, if available. |

### DsrPagedResponse

Generic paged response for DSR compliance APIs.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object | Collection of records. Structure varies by resource type. |
| items | value | object |  |
| nextLink | nextLink | string | URL to retrieve the next page of results, if available. |

### Environment

Power platform Environment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| environmentId | environmentId | string | The environment ID. |
| displayName | displayName | string | Display name of the environment. |
| dataverseOrganizationUrl | dataverseOrganizationUrl | string | Dataverse organization Url of the environment. |

### EnvironmentBackup

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| backupPointDateTime | backupPointDateTime | date-time | The backup point date time. Set when backup is created. |
| label | label | string | The label for the manually created backup. |
| backupExpiryDateTime | backupExpiryDateTime | date-time | Backup expiry date time based on retention period in days. |
| id | id | string | Environment backup ID. Auto-generated GUID if null. |
| createdBy | createdBy | Identity |  |

### EnvironmentBackupPagedCollection

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| collection | collection | array of EnvironmentBackup |  |
| continuationToken | continuationToken | string |  |

### EnvironmentGroup

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | uuid |  |
| displayName | displayName | string |  |
| description | description | string |  |
| parentGroupId | parentGroupId | uuid |  |
| childrenGroupIds | childrenGroupIds | array of uuid |  |
| createdTime | createdTime | date-time |  |
| createdBy | createdBy | Principal |  |
| lastModifiedTime | lastModifiedTime | date-time |  |
| lastModifiedBy | lastModifiedBy | Principal |  |

### EnvironmentGroupResponseWithOdataContinuation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of EnvironmentGroup |  |
| @odata.nextLink | @odata.nextLink | string |  |

### EnvironmentList

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of EnvironmentResponse |  |

### EnvironmentManagementSetting

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| tenantId | tenantId | uuid |  |
| enableIpBasedStorageAccessSignatureRule | enableIpBasedStorageAccessSignatureRule | boolean |  |
| allowedIpRangeForStorageAccessSignatures | allowedIpRangeForStorageAccessSignatures | string |  |
| ipBasedStorageAccessSignatureMode | ipBasedStorageAccessSignatureMode | integer |  |
| loggingEnabledForIpBasedStorageAccessSignature | loggingEnabledForIpBasedStorageAccessSignature | boolean |  |
| powerPages\_AllowMakerCopilotsForNewSites | powerPages\_AllowMakerCopilotsForNewSites | string |  |
| powerPages\_AllowMakerCopilotsForExistingSites | powerPages\_AllowMakerCopilotsForExistingSites | string |  |
| powerPages\_AllowProDevCopilotsForSites | powerPages\_AllowProDevCopilotsForSites | string |  |
| powerPages\_AllowSiteCopilotForSites | powerPages\_AllowSiteCopilotForSites | string |  |
| powerPages\_AllowSearchSummaryCopilotForSites | powerPages\_AllowSearchSummaryCopilotForSites | string |  |
| powerPages\_AllowListSummaryCopilotForSites | powerPages\_AllowListSummaryCopilotForSites | string |  |
| powerPages\_AllowIntelligentFormsCopilotForSites | powerPages\_AllowIntelligentFormsCopilotForSites | string |  |
| powerPages\_AllowSummarizationAPICopilotForSites | powerPages\_AllowSummarizationAPICopilotForSites | string |  |
| powerPages\_AllowNonProdPublicSites | powerPages\_AllowNonProdPublicSites | string |  |
| powerPages\_AllowNonProdPublicSites\_Exemptions | powerPages\_AllowNonProdPublicSites\_Exemptions | string |  |
| powerPages\_AllowProDevCopilotsForEnvironment | powerPages\_AllowProDevCopilotsForEnvironment | string |  |
| powerApps\_ChartVisualization | powerApps\_ChartVisualization | boolean |  |
| powerApps\_FormPredictSmartPaste | powerApps\_FormPredictSmartPaste | boolean |  |
| powerApps\_FormPredictAutomatic | powerApps\_FormPredictAutomatic | boolean |  |
| powerApps\_CopilotChat | powerApps\_CopilotChat | boolean |  |
| powerApps\_NLSearch | powerApps\_NLSearch | boolean |  |
| powerApps\_EnableFormInsights | powerApps\_EnableFormInsights | boolean |  |
| powerApps\_AllowCodeApps | powerApps\_AllowCodeApps | boolean |  |
| copilotStudio\_ConnectedAgents | copilotStudio\_ConnectedAgents | boolean |  |
| copilotStudio\_CodeInterpreter | copilotStudio\_CodeInterpreter | boolean |  |
| copilotStudio\_ConversationAuditLoggingEnabled | copilotStudio\_ConversationAuditLoggingEnabled | boolean |  |
| d365CustomerService\_Copilot | d365CustomerService\_Copilot | boolean |  |
| d365CustomerService\_AIAgents | d365CustomerService\_AIAgents | boolean |  |
| copilotStudio\_ComputerUseAppAllowlist | copilotStudio\_ComputerUseAppAllowlist | string |  |
| copilotStudio\_ComputerUseWebAllowlist | copilotStudio\_ComputerUseWebAllowlist | string |  |
| copilotStudio\_ComputerUseSharedMachines | copilotStudio\_ComputerUseSharedMachines | boolean |  |
| copilotStudio\_ComputerUseCredentialsAllowed | copilotStudio\_ComputerUseCredentialsAllowed | boolean |  |

### EnvironmentPagedCollection

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| collection | collection | array of Environment |  |
| continuationToken | continuationToken | string |  |

### EnvironmentResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The value of id property on the environment object. |
| displayName | displayName | string | The display name of the environment. |
| tenantId | tenantId | string | The value of tenantId property on the environment object. |
| type | type | string | The type of environment. |
| geo | geo | string | The geographical region of the environment. |
| environmentGroupId | environmentGroupId | string | The ID of the environment group to which this environment belongs. |
| azureRegion | azureRegion | string | The Azure region of the environment. |
| createdDateTime | createdDateTime | date-time | The creation date and time of the environment. |
| deletedDateTime | deletedDateTime | date-time | The deletion date and time of the environment. |
| dataverseId | dataverseId | string | The value of dataverseId property on the environment object. |
| url | url | string | The URL of the environment. |
| version | version | string | The version of the environment. |
| domainName | domainName | string | The domain name of the environment. |
| state | state | string | The state of the environment. |
| adminMode | adminMode | string | The administrative mode of the environment. |
| backgroundOperationsState | backgroundOperationsState | string | The background operations state of the environment. |
| protectionLevel | protectionLevel | string | The protection level of the environment. |
| retentionPeriod | retentionDetails.retentionPeriod | string | The retention period of the environment. |
| availableFromDateTime | retentionDetails.availableFromDateTime | date-time | The available from date and time of the environment. |

### ErrorDetail

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string |  |
| message | message | string |  |
| target | target | string |  |
| value | value | string |  |

### ErrorDetails

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| errorName | errorName | string | Error name |
| errorCode | errorCode | integer | Error code from Dataverse |
| message | message | string | Error message |
| type | type | string | Error type |
| statusCode | statusCode | integer | Status code for error |
| source | source | string | Source of the error |

### ErrorInfo

Represents error information for an operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | The error Code. |
| fieldErrors | fieldErrors | object | The detailed error. |

### ErrorResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string |  |
| message | message | string |  |
| details | details | array of ErrorDetail |  |

### ExternalCurrencyType

Available currency type which can be allocated to environment.

Available currency type which can be allocated to environment.

    - string

### FinOpsAdminSettingsResponse

Finance and Operations Maintenance response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| maintenanceWindowDaysOfWeek | maintenanceWindowDaysOfWeek | array of FinOpsDayOfWeek | The preferred days of week for RunOne Updates. |
| maintenanceWindowCadence | maintenanceWindowCadence | FinOpsUpdateCadence | Cadence for major version application updates. |

### FinOpsDayOfWeek

Day of the week (aligned with .NET System.DayOfWeek enum).

Day of the week (aligned with .NET System.DayOfWeek enum).

    - string

### FinOpsUpdateCadence

Cadence for major version application updates.

Cadence for major version application updates.

    - string

### FlowAction

The flow action object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| workflowId | workflowId | uuid | The workflow ID. |
| ownerId | ownerId | uuid | The owner Dataverse ID. |
| parentProcessStageId | parentProcessStageId | uuid | The parent process stage ID. |
| connector | connector | string | The connector name. |
| isTrigger | isTrigger | boolean | Whether the action is a trigger. |
| operationId | operationId | string | The operation ID. |
| operationKind | operationKind | FlowActionKind | Indicates the kind of the operation used in the process stage. |
| operationType | operationType | FlowActionType | Indicates the type of the operation used in the process stage. |
| owningBusinessUnit | owningBusinessUnit | uuid | The owning business unit Dataverse ID. |
| parameterName | parameterName | string | The parameter name. |
| parameterValue | parameterValue | string | The parameter value. |
| processStageId | processStageId | uuid | The process stage ID. |
| stageName | stageName | string | The stage name. |

### FlowActionKind

Indicates the kind of the operation used in the process stage.

Indicates the kind of the operation used in the process stage.

    - string

### FlowActionType

Indicates the type of the operation used in the process stage.

Indicates the type of the operation used in the process stage.

    - string

### FlowRun

The flow run object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| flowRunId | flowRunId | uuid | The flow run ID. |
| parentRunId | parentRunId | string | The parent run ID. |
| name | name | string | The flow run name. |
| createdOn | createdOn | date-time | The date and time when the flow run was created. |
| modifiedOn | modifiedOn | date-time | The date and time when the flow run was last modified. |
| startTime | startTime | date-time | The start time of the flow run |
| endTime | endTime | date-time | The end time of the flow run. |
| status | status | string | The status of the flow run. |
| durationMs | durationMs | integer | Duration of the flow run in milliseconds. |
| ttlInSeconds | ttlInSeconds | integer | Time to live in seconds. |
| workflowId | workflowId | uuid | The workflow ID. |
| modernFlowType | modernFlowType | ModernFlowType | Indicates the modernflow type. |
| triggerType | triggerType | string | The trigger type. |
| runningUser | runningUser | uuid | The Dataverse ID of the user running the flow. |
| ownerId | ownerId | uuid | The owner Dataverse ID. |

### GetConnectorByIdResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string |  |
| id | id | string |  |
| type | type | string |  |
| displayName | properties.displayName | string |  |
| iconUri | properties.iconUri | uri |  |
| iconBrandColor | properties.iconBrandColor | string |  |
| apiEnvironment | properties.apiEnvironment | string |  |
| isCustomApi | properties.isCustomApi | boolean |  |
| blobUrisAreProxied | properties.blobUrisAreProxied | boolean |  |
| runtimeUrls | properties.runtimeUrls | array of uri |  |
| primaryRuntimeUrl | properties.primaryRuntimeUrl | uri |  |
| doNotUseApiHubNetRuntimeUrl | properties.doNotUseApiHubNetRuntimeUrl | uri |  |
| source | properties.metadata.source | string |  |
| brandColor | properties.metadata.brandColor | string |  |
| allowSharing | properties.metadata.allowSharing | boolean |  |
| useNewApimVersion | properties.metadata.useNewApimVersion | string |  |
| previous | properties.metadata.version.previous | string |  |
| current | properties.metadata.version.current | string |  |
| capabilities | properties.capabilities | array of string |  |
| interfaces | properties.interfaces | object |  |
| description | properties.description | string |  |
| createdTime | properties.createdTime | date-time |  |
| changedTime | properties.changedTime | date-time |  |
| releaseTag | properties.releaseTag | string |  |
| tier | properties.tier | string |  |
| publisher | properties.publisher | string |  |
| rateLimit | properties.rateLimit | integer |  |
| apiVersion | properties.apiVersion | string |  |

### GetEnvironmentManagementSettingResponse

Represents the response object for APIs in this service.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| objectResult | objectResult | array of EnvironmentManagementSetting | Gets or sets the fields for the entities being queried. |
| errors | errors | ErrorResponse |  |
| nextLink | nextLink | uri | Gets or sets the next link if there are more records to be returned |
| responseMessage | responseMessage | string | Gets or sets the error message. |

### GetTemporaryCurrencyEntitlementCountResponseModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| temporaryCurrencyEntitlementCount | temporaryCurrencyEntitlementCount | integer |  |
| temporaryCurrencyEntitlementsAllowedPerMonth | temporaryCurrencyEntitlementsAllowedPerMonth | integer |  |
| entitledQuantity | entitledQuantity | integer |  |

### Identity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| displayName | displayName | string |  |
| tenantId | tenantId | string |  |

### InstancePackage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | uuid | Instance package ID |
| packageId | packageId | uuid | Package ID |
| applicationId | applicationId | uuid | Application ID associated with the instance package |
| applicationName | applicationName | string | Application name associated with the instance package |
| applicationDescription | applicationDescription | string | Application description associated with the instance package |
| singlePageApplicationUrl | singlePageApplicationUrl | string | Single Page Application (SPA) URL |
| publisherName | publisherName | string | Publisher name for the application |
| publisherId | publisherId | uuid | Publisher ID |
| packageUniqueName | packageUniqueName | string | Package unique name. |
| packageVersion | packageVersion | string | Package version |
| localizedDescription | localizedDescription | string | Localized description of application |
| localizedName | localizedName | string | Localized name of application |
| learnMoreUrl | learnMoreUrl | string | Learn more url for the application |
| termsOfServiceBlobUris | termsOfServiceBlobUris | array of string | Terms of service for the application |
| applicationVisibility | applicationVisibility | ApplicationVisibility | Application visibility |
| lastOperation | lastOperation | InstancePackageOperation |  |
| customHandleUpgrade | customHandleUpgrade | boolean | Custom handle upgrade flag for the application |

### InstancePackageOperation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| state | state | InstancePackageState | State of the instance package |
| createdOn | createdOn | date-time | Date and time for creation of the instance package operation |
| modifiedOn | modifiedOn | date-time | Date and time for modification of the instance package operation |
| errorDetails | errorDetails | ErrorDetails |  |
| statusMessage | statusMessage | string | Status message |
| instancePackageId | instancePackageId | uuid | Instance package ID |
| operationId | operationId | uuid | Operation ID for the operation triggered on the instance package |

### InstancePackageOperationPollingResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| status | status | InstancePackageOperationStatus |  |
| createdDateTime | createdDateTime | date-time |  |
| lastActionDateTime | lastActionDateTime | date-time |  |
| error | error | ErrorDetails |  |
| statusMessage | statusMessage | string |  |
| operationId | operationId | uuid |  |

### InstancePackageOperationStatus

    - string

### InstancePackageState

State of the instance package

State of the instance package

    - string

### IpAddressType

The type of the IP address

The type of the IP address

    - string

### IsvContractResponseModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| name | name | string |  |
| status | status | BillingPolicyStatus | The desired ISV contract status. |
| geo | geo | string |  |
| consumer | consumer | ConsumerIdentityModel | The consumer identity for ISV contract. |
| conditions | conditions | BillingPolicyConditionsModel | The ISV Contract API filter conditions. |
| billingInstrument | billingInstrument | BillingInstrumentModel | The ISV billing instrument information. |
| powerAutomatePolicy | powerAutomatePolicy | PowerAutomatePolicyModel | The Power Platform requests policies. |
| createdOn | createdOn | date-time |  |
| createdBy | createdBy | Principal |  |
| lastModifiedOn | lastModifiedOn | date-time |  |
| lastModifiedBy | lastModifiedBy | Principal |  |

### IsvContractResponseModelResponseWithOdataContinuation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of IsvContractResponseModel |  |
| @odata.nextLink | @odata.nextLink | string |  |

### LegacyCapacityModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| totalCapacity | totalCapacity | double |  |
| totalConsumption | totalConsumption | double |  |
| capacityUnits | capacityUnits | CapacityUnits |  |

### LicenseDetailsModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| entitlementCode | entitlementCode | string |  |
| displayName | displayName | string |  |
| isTemporaryLicense | isTemporaryLicense | boolean |  |
| temporaryLicenseExpiryDate | temporaryLicenseExpiryDate | date-time |  |
| servicePlanId | servicePlanId | uuid |  |
| skuId | skuId | uuid |  |
| paid | paid | LicenseQuantity |  |
| trial | trial | LicenseQuantity |  |
| totalCapacity | totalCapacity | double |  |
| nextLifecycleDate | nextLifecycleDate | date-time |  |
| capabilityStatus | capabilityStatus | string |  |

### LicenseModel

    - string

### LicenseQuantity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| enabled | enabled | integer |  |
| warning | warning | integer |  |
| suspended | suspended | integer |  |

### ListConnectionsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Connection |  |

### ListConnectorsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of GetConnectorByIdResponse |  |

### ListPolicyResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of Policy |  |

### MgGovEnvironmentValues

Environment information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The ID of the environment. |
| type | type | string | The type of the environment. |
| name | name | string | The name of the environment. |

### MgGovFilterType

The type of environment filter.

The type of environment filter.

    - string

### MgGovODataResponse

OData response wrapper with continuation support.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of RuleSetDto | The array of Rule Sets. |
| @odata.nextLink | @odata.nextLink | string | The link to the next page of results. |

### MgGovPolicyEnvironmentFilter

Defines the environment filters.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | MgGovFilterType | The type of environment filter. |
| values | values | array of MgGovEnvironmentValues | The environment information. |

### MgGovResourceType

The type of resource.

The type of resource.

    - string

### MgGovRule

A rule definition.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The rule ID. |
| value | value | string | The rule value. |

### MgGovRuleSetType

The type of the Rule Set.

The type of the Rule Set.

    - string

### ModernFlowType

Indicates the modernflow type.

Indicates the modernflow type.

    - string

### ODataListWebsitesDto

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| @odata.metadata | @odata.metadata | string |  |
| value | value | array of WebsiteDto |  |
| @odata.nextLink | @odata.nextLink | string |  |

### OperationExecutionResult

Represents the result of an operation execution.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The name of the operation. |
| status | status | OperationStatus | The status of operation. |
| operationId | operationId | string | The ID of the operation. |
| startTime | startTime | date-time | The start time of the operation. |
| endTime | endTime | date-time | The end time of the operation. |
| updatedEnvironment | updatedEnvironment | Environment | Power platform Environment |
| requestedBy | requestedBy | UserIdentity | Represents the identity of a user. |
| errorDetail | errorDetail | ErrorInfo | Represents error information for an operation. |
| stageStatuses | stageStatuses | array of StageStatus | The list of State statuses associated with the operation. |

### OperationExecutionResultPagedCollection

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| collection | collection | array of OperationExecutionResult |  |
| continuationToken | continuationToken | string |  |

### OperationResponse

Represents the response object for APIs in this service.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| objectResult | objectResult |  | Gets or sets the response's object |
| errors | errors | ErrorResponse |  |
| nextLink | nextLink | uri | Gets or sets the next link if there are more records to be returned |
| debugErrors | debugErrors | string | Gets or sets debug errors, that are only shown for private/local testing |
| responseMessage | responseMessage | string | Gets or sets the error message. |

### OperationStatus

The status of operation.

The status of operation.

    - string

### OverflowCapacityModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| capacityType | capacityType | CapacityType |  |
| value | value | double |  |

### PayAsYouGoState

    - string

### Policy

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The unique identifier of the policy assignment. |
| tenantId | tenantId | string | The unique identifier of the tenant. |
| name | name | string | The name of the policy. |
| lastModified | lastModified | date-time | The date and time when the policy was last modified. |
| ruleSets | ruleSets | array of RuleSet |  |
| ruleSetCount | ruleSetCount | integer | The number of rule sets associated with this policy. |

### PortalScanIssues

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| issue | issue | string | The specific issue identified |
| category | category | string | The category of the issue |
| result | result | string | The result of the issue check |
| description | description | string | Detailed description of the issue |
| learnMoreUrl | learnMoreUrl | uri | URL for more information about the issue |

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
| displayName | properties.owner.displayName | string | PowerApp owner principal display name. |
| email | properties.owner.email | string | PowerApp owner principal email. |
| type | properties.owner.type | string | PowerApp owner principal type. |
| tenantId | properties.owner.tenantId | string | PowerApp owner principal tenant ID. |
| userPrincipalName | properties.owner.userPrincipalName | string | PowerApp owner principal user principal name. |
| id | properties.createdBy.id | string | PowerApp creator principal object ID. |
| displayName | properties.createdBy.displayName | string | PowerApp creator principal display name. |
| email | properties.createdBy.email | string | PowerApp creator principal email. |
| type | properties.createdBy.type | string | PowerApp creator principal type. |
| tenantId | properties.createdBy.tenantId | string | PowerApp creator principal tenant ID. |
| userPrincipalName | properties.createdBy.userPrincipalName | string | PowerApp creator principal user principal name. |
| id | properties.lastModifiedBy.id | string | PowerApp last modified by principal object ID. |
| displayName | properties.lastModifiedBy.displayName | string | PowerApp last modified by principal display name. |
| email | properties.lastModifiedBy.email | string | PowerApp last modified by principal email. |
| type | properties.lastModifiedBy.type | string | PowerApp last modified by principal type. |
| tenantId | properties.lastModifiedBy.tenantId | string | PowerApp last modified by principal tenant ID. |
| userPrincipalName | properties.lastModifiedBy.userPrincipalName | string | PowerApp last modified by principal userPrincipalName. |
| backgroundColor | properties.backgroundColor | string | PowerApp background color. |
| backgroundImageUri | properties.backgroundImageUri | string | PowerApp background image URI. |
| displayName | properties.displayName | string | PowerApp display name. |
| description | properties.description | string | PowerApp description. |
| value | properties.appUris.documentUri.value | string | PowerApp appUri document URI value. |
| readonlyValue | properties.appUris.documentUri.readonlyValue | string | PowerApp appUri document URI read only value. |
| imageUris | properties.appUris.imageUris | array of string | PowerApp appUri image URI array. |
| createdTime | properties.createdTime | date-time | PowerApp property created time. |
| lastModifiedTime | properties.lastModifiedTime | date-time | PowerApp property last modified time. |
| sharedGroupsCount | properties.sharedGroupsCount | integer | PowerApp property shared groups count. |
| sharedUsersCount | properties.sharedUsersCount | integer | PowerApp property shared users count. |
| appOpenProtocolUri | properties.appOpenProtocolUri | string | PowerApp property app open protocol URI. |
| appOpenUri | properties.appOpenUri | string | PowerApp property app open URI. |
| favorite | properties.userAppMetadata.favorite | string | PowerApp property user app metadata favorite. |
| includeInAppsList | properties.userAppMetadata.includeInAppsList | boolean | PowerApp property user app metadata include in apps list. |
| isFeaturedApp | properties.isFeaturedApp | boolean | PowerApp property is featured app. |
| bypassConsent | properties.bypassConsent | boolean | PowerApp property bypass consent. |
| isHeroApp | properties.isHeroApp | boolean | PowerApp property indicating hero application. |
| id | properties.environment.id | string | PowerApp environment ID. |
| name | properties.environment.name | string | PowerApp environment name. |
| connectionReferences | properties.connectionReferences | ConnectionReferences |  |
| primaryDeviceWidth | tags.primaryDeviceWidth | string | PowerApp tag primary device width. |
| primaryDeviceHeight | tags.primaryDeviceHeight | string | PowerApp tag primary device height. |
| sienaVersion | tags.sienaVersion | string | PowerApp tag siena version. |
| deviceCapabilities | tags.deviceCapabilities | string | PowerApp tag device capabilities. |
| supportsPortrait | tags.supportsPortrait | string | PowerApp tag supports portrait. |
| supportsLandscape | tags.supportsLandscape | string | PowerApp tag supports landscape. |
| primaryFormFactor | tags.primaryFormFactor | string | PowerApp tag primary form factor. |
| publisherVersion | tags.publisherVersion | string | PowerApp tag publisher version. |
| minimumRequiredApiVersion | tags.minimumRequiredApiVersion | date-time | PowerApp tag minimum required API version. |
| type | type | string | PowerApp type field. |

### PowerAutomatePolicyModel

The Power Platform requests policies.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| cloudFlowRunsPayAsYouGoState | cloudFlowRunsPayAsYouGoState | PayAsYouGoState |  |
| desktopFlowUnattendedRunsPayAsYouGoState | desktopFlowUnattendedRunsPayAsYouGoState | PayAsYouGoState |  |
| desktopFlowAttendedRunsPayAsYouGoState | desktopFlowAttendedRunsPayAsYouGoState | PayAsYouGoState |  |

### PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceFlowContextRecord

Paginated result container for flow context summary records.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| currentPage | currentPage | integer | The current page number. |
| records | records | array of UserPerFlowCapacitySourceFlowContextRecord | Collection of flow context summary records. |

### PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceRecord

Paginated result container for user per flow capacity source records.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| currentPage | currentPage | integer | The current page number. |
| records | records | array of UserPerFlowCapacitySourceRecord | Collection of user per flow capacity source records. |

### PowerPlatformRequestSnapshotResultWithoutPagesUserPerFlowCapacitySourceUserContextRecord

Paginated result container for user context summary records.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| currentPage | currentPage | integer | The current page number. |
| records | records | array of UserPerFlowCapacitySourceUserContextRecord | Collection of user context summary records. |

### Principal

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| displayName | displayName | string |  |
| email | email | string |  |
| type | type | string |  |
| tenantId | tenantId | string |  |
| userPrincipalName | userPrincipalName | string |  |

### ResourceArrayPowerApp

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of PowerApp |  |
| Next Link | nextLink | string | The URL to get the next page of the apps list. Contains the skip token. |

### ResourceItem

ARG row with Power Platform-specific fields. Arbitrary properties may exist under `properties`.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| name | name | string |  |
| type | type | string |  |
| tenantId | tenantId | string |  |
| kind | kind | string |  |
| location | location | string |  |
| resourceGroup | resourceGroup | string |  |
| subscriptionId | subscriptionId | string |  |
| managedBy | managedBy | string |  |
| sku | sku |  |  |
| plan | plan |  |  |
| properties | properties | object | Free-form ARG properties bag |
| tags | tags |  |  |
| identity | identity |  |  |
| zones | zones |  |  |
| extendedLocation | extendedLocation |  |  |
| environmentId | environmentId | string |  |
| environmentId1 | environmentId1 | string |  |
| environmentName | environmentName | string |  |
| environmentRegion | environmentRegion | string |  |
| environmentType | environmentType | string |  |
| isManagedEnvironment | isManagedEnvironment | boolean |  |

### ResourceQueryResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| totalRecords | totalRecords | integer | Total rows matching the query |
| count | count | integer | Rows in this page |
| resultTruncated | resultTruncated | integer | 0 = truncated, 1 = not truncated |
| skipToken | skipToken | string | Continuation token for next page |
| data | data | array of ResourceItem |  |

### RoleAssignmentResponse

The role assignments.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| roleAssignmentId | value.roleAssignmentId | string | Role assignment Id |
| principalObjectId | value.principalObjectId | string | The Id of the assigned principal |
| roleDefinitionId | value.roleDefinitionId | string | The Id of the role definition |
| scope | value.scope | string | The assignment scope |
| principalType | value.principalType | string | The type of the principal |
| createdByPrincipalType | value.createdByPrincipalType | string | The type of the creator principal |
| createdByPrincipalObjectId | value.createdByPrincipalObjectId | string | The Id of the creator principal |
| createdOn | value.createdOn | date-time | The datetime of when the assignment was created |

### RoleDefinitionResponse

The available role definitions for assignment.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of object |  |
| roleDefinitionId | value.roleDefinitionId | string | Role definition Id |
| roleDefinitionName | value.roleDefinitionName | string | Role definition name |
| permissions | value.permissions | array of string |  |

### Rule

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| RuleId | RuleId | string | Unique identifier of the rule |
| RuleName | RuleName | string | Name of the rule |
| RuleStatus | RuleStatus | string | Status of the rule |
| AlertsCount | AlertsCount | integer | Number of alerts generated by the rule |
| Alerts | Alerts | array of Alert | List of alerts generated by the rule |

### RuleAssignment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ruleSetCount | ruleSetCount | integer | The count of rule sets assigned. |
| policyId | policyId | string | The unique identifier of the policy. |
| tenantId | tenantId | string | The unique identifier of the tenant. |
| resourceId | resourceId | string | The unique identifier of the resource. |
| resourceType | resourceType | string | The type of resource assigned to the rule. |

### RuleAssignmentsResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of RuleAssignment |  |

### RuleSet

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The unique identifier of the rule set. |
| version | version | string | The version of the rule set. |
| inputs | inputs | object | The inputs for the rule set, which may vary based on the rule. |

### RuleSetDto

Rule Set data transfer object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The ID of the Rule Set. |
| lastModified | lastModified | date-time | The last modified timestamp. |
| environmentFilter | environmentFilter | MgGovPolicyEnvironmentFilter | Defines the environment filters. |
| parameters | parameters | array of RuleSetParameters | The Rule Set parameters. |

### RuleSetParameters

Parameters for a Rule Set.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| type | type | MgGovRuleSetType | The type of the Rule Set. |
| resourceType | resourceType | MgGovResourceType | The type of resource. |
| value | value | array of MgGovRule | The rule values. |

### SiteSecurityResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| TotalRuleCount | TotalRuleCount | integer | Total number of rules evaluated |
| FailedRuleCount | FailedRuleCount | integer | Number of rules that failed |
| TotalAlertCount | TotalAlertCount | integer | Total number of alerts generated |
| UserName | UserName | string | Name of the user who initiated the scan |
| StartTime | StartTime | date-time | Start time of the scan |
| EndTime | EndTime | date-time | End time of the scan |
| Rules | Rules | array of Rule | List of rules evaluated during the scan |

### SiteSecurityScore

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| totalRules | totalRules | integer | Total number of rules |
| succeededRules | succeededRules | integer | Number of rules that succeeded |

### StageStatus

The stage status of an operation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | The name of stage. |
| status | status | string | The status of stage. |
| startTime | startTime | date-time | The start time of stage. |
| endTime | endTime | date-time | The end time of stage. |
| errorDetail | errorDetail | ErrorInfo | Represents error information for an operation. |

### StorageWarningThresholds

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| storageCategory | storageCategory | string |  |
| storageEntity | storageEntity | string |  |
| thresholdInMB | thresholdInMB | integer |  |
| warningMessageConstKey | warningMessageConstKey | string |  |

### StorageWarningThresholdsDocument

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| storageCategory | storageCategory | string |  |
| storageEntity | storageEntity | string |  |
| thresholds | thresholds | array of StorageWarningThresholds |  |
| isActive | isActive | boolean |  |

### TemporaryLicenseInfo

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| hasTemporaryLicense | hasTemporaryLicense | boolean |  |
| temporaryLicenseExpiryDate | temporaryLicenseExpiryDate | date-time |  |

### TenantApplicationPackage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| uniqueName | uniqueName | string | Unique name of the tenant application package |
| localizedDescription | localizedDescription | string | Localized description of the tenant application package |
| localizedName | localizedName | string | Localized name |
| applicationId | applicationId | uuid | Application ID |
| applicationName | applicationName | string | Application name |
| applicationDescription | applicationDescription | string | Application description |
| publisherName | publisherName | string | Publisher name |
| publisherId | publisherId | uuid | Publisher ID |
| learnMoreUrl | learnMoreUrl | string | Learn more URL |
| catalogVisibility | catalogVisibility | CatalogVisibility | Catalog visibility for the application |
| applicationVisibility | applicationVisibility | ApplicationVisibility | Application visibility |
| lastError | lastError | ErrorDetails |  |

### TenantApplicationPackageContinuationResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of TenantApplicationPackage |  |
| @odata.nextLink | @odata.nextLink | string |  |

### TenantCapacityAndConsumptionModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| capacityType | capacityType | CapacityType |  |
| capacityUnits | capacityUnits | CapacityUnits |  |
| totalCapacity | totalCapacity | double |  |
| maxCapacity | maxCapacity | double |  |
| consumption | consumption | ConsumptionModel |  |
| status | status | CapacityAvailabilityStatus |  |
| overflowCapacity | overflowCapacity | array of OverflowCapacityModel |  |
| capacityEntitlements | capacityEntitlements | array of TenantCapacityEntitlementModel |  |

### TenantCapacityDetailsModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid |  |
| licenseModelType | licenseModelType | LicenseModel |  |
| capacitySummary | capacitySummary | CapacitySummary |  |
| tenantCapacities | tenantCapacities | array of TenantCapacityAndConsumptionModel |  |
| legacyModelCapacity | legacyModelCapacity | LegacyCapacityModel |  |
| temporaryLicenseInfo | temporaryLicenseInfo | TemporaryLicenseInfo |  |

### TenantCapacityEntitlementModel

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| capacityType | capacityType | CapacityType |  |
| capacitySubType | capacitySubType | CapacityEntitlementType |  |
| totalCapacity | totalCapacity | double |  |
| maxNextLifecycleDate | maxNextLifecycleDate | date-time |  |
| licenses | licenses | array of LicenseDetailsModel |  |

### UserIdentity

Represents the identity of a user.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| userId | userId | string | The ID of the user. |
| displayName | displayName | string | The display name of the user. |
| tenantId | tenantId | string | The tenant ID of the user. |

### UserPerFlowCapacitySourceFlowContextRecord

Flow context summary for per flow capacity source.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The tenant identifier. |
| environmentId | environmentId | uuid | The environment identifier. |
| userId | userId | string | The user identifier. |
| flowContext | flowContext | string | The context in which the flow was executed. |
| flowLicenseCategorization | flowLicenseCategorization | string | The license categorization of the flow. |
| consumptionDate | consumptionDate | date-time | The date of consumption. |
| totalConsumption | totalConsumption | integer | The total consumption units for the flow. |
| flowId | flowId | string | The flow identifier. |

### UserPerFlowCapacitySourceRecord

Detailed capacity source record for a specific flow execution.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The tenant identifier. |
| environmentId | environmentId | uuid | The environment identifier. |
| userId | userId | string | The user identifier. |
| flowContext | flowContext | string | The context in which the flow was executed. |
| flowLicenseCategorization | flowLicenseCategorization | string | The license categorization of the flow. |
| resourceId | resourceId | string | The resource identifier. |
| consumptionUnits | consumptionUnits | integer | The number of consumption units used. |
| consumptionDate | consumptionDate | date-time | The date when the consumption occurred. |

### UserPerFlowCapacitySourceTenantContextSummaryRecord

Tenant-level context summary for per flow capacity source.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The tenant identifier. |
| flowContext | flowContext | string | The context in which flows were executed. |
| countOfUsersInCompliance | countOfUsersInCompliance | integer | Number of users who are within their capacity limits. |
| countOfUsersExceedingCapacity | countOfUsersExceedingCapacity | integer | Number of users who have exceeded their capacity limits. |
| countOfUsersWithoutALicense | countOfUsersWithoutALicense | integer | Number of users without any license. |
| countOfUsersWithoutPremiumLicenseUsingPremiumFeatures | countOfUsersWithoutPremiumLicenseUsingPremiumFeatures | integer | Number of users using premium features without a premium license. |

### UserPerFlowCapacitySourceUserContextRecord

User context summary for per flow capacity source.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| tenantId | tenantId | uuid | The tenant identifier. |
| userId | userId | string | The user identifier. |
| flowContext | flowContext | string | The context in which flows were executed. |
| flowLicenseCategorization | flowLicenseCategorization | string | The license categorization of the flows. |
| consumptionDate | consumptionDate | date-time | The date of consumption. |
| totalConsumption | totalConsumption | integer | The total consumption units for the user. |
| totalCapacity | totalCapacity | integer | The total capacity available for the user. |
| totalFlows | totalFlows | integer | The total number of flows executed by the user. |

### WafRuleAction

Action to take for the rule

Action to take for the rule

    - string

### WafRuleType

WAF rule type

WAF rule type

    - string

### WebApplicationFirewallConfiguration

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ManagedRules | ManagedRules | array of object |  |
| id | ManagedRules.id | string | Unique identifier of the managed rule set |
| name | ManagedRules.name | string | Name of the managed rule set |
| provisioningState | ManagedRules.properties.provisioningState | string | Provisioning state of the managed rule set |
| ruleSetId | ManagedRules.properties.ruleSetId | string | Unique identifier of the rule set |
| ruleSetType | ManagedRules.properties.ruleSetType | string | Type of the rule set |
| ruleSetVersion | ManagedRules.properties.ruleSetVersion | string | Version of the rule set |
| ruleGroups | ManagedRules.properties.ruleGroups | array of object |  |
| ruleGroupName | ManagedRules.properties.ruleGroups.ruleGroupName | string | Name of the rule group |
| description | ManagedRules.properties.ruleGroups.description | string | Description of the rule group |
| rules | ManagedRules.properties.ruleGroups.rules | array of object |  |
| ruleId | ManagedRules.properties.ruleGroups.rules.ruleId | string | Unique identifier of the rule |
| defaultState | ManagedRules.properties.ruleGroups.rules.defaultState | string | Default state of the rule |
| defaultAction | ManagedRules.properties.ruleGroups.rules.defaultAction | WafRuleAction | Action to take for the rule |
| description | ManagedRules.properties.ruleGroups.rules.description | string | Description of the rule |
| CustomRules | CustomRules | array of CustomRule |  |

### WebApplicationFirewallStatus

Web application firewall status

Web application firewall status

    - string

### WebsiteDto

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Website unique identifier (ID) |
| name | name | string | Website name |
| createdOn | createdOn | string | Website creation time in the ISO 8601 UTC format |
| templateName | templateName | string | Website template name |
| websiteUrl | websiteUrl | string | Website URL |
| tenantId | tenantId | string | Tenant unique identifier (ID) of the website |
| dataverseInstanceUrl | dataverseInstanceUrl | string | Organization URL of the website |
| environmentName | environmentName | string | Environment name of the website |
| environmentId | environmentId | string | Environment unique identifier (ID) of the website |
| dataverseOrganizationId | dataverseOrganizationId | string | Organization unique identifier (ID) of the website |
| selectedBaseLanguage | selectedBaseLanguage | integer | Language ID - https://go.microsoft.com/fwlink/?linkid=2208135 |
| customHostNames | customHostNames | array of string | Custom hostnames added for the website |
| websiteRecordId | websiteRecordId | string | Dataverse record unique identifier (ID) of the website |
| subdomain | subdomain | string | Subdomain of website |
| packageInstallStatus | packageInstallStatus | string | Package installation status of the website |
| type | type | string | Application type of the website |
| trialExpiringInDays | trialExpiringInDays | integer | Time (in days) to expiration of the website |
| suspendedWebsiteDeletingInDays | suspendedWebsiteDeletingInDays | integer | Time (in days) to website deletion, if suspended |
| packageVersion | packageVersion | string | Package version of the website |
| isEarlyUpgradeEnabled | isEarlyUpgradeEnabled | boolean | Website eligibility for early upgrade |
| isCustomErrorEnabled | isCustomErrorEnabled | boolean | Custom error enablement for Website |
| applicationUserAadAppId | applicationUserAadAppId | string | Entra ID (formerly Azure Active Directory) object unique identifier (ID) |
| ownerId | ownerId | string | User unique identifier (ID) of the website owner |
| status | status | string | Website status |
| siteVisibility | siteVisibility | string | Website visibility status |

### WorkflowStateCode

Indicates the workflow state.

Indicates the workflow state.

    - string

### WorkflowStatusCode

Indicates the workflow status.

Indicates the workflow status.

    - string

### MCPQueryResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| jsonrpc | jsonrpc | string |  |
| id | id | string |  |
| method | method | string |  |
| params | params | object |  |
| result | result | object |  |
| error | error | object |  |