# .ProjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProjectsAllGet**](ProjectApi.md#apiProjectsAllGet) | **GET** /api/projects/all | 
[**apiProjectsGet**](ProjectApi.md#apiProjectsGet) | **GET** /api/projects | 
[**apiProjectsIdDelete**](ProjectApi.md#apiProjectsIdDelete) | **DELETE** /api/projects/{id} | 
[**apiProjectsIdGet**](ProjectApi.md#apiProjectsIdGet) | **GET** /api/projects/{id} | 
[**apiProjectsIdPut**](ProjectApi.md#apiProjectsIdPut) | **PUT** /api/projects/{id} | 
[**apiProjectsPost**](ProjectApi.md#apiProjectsPost) | **POST** /api/projects | 


# **apiProjectsAllGet**
> Array<ProjectDto> apiProjectsAllGet()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsAllGetRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.apiProjectsAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<ProjectDto>**

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

# **apiProjectsGet**
> ProjectDtoPaginated apiProjectsGet()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiProjectsGet(request);
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

# **apiProjectsIdDelete**
> void apiProjectsIdDelete()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.apiProjectsIdDelete(request);
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

# **apiProjectsIdGet**
> ProjectDto apiProjectsIdGet()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiProjectsIdGet(request);
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

# **apiProjectsIdPut**
> ProjectDto apiProjectsIdPut()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsIdPutRequest = {
  
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

const data = await apiInstance.apiProjectsIdPut(request);
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

# **apiProjectsPost**
> ProjectDto apiProjectsPost()


### Example


```typescript
import { createConfiguration, ProjectApi } from '';
import type { ProjectApiApiProjectsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProjectApi(configuration);

const request: ProjectApiApiProjectsPostRequest = {
  
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

const data = await apiInstance.apiProjectsPost(request);
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


