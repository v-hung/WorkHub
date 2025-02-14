using System.Reflection;

namespace Timesheet.Server.Constants.Permission;

public static class Permissions
{
    public static class Users
    {
        public const string View = "Permissions.Users.View";
        public const string Create = "Permissions.Users.Create";
        public const string Edit = "Permissions.Users.Edit";
        public const string Delete = "Permissions.Users.Delete";
        public const string Export = "Permissions.Users.Export";
        public const string Search = "Permissions.Users.Search";
    }

    public static class Roles
    {
        public const string View = "Permissions.Roles.View";
        public const string Create = "Permissions.Roles.Create";
        public const string Edit = "Permissions.Roles.Edit";
        public const string Delete = "Permissions.Roles.Delete";
        public const string Search = "Permissions.Roles.Search";
    }

    public static class RoleClaims
    {
        public const string View = "Permissions.RoleClaims.View";
        public const string Create = "Permissions.RoleClaims.Create";
        public const string Edit = "Permissions.RoleClaims.Edit";
        public const string Delete = "Permissions.RoleClaims.Delete";
        public const string Search = "Permissions.RoleClaims.Search";
    }

    public static class Preferences
    {
        public const string ChangeLanguage = "Permissions.Preferences.ChangeLanguage";
    }

    public static class Dashboards
    {
        public const string View = "Permissions.Dashboards.View";
    }


    public static class Holidays
    {
        public const string View = "Permissions.Holidays.View";
        public const string Create = "Permissions.Holidays.Create";
        public const string Edit = "Permissions.Holidays.Edit";
        public const string Delete = "Permissions.Holidays.Delete";
        public const string Export = "Permissions.Holidays.Export";
        public const string Search = "Permissions.Holidays.Search";
    }
    public static class DeviceTypes
    {
        public const string View = "Permissions.DeviceTypes.View";
        public const string Create = "Permissions.DeviceTypes.Create";
        public const string Edit = "Permissions.DeviceTypes.Edit";
        public const string Delete = "Permissions.DeviceTypes.Delete";
        public const string Export = "Permissions.DeviceTypes.Export";
        public const string Search = "Permissions.DeviceTypes.Search";
    }
    public static class Devices
    {
        public const string View = "Permissions.Devices.View";
        public const string Create = "Permissions.Devices.Create";
        public const string Edit = "Permissions.Devices.Edit";
        public const string Delete = "Permissions.Devices.Delete";
        public const string Export = "Permissions.Devices.Export";
        public const string Search = "Permissions.Devices.Search";
    }
    public static class Positions
    {
        public const string View = "Permissions.Positions.View";
        public const string Create = "Permissions.Positions.Create";
        public const string Edit = "Permissions.Positions.Edit";
        public const string Delete = "Permissions.Positions.Delete";
        public const string Export = "Permissions.Positions.Export";
        public const string Search = "Permissions.Positions.Search";
    }
    /// <summary>
    /// Returns a list of Permissions.
    /// </summary>
    /// <returns></returns>
    public static List<string> GetRegisteredPermissions()
    {
        var permissions = new List<string>();
        foreach (var prop in typeof(Permissions).GetNestedTypes().SelectMany(c =>
            c.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy)))
        {
            var propertyValue = prop.GetValue(null);

            if (propertyValue != null)
            {
                permissions.Add(propertyValue.ToString()!);
            }
        }
        return permissions;
    }
}