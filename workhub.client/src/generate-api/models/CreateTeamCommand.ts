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
 * @interface CreateTeamCommand
 */
export interface CreateTeamCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateTeamCommand
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTeamCommand
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTeamCommand
     */
    totalMembers?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateTeamCommand
     */
    completedProjects?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateTeamCommand
     */
    activeProjects?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateTeamCommand
     */
    managerId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTeamCommand
     */
    memberIds?: Array<string> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateTeamCommand
     */
    projectIds?: Array<number> | null;
}

/**
 * Check if a given object implements the CreateTeamCommand interface.
 */
export function instanceOfCreateTeamCommand(value: object): value is CreateTeamCommand {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateTeamCommandFromJSON(json: any): CreateTeamCommand {
    return CreateTeamCommandFromJSONTyped(json, false);
}

export function CreateTeamCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTeamCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'totalMembers': json['totalMembers'] == null ? undefined : json['totalMembers'],
        'completedProjects': json['completedProjects'] == null ? undefined : json['completedProjects'],
        'activeProjects': json['activeProjects'] == null ? undefined : json['activeProjects'],
        'managerId': json['managerId'] == null ? undefined : json['managerId'],
        'memberIds': json['memberIds'] == null ? undefined : json['memberIds'],
        'projectIds': json['projectIds'] == null ? undefined : json['projectIds'],
    };
}

export function CreateTeamCommandToJSON(json: any): CreateTeamCommand {
    return CreateTeamCommandToJSONTyped(json, false);
}

export function CreateTeamCommandToJSONTyped(value?: CreateTeamCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'totalMembers': value['totalMembers'],
        'completedProjects': value['completedProjects'],
        'activeProjects': value['activeProjects'],
        'managerId': value['managerId'],
        'memberIds': value['memberIds'],
        'projectIds': value['projectIds'],
    };
}

