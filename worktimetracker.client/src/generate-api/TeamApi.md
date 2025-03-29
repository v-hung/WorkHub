# .TeamApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTeamsAllGet**](TeamApi.md#apiTeamsAllGet) | **GET** /api/teams/all | 
[**apiTeamsGet**](TeamApi.md#apiTeamsGet) | **GET** /api/teams | 
[**apiTeamsIdDelete**](TeamApi.md#apiTeamsIdDelete) | **DELETE** /api/teams/{id} | 
[**apiTeamsIdGet**](TeamApi.md#apiTeamsIdGet) | **GET** /api/teams/{id} | 
[**apiTeamsIdPut**](TeamApi.md#apiTeamsIdPut) | **PUT** /api/teams/{id} | 
[**apiTeamsPost**](TeamApi.md#apiTeamsPost) | **POST** /api/teams | 


# **apiTeamsAllGet**
> Array<TeamDto> apiTeamsAllGet()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsAllGetRequest = {
  
  ids: [
    1,
  ],
};

const data = await apiInstance.apiTeamsAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**Array<TeamDto>**

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

# **apiTeamsGet**
> TeamDtoPaginated apiTeamsGet()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
};

const data = await apiInstance.apiTeamsGet(request);
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

# **apiTeamsIdDelete**
> void apiTeamsIdDelete()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.apiTeamsIdDelete(request);
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

# **apiTeamsIdGet**
> TeamFullDto apiTeamsIdGet()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.apiTeamsIdGet(request);
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

# **apiTeamsIdPut**
> TeamDto apiTeamsIdPut()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsIdPutRequest = {
  
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

const data = await apiInstance.apiTeamsIdPut(request);
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

# **apiTeamsPost**
> TeamDto apiTeamsPost()


### Example


```typescript
import { createConfiguration, TeamApi } from '';
import type { TeamApiApiTeamsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamApi(configuration);

const request: TeamApiApiTeamsPostRequest = {
  
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

const data = await apiInstance.apiTeamsPost(request);
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


