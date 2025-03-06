using System.Net;
using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.Responses.Identity;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Infrastructure.Data;
using WorkTimeTracker.Infrastructure.Exceptions;

namespace WorkTimeTracker.Infrastructure.Services;

public class IdentityService(SignInManager<User> signInManager, UserManager<User> userManager, IJwtTokenService jwtTokenService, IMapper mapper, ILogger<IdentityService> logger, IHttpContextAccessor httpContextAccessor, ApplicationDbContext context) : IIdentityService
{
	private readonly UserManager<User> _userManager = userManager;

	// private readonly RoleManager<Role> _roleManager;

	private readonly ApplicationDbContext _context = context;

	private readonly SignInManager<User> _signInManager = signInManager;

	private readonly IJwtTokenService _jwtTokenService = jwtTokenService;

	private readonly IMapper _mapper = mapper;

	private readonly ILogger<IdentityService> _logger = logger;

	private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

	public async Task<LoginResponse<D>> LoginAsync<D>(LoginRequest request) where D : class, IRoleAudit<string>
	{
		var user = await _userManager.FindByNameAsync(request.Email);
		if (user == null)
		{
			throw new BusinessException(HttpStatusCode.NotFound, "Account is not exit");
		}

		var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
		if (!result.Succeeded)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "Password is incorrect");
		}

		_jwtTokenService.RevokeExpiredRefreshTokens(user);

		// Create JWT token
		var token = _jwtTokenService.GenerateJwtToken(user);

		var refreshToken = _jwtTokenService.GenerateRefreshTokenModel(request.RememberMe);
		user.RefreshTokens.Add(refreshToken);
		await _userManager.UpdateAsync(user);

		// Set token cookie 
		SetTokenCookie(token, refreshToken.Token, request.RememberMe);

		var userData = _mapper.Map<D>(user);
		userData.Roles = await GetRolesAsync(user);

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
		var user = await _userManager.GetUserAsync(claimsPrincipal);

		if (user == null)
		{
			throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");
		}

		var data = _mapper.Map<D>(user);
		data.Roles = await GetRolesAsync(user);

		return data;
	}

	public async Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest request)
	{
		var refreshToken = request.Cookies["refreshToken"];

		var refreshTokenModel = await _jwtTokenService.RefreshTokenAsync(refreshToken);
		var newToken = _jwtTokenService.GenerateJwtToken(refreshTokenModel.User!);

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

		var errors = identityResult.Errors.ToDictionary(e => e.Code, e => e.Description);

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
}