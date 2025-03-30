# .RequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leaveRequestApprovalRequest**](RequestsApi.md#leaveRequestApprovalRequest) | **POST** /api/requests/{id}/leave-approval | 
[**leaveRequestCancelRequest**](RequestsApi.md#leaveRequestCancelRequest) | **POST** /api/requests/{id}/leave-cancel | 
[**leaveRequestCreateRequest**](RequestsApi.md#leaveRequestCreateRequest) | **POST** /api/requests/leave | 
[**leaveRequestRejectRequest**](RequestsApi.md#leaveRequestRejectRequest) | **POST** /api/requests/{id}/leave-reject | 
[**timesheetRequestApprovalRequest**](RequestsApi.md#timesheetRequestApprovalRequest) | **POST** /api/requests/{id}/timesheet-approval | 
[**timesheetRequestCancelRequest**](RequestsApi.md#timesheetRequestCancelRequest) | **POST** /api/requests/{id}/timesheet-cancel | 
[**timesheetRequestCreateRequest**](RequestsApi.md#timesheetRequestCreateRequest) | **POST** /api/requests/timesheet | 
[**timesheetRequestRejectRequest**](RequestsApi.md#timesheetRequestRejectRequest) | **POST** /api/requests/{id}/timesheet-reject | 


# **leaveRequestApprovalRequest**
> LeaveRequestDto leaveRequestApprovalRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiLeaveRequestApprovalRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiLeaveRequestApprovalRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.leaveRequestApprovalRequest(request);
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

# **leaveRequestCancelRequest**
> LeaveRequestDto leaveRequestCancelRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiLeaveRequestCancelRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiLeaveRequestCancelRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.leaveRequestCancelRequest(request);
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

# **leaveRequestCreateRequest**
> LeaveRequestDto leaveRequestCreateRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiLeaveRequestCreateRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiLeaveRequestCreateRequestRequest = {
  
  createLeaveRequestDto: null,
};

const data = await apiInstance.leaveRequestCreateRequest(request);
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

# **leaveRequestRejectRequest**
> LeaveRequestDto leaveRequestRejectRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiLeaveRequestRejectRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiLeaveRequestRejectRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.leaveRequestRejectRequest(request);
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

# **timesheetRequestApprovalRequest**
> TimesheetRequestDto timesheetRequestApprovalRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetRequestApprovalRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetRequestApprovalRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetRequestApprovalRequest(request);
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

# **timesheetRequestCancelRequest**
> TimesheetRequestDto timesheetRequestCancelRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetRequestCancelRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetRequestCancelRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetRequestCancelRequest(request);
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

# **timesheetRequestCreateRequest**
> TimesheetRequestDto timesheetRequestCreateRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetRequestCreateRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetRequestCreateRequestRequest = {
  
  createTimesheetRequestDto: null,
};

const data = await apiInstance.timesheetRequestCreateRequest(request);
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

# **timesheetRequestRejectRequest**
> TimesheetRequestDto timesheetRequestRejectRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetRequestRejectRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetRequestRejectRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetRequestRejectRequest(request);
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


