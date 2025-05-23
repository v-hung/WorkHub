using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Interfaces.Services;

public interface IJwtTokenService
{
	ClaimsPrincipal GetPrincipalFromExpiredToken(string token);

	string GenerateRefreshToken();

	RefreshToken GenerateRefreshTokenModel(string securityStamp, bool rememberMe);

	CookieOptions GenerateTokenCookieOptions();
	CookieOptions GenerateRefreshTokenCookieOptions(bool rememberMe = false);

	Task<string> GenerateJwtToken(User user);

	void RevokeRefreshToken(User user, string refreshToken);

	void RevokeExpiredRefreshTokens(User user);

	Task<RefreshToken> RefreshTokenAsync(string? oldRefreshToken);
}