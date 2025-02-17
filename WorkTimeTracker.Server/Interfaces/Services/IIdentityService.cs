using System.Security.Claims;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Requests.Identity;
using WorkTimeTracker.Server.Responses.Identity;

namespace WorkTimeTracker.Server.Interfaces.Services;

public interface IIdentityService
{
	Task<LoginResponse> LoginAsync(LoginRequest input);

	Task<UserDto> GetCurrentUserAsync(ClaimsPrincipal claimsPrincipal);

	Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest httpRequest);

	Task<string> LogoutAsync(HttpRequest httpRequest, ClaimsPrincipal claimsPrincipal);

	Task ChangePasswordAsync(ChangePasswordRequest request, Guid userId);
}