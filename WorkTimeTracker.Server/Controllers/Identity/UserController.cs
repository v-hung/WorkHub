using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Identity;

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
	public async Task<ActionResult<Paginated<UserDto>>> Search([FromQuery] PagedRequest request)
	{
		var users = await _userService.SearchAsync<UserDto>(request);
		return Ok(users);
	}

	[HttpGet("all")]
	public async Task<ActionResult<List<UserDto>>> GetAll([FromQuery] List<Guid>? ids = null)
	{
		ids ??= [];
		var users = await _userService.GetAllAsync<UserDto>(u => ids.Contains(u.Id));
		return Ok(users);
	}

	[HttpGet("{id}")]
	public async Task<ActionResult<UserFullDto>> GetById(Guid id)
	{
		var user = await _userService.GetWithRolesAsync<UserFullDto, Guid>(id);
		return Ok(user);
	}

	[HttpPost]
	public async Task<ActionResult<UserDto>> Create([FromBody] UserCreateUpdateRequest request)
	{
		var users = await _userService.CreateAsync<UserDto>(request);

		return Ok(users);
	}

	[HttpPut("{id}")]
	public async Task<ActionResult<UserDto>> Update(Guid id, UserCreateUpdateRequest request)
	{
		var users = await _userService.UpdateAsync<UserDto>(id, request);

		return Ok(users);
	}

	[HttpDelete("{id}")]
	public async Task<ActionResult> Delete(Guid id)
	{
		await _userService.DeleteAsync(id);

		return Ok();
	}
}