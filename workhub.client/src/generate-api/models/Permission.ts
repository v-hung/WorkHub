/**
 * WorkHub.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export enum Permission {
    PermissionsUsersView = 'Permissions.Users.View',
    PermissionsUsersCreate = 'Permissions.Users.Create',
    PermissionsUsersEdit = 'Permissions.Users.Edit',
    PermissionsUsersDelete = 'Permissions.Users.Delete',
    PermissionsUsersExport = 'Permissions.Users.Export',
    PermissionsUsersSearch = 'Permissions.Users.Search',
    PermissionsRolesView = 'Permissions.Roles.View',
    PermissionsRolesCreate = 'Permissions.Roles.Create',
    PermissionsRolesEdit = 'Permissions.Roles.Edit',
    PermissionsRolesDelete = 'Permissions.Roles.Delete',
    PermissionsRolesSearch = 'Permissions.Roles.Search',
    PermissionsRoleClaimsView = 'Permissions.RoleClaims.View',
    PermissionsRoleClaimsCreate = 'Permissions.RoleClaims.Create',
    PermissionsRoleClaimsEdit = 'Permissions.RoleClaims.Edit',
    PermissionsRoleClaimsDelete = 'Permissions.RoleClaims.Delete',
    PermissionsRoleClaimsSearch = 'Permissions.RoleClaims.Search',
    PermissionsPreferencesChangeLanguage = 'Permissions.Preferences.ChangeLanguage',
    PermissionsDashboardsView = 'Permissions.Dashboards.View',
    PermissionsHolidaysView = 'Permissions.Holidays.View',
    PermissionsHolidaysCreate = 'Permissions.Holidays.Create',
    PermissionsHolidaysEdit = 'Permissions.Holidays.Edit',
    PermissionsHolidaysDelete = 'Permissions.Holidays.Delete',
    PermissionsHolidaysExport = 'Permissions.Holidays.Export',
    PermissionsHolidaysSearch = 'Permissions.Holidays.Search',
    PermissionsDeviceTypesView = 'Permissions.DeviceTypes.View',
    PermissionsDeviceTypesCreate = 'Permissions.DeviceTypes.Create',
    PermissionsDeviceTypesEdit = 'Permissions.DeviceTypes.Edit',
    PermissionsDeviceTypesDelete = 'Permissions.DeviceTypes.Delete',
    PermissionsDeviceTypesExport = 'Permissions.DeviceTypes.Export',
    PermissionsDeviceTypesSearch = 'Permissions.DeviceTypes.Search',
    PermissionsDevicesView = 'Permissions.Devices.View',
    PermissionsDevicesCreate = 'Permissions.Devices.Create',
    PermissionsDevicesEdit = 'Permissions.Devices.Edit',
    PermissionsDevicesDelete = 'Permissions.Devices.Delete',
    PermissionsDevicesExport = 'Permissions.Devices.Export',
    PermissionsDevicesSearch = 'Permissions.Devices.Search',
    PermissionsPositionsView = 'Permissions.Positions.View',
    PermissionsPositionsCreate = 'Permissions.Positions.Create',
    PermissionsPositionsEdit = 'Permissions.Positions.Edit',
    PermissionsPositionsDelete = 'Permissions.Positions.Delete',
    PermissionsPositionsExport = 'Permissions.Positions.Export',
    PermissionsPositionsSearch = 'Permissions.Positions.Search'
}
