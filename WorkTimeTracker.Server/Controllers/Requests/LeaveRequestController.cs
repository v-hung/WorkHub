using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Approvals.Commands;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Server.Controllers.Requests
{
	public class LeaveRequestController : BaseRequestController<LeaveRequestDto, CreateLeaveRequestDto>
	{
		[HttpPost("leave")]
		public override async Task<ActionResult<LeaveRequestDto>> CreateRequest(CreateLeaveRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<LeaveRequestDto, CreateLeaveRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/leave-cancel")]
		public override async Task<ActionResult<LeaveRequestDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand<LeaveRequestDto, CreateLeaveRequestDto> { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-approval")]
		public override async Task<ActionResult<LeaveRequestDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveRequestCommand<LeaveRequestDto, LeaveRequest> { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-reject")]
		public override async Task<ActionResult<LeaveRequestDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand<LeaveRequestDto, LeaveRequest> { RequestId = id });

			return Ok(data);
		}
	}
}