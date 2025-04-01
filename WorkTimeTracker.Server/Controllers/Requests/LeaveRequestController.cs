using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Approvals.Commands;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Server.Controllers.Requests
{
	public class LeaveRequestController : BaseRequestController<RequestCombinedDto, CreateLeaveRequestDto>
	{
		[HttpPost("leave")]
		public override async Task<ActionResult<RequestCombinedDto>> CreateRequest(CreateLeaveRequestDto request)
		{
			var data = await _mediator.Send(new CreateRequestCommand<RequestCombinedDto, CreateLeaveRequestDto> { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/leave-cancel")]
		public override async Task<ActionResult<RequestCombinedDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand<RequestCombinedDto, CreateLeaveRequestDto> { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-approval")]
		public override async Task<ActionResult<RequestCombinedDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveRequestCommand<RequestCombinedDto, LeaveRequest> { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-reject")]
		public override async Task<ActionResult<RequestCombinedDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand<RequestCombinedDto, LeaveRequest> { RequestId = id });

			return Ok(data);
		}
	}
}