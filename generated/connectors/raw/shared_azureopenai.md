---
layout: Reference
title: Azure OpenAI - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/azureopenai/
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
document_id: 3f7a3f38-c065-b2e9-7244-3f40bee3da40
document_version_independent_id: 3f7a3f38-c065-b2e9-7244-3f40bee3da40
updated_at: 2026-04-09T19:04:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/azureopenai/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/9b7a65966432430735fa0b3dd24cc687e36a01bc/docs/azureopenai/index.yml
git_commit_id: 9b7a65966432430735fa0b3dd24cc687e36a01bc
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: azureopenai/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/azureopenai/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/8a6e4dad-7050-4ce7-83f9-eb4123577a54
- https://authoring-docs-microsoft.poolparty.biz/devrel/68ec7f3a-2bc6-459f-b959-19beb729907d
- https://authoring-docs-microsoft.poolparty.biz/devrel/45da903a-8cff-40ca-99bf-9237f80d6982
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/0a5fc323-00ce-4c20-9095-41948f54c83f
- https://authoring-docs-microsoft.poolparty.biz/devrel/90370425-aca4-4a39-9533-d52e5e002a5d
- https://authoring-docs-microsoft.poolparty.biz/devrel/7af51462-ed96-4b66-aefd-ea77337d1b96
platformId: ec035e76-2738-52b9-7a85-91ed45c6b1fc
---

# Azure OpenAI (Preview)

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/v1.0.1753/1.0.1753.4224/azureopenai/icon.png)
Easily integrate Azure OpenAI's cutting-edge artificial intelligence capabilities into your workflows

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure Government regions  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Premium | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |
| **Power Automate** | Premium | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - US Government (GCC)  - US Government (GCC High)  - China Cloud operated by 21Vianet  - US Department of Defense (DoD) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://support.microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/en-us/products/cognitive-services/openai-service |
| Privacy policy | [https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy](/en-us/legal/cognitive-services/openai/data-privacy) |
| Categories | AI;Business Intelligence |

Azure OpenAI On Your Data enables you to run advanced AI models such as GPT-35-Turbo and GPT-4 on your own enterprise data without needing to train or fine-tune models. You can chat on top of, and analyze your data with greater accuracy. You can also specify sources to support the model's responses based on the latest information available in your designated data sources, or omit the data source to call your Azure OpenAI model without grounding data.

## Prerequisites

- Azure subscription - [Create one for free](https://azure.microsoft.com/free/cognitive-services).
- [Apply](https://aka.ms/oaiapply) to get access to Azure OpenAI. Azure OpenAI requires registration and is currently only available to approved enterprise customers and partners. See Limited access to [Azure OpenAI Service for more information](/en-us/legal/cognitive-services/openai/limited-access?context=/azure/ai-services/openai/context/context).
- [Create an Azure OpenAI resource](/en-us/azure/ai-services/openai/how-to/create-resource?pivots=web-portal) in the Azure portal. Be sure to create your resource in a [supported region](/en-us/azure/ai-services/openai/concepts/use-your-data#regional-availability-and-model-support) with a [supported model](/en-us/azure/ai-services/openai/concepts/use-your-data#supported-models).
    - Be sure that you are assigned at least the [Cognitive Services Contributor](/en-us/azure/ai-services/openai/how-to/role-based-access-control#cognitive-services-contributor) role for the Azure OpenAI resource.
- [Create an Azure AI Search resource](/en-us/azure/search/search-create-service-portal) in the Azure portal and follow the [best practices](/en-us/azure/ai-services/openai/concepts/use-your-data?tabs=ai-search#best-practices) for preparing data in your Azure AI Search instance for use with the Azure OpenAI On Your Data service.

Tip

If it's your first time using Azure OpenAI On Your Data, try the [quickstart](/en-us/azure/ai-services/openai/use-your-data-quickstart?pivots=programming-language-studio) to get started with the service.

## Get your credentials

To authenticate your API requests, you will need the key and endpoint for your Azure OpenAI and Azure AI Search resources.

For your Azure OpenAI resource:

1. Navigate to your resource in the [Azure portal](https://portal.azure.com/).
2. On the page for your resource, select **Keys and endpoint** on the left navigation menu. Make note of your credentials. You will use one of your keys and your endpoint.

For your Azure AI Search resource:

1. Navigate to your resource in the [Azure portal](https://portal.azure.com/).
2. On the **Overview** page for your resource, make note of the **URL**.
3. Select **Keys** on the left navigation menu. You will use one of your admin keys.

## Known issues and limitations

- Only Azure AI Search is supported as a data source for using Azure OpenAI on your Data with this Power Platform connector.
- Function calling is not supported.
- Images are not supported in message content.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| API Key | Provide Azure OpenAI resource name and API Key to access your Azure OpenAI that hosts the AI Model. | All regions | Shareable |
| Logic Apps Managed Identity | Create a connection using a LogicApps Managed Identity | LOGICAPPS only | Shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### API Key

Auth ID: keyBasedAuth

Applicable: All regions

Provide Azure OpenAI resource name and API Key to access your Azure OpenAI that hosts the AI Model.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure OpenAI resource name | string | The name of the Azure OpenAI resource that hosts the AI model | True |
| Azure OpenAI API key | securestring | The API key to access the Azure OpenAI resource that hosts the AI model | True |
| Azure Cognitive Search endpoint URL | string | The URL of the Azure Cognitive Search endpoint indexing your data |  |
| Azure Cognitive Search API key | securestring | The API key to access the Azure Cognitive Search endpoint indexing your data |  |

### Logic Apps Managed Identity

Auth ID: managedIdentityAuth

Applicable: LOGICAPPS only

Create a connection using a LogicApps Managed Identity

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| LogicApps Managed Identity | managedIdentity | Sign in with a Logic Apps Managed Identity | True |
| Azure OpenAI resource name | string | The name of the Azure OpenAI resource that hosts the AI model | True |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Azure OpenAI resource name | string | The name of the Azure OpenAI resource that hosts the AI model | True |
| Azure OpenAI API key | securestring | The API key to access the Azure OpenAI resource that hosts the AI model | True |
| Azure Cognitive Search endpoint URL | string | The URL of the Azure Cognitive Search endpoint indexing your data |  |
| Azure Cognitive Search API key | securestring | The API key to access the Azure Cognitive Search endpoint indexing your data |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1000 | 60 seconds |

## Actions

| Creates a completion for the chat message | Creates a completion for the chat message |
| --- | --- |
| Get an embedding | Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms |
| Get multiple embeddings | Get vector representations of a given array of inputs that can be easily consumed by machine learning models and algorithms |
| Using extensions to create a completion for chat messages | Using extensions to create a completion for chat messages |

### Creates a completion for the chat message

- Operation ID:
    - ChatCompletions\_Create\_2024Feb15Preview

Creates a completion for the chat message

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Deployment ID of the deployed model | deployment-id | True | string | Deployment ID of the deployed model |
| API version | api-version | True | string | API version |
| temperature | temperature |  | number | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. |
| top\_p | top\_p |  | number | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top\_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both. |
| stream | stream |  | boolean | If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a `data: [DONE]` message. |
| stop | stop |  | array of string | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence. |
| max\_tokens | max\_tokens |  | integer | The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens). |
| presence\_penalty | presence\_penalty |  | number | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. |
| frequency\_penalty | frequency\_penalty |  | number | Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim. |
| logit\_bias | logit\_bias |  | object | Modify the likelihood of specified tokens appearing in the completion. Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token. |
| user | user |  | string | A unique identifier representing your end-user, which can help Azure OpenAI to monitor and detect abuse. |
| role | role | True | string | The role of the messages author. |
| content | content | True | string | An array of content parts with a defined type, each can be of type `text`. |
| type | type | True | string | A representation of configuration data for a single Azure OpenAI chat extension. This will be used by a chat completions request that should use Azure OpenAI chat extensions to augment the response behavior. The use of this configuration is compatible only with Azure OpenAI. |
| top\_n\_documents | top\_n\_documents |  | integer | The configured top number of documents to feature for the configured query. |
| in\_scope | in\_scope |  | boolean | Whether queries should be restricted to use of indexed data. |
| strictness | strictness |  | integer | The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. |
| role\_information | role\_information |  | string | Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. |
| index\_name | index\_name | True | string | The name of the index to use as available in the referenced Azure Search resource. |
| title\_field | title\_field |  | string | The name of the index field to use as a title. |
| url\_field | url\_field |  | string | The name of the index field to use as a URL. |
| filepath\_field | filepath\_field |  | string | The name of the index field to use as a filepath. |
| content\_fields | content\_fields |  | array of string | The names of index fields that should be treated as content. |
| content\_fields\_separator | content\_fields\_separator |  | string | The separator pattern that content fields should use. |
| vector\_fields | vector\_fields |  | array of string | The names of fields that represent vector data. |
| query\_type | query\_type |  | string | The type of Azure Search retrieval query that should be executed when using it as an Azure OpenAI chat extension. |
| semantic\_configuration | semantic\_configuration |  | string | The additional semantic configuration for the query. |
| filter | filter |  | string | Search filter. |
| type | type |  | string | Represents the available sources Azure OpenAI On Your Data can use to configure vectorization of data for use with vector search. |
| deployment\_name | deployment\_name | True | string | Specifies the name of the model deployment to use for vectorization. This model deployment must be in the same Azure OpenAI resource, but On Your Data will use this model deployment via an internal call rather than a public one, which enables vector search even in private networks. |
| n | n |  | integer | How many chat completion choices to generate for each input message. |
| seed | seed |  | integer | If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend. |
| logprobs | logprobs |  | boolean | Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`. This option is currently not available on the `gpt-4-vision-preview` model. |
| top\_logprobs | top\_logprobs |  | integer | An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. |
| type | type |  | string | Setting to `json_object` enables JSON mode. This guarantees that the message the model generates is valid JSON. |

#### Returns

- Body
    - createChatCompletionResponse_2024Feb15Preview

### Get an embedding

- Operation ID:
    - SingleEmbeddings\_Create\_2024Feb15Preview

Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Deployment ID of the deployed model | deployment-id | True | string | Deployment ID of the deployed model |
| API version | api-version | True | string | API version |
| input | input | True | string | Input text to get embeddings for, encoded as a string. Input string must not exceed 2048 tokens in length |
| user | user |  | string | A unique identifier representing your end-user, which can help Azure OpenAI to monitor and detect abuse. |
| input\_type | input\_type |  | string | The input type of embedding search to use. |

#### Returns

- Body
    - getSingleEmbeddingsResponse_2024Feb15Preview

### Get multiple embeddings

- Operation ID:
    - MultipleEmbeddings\_Create\_2024Feb15Preview

Get vector representations of a given array of inputs that can be easily consumed by machine learning models and algorithms

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Deployment ID of the deployed model | deployment-id | True | string | Deployment ID of the deployed model |
| API version | api-version | True | string | API version |
| input | input | True | array of string | Array of Input texts to get embeddings for, encoded as a string. Each Input string must not exceed 2048 tokens in length |
| user | user |  | string | A unique identifier representing your end-user, which can help Azure OpenAI to monitor and detect abuse. |
| input\_type | input\_type |  | string | The input type of embedding search to use. |

#### Returns

- Body
    - getMultipleEmbeddingsResponse_2024Feb15Preview

### Using extensions to create a completion for chat messages

- Operation ID:
    - ExtensionsChatCompletions\_Create

Using extensions to create a completion for chat messages

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Deployment ID of the deployed model | deployment-id | True | string | Deployment ID of the deployed model |
| Confirm Deployment ID of the deployed model | deploymentId | True | string | Confirm Deployment ID of the deployed model |
| API version | api-version | True | string | API version |
| index | index |  | integer | The index of the message in the conversation. |
| role | role | True | string | The role of the author of this message. |
| recipient | recipient |  | string | The recipient of the message in the format of &lt;namespace&gt;.&lt;operation&gt;. Present if and only if the recipient is tool. |
| content | content | True | string | The contents of the message |
| end\_turn | end\_turn |  | boolean | Whether the message ends the turn. |
| type | type | True | string | The data source type. |
| parameters | parameters |  | object | The parameters to be used for the data source in runtime. |
| temperature | temperature |  | number | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. |
| top\_p | top\_p |  | number | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top\_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both. |
| stream | stream |  | boolean | If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a `data: [DONE]` message. |
| stop | stop |  | array of string | Array minimum size of 1 and maximum of 4 |
| max\_tokens | max\_tokens |  | integer | The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens). |
| presence\_penalty | presence\_penalty |  | number | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. |
| frequency\_penalty | frequency\_penalty |  | number | Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim. |
| logit\_bias | logit\_bias |  | object | Modify the likelihood of specified tokens appearing in the completion. Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token. |
| user | user |  | string | A unique identifier representing your end-user, which can help Azure OpenAI to monitor and detect abuse. |

#### Returns

The response of the extensions chat completions.

- Body
    - ExtensionsChatCompletionsResponse

## Definitions

### Message

A chat message.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| index | index | integer | The index of the message in the conversation. |
| role | role | string | The role of the author of this message. |
| recipient | recipient | string | The recipient of the message in the format of &lt;namespace&gt;.&lt;operation&gt;. Present if and only if the recipient is tool. |
| content | content | string | The contents of the message |
| end\_turn | end\_turn | boolean | Whether the message ends the turn. |

### ExtensionsChatCompletionsResponse

The response of the extensions chat completions.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| object | object | string |  |
| created | created | integer |  |
| model | model | string |  |
| prompt\_filter\_results | prompt\_filter\_results | promptFilterResults | Content filtering results for zero or more prompts in the request. In a streaming request, results for different prompts may arrive at different times or in different orders. |
| prompt\_tokens | usage.prompt\_tokens | integer |  |
| completion\_tokens | usage.completion\_tokens | integer |  |
| total\_tokens | usage.total\_tokens | integer |  |
| choices | choices | array of ExtensionsChatCompletionChoice |  |

### ExtensionsChatCompletionChoice

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| index | index | integer |  |
| finish\_reason | finish\_reason | string |  |
| content\_filter\_results | content\_filter\_results | contentFilterResults | Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. |
| messages | messages | array of Message | The list of messages returned by the service. |

### contentFilterResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| severity | severity | string |  |
| filtered | filtered | boolean |  |

### contentFilterResults

Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sexual | sexual | contentFilterResult |  |
| violence | violence | contentFilterResult |  |
| hate | hate | contentFilterResult |  |
| self\_harm | self\_harm | contentFilterResult |  |
| error | error | errorBase |  |

### promptFilterResult

Content filtering results for a single prompt in the request.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| prompt\_index | prompt\_index | integer |  |
| content\_filter\_results | content\_filter\_results | contentFilterResults | Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. |

### promptFilterResults

Content filtering results for zero or more prompts in the request. In a streaming request, results for different prompts may arrive at different times or in different orders.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | promptFilterResult | Content filtering results for a single prompt in the request. |

### errorBase

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string |  |
| message | message | string |  |

### errorBase\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string |  |
| message | message | string |  |

### contentFilterSeverityResult\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| filtered | filtered | boolean |  |
| severity | severity | string |  |

### contentFilterDetectedResult\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| filtered | filtered | boolean |  |
| detected | detected | boolean |  |

### contentFilterDetectedWithCitationResult\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| filtered | filtered | boolean |  |
| detected | detected | boolean |  |
| URL | citation.URL | string |  |
| license | citation.license | string |  |

### contentFilterIdResult\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| filtered | filtered | boolean |  |

### contentFilterPromptResults\_2024Feb15Preview

Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. Information about jailbreak content and profanity, if it has been detected, and if it has been filtered or not. And information about customer block list, if it has been filtered and its id.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sexual | sexual | contentFilterSeverityResult\_2024Feb15Preview |  |
| violence | violence | contentFilterSeverityResult\_2024Feb15Preview |  |
| hate | hate | contentFilterSeverityResult\_2024Feb15Preview |  |
| self\_harm | self\_harm | contentFilterSeverityResult\_2024Feb15Preview |  |
| profanity | profanity | contentFilterDetectedResult\_2024Feb15Preview |  |
| custom\_blocklists | custom\_blocklists | array of contentFilterIdResult\_2024Feb15Preview |  |
| error | error | errorBase\_2024Feb15Preview |  |
| jailbreak | jailbreak | contentFilterDetectedResult\_2024Feb15Preview |  |

### contentFilterChoiceResults\_2024Feb15Preview

Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. Information about third party text and profanity, if it has been detected, and if it has been filtered or not. And information about customer block list, if it has been filtered and its id.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sexual | sexual | contentFilterSeverityResult\_2024Feb15Preview |  |
| violence | violence | contentFilterSeverityResult\_2024Feb15Preview |  |
| hate | hate | contentFilterSeverityResult\_2024Feb15Preview |  |
| self\_harm | self\_harm | contentFilterSeverityResult\_2024Feb15Preview |  |
| profanity | profanity | contentFilterDetectedResult\_2024Feb15Preview |  |
| custom\_blocklists | custom\_blocklists | array of contentFilterIdResult\_2024Feb15Preview |  |
| error | error | errorBase\_2024Feb15Preview |  |
| protected\_material\_text | protected\_material\_text | contentFilterDetectedResult\_2024Feb15Preview |  |
| protected\_material\_code | protected\_material\_code | contentFilterDetectedWithCitationResult\_2024Feb15Preview |  |

### promptFilterResult\_2024Feb15Preview

Content filtering results for a single prompt in the request.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| prompt\_index | prompt\_index | integer |  |
| content\_filter\_results | content\_filter\_results | contentFilterPromptResults\_2024Feb15Preview | Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. Information about jailbreak content and profanity, if it has been detected, and if it has been filtered or not. And information about customer block list, if it has been filtered and its id. |

### promptFilterResults\_2024Feb15Preview

Content filtering results for zero or more prompts in the request. In a streaming request, results for different prompts may arrive at different times or in different orders.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Items |  | promptFilterResult\_2024Feb15Preview | Content filtering results for a single prompt in the request. |

### azureChatExtensionsMessageContext\_2024Feb15Preview

A representation of the additional context information available when Azure OpenAI chat extensions are involved in the generation of a corresponding chat completions response. This context information is only populated when using an Azure OpenAI request configured to use a matching extension.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| citations | citations | array of citation\_2024Feb15Preview | The data source retrieval result, used to generate the assistant message in the response. |
| intent | intent | string | The detected intent from the chat history, used to pass to the next turn to carry over the context. |

### citation\_2024Feb15Preview

citation information for a chat completions response message.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | string | The content of the citation. |
| title | title | string | The title of the citation. |
| url | url | string | The URL of the citation. |
| filepath | filepath | string | The file path of the citation. |
| chunk\_id | chunk\_id | string | The chunk ID of the citation. |

### createChatCompletionResponse\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | A unique identifier for the chat completion. |
| object | object | chatCompletionResponseObject\_2024Feb15Preview | The object type. |
| created | created | integer | The Unix timestamp (in seconds) of when the chat completion was created. |
| model | model | string | The model used for the chat completion. |
| usage | usage | completionUsage\_2024Feb15Preview | Usage statistics for the completion request. |
| system\_fingerprint | system\_fingerprint | string | Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism. |
| prompt\_filter\_results | prompt\_filter\_results | promptFilterResults\_2024Feb15Preview | Content filtering results for zero or more prompts in the request. In a streaming request, results for different prompts may arrive at different times or in different orders. |
| choices | choices | array of object |  |
| index | choices.index | integer |  |
| finish\_reason | choices.finish\_reason | string |  |
| message | choices.message | chatCompletionResponseMessage\_2024Feb15Preview | A chat completion message generated by the model. |
| content\_filter\_results | choices.content\_filter\_results | contentFilterChoiceResults\_2024Feb15Preview | Information about the content filtering category (hate, sexual, violence, self\_harm), if it has been detected, as well as the severity level (very\_low, low, medium, high-scale that determines the intensity and risk level of harmful content) and if it has been filtered or not. Information about third party text and profanity, if it has been detected, and if it has been filtered or not. And information about customer block list, if it has been filtered and its id. |
| logprobs | choices.logprobs | chatCompletionChoiceLogProbs\_2024Feb15Preview | Log probability information for the choice. |

### chatCompletionChoiceLogProbs\_2024Feb15Preview

Log probability information for the choice.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| content | content | array of chatCompletionTokenLogprob\_2024Feb15Preview | A list of message content tokens with log probability information. |

### chatCompletionTokenLogprob\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| token | token | string | The token. |
| logprob | logprob | number | The log probability of this token. |
| bytes | bytes | array of integer | A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. |
| top\_logprobs | top\_logprobs | array of object | List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. |
| token | top\_logprobs.token | string | The token. |
| logprob | top\_logprobs.logprob | number | The log probability of this token. |
| bytes | top\_logprobs.bytes | array of integer | A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. |

### chatCompletionResponseMessage\_2024Feb15Preview

A chat completion message generated by the model.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| role | role | chatCompletionResponseMessageRole\_2024Feb15Preview | The role of the author of the response message. |
| content | content | string | The contents of the message. |
| context | context | azureChatExtensionsMessageContext\_2024Feb15Preview | A representation of the additional context information available when Azure OpenAI chat extensions are involved in the generation of a corresponding chat completions response. This context information is only populated when using an Azure OpenAI request configured to use a matching extension. |

### chatCompletionResponseMessageRole\_2024Feb15Preview

The role of the author of the response message.

The role of the author of the response message.

    - string

### chatCompletionResponseObject\_2024Feb15Preview

The object type.

The object type.

    - string

### completionUsage\_2024Feb15Preview

Usage statistics for the completion request.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| prompt\_tokens | prompt\_tokens | integer | Number of tokens in the prompt. |
| completion\_tokens | completion\_tokens | integer | Number of tokens in the generated completion. |
| total\_tokens | total\_tokens | integer | Total number of tokens used in the request (prompt + completion). |

### getSingleEmbeddingsResponse\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| object | object | string | Details of the response object type |
| model | model | string | The model name |
| embedding | embedding | array of number | An array of floats that represent the computed embeddings for the given inputs |
| prompt\_tokens | usage.prompt\_tokens | integer | The number of tokens used in the input |
| total\_tokens | usage.total\_tokens | integer | The total tokens used |

### getMultipleEmbeddingsResponse\_2024Feb15Preview

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| object | object | string | Details of the response object type |
| model | model | string | The model name |
| embeddings | embeddings | array of array | An array with arrays of floats representing the input string collection's computed embeddings |
| items | embeddings | array of number |  |
| prompt\_tokens | usage.prompt\_tokens | integer | The number of tokens used in the input |
| total\_tokens | usage.total\_tokens | integer | The total tokens used |