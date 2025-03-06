using System.Security.Claims;
using WorkTimeTracker.Application.Requests.Identity;
using Microsoft.AspNetCore.Http;
using WorkTimeTracker.Application.Responses.Identity;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Application.Interfaces.Services;

public interface IIdentityService
{
	Task<LoginResponse<D>> LoginAsync<D>(LoginRequest input) where D : class, IRoleAudit<string>;

	Task<D> GetCurrentUserAsync<D>(ClaimsPrincipal claimsPrincipal) where D : class, IRoleAudit<string>;

	Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest httpRequest);

	Task<string> LogoutAsync(HttpRequest httpRequest, ClaimsPrincipal claimsPrincipal);

	Task ChangePasswordAsync(ChangePasswordRequest request, Guid userId);

	Task<List<string>> GetRolesAsync(User user);

	Task<List<string>> GetRolesAsync(string id);

}