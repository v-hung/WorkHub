using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Application.Interfaces.Services;

public interface IJwtTokenService
{
	ClaimsPrincipal GetPrincipalFromExpiredToken(string token);

	string GenerateRefreshToken();

	RefreshToken GenerateRefreshTokenModel(bool rememberMe);

	CookieOptions GenerateTokenCookieOptions();
	CookieOptions GenerateRefreshTokenCookieOptions(bool rememberMe = false);

	string GenerateJwtToken(User user);

	void RevokeRefreshToken(User user, string refreshToken);

	void RevokeExpiredRefreshTokens(User user);

	Task<RefreshToken> RefreshTokenAsync(string? oldRefreshToken);
}