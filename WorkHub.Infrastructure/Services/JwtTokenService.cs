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
using WorkHub.Domain.Constants.Permission;
using Microsoft.Extensions.DependencyInjection;

namespace WorkHub.Infrastructure.Services;

public class JwtTokenService : IJwtTokenService
{
	private readonly JwtConfig _jwtSettings;
	private readonly ApplicationDbContext _context;
	private readonly Lazy<IIdentityService> _identityService;

	public JwtTokenService(IOptions<JwtConfig> jwtOptions, ApplicationDbContext context, IServiceProvider serviceProvider)
	{
		_jwtSettings = jwtOptions.Value;
		_context = context;
		_identityService = new Lazy<IIdentityService>(() => serviceProvider.GetRequiredService<IIdentityService>());
	}

	public ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
	{
		var tokenValidationParameters = new TokenValidationParameters
		{
			ValidateAudience = false,
			ValidateIssuer = false,
			ValidateIssuerSigningKey = true,
			IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret)),
			ValidateLifetime = false
		};

		var principal = new JwtSecurityTokenHandler().ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);

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

	public RefreshToken GenerateRefreshTokenModel(string securityStamp, bool rememberMe)
	{
		return new RefreshToken
		{
			Token = GenerateRefreshToken(),
			Expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_jwtSettings.RefreshTokenExpiryDays)),
			Created = DateTime.UtcNow,
			SecurityStamp = securityStamp,
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

	public async Task<string> GenerateJwtToken(User user)
	{
		var claims = new List<Claim>
		{
			new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
			new Claim(ClaimTypes.Name, user.UserName ?? ""),
			new Claim(ClaimTypes.Email, user.Email ?? ""),
			new Claim("security_stamp", user.SecurityStamp ?? "")
		};

		var permissions = await _identityService.Value.GetAllPermissionsAsync(user);
		foreach (var permission in permissions)
		{
			claims.Add(new Claim(ApplicationClaimTypes.Permission, permission, ClaimValueTypes.String, ApplicationClaimTypes.Issuer));
		}

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

		var refreshToken = await _context.RefreshTokens.Where(rt => rt.Token == oldRefreshToken && DateTime.UtcNow <= rt.Expires && rt.RememberMe)
		.Include(r => r.User).FirstOrDefaultAsync();

		if (refreshToken == null || refreshToken.User == null)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "Refresh token is invalid or expired");
		}

		if (refreshToken.SecurityStamp != refreshToken.User.SecurityStamp)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "User credentials have changed. Please re-authenticate.");
		}

		refreshToken.Token = GenerateRefreshToken();
		refreshToken.Expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_jwtSettings.RefreshTokenExpiryDays));

		await _context.SaveChangesAsync();

		return refreshToken;
	}
}