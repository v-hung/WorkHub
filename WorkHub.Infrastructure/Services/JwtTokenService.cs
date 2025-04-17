using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WorkHub.Application.Configs;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Infrastructure.Data;
using WorkHub.Application.Exceptions;

namespace WorkHub.Infrastructure.Services;

public class JwtTokenService : IJwtTokenService
{
	private readonly JwtConfig _jwtSettings;
	private readonly ApplicationDbContext _context;

	public JwtTokenService(IOptions<JwtConfig> jwtOptions, ApplicationDbContext context)
	{
		_jwtSettings = jwtOptions.Value;
		_context = context;
	}

	public ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
	{
		var tokenValidationParameters = new TokenValidationParameters
		{
			ValidateAudience = false,
			ValidateIssuer = false,
			ValidateIssuerSigningKey = true,
			IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret)),
			ValidateLifetime = false // we want to get the claims from an expired token
		};

		var principal = new JwtSecurityTokenHandler().ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
		// var jwtSecurityToken = securityToken as JwtSecurityToken;

		if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
		{
			throw new SecurityTokenException("Invalid token");
		}


		return principal;
	}

	public string GenerateRefreshToken()
	{
		var randomNumber = new byte[32];
		using var rng = RandomNumberGenerator.Create();
		rng.GetBytes(randomNumber);
		return Convert.ToBase64String(randomNumber);
	}

	public RefreshToken GenerateRefreshTokenModel(bool rememberMe)
	{
		return new RefreshToken
		{
			Token = GenerateRefreshToken(),
			Expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_jwtSettings.RefreshTokenExpiryDays)),
			Created = DateTime.UtcNow,
			RememberMe = rememberMe
		};
	}

	public CookieOptions GenerateTokenCookieOptions()
	{

		return new CookieOptions
		{
			HttpOnly = true,
			Secure = true,
			SameSite = SameSiteMode.Strict,
			Expires = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_jwtSettings.TokenExpiryMinutes))
		};

	}

	public CookieOptions GenerateRefreshTokenCookieOptions(bool rememberMe = false)
	{

		return new CookieOptions
		{
			HttpOnly = true,
			Secure = true,
			SameSite = SameSiteMode.Strict,
			Expires = rememberMe ? DateTime.UtcNow.AddDays(Convert.ToDouble(_jwtSettings.RefreshTokenExpiryDays)) : DateTime.UtcNow.AddDays(1)
		};

	}

	public string GenerateJwtToken(User user)
	{
		var claims = new[]
		{
			new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
			new Claim(ClaimTypes.Name, user.UserName ?? ""),
			new Claim(ClaimTypes.Email, user.Email ?? "")
		};

		var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret));
		var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

		var token = new JwtSecurityToken(
			claims: claims,
			expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(_jwtSettings.TokenExpiryMinutes)),
			signingCredentials: creds
		);

		return new JwtSecurityTokenHandler().WriteToken(token);
	}

	public void RevokeRefreshToken(User user, string refreshToken)
	{
		var token = _context.RefreshTokens.FirstOrDefault(rt => rt.Token == refreshToken && rt.UserId == user.Id);
		if (token != null)
		{
			_context.RefreshTokens.Remove(token);
			_context.SaveChanges();
		}
	}

	public void RevokeExpiredRefreshTokens(User user)
	{
		var expiredTokens = _context.RefreshTokens
			.Where(rt => rt.UserId == user.Id && rt.Expires < DateTime.UtcNow)
			.ToList();

		if (expiredTokens.Any())
		{
			_context.RefreshTokens.RemoveRange(expiredTokens);
			_context.SaveChanges();
		}
	}


	public bool IsRefreshTokenValid(User user, string refreshToken)
	{
		var token = _context.RefreshTokens.FirstOrDefault(rt => rt.Token == refreshToken && rt.UserId == user.Id);

		if (token != null && DateTime.UtcNow <= token.Expires)
		{
			return true;
		}

		return false;
	}

	public async Task<RefreshToken> RefreshTokenAsync(string? oldRefreshToken)
	{
		if (string.IsNullOrEmpty(oldRefreshToken))
		{
			throw new BusinessException(HttpStatusCode.BadRequest, "Refresh token is invalid client request");
		}

		var refreshToken = await _context.RefreshTokens.Include(r => r.User).FirstOrDefaultAsync(rt => rt.Token == oldRefreshToken && DateTime.UtcNow <= rt.Expires && rt.RememberMe);

		if (refreshToken == null || refreshToken.User == null)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "Refresh token is invalid or expired");
		}

		refreshToken.Token = GenerateRefreshToken();
		refreshToken.Expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_jwtSettings.RefreshTokenExpiryDays));
		_context.RefreshTokens.Update(refreshToken);

		_context.SaveChanges();

		return refreshToken;
	}
}