using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Features.Teams.Queries;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.Features.Teams.Commands;

namespace WorkTimeTracker.Server.Controllers.Organization
{
	[Route("api/teams")]
	public class TeamController : BaseApiController<TeamController>
	{
		[HttpGet]
		public async Task<ActionResult<Paginated<TeamDto>>> GetAll([FromQuery] PagedRequest request)
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

		[HttpPost]
		public async Task<ActionResult<TeamDto>> Create(CreateEditTeamCommand request)
		{
			var team = await _mediator.Send(request);

			return Ok(team);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<TeamDto>> Update(CreateEditTeamCommand request)
		{
			var team = await _mediator.Send(request);

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