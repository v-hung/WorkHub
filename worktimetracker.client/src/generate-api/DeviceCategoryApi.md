# .DeviceCategoryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDeviceCategoriesAllGet**](DeviceCategoryApi.md#apiDeviceCategoriesAllGet) | **GET** /api/device-categories/all | 
[**apiDeviceCategoriesGet**](DeviceCategoryApi.md#apiDeviceCategoriesGet) | **GET** /api/device-categories | 
[**apiDeviceCategoriesIdDelete**](DeviceCategoryApi.md#apiDeviceCategoriesIdDelete) | **DELETE** /api/device-categories/{id} | 
[**apiDeviceCategoriesIdGet**](DeviceCategoryApi.md#apiDeviceCategoriesIdGet) | **GET** /api/device-categories/{id} | 
[**apiDeviceCategoriesIdPut**](DeviceCategoryApi.md#apiDeviceCategoriesIdPut) | **PUT** /api/device-categories/{id} | 
[**apiDeviceCategoriesPost**](DeviceCategoryApi.md#apiDeviceCategoriesPost) | **POST** /api/device-categories | 


# **apiDeviceCategoriesAllGet**
> Array<DeviceCategoryDto> apiDeviceCategoriesAllGet()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesAllGetRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.apiDeviceCategoriesAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<DeviceCategoryDto>**

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

# **apiDeviceCategoriesGet**
> DeviceCategoryDtoPaginated apiDeviceCategoriesGet()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiDeviceCategoriesGet(request);
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

**DeviceCategoryDtoPaginated**

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

# **apiDeviceCategoriesIdDelete**
> void apiDeviceCategoriesIdDelete()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.apiDeviceCategoriesIdDelete(request);
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

# **apiDeviceCategoriesIdGet**
> DeviceCategoryDto apiDeviceCategoriesIdGet()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiDeviceCategoriesIdGet(request);
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

# **apiDeviceCategoriesIdPut**
> DeviceCategoryDto apiDeviceCategoriesIdPut()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesIdPutRequest = {
  
  id: 1,
  
  createDeviceCategoryCommand: {
    name: "name_example",
    description: "description_example",
    deviceIds: [
      1,
    ],
  },
};

const data = await apiInstance.apiDeviceCategoriesIdPut(request);
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

# **apiDeviceCategoriesPost**
> DeviceCategoryDto apiDeviceCategoriesPost()


### Example


```typescript
import { createConfiguration, DeviceCategoryApi } from '';
import type { DeviceCategoryApiApiDeviceCategoriesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DeviceCategoryApi(configuration);

const request: DeviceCategoryApiApiDeviceCategoriesPostRequest = {
  
  createDeviceCategoryCommand: {
    name: "name_example",
    description: "description_example",
    deviceIds: [
      1,
    ],
  },
};

const data = await apiInstance.apiDeviceCategoriesPost(request);
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


