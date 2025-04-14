using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Approvals.Commands;
using WorkHub.Application.Features.Requests.Commands;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Server.Controllers.Requests
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