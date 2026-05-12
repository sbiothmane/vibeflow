---
layout: Reference
title: Bing Maps - Connectors | Microsoft Learn
canonicalUrl: https://learn.microsoft.com/en-us/connectors/bingmaps/
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
document_id: 7ceeb123-8398-c312-617e-0c40cc85cd05
document_version_independent_id: 4f59f3b8-b4df-bb22-d0cc-6c5bac66abf2
updated_at: 2025-11-25T19:00:00.0000000Z
original_content_git_url: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/live/docs/BingMaps/index.yml
gitcommit: https://github.com/MicrosoftDocs/BusinessApplicationPlatform-Connectors/blob/1c76f0da18c92ed9c3f2ce0dafe5bca077e0fd61/docs/BingMaps/index.yml
git_commit_id: 1c76f0da18c92ed9c3f2ce0dafe5bca077e0fd61
site_name: Docs
depot_name: MSDN.businessplatform-connectors
page_type: powerconnector
toc_rel: ../toc.json
feedback_product_url: ''
feedback_help_link_type: ''
feedback_help_link_url: ''
asset_id: bingmaps/index
moniker_range_name: 
monikers: []
item_type: Content
source_path: docs/BingMaps/index.yml
cmProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/5bc9163f-0a3f-4ea9-8ac5-a1945a4c162f
- https://authoring-docs-microsoft.poolparty.biz/devrel/1ae5c491-970a-4062-8301-6336e69f9026
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/3c847666-7892-494c-aa0e-0bb3d16cc2cc
spProducts:
- https://authoring-docs-microsoft.poolparty.biz/devrel/8c929cae-d11e-42a1-8868-48f7e5aa7c42
- https://authoring-docs-microsoft.poolparty.biz/devrel/f2c3e52e-3667-4e8a-bf11-20b9eaccdc8c
- https://microsoft-devrel.poolparty.biz/DevRelOfferingOntology/e17fb6eb-4cdd-4a57-81df-0dfec430dfdd
platformId: 314d8eef-bf5a-90e9-1937-281b96022b3e
---

# Bing Maps

![](https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1783/1.0.1783.4453/bingmaps/icon.png)
Bing Maps

This connector is available in the following products and regions:

| Service | Class | Regions |
| --- | --- | --- |
| **Copilot Studio** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |
| **Logic Apps** | Standard | All [Logic Apps regions](https://azure.microsoft.com/global-infrastructure/services/?products=logic-apps&amp;regions=all) except the following:  - Azure China regions  - US Department of Defense (DoD) |
| **Power Apps** | Standard | All [Power Apps regions](/en-us/powerapps/administrator/regions-overview#what-regions-are-available) except the following:  - China Cloud operated by 21Vianet |
| **Power Automate** | Standard | All [Power Automate regions](/en-us/flow/regions-overview) except the following:  - China Cloud operated by 21Vianet |

| Contact | - |
| --- | --- |
| Name | Microsoft |
| URL | [Microsoft LogicApps Support](https://azure.microsoft.com/support/options/)[Microsoft Power Automate Support](http://make.powerautomate.com/support/)[Microsoft Power Apps Support](https://powerapps.microsoft.com/support/) |

| Connector Metadata | - |
| --- | --- |
| Publisher | Microsoft |
| Website | https://www.bing.com/maps/ |

## Creating a connection

The connector supports the following authentication types:

| - | - | - | - |
| --- | --- | --- | --- |
| Default | Parameters for creating connection. | All regions | Shareable |

### Default

Applicable: All regions

Parameters for creating connection.

This is shareable connection. If the power app is shared with another user, connection is shared as well. For more information, please see the [Connectors overview for canvas apps - Power Apps | Microsoft Docs](/en-us/powerapps/maker/canvas-apps/connections-list#security-and-types-of-authentication)

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| API Key | securestring | API Key | True |

## Throttling Limits

| Name | Calls | Renewal Period |
| --- | --- | --- |
| API calls per connection | 1200 | 60 seconds |

## Actions

| Get location by address | Get the location information associated with an address. If no location is found, an empty result will be returned. |
| --- | --- |
| Get location by point | Get the location information associated with latitude and longitude coordinates. |
| Get route | Calculate a route using waypoints. |
| Get route [DEPRECATED] | This action has been deprecated. Please use [Get route](/en-us/connectors/bingmaps/#get-route) instead.<br><br>~~Calculate a route using waypoints.~~ |
| Get route [DEPRECATED] | This action has been deprecated. Please use [Get route](/en-us/connectors/bingmaps/#get-route) instead.<br><br>~~Calculate a route using waypoints.~~ |
| Get static map | Get static map. |
| Get static map [DEPRECATED] | This action has been deprecated. Please use [Get static map](/en-us/connectors/bingmaps/#get-static-map) instead.<br><br>~~Get static map.~~ |

### Get location by address

- Operation ID:
    - GetLocationByAddress

Get the location information associated with an address. If no location is found, an empty result will be returned.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Address line | addressLine |  | string | A string specifying the street line of an address (not including city, country region, etc). |
| Locality (City) | locality |  | string | A string that contains the locality, such as a US city. |
| Admin district (State) | adminDistrict |  | string | A string that contains a subdivision, such as the abbreviation of a US state. |
| Postal code | postalCode |  | string | A string that contains the postal code, such as a US ZIP Code. |
| Country region | countryRegion |  | string | A string specifying the ISO country code. |

#### Returns

- Body
    - GetLocation_Response

### Get location by point

- Operation ID:
    - GetLocationByPoint

Get the location information associated with latitude and longitude coordinates.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Point Latitude | latitude | True | double | The latitude coordinate you want to reverse geocode. Example: 47.64054 |
| Point Longitude | longitude | True | double | The longitude coordinate you want to reverse geocode. Example: -122.12934 |
| Include Entity Types | includeEntityTypes |  | string | The entity types that you want to return in the response. |
| Include Neighborhood | includeNeighborhood |  | boolean | A value determining whether or not to include the neighborhood in the response when it is available. 0 or 1 |
| Include Country Code | include |  | boolean | A value determining whether or not to include the two-letter ISO country code. ciso2 |

#### Returns

- Body
    - GetLocation_Response

### Get route

- Operation ID:
    - GetRouteV3

Calculate a route using waypoints.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Waypoint 1 | wp.0 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Waypoint 2 | wp.1 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Avoid highways | avoid\_highways |  | boolean | Avoids the use of highways in the route. |
| Avoid tolls | avoid\_tolls |  | boolean | Avoids the use of toll roads in the route. |
| Avoid ferries | avoid\_ferry |  | boolean | Avoids the use of ferries in the route. |
| Minimize the use of highways | avoid\_minimizeHighways |  | boolean | Minimizes (tries to avoid) the use of highways in the route. |
| Minimize the use of toll roads | avoid\_minimizeTolls |  | boolean | Minimizes (tries to avoid) the use of toll roads in the route. |
| Avoid crossing country borders | avoid\_borderCrossing |  | boolean | Avoids crossing country borders in the route. |
| Optimize | optimize |  | string | Specifies what parameters to use to optimize the route. |
| Distance unit | distanceUnit |  | string | The units to use for distance in the response. Default: Kilometer |
| Travel mode | travelMode | True | string | The mode of travel for the route. Default: Driving |
| Transit Date-Time | dateTime |  | string | Required when the travel mode is transit. Identifies the desired transit time, such as arrival time or departure time. |
| Transit Date-Time Type | timeType |  | string | Required when the travel mode is transit. Specifies how to interpret the transit date-time value. |

#### Returns

- Body
    - GetRoute_Response

### Get route [DEPRECATED]

- Operation ID:
    - GetRoute

This action has been deprecated. Please use [Get route](/en-us/connectors/bingmaps/#get-route) instead.

~~Calculate a route using waypoints.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Waypoint 1 | wp.0 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Waypoint 2 | wp.1 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Avoid | avoid |  | string | A comma-separated list of values from the following list (highways, tolls, minimizeHighways, minimizeTolls). |
| Optimize | optimize |  | string | Specifies what parameters to use to optimize the route. |
| Distance unit | distanceUnit |  | string | The units to use for distance in the response. Default: Kilometer |
| Travel mode | travelMode |  | string | The mode of travel for the route. Default: Driving |
| Transit Date-Time | dateTime |  | string | Required when the travel mode is transit. Identifies the desired transit time, such as arrival time or departure time. |
| Transit Date-Time Type | timeType |  | string | Required when the travel mode is transit. Specifies how to interpret the transit date-time value. |

#### Returns

- Body
    - GetRoute_Response

### Get route [DEPRECATED]

- Operation ID:
    - GetRouteV2

This action has been deprecated. Please use [Get route](/en-us/connectors/bingmaps/#get-route) instead.

~~Calculate a route using waypoints.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Waypoint 1 | wp.0 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Waypoint 2 | wp.1 | True | string | Specified as a point, landmark, or address. (47.610,-122.107 or Seattle, WA) |
| Avoid highways | avoid\_highways |  | boolean | Avoids the use of highways in the route. |
| Avoid tolls | avoid\_tolls |  | boolean | Avoids the use of toll roads in the route. |
| Avoid ferries | avoid\_ferry |  | boolean | Avoids the use of ferries in the route. |
| Minimize the use of highways | avoid\_minimizeHighways |  | boolean | Minimizes (tries to avoid) the use of highways in the route. |
| Minimize the use of toll roads | avoid\_minimizeTolls |  | boolean | Minimizes (tries to avoid) the use of toll roads in the route. |
| Avoid crossing country borders | avoid\_borderCrossing |  | boolean | Avoids crossing country borders in the route. |
| Optimize | optimize |  | string | Specifies what parameters to use to optimize the route. |
| Distance unit | distanceUnit |  | string | The units to use for distance in the response. Default: Kilometer |
| Travel mode | travelMode |  | string | The mode of travel for the route. Default: Driving |
| Transit Date-Time | dateTime |  | string | Required when the travel mode is transit. Identifies the desired transit time, such as arrival time or departure time. |
| Transit Date-Time Type | timeType |  | string | Required when the travel mode is transit. Specifies how to interpret the transit date-time value. |

#### Returns

- Body
    - GetRoute_Response

### Get static map

- Operation ID:
    - GetMapV2

Get static map.

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Point latitude | latitude | True | double | The latitude coordinate you want to reverse geocode. Example: 47.64054 |
| Point longitude | longitude | True | double | The longitude coordinate you want to reverse geocode. Example: -122.12934 |
| Imagery set | imagerySet | True | string | The type of imagery. |
| Zoom level | zoomLevel | True | string | The level of zoom to display between 0 and 21. Default 10 |
| Image format | format |  | string | The image format to use for the static map. |
| Map size | mapSize |  | string | The width and height in pixels of the static map output. Example: 1000,600. |
| Pushpin latitude | pushpinLatitude |  | double | Specify pushpin latitude (more information https://aka.ms/u8b8aq). |
| Pushpin longitude | pushpinLongitude |  | double | Specify pushpin longitude (more information https://aka.ms/u8b8aq). |
| Pushpin icon style | pushpinIconStyle |  | integer | Specify pushpin icon style (more information https://aka.ms/u8b8aq). |
| Pushpin label | pushpinLabel |  | string | Specify a label of up to three (3) characters (more information https://aka.ms/u8b8aq). |

#### Returns

- response
    - GetMap_Response

### Get static map [DEPRECATED]

- Operation ID:
    - GetMap

This action has been deprecated. Please use [Get static map](/en-us/connectors/bingmaps/#get-static-map) instead.

~~Get static map.~~

#### Parameters

| Name | Key | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Point latitude | latitude | True | string | The latitude coordinate you want to reverse geocode. Example: 47.64054 |
| Point longitude | longitude | True | string | The longitude coordinate you want to reverse geocode. Example: -122.12934 |
| Imagery set | imagerySet | True | string | The type of imagery. |
| Zoom level | zoomLevel | True | string | The level of zoom to display between 0 and 21. Default 10 |
| Image format | format |  | string | The image format to use for the static map. |
| Map size | mapSize |  | string | The width and height in pixels of the static map output. Example: 1000,600. |
| Pushpin | pushpin |  | string | Point value (latitude and longitude) with options to add a label of up to three (3) characters and to specify an icon style. Example: 47.610,-122.107;5;P10 (more information https://aka.ms/u8b8aq). |

#### Returns

- response
    - GetMap_Response

## Definitions

### GetRoute\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Distance Unit | distanceUnit | string | The unit used for distance. |
| Duration Unit | durationUnit | string | The unit used for time of travel. |
| Latitude | routeLegs.actualEnd.coordinates.latitude | float | The latitude point that was used as the actual ending location for the route leg. |
| Longitude | routeLegs.actualEnd.coordinates.longitude | float | The longitude point that was used as the actual ending location for the route leg. |
| Combined | routeLegs.actualEnd.coordinates.combined | string | Comma separated latitude and longitude values. |
| Type | routeLegs.actualEnd.type | string |  |
| Latitude | routeLegs.actualStart.coordinates.latitude | float | The latitude that was used as the actual starting location for the route leg. |
| Longitude | routeLegs.actualStart.coordinates.longitude | float | The longitude that was used as the actual starting location for the route leg. |
| Combined | routeLegs.actualStart.coordinates.combined | string | Comma separated latitude and longitude values. |
| Type | routeLegs.actualStart.type | string |  |
| Description | routeLegs.description | string | A short description of the route. |
| Country Region | routeLegs.endLocation.address.countryRegion | string | Country or region name of an address. |
| Formatted Address | routeLegs.endLocation.address.formattedAddress | string | A string specifying the complete address. |
| Confidence | routeLegs.endLocation.confidence | string | The confidence of the match. |
| Entity Type | routeLegs.endLocation.entityType | string | A type of location. Examples include PopulatedPlace and Monument. |
| Name | routeLegs.endLocation.name | string |  |
| Region | routeLegs.routeRegion | string | routeRegion |
| Country Region | routeLegs.startLocation.address.countryRegion | string | Country or region name of an address. |
| Formatted Address | routeLegs.startLocation.address.formattedAddress | string | A string specifying the complete address. |
| Confidence | routeLegs.startLocation.confidence | string | The confidence of the match. |
| Entity Type | routeLegs.startLocation.entityType | string | A type of location. Examples include PopulatedPlace and Monument. |
| Name | routeLegs.startLocation.name | string | name |
| Traffic Congestion | trafficCongestion | string |  |
| Traffic Data Used | trafficDataUsed | string |  |
| Travel Distance | travelDistance | float | The physical distance covered by the entire route. |
| Travel Duration | travelDuration | integer | The time that it takes, in seconds, to travel a corresponding travel distance. |
| Travel Duration Traffic | travelDurationTraffic | integer | The time that it takes, in seconds, to travel a corresponding TravelDistance with current traffic conditions. |

### GetLocation\_Response

| Name | Path | Type | Description |
| --- | --- | --- | --- |
| Line | address.addressLine | string | The official street line of an address. |
| Country Region | address.countryRegion | string | Country or region name of an address. |
| Country Region ISO 2 | address.countryRegionIso2 | string | The two-letter ISO country code. |
| Formatted Address | address.formattedAddress | string | A string specifying the complete address. |
| Postal Code | address.postalCode | string | The post code, postal code, or ZIP Code of an address. |
| Confidence | confidence | string | The confidence of the match. |
| Entity Type | entityType | string | A type of location. Examples include PopulatedPlace and Monument. |
| Name | name | string |  |
| Latitude | point.coordinates.latitude | float | The latitude point that was used for the location. |
| Longitude | point.coordinates.longitude | float | The longitude point that was used for the location. |
| Combined | point.coordinates.combined | string | Comma separated latitude and longitude values. |
| Type | point.type | string | type |

### GetMap\_Response

- Map Image
    - binary