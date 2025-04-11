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
import { CreateTimesheetAdjustmentRequestDto } from '../models/CreateTimesheetAdjustmentRequestDto';
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
import { LoginRequest } from '../models/LoginRequest';
import { Nationality } from '../models/Nationality';
import { NotificationDto } from '../models/NotificationDto';
import { NotificationDtoCursorPaginated } from '../models/NotificationDtoCursorPaginated';
import { NotificationType } from '../models/NotificationType';
import { Permission } from '../models/Permission';
import { ProjectDto } from '../models/ProjectDto';
import { ProjectDtoPaginated } from '../models/ProjectDtoPaginated';
import { ProjectMinimalDto } from '../models/ProjectMinimalDto';
import { ProjectStatus } from '../models/ProjectStatus';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { RequestCombinedDto } from '../models/RequestCombinedDto';
import { RequestCombinedMinimalDto } from '../models/RequestCombinedMinimalDto';
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
import { TimesheetDtoTimesheetResponse } from '../models/TimesheetDtoTimesheetResponse';
import { TimesheetFullDto } from '../models/TimesheetFullDto';
import { TimesheetMinimalDto } from '../models/TimesheetMinimalDto';
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

export interface AccountApiAccountChangePasswordRequest {
    /**
     * 
     * @type ChangePasswordRequest
     * @memberof AccountApiaccountChangePassword
     */
    changePasswordRequest?: ChangePasswordRequest
}

export interface AccountApiAccountGetCurrentUserRequest {
}

export interface AccountApiAccountGetPermissionsRequest {
}

export interface AccountApiAccountLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AccountApiaccountLogin
     */
    loginRequest?: LoginRequest
}

export interface AccountApiAccountLogoutRequest {
}

export interface AccountApiAccountRefreshTokenRequest {
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public accountChangePasswordWithHttpInfo(param: AccountApiAccountChangePasswordRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.accountChangePasswordWithHttpInfo(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountChangePassword(param: AccountApiAccountChangePasswordRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.accountChangePassword(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetCurrentUserWithHttpInfo(param: AccountApiAccountGetCurrentUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.accountGetCurrentUserWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetCurrentUser(param: AccountApiAccountGetCurrentUserRequest = {}, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.accountGetCurrentUser( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetPermissionsWithHttpInfo(param: AccountApiAccountGetPermissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        return this.api.accountGetPermissionsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetPermissions(param: AccountApiAccountGetPermissionsRequest = {}, options?: ConfigurationOptions): Promise<Array<string>> {
        return this.api.accountGetPermissions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLoginWithHttpInfo(param: AccountApiAccountLoginRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDtoLoginResponse>> {
        return this.api.accountLoginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogin(param: AccountApiAccountLoginRequest = {}, options?: ConfigurationOptions): Promise<UserDtoLoginResponse> {
        return this.api.accountLogin(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogoutWithHttpInfo(param: AccountApiAccountLogoutRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.accountLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogout(param: AccountApiAccountLogoutRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.accountLogout( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountRefreshTokenWithHttpInfo(param: AccountApiAccountRefreshTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RefreshTokenResponse>> {
        return this.api.accountRefreshTokenWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountRefreshToken(param: AccountApiAccountRefreshTokenRequest = {}, options?: ConfigurationOptions): Promise<RefreshTokenResponse> {
        return this.api.accountRefreshToken( options).toPromise();
    }

}

import { ObservableDeviceApi } from "./ObservableAPI";
import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";

export interface DeviceApiDeviceCreateRequest {
    /**
     * 
     * @type CreateDeviceCommand
     * @memberof DeviceApideviceCreate
     */
    createDeviceCommand?: CreateDeviceCommand
}

export interface DeviceApiDeviceDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApideviceDelete
     */
    id: number
}

export interface DeviceApiDeviceGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DeviceApideviceGetAll
     */
    ids?: Array<number>
}

export interface DeviceApiDeviceGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApideviceGetById
     */
    id: number
}

export interface DeviceApiDeviceSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof DeviceApideviceSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof DeviceApideviceSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DeviceApideviceSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DeviceApideviceSearch
     */
    orderBy?: Array<string>
}

export interface DeviceApiDeviceUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceApideviceUpdate
     */
    id: number
    /**
     * 
     * @type CreateDeviceCommand
     * @memberof DeviceApideviceUpdate
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
    public deviceCreateWithHttpInfo(param: DeviceApiDeviceCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.deviceCreateWithHttpInfo(param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCreate(param: DeviceApiDeviceCreateRequest = {}, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.deviceCreate(param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceDeleteWithHttpInfo(param: DeviceApiDeviceDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deviceDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceDelete(param: DeviceApiDeviceDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deviceDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceGetAllWithHttpInfo(param: DeviceApiDeviceGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<DeviceDto>>> {
        return this.api.deviceGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceGetAll(param: DeviceApiDeviceGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<DeviceDto>> {
        return this.api.deviceGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceGetByIdWithHttpInfo(param: DeviceApiDeviceGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.deviceGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceGetById(param: DeviceApiDeviceGetByIdRequest, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.deviceGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceSearchWithHttpInfo(param: DeviceApiDeviceSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDtoPaginated>> {
        return this.api.deviceSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceSearch(param: DeviceApiDeviceSearchRequest, options?: ConfigurationOptions): Promise<DeviceDtoPaginated> {
        return this.api.deviceSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceUpdateWithHttpInfo(param: DeviceApiDeviceUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        return this.api.deviceUpdateWithHttpInfo(param.id, param.createDeviceCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceUpdate(param: DeviceApiDeviceUpdateRequest, options?: ConfigurationOptions): Promise<DeviceDto> {
        return this.api.deviceUpdate(param.id, param.createDeviceCommand,  options).toPromise();
    }

}

import { ObservableDeviceCategoryApi } from "./ObservableAPI";
import { DeviceCategoryApiRequestFactory, DeviceCategoryApiResponseProcessor} from "../apis/DeviceCategoryApi";

export interface DeviceCategoryApiDeviceCategoryCreateRequest {
    /**
     * 
     * @type CreateDeviceCategoryCommand
     * @memberof DeviceCategoryApideviceCategoryCreate
     */
    createDeviceCategoryCommand?: CreateDeviceCategoryCommand
}

export interface DeviceCategoryApiDeviceCategoryDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApideviceCategoryDelete
     */
    id: number
}

export interface DeviceCategoryApiDeviceCategoryGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DeviceCategoryApideviceCategoryGetAll
     */
    ids?: Array<number>
}

export interface DeviceCategoryApiDeviceCategoryGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApideviceCategoryGetById
     */
    id: number
}

export interface DeviceCategoryApiDeviceCategorySearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof DeviceCategoryApideviceCategorySearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof DeviceCategoryApideviceCategorySearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DeviceCategoryApideviceCategorySearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DeviceCategoryApideviceCategorySearch
     */
    orderBy?: Array<string>
}

export interface DeviceCategoryApiDeviceCategoryUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DeviceCategoryApideviceCategoryUpdate
     */
    id: number
    /**
     * 
     * @type CreateDeviceCategoryCommand
     * @memberof DeviceCategoryApideviceCategoryUpdate
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
    public deviceCategoryCreateWithHttpInfo(param: DeviceCategoryApiDeviceCategoryCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.deviceCategoryCreateWithHttpInfo(param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryCreate(param: DeviceCategoryApiDeviceCategoryCreateRequest = {}, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.deviceCategoryCreate(param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryDeleteWithHttpInfo(param: DeviceCategoryApiDeviceCategoryDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deviceCategoryDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryDelete(param: DeviceCategoryApiDeviceCategoryDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deviceCategoryDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryGetAllWithHttpInfo(param: DeviceCategoryApiDeviceCategoryGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<DeviceCategoryDto>>> {
        return this.api.deviceCategoryGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryGetAll(param: DeviceCategoryApiDeviceCategoryGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<DeviceCategoryDto>> {
        return this.api.deviceCategoryGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryGetByIdWithHttpInfo(param: DeviceCategoryApiDeviceCategoryGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.deviceCategoryGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryGetById(param: DeviceCategoryApiDeviceCategoryGetByIdRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.deviceCategoryGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategorySearchWithHttpInfo(param: DeviceCategoryApiDeviceCategorySearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDtoPaginated>> {
        return this.api.deviceCategorySearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategorySearch(param: DeviceCategoryApiDeviceCategorySearchRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDtoPaginated> {
        return this.api.deviceCategorySearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryUpdateWithHttpInfo(param: DeviceCategoryApiDeviceCategoryUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        return this.api.deviceCategoryUpdateWithHttpInfo(param.id, param.createDeviceCategoryCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceCategoryUpdate(param: DeviceCategoryApiDeviceCategoryUpdateRequest, options?: ConfigurationOptions): Promise<DeviceCategoryDto> {
        return this.api.deviceCategoryUpdate(param.id, param.createDeviceCategoryCommand,  options).toPromise();
    }

}

import { ObservableNotificationApi } from "./ObservableAPI";
import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";

export interface NotificationApiNotificationSearchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof NotificationApinotificationSearch
     */
    lastId?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApinotificationSearch
     */
    searchString?: string
}

export class ObjectNotificationApi {
    private api: ObservableNotificationApi

    public constructor(configuration: Configuration, requestFactory?: NotificationApiRequestFactory, responseProcessor?: NotificationApiResponseProcessor) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public notificationSearchWithHttpInfo(param: NotificationApiNotificationSearchRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<NotificationDtoCursorPaginated>> {
        return this.api.notificationSearchWithHttpInfo(param.lastId, param.searchString,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public notificationSearch(param: NotificationApiNotificationSearchRequest = {}, options?: ConfigurationOptions): Promise<NotificationDtoCursorPaginated> {
        return this.api.notificationSearch(param.lastId, param.searchString,  options).toPromise();
    }

}

import { ObservableProjectApi } from "./ObservableAPI";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi";

export interface ProjectApiProjectCreateRequest {
    /**
     * 
     * @type CreateProjectCommand
     * @memberof ProjectApiprojectCreate
     */
    createProjectCommand?: CreateProjectCommand
}

export interface ProjectApiProjectDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiprojectDelete
     */
    id: number
}

export interface ProjectApiProjectGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof ProjectApiprojectGetAll
     */
    ids?: Array<number>
}

export interface ProjectApiProjectGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiprojectGetById
     */
    id: number
}

export interface ProjectApiProjectSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof ProjectApiprojectSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof ProjectApiprojectSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProjectApiprojectSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProjectApiprojectSearch
     */
    orderBy?: Array<string>
}

export interface ProjectApiProjectUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ProjectApiprojectUpdate
     */
    id: number
    /**
     * 
     * @type CreateProjectCommand
     * @memberof ProjectApiprojectUpdate
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
    public projectCreateWithHttpInfo(param: ProjectApiProjectCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.projectCreateWithHttpInfo(param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectCreate(param: ProjectApiProjectCreateRequest = {}, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.projectCreate(param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectDeleteWithHttpInfo(param: ProjectApiProjectDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.projectDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectDelete(param: ProjectApiProjectDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.projectDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectGetAllWithHttpInfo(param: ProjectApiProjectGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<ProjectDto>>> {
        return this.api.projectGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectGetAll(param: ProjectApiProjectGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<ProjectDto>> {
        return this.api.projectGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectGetByIdWithHttpInfo(param: ProjectApiProjectGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.projectGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectGetById(param: ProjectApiProjectGetByIdRequest, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.projectGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectSearchWithHttpInfo(param: ProjectApiProjectSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
        return this.api.projectSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectSearch(param: ProjectApiProjectSearchRequest, options?: ConfigurationOptions): Promise<ProjectDtoPaginated> {
        return this.api.projectSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectUpdateWithHttpInfo(param: ProjectApiProjectUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.projectUpdateWithHttpInfo(param.id, param.createProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectUpdate(param: ProjectApiProjectUpdateRequest, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.projectUpdate(param.id, param.createProjectCommand,  options).toPromise();
    }

}

import { ObservableRequestsApi } from "./ObservableAPI";
import { RequestsApiRequestFactory, RequestsApiResponseProcessor} from "../apis/RequestsApi";

export interface RequestsApiLeaveRequestApprovalRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApileaveRequestApprovalRequest
     */
    id: number
}

export interface RequestsApiLeaveRequestCancelRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApileaveRequestCancelRequest
     */
    id: number
}

export interface RequestsApiLeaveRequestCreateRequestRequest {
    /**
     * 
     * @type CreateLeaveRequestDto
     * @memberof RequestsApileaveRequestCreateRequest
     */
    createLeaveRequestDto?: CreateLeaveRequestDto
}

export interface RequestsApiLeaveRequestRejectRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApileaveRequestRejectRequest
     */
    id: number
}

export interface RequestsApiTimesheetAdjustmentRequestApprovalRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApitimesheetAdjustmentRequestApprovalRequest
     */
    id: number
}

export interface RequestsApiTimesheetAdjustmentRequestCancelRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApitimesheetAdjustmentRequestCancelRequest
     */
    id: number
}

export interface RequestsApiTimesheetAdjustmentRequestCreateRequestRequest {
    /**
     * 
     * @type CreateTimesheetAdjustmentRequestDto
     * @memberof RequestsApitimesheetAdjustmentRequestCreateRequest
     */
    createTimesheetAdjustmentRequestDto?: CreateTimesheetAdjustmentRequestDto
}

export interface RequestsApiTimesheetAdjustmentRequestRejectRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RequestsApitimesheetAdjustmentRequestRejectRequest
     */
    id: number
}

export class ObjectRequestsApi {
    private api: ObservableRequestsApi

    public constructor(configuration: Configuration, requestFactory?: RequestsApiRequestFactory, responseProcessor?: RequestsApiResponseProcessor) {
        this.api = new ObservableRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public leaveRequestApprovalRequestWithHttpInfo(param: RequestsApiLeaveRequestApprovalRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.leaveRequestApprovalRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestApprovalRequest(param: RequestsApiLeaveRequestApprovalRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.leaveRequestApprovalRequest(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestCancelRequestWithHttpInfo(param: RequestsApiLeaveRequestCancelRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.leaveRequestCancelRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestCancelRequest(param: RequestsApiLeaveRequestCancelRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.leaveRequestCancelRequest(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestCreateRequestWithHttpInfo(param: RequestsApiLeaveRequestCreateRequestRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.leaveRequestCreateRequestWithHttpInfo(param.createLeaveRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestCreateRequest(param: RequestsApiLeaveRequestCreateRequestRequest = {}, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.leaveRequestCreateRequest(param.createLeaveRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestRejectRequestWithHttpInfo(param: RequestsApiLeaveRequestRejectRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.leaveRequestRejectRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveRequestRejectRequest(param: RequestsApiLeaveRequestRejectRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.leaveRequestRejectRequest(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestApprovalRequestWithHttpInfo(param: RequestsApiTimesheetAdjustmentRequestApprovalRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.timesheetAdjustmentRequestApprovalRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestApprovalRequest(param: RequestsApiTimesheetAdjustmentRequestApprovalRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.timesheetAdjustmentRequestApprovalRequest(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestCancelRequestWithHttpInfo(param: RequestsApiTimesheetAdjustmentRequestCancelRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.timesheetAdjustmentRequestCancelRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestCancelRequest(param: RequestsApiTimesheetAdjustmentRequestCancelRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.timesheetAdjustmentRequestCancelRequest(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestCreateRequestWithHttpInfo(param: RequestsApiTimesheetAdjustmentRequestCreateRequestRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.timesheetAdjustmentRequestCreateRequestWithHttpInfo(param.createTimesheetAdjustmentRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestCreateRequest(param: RequestsApiTimesheetAdjustmentRequestCreateRequestRequest = {}, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.timesheetAdjustmentRequestCreateRequest(param.createTimesheetAdjustmentRequestDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestRejectRequestWithHttpInfo(param: RequestsApiTimesheetAdjustmentRequestRejectRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<RequestCombinedDto>> {
        return this.api.timesheetAdjustmentRequestRejectRequestWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetAdjustmentRequestRejectRequest(param: RequestsApiTimesheetAdjustmentRequestRejectRequestRequest, options?: ConfigurationOptions): Promise<RequestCombinedDto> {
        return this.api.timesheetAdjustmentRequestRejectRequest(param.id,  options).toPromise();
    }

}

import { ObservableRoleApi } from "./ObservableAPI";
import { RoleApiRequestFactory, RoleApiResponseProcessor} from "../apis/RoleApi";

export interface RoleApiRoleCreateRequest {
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleApiroleCreate
     */
    roleCreateUpdateRequest?: RoleCreateUpdateRequest
}

export interface RoleApiRoleDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiroleDelete
     */
    id: string
}

export interface RoleApiRoleGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RoleApiroleGetAll
     */
    ids?: Array<string>
}

export interface RoleApiRoleGetAllByNamesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RoleApiroleGetAllByNames
     */
    names?: Array<string>
}

export interface RoleApiRoleGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiroleGetById
     */
    id: string
}

export interface RoleApiRoleSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof RoleApiroleSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof RoleApiroleSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiroleSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RoleApiroleSearch
     */
    orderBy?: Array<string>
}

export interface RoleApiRoleUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RoleApiroleUpdate
     */
    id: string
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleApiroleUpdate
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
    public roleCreateWithHttpInfo(param: RoleApiRoleCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.roleCreateWithHttpInfo(param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleCreate(param: RoleApiRoleCreateRequest = {}, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.roleCreate(param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleDeleteWithHttpInfo(param: RoleApiRoleDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.roleDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleDelete(param: RoleApiRoleDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.roleDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetAllWithHttpInfo(param: RoleApiRoleGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
        return this.api.roleGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetAll(param: RoleApiRoleGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<RoleDto>> {
        return this.api.roleGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetAllByNamesWithHttpInfo(param: RoleApiRoleGetAllByNamesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
        return this.api.roleGetAllByNamesWithHttpInfo(param.names,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetAllByNames(param: RoleApiRoleGetAllByNamesRequest = {}, options?: ConfigurationOptions): Promise<Array<RoleDto>> {
        return this.api.roleGetAllByNames(param.names,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetByIdWithHttpInfo(param: RoleApiRoleGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.roleGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetById(param: RoleApiRoleGetByIdRequest, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.roleGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleSearchWithHttpInfo(param: RoleApiRoleSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDtoPaginated>> {
        return this.api.roleSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleSearch(param: RoleApiRoleSearchRequest, options?: ConfigurationOptions): Promise<RoleDtoPaginated> {
        return this.api.roleSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleUpdateWithHttpInfo(param: RoleApiRoleUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        return this.api.roleUpdateWithHttpInfo(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleUpdate(param: RoleApiRoleUpdateRequest, options?: ConfigurationOptions): Promise<RoleDto> {
        return this.api.roleUpdate(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableTeamApi } from "./ObservableAPI";
import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";

export interface TeamApiTeamCreateRequest {
    /**
     * 
     * @type CreateTeamCommand
     * @memberof TeamApiteamCreate
     */
    createTeamCommand?: CreateTeamCommand
}

export interface TeamApiTeamDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiteamDelete
     */
    id: number
}

export interface TeamApiTeamGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof TeamApiteamGetAll
     */
    ids?: Array<number>
}

export interface TeamApiTeamGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiteamGetById
     */
    id: number
}

export interface TeamApiTeamSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof TeamApiteamSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof TeamApiteamSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamApiteamSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TeamApiteamSearch
     */
    orderBy?: Array<string>
}

export interface TeamApiTeamUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamApiteamUpdate
     */
    id: number
    /**
     * 
     * @type CreateTeamCommand
     * @memberof TeamApiteamUpdate
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
    public teamCreateWithHttpInfo(param: TeamApiTeamCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.teamCreateWithHttpInfo(param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamCreate(param: TeamApiTeamCreateRequest = {}, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.teamCreate(param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamDeleteWithHttpInfo(param: TeamApiTeamDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamDelete(param: TeamApiTeamDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetAllWithHttpInfo(param: TeamApiTeamGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TeamDto>>> {
        return this.api.teamGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetAll(param: TeamApiTeamGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<TeamDto>> {
        return this.api.teamGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetByIdWithHttpInfo(param: TeamApiTeamGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamFullDto>> {
        return this.api.teamGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetById(param: TeamApiTeamGetByIdRequest, options?: ConfigurationOptions): Promise<TeamFullDto> {
        return this.api.teamGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamSearchWithHttpInfo(param: TeamApiTeamSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
        return this.api.teamSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamSearch(param: TeamApiTeamSearchRequest, options?: ConfigurationOptions): Promise<TeamDtoPaginated> {
        return this.api.teamSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamUpdateWithHttpInfo(param: TeamApiTeamUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.teamUpdateWithHttpInfo(param.id, param.createTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamUpdate(param: TeamApiTeamUpdateRequest, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.teamUpdate(param.id, param.createTeamCommand,  options).toPromise();
    }

}

import { ObservableTimesheetApi } from "./ObservableAPI";
import { TimesheetApiRequestFactory, TimesheetApiResponseProcessor} from "../apis/TimesheetApi";

export interface TimesheetApiTimesheetCheckInRequest {
}

export interface TimesheetApiTimesheetCheckOutRequest {
}

export interface TimesheetApiTimesheetGetCurrentUserMonthlyTimesheetsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApitimesheetGetCurrentUserMonthlyTimesheets
     */
    month?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApitimesheetGetCurrentUserMonthlyTimesheets
     */
    year?: number
}

export interface TimesheetApiTimesheetGetMonthlyTimesheetsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApitimesheetGetMonthlyTimesheets
     */
    month?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TimesheetApitimesheetGetMonthlyTimesheets
     */
    year?: number
}

export interface TimesheetApiTimesheetGetTodayTimesheetRequest {
}

export class ObjectTimesheetApi {
    private api: ObservableTimesheetApi

    public constructor(configuration: Configuration, requestFactory?: TimesheetApiRequestFactory, responseProcessor?: TimesheetApiResponseProcessor) {
        this.api = new ObservableTimesheetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public timesheetCheckInWithHttpInfo(param: TimesheetApiTimesheetCheckInRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.timesheetCheckInWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckIn(param: TimesheetApiTimesheetCheckInRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.timesheetCheckIn( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckOutWithHttpInfo(param: TimesheetApiTimesheetCheckOutRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.timesheetCheckOutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckOut(param: TimesheetApiTimesheetCheckOutRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.timesheetCheckOut( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(param: TimesheetApiTimesheetGetCurrentUserMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetDto>>> {
        return this.api.timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetCurrentUserMonthlyTimesheets(param: TimesheetApiTimesheetGetCurrentUserMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetDto>> {
        return this.api.timesheetGetCurrentUserMonthlyTimesheets(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetMonthlyTimesheetsWithHttpInfo(param: TimesheetApiTimesheetGetMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetFullDto>>> {
        return this.api.timesheetGetMonthlyTimesheetsWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetMonthlyTimesheets(param: TimesheetApiTimesheetGetMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetFullDto>> {
        return this.api.timesheetGetMonthlyTimesheets(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetTodayTimesheetWithHttpInfo(param: TimesheetApiTimesheetGetTodayTimesheetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        return this.api.timesheetGetTodayTimesheetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetTodayTimesheet(param: TimesheetApiTimesheetGetTodayTimesheetRequest = {}, options?: ConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        return this.api.timesheetGetTodayTimesheet( options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiUserCreateRequest {
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserApiuserCreate
     */
    userCreateUpdateRequest?: UserCreateUpdateRequest
}

export interface UserApiUserDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserDelete
     */
    id: string
}

export interface UserApiUserGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiuserGetAll
     */
    ids?: Array<string>
}

export interface UserApiUserGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserGetById
     */
    id: string
}

export interface UserApiUserSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof UserApiuserSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof UserApiuserSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiuserSearch
     */
    orderBy?: Array<string>
}

export interface UserApiUserUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserUpdate
     */
    id: string
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserApiuserUpdate
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
    public userCreateWithHttpInfo(param: UserApiUserCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.userCreateWithHttpInfo(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userCreate(param: UserApiUserCreateRequest = {}, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.userCreate(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userDeleteWithHttpInfo(param: UserApiUserDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.userDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userDelete(param: UserApiUserDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.userDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetAllWithHttpInfo(param: UserApiUserGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<UserDto>>> {
        return this.api.userGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetAll(param: UserApiUserGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<UserDto>> {
        return this.api.userGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetByIdWithHttpInfo(param: UserApiUserGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserFullDto>> {
        return this.api.userGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetById(param: UserApiUserGetByIdRequest, options?: ConfigurationOptions): Promise<UserFullDto> {
        return this.api.userGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userSearchWithHttpInfo(param: UserApiUserSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.userSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userSearch(param: UserApiUserSearchRequest, options?: ConfigurationOptions): Promise<UserDtoPaginated> {
        return this.api.userSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userUpdateWithHttpInfo(param: UserApiUserUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDto>> {
        return this.api.userUpdateWithHttpInfo(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userUpdate(param: UserApiUserUpdateRequest, options?: ConfigurationOptions): Promise<UserDto> {
        return this.api.userUpdate(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableWorkTimeApi } from "./ObservableAPI";
import { WorkTimeApiRequestFactory, WorkTimeApiResponseProcessor} from "../apis/WorkTimeApi";

export interface WorkTimeApiWorkTimeCreateRequest {
    /**
     * 
     * @type CreateWorkTimeCommand
     * @memberof WorkTimeApiworkTimeCreate
     */
    createWorkTimeCommand?: CreateWorkTimeCommand
}

export interface WorkTimeApiWorkTimeDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiworkTimeDelete
     */
    id: number
}

export interface WorkTimeApiWorkTimeGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof WorkTimeApiworkTimeGetAll
     */
    ids?: Array<number>
}

export interface WorkTimeApiWorkTimeGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiworkTimeGetById
     */
    id: number
}

export interface WorkTimeApiWorkTimeSearchRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof WorkTimeApiworkTimeSearch
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof WorkTimeApiworkTimeSearch
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkTimeApiworkTimeSearch
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WorkTimeApiworkTimeSearch
     */
    orderBy?: Array<string>
}

export interface WorkTimeApiWorkTimeUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeApiworkTimeUpdate
     */
    id: number
    /**
     * 
     * @type CreateWorkTimeCommand
     * @memberof WorkTimeApiworkTimeUpdate
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
    public workTimeCreateWithHttpInfo(param: WorkTimeApiWorkTimeCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.workTimeCreateWithHttpInfo(param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeCreate(param: WorkTimeApiWorkTimeCreateRequest = {}, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.workTimeCreate(param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeDeleteWithHttpInfo(param: WorkTimeApiWorkTimeDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.workTimeDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeDelete(param: WorkTimeApiWorkTimeDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.workTimeDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeGetAllWithHttpInfo(param: WorkTimeApiWorkTimeGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<WorkTimeDto>>> {
        return this.api.workTimeGetAllWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeGetAll(param: WorkTimeApiWorkTimeGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<WorkTimeDto>> {
        return this.api.workTimeGetAll(param.ids,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeGetByIdWithHttpInfo(param: WorkTimeApiWorkTimeGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.workTimeGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeGetById(param: WorkTimeApiWorkTimeGetByIdRequest, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.workTimeGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeSearchWithHttpInfo(param: WorkTimeApiWorkTimeSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
        return this.api.workTimeSearchWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeSearch(param: WorkTimeApiWorkTimeSearchRequest, options?: ConfigurationOptions): Promise<WorkTimeDtoPaginated> {
        return this.api.workTimeSearch(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeUpdateWithHttpInfo(param: WorkTimeApiWorkTimeUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.workTimeUpdateWithHttpInfo(param.id, param.createWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeUpdate(param: WorkTimeApiWorkTimeUpdateRequest, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.workTimeUpdate(param.id, param.createWorkTimeCommand,  options).toPromise();
    }

}
