using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Features.Approvals.Commands
{
	public class ApproveLeaveRequestCommand : IRequest<RequestCombinedDto>
	{
		public required int RequestId { get; set; }
	}

	public class ApproveLeaveRequestCommandHandler : IRequestHandler<ApproveLeaveRequestCommand, RequestCombinedDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalRequestService;

		public ApproveLeaveRequestCommandHandler(IRequestApprovalService<LeaveRequest> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<RequestCombinedDto> Handle(ApproveLeaveRequestCommand command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.ApproveRequestAsync<RequestCombinedDto>(command.RequestId);
		}
	}
}