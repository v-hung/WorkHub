using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Wrapper;

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
			var data = await _roleService.SearchAsync<RoleDto>(request);
			return Ok(data);
		}

		[HttpGet("id/{id}")]
		public async Task<ActionResult<RoleFullDto>> GetById(Guid id)
		{
			var data = await _roleService.GetAsync<RoleFullDto, Guid>(id);

			return Ok(data);
		}

		[HttpGet("name/{name}")]
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