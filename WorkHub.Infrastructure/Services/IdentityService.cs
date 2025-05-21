using System.Net;
using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Responses.Identity;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Infrastructure.Data;
using WorkHub.Application.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace WorkHub.Infrastructure.Services;

public class IdentityService(SignInManager<User> signInManager, UserManager<User> userManager, RoleManager<Role> roleManager, IJwtTokenService jwtTokenService, IMapper mapper, ILogger<IdentityService> logger, IHttpContextAccessor httpContextAccessor, ApplicationDbContext context) : IIdentityService
{
	private readonly UserManager<User> _userManager = userManager;

	private readonly RoleManager<Role> _roleManager = roleManager;

	private readonly ApplicationDbContext _context = context;

	private readonly SignInManager<User> _signInManager = signInManager;

	private readonly IJwtTokenService _jwtTokenService = jwtTokenService;

	private readonly IMapper _mapper = mapper;

	private readonly ILogger<IdentityService> _logger = logger;

	private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

	public async Task<LoginResponse<D>> LoginAsync<D>(LoginRequest request) where D : class, IRoleAudit<string>
	{
		var user = await _userManager.FindByEmailAsync(request.Email)
			?? throw new BusinessException(HttpStatusCode.NotFound, "Account is not exit");

		var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

		if (!result.Succeeded)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "Invalid email or password");
		}

		_jwtTokenService.RevokeExpiredRefreshTokens(user);

		// Create JWT token
		var token = await _jwtTokenService.GenerateJwtToken(user);

		var refreshToken = _jwtTokenService.GenerateRefreshTokenModel(user.SecurityStamp ?? "", request.RememberMe);
		user.RefreshTokens.Add(refreshToken);
		await _userManager.UpdateAsync(user);

		// Set token cookie 
		SetTokenCookie(token, refreshToken.Token, request.RememberMe);

		var userData = await GetUserDataAsync<D>(user.Id.ToString());

		var response = new LoginResponse<D>
		{
			Token = token,
			RefreshToken = refreshToken.Token,
			User = userData
		};

		return response;
	}


	public async Task<D> GetCurrentUserAsync<D>(ClaimsPrincipal claimsPrincipal) where D : class, IRoleAudit<string>
	{
		var userId = _userManager.GetUserId(claimsPrincipal)
			?? throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");

		return await GetUserDataAsync<D>(userId);
	}

	public async Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest request)
	{
		var refreshToken = request.Cookies["refreshToken"];

		var refreshTokenModel = await _jwtTokenService.RefreshTokenAsync(refreshToken);
		var newToken = await _jwtTokenService.GenerateJwtToken(refreshTokenModel.User!);

		// Set token cookie 
		SetTokenCookie(newToken, refreshTokenModel.Token, refreshTokenModel.RememberMe);

		return new RefreshTokenResponse
		{
			Token = newToken,
			RefreshToken = refreshTokenModel.Token
		};
	}

	public async Task<string> LogoutAsync(HttpRequest request, ClaimsPrincipal claimsPrincipal)
	{
		var refreshToken = request.Cookies["refreshToken"];
		var user = await _userManager.GetUserAsync(claimsPrincipal);

		if (refreshToken != null && user != null)
		{

			_jwtTokenService.RevokeRefreshToken(user, refreshToken);
		}

		return "Signed out successfully";
	}

	public async Task ChangePasswordAsync(ChangePasswordRequest request, Guid userId)
	{
		var user = await _userManager.FindByIdAsync(userId.ToString()) ?? throw new BusinessException(HttpStatusCode.NotFound, "");

		var identityResult = await _userManager.ChangePasswordAsync(
				user,
				request.Password,
				request.NewPassword);

		var errors = identityResult.Errors.ToDictionary(e => e.Code, e => new[] { e.Description });

		if (!identityResult.Succeeded)
		{
			throw new BusinessException(HttpStatusCode.BadRequest, "Failed to add new roles.", errors);
		}
	}

	public async Task<List<string>> GetRolesAsync(User user)
	{

		return (await _userManager.GetRolesAsync(user)).ToList();
	}

	public async Task<List<string>> GetRolesAsync(string id)
	{
		var user = await _userManager.FindByIdAsync(id.ToString()) ?? throw new BusinessException(HttpStatusCode.NotFound, "");

		return (await _userManager.GetRolesAsync(user)).ToList();
	}

	private void SetTokenCookie(string token, string refreshToken, bool rememberMe)
	{
		var tokenCookieOptions = _jwtTokenService.GenerateTokenCookieOptions();
		_httpContextAccessor.HttpContext?.Response.Cookies.Append("token", token, tokenCookieOptions);

		var refreshCookieOptions = _jwtTokenService.GenerateRefreshTokenCookieOptions(rememberMe);
		_httpContextAccessor.HttpContext?.Response.Cookies.Append("refreshToken", refreshToken, refreshCookieOptions);
	}

	public async Task<D> GetUserDataAsync<D>(string userId) where D : class, IRoleAudit<string>
	{
		var user = await _userManager.Users.AsNoTracking()
			.Include(u => u.WorkTime)
			.Include(u => u.Supervisor)
			.Include(u => u.Team).FirstOrDefaultAsync(u => u.Id == Guid.Parse(userId))
			?? throw new BusinessException(HttpStatusCode.NotFound, "Account is not exist");

		var data = _mapper.Map<D>(user);
		data.Roles = await GetRolesAsync(user);

		return data;
	}

	public async Task<List<string>> GetAllPermissionsAsync(ClaimsPrincipal claimsPrincipal)
	{
		var user = await _userManager.GetUserAsync(claimsPrincipal)
			?? throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");

		return await GetAllPermissionsAsync(user);
	}

	public async Task<List<string>> GetAllPermissionsAsync(User user)
	{
		var roles = await _userManager.GetRolesAsync(user);

		var roleClaims = new List<Claim>();

		foreach (var roleName in roles)
		{
			var role = await _roleManager.FindByNameAsync(roleName);
			if (role != null)
			{
				var claims = await _roleManager.GetClaimsAsync(role);
				roleClaims.AddRange(claims);
			}
		}

		return [.. roleClaims.Select(claim => claim.Value).Distinct()];
	}
}