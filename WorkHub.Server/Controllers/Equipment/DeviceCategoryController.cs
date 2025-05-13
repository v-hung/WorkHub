using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Devices.Queries;
using WorkHub.Application.Features.Devices.Commands;
using Microsoft.AspNetCore.Authorization;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/device-categories")]
	public class DeviceCategoryController : BaseApiController<DeviceCategoryController>
	{

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpGet]
		public async Task<ActionResult<List<DeviceCategoryDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllDeviceCategoryQuery { Ids = ids });

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpPost("search")]
		public async Task<ActionResult<Paginated<DeviceCategoryDto>>> Search(PagedRequest request)
		{
			var data = await _mediator.Send(new SearchDeviceCategoryQuery { Request = request });

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpGet("{id}")]
		public async Task<ActionResult<DeviceCategoryDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetDeviceCategoryByIdQuery(id));

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.Create)]
		[HttpPost]
		public async Task<ActionResult<DeviceCategoryDto>> Create(CreateDeviceCategoryCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.Edit)]
		[HttpPut("{id}")]
		public async Task<ActionResult<DeviceCategoryDto>> Update(int id, CreateDeviceCategoryCommand request)
		{
			var data = await _mediator.Send(new UpdateDeviceCategoryCommand { Id = id, Request = request });

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.Delete)]
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteDeviceCategoryCommand { Id = id });

			return Ok();
		}
	}
}