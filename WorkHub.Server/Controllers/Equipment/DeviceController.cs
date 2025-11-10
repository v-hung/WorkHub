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
	[Route("api/devices")]
	public class DeviceController : BaseApiController<DeviceController>
	{
		[HttpGet]
		[Authorize(Policy = Permissions.Devices.View)]
		public async Task<ActionResult<List<DeviceDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllDeviceQuery { Ids = ids });

			return Ok(data);
		}

		[HttpPost("search")]
		[Authorize(Policy = Permissions.Devices.View)]
		public async Task<ActionResult<Paginated<DeviceDto>>> Search(PagedRequest request)
		{
			var data = await _mediator.Send(new SearchDeviceQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		[Authorize(Policy = Permissions.Devices.View)]
		public async Task<ActionResult<DeviceDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetDeviceByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		[Authorize(Policy = Permissions.Devices.Create)]
		public async Task<ActionResult<DeviceDto>> Create(CreateDeviceCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		[Authorize(Policy = Permissions.Devices.Edit)]
		public async Task<ActionResult<DeviceDto>> Update(int id, CreateDeviceCommand request)
		{
			var data = await _mediator.Send(new UpdateDeviceCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		[Authorize(Policy = Permissions.Devices.Delete)]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteDeviceCommand { Id = id });

			return Ok();
		}
	}
}