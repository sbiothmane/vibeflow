---
layout: Reference
title: Azure Key Vault - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/keyvault/
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
document_id: 69488baa-bdb4-59e0-6c80-a62edf60e594
document_version_independent_id: 86b47cc1-4736-bf4b-654e-036a7104b242
updated_at: 2025-07-02T01:01:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/keyvault/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/70b4ce8e0e173553e34b919ec1525f9f4460f1b2/docs/keyvault/index.yml
git_commit_id: 70b4ce8e0e173553e34b919ec1525f9f4460f1b2
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: keyvault/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/keyvault/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/f488294d-f483-456e-94e3-755f933b811b
- https://authoring-docs-microsoft.poolparty.biz/devrel/68ec7f3a-2bc6-459f-b959-19beb729907d
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/02662057-0b9b-40f4-a3c7-537125b6d283
- https://authoring-docs-microsoft.poolparty.biz/devrel/90370425-aca4-4a39-9533-d52e5e002a5d
platformId: 647e7761-4a8a-f4fb-6a9d-4f4e119e57fa
---

# Azure Key Vault

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1751/1.0.1751.4207/keyvault/icon.png)
Azure Key Vault is a service to securely store and access secrets.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/key-vault/ |

## Known issues and limitations

1. The actions to get secrets and to get keys return maximum 25 items.

### Known limitations with Microsoft Entra ID authentication

Due to current authentication pipeline limitations, Microsoft Entra ID guest users aren't supported for Microsoft Entra ID connections to Azure Key Vault. To resolve this problem, use Service principal authentication instead.

Important

**Microsoft Entra ID Integrated (Azure Commercial)** connections are disabled in **US Government (GCC)** environments by default. To enable these types of connections, the **Connect to Azure Commercial** setting must be enabled in the Power Platform Admin center by a tenant administrator.

Turning on this setting allows connections to resources in Azure Commercial that operate and send data outside the Power Platform US Government compliance boundary. This is specifically used to allow access to commercial resources from GCC cloud versions of Power Platform Connectors.

**Microsoft Entra ID Integrated (Azure Commercial)** is the **only** authentication type that works from **US Government (GCC)** environments to Azure Commercial resources.

Azure Commercial Authentication disabled by default: ![Disabled by default](assets/disablegsscommercialaccess-disabled.png)

The **Connect to Azure Commercial** setting in the Power Platform Admin center: ![Admin view](assets/disablegsscommercialaccess-admin-view.png)

![Setting](assets/disablegsscommercialaccess-setting.png)

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Bring your own application | Sign in with your own Microsoft Entra ID registerted application. | Integration service environments (ISE) only | Not shareable |
| Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Default Microsoft Entra ID application for OAuth | Sign in with the default Microsoft Entra ID application. | All regions | Not shareable |
| Microsoft Entra ID Integrated (Azure Commercial) | Use Microsoft Entra ID to access your Azure Blob Storage in Azure Commercial. | US Government (GCC) only | Not shareable |
| Service principal authentication | Use your Microsoft Entra ID application for service principal authentication. | All regions | Not shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Bring your own application

Auth ID: oauthBYOA

Applicable: Integration service environments (ISE) only

Sign in with your own Microsoft Entra ID registerted application.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Vault name | string | The name for the key vault. | True |
| Tenant ID | string | The tenant ID for your Microsoft Entra ID application. | True |
| Client ID | string | The client or application ID for your Microsoft Entra ID application. | True |
| Client secret | securestring | The client secret for your Microsoft Entra ID application. | True |

### Client Certificate Auth

Auth ID: CertOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Vault name | string | The name for the key vault. | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application |  |
| Tenant | string |  | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |

### Default Microsoft Entra ID application for OAuth

Auth ID: oauthDefault

Applicable: All regions

Sign in with the default Microsoft Entra ID application.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Key vault name | string | Name for the key vault. | True |

### Microsoft Entra ID Integrated (Azure Commercial)

Auth ID: oauthCom

Applicable: US Government (GCC) only

Use Microsoft Entra ID to access your Azure Blob Storage in Azure Commercial.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Tenant ID | string | The tenant ID for your Microsoft Entra ID application. |  |
| Key vault name | string | Name for the key vault. | True |

### Service principal authentication

Auth ID: oauthServicePrincipal

Applicable: All regions

Use your Microsoft Entra ID application for service principal authentication.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Client ID | string |  | True |
| Client secret | securestring |  | True |
| Tenant ID | string |  | True |
| Key vault name | string |  | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Key Vault name | string | The name for the key vault. | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 2000 | 60 seconds |

## Actions

| Decrypt data with key | Decrypt data using the latest version of a key. Output of this operation is typically classified as secret and can be visible in the run history. |
| --- | --- |
| Decrypt data with key version | Decrypt data using a specific version of a key. Output of this operation is typically classified as secret and can be visible in the run history. |
| Encrypt data with key | Encrypt data using the latest version of a key. |
| Encrypt data with key version | Encrypt data using a specific version of a key. |
| Get key metadata | Gets metadata of a key. |
| Get key version metadata | Gets metadata of a version of a key. |
| Get secret | Gets a secret. Output of this operation is typically classified as secret and can be visible in the run history. |
| Get secret metadata | Gets metadata of a secret. |
| Get secret version | Gets a version of a secret. Output of this operation is typically classified as secret and can be visible in the run history. |
| Get secret version metadata | Gets metadata of a version of a secret. |
| List key versions | List versions of a key. |
| List keys | List keys. |
| List secret versions | List versions of a secret. |
| List secrets | List secrets. |

### Decrypt data with key

- Operation ID:
    - DecryptData

Decrypt data using the latest version of a key. Output of this operation is typically classified as secret and can be visible in the run history.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |
| Algorithm | algorithm | True | string | Algorithm to use for decrypting the data |
| Encrypted data | encryptedData | True | string | Data to decrypt |

#### Returns

Result of decryption operation

- Body
    - KeyDecryptOutput

### Decrypt data with key version

- Operation ID:
    - DecryptDataWithVersion

Decrypt data using a specific version of a key. Output of this operation is typically classified as secret and can be visible in the run history.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |
| Version of the key | keyVersion | True | string | Version of the key. |
| Algorithm | algorithm | True | string | Algorithm to use for decrypting the data |
| Encrypted data | encryptedData | True | string | Data to decrypt |

#### Returns

Result of decryption operation

- Body
    - KeyDecryptOutput

### Encrypt data with key

- Operation ID:
    - EncryptData

Encrypt data using the latest version of a key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |
| Algorithm | algorithm | True | string | Algorithm to use for encrypting the data |
| Raw data | rawData | True | string | Data to encrypt |

#### Returns

Result of encryption operation

- Body
    - KeyEncryptOutput

### Encrypt data with key version

- Operation ID:
    - EncryptDataWithVersion

Encrypt data using a specific version of a key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |
| Version of the key | keyVersion | True | string | Version of the key. |
| Algorithm | algorithm | True | string | Algorithm to use for encrypting the data |
| Raw data | rawData | True | string | Data to encrypt |

#### Returns

Result of encryption operation

- Body
    - KeyEncryptOutput

### Get key metadata

- Operation ID:
    - GetKeyMetadata

Gets metadata of a key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |

#### Returns

Metadata of a key

- Body
    - KeyMetadata

### Get key version metadata

- Operation ID:
    - GetKeyVersionMetadata

Gets metadata of a version of a key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |
| Version of the key | keyVersion | True | string | Version of the key. |

#### Returns

Metadata of a key

- Body
    - KeyMetadata

### Get secret

- Operation ID:
    - GetSecret

Gets a secret. Output of this operation is typically classified as secret and can be visible in the run history.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the secret | secretName | True | string | Name of the secret. |

#### Returns

The secret

- Body
    - Secret

### Get secret metadata

- Operation ID:
    - GetSecretMetadata

Gets metadata of a secret.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the secret | secretName | True | string | Name of the secret. |

#### Returns

Metadata of a secret

- Body
    - SecretMetadata

### Get secret version

- Operation ID:
    - GetSecretVersion

Gets a version of a secret. Output of this operation is typically classified as secret and can be visible in the run history.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the secret | secretName | True | string | Name of the secret. |
| Version of the secret | secretVersion | True | string | Version of the secret. |

#### Returns

The secret

- Body
    - Secret

### Get secret version metadata

- Operation ID:
    - GetSecretVersionMetadata

Gets metadata of a version of a secret.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the secret | secretName | True | string | Name of the secret. |
| Version of the secret | secretVersion | True | string | Version of the secret. |

#### Returns

Metadata of a secret

- Body
    - SecretMetadata

### List key versions

- Operation ID:
    - ListKeyVersions

List versions of a key.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the key | keyName | True | string | Name of the key. |

#### Returns

Collection of keys

- Body
    - KeyMetadataCollection

### List keys

- Operation ID:
    - ListKeys

List keys.

#### Returns

Collection of keys

- Body
    - KeyMetadataCollection

### List secret versions

- Operation ID:
    - ListSecretVersions

List versions of a secret.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Name of the secret | secretName | True | string | Name of the secret. |

#### Returns

Collection of secrets

- Body
    - SecretMetadataCollection

### List secrets

- Operation ID:
    - ListSecrets

List secrets.

#### Returns

Collection of secrets

- Body
    - SecretMetadataCollection

## Definitions

### KeyMetadataCollection

Collection of keys

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of KeyMetadata | The keys |
| continuationToken | continuationToken | string | Continuation token |

### KeyMetadata

Metadata of a key

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Name of the key |
| version | version | string | Version of the key |
| isEnabled | isEnabled | boolean | A flag indicating whether the key is enabled |
| createdTime | createdTime | date-time | Time when the key was created |
| lastUpdatedTime | lastUpdatedTime | date-time | Time when the key was last updated |
| validityStartTime | validityStartTime | date-time | Time when the key validity starts. |
| validityEndTime | validityEndTime | date-time | Time when the key validity ends. |
| allowedOperations | allowedOperations | array of string | Operations allowed using the key |
| keyType | keyType | string | Type of the key |

### KeyEncryptOutput

Result of encryption operation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| encryptedData | encryptedData | string | Encrypted data |

### KeyDecryptOutput

Result of decryption operation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| rawData | rawData | string | Raw data |

### SecretMetadataCollection

Collection of secrets

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | array of SecretMetadata | The secrets |
| continuationToken | continuationToken | string | Continuation token |

### SecretMetadata

Metadata of a secret

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Name of the secret |
| version | version | string | Version of the secret |
| contentType | contentType | string | Content type of the secret |
| isEnabled | isEnabled | boolean | A flag indicating whether the secret is enabled |
| createdTime | createdTime | date-time | Time when the secret was created |
| lastUpdatedTime | lastUpdatedTime | date-time | Time when the secret was last updated |
| validityStartTime | validityStartTime | date-time | Time when the secret validity starts. |
| validityEndTime | validityEndTime | date-time | Time when the secret validity ends. |

### Secret

The secret

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| value | value | string | Value of the secret |
| name | name | string | Name of the secret |
| version | version | string | Version of the secret |
| contentType | contentType | string | Content type of the secret |
| isEnabled | isEnabled | boolean | A flag indicating whether the secret is enabled |
| createdTime | createdTime | date-time | Time when the secret was created |
| lastUpdatedTime | lastUpdatedTime | date-time | Time when the secret was last updated |
| validityStartTime | validityStartTime | date-time | Time when the secret validity starts. |
| validityEndTime | validityEndTime | date-time | Time when the secret validity ends. |