using MediatR;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Application.Features.Requests.Commands
{
	public class CancelRequestCommand<D, TCreateRequest> : IRequest<D> where D : class where TCreateRequest : CreateRequestDto
	{
		public required int Id { get; set; }
	}

	public class CancelRequestCommandHandler<D, TCreateRequest> : IRequestHandler<CancelRequestCommand<D, TCreateRequest>, D>
		where D : class
		where TCreateRequest : CreateRequestDto
	{
		private readonly IRequestService<TCreateRequest> _requestService;

		public CancelRequestCommandHandler(IRequestService<TCreateRequest> requestService)
		{
			_requestService = requestService;
		}

		public async Task<D> Handle(CancelRequestCommand<D, TCreateRequest> command, CancellationToken cancellationToken)
		{

			return await _requestService.CancelRequestAsync<D>(command.Id);
		}
	}
}