using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Features.WorkSchedules.Queries;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Application.Features.WorkSchedules.Commands;
using WorkHub.Application.DTOs.Work;
using Microsoft.AspNetCore.Authorization;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Work
{
	[Route("api/work-schedule")]
	public class WorkScheduleController : BaseApiController<WorkScheduleController>
	{
		[HttpGet]
		[Authorize(Policy = Permissions.WorkSchedules.View)]
		public async Task<ActionResult<List<WorkScheduleDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllWorkScheduleQuery { Ids = ids });

			return Ok(data);
		}

		[HttpPost("search")]
		[Authorize(Policy = Permissions.WorkSchedules.View)]
		public async Task<ActionResult<Paginated<WorkScheduleDto>>> Search(PagedRequest request)
		{
			var data = await _mediator.Send(new SearchWorkScheduleQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		[Authorize(Policy = Permissions.WorkSchedules.View)]
		public async Task<ActionResult<WorkScheduleDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetWorkScheduleByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		[Authorize(Policy = Permissions.WorkSchedules.Create)]
		public async Task<ActionResult<WorkScheduleDto>> Create(CreateWorkScheduleCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		[Authorize(Policy = Permissions.WorkSchedules.Edit)]
		public async Task<ActionResult<WorkScheduleDto>> Update(int id, CreateWorkScheduleCommand request)
		{
			var data = await _mediator.Send(new UpdateWorkScheduleCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		[Authorize(Policy = Permissions.WorkSchedules.Delete)]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteWorkScheduleCommand { Id = id });

			return Ok();
		}
	}
}