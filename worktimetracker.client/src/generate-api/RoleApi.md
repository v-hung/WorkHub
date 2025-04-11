# .RoleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roleCreate**](RoleApi.md#roleCreate) | **POST** /api/roles | 
[**roleDelete**](RoleApi.md#roleDelete) | **DELETE** /api/roles/{id} | 
[**roleGetAll**](RoleApi.md#roleGetAll) | **GET** /api/roles/all | 
[**roleGetAllByNames**](RoleApi.md#roleGetAllByNames) | **GET** /api/roles/all-by-names | 
[**roleGetById**](RoleApi.md#roleGetById) | **GET** /api/roles/{id} | 
[**roleSearch**](RoleApi.md#roleSearch) | **GET** /api/roles | 
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
import type { RoleApiRoleGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleGetAllRequest = {
  
  ids: [
    "ids_example",
  ],
};

const data = await apiInstance.roleGetAll(request);
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

# **roleGetAllByNames**
> Array<RoleDto> roleGetAllByNames()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleGetAllByNamesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleGetAllByNamesRequest = {
  
  names: [
    "names_example",
  ],
};

const data = await apiInstance.roleGetAllByNames(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


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

# **roleSearch**
> RoleDtoPaginated roleSearch()


### Example


```typescript
import { createConfiguration, RoleApi } from '';
import type { RoleApiRoleSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleApi(configuration);

const request: RoleApiRoleSearchRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.roleSearch(request);
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


