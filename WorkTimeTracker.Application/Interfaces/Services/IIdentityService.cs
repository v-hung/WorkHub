using System.Security.Claims;
using WorkTimeTracker.Application.DTOs.User;
using WorkTimeTracker.Application.Requests.Identity;
using Microsoft.AspNetCore.Http;
using WorkTimeTracker.Application.Responses.Identity;

namespace WorkTimeTracker.Application.Interfaces.Services;

public interface IIdentityService
{
    Task<LoginResponse> LoginAsync(LoginRequest input);

    Task<UserDto> GetCurrentUserAsync(ClaimsPrincipal claimsPrincipal);

    Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest httpRequest);

    Task<string> LogoutAsync(HttpRequest httpRequest, ClaimsPrincipal claimsPrincipal);

    Task ChangePasswordAsync(ChangePasswordRequest request, Guid userId);
}