# .ProjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectCreate**](ProjectApi.md#projectCreate) | **POST** /api/projects | 
[**projectDelete**](ProjectApi.md#projectDelete) | **DELETE** /api/projects/{id} | 
[**projectGetAll**](ProjectApi.md#projectGetAll) | **GET** /api/projects | 
[**projectGetById**](ProjectApi.md#projectGetById) | **GET** /api/projects/{id} | 
[**projectUpdate**](ProjectApi.md#projectUpdate) | **PUT** /api/projects/{id} | 


# **projectCreate**
> ProjectDto projectCreate()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiProjectCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiProjectCreateRequest = {
  
  createProjectCommand: {
    name: "name_example",
    description: "description_example",
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    endDate: new Date('1970-01-01T00:00:00.00Z'),
    status: "ACTIVE",
    teamId: 1,
    managerId: "managerId_example",
    memberIds: [
      "memberIds_example",
    ],
  },
};

const data = await apiInstance.projectCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectCommand** | **CreateProjectCommand**|  |


### Return type

**ProjectDto**

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

# **projectDelete**
> void projectDelete()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiProjectDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiProjectDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.projectDelete(request);
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

# **projectGetAll**
> ProjectDtoPaginated projectGetAll()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiProjectGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiProjectGetAllRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.projectGetAll(request);
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

**ProjectDtoPaginated**

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

# **projectGetById**
> ProjectDto projectGetById()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiProjectGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiProjectGetByIdRequest = {
  
  id: 1,
};

const data = await apiInstance.projectGetById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ProjectDto**

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

# **projectUpdate**
> ProjectDto projectUpdate()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiProjectUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiProjectUpdateRequest = {
  
  id: 1,
  
  createProjectCommand: {
    name: "name_example",
    description: "description_example",
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    endDate: new Date('1970-01-01T00:00:00.00Z'),
    status: "ACTIVE",
    teamId: 1,
    managerId: "managerId_example",
    memberIds: [
      "memberIds_example",
    ],
  },
};

const data = await apiInstance.projectUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectCommand** | **CreateProjectCommand**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ProjectDto**

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


