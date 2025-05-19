using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Features.Approvals.Commands
{
	public class ApproveTimesheetAdjustmentRequestCommand : IRequest<RequestCombinedDto>
	{
		public required int RequestId { get; set; }
	}

	public class ApproveTimesheetAdjustmentRequestCommandHandler : IRequestHandler<ApproveTimesheetAdjustmentRequestCommand, RequestCombinedDto>
	{
		private readonly IRequestApprovalService<TimesheetAdjustmentRequest> _approvalRequestService;

		public ApproveTimesheetAdjustmentRequestCommandHandler(IRequestApprovalService<TimesheetAdjustmentRequest> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<RequestCombinedDto> Handle(ApproveTimesheetAdjustmentRequestCommand command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.ApproveRequestAsync<RequestCombinedDto>(command.RequestId);
		}
	}

}