using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.Features.Timesheets.Commands;
using WorkTimeTracker.Application.Features.Timesheets.Queries;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/timesheets")]
	public class TimesheetController : BaseApiController<TimesheetController>
	{

		[HttpGet("today")]
		public async Task<IActionResult> GetTodayTimesheet()
		{
			var data = await _mediator.Send(new GetTodayTimesheetQuery());

			return Ok(data);
		}

		[HttpGet("monthly")]
		public async Task<IActionResult> GetMonthlyTimesheets(int month, int year)
		{
			var data = await _mediator.Send(new GetMonthlyTimesheetsQuery { Month = month, Year = year });

			return Ok(data);
		}

		[HttpPost("checkin")]
		public async Task<IActionResult> PerformCheckIn()
		{
			var data = await _mediator.Send(new CheckInCommand());

			return Ok(data);
		}

		[HttpPost("checkout")]
		public async Task<IActionResult> PerformCheckOut()
		{
			var data = await _mediator.Send(new CheckOutCommand());

			return Ok(data);
		}

	}
}