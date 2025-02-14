using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Timesheet.Server.Constants.Permission;
using Timesheet.Server.Dto;
using Timesheet.Server.Interfaces.Services;
using Timesheet.Server.Requests;
using Timesheet.Server.Wrapper;

namespace Timesheet.Server.Controllers.Identity;

[Route("api/users")]
public class UserController : BaseApiController<UserController>
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    // [Authorize(Policy = Permissions.Users.View)]
    [HttpGet]
    [ProducesResponseType<Paginated<UserDto>>(StatusCodes.Status200OK)]
    public async Task<ActionResult<Paginated<UserDto>>> GetAll(PagedRequest request)
    {
        var users = await _userService.SearchAsync(request);
        return Ok(users);
    }
}
