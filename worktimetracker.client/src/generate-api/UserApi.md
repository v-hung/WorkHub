# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userCreate**](UserApi.md#userCreate) | **POST** /api/users | 
[**userDelete**](UserApi.md#userDelete) | **DELETE** /api/users/{id} | 
[**userGetAll**](UserApi.md#userGetAll) | **GET** /api/users | 
[**userGetById**](UserApi.md#userGetById) | **GET** /api/users/{id} | 
[**userUpdate**](UserApi.md#userUpdate) | **POST** /api/users/{id} | 


# **userCreate**
> UserDto userCreate()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUserCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUserCreateRequest = {
  
  userCreateUpdateRequest: {
    fullName: "fullName_example",
    image: "image_example",
    userPosition: "Administrator",
    isFirstLogin: true,
    leaveHours: 1,
    userStatus: "ACTIVE",
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
    userName: "userName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
  },
};

const data = await apiInstance.userCreate(request);
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

# **userDelete**
> void userDelete()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUserDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUserDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.userDelete(request);
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

# **userGetAll**
> UserDtoPaginated userGetAll()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUserGetAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUserGetAllRequest = {
  
  pageNumber: 1,
  
  pageSize: 10,
  
  searchString: "SearchString_example",
  
  orderBy: [
    "OrderBy_example",
  ],
  
  orderByString: "OrderByString_example",
};

const data = await apiInstance.userGetAll(request);
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

# **userGetById**
> UserFullDto userGetById()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUserGetByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUserGetByIdRequest = {
  
  id: "id_example",
};

const data = await apiInstance.userGetById(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userUpdate**
> UserDto userUpdate()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUserUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUserUpdateRequest = {
  
  id: "id_example",
  
  userCreateUpdateRequest: {
    fullName: "fullName_example",
    image: "image_example",
    userPosition: "Administrator",
    isFirstLogin: true,
    leaveHours: 1,
    userStatus: "ACTIVE",
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
    userName: "userName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
  },
};

const data = await apiInstance.userUpdate(request);
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


