import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { ErrorResponse } from '../models/ErrorResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { TeamMinimalDto } from '../models/TeamMinimalDto';
import { UserCreateUpdateRequest } from '../models/UserCreateUpdateRequest';
import { UserDetailDto } from '../models/UserDetailDto';
import { UserDto } from '../models/UserDto';
import { UserDtoPaginated } from '../models/UserDtoPaginated';
import { UserFullDto } from '../models/UserFullDto';
import { UserMinimalDto } from '../models/UserMinimalDto';
import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { WorkTimeDto } from '../models/WorkTimeDto';

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
    public accountChangePasswordWithHttpInfo(param: AccountApiAccountChangePasswordRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.accountChangePasswordWithHttpInfo(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountChangePassword(param: AccountApiAccountChangePasswordRequest = {}, options?: Configuration): Promise<void> {
        return this.api.accountChangePassword(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetCurrentUserWithHttpInfo(param: AccountApiAccountGetCurrentUserRequest = {}, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.accountGetCurrentUserWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountGetCurrentUser(param: AccountApiAccountGetCurrentUserRequest = {}, options?: Configuration): Promise<UserDto> {
        return this.api.accountGetCurrentUser( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLoginWithHttpInfo(param: AccountApiAccountLoginRequest = {}, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.accountLoginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogin(param: AccountApiAccountLoginRequest = {}, options?: Configuration): Promise<LoginResponse> {
        return this.api.accountLogin(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogoutWithHttpInfo(param: AccountApiAccountLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.accountLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountLogout(param: AccountApiAccountLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.accountLogout( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountRefreshTokenWithHttpInfo(param: AccountApiAccountRefreshTokenRequest = {}, options?: Configuration): Promise<HttpInfo<RefreshTokenResponse>> {
        return this.api.accountRefreshTokenWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public accountRefreshToken(param: AccountApiAccountRefreshTokenRequest = {}, options?: Configuration): Promise<RefreshTokenResponse> {
        return this.api.accountRefreshToken( options).toPromise();
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
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiuserGetAll
     */
    orderBy?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiuserGetAll
     */
    orderByString?: string
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
    public userCreateWithHttpInfo(param: UserApiUserCreateRequest = {}, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.userCreateWithHttpInfo(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userCreate(param: UserApiUserCreateRequest = {}, options?: Configuration): Promise<UserDto> {
        return this.api.userCreate(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userDeleteWithHttpInfo(param: UserApiUserDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.userDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userDelete(param: UserApiUserDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.userDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetAllWithHttpInfo(param: UserApiUserGetAllRequest, options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.userGetAllWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy, param.orderByString,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetAll(param: UserApiUserGetAllRequest, options?: Configuration): Promise<UserDtoPaginated> {
        return this.api.userGetAll(param.pageNumber, param.pageSize, param.searchString, param.orderBy, param.orderByString,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetByIdWithHttpInfo(param: UserApiUserGetByIdRequest, options?: Configuration): Promise<HttpInfo<UserFullDto>> {
        return this.api.userGetByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGetById(param: UserApiUserGetByIdRequest, options?: Configuration): Promise<UserFullDto> {
        return this.api.userGetById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userUpdateWithHttpInfo(param: UserApiUserUpdateRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.userUpdateWithHttpInfo(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userUpdate(param: UserApiUserUpdateRequest, options?: Configuration): Promise<UserDto> {
        return this.api.userUpdate(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

}
