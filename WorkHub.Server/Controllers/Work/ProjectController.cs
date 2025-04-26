using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Features.Projects.Commands;
using WorkHub.Application.Features.Projects.Queries;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Controllers.Work
{
	[Route("api/projects")]
	public class ProjectController : BaseApiController<ProjectController>
	{
		[HttpGet("all")]
		[Authorize(Policy = Permissions.Projects.View)]
		public async Task<ActionResult<List<ProjectDto>>> GetAll([FromQuery] List<int> ids)
		{
			var data = await _mediator.Send(new GetAllProjectQuery { Ids = ids });

			return Ok(data);
		}

		[HttpGet]
		[Authorize(Policy = Permissions.Projects.View)]
		public async Task<ActionResult<Paginated<ProjectDto>>> Search([FromQuery] PagedRequest request)
		{
			var data = await _mediator.Send(new SearchProjectQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("{id}")]
		[Authorize(Policy = Permissions.Projects.View)]
		public async Task<ActionResult<ProjectDto>> GetById(int id)
		{
			var data = await _mediator.Send(new GetProjectByIdQuery(id));

			return Ok(data);
		}

		[HttpPost]
		[Authorize(Policy = Permissions.Projects.Create)]
		public async Task<ActionResult<ProjectDto>> Create(CreateProjectCommand request)
		{
			var data = await _mediator.Send(request);

			return Ok(data);
		}

		[HttpPut("{id}")]
		[Authorize(Policy = Permissions.Projects.Edit)]
		public async Task<ActionResult<ProjectDto>> Update(int id, CreateProjectCommand request)
		{
			var data = await _mediator.Send(new UpdateProjectCommand { Id = id, Request = request });

			return Ok(data);
		}

		[HttpDelete("{id}")]
		[Authorize(Policy = Permissions.Projects.Delete)]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteProjectCommand { Id = id });

			return Ok();
		}
	}
}