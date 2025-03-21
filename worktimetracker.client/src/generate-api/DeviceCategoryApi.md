# .DeviceCategoryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceCategoryCreate**](DeviceCategoryApi.md#deviceCategoryCreate) | **POST** /api/device-categories | 
[**deviceCategoryDelete**](DeviceCategoryApi.md#deviceCategoryDelete) | **DELETE** /api/device-categories/{id} | 
[**deviceCategoryGetAll**](DeviceCategoryApi.md#deviceCategoryGetAll) | **GET** /api/device-categories/all | 
[**deviceCategoryGetById**](DeviceCategoryApi.md#deviceCategoryGetById) | **GET** /api/device-categories/{id} | 
[**deviceCategorySearch**](DeviceCategoryApi.md#deviceCategorySearch) | **GET** /api/device-categories | 
[**deviceCategoryUpdate**](DeviceCategoryApi.md#deviceCategoryUpdate) | **PUT** /api/device-categories/{id} | 


# **deviceCategoryCreate**
> DeviceCategoryDto deviceCategoryCreate()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategoryCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategoryCreateRequest = {
  
  createDeviceCategoryCommand: {
    name: "name_example",
    description: "description_example",
    deviceIds: [
      1,
    ],
  },
};

const data = await apiInstance.deviceCategoryCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDeviceCategoryCommand** | **CreateDeviceCategoryCommand**|  |


### Return type

**DeviceCategoryDto**

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

# **deviceCategoryDelete**
> void deviceCategoryDelete()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategoryDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategoryDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.deviceCategoryDelete(request);
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

# **deviceCategoryGetAll**
> Array<DeviceCategoryMinimalDto> deviceCategoryGetAll()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategoryGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategoryGetAllRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.deviceCategoryGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<DeviceCategoryMinimalDto>**

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

# **deviceCategoryGetById**
> DeviceCategoryDto deviceCategoryGetById()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategoryGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategoryGetByIdRequest = {
  
  id: 1,
};

const data = await apiInstance.deviceCategoryGetById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DeviceCategoryDto**

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

# **deviceCategorySearch**
> DeviceCategoryMinimalDtoPaginated deviceCategorySearch()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategorySearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategorySearchRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.deviceCategorySearch(request);
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

**DeviceCategoryMinimalDtoPaginated**

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

# **deviceCategoryUpdate**
> DeviceCategoryDto deviceCategoryUpdate()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiDeviceCategoryUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiDeviceCategoryUpdateRequest = {
  
  id: 1,
  
  createDeviceCategoryCommand: {
    name: "name_example",
    description: "description_example",
    deviceIds: [
      1,
    ],
  },
};

const data = await apiInstance.deviceCategoryUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDeviceCategoryCommand** | **CreateDeviceCategoryCommand**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**DeviceCategoryDto**

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


