# .WorkTimeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWorkTimesAllGet**](WorkTimeApi.md#apiWorkTimesAllGet) | **GET** /api/work-times/all | 
[**apiWorkTimesGet**](WorkTimeApi.md#apiWorkTimesGet) | **GET** /api/work-times | 
[**apiWorkTimesIdDelete**](WorkTimeApi.md#apiWorkTimesIdDelete) | **DELETE** /api/work-times/{id} | 
[**apiWorkTimesIdGet**](WorkTimeApi.md#apiWorkTimesIdGet) | **GET** /api/work-times/{id} | 
[**apiWorkTimesIdPut**](WorkTimeApi.md#apiWorkTimesIdPut) | **PUT** /api/work-times/{id} | 
[**apiWorkTimesPost**](WorkTimeApi.md#apiWorkTimesPost) | **POST** /api/work-times | 


# **apiWorkTimesAllGet**
> Array<WorkTimeDto> apiWorkTimesAllGet()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesAllGetRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.apiWorkTimesAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<WorkTimeDto>**

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

# **apiWorkTimesGet**
> WorkTimeDtoPaginated apiWorkTimesGet()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiWorkTimesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] |  | defaults to 1
 **pageSize** | [**number**] |  | defaults to 10
 **searchString** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | **Array&lt;string&gt;** | of the form fieldname [ascending|descending],fieldname [ascending|descending]... | (optional) defaults to undefined


### Return type

**WorkTimeDtoPaginated**

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

# **apiWorkTimesIdDelete**
> void apiWorkTimesIdDelete()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.apiWorkTimesIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiWorkTimesIdGet**
> WorkTimeDto apiWorkTimesIdGet()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiWorkTimesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**WorkTimeDto**

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

# **apiWorkTimesIdPut**
> WorkTimeDto apiWorkTimesIdPut()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesIdPutRequest = {
  
  id: 1,
  
  createWorkTimeCommand: {
    title: "title_example",
    startTimeMorning: "00:00:00",
    endTimeMorning: "00:00:00",
    startTimeAfternoon: "00:00:00",
    endTimeAfternoon: "00:00:00",
    allowedLateMinutes: 1,
  },
};

const data = await apiInstance.apiWorkTimesIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkTimeCommand** | **CreateWorkTimeCommand**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**WorkTimeDto**

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

# **apiWorkTimesPost**
> WorkTimeDto apiWorkTimesPost()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiApiWorkTimesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiApiWorkTimesPostRequest = {
  
  createWorkTimeCommand: {
    title: "title_example",
    startTimeMorning: "00:00:00",
    endTimeMorning: "00:00:00",
    startTimeAfternoon: "00:00:00",
    endTimeAfternoon: "00:00:00",
    allowedLateMinutes: 1,
  },
};

const data = await apiInstance.apiWorkTimesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkTimeCommand** | **CreateWorkTimeCommand**|  |


### Return type

**WorkTimeDto**

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


