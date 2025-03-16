import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateEditProjectCommand } from '../models/CreateEditProjectCommand';
import { CreateEditTeamCommand } from '../models/CreateEditTeamCommand';
import { CreateEditWorkTimeCommand } from '../models/CreateEditWorkTimeCommand';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorValidateResponse } from '../models/ErrorValidateResponse';
import { LeaveRequestDto } from '../models/LeaveRequestDto';
import { LoginRequest } from '../models/LoginRequest';
import { Nationality } from '../models/Nationality';
import { Permission } from '../models/Permission';
import { ProjectDto } from '../models/ProjectDto';
import { ProjectDtoPaginated } from '../models/ProjectDtoPaginated';
import { ProjectStatus } from '../models/ProjectStatus';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { RequestDto } from '../models/RequestDto';
import { RequestStatus } from '../models/RequestStatus';
import { RequestType } from '../models/RequestType';
import { RoleCreateUpdateRequest } from '../models/RoleCreateUpdateRequest';
import { RoleDto } from '../models/RoleDto';
import { TeamDto } from '../models/TeamDto';
import { TeamDtoPaginated } from '../models/TeamDtoPaginated';
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
     * @param [createEditProjectCommand]
     */
    public projectCreateWithHttpInfo(createEditProjectCommand?: CreateEditProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
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
        const result = this.api.projectCreateWithHttpInfo(createEditProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createEditProjectCommand]
     */
    public projectCreate(createEditProjectCommand?: CreateEditProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
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
        const result = this.api.projectCreate(createEditProjectCommand, observableOptions);
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
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public projectGetAllWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
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
        const result = this.api.projectGetAllWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public projectGetAll(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ProjectDtoPaginated> {
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
        const result = this.api.projectGetAll(pageNumber, pageSize, searchString, orderBy, observableOptions);
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
     * @param id
     * @param [createEditProjectCommand]
     */
    public projectUpdateWithHttpInfo(id: string, createEditProjectCommand?: CreateEditProjectCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
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
        const result = this.api.projectUpdateWithHttpInfo(id, createEditProjectCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createEditProjectCommand]
     */
    public projectUpdate(id: string, createEditProjectCommand?: CreateEditProjectCommand, _options?: PromiseConfigurationOptions): Promise<ProjectDto> {
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
        const result = this.api.projectUpdate(id, createEditProjectCommand, observableOptions);
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
     */
    public roleGetAllWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RoleDto>>> {
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
        const result = this.api.roleGetAllWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public roleGetAll(_options?: PromiseConfigurationOptions): Promise<Array<RoleDto>> {
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
        const result = this.api.roleGetAll(observableOptions);
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
     * @param [createEditTeamCommand]
     */
    public teamCreateWithHttpInfo(createEditTeamCommand?: CreateEditTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
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
        const result = this.api.teamCreateWithHttpInfo(createEditTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createEditTeamCommand]
     */
    public teamCreate(createEditTeamCommand?: CreateEditTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
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
        const result = this.api.teamCreate(createEditTeamCommand, observableOptions);
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
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public teamGetAllWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
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
        const result = this.api.teamGetAllWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public teamGetAll(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<TeamDtoPaginated> {
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
        const result = this.api.teamGetAll(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public teamGetByIdWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
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
    public teamGetById(id: number, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
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
     * @param id
     * @param [createEditTeamCommand]
     */
    public teamUpdateWithHttpInfo(id: string, createEditTeamCommand?: CreateEditTeamCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TeamDto>> {
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
        const result = this.api.teamUpdateWithHttpInfo(id, createEditTeamCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createEditTeamCommand]
     */
    public teamUpdate(id: string, createEditTeamCommand?: CreateEditTeamCommand, _options?: PromiseConfigurationOptions): Promise<TeamDto> {
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
        const result = this.api.teamUpdate(id, createEditTeamCommand, observableOptions);
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
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public userGetAllWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
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
        const result = this.api.userGetAllWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public userGetAll(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UserDtoPaginated> {
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
        const result = this.api.userGetAll(pageNumber, pageSize, searchString, orderBy, observableOptions);
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
     * @param [createEditWorkTimeCommand]
     */
    public workTimeCreateWithHttpInfo(createEditWorkTimeCommand?: CreateEditWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
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
        const result = this.api.workTimeCreateWithHttpInfo(createEditWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [createEditWorkTimeCommand]
     */
    public workTimeCreate(createEditWorkTimeCommand?: CreateEditWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
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
        const result = this.api.workTimeCreate(createEditWorkTimeCommand, observableOptions);
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
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public workTimeGetAllWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
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
        const result = this.api.workTimeGetAllWithHttpInfo(pageNumber, pageSize, searchString, orderBy, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy] of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     */
    public workTimeGetAll(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, _options?: PromiseConfigurationOptions): Promise<WorkTimeDtoPaginated> {
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
        const result = this.api.workTimeGetAll(pageNumber, pageSize, searchString, orderBy, observableOptions);
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
     * @param id
     * @param [createEditWorkTimeCommand]
     */
    public workTimeUpdateWithHttpInfo(id: string, createEditWorkTimeCommand?: CreateEditWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
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
        const result = this.api.workTimeUpdateWithHttpInfo(id, createEditWorkTimeCommand, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [createEditWorkTimeCommand]
     */
    public workTimeUpdate(id: string, createEditWorkTimeCommand?: CreateEditWorkTimeCommand, _options?: PromiseConfigurationOptions): Promise<WorkTimeDto> {
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
        const result = this.api.workTimeUpdate(id, createEditWorkTimeCommand, observableOptions);
        return result.toPromise();
    }


}



