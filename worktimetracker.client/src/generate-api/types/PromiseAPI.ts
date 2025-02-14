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
     */
    public apiIdentityCurrentUserGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.apiIdentityCurrentUserGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityCurrentUserGet(_options?: Configuration): Promise<UserDto> {
        const result = this.api.apiIdentityCurrentUserGet(_options);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPostWithHttpInfo(loginRequest?: LoginRequest, _options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.apiIdentityLoginPostWithHttpInfo(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPost(loginRequest?: LoginRequest, _options?: Configuration): Promise<LoginResponse> {
        const result = this.api.apiIdentityLoginPost(loginRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityLogoutPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiIdentityLogoutPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityLogoutPost(_options?: Configuration): Promise<void> {
        const result = this.api.apiIdentityLogoutPost(_options);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityRefreshTokenPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RefreshTokenResponse>> {
        const result = this.api.apiIdentityRefreshTokenPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiIdentityRefreshTokenPost(_options?: Configuration): Promise<RefreshTokenResponse> {
        const result = this.api.apiIdentityRefreshTokenPost(_options);
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
     * @param [pagedRequest]
     */
    public apiUsersGetWithHttpInfo(pagedRequest?: PagedRequest, _options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        const result = this.api.apiUsersGetWithHttpInfo(pagedRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [pagedRequest]
     */
    public apiUsersGet(pagedRequest?: PagedRequest, _options?: Configuration): Promise<UserDtoPaginated> {
        const result = this.api.apiUsersGet(pagedRequest, _options);
        return result.toPromise();
    }


}



