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
import type { ProjectStatus } from './ProjectStatus';
import {
    ProjectStatusFromJSON,
    ProjectStatusFromJSONTyped,
    ProjectStatusToJSON,
    ProjectStatusToJSONTyped,
} from './ProjectStatus';

/**
 * 
 * @export
 * @interface CreateProjectCommand
 */
export interface CreateProjectCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateProjectCommand
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProjectCommand
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateProjectCommand
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateProjectCommand
     */
    endDate?: Date | null;
    /**
     * 
     * @type {ProjectStatus}
     * @memberof CreateProjectCommand
     */
    status?: ProjectStatus;
    /**
     * 
     * @type {number}
     * @memberof CreateProjectCommand
     */
    teamId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateProjectCommand
     */
    managerId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateProjectCommand
     */
    memberIds?: Array<string> | null;
}



/**
 * Check if a given object implements the CreateProjectCommand interface.
 */
export function instanceOfCreateProjectCommand(value: object): value is CreateProjectCommand {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateProjectCommandFromJSON(json: any): CreateProjectCommand {
    return CreateProjectCommandFromJSONTyped(json, false);
}

export function CreateProjectCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'status': json['status'] == null ? undefined : ProjectStatusFromJSON(json['status']),
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
        'managerId': json['managerId'] == null ? undefined : json['managerId'],
        'memberIds': json['memberIds'] == null ? undefined : json['memberIds'],
    };
}

export function CreateProjectCommandToJSON(json: any): CreateProjectCommand {
    return CreateProjectCommandToJSONTyped(json, false);
}

export function CreateProjectCommandToJSONTyped(value?: CreateProjectCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'startDate': value['startDate'] == null ? undefined : ((value['startDate'] as any).toISOString()),
        'endDate': value['endDate'] == null ? undefined : ((value['endDate'] as any).toISOString()),
        'status': ProjectStatusToJSON(value['status']),
        'teamId': value['teamId'],
        'managerId': value['managerId'],
        'memberIds': value['memberIds'],
    };
}

