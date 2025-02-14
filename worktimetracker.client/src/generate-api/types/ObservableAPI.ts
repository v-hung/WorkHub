import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ErrorResponse } from '../models/ErrorResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { PagedRequest } from '../models/PagedRequest';
import { Permission } from '../models/Permission';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { UserDto } from '../models/UserDto';
import { UserDtoPaginated } from '../models/UserDtoPaginated';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     */
    public apiIdentityCurrentUserGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.apiIdentityCurrentUserGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiIdentityCurrentUserGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiIdentityCurrentUserGet(_options?: Configuration): Observable<UserDto> {
        return this.apiIdentityCurrentUserGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPostWithHttpInfo(loginRequest?: LoginRequest, _options?: Configuration): Observable<HttpInfo<LoginResponse>> {
        const requestContextPromise = this.requestFactory.apiIdentityLoginPost(loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiIdentityLoginPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [loginRequest]
     */
    public apiIdentityLoginPost(loginRequest?: LoginRequest, _options?: Configuration): Observable<LoginResponse> {
        return this.apiIdentityLoginPostWithHttpInfo(loginRequest, _options).pipe(map((apiResponse: HttpInfo<LoginResponse>) => apiResponse.data));
    }

    /**
     */
    public apiIdentityLogoutPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiIdentityLogoutPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiIdentityLogoutPostWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiIdentityLogoutPost(_options?: Configuration): Observable<void> {
        return this.apiIdentityLogoutPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiIdentityRefreshTokenPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RefreshTokenResponse>> {
        const requestContextPromise = this.requestFactory.apiIdentityRefreshTokenPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiIdentityRefreshTokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiIdentityRefreshTokenPost(_options?: Configuration): Observable<RefreshTokenResponse> {
        return this.apiIdentityRefreshTokenPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RefreshTokenResponse>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * @param [pagedRequest]
     */
    public apiUsersGetWithHttpInfo(pagedRequest?: PagedRequest, _options?: Configuration): Observable<HttpInfo<UserDtoPaginated>> {
        const requestContextPromise = this.requestFactory.apiUsersGet(pagedRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [pagedRequest]
     */
    public apiUsersGet(pagedRequest?: PagedRequest, _options?: Configuration): Observable<UserDtoPaginated> {
        return this.apiUsersGetWithHttpInfo(pagedRequest, _options).pipe(map((apiResponse: HttpInfo<UserDtoPaginated>) => apiResponse.data));
    }

}
