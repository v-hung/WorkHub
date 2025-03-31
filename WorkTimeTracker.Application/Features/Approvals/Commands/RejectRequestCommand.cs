using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Features.Approvals.Commands
{
	public class RejectRequestCommand<D, TRequest> : IRequest<D> where D : class where TRequest : Request
	{
		public required int RequestId { get; set; }
	}

	public class RejectRequestCommandHandler<D, TRequest> : IRequestHandler<RejectRequestCommand<D, TRequest>, D> where D : class where TRequest : Request
	{
		private readonly IRequestApprovalService<TRequest> _approvalRequestService;

		public RejectRequestCommandHandler(IRequestApprovalService<TRequest> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<D> Handle(RejectRequestCommand<D, TRequest> command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.RejectRequestAsync<D>(command.RequestId);
		}
	}
}