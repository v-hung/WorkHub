# .NotificationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationSearch**](NotificationApi.md#notificationSearch) | **GET** /api/notifications | 


# **notificationSearch**
> NotificationDtoCursorPaginated notificationSearch()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiNotificationSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiNotificationSearchRequest = {
  
  cursorId: 1,
  
  cursorPagedRequestDirection: "Next",
  
  newestFirst: true,
  
  searchString: "SearchString_example",
};

const data = await apiInstance.notificationSearch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursorId** | [**number**] |  | (optional) defaults to undefined
 **cursorPagedRequestDirection** | **CursorPagedRequestDirection** |  | (optional) defaults to undefined
 **newestFirst** | [**boolean**] |  | (optional) defaults to undefined
 **searchString** | [**string**] |  | (optional) defaults to undefined


### Return type

**NotificationDtoCursorPaginated**

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


