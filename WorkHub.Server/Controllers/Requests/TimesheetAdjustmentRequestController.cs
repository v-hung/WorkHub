using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Approvals.Commands;
using WorkHub.Application.Features.Requests.Commands;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Server.Controllers.Requests
{

	public class TimesheetAdjustmentRequestController : BaseRequestController<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>
	{
		[HttpPost("timesheet-adjustment")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDto>> CreateRequest(CreateTimesheetAdjustmentRequestDto request)
		{
			var data = await _mediator.Send(new CreateTimesheetAdjustmentRequestCommand { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-cancel")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-approval")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveTimesheetAdjustmentRequestCommand { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/timesheet-adjustment-reject")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand { RequestId = id });

			return Ok(data);
		}
	}
}