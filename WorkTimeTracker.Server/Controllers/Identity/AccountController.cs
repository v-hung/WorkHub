using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.Responses.Identity;

namespace WorkTimeTracker.Server.Controllers.Identity;

[Route("api/identity")]
public class AccountController : BaseApiController<AccountController>
{
	private readonly IIdentityService _identityService;

	public AccountController(IIdentityService identityService)
	{
		_identityService = identityService;
	}

	[HttpPost("login")]
	[ProducesResponseType<LoginResponse<UserDto>>(StatusCodes.Status200OK)]
	public async Task<IActionResult> Login([FromBody] LoginRequest input)
	{
		var user = await _identityService.LoginAsync<UserDto>(input);

		return Ok(user);
	}

	[HttpGet("current-user")]
	[Authorize]
	[ProducesResponseType<UserDto>(StatusCodes.Status200OK)]
	public async Task<IActionResult> GetCurrentUser()
	{
		var user = await _identityService.GetCurrentUserAsync<UserDto>(User);

		return Ok(user);
	}

	[HttpPost("refresh-token")]
	public async Task<ActionResult<RefreshTokenResponse>> RefreshToken()
	{
		var message = await _identityService.RefreshTokenAsync(Request);

		return Ok(message);
	}

	[HttpPost("logout")]
	public async Task<IActionResult> Logout()
	{
		var message = await _identityService.LogoutAsync(Request, User);

		return Ok(message);
	}

	[HttpPost("change-password")]
	public async Task<IActionResult> ChangePassword(ChangePasswordRequest request)
	{
		await Task.Delay(10000);

		return Ok();
	}

}