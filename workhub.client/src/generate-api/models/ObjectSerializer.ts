export * from '../models/ChangePasswordRequest';
export * from '../models/CreateDeviceCategoryCommand';
export * from '../models/CreateDeviceCommand';
export * from '../models/CreateLeaveRequestDto';
export * from '../models/CreateProjectCommand';
export * from '../models/CreateRequestDto';
export * from '../models/CreateTeamCommand';
export * from '../models/CreateTimesheetAdjustmentRequestDto';
export * from '../models/CreateWorkTimeCommand';
export * from '../models/CursorPagedRequestDirection';
export * from '../models/DeviceCategoryDto';
export * from '../models/DeviceCategoryDtoPaginated';
export * from '../models/DeviceCategoryMinimalDto';
export * from '../models/DeviceDto';
export * from '../models/DeviceDtoPaginated';
export * from '../models/DeviceMinimalDto';
export * from '../models/DeviceStatus';
export * from '../models/ErrorResponse';
export * from '../models/ErrorValidateResponse';
export * from '../models/LoginRequest';
export * from '../models/Nationality';
export * from '../models/NotificationDto';
export * from '../models/NotificationDtoCursorPaginated';
export * from '../models/NotificationType';
export * from '../models/Permission';
export * from '../models/ProjectDto';
export * from '../models/ProjectDtoPaginated';
export * from '../models/ProjectMinimalDto';
export * from '../models/ProjectStatus';
export * from '../models/RefreshTokenResponse';
export * from '../models/RequestCombinedDto';
export * from '../models/RequestCombinedMinimalDto';
export * from '../models/RequestStatus';
export * from '../models/RequestType';
export * from '../models/RoleCreateUpdateRequest';
export * from '../models/RoleDto';
export * from '../models/RoleDtoPaginated';
export * from '../models/RoleFullDto';
export * from '../models/SendTestNotificationCommand';
export * from '../models/TeamDto';
export * from '../models/TeamDtoPaginated';
export * from '../models/TeamFullDto';
export * from '../models/TeamMinimalDto';
export * from '../models/TimesheetDto';
export * from '../models/TimesheetDtoTimesheetResponse';
export * from '../models/TimesheetFullDto';
export * from '../models/TimesheetMinimalDto';
export * from '../models/UserCreateUpdateRequest';
export * from '../models/UserDetailDto';
export * from '../models/UserDto';
export * from '../models/UserDtoLoginResponse';
export * from '../models/UserDtoPaginated';
export * from '../models/UserFullDto';
export * from '../models/UserMinimalDto';
export * from '../models/UserPosition';
export * from '../models/UserStatus';
export * from '../models/WorkTimeDto';
export * from '../models/WorkTimeDtoPaginated';

import { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import { CreateDeviceCategoryCommand } from '../models/CreateDeviceCategoryCommand';
import { CreateDeviceCommand       } from '../models/CreateDeviceCommand';
import { CreateLeaveRequestDto       } from '../models/CreateLeaveRequestDto';
import { CreateProjectCommand         } from '../models/CreateProjectCommand';
import { CreateRequestDto     } from '../models/CreateRequestDto';
import { CreateTeamCommand } from '../models/CreateTeamCommand';
import { CreateTimesheetAdjustmentRequestDto         } from '../models/CreateTimesheetAdjustmentRequestDto';
import { CreateWorkTimeCommand } from '../models/CreateWorkTimeCommand';
import { CursorPagedRequestDirection } from '../models/CursorPagedRequestDirection';
import { DeviceCategoryDto } from '../models/DeviceCategoryDto';
import { DeviceCategoryDtoPaginated } from '../models/DeviceCategoryDtoPaginated';
import { DeviceCategoryMinimalDto } from '../models/DeviceCategoryMinimalDto';
import { DeviceDto        } from '../models/DeviceDto';
import { DeviceDtoPaginated } from '../models/DeviceDtoPaginated';
import { DeviceMinimalDto      } from '../models/DeviceMinimalDto';
import { DeviceStatus } from '../models/DeviceStatus';
import { ErrorResponse } from '../models/ErrorResponse';
import { ErrorValidateResponse } from '../models/ErrorValidateResponse';
import { LoginRequest } from '../models/LoginRequest';
import { Nationality } from '../models/Nationality';
import { NotificationDto       } from '../models/NotificationDto';
import { NotificationDtoCursorPaginated } from '../models/NotificationDtoCursorPaginated';
import { NotificationType } from '../models/NotificationType';
import { Permission } from '../models/Permission';
import { ProjectDto          } from '../models/ProjectDto';
import { ProjectDtoPaginated } from '../models/ProjectDtoPaginated';
import { ProjectMinimalDto       } from '../models/ProjectMinimalDto';
import { ProjectStatus } from '../models/ProjectStatus';
import { RefreshTokenResponse } from '../models/RefreshTokenResponse';
import { RequestCombinedDto              } from '../models/RequestCombinedDto';
import { RequestCombinedMinimalDto           } from '../models/RequestCombinedMinimalDto';
import { RequestStatus } from '../models/RequestStatus';
import { RequestType } from '../models/RequestType';
import { RoleCreateUpdateRequest } from '../models/RoleCreateUpdateRequest';
import { RoleDto } from '../models/RoleDto';
import { RoleDtoPaginated } from '../models/RoleDtoPaginated';
import { RoleFullDto } from '../models/RoleFullDto';
import { SendTestNotificationCommand } from '../models/SendTestNotificationCommand';
import { TeamDto } from '../models/TeamDto';
import { TeamDtoPaginated } from '../models/TeamDtoPaginated';
import { TeamFullDto } from '../models/TeamFullDto';
import { TeamMinimalDto } from '../models/TeamMinimalDto';
import { TimesheetDto } from '../models/TimesheetDto';
import { TimesheetDtoTimesheetResponse } from '../models/TimesheetDtoTimesheetResponse';
import { TimesheetFullDto } from '../models/TimesheetFullDto';
import { TimesheetMinimalDto } from '../models/TimesheetMinimalDto';
import { UserCreateUpdateRequest              } from '../models/UserCreateUpdateRequest';
import { UserDetailDto        } from '../models/UserDetailDto';
import { UserDto                  } from '../models/UserDto';
import { UserDtoLoginResponse } from '../models/UserDtoLoginResponse';
import { UserDtoPaginated } from '../models/UserDtoPaginated';
import { UserFullDto                    } from '../models/UserFullDto';
import { UserMinimalDto        } from '../models/UserMinimalDto';
import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { WorkTimeDto } from '../models/WorkTimeDto';
import { WorkTimeDtoPaginated } from '../models/WorkTimeDtoPaginated';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "CursorPagedRequestDirection",
    "DeviceStatus",
    "Nationality",
    "NotificationType",
    "Permission",
    "ProjectStatus",
    "RequestStatus",
    "RequestType",
    "UserPosition",
    "UserStatus",
]);

let typeMap: {[index: string]: any} = {
    "ChangePasswordRequest": ChangePasswordRequest,
    "CreateDeviceCategoryCommand": CreateDeviceCategoryCommand,
    "CreateDeviceCommand": CreateDeviceCommand,
    "CreateLeaveRequestDto": CreateLeaveRequestDto,
    "CreateProjectCommand": CreateProjectCommand,
    "CreateRequestDto": CreateRequestDto,
    "CreateTeamCommand": CreateTeamCommand,
    "CreateTimesheetAdjustmentRequestDto": CreateTimesheetAdjustmentRequestDto,
    "CreateWorkTimeCommand": CreateWorkTimeCommand,
    "DeviceCategoryDto": DeviceCategoryDto,
    "DeviceCategoryDtoPaginated": DeviceCategoryDtoPaginated,
    "DeviceCategoryMinimalDto": DeviceCategoryMinimalDto,
    "DeviceDto": DeviceDto,
    "DeviceDtoPaginated": DeviceDtoPaginated,
    "DeviceMinimalDto": DeviceMinimalDto,
    "ErrorResponse": ErrorResponse,
    "ErrorValidateResponse": ErrorValidateResponse,
    "LoginRequest": LoginRequest,
    "NotificationDto": NotificationDto,
    "NotificationDtoCursorPaginated": NotificationDtoCursorPaginated,
    "ProjectDto": ProjectDto,
    "ProjectDtoPaginated": ProjectDtoPaginated,
    "ProjectMinimalDto": ProjectMinimalDto,
    "RefreshTokenResponse": RefreshTokenResponse,
    "RequestCombinedDto": RequestCombinedDto,
    "RequestCombinedMinimalDto": RequestCombinedMinimalDto,
    "RoleCreateUpdateRequest": RoleCreateUpdateRequest,
    "RoleDto": RoleDto,
    "RoleDtoPaginated": RoleDtoPaginated,
    "RoleFullDto": RoleFullDto,
    "SendTestNotificationCommand": SendTestNotificationCommand,
    "TeamDto": TeamDto,
    "TeamDtoPaginated": TeamDtoPaginated,
    "TeamFullDto": TeamFullDto,
    "TeamMinimalDto": TeamMinimalDto,
    "TimesheetDto": TimesheetDto,
    "TimesheetDtoTimesheetResponse": TimesheetDtoTimesheetResponse,
    "TimesheetFullDto": TimesheetFullDto,
    "TimesheetMinimalDto": TimesheetMinimalDto,
    "UserCreateUpdateRequest": UserCreateUpdateRequest,
    "UserDetailDto": UserDetailDto,
    "UserDto": UserDto,
    "UserDtoLoginResponse": UserDtoLoginResponse,
    "UserDtoPaginated": UserDtoPaginated,
    "UserFullDto": UserFullDto,
    "UserMinimalDto": UserMinimalDto,
    "WorkTimeDto": WorkTimeDto,
    "WorkTimeDtoPaginated": WorkTimeDtoPaginated,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
