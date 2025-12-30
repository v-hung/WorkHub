using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Equipment.Queries;
using WorkHub.Application.Features.Equipment.Commands;
using Microsoft.AspNetCore.Authorization;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/device-categories")]
	public class DeviceCategoryController : BaseApiController<DeviceCategoryController>
	{

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpGet]
		public async Task<ActionResult<List<DeviceCategoryDetailsDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllDeviceCategoryQuery { Ids = ids });

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpPost("search")]
		public async Task<ActionResult<Paginated<DeviceCategoryDetailsDto>>> Search(PagedRequest request)
		{
			var data = await _mediator.Send(new SearchDeviceCategoryQuery { Request = request });

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.View)]
		[HttpGet("{id}")]
		public async Task<ActionResult<DeviceCategoryDetailsDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetDeviceCategoryByIdQuery(id));

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.Create)]
		[HttpPost]
		public async Task<ActionResult<DeviceCategoryDetailsDto>> Create(CreateDeviceCategoryCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[Authorize(Policy = Permissions.Devices.Edit)]
		[HttpPut("{id}")]
		public async Task<ActionResult<DeviceCategoryDetailsDto>> Update(int id, CreateDeviceCategoryCommand request)
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