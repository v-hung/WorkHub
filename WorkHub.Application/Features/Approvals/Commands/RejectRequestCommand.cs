using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Features.Approvals.Commands
{
	public class RejectRequestCommand : IRequest<RequestCombinedDetailsDto>
	{
		public required int RequestId { get; set; }
	}

	public class RejectRequestCommandHandler : IRequestHandler<RejectRequestCommand, RequestCombinedDetailsDto>
	{
		private readonly IRequestApprovalService<Request> _approvalRequestService;

		public RejectRequestCommandHandler(IRequestApprovalService<Request> approvalService)
		{
			_approvalRequestService = approvalService;
		}

		public async Task<RequestCombinedDetailsDto> Handle(RejectRequestCommand command, CancellationToken cancellationToken)
		{
			return await _approvalRequestService.RejectRequestAsync<RequestCombinedDetailsDto>(command.RequestId);
		}
	}
}