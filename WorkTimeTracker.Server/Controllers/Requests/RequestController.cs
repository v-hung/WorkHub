using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Server.Controllers.Requests
{
	[Route("api/requests")]
	public class RequestController : BaseApiController<RequestController>
	{

		[HttpPost("leave")]
		public async Task<ActionResult<List<LeaveRequestDto>>> CreateLeaveRequest(CreateLeaveRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<LeaveRequestDto, CreateLeaveRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("timesheet")]
		public async Task<ActionResult<List<TimesheetRequestDto>>> CreateTimesheetRequest(CreateTimesheetRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<TimesheetRequestDto, CreateTimesheetRequestDto> { Request = request });

			return Ok(data);
		}
	}
}