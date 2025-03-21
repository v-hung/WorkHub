using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Features.Teams.Queries;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.Features.Teams.Commands;
using WorkTimeTracker.Application.Requests;

namespace WorkTimeTracker.Server.Controllers.Organization
{
	[Route("api/teams")]
	public class TeamController : BaseApiController<TeamController>
	{
		[HttpGet("all")]
		public async Task<ActionResult<List<TeamDto>>> GetAll([FromQuery] List<int> ids)
		{
			var teams = await _mediator.Send(new GetAllTeamQuery { Ids = ids });

			return Ok(teams);
		}

		[HttpGet]
		public async Task<ActionResult<Paginated<TeamDto>>> Search([FromQuery] PagedRequest request)
		{
			var teams = await _mediator.Send(new SearchTeamQuery { Request = request });

			return Ok(teams);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<TeamFullDto>> GetById(int id)
		{
			var team = await _mediator.Send(new GetTeamByIdQuery(id));

			return Ok(team);
		}

		[HttpPost]
		public async Task<ActionResult<TeamDto>> Create(CreateTeamCommand request)
		{
			var team = await _mediator.Send(request);

			return Ok(team);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<TeamDto>> Update(int id, CreateTeamCommand request)
		{
			var team = await _mediator.Send(new UpdateTeamCommand { Id = id, Request = request });

			return Ok(team);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _mediator.Send(new DeleteTeamCommand { Id = id });

			return Ok();
		}

	}
}