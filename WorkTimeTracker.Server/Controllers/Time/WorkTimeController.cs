using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.Features.WorkTimes.Queries;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.Features.WorkTimes.Commands;
using WorkTimeTracker.Application.DTOs.Time;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/work-times")]
	public class WorkTimeController : BaseApiController<WorkTimeController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<WorkTimeDto>>> GetAll([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new GetAllWorkTimeQuery(request));

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<WorkTimeDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetWorkTimeByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<WorkTimeDto>> Create(CreateEditWorkTimeCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<WorkTimeDto>> Update(CreateEditWorkTimeCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteWorkTimeCommand { Id = id });

			return Ok();
		}
	}
}