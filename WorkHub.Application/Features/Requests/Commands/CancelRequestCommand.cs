using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Application.Features.Requests.Commands
{
	public class CancelRequestCommand : IRequest<RequestCombinedDto>
	{
		public required int Id { get; set; }
	}

	public class CancelRequestCommandHandler : IRequestHandler<CancelRequestCommand, RequestCombinedDto>
	{
		private readonly IRequestService<CreateRequestDto> _requestService;

		public CancelRequestCommandHandler(IRequestService<CreateRequestDto> requestService)
		{
			_requestService = requestService;
		}

		public async Task<RequestCombinedDto> Handle(CancelRequestCommand command, CancellationToken cancellationToken)
		{

			return await _requestService.CancelRequestAsync<RequestCombinedDto>(command.Id);
		}
	}
}