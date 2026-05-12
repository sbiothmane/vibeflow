---
layout: Reference
title: Azure Automation - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureautomation/
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
document_id: daeb05b6-45da-9fb9-936b-35212c587ef5
document_version_independent_id: 39ffc4aa-d490-6346-33b9-df690d781c1a
updated_at: 2026-02-06T01:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/AzureAutomation/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/300019c266037195c5f7c9642a2988b22ece20b6/docs/AzureAutomation/index.yml
git_commit_id: 300019c266037195c5f7c9642a2988b22ece20b6
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureautomation/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/AzureAutomation/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/43093068-2dda-408b-b3fe-dfd705c84f78
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/e453d60d-ba7e-43bc-8028-ec38e6b62512
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
platformId: e7ef3470-31c4-c9be-6e9c-94601024377e
---

# Azure Automation

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1793/1.0.1793.4565/azureautomation/icon.png)
Azure Automation provides tools to manage your cloud and on-premises infrastructure seamlessly.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Azure Automation |
| URL | [https://learn.microsoft.com/en-us/connectors/azureautomation/](/en-us/connectors/azureautomation/) |
| Email | idcknowledgeeco@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/automation/ |
| Privacy policy | https://privacy.microsoft.com/ |
| Categories | Content and Files |

## Known issues and limitations

The connector is based on multi-tenant application registration. The application cannot tell what tenant the user is from until the user signs into it. And thus, connector supports **subscriptions** only under users' default tenant ('common').

### Known limitations with Microsoft Entra ID authentication

Due to current authentication pipeline limitations, Microsoft Entra ID guest users aren't supported for Microsoft Entra ID connections to Azure Automation. To resolve this problem, use Service principal authentication instead.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Bring your own application | Log in using your own Microsoft Entra ID app. | Integration service environments (ISE) only | Not shareable |
| OAuth default | Login using default Microsoft Entra ID app. | All regions | Not shareable |
| Service principal authentication | Use your own Microsoft Entra ID app for service principal authentication. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Bring your own application

Auth ID: oauthBYOA

Applicable: Integration service environments (ISE) only

Log in using your own Microsoft Entra ID app.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant | string | Tenant ID of your Microsoft Entra ID application. | True |
| Client ID | string | Client (or Application) ID of your Microsoft Entra ID application. | True |
| Client Secret | securestring | Client secret of your Microsoft Entra ID application. | True |

### OAuth default

Auth ID: oauthDefault

Applicable: All regions

Login using default Microsoft Entra ID app.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

### Service principal authentication

Auth ID: oauthServicePrincipal

Applicable: All regions

Use your own Microsoft Entra ID app for service principal authentication.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

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
| API calls per connection | 1200 | 60 seconds |

## Actions

| Create job | Create Job to run on hybrid worker |
| --- | --- |
| Get job output | Get outputs of an Azure Automation job. |
| Get status of job | Get Status of a Job |

### Create job

- Operation ID:
    - CreateJob

Create Job to run on hybrid worker

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | The name of the Azure Resource Group. |
| Automation Account | automationAccount | True | string | The name of the Azure Automation Account. |
| Runbook Name | runbookName |  | string | Name of the runbook to run. |
| body | body | True | dynamic |  |
| Wait for Job | wait |  | boolean | Wait for the job to finish before completing the action. |

#### Returns

- Body
    - CreateJobResponse

### Get job output

- Operation ID:
    - GetJobOutput

Get outputs of an Azure Automation job.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | The name of the Azure Resource Group. |
| Automation Account | automationAccount | True | string | The name of the Azure Automation Account. |
| Job ID | jobId | True | string | GUID for the ID of the run. |

#### Returns

Runbook content from the job

- Content
    - binary

### Get status of job

- Operation ID:
    - GetStatusOfJob

Get Status of a Job

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Subscription | subscriptionId | True | string | The unique identifier for the Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. |
| Resource Group | resourceGroupName | True | string | The name of the Azure Resource Group. |
| Automation Account | automationAccount | True | string | The name of the Azure Automation Account. |
| Job ID | jobId | True | string | GUID for the ID of the run. |

#### Returns

- Body
    - CreateJobResponse

## Definitions

### CreateJobResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Resource ID | id | string | Resource ID of the Job |
| Job ID | properties.jobId | string | GUID for the Job ID. |
| Provisioning State | properties.provisioningState | string | Provisioning state for the job. |
| Creation Time | properties.creationTime | date-time | Creation time for the job. |
| End Time | properties.endTime | date-time | Time the job completed. |
| Exception | properties.exception | string | Exception information |
| Start Time | properties.startTime | date-time | Time the job started. |
| Status | properties.status | string | Status of the job. |
| Status Details | properties.statusDetails | string | Details on the status of the job. |

### binary

This is the basic data type 'binary'.