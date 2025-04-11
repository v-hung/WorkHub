using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/roles")]
	public class RoleController : BaseApiController<RoleController>
	{
		private readonly IRoleService _roleService;

		public RoleController(IRoleService roleService)
		{
			_roleService = roleService;
		}

		[HttpGet("all")]
		public async Task<ActionResult<List<RoleDto>>> GetAll([FromQuery] List<Guid>? ids = null)
		{
			ids ??= [];
			var data = await _roleService.GetAllAsync<RoleDto>(u => ids.Contains(u.Id));

			return Ok(data);
		}

		[HttpGet("all-by-names")]
		public async Task<ActionResult<List<RoleDto>>> GetAllByNames([FromQuery] List<string>? names = null)
		{
			names ??= [];
			var data = await _roleService.GetAllAsync<RoleDto>(u => u.Name != null && names.Contains(u.Name));

			return Ok(data);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<RoleDto>>> Search([FromQuery] PagedRequest request)
		{
			var users = await _roleService.SearchAsync<UserDto>(request);
			return Ok(users);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<RoleDto>> GetById(Guid id)
		{
			var data = await _roleService.GetAsync<RoleDto, Guid>(id);

			return Ok(data);
		}

		[HttpGet("{name}")]
		public async Task<ActionResult<RoleDto>> GetByName(string name)
		{
			var data = await _roleService.GetAsync<RoleDto>(v => v.Name == name);

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<RoleDto>> Create(RoleCreateUpdateRequest request)
		{
			var data = await _roleService.CreateAsync<RoleDto>(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<RoleDto>> Update(Guid id, RoleCreateUpdateRequest request)
		{
			var data = await _roleService.UpdateAsync<RoleDto>(id, request);

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(Guid id)
		{
			await _roleService.DeleteAsync(id);

			return Ok();
		}
	}
}