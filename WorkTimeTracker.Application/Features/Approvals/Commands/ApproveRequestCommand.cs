using AutoMapper;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Features.Approvals.Commands
{
	public class ApproveRequestCommand<D, TRequest> : IRequest<D> where D : class where TRequest : Request
	{
		public required int RequestId { get; set; }
	}

	public class ApproveRequestCommandHandler<D, TRequest> : IRequestHandler<ApproveRequestCommand<D, TRequest>, D> where D : class where TRequest : Request
	{
		private readonly IRequestApprovalService<TRequest> _approvalRequestService;

		public ApproveRequestCommandHandler(IRequestApprovalService<TRequest> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<D> Handle(ApproveRequestCommand<D, TRequest> command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.ApproveRequestAsync<D>(command.RequestId);
		}
	}
}