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
import type { RequestType } from './RequestType';
import {
    RequestTypeFromJSON,
    RequestTypeFromJSONTyped,
    RequestTypeToJSON,
    RequestTypeToJSONTyped,
} from './RequestType';

/**
 * 
 * @export
 * @interface CreateTimesheetAdjustmentRequestDto
 */
export interface CreateTimesheetAdjustmentRequestDto {
    /**
     * 
     * @type {Date}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    date: Date;
    /**
     * 
     * @type {RequestType}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    requestType: RequestType;
    /**
     * 
     * @type {string}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    approvedId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    checkIn: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    checkOut: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    breakStartDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateTimesheetAdjustmentRequestDto
     */
    breakEndDate?: Date | null;
}



/**
 * Check if a given object implements the CreateTimesheetAdjustmentRequestDto interface.
 */
export function instanceOfCreateTimesheetAdjustmentRequestDto(value: object): value is CreateTimesheetAdjustmentRequestDto {
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('requestType' in value) || value['requestType'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    if (!('checkIn' in value) || value['checkIn'] === undefined) return false;
    if (!('checkOut' in value) || value['checkOut'] === undefined) return false;
    return true;
}

export function CreateTimesheetAdjustmentRequestDtoFromJSON(json: any): CreateTimesheetAdjustmentRequestDto {
    return CreateTimesheetAdjustmentRequestDtoFromJSONTyped(json, false);
}

export function CreateTimesheetAdjustmentRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTimesheetAdjustmentRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'requestType': RequestTypeFromJSON(json['requestType']),
        'reason': json['reason'],
        'approvedId': json['approvedId'] == null ? undefined : json['approvedId'],
        'checkIn': (new Date(json['checkIn'])),
        'checkOut': (new Date(json['checkOut'])),
        'breakStartDate': json['breakStartDate'] == null ? undefined : (new Date(json['breakStartDate'])),
        'breakEndDate': json['breakEndDate'] == null ? undefined : (new Date(json['breakEndDate'])),
    };
}

export function CreateTimesheetAdjustmentRequestDtoToJSON(json: any): CreateTimesheetAdjustmentRequestDto {
    return CreateTimesheetAdjustmentRequestDtoToJSONTyped(json, false);
}

export function CreateTimesheetAdjustmentRequestDtoToJSONTyped(value?: CreateTimesheetAdjustmentRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'date': ((value['date']).toISOString()),
        'requestType': RequestTypeToJSON(value['requestType']),
        'reason': value['reason'],
        'approvedId': value['approvedId'],
        'checkIn': ((value['checkIn']).toISOString()),
        'checkOut': ((value['checkOut']).toISOString()),
        'breakStartDate': value['breakStartDate'] == null ? undefined : ((value['breakStartDate'] as any).toISOString()),
        'breakEndDate': value['breakEndDate'] == null ? undefined : ((value['breakEndDate'] as any).toISOString()),
    };
}

