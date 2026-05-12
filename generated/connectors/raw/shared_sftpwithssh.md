---
layout: Reference
title: SFTP - SSH - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/sftpwithssh/
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
document_id: d1114b8b-0c42-b092-70dc-7a2b7c200376
document_version_independent_id: f0d4c89b-10fb-04f3-7aa9-042d27d59416
updated_at: 2026-04-28T01:06:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/sftpwithssh/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/38b2850b21859cf1397a730fa15d49904b4a64ed/docs/sftpwithssh/index.yml
git_commit_id: 38b2850b21859cf1397a730fa15d49904b4a64ed
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: sftpwithssh/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/sftpwithssh/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/e60d1924-c4ad-4104-bd1b-973758bbac7a
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/91d5f984-ee3d-43c4-9daf-bb09a6bc4e1a
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
platformId: b6fd19ce-42ce-4e33-3389-fa9add76f0da
---

# SFTP - SSH

![](https://static.powerapps.com/resource/ppcr/releases/v1.0.1808/1.0.1808.4692/sftpwithssh/icon.png)
SFTP (SSH File Transfer Protocol) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capabilities.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Department of Defense (DoD) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |

## Connector how-to guide

This article describes the operations for the SFTP-SSH *managed* connector, which is available for Azure Logic Apps, Power Automate, and Power Apps. The SFTP *built-in* connector is available only for Standard logic app workflows in Azure Logic Apps. For more information, see [Connect to an SFTP server using SSH in Azure Logic Apps](/en-us/azure/connectors/connectors-sftp-ssh) and [SFTP built-in connector reference for Azure Logic Apps](/en-us/azure/logic-apps/connectors/built-in/reference/sftp/).

## Differences from the deprecated SFTP managed connector

Compared to the [deprecated SFTP managed connector](/en-us/connectors/sftp/), the SFTP-SSH managed connector provides the following key capabilities:

- Uses the [SSH.NET library](https://github.com/sshnet/SSH.NET), which is an open-source Secure Shell (SSH) library that supports .NET.
- Provides the **Create folder** action, which creates a folder at the specified path on the SFTP server.
- Provides the **Rename file** action, which renames a file on the SFTP server.
- Caches the connection to SFTP server *for up to 1 hour*. This capability improves performance and reduces how often the connector tries connecting to the server. To set the duration for this caching behavior, edit the [**ClientAliveInterval** property](https://man.openbsd.org/sshd_config#ClientAliveInterval) in the SSH configuration on your SFTP server.

## Authentication and permissions

- When you create a connection to your SFTP server, you have to provide your SFTP server address, account credentials, an SSH private key, and the SSH private key password. If your platform supports uploading large files using chunking, you also need both read and write access for the root folder on your SFTP server.
- The SFTP-SSH connector supports both private key authentication and password authentication. However, the SFTP-SSH connector supports only the following private key formats, key exchange algorithms, encryption algorithms, and fingerprints:

    - Private key formats: RSA (Rivest Shamir Adleman) and DSA (Digital Signature Algorithm) keys in both OpenSSH and ssh.com formats. If your private key is in PuTTY (.ppk) file format, first convert the key to the OpenSSH (.pem) file format.
    - Key exchange algorithms:
        - curve25519-sha256
        - curve25519-sha256@libssh.org
        - ecdh-sha2-nistp256
        - ecdh-sha2-nistp384
        - ecdh-sha2-nistp521
        - diffie-hellman-group-exchange-sha256
        - diffie-hellman-group-exchange-sha1
        - diffie-hellman-group16-sha512
        - diffie-hellman-group14-sha256
        - diffie-hellman-group14-sha1
        - diffie-hellman-group1-sha1
    - Encryption algorithms:
        - aes256-ctr
        - 3des-cbc
        - aes128-cbc
        - aes192-cbc
        - aes256-cbc
        - blowfish-cbc
        - twofish-cbc
        - twofish192-cbc
        - twofish128-cbc
        - twofish256-cbc
        - arcfour
        - arcfour128
        - arcfour256
        - cast128-cbc
        - aes128-ctr
        - aes192-ctr
    - Host key algorithms:
        - ssh-rsa
        - ssh-dss
        - ssh-ed25519
        - ecdsa-sha2-nistp256
        - ecdsa-sha2-nistp384
        - ecdsa-sha2-nistp521
    - Fingerprint: MD5. For more information, see Find the MD5 fingerprint.
- When you provide your SSH private key for your connection, *don't manually enter or edit the key*, which might cause the connection to fail. Instead, make sure that you copy the key from your SSH private key file, and paste that key into the connection information box.

    To correctly copy and paste your SSH private key, follow these steps.

    1. Open your SSH private key file in any text editor. These steps continue using Notepad as an example.
    2. In Notepad, from the **Edit** menu, select **Select all**. (Press Ctrl + A)
    3. From the **Edit** menu, select **Copy**.
    4. In the SFTP-SSH connection information box, paste the complete copied key into the **SSH private key** property, which supports multiple lines. **Don't manually enter or edit the key.**
    5. After you finish entering the connection details, select **Create**.

### Convert PuTTY-based key to OpenSSH

The PuTTY format and OpenSSH format use different file name extensions. The PuTTY format uses the .ppk, or PuTTY Private Key, file name extension. The OpenSSH format uses the .pem, or Privacy Enhanced Mail, file name extension. If your private key is in PuTTY format, and you have to use OpenSSH format, first convert the key to the OpenSSH format by following these steps:

- Unix-based OS

    1. If you don't have the PuTTY tools installed on your system, do that now, for example:

        `sudo apt-get install -y putty`
    2. Run the following command, which creates a file that you can use with the SFTP-SSH connector:

        `puttygen <path-to-private-key-file-in-PuTTY-format> -O private-openssh -o <path-to-private-key-file-in-OpenSSH-format>`

        For example

        `puttygen /tmp/sftp/my-private-key-putty.ppk -O private-openssh -o /tmp/sftp/my-private-key-openssh.pem`
- Windows OS

    1. If you haven't done so already, [download the latest PuTTY Generator (puttygen.exe) tool](https://www.puttygen.com/), and then open the tool.
    2. In the PuTTY Key Generator tool (puttygen.exe), under **Actions**, select **Load**.
    3. Browse to your private key file in PuTTY format, and select **Open**.
    4. From the **Conversions** menu, select **Export OpenSSH key**.
    5. Save the private key file with the **.pem** file name extension.

### Find the MD5 fingerprint

The SFTP-SSH connector rejects a connection if both the SFTP server's fingerprint and expected fingerprint don't match. To get the MD5 fingerprint, which is a sequence with 16 pairs of hex digits delimited by colons, try the following options.

#### You have the key

The MD5 key is a *47-character* string delimited by colons. To get the MD5 fingerprint when you have the key, you can use tools such as ssh-keygen.

For example, from a Bash prompt, enter the following command:

`ssh-keygen -l -f id_rsa.pub -E md5`

#### You don't have the key

To get an MD5 fingerprint when you don't have a key, you can use the latest [Server and Protocol Information Dialog tool by WinSCP](https://winscp.net/eng/docs/ui_fsinfo), or you can use the PuTTY Configuration tool instead:

1. In the PuTTY Configuration tool (putty.exe), in the **Category** window, expand **Connection** &gt; **SSH** &gt; **Host keys**.
2. Under **Host key algorithm preference**, open the **Algorithm selection policy** list, and check that **RSA** appears at the top.
3. If RSA doesn't appear at the top, select **RSA**, and then select **Up** until **RSA** moves to the top.
4. Connect to your SFTP server with PuTTY. After the connection is created, when the PUTTY security alert appears, select **More info**.

    Note

    If the security alert doesn't appear, try clearing the **SshHostKeys** entry. Open the Windows registry editor, and browse to the following entry:

    `Computer\HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys`
5. After the **PuTTY: information about the server's host key** box appears, find the **MD5 fingerprint** property, and copy the *47-character string value*, which looks like the following example:

    `**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**`

## Known issues and limitations with triggers

- SFTP managed connector triggers might experience missing, incomplete, or delayed results.

    - Missing results

        SFTP triggers work by polling, or checking, the SFTP file system and looking for any files that changed since the last poll. SFTP managed connector triggers compare file versions using the file's last modified timestamp.

        If you create, add, or update file with a timestamp that's earlier than the currently tracked last modified timestamp, the SFTP managed connector trigger won't detect this file.

        So, if you use an external tool or client that creates, adds, or updates files on the SFTP server, make sure that you disable any feature in the tool or client that preserves a file's last modified timestamp.

        The following table lists some commonly used tools that preserve this timestamp and the steps to disable this feature:

        | SFTP client | Action |
        | --- | --- |
        | WinSCP | Go to **Options** &gt; **Preferences** &gt; **Transfer** &gt; **Edit** &gt; **Preserve timestamp** &gt; **Disable**. |
        | FileZilla | Go to **Transfer** &gt; **Preserve timestamps of transferred files** &gt; **Disable**. |
    - Incomplete or delayed results

        When an SFTP trigger checks for a newly created, added, or updated file, the trigger also checks whether the file is complete. For example, a file might have changes in progress when the trigger checks the SFTP server. To avoid returning an incomplete file, the trigger notes the file's timestamp, but doesn't immediately return the file. Instead, the trigger returns the file only when the trigger checks the server again.

        Sometimes, this behavior might cause a delay that lasts as long as almost twice the trigger's polling interval. Due to this behavior, if you disable the SFTP trigger's **Split On** setting, the SFTP trigger might not return all files at the same time.

## General known issues and limitations

- The SFTP-SSH managed connector currently doesn't support the following SFTP servers:

    - Akamai NetStorage
    - FileMage Gateway
    - Globalscape
    - IBM DataPower
    - MessageWay
    - OpenText Secure MFT
    - OpenText GXS
    - SFTP for Azure Blob Storage
    - VShell Secure File Transfer Server
    - AWS SFTP
- Use separate SFTP folders for file processing and uploading.

    Make sure to use separate folders on your SFTP server for the trigger to monitor files for processing and for storing uploaded files. Otherwise, the trigger won't fire and behaves unpredictably. For example, the trigger might skip a random number of files that need processing.

    This limitation means that you need a way to move files between those folders. If you encounter this problem, remove the files from the monitored folder, and use a different folder to store uploaded files.
- To manage the load on shared multi-tenant managed connector services, the managed SFTP-SSH connector can create multiple connections from same source IP address, that is, the connector IP address, to the destination, which is your SFTP server. Some low-traffic regions might only use three virtual machine instances behind the connector IP address, which means those regions can create a maximum of three connections. Other regions can use up to 20 connections because they have the same number of virtual machines behind the connector IP address.

    If your SFTP server limits the number of connections, your server might not work well with the managed SFTP-SSH connector. However, you can create a Standard logic app workflow that uses the built-in SFTP operations instead. You can control the scale out limits, and as a result, the number of connections.
- If you encounter cipher suite interoperability issues between the SFTP-SSH managed connector and your SFTP server, try creating a Standard logic app workflow and use the SFTP built-in operations instead. The SFTP built-in operations support a wider range of cipher suites.
- This connector might send a no-op request to the backend.

## Chunking

- In Azure Logic Apps and Power Automate, the following managed SFTP-SSH connector actions support chunking where an action can enable handling large files in smaller pieces. For more information about chunking in Azure Logic Apps, see [Handle large messages using chunking]](/azure/logic-apps/logic-apps-handle-large-messages).

    | Action | Chunking support | Override chunk size support |
    | --- | --- | --- |
    | **Copy file** | No | Not applicable |
    | **Create file** | Yes | Yes |
    | **Create folder** | Not applicable | Not applicable |
    | **Delete file** | Not applicable | Not applicable |
    | **Extract archive to folder** | Not applicable | Not applicable |
    | **Get file content** | Yes | Yes |
    | **Get file content using path** | Yes | Yes |
    | **Get file metadata** | Not applicable | Not applicable |
    | **Get file metadata using path** | Not applicable | Not applicable |
    | **List files in folder** | Not applicable | Not applicable |
    | **Rename file** | Not applicable | Not applicable |
    | **Update file** | No | Not applicable |

    SFTP-SSH actions that support chunking can handle files up to 1 GB, while SFTP-SSH actions that don't support chunking can handle files up to 50 MB. The default chunk size is 15 MB. However, this size can dynamically change, starting from 5 MB and gradually increasing to the 50 MB maximum. Dynamic sizing is based on factors such as network latency, server response time, and so on.

    You can override this adaptive behavior when you specify a constant chunk size to use instead. This size can range from 5 MB to 50 MB. For example, suppose you have a 45-MB file and a network that can that support that file size without latency. Adaptive chunking results in several calls, rather that one call. To reduce the number of calls, you can try setting a 50-MB chunk size. In different scenario, if your logic app workflow is timing out, for example, when using 15-MB chunks, you can try reducing the size to 5 MB.

    Chunk size is associated with a connection. This attribute means you can use the same connection for both actions that support chunking and actions that don't support chunking. In this case, the chunk size for actions that support chunking ranges from 5 MB to 50 MB.

    To override the default adaptive behavior that chunking uses on an SFTP-SSH action, you can specify a constant chunk size from 5 MB to 50 MB.

    1. On the designer, in the SFTP-SSH action's upper-right corner, select the ellipses button (**...**), and then select **Settings**.
    2. Under **Content Transfer**, in the **Chunk size** property, enter an integer value from `5` to `50`.
    3. After you finish, select **Done**.
- SFTP-SSH triggers don't support message chunking. When triggers request file content, they select only files that are 15 MB or smaller. To get files larger than 15 MB, follow this pattern instead:

    1. Use an SFTP-SSH trigger that returns only file properties. These triggers have names that include the description, **(properties only)**.
    2. Follow the trigger with the SFTP-SSH **Get file content** action. This action reads the complete file and implicitly uses message chunking.

## Troubleshooting

### 401 error: "401 Unauthorized"

This error might happen because you don't have the correct credentials or permissions. For more information, see Authentication and permissions.

### 404 error: "A reference was made to a file or folder which does not exist"

This error might happen when you use Create file action. When the action creates a file on your SFTP server, the action also automatically sends a call to your SFTP server to get the file's metadata.

If you immediately move the newly created file before the call can get the metadata, the file no longer exists at the expected location, and you get a 404 error message, **A reference was made to a file or folder which does not exist**.

If you can't avoid or delay moving the file, you can skip reading the file's metadata after file creation by following these steps:

1. In the Create file action, open the **Add new parameter** list, select the **Get all file metadata** property, and set the value to **No**.
2. If you need this file metadata later, you can use the Get file metadata action.

### 504 error: "A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond" or "Request to the SFTP server has taken more than '00:00:30' seconds"

This error might happen when you can't successfully establish a connection with the SFTP server. There might be different reasons for this problem, so try these troubleshooting options:

- The connection timeout is 20 seconds. Check that your SFTP server has good performance and intermediate devices, such as firewalls, aren't adding overhead.
- Check whether your SFTP server puts a limit on the number of connections from each IP address. Any such limit hinders communication between the connector and the SFTP server. Make sure to remove this limit.
- If you have a firewall set up, make sure that you add the [managed connector IP addresses for your region](/en-us/connectors/common/outbound-ip-addresses) to the approved list.
- If the error happens intermittently, change the **Retry policy** setting on the SFTP-SSH action to a retry count higher than the default four retries.
- To reduce connection establishment cost, in the SSH configuration for your SFTP server, increase the [**ClientAliveInterval**](https://man.openbsd.org/sshd_config#ClientAliveInterval) property to around one hour.
- Review the SFTP server log to check whether calls sent to your SFTP server arrive successfully, To get more information about the connectivity problem, you can also run a network trace on your firewall and your SFTP server.

### General Limits

| Name | Value |
| --- | --- |
| Maximum number of megabytes being transferred to/from the connector within a bandwidth time interval (per connection) | 1000 |
| Bandwidth time interval (in miliseconds) | 60000 |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Not shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Host server address | string | Host server address | True |
| User name | string | User name | True |
| Password | securestring | Password |  |
| SSH private key | securestring | SSH private key (the content of the file should be provided entirely as is, in the multiline format) |  |
| SSH private key passphrase | securestring | SSH private key passphrase (if the private key is protected by a passphrase) |  |
| Port number | int | SFTP port number (example: 22) |  |
| Disable SSH host key validation | bool | Disable SSH host key validation? (True/False) |  |
| SSH host key finger-print | string | SSH host key finger-print |  |
| Root folder path | string | Root folder path. |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 150 | 60 seconds |

## Actions

| Copy file | This operation copies a file. |
| --- | --- |
| Create file | This operation uploads a file. |
| Create folder | This operation creates a new folder. |
| Delete file | This operation deletes a file. |
| Extract archive to folder | This operation extracts an archive file into a folder (example: .zip). |
| Get file content | This operation gets file contents using the file id. |
| Get file content using path | This operation gets file contents using the file path. |
| Get file metadata | This operation gets file metadata using the file id. |
| Get file metadata using path | This operation gets file metadata using the file path. |
| List files in folder | This operation gets files contained in a folder. |
| List files in root folder | This operation gets the files in the root folder. |
| Rename File | This operation renames a file. |
| Update file | This operation updates the file content. |

### Copy file

- Operation ID:
    - CopyFile

This operation copies a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source file path | source | True | string | Path to the source file |
| Destination file path | destination | True | string | Path to the destination file, including file name |
| Overwrite? | overwrite |  | boolean | Overwrites the destination file if set to 'true' |
| Get all file metadata | ReadFileMetadataFromServer |  | boolean | Get all file metadata from the SFTP server after file creation is complete. If this is false, some metadata properties may not be returned such as last modified time, etc. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create file

- Operation ID:
    - CreateFile

This operation uploads a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder path | folderPath | True | string | Unique path of the folder |
| File name | name | True | string | Name of the file |
| File content | body | True | binary | Content of the file to create |
| Get all file metadata | ReadFileMetadataFromServer |  | boolean | Get all file metadata from the SFTP server after file creation is complete. If this is false, some metadata properties may not be returned such as last modified time, etc. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Create folder

- Operation ID:
    - CreateFolder

This operation creates a new folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderPath | True | string | Select a folder |
| Name | name | True | string | Name of the folder |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Delete file

- Operation ID:
    - DeleteFile

This operation deletes a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file |
| Skip delete if file not found | SkipDeleteIfFileNotFoundOnServer |  | boolean | Skips deletion if a file is not found without failing action. |

### Extract archive to folder

- Operation ID:
    - ExtractFolderV2

This operation extracts an archive file into a folder (example: .zip).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Source archive file path | source | True | string | Path to the archive file |
| Destination folder path | destination | True | string | Path to the destination folder |
| Overwrite? | overwrite |  | boolean | Overwrites the destination files if set to 'true' |

#### Returns

- response
    - array of BlobMetadata

### Get file content

- Operation ID:
    - GetFileContent

This operation gets file contents using the file id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file id |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file content using path

- Operation ID:
    - GetFileContentByPath

This operation gets file contents using the file path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File path | path | True | string | Unique path of the file |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### Get file metadata

- Operation ID:
    - GetFileMetadata

This operation gets file metadata using the file id.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file id |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### Get file metadata using path

- Operation ID:
    - GetFileMetadataByPath

This operation gets file metadata using the file path.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File path | path | True | string | Unique path of the file |

#### Returns

Blob metadata

- Body
    - BlobMetadata

### List files in folder

- Operation ID:
    - ListFolder

This operation gets files contained in a folder.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | id | True | string | Specify the folder |

#### Returns

- response
    - array of BlobMetadata

### List files in root folder

- Operation ID:
    - ListRootFolder

This operation gets the files in the root folder.

#### Returns

- response
    - array of BlobMetadata

### Rename File

- Operation ID:
    - RenameFile

This operation renames a file.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Select a file |
| New name | newName | True | string | New name for the file |
| Get all file metadata | ReadFileMetadataFromServer |  | boolean | Get all file metadata from the SFTP server after file creation is complete. If this is false, some metadata properties may not be returned such as last modified time, etc. |

#### Returns

Represents blob datasets metadata response

- Body
    - BlobMetadataResponse

### Update file

- Operation ID:
    - UpdateFile

This operation updates the file content.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| File | id | True | string | Specify the file |
| File content | body | True | binary | Content of the file to update |
| Get all file metadata | ReadFileMetadataFromServer |  | boolean | Get all file metadata from the SFTP server after file creation is complete. If this is false, some metadata properties may not be returned such as last modified time, etc. |

#### Returns

Blob metadata

- Body
    - BlobMetadata

## Triggers

| When a file is added or modified | This operation triggers a flow when a file is added or modified in a folder. The trigger will fetch both the file metadata as well as the content of the file. The trigger relies on the last modified time of a file. If a file is being created by a third-party client, the preservation of the last modified time should be disabled in the client. Files larger than 50 megabytes are skipped by the trigger. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |
| --- | --- |
| When files are added or modified (properties only) | This operation triggers a flow when a file is added or modified in a folder. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger relies on the last modified time of a file. If a file is being created by a third-party client, the preservation of the last modified time should be disabled in the client. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created. |

### When a file is added or modified

- Operation ID:
    - OnUpdatedFile

This operation triggers a flow when a file is added or modified in a folder. The trigger will fetch both the file metadata as well as the content of the file. The trigger relies on the last modified time of a file. If a file is being created by a third-party client, the preservation of the last modified time should be disabled in the client. Files larger than 50 megabytes are skipped by the trigger. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | Specify a folder |
| Include file content | includeFileContent |  | boolean | If set to true, file content will also be retrieved along with the trigger response |
| Infer Content Type | inferContentType |  | boolean | Infer content-type based on extension |

#### Returns

The content of the file.

- File Content
    - binary

### When files are added or modified (properties only)

- Operation ID:
    - OnUpdatedFiles

This operation triggers a flow when a file is added or modified in a folder. This trigger will only fetch the file metadata. To get the file content, you can use the "Get file content" operation. The trigger relies on the last modified time of a file. If a file is being created by a third-party client, the preservation of the last modified time should be disabled in the client. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Folder | folderId | True | string | Select a folder |
| Number of files to return | maxFileCount |  | integer | Number of files returned from the trigger (1-100) |

#### Returns

Blob metadata

- List of Files
    - BlobMetadata

## Definitions

### BlobMetadata

Blob metadata

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The unique id of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| DisplayName | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| LastModified | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The size of the file or folder. |
| MediaType | MediaType | string | The media type of the file or folder. |
| IsFolder | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| FileLocator | FileLocator | string | The filelocator of the file or folder. |

### BlobMetadataResponse

Represents blob datasets metadata response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | Id | string | The unique id of the file or folder. |
| Name | Name | string | The name of the file or folder. |
| DisplayName | DisplayName | string | The display name of the file or folder. |
| Path | Path | string | The path of the file or folder. |
| LastModified | LastModified | date-time | The date and time the file or folder was last modified. |
| Size | Size | integer | The size of the file or folder. |
| MediaType | MediaType | string | The media type of the file or folder. |
| IsFolder | IsFolder | boolean | A boolean value (true, false) to indicate whether or not the blob is a folder. |
| ETag | ETag | string | The etag of the file or folder. |
| FileLocator | FileLocator | string | The filelocator of the file or folder. |

### binary

This is the basic data type 'binary'.