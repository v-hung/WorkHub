using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Features.Projects.Commands;
using WorkTimeTracker.Application.Features.Projects.Queries;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Work
{
	[Route("api/projects")]
	public class ProjectController : BaseApiController<ProjectController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<ProjectDto>>> GetAll([FromQuery(Name = "request")] PagedRequest request)
		{
			var data = await _mediator.Send(new GetAllProjectQuery(request));

			return Ok(data);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<ProjectDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetProjectByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		public async Task<ActionResult<ProjectDto>> Create(CreateEditProjectCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<ProjectDto>> Update(CreateEditProjectCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteProjectCommand { Id = id });

			return Ok();
		}
	}
}