# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersAllGet**](UserApi.md#apiUsersAllGet) | **GET** /api/users/all | 
[**apiUsersGet**](UserApi.md#apiUsersGet) | **GET** /api/users | 
[**apiUsersIdDelete**](UserApi.md#apiUsersIdDelete) | **DELETE** /api/users/{id} | 
[**apiUsersIdGet**](UserApi.md#apiUsersIdGet) | **GET** /api/users/{id} | 
[**apiUsersIdPut**](UserApi.md#apiUsersIdPut) | **PUT** /api/users/{id} | 
[**apiUsersPost**](UserApi.md#apiUsersPost) | **POST** /api/users | 


# **apiUsersAllGet**
> Array<UserDto> apiUsersAllGet()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersAllGetRequest = {
  
  ids: [
    "ids_example",
  ],
};

const data = await apiInstance.apiUsersAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**Array<UserDto>**

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
    // of the form fieldname [ascending|descending],fieldname [ascending|descending]... (optional)
  orderBy: [
    "OrderBy_example",
  ],
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
 **orderBy** | **Array&lt;string&gt;** | of the form fieldname [ascending|descending],fieldname [ascending|descending]... | (optional) defaults to undefined


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
**400** |  |  -  |

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
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersIdGet**
> UserFullDto apiUsersIdGet()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.apiUsersIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserFullDto**

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

# **apiUsersIdPut**
> UserDto apiUsersIdPut()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersIdPutRequest = {
  
  id: "id_example",
  
  userCreateUpdateRequest: {
    code: "code_example",
    fullName: "fullName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
    image: "image_example",
    userPosition: "Administrator",
    leaveHours: 1,
    userStatus: "ACTIVE",
    workTimeId: 1,
    userDetail: {
      birthDate: new Date('1970-01-01T00:00:00.00Z'),
      gender: true,
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
      yearsOfWork: 1,
      nationality: "Japanese",
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
    password: "password_example",
  },
};

const data = await apiInstance.apiUsersIdPut(request);
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
**400** |  |  -  |

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
    code: "code_example",
    fullName: "fullName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
    image: "image_example",
    userPosition: "Administrator",
    leaveHours: 1,
    userStatus: "ACTIVE",
    workTimeId: 1,
    userDetail: {
      birthDate: new Date('1970-01-01T00:00:00.00Z'),
      gender: true,
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
      yearsOfWork: 1,
      nationality: "Japanese",
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
    password: "password_example",
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
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


