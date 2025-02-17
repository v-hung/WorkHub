using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using WorkTimeTracker.Server.Constants.Permission;
using WorkTimeTracker.Server.Models.Identity;

namespace WorkTimeTracker.Server.Helpers;

public static class ClaimsHelper
{

	public static async Task<IdentityResult> AddPermissionClaim(this RoleManager<Role> roleManager, Role role, string permission)
	{
		var allClaims = await roleManager.GetClaimsAsync(role);
		if (!allClaims.Any(a => a.Type == ApplicationClaimTypes.Permission && a.Value == permission))
		{
			return await roleManager.AddClaimAsync(role, new Claim(ApplicationClaimTypes.Permission, permission));
		}

		return IdentityResult.Failed();
	}
}
