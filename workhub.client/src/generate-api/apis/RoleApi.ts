/* tslint:disable */
/* eslint-disable */
/**
 * WorkHub.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  ErrorValidateResponse,
  PagedRequest,
  RoleCreateUpdateRequest,
  RoleDto,
  RoleDtoPaginated,
  RoleFullDto,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ErrorValidateResponseFromJSON,
    ErrorValidateResponseToJSON,
    PagedRequestFromJSON,
    PagedRequestToJSON,
    RoleCreateUpdateRequestFromJSON,
    RoleCreateUpdateRequestToJSON,
    RoleDtoFromJSON,
    RoleDtoToJSON,
    RoleDtoPaginatedFromJSON,
    RoleDtoPaginatedToJSON,
    RoleFullDtoFromJSON,
    RoleFullDtoToJSON,
} from '../models/index';

export interface RoleCreateRequest {
    roleCreateUpdateRequest?: RoleCreateUpdateRequest;
}

export interface RoleDeleteRequest {
    id: string;
}

export interface RoleGetAllRequest {
    ids?: Array<string>;
}

export interface RoleGetAllByNamesRequest {
    names?: Array<string>;
}

export interface RoleGetByIdRequest {
    id: string;
}

export interface RoleGetByNameRequest {
    name: string;
}

export interface RoleSearchRequest {
    pagedRequest?: PagedRequest;
}

export interface RoleUpdateRequest {
    id: string;
    roleCreateUpdateRequest?: RoleCreateUpdateRequest;
}

/**
 * 
 */
export class RoleApi extends runtime.BaseAPI {

    /**
     */
    async roleCreateRaw(requestParameters: RoleCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoleDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RoleCreateUpdateRequestToJSON(requestParameters['roleCreateUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleDtoFromJSON(jsonValue));
    }

    /**
     */
    async roleCreate(requestParameters: RoleCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoleDto> {
        const response = await this.roleCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleDeleteRaw(requestParameters: RoleDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling roleDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async roleDelete(requestParameters: RoleDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.roleDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async roleGetAllRaw(requestParameters: RoleGetAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleDto>>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RoleDtoFromJSON));
    }

    /**
     */
    async roleGetAll(requestParameters: RoleGetAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleDto>> {
        const response = await this.roleGetAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleGetAllByNamesRaw(requestParameters: RoleGetAllByNamesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleDto>>> {
        const queryParameters: any = {};

        if (requestParameters['names'] != null) {
            queryParameters['names'] = requestParameters['names'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/all-by-names`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RoleDtoFromJSON));
    }

    /**
     */
    async roleGetAllByNames(requestParameters: RoleGetAllByNamesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleDto>> {
        const response = await this.roleGetAllByNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleGetByIdRaw(requestParameters: RoleGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoleFullDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling roleGetById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleFullDtoFromJSON(jsonValue));
    }

    /**
     */
    async roleGetById(requestParameters: RoleGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoleFullDto> {
        const response = await this.roleGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleGetByNameRaw(requestParameters: RoleGetByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoleDto>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling roleGetByName().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/name/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleDtoFromJSON(jsonValue));
    }

    /**
     */
    async roleGetByName(requestParameters: RoleGetByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoleDto> {
        const response = await this.roleGetByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleSearchRaw(requestParameters: RoleSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoleDtoPaginated>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PagedRequestToJSON(requestParameters['pagedRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleDtoPaginatedFromJSON(jsonValue));
    }

    /**
     */
    async roleSearch(requestParameters: RoleSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoleDtoPaginated> {
        const response = await this.roleSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async roleUpdateRaw(requestParameters: RoleUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RoleDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling roleUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/roles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RoleCreateUpdateRequestToJSON(requestParameters['roleCreateUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RoleDtoFromJSON(jsonValue));
    }

    /**
     */
    async roleUpdate(requestParameters: RoleUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RoleDto> {
        const response = await this.roleUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
