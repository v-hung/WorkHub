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
import type { DeviceMinimalDto } from './DeviceMinimalDto';
import {
    DeviceMinimalDtoFromJSON,
    DeviceMinimalDtoFromJSONTyped,
    DeviceMinimalDtoToJSON,
    DeviceMinimalDtoToJSONTyped,
} from './DeviceMinimalDto';

/**
 * 
 * @export
 * @interface DeviceCategoryDto
 */
export interface DeviceCategoryDto {
    /**
     * 
     * @type {number}
     * @memberof DeviceCategoryDto
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof DeviceCategoryDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceCategoryDto
     */
    description?: string | null;
    /**
     * 
     * @type {Array<DeviceMinimalDto>}
     * @memberof DeviceCategoryDto
     */
    devices?: Array<DeviceMinimalDto> | null;
}

/**
 * Check if a given object implements the DeviceCategoryDto interface.
 */
export function instanceOfDeviceCategoryDto(value: object): value is DeviceCategoryDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function DeviceCategoryDtoFromJSON(json: any): DeviceCategoryDto {
    return DeviceCategoryDtoFromJSONTyped(json, false);
}

export function DeviceCategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCategoryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'devices': json['devices'] == null ? undefined : ((json['devices'] as Array<any>).map(DeviceMinimalDtoFromJSON)),
    };
}

export function DeviceCategoryDtoToJSON(json: any): DeviceCategoryDto {
    return DeviceCategoryDtoToJSONTyped(json, false);
}

export function DeviceCategoryDtoToJSONTyped(value?: DeviceCategoryDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'devices': value['devices'] == null ? undefined : ((value['devices'] as Array<any>).map(DeviceMinimalDtoToJSON)),
    };
}

