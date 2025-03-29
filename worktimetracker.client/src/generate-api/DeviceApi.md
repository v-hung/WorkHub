# .DeviceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDevicesAllGet**](DeviceApi.md#apiDevicesAllGet) | **GET** /api/devices/all | 
[**apiDevicesGet**](DeviceApi.md#apiDevicesGet) | **GET** /api/devices | 
[**apiDevicesIdDelete**](DeviceApi.md#apiDevicesIdDelete) | **DELETE** /api/devices/{id} | 
[**apiDevicesIdGet**](DeviceApi.md#apiDevicesIdGet) | **GET** /api/devices/{id} | 
[**apiDevicesIdPut**](DeviceApi.md#apiDevicesIdPut) | **PUT** /api/devices/{id} | 
[**apiDevicesPost**](DeviceApi.md#apiDevicesPost) | **POST** /api/devices | 


# **apiDevicesAllGet**
> Array<DeviceDto> apiDevicesAllGet()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesAllGetRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.apiDevicesAllGet(request);
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

# **apiDevicesGet**
> DeviceDtoPaginated apiDevicesGet()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiDevicesGet(request);
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

# **apiDevicesIdDelete**
> void apiDevicesIdDelete()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.apiDevicesIdDelete(request);
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

# **apiDevicesIdGet**
> DeviceDto apiDevicesIdGet()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiDevicesIdGet(request);
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

# **apiDevicesIdPut**
> DeviceDto apiDevicesIdPut()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesIdPutRequest = {
  
  id: 1,
  
  createDeviceCommand: {
    name: "name_example",
    description: "description_example",
    location: "location_example",
    status: "New",
    assignedUserId: "assignedUserId_example",
    deviceCategoryIds: [
      1,
    ],
  },
};

const data = await apiInstance.apiDevicesIdPut(request);
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

# **apiDevicesPost**
> DeviceDto apiDevicesPost()


### Example


```typescript
import { createConfiguration, DeviceApi } from '';
import type { DeviceApiApiDevicesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceApi(configuration);

const request: DeviceApiApiDevicesPostRequest = {
  
  createDeviceCommand: {
    name: "name_example",
    description: "description_example",
    location: "location_example",
    status: "New",
    assignedUserId: "assignedUserId_example",
    deviceCategoryIds: [
      1,
    ],
  },
};

const data = await apiInstance.apiDevicesPost(request);
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


