# .DeviceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceCreate**](DeviceApi.md#deviceCreate) | **POST** /api/devices | 
[**deviceDelete**](DeviceApi.md#deviceDelete) | **DELETE** /api/devices/{id} | 
[**deviceGetAll**](DeviceApi.md#deviceGetAll) | **GET** /api/devices/all | 
[**deviceGetById**](DeviceApi.md#deviceGetById) | **GET** /api/devices/{id} | 
[**deviceSearch**](DeviceApi.md#deviceSearch) | **GET** /api/devices | 
[**deviceUpdate**](DeviceApi.md#deviceUpdate) | **PUT** /api/devices/{id} | 


# **deviceCreate**
> DeviceDto deviceCreate()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceCreateRequest = {
  
  createDeviceCommand: {
    name: "name_example",
    description: "description_example",
    location: "location_example",
    status: "NEW",
    assignedUserId: "assignedUserId_example",
    deviceCategoryIds: [
      1,
    ],
  },
};

const data = await apiInstance.deviceCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDeviceCommand** | **CreateDeviceCommand**|  |


### Return type

**DeviceDto**

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

# **deviceDelete**
> void deviceDelete()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deviceDelete(request);
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

# **deviceGetAll**
> Array<DeviceDto> deviceGetAll()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceGetAllRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.deviceGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<DeviceDto>**

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

# **deviceGetById**
> DeviceDto deviceGetById()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceGetByIdRequest = {
  
  id: 1,
};

const data = await apiInstance.deviceGetById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DeviceDto**

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

# **deviceSearch**
> DeviceDtoPaginated deviceSearch()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceSearchRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.deviceSearch(request);
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

**DeviceDtoPaginated**

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

# **deviceUpdate**
> DeviceDto deviceUpdate()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiDeviceUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiDeviceUpdateRequest = {
  
  id: 1,
  
  createDeviceCommand: {
    name: "name_example",
    description: "description_example",
    location: "location_example",
    status: "NEW",
    assignedUserId: "assignedUserId_example",
    deviceCategoryIds: [
      1,
    ],
  },
};

const data = await apiInstance.deviceUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDeviceCommand** | **CreateDeviceCommand**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**DeviceDto**

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


