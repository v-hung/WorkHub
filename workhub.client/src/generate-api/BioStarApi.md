# .BioStarApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bioStarGetWebSocketState**](BioStarApi.md#bioStarGetWebSocketState) | **GET** /websocket-state | 
[**bioStarReConnectWebsocket**](BioStarApi.md#bioStarReConnectWebsocket) | **POST** /reconnect-websocket | 
[**bioStarSyncTimesheets**](BioStarApi.md#bioStarSyncTimesheets) | **POST** /sync-timesheets | 
[**bioStarSyncUsers**](BioStarApi.md#bioStarSyncUsers) | **POST** /sync-users | 


# **bioStarGetWebSocketState**
> WebSocketState bioStarGetWebSocketState()


### Example


```typescript
import { createConfiguration, BioStarApi } from '';

const configuration = createConfiguration();
const apiInstance = new BioStarApi(configuration);

const request = {};

const data = await apiInstance.bioStarGetWebSocketState(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebSocketState**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bioStarReConnectWebsocket**
> WebSocketState bioStarReConnectWebsocket()


### Example


```typescript
import { createConfiguration, BioStarApi } from '';

const configuration = createConfiguration();
const apiInstance = new BioStarApi(configuration);

const request = {};

const data = await apiInstance.bioStarReConnectWebsocket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WebSocketState**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bioStarSyncTimesheets**
> BioStarSyncHistoricalEventsResponse bioStarSyncTimesheets()


### Example


```typescript
import { createConfiguration, BioStarApi } from '';
import type { BioStarApiBioStarSyncTimesheetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BioStarApi(configuration);

const request: BioStarApiBioStarSyncTimesheetsRequest = {
  
  getHistoricalEventsRequest: {
    _from: new Date('1970-01-01T00:00:00.00Z'),
    to: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.bioStarSyncTimesheets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getHistoricalEventsRequest** | **GetHistoricalEventsRequest**|  |


### Return type

**BioStarSyncHistoricalEventsResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bioStarSyncUsers**
> BioStarSyncAllUsersResponse bioStarSyncUsers()


### Example


```typescript
import { createConfiguration, BioStarApi } from '';

const configuration = createConfiguration();
const apiInstance = new BioStarApi(configuration);

const request = {};

const data = await apiInstance.bioStarSyncUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BioStarSyncAllUsersResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


