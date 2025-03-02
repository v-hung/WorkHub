using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using WorkTimeTracker.Domain.Constants.Permission;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Infrastructure.Helpers;

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
