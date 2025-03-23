using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Features.Timesheets.Commands;
using WorkTimeTracker.Application.Features.Timesheets.Queries;
using WorkTimeTracker.Application.Responses.Time;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/timesheets")]
	public class TimesheetController : BaseApiController<TimesheetController>
	{

		[HttpGet("today")]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>?>> GetTodayTimesheet()
		{
			var data = await _mediator.Send(new GetTodayTimesheetQuery());

			return Ok(data);
		}

		[HttpGet("monthly")]
		public async Task<ActionResult<List<TimesheetDto>>> GetCurrentUserMonthlyTimesheets(int month, int year)
		{
			var data = await _mediator.Send(new GetCurrentUserMonthlyTimesheetsQuery { Month = month, Year = year });

			return Ok(data);
		}

		[HttpGet("monthly/all")]
		public async Task<ActionResult<List<TimesheetFullDto>>> GetMonthlyTimesheets(int month, int year)
		{
			var data = await _mediator.Send(new GetMonthlyTimesheetsQuery { Month = month, Year = year });

			return Ok(data);
		}

		[HttpPost("checkin")]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>>> CheckIn()
		{
			var data = await _mediator.Send(new CheckInCommand());

			return Ok(data);
		}

		[HttpPost("checkout")]
		public async Task<ActionResult<TimesheetResponse<TimesheetDto>>> CheckOut()
		{
			var data = await _mediator.Send(new CheckOutCommand());

			return Ok(data);
		}

	}
}