using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Approvals.Commands;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Server.Controllers.Requests
{

	public class TimesheetRequestController : BaseRequestController<TimesheetRequestDto, CreateTimesheetRequestDto>
	{
		[HttpPost("timesheet")]
		public override async Task<ActionResult<TimesheetRequestDto>> CreateRequest(CreateTimesheetRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<TimesheetRequestDto, CreateTimesheetRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-cancel")]
		public override async Task<ActionResult<TimesheetRequestDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand<TimesheetRequestDto, CreateTimesheetRequestDto> { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-approval")]
		public override async Task<ActionResult<TimesheetRequestDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveRequestCommand<TimesheetRequestDto, TimesheetRequest> { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-reject")]
		public override async Task<ActionResult<TimesheetRequestDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand<TimesheetRequestDto, TimesheetRequest> { RequestId = id });

			return Ok(data);
		}
	}
}