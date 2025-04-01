# .RequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leaveRequestApprovalRequest**](RequestsApi.md#leaveRequestApprovalRequest) | **POST** /api/requests/{id}/leave-approval | 
[**leaveRequestCancelRequest**](RequestsApi.md#leaveRequestCancelRequest) | **POST** /api/requests/{id}/leave-cancel | 
[**leaveRequestCreateRequest**](RequestsApi.md#leaveRequestCreateRequest) | **POST** /api/requests/leave | 
[**leaveRequestRejectRequest**](RequestsApi.md#leaveRequestRejectRequest) | **POST** /api/requests/{id}/leave-reject | 
[**timesheetAdjustmentRequestApprovalRequest**](RequestsApi.md#timesheetAdjustmentRequestApprovalRequest) | **POST** /api/requests/{id}/timesheet-approval | 
[**timesheetAdjustmentRequestCancelRequest**](RequestsApi.md#timesheetAdjustmentRequestCancelRequest) | **POST** /api/requests/{id}/timesheet-cancel | 
[**timesheetAdjustmentRequestCreateRequest**](RequestsApi.md#timesheetAdjustmentRequestCreateRequest) | **POST** /api/requests/timesheet | 
[**timesheetAdjustmentRequestRejectRequest**](RequestsApi.md#timesheetAdjustmentRequestRejectRequest) | **POST** /api/requests/{id}/timesheet-reject | 


# **leaveRequestApprovalRequest**
> RequestCombinedDto leaveRequestApprovalRequest()


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

**RequestCombinedDto**

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
> RequestCombinedDto leaveRequestCancelRequest()


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

**RequestCombinedDto**

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
> RequestCombinedDto leaveRequestCreateRequest()


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

**RequestCombinedDto**

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
> RequestCombinedDto leaveRequestRejectRequest()


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

**RequestCombinedDto**

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

# **timesheetAdjustmentRequestApprovalRequest**
> RequestCombinedDto timesheetAdjustmentRequestApprovalRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetAdjustmentRequestApprovalRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetAdjustmentRequestApprovalRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetAdjustmentRequestApprovalRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RequestCombinedDto**

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

# **timesheetAdjustmentRequestCancelRequest**
> RequestCombinedDto timesheetAdjustmentRequestCancelRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetAdjustmentRequestCancelRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetAdjustmentRequestCancelRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetAdjustmentRequestCancelRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RequestCombinedDto**

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

# **timesheetAdjustmentRequestCreateRequest**
> RequestCombinedDto timesheetAdjustmentRequestCreateRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetAdjustmentRequestCreateRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetAdjustmentRequestCreateRequestRequest = {
  
  createTimesheetAdjustmentRequestDto: null,
};

const data = await apiInstance.timesheetAdjustmentRequestCreateRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTimesheetAdjustmentRequestDto** | **CreateTimesheetAdjustmentRequestDto**|  |


### Return type

**RequestCombinedDto**

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

# **timesheetAdjustmentRequestRejectRequest**
> RequestCombinedDto timesheetAdjustmentRequestRejectRequest()


### Example


```typescript
import { createConfiguration, RequestsApi } from '';
import type { RequestsApiTimesheetAdjustmentRequestRejectRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RequestsApi(configuration);

const request: RequestsApiTimesheetAdjustmentRequestRejectRequestRequest = {
  
  id: 1,
};

const data = await apiInstance.timesheetAdjustmentRequestRejectRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RequestCombinedDto**

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


