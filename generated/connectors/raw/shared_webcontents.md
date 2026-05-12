---
layout: Reference
title: HTTP with Microsoft Entra ID (preauthorized) - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/webcontents/
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
document_id: 2ce7ba1f-e39a-b6d7-dcd3-0bba96f28e92
document_version_independent_id: f254a24f-6004-849f-d566-10d7d3e87779
updated_at: 2026-03-27T19:07:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/webcontents/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/cbe3fddfee6df7864687c0187c1bd3aabf415069/docs/webcontents/index.yml
git_commit_id: cbe3fddfee6df7864687c0187c1bd3aabf415069
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: webcontents/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/webcontents/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/1433a524-c01f-4b87-beab-670c040dea4f
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/312f1f05-a431-4193-8a4d-e6245d5966de
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
platformId: f4e61866-b7e0-5d36-86b3-c218dd48424f
---

# HTTP with Microsoft Entra ID (preauthorized)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1800/1.0.1800.4648/webcontents/icon.png)
Use the HTTP connector to fetch resources from various Web services, authenticated by Microsoft Entra ID, or from an on-premise web service.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - US Department of Defense (DoD) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

Note

The HTTP with Microsoft Entra ID (preauthorized) connector enables users to submit requests to any HTTP endpoint that supports Entra ID authentication. As part of our ongoing efforts to enhance security and data privacy, we have reviewed the permissions associated with this connector and are planning to provide improved identity isolation controls.

Currently, the HTTP with Microsoft Entra ID (preauthorized) connector operates through a Microsoft 1st party trusted application. This application includes preauthorization for various Microsoft services, including but not limited to Microsoft Graph, SharePoint, and other Microsoft offerings. This preauthorization empowers the connector to interact with these services using [delegated](/en-us/azure/active-directory/develop/permissions-consent-overview#delegated-access-access-on-behalf-of-a-user) access on behalf of the user. Rest assured that this approach fully respects the user's privileges and does not permit access to data or actions beyond their authorized scope.

With the existing connector, there is no need for administrators to explicitly [grant consent](/en-us/graph/api/resources/oauth2permissiongrant?view=graph-rest-1.0) for actions to be executed by the application on behalf of the user. However, we released a new version of this connector. The new version of the connector uses a new application without any preauthorization. This allows an administrator to grant discrete consent.

If you wish to restrict the use of this connector, you can leverage the existing [Data Loss Prevention (DLP)](/en-us/power-platform/admin/prevent-data-loss) capabilities. You have the option to create a new policy or update an existing one to block the utilization of this connector. It is important to note that some other connectors and features depend on the HTTP with Microsoft Entra ID (preauthorized) connector. For additional information, click [here](/en-us/power-apps/maker/data-platform/create-and-use-dataflows#troubleshooting-data-connections).

![Power Platform Admin Center](assets/power-platform-admin-center.png)

## Virtual Network support (Subnet Delegation)

When the connector is used in a [Power Platform environment linked to a Virtual Network](/en-in/power-platform/admin/vnet-support-overview), limitations apply:

- The following actions are NOT supported actions:
    - [Get web resource](/en-us/connectors/webcontents/#get-web-resource)

## Known Issues and Limitations

1. The connector encodes the request body into base64 encoding, hence it should be used to call backend services which expect the request body in this format. You cannot use this connector to call a backend service that expects the request body in raw binary format.
2. If you get an error similar to:

- `{ "error": { "code": "Forbidden", "message": "" } }`
- `{ "error": { "code": "Authorization_RequestDenied", "message": "Insufficient privileges to complete the operation." } }` then it could be because this connector has a limited set of scopes.
- Users may also face pre-authorization errors when connecting to some resources that are not supported.
- If your scenario requires something more advanced, please use the "HTTP" connector or create a custom connector.

1. The connector is based on multi-tenant application registration. The application cannot tell what tenant the user is from until the user signs into it. Therefore, we only support specifying resources under users' default tenant ('common').
2. Resources based on ADFS SSO (Microsoft Entra ID Federation Services for Single Sign-On) are not supported. As a workaround, please use the "HTTP" connector.
3. When using this connector in a national cloud environment the resource **must be** their national cloud endpoint equivalent. Attempts to try to connect to public cloud (https://graph.microsoft.com, https://bing.com for example) from most national cloud environments **will fail** with a pre-authorization error.

    - GCC and Fairfax environments can continue to use public cloud endpoints (https://graph.microsoft.com, for example).
    - GCC-High resource example: https://graph.microsoft.us.
    - China resource example: https://microsoftgraph.chinacloudapi.cn.
4. The use of cookie authorization request header is not supported in case of on-premises data gateway enabled connection.
5. The asynchronous pattern based on the response Location header is not supported. Please use [Azure Resource Manager](/en-us/connectors/arm/) connector instead if applicable.
6. For the ‘HTTP with Microsoft Entra ID’ connector to successfully retrieve data from another service, the app used by the connector must be granted access to the required scope. For details on how to grant the required access to the app, refer to Authorize the app to act on behalf of a signed-in user. If the required access is not granted, you may receive one of the following errors when you attempt to create the connection:

    ```
    Consent Required: To enable the HTTP With Microsoft Entra ID connector to access resources on behalf of a signed-in user, grant consent to this application.
    ```

    ![Grant Consent](assets/grant-consent-to-application.png)

    If a scope (permission) has been granted but not all of the required scopes are included, the creation of the connection will succeed but you will encounter a Forbidden (403) error at runtime. The error details may include additional information such as:

    ```
    "code": "Authorization_RequestDenied"
    "message": "Insufficient privileges to complete the operation."
    
    ```
7. If issues are faced creating a connection or an error is received around a missing parameter value, try creating a connection with Power Automate's Old Designer instead of the New Designer.
8. Removing or adding preauthorizations can take up to 1 hour to reflect for connections existing prior to the update. However, new connections should reflect the updated authorizations instantly.
9. Requests that include binary content (for example, PDF files, images, or Office documents) are not supported and may result in corrupted or unreadable files. This behavior is by design; only text-based payloads are supported.
10. When creating a connection for some services, tenant information required to evaluate Tenant Isolation may not be available during authentication due to an underlying platform limitation, and the connection is still created successfully.

## Authorize the connector to act on behalf of a signed-in user

As a user with the Global Administrator role, you need to create [oAuth2PermissionGrants](/en-us/graph/api/oauth2permissiongrant-post?view=graph-rest-1.0&amp;tabs=http) to approve the necessary permissions (scopes) for the required service.

For example, if you are using Microsoft Graph (`https://graph.microsoft.com`) and need to read calendar information, you can follow the [Graph documentation](/en-us/graph/permissions-reference#application-permissions-11) to identify the permissions required (Calendar.Read). By granting the app (used by the connector) the Calendar.Read scope, it will allow the app to access this data from the service on behalf of the user. One important thing to note is that the data that can be accessed by the app is still limited to the data the user has access to in the service. It is not possible to use the Azure Portal to grant consent to this app. For this reason, a PowerShell script has been created by Microsoft to simplify granting consent to the app used by the HTTP with Microsoft Entra ID connector.

Important

[PowerShell version 7](/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3) or later needs to be installed to run this script.

1. Download the required PowerShell script from [here](https://github.com/microsoft/PowerApps-Samples/blob/master/powershell/connectors/HTTPWithMicrosoftEntraId/ManagePermissionGrant.ps1) or create a script named 'ManagePermissionGrant.ps1' referring to the steps mentioned [here](/en-us/connectors/custom-connectors/auth-script). This script is mainly for reference, you can modify the script as per your use case.
2. Right-click on the downloaded ManagePermissionGrant.ps1 file and then click **Properties**.
3. Click the **Unblock** checkbox and then click **OK**.

    ![Unblock Script](assets/unblock-script.png)

    If you do not check the Unblock checkbox, you will receive an error indicating the script cannot be loaded because it is not digitally signed.
4. Open a PowerShell command window.
5. Change the path to the location where you downloaded the script.
6. Type the following command and press **Enter**:

    ```powershell
    .\ ManagePermissionGrant.ps1
    ```

    ![Execute Manage Permission Grant Script](assets/execute-manage-permission-grant-script.png)
7. You will be prompted to choose whether to authenticate to Azure Global (recommended) or to select from a list (advanced). If you are not connecting to subscriptions in US Gov, US Gov DoD, China, or Germany, press Enter.

    ![Cloud Selection](assets/cloud-selection.png)
8. If you have not already, you may be prompted to authenticate to the Microsoft identity platform in a new browser window. Authenticate as a user with the Global Administrator role.
9. To grant consent to some of the most used services such as Microsoft Graph or SharePoint, press **Enter**. If the service you need to consent to is not on the list of commonly used apps, use option **A**.

    ![Resource and Scope Selection](assets/resource-scope-selection.png)
10. A dialog will appear. Select the application you want to consent to allowing the connector to act on behalf of a user. You can use the textbox at the top to filter the results.

    ![Select Application](assets/select-application.png)
11. Click **OK**.
12. Select one or more scopes (permissions) you want to consent to and then click **OK**. Multiple scopes can be selected by pressing and holding the CTRL key while selecting rows.
13. In the PowerShell window you will be prompted to choose the consent type. You can choose whether to allow the app to act on behalf of any logged in user or if you want to limit the consent to a specific user. If you want to provide consent for all users, press **Enter**. If you want to provide consent for only a specific user, type **N** and then press **Enter**. If you choose to consent for a specific user, you will be prompted to select the user.
14. If consent for any scopes already exist for the selected resource, you will be prompted to choose if you want to delete the existing grants first. If you want to delete existing grants, type **Y** and press **Enter**. If you want to keep the existing grants, press **Enter**.
15. A summary of the scopes you selected will be displayed in the PowerShell window. If you want to proceed with granting the selected scopes, type **Y** and then press **Enter**.
16. If the script can grant the consent successfully, you will see a message that script execution completed.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Log in using a Basic Gateway | Use a basic web gateway to connect to your HTTP resources | All regions | Shareable |
| Log in using a Client Certificate Auth | Provide Microsoft Entra ID credentials using PFX certificate and password | All regions | Shareable |
| Log in using a Windows Gateway | Use an on-premise Windows Gateway to connect to your HTTP resources | All regions | Shareable |
| Log in using an anonoymous Gateway | Use an anonymous gateway to connect to your HTTP resources | All regions | Shareable |
| Log in with Microsoft Entra ID | Log in with Microsoft Entra ID Credentials | All regions | Shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Log in using a Basic Gateway

Auth ID: BasicGateway

Applicable: All regions

Use a basic web gateway to connect to your HTTP resources

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |
| Username | securestring | Username credential |  |
| Password | securestring | Password credential |  |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

### Log in using a Client Certificate Auth

Auth ID: CertOauth

Applicable: All regions

Provide Microsoft Entra ID credentials using PFX certificate and password

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Microsoft Entra ID Resource URI (Application ID URI) | string | The identifier used in Microsoft Entra ID to identify the target resource. For SharePoint Online and OneDrive for Business, use https://{contoso}.sharepoint.com. Usually, it is the base URL of your resource. | True |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |
| Tenant | string |  | True |
| Client ID | string | The client ID of for the Microsoft Entra ID application | True |
| Client certificate secret | clientCertificate | The client certificate secret allowed by this application | True |

### Log in using a Windows Gateway

Auth ID: WindowsGateway

Applicable: All regions

Use an on-premise Windows Gateway to connect to your HTTP resources

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |
| Username | securestring | Username credential |  |
| Password | securestring | Password credential |  |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

### Log in using an anonoymous Gateway

Auth ID: AnonymousGateway

Applicable: All regions

Use an anonymous gateway to connect to your HTTP resources

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |
| Username | securestring | Username credential |  |
| Password | securestring | Password credential |  |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

### Log in with Microsoft Entra ID

Auth ID: EntraAuth

Applicable: All regions

Log in with Microsoft Entra ID Credentials

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Microsoft Entra ID Resource URI (Application ID URI) | string | The identifier used in Microsoft Entra ID to identify the target resource. For SharePoint Online and OneDrive for Business, use https://{contoso}.sharepoint.com. Usually, it is the base URL of your resource. | True |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Microsoft Entra ID Resource URI (Application ID URI) | string | The identifier used in Microsoft Entra ID to identify the target resource. For SharePoint Online and OneDrive for Business, use https://{contoso}.sharepoint.com. Usually, it is the base URL of your resource. | True |
| Base Resource URL | string | Specify the base URL of the HTTP resources or Application (client) ID in the form of the GUID you want to connect to. | True |
| Username | securestring | Username credential |  |
| Password | securestring | Password credential |  |
| Authentication Type | string | Authentication type to connect to your on-premise HTTP resource |  |
| Gateway | gatewaySetting | On-prem gateway (see [https://docs.microsoft.com/data-integration/gateway](/en-us/data-integration/gateway) for more details |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 100 | 60 seconds |

## Actions

| Get web resource | Retrieves a web resource by issuing an HTTP GET request. |
| --- | --- |
| Invoke an HTTP request | Invokes an HTTP endpoint. |

### Get web resource

- Operation ID:
    - GetFileContent

Retrieves a web resource by issuing an HTTP GET request.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource path | path | True | string | File identifier |

#### Returns

The content of the file.

- File Content
    - binary

### Invoke an HTTP request

- Operation ID:
    - InvokeHttp

Invokes an HTTP endpoint.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Method | method | True | string | One of the known HTTP verbs: GET, DELETE, PATCH, POST, PUT. |
| Url of the request | url | True | string | A full or relative URL to the resource. If it is a full URL , it must match the base resource URL set in the connection. |
| Headers | headers |  | object | The request headers. |
| Body of the request | body |  | string | Body of the request when the method requires it. |

#### Returns

The content of the response.

- Body
    - string

## Definitions

### binary

This is the basic data type 'binary'.