import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateDeviceCategoryCommand } from '../models/CreateDeviceCategoryCommand';
import { CreateDeviceCommand } from '../models/CreateDeviceCommand';
import { CreateLeaveRequestDto } from '../models/CreateLeaveRequestDto';
import { CreateProjectCommand } from '../models/CreateProjectCommand';
import { CreateRequestDto } from '../models/CreateRequestDto';
import { CreateTeamCommand } from '../models/CreateTeamCommand';
import { CreateTimesheetRequestDto } from '../models/CreateTimesheetRequestDto';
import { CreateWorkTimeCommand } from '../models/CreateWorkTimeCommand';
import { DeviceCategoryDto } from '../models/DeviceCategoryDto';
import { DeviceCategoryDtoPaginated } from '../models/DeviceCategoryDtoPaginated';
import { DeviceCategoryMinimalDto } from '../models/DeviceCategoryMinimalDto';
import { DeviceDto } from '../models/DeviceDto';
import { DeviceDtoPaginated } from '../models/DeviceDtoPaginated';
import { DeviceMinimalDto } from '../models/DeviceMinimalDto';
import { DeviceStatus } from '../models/DeviceStatus';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorValidateResponse } from '../models/ErrorValidateResponse';
import { LeaveRequestDto } from '../models/LeaveRequestDto';
import { LeaveRequestMinimalDto } from '../models/LeaveRequestMinimalDto';
import { LoginRequest } from '../models/LoginRequest';
import { Nationality } from '../models/Nationality';
import { Permission } from '../models/Permission';
import { ProjectDto } from '../models/ProjectDto';
import { ProjectDtoPaginated } from '../models/ProjectDtoPaginated';
import { ProjectMinimalDto } from '../models/ProjectMinimalDto';
import { ProjectStatus } from '../models/ProjectStatus';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { RequestDto } from '../models/RequestDto';
import { RequestMinimalDto } from '../models/RequestMinimalDto';
import { RequestStatus } from '../models/RequestStatus';
import { RequestType } from '../models/RequestType';
import { RoleCreateUpdateRequest } from '../models/RoleCreateUpdateRequest';
import { RoleDto } from '../models/RoleDto';
import { RoleDtoPaginated } from '../models/RoleDtoPaginated';
import { TeamDto } from '../models/TeamDto';
import { TeamDtoPaginated } from '../models/TeamDtoPaginated';
import { TeamFullDto } from '../models/TeamFullDto';
import { TeamMinimalDto } from '../models/TeamMinimalDto';
import { TimesheetDto } from '../models/TimesheetDto';
import { TimesheetDtoRequestsInner } from '../models/TimesheetDtoRequestsInner';
import { TimesheetDtoTimesheetResponse } from '../models/TimesheetDtoTimesheetResponse';
import { TimesheetFullDto } from '../models/TimesheetFullDto';
import { TimesheetMinimalDto } from '../models/TimesheetMinimalDto';
import { TimesheetRequestDto } from '../models/TimesheetRequestDto';
import { TimesheetRequestMinimalDto } from '../models/TimesheetRequestMinimalDto';
import { UserCreateUpdateRequest } from '../models/UserCreateUpdateRequest';
import { UserDetailDto } from '../models/UserDetailDto';
import { UserDto } from '../models/UserDto';
import { UserDtoLoginResponse } from '../models/UserDtoLoginResponse';
import { UserDtoPaginated } from '../models/UserDtoPaginated';
import { UserFullDto } from '../models/UserFullDto';
import { UserMinimalDto } from '../models/UserMinimalDto';
import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { WorkTimeDto } from '../models/WorkTimeDto';
import { WorkTimeDtoPaginated } from '../models/WorkTimeDtoPaginated';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiApiIdentityChangePasswordPostRequest {
    /**
     * 
     * @type ChangePasswordRequest
     * @memberof AccountApiapiIdentityChangePasswordPost
     */
    changePasswordRequest?: ChangePasswordRequest
}

export interface AccountApiApiIdentityCurrentUserGetRequest {
}

export interface AccountApiApiIdentityLoginPostRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AccountApiapiIdentityLoginPost
     */
    loginRequest?: LoginRequest
}

export interface AccountApiApiIdentityLogoutPostRequest {
}

export interface AccountApiApiIdentityPermissionsGetRequest {
}

export interface AccountApiApiIdentityRefreshTokenPostRequest {
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiIdentityChangePasswordPostWithHttpInfo(param: AccountApiApiIdentityChangePasswordPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiIdentityChangePasswordPostWithHttpInfo(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityChangePasswordPost(param: AccountApiApiIdentityChangePasswordPostRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiIdentityChangePasswordPost(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityCurrentUserGetWithHttpInfo(param: AccountApiApiIdentityCurrentUserGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.apiIdentityCurrentUserGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityCurrentUserGet(param: AccountApiApiIdentityCurrentUserGetRequest = {}, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.apiIdentityCurrentUserGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLoginPostWithHttpInfo(param: AccountApiApiIdentityLoginPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDtoLoginResponse>> {
        return this.api.apiIdentityLoginPostWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLoginPost(param: AccountApiApiIdentityLoginPostRequest = {}, options?: ConfigurationOptions): Promise<UserDtoLoginResponse> {
        return this.api.apiIdentityLoginPost(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLogoutPostWithHttpInfo(param: AccountApiApiIdentityLogoutPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiIdentityLogoutPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLogoutPost(param: AccountApiApiIdentityLogoutPostRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiIdentityLogoutPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityPermissionsGetWithHttpInfo(param: AccountApiApiIdentityPermissionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiIdentityPermissionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityPermissionsGet(param: AccountApiApiIdentityPermissionsGetRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiIdentityPermissionsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityRefreshTokenPostWithHttpInfo(param: AccountApiApiIdentityRefreshTokenPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RefreshTokenResponse>> {
        return this.api.apiIdentityRefreshTokenPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityRefreshTokenPost(param: AccountApiApiIdentityRefreshTokenPostRequest = {}, options?: ConfigurationOptions): Promise<RefreshTokenResponse> {
        return this.api.apiIdentityRefreshTokenPost( options).toPromise();
    }

}

import { ObservableDeviceApi } from "./ObservableAPI";
import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";

export interface DeviceApiApiDevicesAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DeviceApiapiDevicesAllGet
     */
    ids?: Array<number>
}

export interface DeviceApiApiDevicesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof DeviceApiapiDevicesGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof DeviceApiapiDevicesGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DeviceApiapiDevicesGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DeviceApiapiDevicesGet
     */
    orderBy?: Array<string>
}

export interface DeviceApiApiDevicesIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApiapiDevicesIdDelete
     */
    id: number
}

export interface DeviceApiApiDevicesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApiapiDevicesIdGet
     */
    id: number
}

export interface DeviceApiApiDevicesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApiapiDevicesIdPut
     */
    id: number
    /**
     * 
     * @type CreateDeviceCommand
     * @memberof DeviceApiapiDevicesIdPut
     */
    createDeviceCommand?: CreateDeviceCommand
}

export interface DeviceApiApiDevicesPostRequest {
    /**
     * 
     * @type CreateDeviceCommand
     * @memberof DeviceApiapiDevicesPost
     */
    createDeviceCommand?: CreateDeviceCommand
}

export class ObjectDeviceApi {
    private api: ObservableDeviceApi

    public constructor(configuration: Configuration, requestFactory?: DeviceApiRequestFactory, responseProcessor?: DeviceApiResponseProcessor) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiDevicesAllGetWithHttpInfo(param: DeviceApiApiDevicesAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<DeviceDto>>> {
        return this.api.apiDevicesAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesAllGet(param: DeviceApiApiDevicesAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<DeviceDto>> {
        return this.api.apiDevicesAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesGetWithHttpInfo(param: DeviceApiApiDevicesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDtoPaginated>> {
        return this.api.apiDevicesGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesGet(param: DeviceApiApiDevicesGetRequest, options?: ConfigurationOptions): Promise<DeviceDtoPaginated> {
        return this.api.apiDevicesGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdDeleteWithHttpInfo(param: DeviceApiApiDevicesIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiDevicesIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdDelete(param: DeviceApiApiDevicesIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiDevicesIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdGetWithHttpInfo(param: DeviceApiApiDevicesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.apiDevicesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdGet(param: DeviceApiApiDevicesIdGetRequest, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.apiDevicesIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdPutWithHttpInfo(param: DeviceApiApiDevicesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.apiDevicesIdPutWithHttpInfo(param.id, param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesIdPut(param: DeviceApiApiDevicesIdPutRequest, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.apiDevicesIdPut(param.id, param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesPostWithHttpInfo(param: DeviceApiApiDevicesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.apiDevicesPostWithHttpInfo(param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDevicesPost(param: DeviceApiApiDevicesPostRequest = {}, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.apiDevicesPost(param.createDeviceCommand,  options).toPromise();
    }

}

import { ObservableDeviceCategoryApi } from "./ObservableAPI";
import { DeviceCategoryApiRequestFactory, DeviceCategoryApiResponseProcessor} from "../apis/DeviceCategoryApi";

export interface DeviceCategoryApiApiDeviceCategoriesAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DeviceCategoryApiapiDeviceCategoriesAllGet
     */
    ids?: Array<number>
}

export interface DeviceCategoryApiApiDeviceCategoriesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof DeviceCategoryApiapiDeviceCategoriesGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof DeviceCategoryApiapiDeviceCategoriesGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DeviceCategoryApiapiDeviceCategoriesGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DeviceCategoryApiapiDeviceCategoriesGet
     */
    orderBy?: Array<string>
}

export interface DeviceCategoryApiApiDeviceCategoriesIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApiapiDeviceCategoriesIdDelete
     */
    id: number
}

export interface DeviceCategoryApiApiDeviceCategoriesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApiapiDeviceCategoriesIdGet
     */
    id: number
}

export interface DeviceCategoryApiApiDeviceCategoriesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApiapiDeviceCategoriesIdPut
     */
    id: number
    /**
     * 
     * @type CreateDeviceCategoryCommand
     * @memberof DeviceCategoryApiapiDeviceCategoriesIdPut
     */
    createDeviceCategoryCommand?: CreateDeviceCategoryCommand
}

export interface DeviceCategoryApiApiDeviceCategoriesPostRequest {
    /**
     * 
     * @type CreateDeviceCategoryCommand
     * @memberof DeviceCategoryApiapiDeviceCategoriesPost
     */
    createDeviceCategoryCommand?: CreateDeviceCategoryCommand
}

export class ObjectDeviceCategoryApi {
    private api: ObservableDeviceCategoryApi

    public constructor(configuration: Configuration, requestFactory?: DeviceCategoryApiRequestFactory, responseProcessor?: DeviceCategoryApiResponseProcessor) {
        this.api = new ObservableDeviceCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesAllGetWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<DeviceCategoryDto>>> {
        return this.api.apiDeviceCategoriesAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesAllGet(param: DeviceCategoryApiApiDeviceCategoriesAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<DeviceCategoryDto>> {
        return this.api.apiDeviceCategoriesAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesGetWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDtoPaginated>> {
        return this.api.apiDeviceCategoriesGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesGet(param: DeviceCategoryApiApiDeviceCategoriesGetRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDtoPaginated> {
        return this.api.apiDeviceCategoriesGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdDeleteWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiDeviceCategoriesIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdDelete(param: DeviceCategoryApiApiDeviceCategoriesIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiDeviceCategoriesIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdGetWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.apiDeviceCategoriesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdGet(param: DeviceCategoryApiApiDeviceCategoriesIdGetRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.apiDeviceCategoriesIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdPutWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.apiDeviceCategoriesIdPutWithHttpInfo(param.id, param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesIdPut(param: DeviceCategoryApiApiDeviceCategoriesIdPutRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.apiDeviceCategoriesIdPut(param.id, param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesPostWithHttpInfo(param: DeviceCategoryApiApiDeviceCategoriesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.apiDeviceCategoriesPostWithHttpInfo(param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDeviceCategoriesPost(param: DeviceCategoryApiApiDeviceCategoriesPostRequest = {}, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.apiDeviceCategoriesPost(param.createDeviceCategoryCommand,  options).toPromise();
    }

}

import { ObservableProjectApi } from "./ObservableAPI";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi";

export interface ProjectApiApiProjectsAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof ProjectApiapiProjectsAllGet
     */
    ids?: Array<number>
}

export interface ProjectApiApiProjectsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof ProjectApiapiProjectsGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof ProjectApiapiProjectsGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProjectApiapiProjectsGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProjectApiapiProjectsGet
     */
    orderBy?: Array<string>
}

export interface ProjectApiApiProjectsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiapiProjectsIdDelete
     */
    id: number
}

export interface ProjectApiApiProjectsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiapiProjectsIdGet
     */
    id: number
}

export interface ProjectApiApiProjectsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiapiProjectsIdPut
     */
    id: number
    /**
     * 
     * @type CreateProjectCommand
     * @memberof ProjectApiapiProjectsIdPut
     */
    createProjectCommand?: CreateProjectCommand
}

export interface ProjectApiApiProjectsPostRequest {
    /**
     * 
     * @type CreateProjectCommand
     * @memberof ProjectApiapiProjectsPost
     */
    createProjectCommand?: CreateProjectCommand
}

export class ObjectProjectApi {
    private api: ObservableProjectApi

    public constructor(configuration: Configuration, requestFactory?: ProjectApiRequestFactory, responseProcessor?: ProjectApiResponseProcessor) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiProjectsAllGetWithHttpInfo(param: ProjectApiApiProjectsAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ProjectDto>>> {
        return this.api.apiProjectsAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsAllGet(param: ProjectApiApiProjectsAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<ProjectDto>> {
        return this.api.apiProjectsAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsGetWithHttpInfo(param: ProjectApiApiProjectsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
        return this.api.apiProjectsGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsGet(param: ProjectApiApiProjectsGetRequest, options?: ConfigurationOptions): Promise<ProjectDtoPaginated> {
        return this.api.apiProjectsGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdDeleteWithHttpInfo(param: ProjectApiApiProjectsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiProjectsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdDelete(param: ProjectApiApiProjectsIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiProjectsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdGetWithHttpInfo(param: ProjectApiApiProjectsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.apiProjectsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdGet(param: ProjectApiApiProjectsIdGetRequest, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.apiProjectsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdPutWithHttpInfo(param: ProjectApiApiProjectsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.apiProjectsIdPutWithHttpInfo(param.id, param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsIdPut(param: ProjectApiApiProjectsIdPutRequest, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.apiProjectsIdPut(param.id, param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsPostWithHttpInfo(param: ProjectApiApiProjectsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.apiProjectsPostWithHttpInfo(param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProjectsPost(param: ProjectApiApiProjectsPostRequest = {}, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.apiProjectsPost(param.createProjectCommand,  options).toPromise();
    }

}

import { ObservableRequestsApi } from "./ObservableAPI";
import { RequestsApiRequestFactory, RequestsApiResponseProcessor} from "../apis/RequestsApi";

export interface RequestsApiApiRequestsIdLeaveApprovalPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdLeaveApprovalPost
     */
    id: number
}

export interface RequestsApiApiRequestsIdLeaveCancelPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdLeaveCancelPost
     */
    id: number
}

export interface RequestsApiApiRequestsIdLeaveRejectPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdLeaveRejectPost
     */
    id: number
}

export interface RequestsApiApiRequestsIdTimesheetApprovalPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdTimesheetApprovalPost
     */
    id: number
}

export interface RequestsApiApiRequestsIdTimesheetCancelPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdTimesheetCancelPost
     */
    id: number
}

export interface RequestsApiApiRequestsIdTimesheetRejectPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApiapiRequestsIdTimesheetRejectPost
     */
    id: number
}

export interface RequestsApiApiRequestsLeavePostRequest {
    /**
     * 
     * @type CreateLeaveRequestDto
     * @memberof RequestsApiapiRequestsLeavePost
     */
    createLeaveRequestDto?: CreateLeaveRequestDto
}

export interface RequestsApiApiRequestsTimesheetPostRequest {
    /**
     * 
     * @type CreateTimesheetRequestDto
     * @memberof RequestsApiapiRequestsTimesheetPost
     */
    createTimesheetRequestDto?: CreateTimesheetRequestDto
}

export class ObjectRequestsApi {
    private api: ObservableRequestsApi

    public constructor(configuration: Configuration, requestFactory?: RequestsApiRequestFactory, responseProcessor?: RequestsApiResponseProcessor) {
        this.api = new ObservableRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveApprovalPostWithHttpInfo(param: RequestsApiApiRequestsIdLeaveApprovalPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        return this.api.apiRequestsIdLeaveApprovalPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveApprovalPost(param: RequestsApiApiRequestsIdLeaveApprovalPostRequest, options?: ConfigurationOptions): Promise<LeaveRequestDto> {
        return this.api.apiRequestsIdLeaveApprovalPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveCancelPostWithHttpInfo(param: RequestsApiApiRequestsIdLeaveCancelPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        return this.api.apiRequestsIdLeaveCancelPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveCancelPost(param: RequestsApiApiRequestsIdLeaveCancelPostRequest, options?: ConfigurationOptions): Promise<LeaveRequestDto> {
        return this.api.apiRequestsIdLeaveCancelPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveRejectPostWithHttpInfo(param: RequestsApiApiRequestsIdLeaveRejectPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        return this.api.apiRequestsIdLeaveRejectPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdLeaveRejectPost(param: RequestsApiApiRequestsIdLeaveRejectPostRequest, options?: ConfigurationOptions): Promise<LeaveRequestDto> {
        return this.api.apiRequestsIdLeaveRejectPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetApprovalPostWithHttpInfo(param: RequestsApiApiRequestsIdTimesheetApprovalPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        return this.api.apiRequestsIdTimesheetApprovalPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetApprovalPost(param: RequestsApiApiRequestsIdTimesheetApprovalPostRequest, options?: ConfigurationOptions): Promise<TimesheetRequestDto> {
        return this.api.apiRequestsIdTimesheetApprovalPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetCancelPostWithHttpInfo(param: RequestsApiApiRequestsIdTimesheetCancelPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        return this.api.apiRequestsIdTimesheetCancelPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetCancelPost(param: RequestsApiApiRequestsIdTimesheetCancelPostRequest, options?: ConfigurationOptions): Promise<TimesheetRequestDto> {
        return this.api.apiRequestsIdTimesheetCancelPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetRejectPostWithHttpInfo(param: RequestsApiApiRequestsIdTimesheetRejectPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        return this.api.apiRequestsIdTimesheetRejectPostWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsIdTimesheetRejectPost(param: RequestsApiApiRequestsIdTimesheetRejectPostRequest, options?: ConfigurationOptions): Promise<TimesheetRequestDto> {
        return this.api.apiRequestsIdTimesheetRejectPost(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsLeavePostWithHttpInfo(param: RequestsApiApiRequestsLeavePostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        return this.api.apiRequestsLeavePostWithHttpInfo(param.createLeaveRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsLeavePost(param: RequestsApiApiRequestsLeavePostRequest = {}, options?: ConfigurationOptions): Promise<LeaveRequestDto> {
        return this.api.apiRequestsLeavePost(param.createLeaveRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsTimesheetPostWithHttpInfo(param: RequestsApiApiRequestsTimesheetPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        return this.api.apiRequestsTimesheetPostWithHttpInfo(param.createTimesheetRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRequestsTimesheetPost(param: RequestsApiApiRequestsTimesheetPostRequest = {}, options?: ConfigurationOptions): Promise<TimesheetRequestDto> {
        return this.api.apiRequestsTimesheetPost(param.createTimesheetRequestDto,  options).toPromise();
    }

}

import { ObservableRoleApi } from "./ObservableAPI";
import { RoleApiRequestFactory, RoleApiResponseProcessor} from "../apis/RoleApi";

export interface RoleApiApiRolesAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RoleApiapiRolesAllGet
     */
    ids?: Array<string>
}

export interface RoleApiApiRolesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof RoleApiapiRolesGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof RoleApiapiRolesGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiapiRolesGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RoleApiapiRolesGet
     */
    orderBy?: Array<string>
}

export interface RoleApiApiRolesIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiapiRolesIdDelete
     */
    id: string
}

export interface RoleApiApiRolesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiapiRolesIdGet
     */
    id: string
}

export interface RoleApiApiRolesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiapiRolesIdPut
     */
    id: string
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleApiapiRolesIdPut
     */
    roleCreateUpdateRequest?: RoleCreateUpdateRequest
}

export interface RoleApiApiRolesPostRequest {
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleApiapiRolesPost
     */
    roleCreateUpdateRequest?: RoleCreateUpdateRequest
}

export class ObjectRoleApi {
    private api: ObservableRoleApi

    public constructor(configuration: Configuration, requestFactory?: RoleApiRequestFactory, responseProcessor?: RoleApiResponseProcessor) {
        this.api = new ObservableRoleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiRolesAllGetWithHttpInfo(param: RoleApiApiRolesAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
        return this.api.apiRolesAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesAllGet(param: RoleApiApiRolesAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<RoleDto>> {
        return this.api.apiRolesAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesGetWithHttpInfo(param: RoleApiApiRolesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDtoPaginated>> {
        return this.api.apiRolesGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesGet(param: RoleApiApiRolesGetRequest, options?: ConfigurationOptions): Promise<RoleDtoPaginated> {
        return this.api.apiRolesGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdDeleteWithHttpInfo(param: RoleApiApiRolesIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiRolesIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdDelete(param: RoleApiApiRolesIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiRolesIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdGetWithHttpInfo(param: RoleApiApiRolesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.apiRolesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdGet(param: RoleApiApiRolesIdGetRequest, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.apiRolesIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdPutWithHttpInfo(param: RoleApiApiRolesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.apiRolesIdPutWithHttpInfo(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesIdPut(param: RoleApiApiRolesIdPutRequest, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.apiRolesIdPut(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesPostWithHttpInfo(param: RoleApiApiRolesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.apiRolesPostWithHttpInfo(param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRolesPost(param: RoleApiApiRolesPostRequest = {}, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.apiRolesPost(param.roleCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableTeamApi } from "./ObservableAPI";
import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";

export interface TeamApiApiTeamsAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof TeamApiapiTeamsAllGet
     */
    ids?: Array<number>
}

export interface TeamApiApiTeamsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof TeamApiapiTeamsGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof TeamApiapiTeamsGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamApiapiTeamsGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TeamApiapiTeamsGet
     */
    orderBy?: Array<string>
}

export interface TeamApiApiTeamsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiapiTeamsIdDelete
     */
    id: number
}

export interface TeamApiApiTeamsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiapiTeamsIdGet
     */
    id: number
}

export interface TeamApiApiTeamsIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiapiTeamsIdPut
     */
    id: number
    /**
     * 
     * @type CreateTeamCommand
     * @memberof TeamApiapiTeamsIdPut
     */
    createTeamCommand?: CreateTeamCommand
}

export interface TeamApiApiTeamsPostRequest {
    /**
     * 
     * @type CreateTeamCommand
     * @memberof TeamApiapiTeamsPost
     */
    createTeamCommand?: CreateTeamCommand
}

export class ObjectTeamApi {
    private api: ObservableTeamApi

    public constructor(configuration: Configuration, requestFactory?: TeamApiRequestFactory, responseProcessor?: TeamApiResponseProcessor) {
        this.api = new ObservableTeamApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiTeamsAllGetWithHttpInfo(param: TeamApiApiTeamsAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TeamDto>>> {
        return this.api.apiTeamsAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsAllGet(param: TeamApiApiTeamsAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<TeamDto>> {
        return this.api.apiTeamsAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsGetWithHttpInfo(param: TeamApiApiTeamsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
        return this.api.apiTeamsGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsGet(param: TeamApiApiTeamsGetRequest, options?: ConfigurationOptions): Promise<TeamDtoPaginated> {
        return this.api.apiTeamsGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdDeleteWithHttpInfo(param: TeamApiApiTeamsIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiTeamsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdDelete(param: TeamApiApiTeamsIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiTeamsIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdGetWithHttpInfo(param: TeamApiApiTeamsIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamFullDto>> {
        return this.api.apiTeamsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdGet(param: TeamApiApiTeamsIdGetRequest, options?: ConfigurationOptions): Promise<TeamFullDto> {
        return this.api.apiTeamsIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdPutWithHttpInfo(param: TeamApiApiTeamsIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.apiTeamsIdPutWithHttpInfo(param.id, param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsIdPut(param: TeamApiApiTeamsIdPutRequest, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.apiTeamsIdPut(param.id, param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsPostWithHttpInfo(param: TeamApiApiTeamsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.apiTeamsPostWithHttpInfo(param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTeamsPost(param: TeamApiApiTeamsPostRequest = {}, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.apiTeamsPost(param.createTeamCommand,  options).toPromise();
    }

}

import { ObservableTimesheetApi } from "./ObservableAPI";
import { TimesheetApiRequestFactory, TimesheetApiResponseProcessor} from "../apis/TimesheetApi";

export interface TimesheetApiApiTimesheetsCheckinPostRequest {
}

export interface TimesheetApiApiTimesheetsCheckoutPostRequest {
}

export interface TimesheetApiApiTimesheetsMonthlyAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApiapiTimesheetsMonthlyAllGet
     */
    month?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApiapiTimesheetsMonthlyAllGet
     */
    year?: number
}

export interface TimesheetApiApiTimesheetsMonthlyGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApiapiTimesheetsMonthlyGet
     */
    month?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApiapiTimesheetsMonthlyGet
     */
    year?: number
}

export interface TimesheetApiApiTimesheetsTodayGetRequest {
}

export class ObjectTimesheetApi {
    private api: ObservableTimesheetApi

    public constructor(configuration: Configuration, requestFactory?: TimesheetApiRequestFactory, responseProcessor?: TimesheetApiResponseProcessor) {
        this.api = new ObservableTimesheetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsCheckinPostWithHttpInfo(param: TimesheetApiApiTimesheetsCheckinPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.apiTimesheetsCheckinPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsCheckinPost(param: TimesheetApiApiTimesheetsCheckinPostRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.apiTimesheetsCheckinPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsCheckoutPostWithHttpInfo(param: TimesheetApiApiTimesheetsCheckoutPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.apiTimesheetsCheckoutPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsCheckoutPost(param: TimesheetApiApiTimesheetsCheckoutPostRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.apiTimesheetsCheckoutPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsMonthlyAllGetWithHttpInfo(param: TimesheetApiApiTimesheetsMonthlyAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetFullDto>>> {
        return this.api.apiTimesheetsMonthlyAllGetWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsMonthlyAllGet(param: TimesheetApiApiTimesheetsMonthlyAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetFullDto>> {
        return this.api.apiTimesheetsMonthlyAllGet(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsMonthlyGetWithHttpInfo(param: TimesheetApiApiTimesheetsMonthlyGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetDto>>> {
        return this.api.apiTimesheetsMonthlyGetWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsMonthlyGet(param: TimesheetApiApiTimesheetsMonthlyGetRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetDto>> {
        return this.api.apiTimesheetsMonthlyGet(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsTodayGetWithHttpInfo(param: TimesheetApiApiTimesheetsTodayGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.apiTimesheetsTodayGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTimesheetsTodayGet(param: TimesheetApiApiTimesheetsTodayGetRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.apiTimesheetsTodayGet( options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiApiUsersAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiapiUsersAllGet
     */
    ids?: Array<string>
}

export interface UserApiApiUsersGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof UserApiapiUsersGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof UserApiapiUsersGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiapiUsersGet
     */
    orderBy?: Array<string>
}

export interface UserApiApiUsersIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersIdDelete
     */
    id: string
}

export interface UserApiApiUsersIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersIdGet
     */
    id: string
}

export interface UserApiApiUsersIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersIdPut
     */
    id: string
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserApiapiUsersIdPut
     */
    userCreateUpdateRequest?: UserCreateUpdateRequest
}

export interface UserApiApiUsersPostRequest {
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserApiapiUsersPost
     */
    userCreateUpdateRequest?: UserCreateUpdateRequest
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiUsersAllGetWithHttpInfo(param: UserApiApiUsersAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<UserDto>>> {
        return this.api.apiUsersAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersAllGet(param: UserApiApiUsersAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<UserDto>> {
        return this.api.apiUsersAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGetWithHttpInfo(param: UserApiApiUsersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.apiUsersGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGet(param: UserApiApiUsersGetRequest, options?: ConfigurationOptions): Promise<UserDtoPaginated> {
        return this.api.apiUsersGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDeleteWithHttpInfo(param: UserApiApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDelete(param: UserApiApiUsersIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdGetWithHttpInfo(param: UserApiApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserFullDto>> {
        return this.api.apiUsersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdGet(param: UserApiApiUsersIdGetRequest, options?: ConfigurationOptions): Promise<UserFullDto> {
        return this.api.apiUsersIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPutWithHttpInfo(param: UserApiApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.apiUsersIdPutWithHttpInfo(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPut(param: UserApiApiUsersIdPutRequest, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.apiUsersIdPut(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPostWithHttpInfo(param: UserApiApiUsersPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.apiUsersPostWithHttpInfo(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPost(param: UserApiApiUsersPostRequest = {}, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.apiUsersPost(param.userCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableWorkTimeApi } from "./ObservableAPI";
import { WorkTimeApiRequestFactory, WorkTimeApiResponseProcessor} from "../apis/WorkTimeApi";

export interface WorkTimeApiApiWorkTimesAllGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof WorkTimeApiapiWorkTimesAllGet
     */
    ids?: Array<number>
}

export interface WorkTimeApiApiWorkTimesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof WorkTimeApiapiWorkTimesGet
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof WorkTimeApiapiWorkTimesGet
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkTimeApiapiWorkTimesGet
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WorkTimeApiapiWorkTimesGet
     */
    orderBy?: Array<string>
}

export interface WorkTimeApiApiWorkTimesIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiapiWorkTimesIdDelete
     */
    id: number
}

export interface WorkTimeApiApiWorkTimesIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiapiWorkTimesIdGet
     */
    id: number
}

export interface WorkTimeApiApiWorkTimesIdPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiapiWorkTimesIdPut
     */
    id: number
    /**
     * 
     * @type CreateWorkTimeCommand
     * @memberof WorkTimeApiapiWorkTimesIdPut
     */
    createWorkTimeCommand?: CreateWorkTimeCommand
}

export interface WorkTimeApiApiWorkTimesPostRequest {
    /**
     * 
     * @type CreateWorkTimeCommand
     * @memberof WorkTimeApiapiWorkTimesPost
     */
    createWorkTimeCommand?: CreateWorkTimeCommand
}

export class ObjectWorkTimeApi {
    private api: ObservableWorkTimeApi

    public constructor(configuration: Configuration, requestFactory?: WorkTimeApiRequestFactory, responseProcessor?: WorkTimeApiResponseProcessor) {
        this.api = new ObservableWorkTimeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesAllGetWithHttpInfo(param: WorkTimeApiApiWorkTimesAllGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<WorkTimeDto>>> {
        return this.api.apiWorkTimesAllGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesAllGet(param: WorkTimeApiApiWorkTimesAllGetRequest = {}, options?: ConfigurationOptions): Promise<Array<WorkTimeDto>> {
        return this.api.apiWorkTimesAllGet(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesGetWithHttpInfo(param: WorkTimeApiApiWorkTimesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
        return this.api.apiWorkTimesGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesGet(param: WorkTimeApiApiWorkTimesGetRequest, options?: ConfigurationOptions): Promise<WorkTimeDtoPaginated> {
        return this.api.apiWorkTimesGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdDeleteWithHttpInfo(param: WorkTimeApiApiWorkTimesIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiWorkTimesIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdDelete(param: WorkTimeApiApiWorkTimesIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiWorkTimesIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdGetWithHttpInfo(param: WorkTimeApiApiWorkTimesIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.apiWorkTimesIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdGet(param: WorkTimeApiApiWorkTimesIdGetRequest, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.apiWorkTimesIdGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdPutWithHttpInfo(param: WorkTimeApiApiWorkTimesIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.apiWorkTimesIdPutWithHttpInfo(param.id, param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesIdPut(param: WorkTimeApiApiWorkTimesIdPutRequest, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.apiWorkTimesIdPut(param.id, param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesPostWithHttpInfo(param: WorkTimeApiApiWorkTimesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.apiWorkTimesPostWithHttpInfo(param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiWorkTimesPost(param: WorkTimeApiApiWorkTimesPostRequest = {}, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.apiWorkTimesPost(param.createWorkTimeCommand,  options).toPromise();
    }

}
