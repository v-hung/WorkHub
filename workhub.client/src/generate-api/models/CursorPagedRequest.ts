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
import type { CursorPagedRequestDirection } from './CursorPagedRequestDirection';
import {
    CursorPagedRequestDirectionFromJSON,
    CursorPagedRequestDirectionFromJSONTyped,
    CursorPagedRequestDirectionToJSON,
    CursorPagedRequestDirectionToJSONTyped,
} from './CursorPagedRequestDirection';
import type { SearchConditionGroup } from './SearchConditionGroup';
import {
    SearchConditionGroupFromJSON,
    SearchConditionGroupFromJSONTyped,
    SearchConditionGroupToJSON,
    SearchConditionGroupToJSONTyped,
} from './SearchConditionGroup';

/**
 * 
 * @export
 * @interface CursorPagedRequest
 */
export interface CursorPagedRequest {
    /**
     * 
     * @type {number}
     * @memberof CursorPagedRequest
     */
    cursorId?: number | null;
    /**
     * 
     * @type {CursorPagedRequestDirection}
     * @memberof CursorPagedRequest
     */
    cursorPagedRequestDirection?: CursorPagedRequestDirection;
    /**
     * 
     * @type {boolean}
     * @memberof CursorPagedRequest
     */
    newestFirst?: boolean;
    /**
     * 
     * @type {SearchConditionGroup}
     * @memberof CursorPagedRequest
     */
    where?: SearchConditionGroup;
}



/**
 * Check if a given object implements the CursorPagedRequest interface.
 */
export function instanceOfCursorPagedRequest(value: object): value is CursorPagedRequest {
    return true;
}

export function CursorPagedRequestFromJSON(json: any): CursorPagedRequest {
    return CursorPagedRequestFromJSONTyped(json, false);
}

export function CursorPagedRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CursorPagedRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cursorId': json['cursorId'] == null ? undefined : json['cursorId'],
        'cursorPagedRequestDirection': json['cursorPagedRequestDirection'] == null ? undefined : CursorPagedRequestDirectionFromJSON(json['cursorPagedRequestDirection']),
        'newestFirst': json['newestFirst'] == null ? undefined : json['newestFirst'],
        'where': json['where'] == null ? undefined : SearchConditionGroupFromJSON(json['where']),
    };
}

export function CursorPagedRequestToJSON(json: any): CursorPagedRequest {
    return CursorPagedRequestToJSONTyped(json, false);
}

export function CursorPagedRequestToJSONTyped(value?: CursorPagedRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cursorId': value['cursorId'],
        'cursorPagedRequestDirection': CursorPagedRequestDirectionToJSON(value['cursorPagedRequestDirection']),
        'newestFirst': value['newestFirst'],
        'where': SearchConditionGroupToJSON(value['where']),
    };
}

