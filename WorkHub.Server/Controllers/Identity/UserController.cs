using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Identity;

[Route("api/users")]
public class UserController : BaseApiController<UserController>
{
	private readonly IUserService _userService;

	public UserController(IUserService userService)
	{
		_userService = userService;
	}

	[Authorize(Policy = Permissions.Users.View)]
	[HttpGet]
	public async Task<ActionResult<Paginated<UserDto>>> Search([FromQuery] PagedRequest request)
	{
		var users = await _userService.SearchAsync<UserDto>(request);
		return Ok(users);
	}

	[Authorize(Policy = Permissions.Users.View)]
	[HttpGet("all")]
	public async Task<ActionResult<List<UserDto>>> GetAll([FromQuery] List<Guid>? ids = null)
	{
		ids ??= [];
		var users = await _userService.GetAllAsync<UserDto>(u => ids.Contains(u.Id));
		return Ok(users);
	}

	[Authorize(Policy = Permissions.Users.View)]
	[HttpGet("{id}")]
	public async Task<ActionResult<UserFullDto>> GetById(Guid id)
	{
		var user = await _userService.GetWithRolesAsync<UserFullDto, Guid>(id);
		return Ok(user);
	}

	[Authorize(Policy = Permissions.Users.Create)]
	[HttpPost]
	public async Task<ActionResult<UserDto>> Create([FromBody] UserCreateUpdateRequest request)
	{
		var users = await _userService.CreateAsync<UserDto>(request);

		return Ok(users);
	}

	[Authorize(Policy = Permissions.Users.Edit)]
	[HttpPut("{id}")]
	public async Task<ActionResult<UserFullDto>> Update(Guid id, [FromBody] UserCreateUpdateRequest request)
	{
		var users = await _userService.UpdateAsync<UserFullDto>(id, request);

		return Ok(users);
	}

	[Authorize(Policy = Permissions.Users.Delete)]
	[HttpDelete("{id}")]
	public async Task<ActionResult> Delete(Guid id)
	{
		await _userService.DeleteAsync(id);

		return Ok();
	}
}