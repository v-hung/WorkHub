using System.Security.Claims;
using WorkHub.Application.Requests.Identity;
using Microsoft.AspNetCore.Http;
using WorkHub.Application.Responses.Identity;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Interfaces.Services;

public interface IIdentityService
{
	Task<LoginResponse<D>> LoginAsync<D>(LoginRequest input) where D : class, IRoleAudit<string>;

	Task<D> GetCurrentUserAsync<D>(ClaimsPrincipal claimsPrincipal) where D : class, IRoleAudit<string>;

	Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest httpRequest);

	Task<string> LogoutAsync(HttpRequest httpRequest, ClaimsPrincipal claimsPrincipal);

	Task ChangePasswordAsync(ChangePasswordRequest request, Guid userId);

	Task<List<string>> GetRolesAsync(User user);

	Task<List<string>> GetRolesAsync(string id);

	Task<List<string>> GetAllPermissionsAsync(ClaimsPrincipal claimsPrincipal);
	Task<List<string>> GetAllPermissionsAsync(User user);

}