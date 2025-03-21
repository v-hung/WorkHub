# .WorkTimeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workTimeCreate**](WorkTimeApi.md#workTimeCreate) | **POST** /api/work-times | 
[**workTimeDelete**](WorkTimeApi.md#workTimeDelete) | **DELETE** /api/work-times/{id} | 
[**workTimeGetAll**](WorkTimeApi.md#workTimeGetAll) | **GET** /api/work-times/all | 
[**workTimeGetById**](WorkTimeApi.md#workTimeGetById) | **GET** /api/work-times/{id} | 
[**workTimeSearch**](WorkTimeApi.md#workTimeSearch) | **GET** /api/work-times | 
[**workTimeUpdate**](WorkTimeApi.md#workTimeUpdate) | **PUT** /api/work-times/{id} | 


# **workTimeCreate**
> WorkTimeDto workTimeCreate()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeCreateRequest = {
  
  createWorkTimeCommand: {
    title: "title_example",
    startTimeMorning: "00:00:00",
    endTimeMorning: "00:00:00",
    startTimeAfternoon: "00:00:00",
    endTimeAfternoon: "00:00:00",
    allowedLateMinutes: 1,
  },
};

const data = await apiInstance.workTimeCreate(request);
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

# **workTimeDelete**
> void workTimeDelete()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.workTimeDelete(request);
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

# **workTimeGetAll**
> Array<WorkTimeDto> workTimeGetAll()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeGetAllRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.workTimeGetAll(request);
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

# **workTimeGetById**
> WorkTimeDto workTimeGetById()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeGetByIdRequest = {
  
  id: 1,
};

const data = await apiInstance.workTimeGetById(request);
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

# **workTimeSearch**
> WorkTimeDtoPaginated workTimeSearch()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeSearchRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.workTimeSearch(request);
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

# **workTimeUpdate**
> WorkTimeDto workTimeUpdate()


### Example


```typescript
import { createConfiguration, WorkTimeApi } from '';
import type { WorkTimeApiWorkTimeUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeApi(configuration);

const request: WorkTimeApiWorkTimeUpdateRequest = {
  
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

const data = await apiInstance.workTimeUpdate(request);
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


