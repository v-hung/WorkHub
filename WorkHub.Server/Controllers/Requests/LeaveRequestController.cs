using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Approvals.Commands;
using WorkHub.Application.Features.Requests.Commands;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Server.Controllers.Requests
{
	public class LeaveRequestController : BaseRequestController<RequestCombinedDetailsDto, CreateLeaveRequestDto>
	{
		[HttpPost("leave")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDetailsDto>> CreateRequest(CreateLeaveRequestDto request)
		{
			var data = await _mediator.Send(new CreateLeaveRequestCommand { Request = request });

			return Ok(data);
		}

		[HttpPost("{id}/leave-cancel")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDetailsDto>> CancelRequest(int id)
		{
			var data = await _mediator.Send(new CancelRequestCommand { Id = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-approval")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDetailsDto>> ApprovalRequest(int id)
		{
			var data = await _mediator.Send(new ApproveLeaveRequestCommand { RequestId = id });

			return Ok(data);
		}

		[HttpPost("{id}/leave-reject")]
		[Authorize]
		public override async Task<ActionResult<RequestCombinedDetailsDto>> RejectRequest(int id)
		{
			var data = await _mediator.Send(new RejectRequestCommand { RequestId = id });

			return Ok(data);
		}
	}
}