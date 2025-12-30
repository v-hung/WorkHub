using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/roles")]
	public class RoleController : BaseApiController<RoleController>
	{
		private readonly IRoleService _roleService;

		public RoleController(IRoleService roleService)
		{
			_roleService = roleService;
		}

		[Authorize(Policy = Permissions.Roles.View)]
		[HttpGet]
		public async Task<ActionResult<List<RoleDetailsDto>>> GetAll([FromQuery] List<Guid>? ids = null)
		{
			ids ??= [];
			var data = await _roleService.GetAllAsync<RoleDetailsDto>(u => ids.Contains(u.Id));

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.View)]
		[HttpGet("all-by-names")]
		public async Task<ActionResult<List<RoleDetailsDto>>> GetAllByNames([FromQuery] List<string>? names = null)
		{
			names ??= [];
			var data = await _roleService.GetAllAsync<RoleDetailsDto>(u => u.Name != null && names.Contains(u.Name));

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.View)]
		[HttpPost("search")]
		public async Task<ActionResult<Paginated<RoleDetailsDto>>> Search(PagedRequest request)
		{
			var data = await _roleService.SearchAsync<RoleDetailsDto>(request);
			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.View)]
		[HttpGet("id/{id}")]
		public async Task<ActionResult<RoleFormDto>> GetById(Guid id)
		{
			var data = await _roleService.GetAsync<RoleFormDto, Guid>(id);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.View)]
		[HttpGet("name/{name}")]
		public async Task<ActionResult<RoleDetailsDto>> GetByName(string name)
		{
			var data = await _roleService.GetAsync<RoleDetailsDto>(v => v.Name == name);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.Create)]
		[HttpPost]
		public async Task<ActionResult<RoleDetailsDto>> Create(RoleCreateUpdateRequest request)
		{
			var data = await _roleService.CreateAsync<RoleDetailsDto>(request);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.Edit)]
		[HttpPut("{id}")]
		public async Task<ActionResult<RoleDetailsDto>> Update(Guid id, RoleCreateUpdateRequest request)
		{
			var data = await _roleService.UpdateAsync<RoleDetailsDto>(id, request);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Roles.Delete)]
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(Guid id)
		{
			await _roleService.DeleteAsync(id);

			return Ok();
		}
	}
}