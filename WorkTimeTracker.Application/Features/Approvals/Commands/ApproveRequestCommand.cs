using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Approvals.Commands
{
	public class ApproveRequestCommand<D> : IRequest<D>
	{
		public required string RequestId { get; set; }
	}

	public class ApproveRequestCommandHandler<D> : IRequestHandler<ApproveRequestCommand<D>, D> where D : class
	{
		private readonly IApprovalService _approvalService;

		public ApproveRequestCommandHandler(IApprovalService approvalService)
		{
			_approvalService = approvalService;
		}

		public async Task<D> Handle(ApproveRequestCommand<D> command, CancellationToken cancellationToken)
		{
			return await _approvalService.ApproveRequestAsync<D>(command.RequestId);
		}
	}
}