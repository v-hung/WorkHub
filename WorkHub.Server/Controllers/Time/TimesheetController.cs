using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Features.Timesheets.Commands;
using WorkHub.Application.Features.Timesheets.Queries;
using WorkHub.Application.Responses.Time;

namespace WorkHub.Server.Controllers.Time
{
	[Route("api/timesheets")]
	public class TimesheetController : BaseApiController<TimesheetController>
	{

		[HttpGet("today")]
		[Authorize]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>?>> GetTodayTimesheet()
		{
			var data = await _mediator.Send(new GetTodayTimesheetQuery());

			return Ok(data);
		}

		[HttpGet("monthly")]
		[Authorize]
		public async Task<ActionResult<List<TimesheetDto>>> GetCurrentUserMonthlyTimesheets(int month, int year)
		{
			var data = await _mediator.Send(new GetCurrentUserMonthlyTimesheetsQuery { Month = month, Year = year });

			return Ok(data);
		}

		[HttpGet("monthly/all")]
		[Authorize(Policy = "Permissions.Timesheets.View")]
		public async Task<ActionResult<List<TimesheetFullDto>>> GetMonthlyTimesheets(int month, int year)
		{
			var data = await _mediator.Send(new GetMonthlyTimesheetsQuery { Month = month, Year = year });

			return Ok(data);
		}

		[HttpPost("checkin")]
		[Authorize]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>>> CheckIn()
		{
			var data = await _mediator.Send(new CheckInCommand());

			return Ok(data);
		}

		[HttpPost("checkout")]
		[Authorize]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>>> CheckOut()
		{
			var data = await _mediator.Send(new CheckOutCommand());

			return Ok(data);
		}

	}
}