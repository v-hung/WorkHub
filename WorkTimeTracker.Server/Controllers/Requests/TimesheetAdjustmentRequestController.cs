using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Approvals.Commands;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Server.Controllers.Requests
{

	public class TimesheetAdjustmentRequestController : BaseRequestController<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>
	{
		[HttpPost("timesheet")]
		public override async Task<ActionResult<RequestCombinedDto>> CreateRequest(CreateTimesheetAdjustmentRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-cancel")]
		public override async Task<ActionResult<RequestCombinedDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto> { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-approval")]
		public override async Task<ActionResult<RequestCombinedDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest> { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-reject")]
		public override async Task<ActionResult<RequestCombinedDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest> { RequestId = id });

			return Ok(data);
		}
	}
}