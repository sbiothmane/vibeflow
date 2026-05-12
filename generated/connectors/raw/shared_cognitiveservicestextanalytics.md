---
layout: Reference
title: Azure Cognitive Service for Language - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/cognitiveservicestextanalytics/
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
document_id: 64160c9c-a479-fbb8-a327-ffec020d2844
document_version_independent_id: 6b9aaa77-a180-3c07-e3a3-9c3be9623c4a
updated_at: 2026-04-09T19:04:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/CognitiveServicesTextAnalytics/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/f7be96830f27ff20c9beaa60e4be74378750ef16/docs/CognitiveServicesTextAnalytics/index.yml
git_commit_id: f7be96830f27ff20c9beaa60e4be74378750ef16
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: cognitiveservicestextanalytics/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/CognitiveServicesTextAnalytics/index.yml
cmProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/c6f99e62-1cf6-4b71-af9b-649b05f80cce
spProducts:
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3f56b378-07a9-4fa1-afe8-9889fdc77628
platformId: 82252c51-a8c9-ba3d-eab7-d95710042eca
---

# Azure Cognitive Service for Language

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1777/1.0.1777.4434/cognitiveservicestextanalytics/icon.png)
Azure Cognitive Service for Language, previously known as 'Text Analytics' connector detects language, sentiment and more of the text you provide.

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | https://gallery.cortanaanalytics.com/MachineLearningAPI/Text-Analytics-2 |
| Email | mlapi@microsoft.com |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://azure.microsoft.com/services/cognitive-services/text-analytics/ |

Note

This connector was previously known as "Text Analytics" or "Microsoft Cognitive Services Text Analytics".

To use this integration, you will need a [Cognitive Service resource](/en-us/azure/cognitive-services/cognitive-services-apis-create-account) in the Azure portal. You will get an endpoint and a key for authenticating your applications. To make a connection, provide the Account key, site URL and select **Create connection**. For operation costs on your connection, learn more [here](https://azure.microsoft.com/pricing/details/cognitive-services).

You're now ready to start using this integration.

## Connecting with Microsoft Entra ID

To create connections with Microsoft Entra ID, you must add the Cognitive Services User role to your account to access. To use this connection, you must input the unique subdomain associated wih your Cognitive Services resource into the supporting operations.

### Operations not supported with Microsoft Entra ID authentication

When using Microsoft Entra ID authentication **only V4 actions are supported**. Deprecated actions will continue to work with `Access Key` authentication, but **will fail if used with an Microsoft Entra ID connection**.

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Api Key | ApiKey | All regions | Shareable |
| Default [DEPRECATED] | This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility. | All regions | Not shareable |

### Api Key

Auth ID: keyBasedAuth

Applicable: All regions

ApiKey

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account Key | securestring | Cognitive Services Account Key | True |
| Site URL | string | Root site url (Example: https://westus.api.cognitive.microsoft.com) |  |

### Default [DEPRECATED]

Applicable: All regions

This option is only for older connections without an explicit authentication type, and is only provided for backward compatibility.

This is not shareable connection. If the power app is shared with another user, another user will be prompted to create new connection explicitly.

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| Account Key | securestring | Cognitive Services Account Key | True |
| Site URL | string | Root site url (Example: https://westus.api.cognitive.microsoft.com). If not specified, site url will be defaulted to https://westus.api.cognitive.microsoft.com. |  |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Async AbstractiveSummarization (2022-10-01-preview) | Submit a collection of text documents for abstractive summarization |
| --- | --- |
| Async Conversation PII (text) (2022-05-15-preview) | Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. |
| Async Conversation PII (transcript) (2022-05-15-preview) | Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. |
| Async Conversation Summarization (2022-05-15-preview) | Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed. |
| Async CustomEntityRecognition (2022-05-01) | Submit a collection of text documents for custom entity recognition analysis. |
| Async CustomMultiLabelClassification (2022-05-01) | Submit a collection of text documents for custom single classification analysis. |
| Async CustomSingleLabelClassification (2022-05-01) | Submit a collection of text documents for custom single classification analysis. |
| Async EntityLinking (2022-05-01) | Submit a collection of text documents for entity linking analysis. |
| Async EntityRecognition (2022-05-01) | Submit a collection of text documents for entity recognition analysis. |
| Async ExtractiveSummarization (2022-10-01-preview) | Submit a collection of text documents for extractive summarization |
| Async Healthcare (2022-05-01) | Submit a collection of text documents for health care analysis. |
| Async KeyPhrases (2022-05-01) | Submit a collection of text documents for key phrase extraction analysis. |
| Async PiiEntityRecognition (2022-05-01) | Submit a collection of text documents for personal entity recognition analysis. |
| Async SentimentAnalysis (2022-05-01) | Submit a collection of text documents for sentiment analysis. |
| Conversations (CLU) (2022-05-01) | Analyzes the input conversation utterance. |
| Conversations (Orchestration) (2022-05-01) | Analyzes the input conversation utterance. |
| Detect Entities (V2) [DEPRECATED] | This action has been deprecated. Please use [Named Entity Recognition (V4)](/en-us/connectors/cognitiveservicestextanalytics/#named-entity-recognition-%28v4%29) instead.<br><br>~~Returns a list of known entities and general named entities ("Person", "Location", "Organization" etc) in a given document.~~ |
| Detect Language (V2) [DEPRECATED] | This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.<br><br>~~Returns the detected language and a numeric score between 0 and 1 for each document. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~ |
| Detect Language (V3.0) | The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages. |
| Detect Language (V3.1) (Preview) | The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages. |
| Detect Language (V4) (Preview) | The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages. |
| Detect Language [DEPRECATED] | This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.<br><br>~~Returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~ |
| Detect Language [DEPRECATED] | This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.<br><br>~~Returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~ |
| Detect Personal Information (V3.1) | The API returns a list of entities with personal information ("SSN", "Bank Account" etc) in the document. For the list of supported entity types, check [Supported Personally Identifiable Information (PII) entity categories](https://aka.ms/tapii). See the [Supported languages in Azure Cognitive Service for Language](https://aka.ms/talangs) for the list of supported languages. |
| Detect Personal Information (V4) (Preview) | The API returns a list of entities with personal information ("SSN", "Bank Account" etc) in the document. For the list of supported entity types, check [Supported Personally Identifiable Information (PII) entity categories](https://aka.ms/tapii). See the [Supported languages in Azure Cognitive Service for Language](https://aka.ms/talangs) for the list of supported languages. |
| Detect Sentiment (V2) [DEPRECATED] | This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.<br><br>~~Returns a numeric score between 0 and 1 for each document. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. ~~ |
| Detect Sentiment [DEPRECATED] | This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.<br><br>~~Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Currently, the following languages are supported: English, Spanish, French, Portuguese.~~ |
| Detect Sentiment [DEPRECATED] | This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.<br><br>~~Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. ~~ |
| Entities [DEPRECATED] | This action has been deprecated. Please use [Named Entity Recognition (V4)](/en-us/connectors/cognitiveservicestextanalytics/#named-entity-recognition-%28v4%29) instead.<br><br>~~Returns a list of known entities and general named entities ("Person", "Location", "Organization" etc) in a given document.~~ |
| Entity Linking (V3.0) | The API returns a list of recognized entities with links to a well-known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages. |
| Entity Linking (V3.1) (Preview) | The API returns a list of recognized entities with links to a well known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages. |
| Entity Linking (V4) (Preview) | The API returns a list of recognized entities with links to a well known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages. |
| Generate answer from Project | This action helps in answering the specified question using your knowledge base in your project. |
| Key Phrases (V2) [DEPRECATED] | This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.<br><br>~~Returns a list of strings denoting the key talking points in the input text for each document.~~ |
| Key Phrases (V3.0) | The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages. |
| Key Phrases (V3.1) (Preview) | The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages. |
| Key Phrases (V4) (Preview) | The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages. |
| Key Phrases [DEPRECATED] | This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.<br><br>~~Returns a list of strings denoting the key talking points in the input text. Currently, the following languages are supported: English, German, Spanish and Japanese.~~ |
| Key Phrases [DEPRECATED] | This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.<br><br>~~Returns a list of strings denoting the key talking points in the input text.~~ |
| Named Entity Recognition (V3.0) | The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner). |
| Named Entity Recognition (V3.1) (Preview) | The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner). |
| Named Entity Recognition (V4) (Preview) | The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner). |
| Sentiment (V3.0) | The API returns a sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral) for the document and each sentence within it. See the [Sentiment Analysis and Opinion Mining language support](https://aka.ms/tasentiment) for the list of supported languages. |
| Sentiment (V3.1) (Preview) | The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple levels of granularity, start from the a document level, down to sentence and key terms (targets and assessments). |
| Sentiment (V4) (Preview) | The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple levels of granularity, start from the a document level, down to sentence and key terms (targets and assessments). |

### Async AbstractiveSummarization (2022-10-01-preview)

- Operation ID:
    - AnalyzeText\_SubmitJob\_AbstractiveSummarization

Submit a collection of text documents for abstractive summarization

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| sentenceCount | sentenceCount |  | integer | It controls the approximate number of sentences in the output summaries. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_AbstractiveSummarization

### Async Conversation PII (text) (2022-05-15-preview)

- Operation ID:
    - AnalyzeConversationText\_SubmitJob

Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | The ID of a conversation item. |
| participantId | participantId | True | string | The participant ID of a conversation item. |
| language | language |  | string | The override language of a conversation item in BCP 47 language representation. |
| role | role |  | string | The role of the participant. |
| text | text | True | string | The text input |
| language | language | True | string | The language of the conversation item in BCP-47 format. |
| domain | domain |  | string | Enumeration of supported conversational domains. |
| loggingOptOut | loggingOptOut |  | boolean |  |
| piiCategories | piiCategories |  | array of string | Describes the PII categories to return for detection. If not provided, 'default' categories will be returned which will vary with the language. |

#### Returns

Contains the status of the analyze conversations job submitted along with related statistics.

- Body
    - ConversationalPIITextJobState

### Async Conversation PII (transcript) (2022-05-15-preview)

- Operation ID:
    - AnalyzeConversationTranscript\_SubmitJob

Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | The ID of a conversation item. |
| participantId | participantId | True | string | The participant ID of a conversation item. |
| language | language |  | string | The override language of a conversation item in BCP 47 language representation. |
| role | role |  | string | The role of the participant. |
| itn | itn |  | string | Inverse Text Normalization representation of input. The inverse-text-normalized form is the recognized text from Microsoft’s Speech to Text API, with phone numbers, numbers, abbreviations, and other transformations applied. |
| maskedItn | maskedItn |  | string | The Inverse Text Normalized format with profanity masking applied. |
| text | text |  | string | The display form of the recognized text from speech to text API, with punctuation and capitalization added. |
| lexical | lexical |  | string | The lexical form of the recognized text from speech to text API with the actual words recognized. |
| word | word |  | string | The word recognized. |
| offset | offset |  | integer | Offset from start of speech audio, in ticks. 1 tick = 100 ns. |
| duration | duration |  | integer | Duration of word articulation, in ticks. 1 tick = 100 ns. |
| language | language | True | string | The language of the conversation item in BCP-47 format. |
| domain | domain |  | string | Enumeration of supported conversational domains. |
| loggingOptOut | loggingOptOut |  | boolean |  |
| piiCategories | piiCategories |  | array of string | Describes the PII categories to return for detection. If not provided, 'default' categories will be returned which will vary with the language. |
| includeAudioRedaction | includeAudioRedaction |  | boolean | Flag to indicate if audio redaction is requested. By default audio redaction will not be performed. |
| redactionSource | redactionSource |  | string | Enumeration of supported transcript content types. |

#### Returns

Contains the status of the analyze conversations job submitted along with related statistics.

- Body
    - ConversationalPIITranscriptJobState

### Async Conversation Summarization (2022-05-15-preview)

- Operation ID:
    - AnalyzeConversationSummarization\_SubmitJob

Submit a collection of conversations for analysis. Specify one or more unique tasks to be executed.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | The ID of a conversation item. |
| participantId | participantId | True | string | The participant ID of a conversation item. |
| language | language |  | string | The override language of a conversation item in BCP 47 language representation. |
| role | role |  | string | The role of the participant. |
| text | text | True | string | The text input |
| language | language | True | string | The language of the conversation item in BCP-47 format. |
| domain | domain |  | string | Enumeration of supported conversational domains. |
| loggingOptOut | loggingOptOut |  | boolean |  |
| summaryAspects | summaryAspects | True | array of string |  |

#### Returns

Contains the status of the analyze conversations job submitted along with related statistics.

- Body
    - AnalyzeConversationSummarizationJobState

### Async CustomEntityRecognition (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_CustomEntityRecognition

Submit a collection of text documents for custom entity recognition analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| projectName | projectName | True | string | This field indicates the project name for the model. |
| deploymentName | deploymentName | True | string | This field indicates the deployment name for the model. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_CNER

### Async CustomMultiLabelClassification (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_CustomMultiClassification

Submit a collection of text documents for custom single classification analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| projectName | projectName | True | string | This field indicates the project name for the model. |
| deploymentName | deploymentName | True | string | This field indicates the deployment name for the model. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_CMLC

### Async CustomSingleLabelClassification (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_CustomSingleClassification

Submit a collection of text documents for custom single classification analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| projectName | projectName | True | string | This field indicates the project name for the model. |
| deploymentName | deploymentName | True | string | This field indicates the deployment name for the model. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_CSLC

### Async EntityLinking (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_EntityLinking

Submit a collection of text documents for entity linking analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_EntityLinking

### Async EntityRecognition (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_EntityRecognition

Submit a collection of text documents for entity recognition analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_Entites

### Async ExtractiveSummarization (2022-10-01-preview)

- Operation ID:
    - AnalyzeText\_SubmitJob\_ExtractiveSummarization

Submit a collection of text documents for extractive summarization

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| sentenceCount | sentenceCount |  | integer |  |
| sortBy | sortBy |  | string | The sorting criteria to use for the results of Extractive Summarization. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_ExtractiveSummarization

### Async Healthcare (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_HealthCare

Submit a collection of text documents for health care analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_HealthCare

### Async KeyPhrases (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_keyPhraseExtraction

Submit a collection of text documents for key phrase extraction analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| loggingOptOut | loggingOptOut |  | boolean |  |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_KPE

### Async PiiEntityRecognition (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_PersonalEntityRecognition

Submit a collection of text documents for personal entity recognition analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| domain | domain |  | string | The PII domain used for PII Entity Recognition. |
| piiCategories | piiCategories |  | array of string | (Optional) describes the PII categories to return |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_Pii

### Async SentimentAnalysis (2022-05-01)

- Operation ID:
    - AnalyzeText\_SubmitJob\_SentimentAnalysis

Submit a collection of text documents for sentiment analysis.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |
| opinionMining | opinionMining |  | boolean |  |

#### Returns

- Body
    - LanguageAnalyzeTextJobState_Sentiment

### Conversations (CLU) (2022-05-01)

- Operation ID:
    - ConversationAnalysis\_AnalyzeConversation\_Conversation

Analyzes the input conversation utterance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| language | language |  | string | The override language of a conversation item in BCP 47 language representation. |
| text | text | True | string | The text input |
| projectName | projectName | True | string | The name of the project to use. |
| deploymentName | deploymentName | True | string | The name of the deployment to use. |
| verbose | verbose |  | boolean | If true, the service will return more detailed information in the response. |

#### Returns

The results of a Conversation task.

- Body
    - ConversationalTaskResult

### Conversations (Orchestration) (2022-05-01)

- Operation ID:
    - ConversationAnalysis\_AnalyzeConversation\_Orchestration

Analyzes the input conversation utterance.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| language | language |  | string | The override language of a conversation item in BCP 47 language representation. |
| text | text | True | string | The text input |
| projectName | projectName | True | string | The name of the project to use. |
| deploymentName | deploymentName | True | string | The name of the deployment to use. |
| verbose | verbose |  | boolean | If true, the service will return more detailed information in the response. |
| directTarget | directTarget |  | string | The name of a target project to forward the request to. |
| targetProjectParameters | targetProjectParameters |  | object | A dictionary representing the parameters for each target project. |

#### Returns

The results of a Conversation task.

- Body
    - ConversationalTaskResult_Orchestration

### Detect Entities (V2) [DEPRECATED]

- Operation ID:
    - DetectEntitiesV2

This action has been deprecated. Please use [Named Entity Recognition (V4)](/en-us/connectors/cognitiveservicestextanalytics/#named-entity-recognition-%28v4%29) instead.

~~Returns a list of known entities and general named entities ("Person", "Location", "Organization" etc) in a given document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Id | id | True | string | Unique, non-empty document identifier. |
| Text | text | True | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - EntitiesResults

### Detect Language (V2) [DEPRECATED]

- Operation ID:
    - DetectLanguageV3

This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.

~~Returns the detected language and a numeric score between 0 and 1 for each document. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Id | id | True | string | Unique, non-empty document identifier. |
| Text | text | True | string | The text to analyze. |

#### Returns

- Body
    - LanguageResults

### Detect Language (V3.0)

- Operation ID:
    - LanguagesV3

The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| Show Statistics | showStats |  | boolean | (Optional) if set to true, response will contain input and document level statistics. |
| id | id | True | string | Unique, non-empty document identifier. |
| text | text | True | string |  |
| countryHint | countryHint |  | string |  |

#### Returns

- Body
    - LanguageResultV3

### Detect Language (V3.1) (Preview)

- Operation ID:
    - LanguagesV3\_1

The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| id | id | True | string | Unique, non-empty document identifier. |
| text | text | True | string |  |
| countryHint | countryHint |  | string |  |

#### Returns

- Body
    - LanguageResult

### Detect Language (V4) (Preview)

- Operation ID:
    - LanguagesV4

The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the [Language support for Language Detection](https://aka.ms/tadetectlanguage) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| id | id | True | string | Unique, non-empty document identifier. |
| text | text | True | string |  |
| countryHint | countryHint |  | string |  |

#### Returns

- Body
    - LanguageResult

### Detect Language [DEPRECATED]

- Operation ID:
    - DetectLanguage

This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.

~~Returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Number of languages | numberOfLanguagesToDetect |  | integer | The number of languages to detect. Set to 1 by default. |

#### Returns

- Body
    - LanguageResult

### Detect Language [DEPRECATED]

- Operation ID:
    - DetectLanguageV2

This action has been deprecated. Please use [Detect Language (V4)](/en-us/connectors/cognitiveservicestextanalytics/#detect-language-%28v4%29) instead.

~~Returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |

#### Returns

- Body
    - LanguageResult

### Detect Personal Information (V3.1)

- Operation ID:
    - EntitiesRecognitionPIIV3\_1

The API returns a list of entities with personal information ("SSN", "Bank Account" etc) in the document. For the list of supported entity types, check [Supported Personally Identifiable Information (PII) entity categories](https://aka.ms/tapii). See the [Supported languages in Azure Cognitive Service for Language](https://aka.ms/talangs) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| domain | domain |  | string | (Optional) if specified, will set the PII domain to include only a subset of the entity categories. Possible values include: 'PHI', 'none'. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| piiCategories | piiCategories |  | array | (Optional) describes the PII categories to return |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - PiiResult

### Detect Personal Information (V4) (Preview)

- Operation ID:
    - EntitiesRecognitionPIIV4

The API returns a list of entities with personal information ("SSN", "Bank Account" etc) in the document. For the list of supported entity types, check [Supported Personally Identifiable Information (PII) entity categories](https://aka.ms/tapii). See the [Supported languages in Azure Cognitive Service for Language](https://aka.ms/talangs) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| domain | domain |  | string | (Optional) if specified, will set the PII domain to include only a subset of the entity categories. Possible values include: 'PHI', 'none'. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| piiCategories | piiCategories |  | array | (Optional) describes the PII categories to return |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - PiiResult

### Detect Sentiment (V2) [DEPRECATED]

- Operation ID:
    - DetectSentimentV3

This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.

~~Returns a numeric score between 0 and 1 for each document. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. ~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Id | id | True | string | Unique, non-empty document identifier. |
| Text | text | True | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - SentimentResults

### Detect Sentiment [DEPRECATED]

- Operation ID:
    - DetectSentiment

This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.

~~Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Currently, the following languages are supported: English, Spanish, French, Portuguese.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - SentimentResult

### Detect Sentiment [DEPRECATED]

- Operation ID:
    - DetectSentimentV2

This action has been deprecated. Please use [Sentiment (V4)](/en-us/connectors/cognitiveservicestextanalytics/#sentiment-%28v4%29) instead.

~~Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. ~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - SentimentResult

### Entities [DEPRECATED]

- Operation ID:
    - DetectEntities

This action has been deprecated. Please use [Named Entity Recognition (V4)](/en-us/connectors/cognitiveservicestextanalytics/#named-entity-recognition-%28v4%29) instead.

~~Returns a list of known entities and general named entities ("Person", "Location", "Organization" etc) in a given document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - EntitiesResult

### Entity Linking (V3.0)

- Operation ID:
    - EntitiesLinkingV3

The API returns a list of recognized entities with links to a well-known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| Show Statistics | showStats |  | boolean | (Optional) if set to true, response will contain input and document level statistics. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntityLinkingResult

### Entity Linking (V3.1) (Preview)

- Operation ID:
    - EntitiesLinkingV3\_1

The API returns a list of recognized entities with links to a well known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntityLinkingResult

### Entity Linking (V4) (Preview)

- Operation ID:
    - EntitiesLinkingV4

The API returns a list of recognized entities with links to a well known knowledge base. See the [language support](https://aka.ms/talinking) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntityLinkingResult

### Generate answer from Project

- Operation ID:
    - GenerateAnswer

This action helps in answering the specified question using your knowledge base in your project.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Project Name | projectName | True | string | This is the Project name you want to use. |
| Question | question |  | string | User question to query against the project. |
| User ID | userId |  | string | Unique identifier for the user. |
| Top # | top |  | integer | Maximum number of answers to be returned for the question. |
| Confidence Threshold | confidenceScoreThreshold |  | float | Minimum threshold score for answers. Value ranges from 0 to 1. |
| Ranker type | rankerType |  | string | Type of ranker to be used. |
| QnA ID | qnaId |  | string | This is the exact QnA ID to fetch from project. |
| Previous QnA ID | previousQnaId |  | integer | Previous turn top answer result QnA ID. |
| Previous User Query | previousUserQuery |  | string | Previous user query. |
| key | key |  | string | Metadata Key from Metadata dictionary used in the QnA. |
| value | value |  | string | Metadata Value from Metadata dictionary used in the QnA. |
| Join Metadata with | logicalOperation |  | string | Set 'OR' or 'AND' for corresponding logical operation for metadata filters. |
| Source Filter | sourceFilter |  | string | Find QnAs that are associated with any of the given list of sources in project. |
| Join Filters with | logicalOperation |  | string | Logical operation used to join metadata filter with source filter. |
| Enable precise answer | enable |  | boolean | Enable or disable Answer Span prediction. |
| Confidence Threshold | confidenceScoreThreshold |  | float | Minimum threshold score required to include a precise answer, value ranges from 0 to 1. |
| Top # | topAnswersWithSpan |  | integer | Number of Top answers to be considered for precise answer prediction from 1 to 10. |
| Include Unstructured Sources | includeUnstructuredSources |  | boolean | Flag to enable query over unstructured sources. |
| Deployment Name | deploymentName | True | string | This is the specific deployment of the project you want to use. |
| API Version | api-version | True | string | This is the Client API version. |

#### Returns

Represents List of Question Answers.

- Body
    - AnswersResult

### Key Phrases (V2) [DEPRECATED]

- Operation ID:
    - KeyPhrasesV3

This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.

~~Returns a list of strings denoting the key talking points in the input text for each document.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Id | id | True | string | Unique, non-empty document identifier. |
| Text | text | True | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - KeyPhraseResults

### Key Phrases (V3.0)

- Operation ID:
    - KeyPhraseV3

The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| Show Statistics | showStats |  | boolean | (Optional) if set to true, response will contain input and document level statistics. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - KeyPhraseResultV3

### Key Phrases (V3.1) (Preview)

- Operation ID:
    - KeyPhraseV3\_1

The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - KeyPhraseResult

### Key Phrases (V4) (Preview)

- Operation ID:
    - KeyPhraseV4

The API returns a list of strings denoting the key phrases in the input text. See the [Language support for Key Phrase Extraction](https://aka.ms/takeyphrases) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - KeyPhraseResult

### Key Phrases [DEPRECATED]

- Operation ID:
    - KeyPhrases

This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.

~~Returns a list of strings denoting the key talking points in the input text. Currently, the following languages are supported: English, German, Spanish and Japanese.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - KeyPhraseResult

### Key Phrases [DEPRECATED]

- Operation ID:
    - KeyPhrasesV2

This action has been deprecated. Please use [Key Phrases (V4)](/en-us/connectors/cognitiveservicestextanalytics/#key-phrases-%28v4%29) instead.

~~Returns a list of strings denoting the key talking points in the input text.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Text | text |  | string | The text to analyze. |
| Language | language |  | string | This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc., |

#### Returns

- Body
    - KeyPhraseResult

### Named Entity Recognition (V3.0)

- Operation ID:
    - EntitiesRecognitionGeneralV3

The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| Show Statistics | showStats |  | boolean | (Optional) if set to true, response will contain input and document level statistics. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntitiesResultV3

### Named Entity Recognition (V3.1) (Preview)

- Operation ID:
    - EntitiesRecognitionGeneralV3\_1

The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntitiesResult

### Named Entity Recognition (V4) (Preview)

- Operation ID:
    - EntitiesRecognitionGeneralV4

The API returns a list of general named entities in a given document. For the list of supported entity types, check [Supported Named Entity Recognition (NER) entity categories](https://aka.ms/taner).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - EntitiesResult

### Sentiment (V3.0)

- Operation ID:
    - SentimentV3

The API returns a sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral) for the document and each sentence within it. See the [Sentiment Analysis and Opinion Mining language support](https://aka.ms/tasentiment) for the list of supported languages.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Model Version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| Show Statistics | showStats |  | boolean | (Optional) if set to true, response will contain input and document level statistics. |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - SentimentResponse

### Sentiment (V3.1) (Preview)

- Operation ID:
    - SentimentV3\_1

The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple levels of granularity, start from the a document level, down to sentence and key terms (targets and assessments).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| opinionMining | opinionMining |  | boolean | (Optional) if set to true, response will contain not only sentiment prediction but also opinion mining (aspect-based sentiment analysis) results. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - SentimentResponse

### Sentiment (V4) (Preview)

- Operation ID:
    - SentimentV4

The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple levels of granularity, start from the a document level, down to sentence and key terms (targets and assessments).

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Resource Subdomain or Region | subdomain | True | string | Azure subdomain or geographic region (e.g. westus) |
| model-version | model-version |  | string | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. |
| showStats | showStats |  | boolean | (Optional) if set to true, response will contain request and document level statistics. |
| loggingOptOut | loggingOptOut |  | boolean | (Optional) If set to true, you opt-out of having your text input logged for troubleshooting. By default, Azure Cognitive Service for Language logs your input text for 48 hours, solely to allow for troubleshooting issues in providing you with the Azure Cognitive Service for Language natural language processing functions. Setting this parameter to true, disables input logging and may limit our ability to remediate issues that occur. Please see Cognitive Services Compliance and Privacy notes at https://aka.ms/cs-compliance for additional details, and Microsoft Responsible AI principles at https://www.microsoft.com/en-us/ai/responsible-ai. |
| opinionMining | opinionMining |  | boolean | (Optional) if set to true, response will contain not only sentiment prediction but also opinion mining (aspect-based sentiment analysis) results. |
| stringIndexType | stringIndexType |  | string | (Optional) Specifies the method used to interpret string offsets. Defaults to Text Elements (Graphemes) according to Unicode v8.0.0. For additional information see https://aka.ms/text-analytics-offsets |
| id | id | True | string | A unique, non-empty document identifier. |
| text | text | True | string | The input text to process. |
| language | language |  | string | (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. |

#### Returns

- Body
    - SentimentResponse

## Definitions

### ConversationalPIITranscriptJobState

Contains the status of the analyze conversations job submitted along with related statistics.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| displayName | displayName | string |  |
| createdDateTime | createdDateTime | date-time |  |
| expirationDateTime | expirationDateTime | date-time |  |
| jobId | jobId | string |  |
| lastUpdatedDateTime | lastUpdatedDateTime | date-time |  |
| status | status | string |  |
| errors | errors | array of Error |  |
| nextLink | nextLink | string |  |
| statistics | statistics | ConversationRequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| completed | tasks.completed | integer | Count of tasks completed successfully. |
| failed | tasks.failed | integer | Count of tasks that failed. |
| inProgress | tasks.inProgress | integer | Count of tasks in progress currently. |
| total | tasks.total | integer | Total count of tasks submitted as part of the job. |
| taskResult | tasks.taskResult | ConversationalPIITranscriptResult | Result from the personally identifiable information detection and redaction operation performed on a list of conversations. |

### ConversationRequestStatistics

if showStats=true was specified in the request this field will contain information about the request payload.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documentsCount | documentsCount | integer | Number of documents submitted in the request. |
| validDocumentsCount | validDocumentsCount | integer | Number of valid documents. This excludes empty, over-size limit or non-supported languages documents. |
| erroneousDocumentsCount | erroneousDocumentsCount | integer | Number of invalid documents. This includes empty, over-size limit or non-supported languages documents. |
| transactionsCount | transactionsCount | integer | Number of transactions for the request. |
| conversationsCount | conversationsCount | integer | Number of conversations submitted in the request. |
| validConversationsCount | validConversationsCount | integer | Number of conversations documents. This excludes empty, over-size limit or non-supported languages documents. |
| erroneousConversationsCount | erroneousConversationsCount | integer | Number of invalid documents. This includes empty, over-size limit or non-supported languages documents. |

### ConversationalPIITranscriptResult

Result from the personally identifiable information detection and redaction operation performed on a list of conversations.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| lastUpdateDateTime | lastUpdateDateTime | date-time | The last updated time in UTC for the task. |
| status | status |  | The status of the task at the mentioned last update time. |
| taskName | taskName | string |  |
| kind | kind | ConversationalPIIResultsKind | Enumeration of supported Conversation Analysis task results. |
| results | results | ConversationPIITranscriptResults | The result from PII detection and redaction operation for each conversation. |

### ConversationalPIIResultsKind

Enumeration of supported Conversation Analysis task results.

### ConversationPIITranscriptResults

The result from PII detection and redaction operation for each conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| conversationItems | conversations.conversationItems | array of ConversationPIITranscriptItemResult | Enumeration of PII detection and redaction operation results for all the conversation items in a conversation. |
| id | conversations.id | string | Unique, non-empty conversation identifier. |
| warnings | conversations.warnings | array of InputWarning | Warnings encountered while processing document. |
| statistics | conversations.statistics | ConversationStatistics | If showStats=true was specified in the request this field will contain information about the conversation payload. |
| errors | errors | array of InputError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### InputError

Contains details of errors encountered during a job execution.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | The ID of the input. |
| error | error | Error | The error object. |

### InputWarning

Contains details of warnings encountered during a job execution.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Warning code. |
| message | message | string | Warning message. |
| targetRef | targetRef | string | A JSON pointer reference indicating the target object. |

### ConversationStatistics

If showStats=true was specified in the request this field will contain information about the conversation payload.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| transactionsCount | transactionsCount | integer | Number of text units for the request. |

### ConversationPIITranscriptItemResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| redactedContent | redactedContent | ConversationalPIITranscriptRedactedTranscriptContent | The transcript content response generated by the service with all necessary personally identifiable information redacted. |
| entities | entities | array of Entity |  |

### ConversationalPIITranscriptRedactedTranscriptContent

The transcript content response generated by the service with all necessary personally identifiable information redacted.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| itn | itn | string | The redacted output for inverse text normalized format input. |
| maskedItn | maskedItn | string | The redacted output for masked inverse text normalized format input. |
| text | text | string | The redacted output for text (Microsoft's Speech to Text 'display') format input. |
| lexical | lexical | string | The redacted output for lexical format input. |
| audioTimings | audioTimings | array of AudioTiming | The list of redacted audio segments. |

### AudioTiming

The audio timing information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| offset | offset | integer | Offset from start of speech audio, in ticks. 1 tick = 100 ns. |
| duration | duration | integer | Duration of word articulation, in ticks. 1 tick = 100 ns. |

### ConversationalPIITextJobState

Contains the status of the analyze conversations job submitted along with related statistics.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| displayName | displayName | string |  |
| createdDateTime | createdDateTime | date-time |  |
| expirationDateTime | expirationDateTime | date-time |  |
| jobId | jobId | string |  |
| lastUpdatedDateTime | lastUpdatedDateTime | date-time |  |
| status | status | string |  |
| errors | errors | array of Error |  |
| nextLink | nextLink | string |  |
| statistics | statistics | ConversationRequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| completed | tasks.completed | integer | Count of tasks completed successfully. |
| failed | tasks.failed | integer | Count of tasks that failed. |
| inProgress | tasks.inProgress | integer | Count of tasks in progress currently. |
| total | tasks.total | integer | Total count of tasks submitted as part of the job. |
| taskResult | tasks.taskResult | ConversationalPIITextResult | Result from the personally identifiable information detection and redaction operation performed on a list of conversations. |

### ConversationalPIITextResult

Result from the personally identifiable information detection and redaction operation performed on a list of conversations.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| lastUpdateDateTime | lastUpdateDateTime | date-time | The last updated time in UTC for the task. |
| status | status |  | The status of the task at the mentioned last update time. |
| taskName | taskName | string |  |
| kind | kind | ConversationalPIIResultsKind | Enumeration of supported Conversation Analysis task results. |
| results | results | ConversationPIITextResults | The result from PII detection and redaction operation for each conversation. |

### ConversationPIITextResults

The result from PII detection and redaction operation for each conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| conversationItems | conversations.conversationItems | array of ConversationPIITextItemResult | Enumeration of PII detection and redaction operation results for all the conversation items in a conversation. |
| id | conversations.id | string | Unique, non-empty conversation identifier. |
| warnings | conversations.warnings | array of InputWarning | Warnings encountered while processing document. |
| statistics | conversations.statistics | ConversationStatistics | If showStats=true was specified in the request this field will contain information about the conversation payload. |
| errors | errors | array of InputError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### ConversationPIITextItemResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string |  |
| redactedContent | redactedContent | ConversationalPIITranscriptRedactedTextContent | The transcript content response generated by the service with all necessary personally identifiable information redacted. |
| entities | entities | array of Entity |  |

### ConversationalPIITranscriptRedactedTextContent

The transcript content response generated by the service with all necessary personally identifiable information redacted.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The redacted output for text (Microsoft's Speech to Text 'display') format input. |

### AnalyzeConversationSummarizationJobState

Contains the status of the analyze conversations job submitted along with related statistics.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| displayName | displayName | string |  |
| createdDateTime | createdDateTime | date-time |  |
| expirationDateTime | expirationDateTime | date-time |  |
| jobId | jobId | string |  |
| lastUpdatedDateTime | lastUpdatedDateTime | date-time |  |
| status | status | string |  |
| errors | errors | array of Error |  |
| nextLink | nextLink | string |  |
| statistics | statistics | ConversationRequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| completed | tasks.completed | integer | Count of tasks completed successfully. |
| failed | tasks.failed | integer | Count of tasks that failed. |
| inProgress | tasks.inProgress | integer | Count of tasks in progress currently. |
| total | tasks.total | integer | Total count of tasks submitted as part of the job. |
| taskResult | tasks.taskResult | AnalyzeConversationSummarizationResult | Result for the summarization task on the conversation. |

### AnalyzeConversationSummarizationResult

Result for the summarization task on the conversation.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| lastUpdateDateTime | lastUpdateDateTime | date-time | The last updated time in UTC for the task. |
| status | status |  | The status of the task at the mentioned last update time. |
| taskName | taskName | string |  |
| kind | kind | ConversationalSummarizationResultsKind | Enumeration of supported Conversation Analysis task results. |
| results | results | SummaryResult |  |

### ConversationalSummarizationResultsKind

Enumeration of supported Conversation Analysis task results.

### SummaryResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| summaries | conversations.summaries | array of SummaryResultItem |  |
| id | conversations.id | string | Unique, non-empty conversation identifier. |
| warnings | conversations.warnings | array of InputWarning | Warnings encountered while processing document. |
| statistics | conversations.statistics | ConversationStatistics | If showStats=true was specified in the request this field will contain information about the conversation payload. |
| errors | errors | array of InputError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### SummaryResultItem

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| aspect | aspect | string |  |
| text | text | string |  |

### Error

The error object.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | ErrorCode | Human-readable error code. |
| message | message | string | A human-readable representation of the error. |
| target | target | string | The target of the error. |
| details | details | array of Error | An array of details about specific errors that led to this reported error. |
| innererror | innererror | InnerErrorModel | An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. |

### ErrorCode

Human-readable error code.

Human-readable error code.

    - string

### InnerErrorModel

An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | InnerErrorCode | Human-readable error code. |
| message | message | string | Error message. |
| details | details | object | Error details. |
| target | target | string | Error target. |
| innererror | innererror | InnerErrorModel | An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. |

### InnerErrorCode

Human-readable error code.

Human-readable error code.

    - string

### LanguageCustomEntitiesResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageEntitiesDocumentResult | Response by document |

### LanguageCustomLabelClassificationResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageClassificationDocumentResult | Response by document |

### LanguageClassificationResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| category | category | string | Classification type. |
| confidenceScore | confidenceScore | double | Confidence score between 0 and 1 of the recognized class. |

### LanguageClassificationDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| class | class | array of LanguageClassificationResult |  |
| id | id | string | Unique, non-empty document identifier. |

### LanguageHealthcareResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageHealthcareEntitiesDocumentResult |  |

### LanguageHealthcareEntitiesDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| entities | entities | array of LanguageHealthcareEntity | Healthcare entities. |
| relations | relations | array of LanguageHealthcareRelation | Healthcare entity relations. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageHealthcareEntity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | Entity text as appears in the request. |
| category | category | string | Healthcare Entity Category. |
| subcategory | subcategory | string | (Optional) Entity sub type. |
| offset | offset | integer | Start position for the entity text. Use of different 'stringIndexType' values can affect the offset returned. |
| length | length | integer | Length for the entity text. Use of different 'stringIndexType' values can affect the length returned. |
| confidenceScore | confidenceScore | double | Confidence score between 0 and 1 of the extracted entity. |
| assertion | assertion | LanguageHealthcareAssertion |  |
| name | name | string | Preferred name for the entity. Example: 'histologically' would have a 'name' of 'histologic'. |
| links | links | array of LanguageHealthcareEntityLink | Entity references in known data sources. |

### LanguageHealthcareRelation

Every relation is an entity graph of a certain relationType, where all entities are connected and have specific roles within the relation context.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| relationType | relationType | string | Type of relation. Examples include: `DosageOfMedication` or 'FrequencyOfMedication', etc. |
| entities | entities | array of LanguageHealthcareRelationEntity | The entities in the relation. |

### LanguageHealthcareAssertion

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| conditionality | conditionality | string | Describes any conditionality on the entity. |
| certainty | certainty | string | Describes the entities certainty and polarity. |
| association | association | string | Describes if the entity is the subject of the text or if it describes someone else. |

### LanguageHealthcareRelationEntity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| ref | ref | string | Reference link object, using a JSON pointer RFC 6901 (URI Fragment Identifier Representation), pointing to the entity . |
| role | role | string | Role of entity in the relationship. For example: 'CD20-positive diffuse large B-cell lymphoma' has the following entities with their roles in parenthesis: CD20 (GeneOrProtein), Positive (Expression), diffuse large B-cell lymphoma (Diagnosis). |

### LanguageHealthcareEntityLink

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| dataSource | dataSource | string | Entity Catalog. Examples include: UMLS, CHV, MSH, etc. |
| id | id | string | Entity id in the given source catalog. |

### LanguageSentimentResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageSentimentDocumentResult | Sentiment analysis per document. |

### LanguageSentimentDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sentiment | sentiment | string | Predicted sentiment for document (Negative, Neutral, Positive, or Mixed). |
| confidenceScores | confidenceScores | LanguageSentimentConfidenceScorePerLabel | Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. |
| sentences | sentences | array of LanguageSentenceSentiment | Sentence level sentiment analysis. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageSentimentConfidenceScorePerLabel

Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| positive | positive | double | Confidence score for positive sentiment |
| neutral | neutral | double | Confidence score for neutral sentiment |
| negative | negative | double | Confidence score for negative sentiment |

### LanguageSentenceSentiment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The sentence text. |
| sentiment | sentiment | string | The predicted Sentiment for the sentence. |
| confidenceScores | confidenceScores | LanguageSentimentConfidenceScorePerLabel | Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. |
| offset | offset | integer | The sentence offset from the start of the document. |
| length | length | integer | The length of the sentence. |
| targets | targets | array of LanguageSentenceTarget | The array of sentence targets for the sentence. |
| assessments | assessments | array of LanguageSentenceAssessment | The array of assessments for the sentence. |

### LanguageSentenceTarget

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sentiment | sentiment | string | Targeted sentiment in the sentence. |
| confidenceScores | confidenceScores | LanguageTargetConfidenceScoreLabel | Represents the confidence scores across all sentiment classes: positive and negative. |
| offset | offset | integer | The target offset from the start of the sentence. |
| length | length | integer | The length of the target. |
| text | text | string | The target text detected. |
| relations | relations | array of LanguageTargetRelation | The array of either assessment or target objects which is related to the target. |

### LanguageSentenceAssessment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sentiment | sentiment | string | Assessment sentiment in the sentence. |
| confidenceScores | confidenceScores | LanguageTargetConfidenceScoreLabel | Represents the confidence scores across all sentiment classes: positive and negative. |
| offset | offset | integer | The assessment offset from the start of the sentence. |
| length | length | integer | The length of the assessment. |
| text | text | string | The assessment text detected. |
| isNegated | isNegated | boolean | The indicator representing if the assessment is negated. |

### LanguageTargetRelation

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| relationType | relationType | string | The type related to the target. |
| ref | ref | string | The JSON pointer indicating the linked object. |

### LanguageTargetConfidenceScoreLabel

Represents the confidence scores across all sentiment classes: positive and negative.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| positive | positive | double | Confidence score for positive sentiment |
| negative | negative | double | Confidence score for negative sentiment |

### LanguageEntitiesResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageEntitiesDocumentResult | Response by document |

### LanguageEntitiesDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| entities | entities | array of LanguageEntity | Recognized entities in the document. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageEntity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | Entity text as appears in the request. |
| category | category | string | Entity type. |
| subcategory | subcategory | string | (Optional) Entity sub type. |
| offset | offset | integer | Start position for the entity text. Use of different 'stringIndexType' values can affect the offset returned. |
| length | length | integer | Length for the entity text. Use of different 'stringIndexType' values can affect the length returned. |
| confidenceScore | confidenceScore | double | Confidence score between 0 and 1 of the extracted entity. |

### LanguageEntityLinkingResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageLinkedEntitiesDocumentResult | Response by document |

### LanguageLinkedEntitiesDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| entities | entities | array of LanguageLinkedEntity | Recognized well known entities in the document. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageLinkedEntity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Entity Linking formal name. |
| matches | matches | array of LanguageMatch | List of instances this entity appears in the text. |
| language | language | string | Language used in the data source. |
| id | id | string | Unique identifier of the recognized entity from the data source. |
| url | url | string | URL for the entity's page from the data source. |
| dataSource | dataSource | string | Data source used to extract entity linking, such as Wiki/Bing etc. |
| bingId | bingId | string | Bing Entity Search API unique identifier of the recognized entity. |

### LanguageMatch

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| confidenceScore | confidenceScore | double | If a well known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned. |
| text | text | string | Entity text as appears in the request. |
| offset | offset | integer | Start position for the entity match text. |
| length | length | integer | Length for the entity match text. |

### LanguagePiiResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguagePiiEntitiesDocumentResult | Response by document |

### LanguagePiiEntitiesDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| redactedText | redactedText | string | Returns redacted text. |
| entities | entities | array of LanguageEntity | Recognized entities in the document. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageKeyPhraseResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageKeyPhrasesDocumentResult | Response by document |

### LanguageKeyPhrasesDocumentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| keyPhrases | keyPhrases | array of string | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. |
| id | id | string | Unique, non-empty document identifier. |

### LanguageAnalyzeTextJobState\_KPE

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageKeyPhraseExtractionLROResult |  |

### LanguageAnalyzeTextJobState\_CNER

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageCustomEntityRecognitionLROResult |  |

### LanguageAnalyzeTextJobState\_CSLC

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageCustomSingleLabelClassificationLROResult |  |

### LanguageAnalyzeTextJobState\_CMLC

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageCustomMultiLabelClassificationLROResult |  |

### LanguageAnalyzeTextJobState\_Entites

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageEntityRecognitionLROResult |  |

### LanguageAnalyzeTextJobState\_Pii

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguagePiiEntityRecognitionLROResult |  |

### LanguageAnalyzeTextJobState\_Sentiment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageSentimentLROResult |  |

### LanguageAnalyzeTextJobState\_HealthCare

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageHealthcareLROResult |  |

### LanguageAnalyzeTextJobState\_ExtractiveSummarization

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | ExtractiveSummarizationLROResult |  |

### LanguageAnalyzeTextJobState\_AbstractiveSummarization

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | AbstractiveSummarizationLROResult | An object representing the results for an Abstractive Summarization task. |

### LanguageAnalyzeTextJobState\_EntityLinking

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| taskResult | tasks.taskResult | LanguageEntityLinkingLROResult |  |

### LanguageEntityRecognitionLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageEntitiesResult |  |

### LanguageCustomEntityRecognitionLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageCustomEntitiesResult |  |

### LanguageCustomSingleLabelClassificationLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageCustomLabelClassificationResult |  |

### LanguageCustomMultiLabelClassificationLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageCustomLabelClassificationResult |  |

### LanguageEntityLinkingLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageEntityLinkingResult |  |

### LanguagePiiEntityRecognitionLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguagePiiResult |  |

### LanguageHealthcareLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageHealthcareResult |  |

### LanguageSentimentLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageSentimentResponse |  |

### LanguageKeyPhraseExtractionLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | LanguageKeyPhraseResult |  |

### LanguageDocumentWarning

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Warning message. |
| targetRef | targetRef | string | A JSON pointer reference indicating the target object. |

### DocumentError

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Document Id. |
| error | error | TextAnalyticsError |  |

### TextAnalyticsError

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Error message. |
| target | target | string | Error target. |
| innererror | innererror | InnerError |  |
| details | details | array of TextAnalyticsError | Details about specific errors that led to this reported error. |

### TextAnalyticsWarning

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Warning message. |
| targetRef | targetRef | string | A JSON pointer reference indicating the target object. |

### InnerError

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| code | code | string | Error code. |
| message | message | string | Error message. |
| details | details | object | Error details. |
| target | target | string | Error target. |
| innererror | innererror | InnerError |  |

### SentimentResponse

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of DocumentSentiment | Sentiment analysis per document. |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### DocumentSentiment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| sentiment | sentiment | string | Predicted sentiment for document (Negative, Neutral, Positive, or Mixed). |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |
| confidenceScores | confidenceScores | SentimentConfidenceScorePerLabel | Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. |
| sentences | sentences | array of SentenceSentiment | Sentence level sentiment analysis. |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |

### RequestStatistics

if showStats=true was specified in the request this field will contain information about the request payload.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documentsCount | documentsCount | integer | Number of documents submitted in the request. |
| validDocumentsCount | validDocumentsCount | integer | Number of valid documents. This excludes empty, over-size limit or non-supported languages documents. |
| erroneousDocumentsCount | erroneousDocumentsCount | integer | Number of invalid documents. This includes empty, over-size limit or non-supported languages documents. |
| transactionsCount | transactionsCount | integer | Number of transactions for the request. |

### DocumentStatistics

if showStats=true was specified in the request this field will contain information about the document payload.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| charactersCount | charactersCount | integer | Number of text elements recognized in the document. |
| transactionsCount | transactionsCount | integer | Number of transactions for the document. |

### SentimentConfidenceScorePerLabel

Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| positive | positive | double |  |
| neutral | neutral | double |  |
| negative | negative | double |  |

### SentenceSentiment

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The sentence text. |
| sentiment | sentiment | string | The predicted Sentiment for the sentence. |
| confidenceScores | confidenceScores | SentimentConfidenceScorePerLabel | Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. |
| offset | offset | integer | The sentence offset from the start of the document. |
| length | length | integer | The length of the sentence by Unicode standard. |

### DocumentEntities

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| entities | entities | array of Entity | Recognized entities in the document. |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |

### PiiDocumentEntities

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| redactedText | redactedText | string | Returns redacted text. |
| entities | entities | array of Entity | Recognized entities in the document. |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |

### Entity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | Entity text as appears in the request. |
| category | category | string | Entity type, such as Person/Location/Org/SSN etc |
| subcategory | subcategory | string | Entity sub type, such as Age/Year/TimeRange etc |
| offset | offset | integer | Start position (in Unicode characters) for the entity text. |
| length | length | integer | Length (in Unicode characters) for the entity text. |
| confidenceScore | confidenceScore | double | Confidence score between 0 and 1 of the extracted entity. |

### EntityLinkingResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of DocumentLinkedEntities | Response by document |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### DocumentLinkedEntities

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| entities | entities | array of LinkedEntity | Recognized well-known entities in the document. |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |

### LinkedEntity

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Entity Linking formal name. |
| matches | matches | array of Match | List of instances this entity appears in the text. |
| language | language | string | Language used in the data source. |
| id | id | string | Unique identifier of the recognized entity from the data source. |
| url | url | string | URL for the entity's page from the data source. |
| dataSource | dataSource | string | Data source used to extract entity linking, such as Wiki/Bing etc. |

### Match

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| confidenceScore | confidenceScore | double | If a well-known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned. |
| text | text | string | Entity text as appears in the request. |
| offset | offset | integer | Start position (in Unicode characters) for the entity match text. |
| length | length | integer | Length (in Unicode characters) for the entity match text. |

### DocumentKeyPhrases

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| keyPhrases | keyPhrases | array of string | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |

### DocumentLanguage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| id | id | string | Unique, non-empty document identifier. |
| detectedLanguage | detectedLanguage | DetectedLanguage |  |
| warnings | warnings | array of TextAnalyticsWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |

### DetectedLanguage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| name | name | string | Long name of a detected language (e.g. English, French). |
| iso6391Name | iso6391Name | string | A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr). |
| confidenceScore | confidenceScore | double | A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. |

### KeyPhraseResultV3

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of DocumentKeyPhrases | Response by document |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### EntitiesResultV3

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of DocumentEntities | Response by document |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### PiiResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of PiiDocumentEntities | Response by document |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### LanguageResultV3

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of DocumentLanguage | Response by document |
| errors | errors | array of DocumentError | Errors by document id. |
| statistics | statistics | RequestStatistics | if showStats=true was specified in the request this field will contain information about the request payload. |
| modelVersion | modelVersion | string | This field indicates which model is used for scoring. |

### KeyPhraseResults

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of KeyPhraseResult |  |

### EntitiesResults

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of EntitiesResult |  |

### LanguageResults

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of LanguageResult |  |

### SentimentResults

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of SentimentResult |  |

### KeyPhraseResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Key Phrases | keyPhrases | array of string | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. |
| Id | id | string | The unique document identifier. |

### EntitiesResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Entities | entities | array of object | A list of disambiguated entities with links to more information on the web (Wikipedia and Bing). |
| Name | entities.name | string | Name of the entity. |
| Matches | entities.matches | array of object | A list of matches for the entity. |
| items | entities.matches | object |  |
| Wikipedia Language | entities.wikipediaLanguage | string | Wikipedia language of the entity. |
| Wikipedia Id | entities.wikipediaId | string | Wikipedia Id of the entity. |
| Wikipedia Url | entities.wikipediaUrl | string | Wikipedia url of the entity. |
| Bing Id | entities.bingId | string | Bing Id of the entity. |
| Type | entities.type | string | Type of the entity. |
| Subtype | entities.subType | string | Subtype of the entity. |
| Id | id | string | The unique document identifier. |

### LanguageResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Id | id | string | The unique document identifier. |
| detectedLanguages | detectedLanguages | array of DetectedLanguageV2 | A list of extracted languages. |

### SentimentResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Score | score | double | A decimal number between 0 and 1 denoting the sentiment of the document. A score above 0.7 usually refers to a positive document while a score below 0.3 normally has a negative connotation. Mid values refer to neutral text. |
| Id | id | string | The unique document identifier. |

### DetectedLanguageV2

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Name | name | string | The long name of a detected language (e.g. English, French). |
| Language Code | iso6391Name | string | A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr). |
| Score | score | double | A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. |

### AnalyzeConversationTaskResultsKind

Enumeration of supported conversational task results

Enumeration of supported conversational task results

    - string

### ConversationalTaskResult

The results of a Conversation task.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| kind | kind | AnalyzeConversationTaskResultsKind | Enumeration of supported conversational task results |
| result | result | AnalyzeConversationResult | Represents a conversation analysis response. |

### ConversationalTaskResult\_Orchestration

The results of a Conversation task.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| kind | kind | AnalyzeConversationTaskResultsKind | Enumeration of supported conversational task results |
| result | result | AnalyzeConversationResult\_Orchestration | Represents a conversation analysis response. |

### AnalyzeConversationResult

Represents a conversation analysis response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| query | query | string | The conversation utterance given by the caller. |
| detectedLanguage | detectedLanguage | string | The system detected language for the query in BCP 47 language representation.. |
| prediction | prediction | ConversationPrediction | Represents the prediction section of a Conversation project. |

### AnalyzeConversationResult\_Orchestration

Represents a conversation analysis response.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| query | query | string | The conversation utterance given by the caller. |
| detectedLanguage | detectedLanguage | string | The system detected language for the query in BCP 47 language representation.. |
| prediction | prediction | OrchestrationPrediction | This represents the prediction result of an Orchestration project. |

### ConversationPrediction

Represents the prediction section of a Conversation project.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| intents | intents | array of ConversationIntent | The intent classification results. |
| entities | entities | array of ConversationEntity | The entity extraction results. |
| projectKind | projectKind | string | The type of the project. |
| topIntent | topIntent | string | The intent with the highest score. |

### ConversationIntent

The intent classification result of a Conversation project.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| category | category | string | A predicted class. |
| confidenceScore | confidenceScore | float | The confidence score of the class from 0.0 to 1.0. |

### ConversationEntity

The entity extraction result of a Conversation project.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| category | category | string | The entity category. |
| text | text | string | The predicted entity text. |
| offset | offset | integer | The starting index of this entity in the query. |
| length | length | integer | The length of the text. |
| confidenceScore | confidenceScore | float | The entity confidence score. |
| resolutions | resolutions | array of BaseResolution | The collection of entity resolution objects. |
| extraInformation | extraInformation | array of BaseExtraInformation | The collection of entity extra information objects. |
| topResolution | topResolution | BaseResolution | The abstract base class for entity resolutions. |
| multipleResolutions | multipleResolutions | boolean | The indicator representing if the resolutions array had multiple items. |

### BaseExtraInformation

The abstract base object for entity extra information.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| extraInformationKind | extraInformationKind | string | The extra information object kind. |

### BaseResolution

The abstract base class for entity resolutions.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| resolutionKind | resolutionKind | string | The entity resolution object kind. |

### OrchestrationPrediction

This represents the prediction result of an Orchestration project.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| intents | intents | object | A dictionary that contains all intents. A key is an intent name and a value is its confidence score and target type. The top intent's value also contains the actual response from the target project. |
| projectKind | projectKind | string | The type of the project. |
| topIntent | topIntent | string | The intent with the highest score. |

### ExtractiveSummarizationResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of ExtractedSummaryDocumentResultWithDetectedLanguage | Response by document |

### ExtractedSummaryDocumentResultWithDetectedLanguage

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| sentences | sentences | array of ExtractedSummarySentence | A ranked list of sentences representing the extracted summary. |
| detectedLanguage | detectedLanguage | DetectedLanguage |  |

### ExtractedSummarySentence

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The extracted sentence text. |
| rankScore | rankScore | double | A double value representing the relevance of the sentence within the summary. Higher values indicate higher importance. |
| offset | offset | integer | The sentence offset from the start of the document, based on the value of the parameter StringIndexType. |
| length | length | integer | The length of the sentence. |

### ExtractiveSummarizationLROResult

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | ExtractiveSummarizationResult |  |

### AbstractiveSummarizationLROResult

An object representing the results for an Abstractive Summarization task.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| results | results | AbstractiveSummarizationResult | An object representing the pre-build summarization results of each document. |

### AbstractiveSummarizationResult

An object representing the pre-build summarization results of each document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| documents | documents | array of AbstractiveSummaryDocumentResultWithDetectedLanguage | Response by document |

### AbstractiveSummaryDocumentResultWithDetectedLanguage

An object representing the summarization result of a single document with detected language.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| summaries | summaries | array of AbstractiveSummary | A list of abstractive summaries. |
| id | id | string | Unique, non-empty document identifier. |
| warnings | warnings | array of LanguageDocumentWarning | Warnings encountered while processing document. |
| statistics | statistics | DocumentStatistics | if showStats=true was specified in the request this field will contain information about the document payload. |
| detectedLanguage | detectedLanguage | DetectedLanguage |  |

### SummaryContext

The context of the summary.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| offset | offset | integer | Start position for the context. Use of different 'stringIndexType' values can affect the offset returned. |
| length | length | integer | The length of the context. Use of different 'stringIndexType' values can affect the length returned. |

### AbstractiveSummary

An object representing a single summary with context for given document.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | The text of the summary. |
| contexts | contexts | array of SummaryContext | The context list of the summary. |

### AnswersResult

Represents List of Question Answers.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| answers | answers | array of KnowledgeBaseAnswer | Represents Answer Result list. |
| isUserQuestionAmbiguous | isUserQuestionAmbiguous | boolean | Returns a boolean value if user's question was ambiguous. |

### KnowledgeBaseAnswer

Represents project answer.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| questions | questions | array of string | List of questions associated with the answer. |
| answer | answer | string | Answer text. |
| Confidence Threshold | confidenceScore | float | Answer confidence score, value ranges from 0 to 1. |
| QnA ID | id | integer | ID of the QnA result. |
| source | source | string | Source of QnA result. |
| metadata | metadata | object | Metadata associated with the answer, useful to categorize or filter question answers. |
| dialog | dialog | KnowledgeBaseAnswerDialog | Dialog associated with Answer. |
| answerSpan | answerSpan | AnswerSpan | Answer span object of QnA. |

### KnowledgeBaseAnswerDialog

Dialog associated with Answer.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| isContextOnly | isContextOnly | boolean | To mark if a prompt is relevant only with a previous question or not. If true, do not include this QnA as search result for queries without context; otherwise, if false, ignores context and includes this QnA in search result. |
| prompts | prompts | array of KnowledgeBaseAnswerPrompt | List of prompts associated with the answer. |

### KnowledgeBaseAnswerPrompt

Prompt for an answer.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| displayOrder | displayOrder | integer | Index of the prompt - used in ordering of the prompts. |
| qnaId | qnaId | integer | QnA ID corresponding to the prompt. |
| displayText | displayText | string | Text displayed to represent a follow up question prompt. |

### AnswerSpan

Answer span object of QnA.

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| text | text | string | Predicted text of precise answer. |
| Confidence Threshold | confidenceScore | float | Predicted score of precise answer, value ranges from 0 to 1. |
| offset | offset | integer | The Precise answer offset from the start of answer. |
| length | length | integer | The length of the precise answer. |