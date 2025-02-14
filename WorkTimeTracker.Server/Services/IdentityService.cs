using System.Net;
using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Timesheet.Server.Dto;
using Timesheet.Server.Middlewares.Exceptions;
using Timesheet.Server.Interfaces.Services;
using Timesheet.Server.Models.Identity;
using Timesheet.Server.Requests.Identity;
using Timesheet.Server.Responses.Identity;

namespace Timesheet.Server.Services;

public class IdentityService(SignInManager<User> signInManager, UserManager<User> userManager, IJwtTokenService jwtTokenService, IMapper mapper, ILogger<IdentityService> logger, IHttpContextAccessor httpContextAccessor) : IIdentityService
{
    private readonly UserManager<User> _userManager = userManager;

    // private readonly RoleManager<Role> _roleManager;

    private readonly SignInManager<User> _signInManager = signInManager;

    private readonly IJwtTokenService _jwtTokenService = jwtTokenService;

    private readonly IMapper _mapper = mapper;

    private readonly ILogger<IdentityService> _logger = logger;

    private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
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

        var response = new LoginResponse
        {
            Token = token,
            RefreshToken = refreshToken.Token,
            User = _mapper.Map<UserDto>(user)
        };

        return response;
    }


    public async Task<UserDto> GetCurrentUserAsync(ClaimsPrincipal claimsPrincipal)
    {
        var user = await _userManager.GetUserAsync(claimsPrincipal);

        if (user == null)
        {
            throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");
        }

        return _mapper.Map<UserDto>(user);
    }

    public async Task<RefreshTokenResponse> RefreshTokenAsync(HttpRequest request)
    {
        var token = request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        var refreshToken = request.Cookies["refreshToken"];

        if (string.IsNullOrEmpty(token))
        {
            token = request.Cookies["token"];
        }

        if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(refreshToken))
        {
            throw new BusinessException(HttpStatusCode.BadRequest, "Invalid client request");
        }

        var principal = _jwtTokenService.GetPrincipalFromExpiredToken(token);
        var username = principal.Identity?.Name ?? "";

        var user = await _userManager.FindByNameAsync(username);

        if (user == null)
        {
            throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
        }

        var newToken = _jwtTokenService.GenerateJwtToken(user);
        var refreshTokenModel = _jwtTokenService.RefreshTokenAsync(user, refreshToken);

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

    // public async Task<IActionResult> Update([FromForm] UpdateUserRequest input)
    // {
    //     var user = await _userManager.GetUserAsync(User);

    //     if (user == null)
    //     {
    //         return Unauthorized(new { message = "Tài khoản không tồn tại" });
    //     }

    //     if (!string.IsNullOrEmpty(input.FullName))
    //     {
    //         user.FullName = input.FullName;
    //     }

    //     if (!string.IsNullOrEmpty(input.Phone))
    //     {
    //         user.PhoneNumber = input.Phone;
    //     }

    //     if (input.File != null)
    //     {
    //         FileInformation fileInfo = await _uploadFile.UploadSingle(input.File, "User");
    //         user.Image = fileInfo.Path;
    //     }

    //     var result = await _userManager.UpdateAsync(user);

    //     if (!result.Succeeded)
    //     {
    //         return BadRequest(new { message = "Không thể cập nhập thông tin tài khoản" });
    //     }

    //     if (!string.IsNullOrEmpty(input.CurrentPassword) && !string.IsNullOrEmpty(input.NewPassword))
    //     {
    //         var changePasswordResult = await _userManager.ChangePasswordAsync(user, input.CurrentPassword, input.NewPassword);

    //         if (!changePasswordResult.Succeeded)
    //         {
    //             return BadRequest(new { message = "Không thể cập nhập mật khẩu tin tài khoản" });
    //         }
    //     }

    //     return Ok(_mapper.Map<UserDto>(user));
    // }


    private void SetTokenCookie(string token, string refreshToken, bool rememberMe)
    {
        var tokenCookieOptions = _jwtTokenService.GenerateTokenCookieOptions(true);
        _httpContextAccessor.HttpContext?.Response.Cookies.Append("token", token, tokenCookieOptions);

        if (rememberMe)
        {
            var refreshCookieOptions = _jwtTokenService.GenerateTokenCookieOptions(true);
            _httpContextAccessor.HttpContext?.Response.Cookies.Append("refreshToken", refreshToken, refreshCookieOptions);
        }
    }
}