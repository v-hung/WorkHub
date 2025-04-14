using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Devices.Queries;
using WorkHub.Application.Features.Devices.Commands;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/device-categories")]
	public class DeviceCategoryController : BaseApiController<DeviceCategoryController>
	{
		[HttpGet("all")]
		public async Task<ActionResult<List<DeviceCategoryDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllDeviceCategoryQuery { Ids = ids });

			return Ok(data);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<DeviceCategoryDto>>> Search([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new SearchDeviceCategoryQuery { Request = request });

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