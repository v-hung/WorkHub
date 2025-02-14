# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersGet**](UserApi.md#apiUsersGet) | **GET** /api/users | 


# **apiUsersGet**
> UserDtoPaginated apiUsersGet()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiApiUsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiApiUsersGetRequest = {
  
  pagedRequest: {
    pageNumber: 1,
    pageSize: 10,
    searchString: "searchString_example",
    orderBy: [
      "orderBy_example",
    ],
  },
};

const data = await apiInstance.apiUsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pagedRequest** | **PagedRequest**|  |


### Return type

**UserDtoPaginated**

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


