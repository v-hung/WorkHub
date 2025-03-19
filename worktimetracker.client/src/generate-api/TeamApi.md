# .TeamApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamCreate**](TeamApi.md#teamCreate) | **POST** /api/teams | 
[**teamDelete**](TeamApi.md#teamDelete) | **DELETE** /api/teams/{id} | 
[**teamGetAll**](TeamApi.md#teamGetAll) | **GET** /api/teams | 
[**teamGetById**](TeamApi.md#teamGetById) | **GET** /api/teams/{id} | 
[**teamUpdate**](TeamApi.md#teamUpdate) | **PUT** /api/teams/{id} | 


# **teamCreate**
> TeamDto teamCreate()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiTeamCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiTeamCreateRequest = {
  
  createTeamCommand: {
    name: "name_example",
    description: "description_example",
    totalMembers: 1,
    completedProjects: 1,
    activeProjects: 1,
    managerId: "managerId_example",
    memberIds: [
      "memberIds_example",
    ],
    projectIds: [
      1,
    ],
  },
};

const data = await apiInstance.teamCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeamCommand** | **CreateTeamCommand**|  |


### Return type

**TeamDto**

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

# **teamDelete**
> void teamDelete()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiTeamDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiTeamDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.teamDelete(request);
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

# **teamGetAll**
> TeamDtoPaginated teamGetAll()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiTeamGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiTeamGetAllRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.teamGetAll(request);
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

**TeamDtoPaginated**

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

# **teamGetById**
> TeamFullDto teamGetById()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiTeamGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiTeamGetByIdRequest = {
  
  id: 1,
};

const data = await apiInstance.teamGetById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TeamFullDto**

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

# **teamUpdate**
> TeamDto teamUpdate()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiTeamUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiTeamUpdateRequest = {
  
  id: 1,
  
  createTeamCommand: {
    name: "name_example",
    description: "description_example",
    totalMembers: 1,
    completedProjects: 1,
    activeProjects: 1,
    managerId: "managerId_example",
    memberIds: [
      "memberIds_example",
    ],
    projectIds: [
      1,
    ],
  },
};

const data = await apiInstance.teamUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeamCommand** | **CreateTeamCommand**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**TeamDto**

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


