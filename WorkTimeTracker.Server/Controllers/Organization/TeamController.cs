using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Features.Teams.Queries;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Organization
{
	[Route("api/teams")]
	public class TeamController : BaseApiController<TeamController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<TeamDto>>> GetAll([FromQuery(Name = "request")] PagedRequest request)
		{
			var teams = await _mediator.Send(new GetAllTeamQuery(request));

			return Ok(teams);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<TeamDto>> GetById(int id)
		{
			var team = await _mediator.Send(new GetTeamByIdQuery(id));

			return Ok(team);
		}
	}
}