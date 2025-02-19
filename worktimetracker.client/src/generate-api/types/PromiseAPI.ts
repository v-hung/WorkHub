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
    public accountChangePasswordWithHttpInfo(changePasswordRequest?: ChangePasswordRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.accountChangePasswordWithHttpInfo(changePasswordRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [changePasswordRequest]
     */
    public accountChangePassword(changePasswordRequest?: ChangePasswordRequest, _options?: Configuration): Promise<void> {
        const result = this.api.accountChangePassword(changePasswordRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public accountGetCurrentUserWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.accountGetCurrentUserWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public accountGetCurrentUser(_options?: Configuration): Promise<UserDto> {
        const result = this.api.accountGetCurrentUser(_options);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public accountLoginWithHttpInfo(loginRequest?: LoginRequest, _options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.accountLoginWithHttpInfo(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [loginRequest]
     */
    public accountLogin(loginRequest?: LoginRequest, _options?: Configuration): Promise<LoginResponse> {
        const result = this.api.accountLogin(loginRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public accountLogoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.accountLogoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public accountLogout(_options?: Configuration): Promise<void> {
        const result = this.api.accountLogout(_options);
        return result.toPromise();
    }

    /**
     */
    public accountRefreshTokenWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RefreshTokenResponse>> {
        const result = this.api.accountRefreshTokenWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public accountRefreshToken(_options?: Configuration): Promise<RefreshTokenResponse> {
        const result = this.api.accountRefreshToken(_options);
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
    public userCreateWithHttpInfo(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.userCreateWithHttpInfo(userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [userCreateUpdateRequest]
     */
    public userCreate(userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.userCreate(userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.userDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.userDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy]
     * @param [orderByString]
     */
    public userGetAllWithHttpInfo(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, orderByString?: string, _options?: Configuration): Promise<HttpInfo<UserDtoPaginated>> {
        const result = this.api.userGetAllWithHttpInfo(pageNumber, pageSize, searchString, orderBy, orderByString, _options);
        return result.toPromise();
    }

    /**
     * @param pageNumber
     * @param pageSize
     * @param [searchString]
     * @param [orderBy]
     * @param [orderByString]
     */
    public userGetAll(pageNumber: number, pageSize: number, searchString?: string, orderBy?: Array<string>, orderByString?: string, _options?: Configuration): Promise<UserDtoPaginated> {
        const result = this.api.userGetAll(pageNumber, pageSize, searchString, orderBy, orderByString, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userGetByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserFullDto>> {
        const result = this.api.userGetByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public userGetById(id: string, _options?: Configuration): Promise<UserFullDto> {
        const result = this.api.userGetById(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public userUpdateWithHttpInfo(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.userUpdateWithHttpInfo(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [userCreateUpdateRequest]
     */
    public userUpdate(id: string, userCreateUpdateRequest?: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.userUpdate(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



