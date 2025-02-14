using System.Security.Claims;
using Timesheet.Server.Models.Identity;

namespace Timesheet.Server.Interfaces.Services;

public interface IJwtTokenService
{
    ClaimsPrincipal GetPrincipalFromExpiredToken(string token);

    string GenerateRefreshToken();

    RefreshToken GenerateRefreshTokenModel(bool rememberMe);

    CookieOptions GenerateTokenCookieOptions(bool refreshToken = false);

    string GenerateJwtToken(User user);

    void RevokeRefreshToken(User user, string refreshToken);

    void RevokeExpiredRefreshTokens(User user);

    RefreshToken RefreshTokenAsync(User user, string oldRefreshToken);
}