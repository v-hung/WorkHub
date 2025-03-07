# .RoleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roleCreate**](RoleApi.md#roleCreate) | **POST** /api/roles | 
[**roleDelete**](RoleApi.md#roleDelete) | **DELETE** /api/roles/{id} | 
[**roleGetAll**](RoleApi.md#roleGetAll) | **GET** /api/roles | 
[**roleGetById**](RoleApi.md#roleGetById) | **GET** /api/roles/{id} | 
[**roleUpdate**](RoleApi.md#roleUpdate) | **PUT** /api/roles/{id} | 


# **roleCreate**
> RoleDto roleCreate()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleCreateRequest = {
  
  roleCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
    isAdmin: true,
  },
};

const data = await apiInstance.roleCreate(request);
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

# **roleDelete**
> void roleDelete()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.roleDelete(request);
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

# **roleGetAll**
> Array<RoleDto> roleGetAll()


### Example


```typescript
import { createConfiguration, RoleApi } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request = {};

const data = await apiInstance.roleGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **roleGetById**
> RoleDto roleGetById()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleGetByIdRequest = {
  
  id: "id_example",
};

const data = await apiInstance.roleGetById(request);
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

# **roleUpdate**
> RoleDto roleUpdate()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleUpdateRequest = {
  
  id: "id_example",
  
  roleCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
    isAdmin: true,
  },
};

const data = await apiInstance.roleUpdate(request);
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


