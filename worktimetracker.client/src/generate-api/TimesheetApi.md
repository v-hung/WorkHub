# .TimesheetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetTest**](TimesheetApi.md#timesheetTest) | **GET** /api/timesheets | 


# **timesheetTest**
> string timesheetTest()


### Example


```typescript
import { createConfiguration, TimesheetApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetApi(configuration);

const request = {};

const data = await apiInstance.timesheetTest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

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


