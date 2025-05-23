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
import type { WorkTimeDto } from './WorkTimeDto';
import {
    WorkTimeDtoFromJSON,
    WorkTimeDtoFromJSONTyped,
    WorkTimeDtoToJSON,
    WorkTimeDtoToJSONTyped,
} from './WorkTimeDto';

/**
 * 
 * @export
 * @interface WorkTimeDtoPaginated
 */
export interface WorkTimeDtoPaginated {
    /**
     * 
     * @type {Array<WorkTimeDto>}
     * @memberof WorkTimeDtoPaginated
     */
    data: Array<WorkTimeDto>;
    /**
     * 
     * @type {number}
     * @memberof WorkTimeDtoPaginated
     */
    currentPage: number;
    /**
     * 
     * @type {number}
     * @memberof WorkTimeDtoPaginated
     */
    totalPages: number;
    /**
     * 
     * @type {number}
     * @memberof WorkTimeDtoPaginated
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof WorkTimeDtoPaginated
     */
    pageSize: number;
    /**
     * 
     * @type {boolean}
     * @memberof WorkTimeDtoPaginated
     */
    readonly hasPreviousPage: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkTimeDtoPaginated
     */
    readonly hasNextPage: boolean;
}

/**
 * Check if a given object implements the WorkTimeDtoPaginated interface.
 */
export function instanceOfWorkTimeDtoPaginated(value: object): value is WorkTimeDtoPaginated {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('currentPage' in value) || value['currentPage'] === undefined) return false;
    if (!('totalPages' in value) || value['totalPages'] === undefined) return false;
    if (!('totalCount' in value) || value['totalCount'] === undefined) return false;
    if (!('pageSize' in value) || value['pageSize'] === undefined) return false;
    if (!('hasPreviousPage' in value) || value['hasPreviousPage'] === undefined) return false;
    if (!('hasNextPage' in value) || value['hasNextPage'] === undefined) return false;
    return true;
}

export function WorkTimeDtoPaginatedFromJSON(json: any): WorkTimeDtoPaginated {
    return WorkTimeDtoPaginatedFromJSONTyped(json, false);
}

export function WorkTimeDtoPaginatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkTimeDtoPaginated {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WorkTimeDtoFromJSON)),
        'currentPage': json['currentPage'],
        'totalPages': json['totalPages'],
        'totalCount': json['totalCount'],
        'pageSize': json['pageSize'],
        'hasPreviousPage': json['hasPreviousPage'],
        'hasNextPage': json['hasNextPage'],
    };
}

export function WorkTimeDtoPaginatedToJSON(json: any): WorkTimeDtoPaginated {
    return WorkTimeDtoPaginatedToJSONTyped(json, false);
}

export function WorkTimeDtoPaginatedToJSONTyped(value?: Omit<WorkTimeDtoPaginated, 'hasPreviousPage'|'hasNextPage'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(WorkTimeDtoToJSON)),
        'currentPage': value['currentPage'],
        'totalPages': value['totalPages'],
        'totalCount': value['totalCount'],
        'pageSize': value['pageSize'],
    };
}

