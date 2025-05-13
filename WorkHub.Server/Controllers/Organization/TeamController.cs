using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Features.Teams.Queries;
using WorkHub.Application.Wrapper;
using WorkHub.Application.Features.Teams.Commands;
using WorkHub.Application.Requests;
using WorkHub.Domain.Constants.Permission;
using Microsoft.AspNetCore.Authorization;

namespace WorkHub.Server.Controllers.Organization
{
	[Route("api/teams")]
	public class TeamController : BaseApiController<TeamController>
	{

		[Authorize(Policy = Permissions.Teams.View)]
		[HttpGet]
		public async Task<ActionResult<List<TeamDto>>> GetAll([FromQuery] List<int> ids)
		{
			var teams = await _mediator.Send(new GetAllTeamQuery { Ids = ids });

			return Ok(teams);
		}

		[Authorize(Policy = Permissions.Teams.View)]
		[HttpPost("search")]
		public async Task<ActionResult<Paginated<TeamDto>>> Search(PagedRequest request)
		{
			var teams = await _mediator.Send(new SearchTeamQuery { Request = request });

			return Ok(teams);
		}

		[Authorize(Policy = Permissions.Teams.View)]
		[HttpGet("{id}")]
		public async Task<ActionResult<TeamFullDto>> GetById(int id)
		{
			var team = await _mediator.Send(new GetTeamByIdQuery(id));

			return Ok(team);
		}

		[Authorize(Policy = Permissions.Teams.Create)]
		[HttpPost]
		public async Task<ActionResult<TeamDto>> Create(CreateTeamCommand request)
		{
			var team = await _mediator.Send(request);

			return Ok(team);
		}

		[Authorize(Policy = Permissions.Teams.Edit)]
		[HttpPut("{id}")]
		public async Task<ActionResult<TeamDto>> Update(int id, CreateTeamCommand request)
		{
			var team = await _mediator.Send(new UpdateTeamCommand { Id = id, Request = request });

			return Ok(team);
		}

		[Authorize(Policy = Permissions.Teams.Delete)]
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteTeamCommand { Id = id });

			return Ok();
		}

	}
}