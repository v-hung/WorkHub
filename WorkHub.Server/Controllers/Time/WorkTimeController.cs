using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Features.WorkTimes.Queries;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.Features.WorkTimes.Commands;
using WorkHub.Application.DTOs.Time;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/work-times")]
	public class WorkTimeController : BaseApiController<WorkTimeController>
	{
		[HttpGet("all")]
		public async Task<ActionResult<List<WorkTimeDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllWorkTimeQuery { Ids = ids });

			return Ok(data);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<WorkTimeDto>>> Search([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new SearchWorkTimeQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<WorkTimeDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetWorkTimeByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<WorkTimeDto>> Create(CreateWorkTimeCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<WorkTimeDto>> Update(int id, CreateWorkTimeCommand request)
		{
			var data = await _mediator.Send(new UpdateWorkTimeCommand { Id = id, Request = request });

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