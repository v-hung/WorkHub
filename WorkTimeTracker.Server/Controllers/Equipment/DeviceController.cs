using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Features.Devices.Queries;
using WorkTimeTracker.Application.Features.Devices.Commands;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/devices")]
	public class DeviceController : BaseApiController<DeviceController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<DeviceMinimalDto>>> GetAll([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new GetAllDeviceQuery(request));

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