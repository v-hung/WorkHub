# .TimesheetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTimesheetsCheckinPost**](TimesheetApi.md#apiTimesheetsCheckinPost) | **POST** /api/timesheets/checkin | 
[**apiTimesheetsCheckoutPost**](TimesheetApi.md#apiTimesheetsCheckoutPost) | **POST** /api/timesheets/checkout | 
[**apiTimesheetsMonthlyAllGet**](TimesheetApi.md#apiTimesheetsMonthlyAllGet) | **GET** /api/timesheets/monthly/all | 
[**apiTimesheetsMonthlyGet**](TimesheetApi.md#apiTimesheetsMonthlyGet) | **GET** /api/timesheets/monthly | 
[**apiTimesheetsTodayGet**](TimesheetApi.md#apiTimesheetsTodayGet) | **GET** /api/timesheets/today | 


# **apiTimesheetsCheckinPost**
> TimesheetDtoTimesheetResponse apiTimesheetsCheckinPost()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.apiTimesheetsCheckinPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDtoTimesheetResponse**

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

# **apiTimesheetsCheckoutPost**
> TimesheetDtoTimesheetResponse apiTimesheetsCheckoutPost()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.apiTimesheetsCheckoutPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDtoTimesheetResponse**

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

# **apiTimesheetsMonthlyAllGet**
> Array<TimesheetFullDto> apiTimesheetsMonthlyAllGet()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';
import type { TimesheetApiApiTimesheetsMonthlyAllGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request: TimesheetApiApiTimesheetsMonthlyAllGetRequest = {
  
  month: 1,
  
  year: 1,
};

const data = await apiInstance.apiTimesheetsMonthlyAllGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**number**] |  | (optional) defaults to undefined
 **year** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<TimesheetFullDto>**

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

# **apiTimesheetsMonthlyGet**
> Array<TimesheetDto> apiTimesheetsMonthlyGet()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';
import type { TimesheetApiApiTimesheetsMonthlyGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request: TimesheetApiApiTimesheetsMonthlyGetRequest = {
  
  month: 1,
  
  year: 1,
};

const data = await apiInstance.apiTimesheetsMonthlyGet(request);
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

# **apiTimesheetsTodayGet**
> TimesheetDtoTimesheetResponse apiTimesheetsTodayGet()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.apiTimesheetsTodayGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDtoTimesheetResponse**

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


