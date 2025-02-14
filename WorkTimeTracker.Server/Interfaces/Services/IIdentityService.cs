using System.Security.Claims;
using Timesheet.Server.Dto;
using Timesheet.Server.Models.Identity;
using Timesheet.Server.Requests.Identity;
using Timesheet.Server.Responses.Identity;

namespace Timesheet.Server.Interfaces.Services;

public interface IIdentityService
{
    Task<LoginResponse> LoginAsync(LoginRequest input);

    Task<UserDto> GetCurrentUserAsync(ClaimsPrincipal claimsPrincipal);

    Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest httpRequest);

    Task<string> LogoutAsync(HttpRequest httpRequest, ClaimsPrincipal claimsPrincipal);
}