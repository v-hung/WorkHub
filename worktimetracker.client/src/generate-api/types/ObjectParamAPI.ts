import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { ErrorResponse } from '../models/ErrorResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { TeamDto } from '../models/TeamDto';
import { UserCreateUpdateRequest } from '../models/UserCreateUpdateRequest';
import { UserDetailDto } from '../models/UserDetailDto';
import { UserDto } from '../models/UserDto';
import { UserDtoPaginated } from '../models/UserDtoPaginated';
import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { WorkTimeDto } from '../models/WorkTimeDto';

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
    public apiIdentityChangePasswordPostWithHttpInfo(param: AccountApiApiIdentityChangePasswordPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiIdentityChangePasswordPostWithHttpInfo(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityChangePasswordPost(param: AccountApiApiIdentityChangePasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiIdentityChangePasswordPost(param.changePasswordRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityCurrentUserGetWithHttpInfo(param: AccountApiApiIdentityCurrentUserGetRequest = {}, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.apiIdentityCurrentUserGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityCurrentUserGet(param: AccountApiApiIdentityCurrentUserGetRequest = {}, options?: Configuration): Promise<UserDto> {
        return this.api.apiIdentityCurrentUserGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLoginPostWithHttpInfo(param: AccountApiApiIdentityLoginPostRequest = {}, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.apiIdentityLoginPostWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLoginPost(param: AccountApiApiIdentityLoginPostRequest = {}, options?: Configuration): Promise<LoginResponse> {
        return this.api.apiIdentityLoginPost(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLogoutPostWithHttpInfo(param: AccountApiApiIdentityLogoutPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiIdentityLogoutPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityLogoutPost(param: AccountApiApiIdentityLogoutPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiIdentityLogoutPost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityRefreshTokenPostWithHttpInfo(param: AccountApiApiIdentityRefreshTokenPostRequest = {}, options?: Configuration): Promise<HttpInfo<RefreshTokenResponse>> {
        return this.api.apiIdentityRefreshTokenPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiIdentityRefreshTokenPost(param: AccountApiApiIdentityRefreshTokenPostRequest = {}, options?: Configuration): Promise<RefreshTokenResponse> {
        return this.api.apiIdentityRefreshTokenPost( options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

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
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UserApiapiUsersGet
     */
    orderBy?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersGet
     */
    orderByString?: string
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

export interface UserApiApiUsersIdPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiapiUsersIdPost
     */
    id: string
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserApiapiUsersIdPost
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
    public apiUsersGetWithHttpInfo(param: UserApiApiUsersGetRequest, options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.apiUsersGetWithHttpInfo(param.pageNumber, param.pageSize, param.searchString, param.orderBy, param.orderByString,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGet(param: UserApiApiUsersGetRequest, options?: Configuration): Promise<UserDtoPaginated> {
        return this.api.apiUsersGet(param.pageNumber, param.pageSize, param.searchString, param.orderBy, param.orderByString,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDeleteWithHttpInfo(param: UserApiApiUsersIdDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdDelete(param: UserApiApiUsersIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPostWithHttpInfo(param: UserApiApiUsersIdPostRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.apiUsersIdPostWithHttpInfo(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersIdPost(param: UserApiApiUsersIdPostRequest, options?: Configuration): Promise<UserDto> {
        return this.api.apiUsersIdPost(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPostWithHttpInfo(param: UserApiApiUsersPostRequest = {}, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.apiUsersPostWithHttpInfo(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPost(param: UserApiApiUsersPostRequest = {}, options?: Configuration): Promise<UserDto> {
        return this.api.apiUsersPost(param.userCreateUpdateRequest,  options).toPromise();
    }

}
