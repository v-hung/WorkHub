using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Approvals.Commands;
using WorkHub.Application.Features.Requests.Commands;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Server.Controllers.Requests
{

	public class TimesheetAdjustmentRequestController : BaseRequestController<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>
	{
		[HttpPost("timesheet-adjustment")]
		public override async Task<ActionResult<RequestCombinedDto>> CreateRequest(CreateTimesheetAdjustmentRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-cancel")]
		public override async Task<ActionResult<RequestCombinedDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto> { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-approval")]
		public override async Task<ActionResult<RequestCombinedDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest> { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-reject")]
		public override async Task<ActionResult<RequestCombinedDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest> { RequestId = id });

			return Ok(data);
		}
	}
}