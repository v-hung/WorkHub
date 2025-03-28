using MediatR;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Requests.Commands
{
	public class CancelRequestCommand<D, TRequest> : IRequest<D> where D : class where TRequest : CreateRequestDto
	{
		public required int Id { get; set; }
	}

	public class CancelRequestCommandHandler<D, TRequest> : IRequestHandler<CancelRequestCommand<D, TRequest>, D>
		where D : class
		where TRequest : CreateRequestDto
	{
		private readonly IRequestService<TRequest> _requestService;

		public CancelRequestCommandHandler(IRequestService<TRequest> requestService)
		{
			_requestService = requestService;
		}

		public async Task<D> Handle(CancelRequestCommand<D, TRequest> command, CancellationToken cancellationToken)
		{

			return await _requestService.CancelRequestAsync<D>(command.Id);
		}
	}
}