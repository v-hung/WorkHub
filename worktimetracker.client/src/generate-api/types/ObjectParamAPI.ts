import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ErrorResponse } from '../models/ErrorResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { PagedRequest } from '../models/PagedRequest';
import { Permission } from '../models/Permission';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { UserDto } from '../models/UserDto';
import { UserDtoPaginated } from '../models/UserDtoPaginated';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

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
     * @type PagedRequest
     * @memberof UserApiapiUsersGet
     */
    pagedRequest?: PagedRequest
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiUsersGetWithHttpInfo(param: UserApiApiUsersGetRequest = {}, options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        return this.api.apiUsersGetWithHttpInfo(param.pagedRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersGet(param: UserApiApiUsersGetRequest = {}, options?: Configuration): Promise<UserDtoPaginated> {
        return this.api.apiUsersGet(param.pagedRequest,  options).toPromise();
    }

}
