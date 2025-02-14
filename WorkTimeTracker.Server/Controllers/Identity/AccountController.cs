using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Timesheet.Server.Dto;
using Timesheet.Server.Interfaces.Services;
using Timesheet.Server.Requests.Identity;
using Timesheet.Server.Responses.Identity;

namespace Timesheet.Server.Controllers.Identity;

[Route("api/identity")]
public class AccountController : BaseApiController<AccountController>
{
    private readonly IIdentityService _identityService;

    public AccountController(IIdentityService identityService)
    {
        _identityService = identityService;
    }

    [HttpPost("login")]
    [ProducesResponseType<LoginResponse>(StatusCodes.Status200OK)]
    public async Task<IActionResult> Login([FromBody] LoginRequest input)
    {
        var user = await _identityService.LoginAsync(input);

        return Ok(user);
    }

    [HttpGet("current-user")]
    [Authorize]
    [ProducesResponseType<UserDto>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetCurrentUser()
    {
        var user = await _identityService.GetCurrentUserAsync(User);

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

}