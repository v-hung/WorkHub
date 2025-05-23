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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RefreshTokenResponse
 */
export interface RefreshTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenResponse
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the RefreshTokenResponse interface.
 */
export function instanceOfRefreshTokenResponse(value: object): value is RefreshTokenResponse {
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('refreshToken' in value) || value['refreshToken'] === undefined) return false;
    return true;
}

export function RefreshTokenResponseFromJSON(json: any): RefreshTokenResponse {
    return RefreshTokenResponseFromJSONTyped(json, false);
}

export function RefreshTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshTokenResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
        'refreshToken': json['refreshToken'],
    };
}

export function RefreshTokenResponseToJSON(json: any): RefreshTokenResponse {
    return RefreshTokenResponseToJSONTyped(json, false);
}

export function RefreshTokenResponseToJSONTyped(value?: RefreshTokenResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'token': value['token'],
        'refreshToken': value['refreshToken'],
    };
}

