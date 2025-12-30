using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Features.Approvals.Commands
{
	public class ApproveLeaveRequestCommand : IRequest<RequestCombinedDetailsDto>
	{
		public required int RequestId { get; set; }
	}

	public class ApproveLeaveRequestCommandHandler : IRequestHandler<ApproveLeaveRequestCommand, RequestCombinedDetailsDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalRequestService;

		public ApproveLeaveRequestCommandHandler(IRequestApprovalService<LeaveRequest> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<RequestCombinedDetailsDto> Handle(ApproveLeaveRequestCommand command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.ApproveRequestAsync<RequestCombinedDetailsDto>(command.RequestId);
		}
	}
}