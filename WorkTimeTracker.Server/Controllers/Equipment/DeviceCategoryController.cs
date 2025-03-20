using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Features.Devices.Queries;
using WorkTimeTracker.Application.Features.Devices.Commands;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/device-categories")]
	public class DeviceCategoryController : BaseApiController<DeviceCategoryController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<DeviceCategoryMinimalDto>>> GetAll([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new GetAllDeviceCategoryQuery(request));

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<DeviceCategoryDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetDeviceCategoryByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<DeviceCategoryDto>> Create(CreateDeviceCategoryCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<DeviceCategoryDto>> Update(int id, CreateDeviceCategoryCommand request)
		{
			var data = await _mediator.Send(new UpdateDeviceCategoryCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteDeviceCategoryCommand { Id = id });

			return Ok();
		}
	}
}