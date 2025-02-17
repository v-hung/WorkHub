using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Requests.Identity;
using WorkTimeTracker.Server.Wrapper;

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
	public async Task<ActionResult<Paginated<UserDto>>> GetAll([FromQuery(Name = "request")][Required()] PagedRequest request)
	{
		var users = await _userService.SearchAsync(request);
		return Ok(users);
	}

	[HttpPost]
	public async Task<ActionResult<UserDto>> Create(UserCreateUpdateRequest request)
	{
		var users = await _userService.CreateAsync<UserDto>(request);

		return Ok(users);
	}

	[HttpPost("{id}")]
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