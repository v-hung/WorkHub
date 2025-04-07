# .AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountChangePassword**](AccountApi.md#accountChangePassword) | **POST** /api/identity/change-password | 
[**accountGetCurrentUser**](AccountApi.md#accountGetCurrentUser) | **GET** /api/identity/current-user | 
[**accountGetPermissions**](AccountApi.md#accountGetPermissions) | **GET** /api/identity/permissions | 
[**accountLogin**](AccountApi.md#accountLogin) | **POST** /api/identity/login | 
[**accountLogout**](AccountApi.md#accountLogout) | **POST** /api/identity/logout | 
[**accountRefreshToken**](AccountApi.md#accountRefreshToken) | **POST** /api/identity/refresh-token | 


# **accountChangePassword**
> void accountChangePassword()


### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountChangePasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountChangePasswordRequest = {
  
  changePasswordRequest: {
    password: "password_example",
    newPassword: "newPassword_example",
  },
};

const data = await apiInstance.accountChangePassword(request);
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

# **accountGetCurrentUser**
> UserDto accountGetCurrentUser()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.accountGetCurrentUser(request);
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

# **accountGetPermissions**
> Array<string> accountGetPermissions()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.accountGetPermissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **accountLogin**
> UserDtoLoginResponse accountLogin()


### Example


```typescript
import { createConfiguration, AccountApi } from '';
import type { AccountApiAccountLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request: AccountApiAccountLoginRequest = {
  
  loginRequest: {
    email: "email_example",
    password: "password_example",
    twoFactorCode: "twoFactorCode_example",
    twoFactorRecoveryCode: "twoFactorRecoveryCode_example",
    rememberMe: true,
  },
};

const data = await apiInstance.accountLogin(request);
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

# **accountLogout**
> void accountLogout()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.accountLogout(request);
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

# **accountRefreshToken**
> RefreshTokenResponse accountRefreshToken()


### Example


```typescript
import { createConfiguration, AccountApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountApi(configuration);

const request = {};

const data = await apiInstance.accountRefreshToken(request);
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


