using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests.Identity;

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

		[HttpGet]
		public async Task<ActionResult<List<RoleDto>>> GetAll()
		{
			var data = await _roleService.GetAllAsync<RoleDto>();

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<RoleDto>> GetById(Guid id)
		{
			var data = await _roleService.GetAsync<RoleDto, Guid>(id);

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