# .RoleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRolesAllGet**](RoleApi.md#apiRolesAllGet) | **GET** /api/roles/all | 
[**apiRolesGet**](RoleApi.md#apiRolesGet) | **GET** /api/roles | 
[**apiRolesIdDelete**](RoleApi.md#apiRolesIdDelete) | **DELETE** /api/roles/{id} | 
[**apiRolesIdGet**](RoleApi.md#apiRolesIdGet) | **GET** /api/roles/{id} | 
[**apiRolesIdPut**](RoleApi.md#apiRolesIdPut) | **PUT** /api/roles/{id} | 
[**apiRolesPost**](RoleApi.md#apiRolesPost) | **POST** /api/roles | 


# **apiRolesAllGet**
> Array<RoleDto> apiRolesAllGet()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesAllGetRequest = {
  
  ids: [
    "ids_example",
  ],
};

const data = await apiInstance.apiRolesAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**Array<RoleDto>**

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

# **apiRolesGet**
> RoleDtoPaginated apiRolesGet()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiRolesGet(request);
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

**RoleDtoPaginated**

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

# **apiRolesIdDelete**
> void apiRolesIdDelete()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiRolesIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **apiRolesIdGet**
> RoleDto apiRolesIdGet()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiRolesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RoleDto**

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

# **apiRolesIdPut**
> RoleDto apiRolesIdPut()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesIdPutRequest = {
  
  id: "id_example",
  
  roleCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
    isAdmin: true,
  },
};

const data = await apiInstance.apiRolesIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleCreateUpdateRequest** | **RoleCreateUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**RoleDto**

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

# **apiRolesPost**
> RoleDto apiRolesPost()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiApiRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiApiRolesPostRequest = {
  
  roleCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
    isAdmin: true,
  },
};

const data = await apiInstance.apiRolesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleCreateUpdateRequest** | **RoleCreateUpdateRequest**|  |


### Return type

**RoleDto**

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


