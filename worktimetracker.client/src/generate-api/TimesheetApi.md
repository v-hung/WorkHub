# .TimesheetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetCheckIn**](TimesheetApi.md#timesheetCheckIn) | **POST** /api/timesheets/checkin | 
[**timesheetCheckOut**](TimesheetApi.md#timesheetCheckOut) | **POST** /api/timesheets/checkout | 
[**timesheetGetMonthlyTimesheets**](TimesheetApi.md#timesheetGetMonthlyTimesheets) | **GET** /api/timesheets/monthly | 
[**timesheetGetTodayTimesheet**](TimesheetApi.md#timesheetGetTodayTimesheet) | **GET** /api/timesheets/today | 


# **timesheetCheckIn**
> TimesheetDto timesheetCheckIn()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.timesheetCheckIn(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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

# **timesheetCheckOut**
> TimesheetDto timesheetCheckOut()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.timesheetCheckOut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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

# **timesheetGetMonthlyTimesheets**
> Array<TimesheetDto> timesheetGetMonthlyTimesheets()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';
import type { TimesheetApiTimesheetGetMonthlyTimesheetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request: TimesheetApiTimesheetGetMonthlyTimesheetsRequest = {
  
  month: 1,
  
  year: 1,
};

const data = await apiInstance.timesheetGetMonthlyTimesheets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**number**] |  | (optional) defaults to undefined
 **year** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<TimesheetDto>**

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

# **timesheetGetTodayTimesheet**
> TimesheetDto timesheetGetTodayTimesheet()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.timesheetGetTodayTimesheet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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


