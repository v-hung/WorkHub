using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Approvals.Commands
{
	public class RejectRequestCommand<D> : IRequest<D>
	{
		public required string RequestId { get; set; }
	}

	public class RejectRequestCommandHandler<D> : IRequestHandler<RejectRequestCommand<D>, D> where D : class
	{
		private readonly IApprovalService _approvalService;

		public RejectRequestCommandHandler(IApprovalService approvalService)
		{
			_approvalService = approvalService;
		}

		public async Task<D> Handle(RejectRequestCommand<D> command, CancellationToken cancellationToken)
		{
			return await _approvalService.RejectRequestAsync<D>(command.RequestId);
		}
	}
}