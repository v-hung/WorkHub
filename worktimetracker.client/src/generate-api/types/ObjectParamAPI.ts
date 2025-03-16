import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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
    public accountGetPermissionsWithHttpInfo(param: AccountApiAccountGetPermissionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.accountGetPermissionsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetPermissions(param: AccountApiAccountGetPermissionsRequest = {}, options?: ConfigurationOptions): Promise<void> {
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

import { ObservableProjectApi } from "./ObservableAPI";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi";

export interface ProjectApiProjectCreateRequest {
    /**
     * 
     * @type CreateEditProjectCommand
     * @memberof ProjectApiprojectCreate
     */
    createEditProjectCommand?: CreateEditProjectCommand
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
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof ProjectApiprojectGetAll
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof ProjectApiprojectGetAll
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProjectApiprojectGetAll
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ProjectApiprojectGetAll
     */
    orderBy?: Array<string>
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

export interface ProjectApiProjectUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProjectApiprojectUpdate
     */
    id: string
    /**
     * 
     * @type CreateEditProjectCommand
     * @memberof ProjectApiprojectUpdate
     */
    createEditProjectCommand?: CreateEditProjectCommand
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
        return this.api.projectCreateWithHttpInfo(param.createEditProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectCreate(param: ProjectApiProjectCreateRequest = {}, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.projectCreate(param.createEditProjectCommand,  options).toPromise();
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
    public projectGetAllWithHttpInfo(param: ProjectApiProjectGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDtoPaginated>> {
        return this.api.projectGetAllWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectGetAll(param: ProjectApiProjectGetAllRequest, options?: ConfigurationOptions): Promise<ProjectDtoPaginated> {
        return this.api.projectGetAll(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
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
    public projectUpdateWithHttpInfo(param: ProjectApiProjectUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ProjectDto>> {
        return this.api.projectUpdateWithHttpInfo(param.id, param.createEditProjectCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public projectUpdate(param: ProjectApiProjectUpdateRequest, options?: ConfigurationOptions): Promise<ProjectDto> {
        return this.api.projectUpdate(param.id, param.createEditProjectCommand,  options).toPromise();
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
        return this.api.roleGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public roleGetAll(param: RoleApiRoleGetAllRequest = {}, options?: ConfigurationOptions): Promise<Array<RoleDto>> {
        return this.api.roleGetAll( options).toPromise();
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
     * @type CreateEditTeamCommand
     * @memberof TeamApiteamCreate
     */
    createEditTeamCommand?: CreateEditTeamCommand
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
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof TeamApiteamGetAll
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof TeamApiteamGetAll
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamApiteamGetAll
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TeamApiteamGetAll
     */
    orderBy?: Array<string>
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

export interface TeamApiTeamUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TeamApiteamUpdate
     */
    id: string
    /**
     * 
     * @type CreateEditTeamCommand
     * @memberof TeamApiteamUpdate
     */
    createEditTeamCommand?: CreateEditTeamCommand
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
        return this.api.teamCreateWithHttpInfo(param.createEditTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamCreate(param: TeamApiTeamCreateRequest = {}, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.teamCreate(param.createEditTeamCommand,  options).toPromise();
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
    public teamGetAllWithHttpInfo(param: TeamApiTeamGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDtoPaginated>> {
        return this.api.teamGetAllWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetAll(param: TeamApiTeamGetAllRequest, options?: ConfigurationOptions): Promise<TeamDtoPaginated> {
        return this.api.teamGetAll(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetByIdWithHttpInfo(param: TeamApiTeamGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.teamGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamGetById(param: TeamApiTeamGetByIdRequest, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.teamGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamUpdateWithHttpInfo(param: TeamApiTeamUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TeamDto>> {
        return this.api.teamUpdateWithHttpInfo(param.id, param.createEditTeamCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamUpdate(param: TeamApiTeamUpdateRequest, options?: ConfigurationOptions): Promise<TeamDto> {
        return this.api.teamUpdate(param.id, param.createEditTeamCommand,  options).toPromise();
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
    public timesheetCheckInWithHttpInfo(param: TimesheetApiTimesheetCheckInRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
        return this.api.timesheetCheckInWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckIn(param: TimesheetApiTimesheetCheckInRequest = {}, options?: ConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
        return this.api.timesheetCheckIn( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckOutWithHttpInfo(param: TimesheetApiTimesheetCheckOutRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
        return this.api.timesheetCheckOutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetCheckOut(param: TimesheetApiTimesheetCheckOutRequest = {}, options?: ConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
        return this.api.timesheetCheckOut( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(param: TimesheetApiTimesheetGetCurrentUserMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetMinimalDto>>> {
        return this.api.timesheetGetCurrentUserMonthlyTimesheetsWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetCurrentUserMonthlyTimesheets(param: TimesheetApiTimesheetGetCurrentUserMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetMinimalDto>> {
        return this.api.timesheetGetCurrentUserMonthlyTimesheets(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetMonthlyTimesheetsWithHttpInfo(param: TimesheetApiTimesheetGetMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<TimesheetDto>>> {
        return this.api.timesheetGetMonthlyTimesheetsWithHttpInfo(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetMonthlyTimesheets(param: TimesheetApiTimesheetGetMonthlyTimesheetsRequest = {}, options?: ConfigurationOptions): Promise<Array<TimesheetDto>> {
        return this.api.timesheetGetMonthlyTimesheets(param.month, param.year,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetTodayTimesheetWithHttpInfo(param: TimesheetApiTimesheetGetTodayTimesheetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TimesheetMinimalDtoTimesheetResponse>> {
        return this.api.timesheetGetTodayTimesheetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public timesheetGetTodayTimesheet(param: TimesheetApiTimesheetGetTodayTimesheetRequest = {}, options?: ConfigurationOptions): Promise<TimesheetMinimalDtoTimesheetResponse> {
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
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof UserApiuserGetAll
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof UserApiuserGetAll
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserGetAll
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiuserGetAll
     */
    orderBy?: Array<string>
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
    public userGetAllWithHttpInfo(param: UserApiUserGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.userGetAllWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetAll(param: UserApiUserGetAllRequest, options?: ConfigurationOptions): Promise<UserDtoPaginated> {
        return this.api.userGetAll(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
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
     * @type CreateEditWorkTimeCommand
     * @memberof WorkTimeApiworkTimeCreate
     */
    createEditWorkTimeCommand?: CreateEditWorkTimeCommand
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
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: 1
     * @type number
     * @memberof WorkTimeApiworkTimeGetAll
     */
    pageNumber: number
    /**
     * 
     * Minimum: 1
     * Maximum: 100
     * Defaults to: 10
     * @type number
     * @memberof WorkTimeApiworkTimeGetAll
     */
    pageSize: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkTimeApiworkTimeGetAll
     */
    searchString?: string
    /**
     * of the form fieldname [ascending|descending],fieldname [ascending|descending]...
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WorkTimeApiworkTimeGetAll
     */
    orderBy?: Array<string>
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

export interface WorkTimeApiWorkTimeUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WorkTimeApiworkTimeUpdate
     */
    id: string
    /**
     * 
     * @type CreateEditWorkTimeCommand
     * @memberof WorkTimeApiworkTimeUpdate
     */
    createEditWorkTimeCommand?: CreateEditWorkTimeCommand
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
        return this.api.workTimeCreateWithHttpInfo(param.createEditWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeCreate(param: WorkTimeApiWorkTimeCreateRequest = {}, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.workTimeCreate(param.createEditWorkTimeCommand,  options).toPromise();
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
    public workTimeGetAllWithHttpInfo(param: WorkTimeApiWorkTimeGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDtoPaginated>> {
        return this.api.workTimeGetAllWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeGetAll(param: WorkTimeApiWorkTimeGetAllRequest, options?: ConfigurationOptions): Promise<WorkTimeDtoPaginated> {
        return this.api.workTimeGetAll(param.pageNumber, param.pageSize, param.searchString, param.orderBy,  options).toPromise();
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
    public workTimeUpdateWithHttpInfo(param: WorkTimeApiWorkTimeUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.workTimeUpdateWithHttpInfo(param.id, param.createEditWorkTimeCommand,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public workTimeUpdate(param: WorkTimeApiWorkTimeUpdateRequest, options?: ConfigurationOptions): Promise<WorkTimeDto> {
        return this.api.workTimeUpdate(param.id, param.createEditWorkTimeCommand,  options).toPromise();
    }

}
