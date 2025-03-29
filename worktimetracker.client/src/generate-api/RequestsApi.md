# .RequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRequestsIdLeaveApprovalPost**](RequestsApi.md#apiRequestsIdLeaveApprovalPost) | **POST** /api/requests/{id}/leave-approval | 
[**apiRequestsIdLeaveCancelPost**](RequestsApi.md#apiRequestsIdLeaveCancelPost) | **POST** /api/requests/{id}/leave-cancel | 
[**apiRequestsIdLeaveRejectPost**](RequestsApi.md#apiRequestsIdLeaveRejectPost) | **POST** /api/requests/{id}/leave-reject | 
[**apiRequestsIdTimesheetApprovalPost**](RequestsApi.md#apiRequestsIdTimesheetApprovalPost) | **POST** /api/requests/{id}/timesheet-approval | 
[**apiRequestsIdTimesheetCancelPost**](RequestsApi.md#apiRequestsIdTimesheetCancelPost) | **POST** /api/requests/{id}/timesheet-cancel | 
[**apiRequestsIdTimesheetRejectPost**](RequestsApi.md#apiRequestsIdTimesheetRejectPost) | **POST** /api/requests/{id}/timesheet-reject | 
[**apiRequestsLeavePost**](RequestsApi.md#apiRequestsLeavePost) | **POST** /api/requests/leave | 
[**apiRequestsTimesheetPost**](RequestsApi.md#apiRequestsTimesheetPost) | **POST** /api/requests/timesheet | 


# **apiRequestsIdLeaveApprovalPost**
> LeaveRequestDto apiRequestsIdLeaveApprovalPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdLeaveApprovalPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdLeaveApprovalPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdLeaveApprovalPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**LeaveRequestDto**

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

# **apiRequestsIdLeaveCancelPost**
> LeaveRequestDto apiRequestsIdLeaveCancelPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdLeaveCancelPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdLeaveCancelPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdLeaveCancelPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**LeaveRequestDto**

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

# **apiRequestsIdLeaveRejectPost**
> LeaveRequestDto apiRequestsIdLeaveRejectPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdLeaveRejectPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdLeaveRejectPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdLeaveRejectPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**LeaveRequestDto**

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

# **apiRequestsIdTimesheetApprovalPost**
> TimesheetRequestDto apiRequestsIdTimesheetApprovalPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdTimesheetApprovalPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdTimesheetApprovalPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdTimesheetApprovalPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TimesheetRequestDto**

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

# **apiRequestsIdTimesheetCancelPost**
> TimesheetRequestDto apiRequestsIdTimesheetCancelPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdTimesheetCancelPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdTimesheetCancelPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdTimesheetCancelPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TimesheetRequestDto**

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

# **apiRequestsIdTimesheetRejectPost**
> TimesheetRequestDto apiRequestsIdTimesheetRejectPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsIdTimesheetRejectPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsIdTimesheetRejectPostRequest = {
  
  id: 1,
};

const data = await apiInstance.apiRequestsIdTimesheetRejectPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TimesheetRequestDto**

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

# **apiRequestsLeavePost**
> LeaveRequestDto apiRequestsLeavePost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsLeavePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsLeavePostRequest = {
  
  createLeaveRequestDto: null,
};

const data = await apiInstance.apiRequestsLeavePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeaveRequestDto** | **CreateLeaveRequestDto**|  |


### Return type

**LeaveRequestDto**

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

# **apiRequestsTimesheetPost**
> TimesheetRequestDto apiRequestsTimesheetPost()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiApiRequestsTimesheetPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiApiRequestsTimesheetPostRequest = {
  
  createTimesheetRequestDto: null,
};

const data = await apiInstance.apiRequestsTimesheetPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTimesheetRequestDto** | **CreateTimesheetRequestDto**|  |


### Return type

**TimesheetRequestDto**

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


