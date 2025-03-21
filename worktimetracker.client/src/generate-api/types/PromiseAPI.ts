import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateDeviceCategoryCommand } from '../models/CreateDeviceCategoryCommand';
import { CreateDeviceCommand } from '../models/CreateDeviceCommand';
import { CreateProjectCommand } from '../models/CreateProjectCommand';
import { CreateTeamCommand } from '../models/CreateTeamCommand';
import { CreateWorkTimeCommand } from '../models/CreateWorkTimeCommand';
import { DeviceCategoryDto } from '../models/DeviceCategoryDto';
import { DeviceCategoryMinimalDto } from '../models/DeviceCategoryMinimalDto';
import { DeviceCategoryMinimalDtoPaginated } from '../models/DeviceCategoryMinimalDtoPaginated';
import { DeviceDto } from '../models/DeviceDto';
import { DeviceMinimalDto } from '../models/DeviceMinimalDto';
import { DeviceMinimalDtoPaginated } from '../models/DeviceMinimalDtoPaginated';
import { DeviceStatus } from '../models/DeviceStatus';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorValidateResponse } from '../models/ErrorValidateResponse';
import { LeaveRequestDto } from '../models/LeaveRequestDto';
import { LoginRequest } from '../models/LoginRequest';
import { Nationality } from '../models/Nationality';
import { Permission } from '../models/Permission';
import { ProjectDto } from '../models/ProjectDto';
import { ProjectDtoPaginated } from '../models/ProjectDtoPaginated';
import { ProjectMinimalDto } from '../models/ProjectMinimalDto';
import { ProjectStatus } from '../models/ProjectStatus';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { RequestDto } from '../models/RequestDto';
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
import { TimesheetMinimalDto } from '../models/TimesheetMinimalDto';
import { TimesheetMinimalDtoTimesheetResponse } from '../models/TimesheetMinimalDtoTimesheetResponse';
import { TimesheetRequestDto } from '../models/TimesheetRequestDto';
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
    public accountChangePasswordWithHttpInfo(changePasswordRequest?: ChangePasswordRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.accountChangePasswordWithHttpInfo(changePasswordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [changePasswordRequest]
     */
    public accountChangePassword(changePasswordRequest?: ChangePasswordRequest, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.accountChangePassword(changePasswordRequest, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountGetCurrentUserWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
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
        const result = this.api.accountGetCurrentUserWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountGetCurrentUser(_options?: PromiseConfigurationOptions): Promise<UserDto> {
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
        const result = this.api.accountGetCurrentUser(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountGetPermissionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.accountGetPermissionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountGetPermissions(_options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.accountGetPermissions(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public accountLoginWithHttpInfo(loginRequest?: LoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDtoLoginResponse>> {
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
        const result = this.api.accountLoginWithHttpInfo(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public accountLogin(loginRequest?: LoginRequest, _options?: PromiseConfigurationOptions): Promise<UserDtoLoginResponse> {
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
        const result = this.api.accountLogin(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountLogoutWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.accountLogoutWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountLogout(_options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.accountLogout(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountRefreshTokenWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<RefreshTokenResponse>> {
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
        const result = this.api.accountRefreshTokenWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public accountRefreshToken(_options?: PromiseConfigurationOptions): Promise<RefreshTokenResponse> {
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
        const result = this.api.accountRefreshToken(observableOptions);
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
     * @param [createDeviceCommand]
     */
    public deviceCreateWithHttpInfo(createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
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
        const result = this.api.deviceCreateWithHttpInfo(createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCommand]
     */
    public deviceCreate(createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
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
        const result = this.api.deviceCreate(createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.deviceDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.deviceDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public deviceGetAllWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DeviceMinimalDto>>> {
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
        const result = this.api.deviceGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public deviceGetAll(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<DeviceMinimalDto>> {
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
        const result = this.api.deviceGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
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
        const result = this.api.deviceGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceGetById(id: number, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
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
        const result = this.api.deviceGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public deviceSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceMinimalDtoPaginated>> {
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
        const result = this.api.deviceSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public deviceSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<DeviceMinimalDtoPaginated> {
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
        const result = this.api.deviceSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCommand]
     */
    public deviceUpdateWithHttpInfo(id: number, createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceDto>> {
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
        const result = this.api.deviceUpdateWithHttpInfo(id, createDeviceCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCommand]
     */
    public deviceUpdate(id: number, createDeviceCommand?: CreateDeviceCommand, _options?: PromiseConfigurationOptions): Promise<DeviceDto> {
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
        const result = this.api.deviceUpdate(id, createDeviceCommand, observableOptions);
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
     * @param [createDeviceCategoryCommand]
     */
    public deviceCategoryCreateWithHttpInfo(createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
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
        const result = this.api.deviceCategoryCreateWithHttpInfo(createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createDeviceCategoryCommand]
     */
    public deviceCategoryCreate(createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
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
        const result = this.api.deviceCategoryCreate(createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceCategoryDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.deviceCategoryDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceCategoryDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.deviceCategoryDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public deviceCategoryGetAllWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DeviceCategoryMinimalDto>>> {
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
        const result = this.api.deviceCategoryGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public deviceCategoryGetAll(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<DeviceCategoryMinimalDto>> {
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
        const result = this.api.deviceCategoryGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceCategoryGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
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
        const result = this.api.deviceCategoryGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deviceCategoryGetById(id: number, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
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
        const result = this.api.deviceCategoryGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public deviceCategorySearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryMinimalDtoPaginated>> {
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
        const result = this.api.deviceCategorySearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public deviceCategorySearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryMinimalDtoPaginated> {
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
        const result = this.api.deviceCategorySearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCategoryCommand]
     */
    public deviceCategoryUpdateWithHttpInfo(id: number, createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceCategoryDto>> {
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
        const result = this.api.deviceCategoryUpdateWithHttpInfo(id, createDeviceCategoryCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createDeviceCategoryCommand]
     */
    public deviceCategoryUpdate(id: number, createDeviceCategoryCommand?: CreateDeviceCategoryCommand, _options?: PromiseConfigurationOptions): Promise<DeviceCategoryDto> {
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
        const result = this.api.deviceCategoryUpdate(id, createDeviceCategoryCommand, observableOptions);
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
     * @param [createProjectCommand]
     */
    public projectCreateWithHttpInfo(createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
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
        const result = this.api.projectCreateWithHttpInfo(createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createProjectCommand]
     */
    public projectCreate(createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
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
        const result = this.api.projectCreate(createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public projectDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.projectDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public projectDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.projectDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public projectGetAllWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<ProjectDto>>> {
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
        const result = this.api.projectGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public projectGetAll(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<ProjectDto>> {
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
        const result = this.api.projectGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public projectGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
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
        const result = this.api.projectGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public projectGetById(id: number, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
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
        const result = this.api.projectGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public projectSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
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
        const result = this.api.projectSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public projectSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProjectDtoPaginated> {
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
        const result = this.api.projectSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createProjectCommand]
     */
    public projectUpdateWithHttpInfo(id: number, createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
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
        const result = this.api.projectUpdateWithHttpInfo(id, createProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createProjectCommand]
     */
    public projectUpdate(id: number, createProjectCommand?: CreateProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
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
        const result = this.api.projectUpdate(id, createProjectCommand, observableOptions);
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
     * @param [roleCreateUpdateRequest]
     */
    public roleCreateWithHttpInfo(roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
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
        const result = this.api.roleCreateWithHttpInfo(roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [roleCreateUpdateRequest]
     */
    public roleCreate(roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
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
        const result = this.api.roleCreate(roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public roleDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.roleDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public roleDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.roleDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public roleGetAllWithHttpInfo(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
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
        const result = this.api.roleGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public roleGetAll(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Array<RoleDto>> {
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
        const result = this.api.roleGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public roleGetByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
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
        const result = this.api.roleGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public roleGetById(id: string, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
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
        const result = this.api.roleGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public roleSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDtoPaginated>> {
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
        const result = this.api.roleSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public roleSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<RoleDtoPaginated> {
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
        const result = this.api.roleSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [roleCreateUpdateRequest]
     */
    public roleUpdateWithHttpInfo(id: string, roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RoleDto>> {
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
        const result = this.api.roleUpdateWithHttpInfo(id, roleCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [roleCreateUpdateRequest]
     */
    public roleUpdate(id: string, roleCreateUpdateRequest?: RoleCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<RoleDto> {
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
        const result = this.api.roleUpdate(id, roleCreateUpdateRequest, observableOptions);
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
     * @param [createTeamCommand]
     */
    public teamCreateWithHttpInfo(createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
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
        const result = this.api.teamCreateWithHttpInfo(createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createTeamCommand]
     */
    public teamCreate(createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
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
        const result = this.api.teamCreate(createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public teamDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.teamDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public teamDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.teamDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public teamGetAllWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TeamDto>>> {
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
        const result = this.api.teamGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public teamGetAll(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<TeamDto>> {
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
        const result = this.api.teamGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public teamGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamFullDto>> {
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
        const result = this.api.teamGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public teamGetById(id: number, _options?: PromiseConfigurationOptions): Promise<TeamFullDto> {
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
        const result = this.api.teamGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public teamSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
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
        const result = this.api.teamSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public teamSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<TeamDtoPaginated> {
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
        const result = this.api.teamSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createTeamCommand]
     */
    public teamUpdateWithHttpInfo(id: number, createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
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
        const result = this.api.teamUpdateWithHttpInfo(id, createTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createTeamCommand]
     */
    public teamUpdate(id: number, createTeamCommand?: CreateTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
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
        const result = this.api.teamUpdate(id, createTeamCommand, observableOptions);
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
    public timesheetCheckInWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
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
        const result = this.api.timesheetCheckInWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public timesheetCheckIn(_options?: PromiseConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
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
        const result = this.api.timesheetCheckIn(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public timesheetCheckOutWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
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
        const result = this.api.timesheetCheckOutWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public timesheetCheckOut(_options?: PromiseConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
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
        const result = this.api.timesheetCheckOut(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TimesheetMinimalDto>>> {
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
        const result = this.api.timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public timesheetGetCurrentUserMonthlyTimesheets(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<Array<TimesheetMinimalDto>> {
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
        const result = this.api.timesheetGetCurrentUserMonthlyTimesheets(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public timesheetGetMonthlyTimesheetsWithHttpInfo(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<TimesheetDto>>> {
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
        const result = this.api.timesheetGetMonthlyTimesheetsWithHttpInfo(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [month]
     * @param [year]
     */
    public timesheetGetMonthlyTimesheets(month?: number, year?: number, _options?: PromiseConfigurationOptions): Promise<Array<TimesheetDto>> {
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
        const result = this.api.timesheetGetMonthlyTimesheets(month, year, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public timesheetGetTodayTimesheetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
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
        const result = this.api.timesheetGetTodayTimesheetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public timesheetGetTodayTimesheet(_options?: PromiseConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
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
        const result = this.api.timesheetGetTodayTimesheet(observableOptions);
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
     * @param [userCreateUpdateRequest]
     */
    public userCreateWithHttpInfo(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
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
        const result = this.api.userCreateWithHttpInfo(userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public userCreate(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<UserDto> {
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
        const result = this.api.userCreate(userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userDeleteWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.userDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userDelete(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.userDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public userGetAllWithHttpInfo(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserDto>>> {
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
        const result = this.api.userGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public userGetAll(ids?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Array<UserDto>> {
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
        const result = this.api.userGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userGetByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserFullDto>> {
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
        const result = this.api.userGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userGetById(id: string, _options?: PromiseConfigurationOptions): Promise<UserFullDto> {
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
        const result = this.api.userGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public userSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
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
        const result = this.api.userSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public userSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UserDtoPaginated> {
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
        const result = this.api.userSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public userUpdateWithHttpInfo(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDto>> {
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
        const result = this.api.userUpdateWithHttpInfo(id, userCreateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public userUpdate(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<UserDto> {
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
        const result = this.api.userUpdate(id, userCreateUpdateRequest, observableOptions);
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
     * @param [createWorkTimeCommand]
     */
    public workTimeCreateWithHttpInfo(createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
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
        const result = this.api.workTimeCreateWithHttpInfo(createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createWorkTimeCommand]
     */
    public workTimeCreate(createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
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
        const result = this.api.workTimeCreate(createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public workTimeDeleteWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.workTimeDeleteWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public workTimeDelete(id: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.workTimeDelete(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public workTimeGetAllWithHttpInfo(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<WorkTimeDto>>> {
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
        const result = this.api.workTimeGetAllWithHttpInfo(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [ids]
     */
    public workTimeGetAll(ids?: Array<number>, _options?: PromiseConfigurationOptions): Promise<Array<WorkTimeDto>> {
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
        const result = this.api.workTimeGetAll(ids, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public workTimeGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
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
        const result = this.api.workTimeGetByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public workTimeGetById(id: number, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
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
        const result = this.api.workTimeGetById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public workTimeSearchWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
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
        const result = this.api.workTimeSearchWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public workTimeSearch(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<WorkTimeDtoPaginated> {
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
        const result = this.api.workTimeSearch(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createWorkTimeCommand]
     */
    public workTimeUpdateWithHttpInfo(id: number, createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
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
        const result = this.api.workTimeUpdateWithHttpInfo(id, createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createWorkTimeCommand]
     */
    public workTimeUpdate(id: number, createWorkTimeCommand?: CreateWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
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
        const result = this.api.workTimeUpdate(id, createWorkTimeCommand, observableOptions);
        return result.toPromise();
    }


}



