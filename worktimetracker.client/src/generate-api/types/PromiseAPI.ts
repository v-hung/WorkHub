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
    public apiIdentityChangePasswordPostWithHttpInfo(changePasswordRequest?: ChangePasswordRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiIdentityChangePasswordPostWithHttpInfo(changePasswordRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [changePasswordRequest]
     */
    public apiIdentityChangePasswordPost(changePasswordRequest?: ChangePasswordRequest, _options?: Configuration): Promise<void> {
        const result = this.api.apiIdentityChangePasswordPost(changePasswordRequest, _options);
        return result.toPromise();
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
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy]
     * @param [orderByString]
     */
    public apiUsersGetWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, orderByString?: string, _options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        const result = this.api.apiUsersGetWithHttpInfo(pageNumber, pageSize, searchString, orderBy, orderByString, _options);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy]
     * @param [orderByString]
     */
    public apiUsersGet(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, orderByString?: string, _options?: Configuration): Promise<UserDtoPaginated> {
        const result = this.api.apiUsersGet(pageNumber, pageSize, searchString, orderBy, orderByString, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiUsersIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public apiUsersIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public apiUsersIdPostWithHttpInfo(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.apiUsersIdPostWithHttpInfo(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public apiUsersIdPost(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.apiUsersIdPost(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public apiUsersPostWithHttpInfo(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.apiUsersPostWithHttpInfo(userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public apiUsersPost(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.apiUsersPost(userCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



