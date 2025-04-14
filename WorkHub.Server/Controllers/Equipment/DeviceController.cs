using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Devices.Queries;
using WorkHub.Application.Features.Devices.Commands;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/devices")]
	public class DeviceController : BaseApiController<DeviceController>
	{
		[HttpGet("all")]
		public async Task<ActionResult<List<DeviceDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllDeviceQuery { Ids = ids });

			return Ok(data);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<DeviceDto>>> Search([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new SearchDeviceQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<DeviceDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetDeviceByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<DeviceDto>> Create(CreateDeviceCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<DeviceDto>> Update(int id, CreateDeviceCommand request)
		{
			var data = await _mediator.Send(new UpdateDeviceCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteDeviceCommand { Id = id });

			return Ok();
		}
	}
}