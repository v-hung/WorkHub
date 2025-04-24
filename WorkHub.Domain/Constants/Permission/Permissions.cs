using System.Reflection;

namespace WorkHub.Domain.Constants.Permission;

public static class Permissions
{
	public static class Users
	{
		public const string View = "Permissions.Users.View";
		public const string Sync = "Permissions.Users.Sync";
		public const string Create = "Permissions.Users.Create";
		public const string Edit = "Permissions.Users.Edit";
		public const string Delete = "Permissions.Users.Delete";
		public const string Export = "Permissions.Users.Export";
		public const string Import = "Permissions.Users.Import";
	}

	public static class Roles
	{
		public const string View = "Permissions.Roles.View";
		public const string Create = "Permissions.Roles.Create";
		public const string Edit = "Permissions.Roles.Edit";
		public const string Delete = "Permissions.Roles.Delete";
	}

	public static class Teams
	{
		public const string View = "Permissions.Teams.View";
		public const string Create = "Permissions.Teams.Create";
		public const string Edit = "Permissions.Teams.Edit";
		public const string Delete = "Permissions.Teams.Delete";
	}

	public static class WorkTimes
	{
		public const string View = "Permissions.WorkTimes.View";
		public const string Create = "Permissions.WorkTimes.Create";
		public const string Edit = "Permissions.WorkTimes.Edit";
		public const string Delete = "Permissions.WorkTimes.Delete";
	}

	public static class Projects
	{
		public const string View = "Permissions.Projects.View";
		public const string Create = "Permissions.Projects.Create";
		public const string Edit = "Permissions.Projects.Edit";
		public const string Delete = "Permissions.Projects.Delete";
	}

	public static class Devices
	{
		public const string View = "Permissions.Devices.View";
		public const string Create = "Permissions.Devices.Create";
		public const string Edit = "Permissions.Devices.Edit";
		public const string Delete = "Permissions.Devices.Delete";
	}

	public static class Timesheets
	{
		public const string View = "Permissions.Timesheets.View";
		public const string Export = "Permissions.Timesheets.Export";
	}

	public static class System
	{
		public const string SendEmail = "Permissions.System.SendEmail";
		public const string Report = "Permissions.System.Report";
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