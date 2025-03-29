import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [changePasswordRequest]
     */
    public apiIdentityChangePasswordPostWithHttpInfo(changePasswordRequest?: ChangePasswordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityChangePasswordPostWithHttpInfo(changePasswordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [changePasswordRequest]
     */
    public apiIdentityChangePasswordPost(changePasswordRequest?: ChangePasswordRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityChangePasswordPost(changePasswordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityCurrentUserGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityCurrentUserGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityCurrentUserGet(_options?: PromiseConfigurationOptions): Promise<UserDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityCurrentUserGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPostWithHttpInfo(loginRequest?: LoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDtoLoginResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityLoginPostWithHttpInfo(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPost(loginRequest?: LoginRequest, _options?: PromiseConfigurationOptions): Promise<UserDtoLoginResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityLoginPost(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityLogoutPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityLogoutPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityLogoutPost(_options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityLogoutPost(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityPermissionsGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityPermissionsGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityPermissionsGet(_options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityPermissionsGet(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityRefreshTokenPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RefreshTokenResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityRefreshTokenPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityRefreshTokenPost(_options?: PromiseConfigurationOptions): Promise<RefreshTokenResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiIdentityRefreshTokenPost(observableOptions);
        return result.toPromise();
    }


}



import { ObservableDeviceApi } from './ObservableAPI';

import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";
export class PromiseDeviceApi {
    private api: ObservableDeviceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeviceApiRequestFactory,
        responseProcessor?: DeviceApiResponseProcessor
    ) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiDevicesAllGetWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DeviceDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiDevicesAllGet(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<DeviceDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiDevicesGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiDevicesGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<DeviceDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDevicesIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDevicesIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDevicesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDevicesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCommand]
     */
    public apiDevicesIdPutWithHttpInfo(id: number, createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdPutWithHttpInfo(id, createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCommand]
     */
    public apiDevicesIdPut(id: number, createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesIdPut(id, createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCommand]
     */
    public apiDevicesPostWithHttpInfo(createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesPostWithHttpInfo(createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCommand]
     */
    public apiDevicesPost(createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDevicesPost(createDeviceCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDeviceCategoryApi } from './ObservableAPI';

import { DeviceCategoryApiRequestFactory, DeviceCategoryApiResponseProcessor} from "../apis/DeviceCategoryApi";
export class PromiseDeviceCategoryApi {
    private api: ObservableDeviceCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeviceCategoryApiRequestFactory,
        responseProcessor?: DeviceCategoryApiResponseProcessor
    ) {
        this.api = new ObservableDeviceCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiDeviceCategoriesAllGetWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DeviceCategoryDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiDeviceCategoriesAllGet(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<DeviceCategoryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiDeviceCategoriesGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiDeviceCategoriesGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDeviceCategoriesIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDeviceCategoriesIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDeviceCategoriesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiDeviceCategoriesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCategoryCommand]
     */
    public apiDeviceCategoriesIdPutWithHttpInfo(id: number, createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdPutWithHttpInfo(id, createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCategoryCommand]
     */
    public apiDeviceCategoriesIdPut(id: number, createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesIdPut(id, createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCategoryCommand]
     */
    public apiDeviceCategoriesPostWithHttpInfo(createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesPostWithHttpInfo(createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCategoryCommand]
     */
    public apiDeviceCategoriesPost(createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDeviceCategoriesPost(createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProjectApi } from './ObservableAPI';

import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi";
export class PromiseProjectApi {
    private api: ObservableProjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectApiRequestFactory,
        responseProcessor?: ProjectApiResponseProcessor
    ) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiProjectsAllGetWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ProjectDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiProjectsAllGet(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<ProjectDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiProjectsGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiProjectsGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProjectDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiProjectsIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiProjectsIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiProjectsIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiProjectsIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createProjectCommand]
     */
    public apiProjectsIdPutWithHttpInfo(id: number, createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdPutWithHttpInfo(id, createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createProjectCommand]
     */
    public apiProjectsIdPut(id: number, createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsIdPut(id, createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createProjectCommand]
     */
    public apiProjectsPostWithHttpInfo(createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsPostWithHttpInfo(createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createProjectCommand]
     */
    public apiProjectsPost(createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiProjectsPost(createProjectCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRequestsApi } from './ObservableAPI';

import { RequestsApiRequestFactory, RequestsApiResponseProcessor} from "../apis/RequestsApi";
export class PromiseRequestsApi {
    private api: ObservableRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RequestsApiRequestFactory,
        responseProcessor?: RequestsApiResponseProcessor
    ) {
        this.api = new ObservableRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveApprovalPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveApprovalPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveApprovalPost(id: number, _options?: PromiseConfigurationOptions): Promise<LeaveRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveApprovalPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveCancelPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveCancelPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveCancelPost(id: number, _options?: PromiseConfigurationOptions): Promise<LeaveRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveCancelPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveRejectPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveRejectPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdLeaveRejectPost(id: number, _options?: PromiseConfigurationOptions): Promise<LeaveRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdLeaveRejectPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetApprovalPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetApprovalPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetApprovalPost(id: number, _options?: PromiseConfigurationOptions): Promise<TimesheetRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetApprovalPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetCancelPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetCancelPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetCancelPost(id: number, _options?: PromiseConfigurationOptions): Promise<TimesheetRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetCancelPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetRejectPostWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetRejectPostWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRequestsIdTimesheetRejectPost(id: number, _options?: PromiseConfigurationOptions): Promise<TimesheetRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsIdTimesheetRejectPost(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createLeaveRequestDto]
     */
    public apiRequestsLeavePostWithHttpInfo(createLeaveRequestDto?: CreateLeaveRequestDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LeaveRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsLeavePostWithHttpInfo(createLeaveRequestDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createLeaveRequestDto]
     */
    public apiRequestsLeavePost(createLeaveRequestDto?: CreateLeaveRequestDto, _options?: PromiseConfigurationOptions): Promise<LeaveRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsLeavePost(createLeaveRequestDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createTimesheetRequestDto]
     */
    public apiRequestsTimesheetPostWithHttpInfo(createTimesheetRequestDto?: CreateTimesheetRequestDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetRequestDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsTimesheetPostWithHttpInfo(createTimesheetRequestDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createTimesheetRequestDto]
     */
    public apiRequestsTimesheetPost(createTimesheetRequestDto?: CreateTimesheetRequestDto, _options?: PromiseConfigurationOptions): Promise<TimesheetRequestDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRequestsTimesheetPost(createTimesheetRequestDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRoleApi } from './ObservableAPI';

import { RoleApiRequestFactory, RoleApiResponseProcessor} from "../apis/RoleApi";
export class PromiseRoleApi {
    private api: ObservableRoleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoleApiRequestFactory,
        responseProcessor?: RoleApiResponseProcessor
    ) {
        this.api = new ObservableRoleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiRolesAllGetWithHttpInfo(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiRolesAllGet(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Array<RoleDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiRolesGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiRolesGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RoleDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRolesIdDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRolesIdDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRolesIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiRolesIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [roleCreateUpdateRequest]
     */
    public apiRolesIdPutWithHttpInfo(id: string, roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdPutWithHttpInfo(id, roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [roleCreateUpdateRequest]
     */
    public apiRolesIdPut(id: string, roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesIdPut(id, roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [roleCreateUpdateRequest]
     */
    public apiRolesPostWithHttpInfo(roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesPostWithHttpInfo(roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [roleCreateUpdateRequest]
     */
    public apiRolesPost(roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiRolesPost(roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTeamApi } from './ObservableAPI';

import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";
export class PromiseTeamApi {
    private api: ObservableTeamApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamApiRequestFactory,
        responseProcessor?: TeamApiResponseProcessor
    ) {
        this.api = new ObservableTeamApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiTeamsAllGetWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TeamDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiTeamsAllGet(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<TeamDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiTeamsGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiTeamsGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<TeamDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiTeamsIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiTeamsIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiTeamsIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamFullDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiTeamsIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<TeamFullDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createTeamCommand]
     */
    public apiTeamsIdPutWithHttpInfo(id: number, createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdPutWithHttpInfo(id, createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createTeamCommand]
     */
    public apiTeamsIdPut(id: number, createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsIdPut(id, createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createTeamCommand]
     */
    public apiTeamsPostWithHttpInfo(createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsPostWithHttpInfo(createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createTeamCommand]
     */
    public apiTeamsPost(createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTeamsPost(createTeamCommand, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTimesheetApi } from './ObservableAPI';

import { TimesheetApiRequestFactory, TimesheetApiResponseProcessor} from "../apis/TimesheetApi";
export class PromiseTimesheetApi {
    private api: ObservableTimesheetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimesheetApiRequestFactory,
        responseProcessor?: TimesheetApiResponseProcessor
    ) {
        this.api = new ObservableTimesheetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiTimesheetsCheckinPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsCheckinPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiTimesheetsCheckinPost(_options?: PromiseConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsCheckinPost(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiTimesheetsCheckoutPostWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsCheckoutPostWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiTimesheetsCheckoutPost(_options?: PromiseConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsCheckoutPost(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public apiTimesheetsMonthlyAllGetWithHttpInfo(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TimesheetFullDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsMonthlyAllGetWithHttpInfo(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public apiTimesheetsMonthlyAllGet(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<Array<TimesheetFullDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsMonthlyAllGet(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public apiTimesheetsMonthlyGetWithHttpInfo(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TimesheetDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsMonthlyGetWithHttpInfo(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public apiTimesheetsMonthlyGet(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<Array<TimesheetDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsMonthlyGet(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiTimesheetsTodayGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetDtoTimesheetResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsTodayGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiTimesheetsTodayGet(_options?: PromiseConfigurationOptions): Promise<TimesheetDtoTimesheetResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiTimesheetsTodayGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiUsersAllGetWithHttpInfo(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiUsersAllGet(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Array<UserDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiUsersGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiUsersGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UserDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdGetWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserFullDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdGet(id: string, _options?: PromiseConfigurationOptions): Promise<UserFullDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public apiUsersIdPutWithHttpInfo(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdPutWithHttpInfo(id, userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public apiUsersIdPut(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<UserDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersIdPut(id, userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public apiUsersPostWithHttpInfo(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersPostWithHttpInfo(userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public apiUsersPost(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<UserDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiUsersPost(userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWorkTimeApi } from './ObservableAPI';

import { WorkTimeApiRequestFactory, WorkTimeApiResponseProcessor} from "../apis/WorkTimeApi";
export class PromiseWorkTimeApi {
    private api: ObservableWorkTimeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkTimeApiRequestFactory,
        responseProcessor?: WorkTimeApiResponseProcessor
    ) {
        this.api = new ObservableWorkTimeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [ids]
     */
    public apiWorkTimesAllGetWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<WorkTimeDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesAllGetWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public apiWorkTimesAllGet(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<WorkTimeDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesAllGet(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiWorkTimesGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public apiWorkTimesGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<WorkTimeDtoPaginated> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesGet(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWorkTimesIdDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWorkTimesIdDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWorkTimesIdGetWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdGetWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiWorkTimesIdGet(id: number, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdGet(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createWorkTimeCommand]
     */
    public apiWorkTimesIdPutWithHttpInfo(id: number, createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdPutWithHttpInfo(id, createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createWorkTimeCommand]
     */
    public apiWorkTimesIdPut(id: number, createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesIdPut(id, createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createWorkTimeCommand]
     */
    public apiWorkTimesPostWithHttpInfo(createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesPostWithHttpInfo(createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createWorkTimeCommand]
     */
    public apiWorkTimesPost(createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiWorkTimesPost(createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }


}



