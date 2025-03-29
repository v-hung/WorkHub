# .AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiIdentityChangePasswordPost**](AccountApi.md#apiIdentityChangePasswordPost) | **POST** /api/identity/change-password | 
[**apiIdentityCurrentUserGet**](AccountApi.md#apiIdentityCurrentUserGet) | **GET** /api/identity/current-user | 
[**apiIdentityLoginPost**](AccountApi.md#apiIdentityLoginPost) | **POST** /api/identity/login | 
[**apiIdentityLogoutPost**](AccountApi.md#apiIdentityLogoutPost) | **POST** /api/identity/logout | 
[**apiIdentityPermissionsGet**](AccountApi.md#apiIdentityPermissionsGet) | **GET** /api/identity/permissions | 
[**apiIdentityRefreshTokenPost**](AccountApi.md#apiIdentityRefreshTokenPost) | **POST** /api/identity/refresh-token | 


# **apiIdentityChangePasswordPost**
> void apiIdentityChangePasswordPost()


### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiApiIdentityChangePasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiApiIdentityChangePasswordPostRequest = {
  
  changePasswordRequest: {
    password: "password_example",
    newPassword: "newPassword_example",
  },
};

const data = await apiInstance.apiIdentityChangePasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRequest** | **ChangePasswordRequest**|  |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |
**400** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiIdentityCurrentUserGet**
> UserDto apiIdentityCurrentUserGet()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.apiIdentityCurrentUserGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserDto**

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

# **apiIdentityLoginPost**
> UserDtoLoginResponse apiIdentityLoginPost()


### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiApiIdentityLoginPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiApiIdentityLoginPostRequest = {
  
  loginRequest: {
    email: "email_example",
    password: "password_example",
    twoFactorCode: "twoFactorCode_example",
    twoFactorRecoveryCode: "twoFactorRecoveryCode_example",
    rememberMe: true,
  },
};

const data = await apiInstance.apiIdentityLoginPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**|  |


### Return type

**UserDtoLoginResponse**

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

# **apiIdentityLogoutPost**
> void apiIdentityLogoutPost()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.apiIdentityLogoutPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **apiIdentityPermissionsGet**
> void apiIdentityPermissionsGet()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.apiIdentityPermissionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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

# **apiIdentityRefreshTokenPost**
> RefreshTokenResponse apiIdentityRefreshTokenPost()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.apiIdentityRefreshTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RefreshTokenResponse**

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


