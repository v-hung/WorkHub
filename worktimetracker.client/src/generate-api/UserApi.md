# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersGet**](UserApi.md#apiUsersGet) | **GET** /api/users | 
[**apiUsersIdDelete**](UserApi.md#apiUsersIdDelete) | **DELETE** /api/users/{id} | 
[**apiUsersIdPost**](UserApi.md#apiUsersIdPost) | **POST** /api/users/{id} | 
[**apiUsersPost**](UserApi.md#apiUsersPost) | **POST** /api/users | 


# **apiUsersGet**
> UserDtoPaginated apiUsersGet()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersGetRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
  
  orderBy: [
    "OrderBy_example",
  ],
  
  orderByString: "OrderByString_example",
};

const data = await apiInstance.apiUsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] |  | defaults to 1
 **pageSize** | [**number**] |  | defaults to 10
 **searchString** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **orderByString** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserDtoPaginated**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdDelete**
> void apiUsersIdDelete()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiUsersIdDelete(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdPost**
> UserDto apiUsersIdPost()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersIdPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersIdPostRequest = {
  
  id: "id_example",
  
  userCreateUpdateRequest: {
    fullName: "fullName_example",
    image: "image_example",
    userPosition: "Administrator",
    isFirstLogin: true,
    leaveHours: 1,
    userStatus: "ACTIVE",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    createdBy: "createdBy_example",
    lastModifiedBy: "lastModifiedBy_example",
    workTimeId: 1,
    userDetail: {
      id: 1,
      birthDate: new Date('1970-01-01T00:00:00.00Z'),
      phone: "phone_example",
      gender: true,
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
      yearsOfWork: 1,
    },
    supervisorId: "supervisorId_example",
    teamId: 1,
    managerTeamIds: [
      1,
    ],
    managerProjectIds: [
      1,
    ],
    roleNames: [
      "roleNames_example",
    ],
  },
};

const data = await apiInstance.apiUsersIdPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateUpdateRequest** | **UserCreateUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserDto**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersPost**
> UserDto apiUsersPost()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersPostRequest = {
  
  userCreateUpdateRequest: {
    fullName: "fullName_example",
    image: "image_example",
    userPosition: "Administrator",
    isFirstLogin: true,
    leaveHours: 1,
    userStatus: "ACTIVE",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    createdBy: "createdBy_example",
    lastModifiedBy: "lastModifiedBy_example",
    workTimeId: 1,
    userDetail: {
      id: 1,
      birthDate: new Date('1970-01-01T00:00:00.00Z'),
      phone: "phone_example",
      gender: true,
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
      yearsOfWork: 1,
    },
    supervisorId: "supervisorId_example",
    teamId: 1,
    managerTeamIds: [
      1,
    ],
    managerProjectIds: [
      1,
    ],
    roleNames: [
      "roleNames_example",
    ],
  },
};

const data = await apiInstance.apiUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateUpdateRequest** | **UserCreateUpdateRequest**|  |


### Return type

**UserDto**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


