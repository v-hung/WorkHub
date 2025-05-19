using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Features.Requests.Validators;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Application.Features.Requests.Commands
{
	public class CreateLeaveRequestCommand : IRequest<RequestCombinedDto>
	{
		public required CreateLeaveRequestDto Request { get; set; }
	}

	public class CreateLeaveRequestCommandHandler : IRequestHandler<CreateLeaveRequestCommand, RequestCombinedDto>
	{
		private readonly IRequestService<CreateLeaveRequestDto> _requestService;
		private readonly IRequestValidator<CreateLeaveRequestDto> _validator;

		public CreateLeaveRequestCommandHandler(IRequestService<CreateLeaveRequestDto> requestService, IRequestValidator<CreateLeaveRequestDto> validator)
		{
			_requestService = requestService;
			_validator = validator;
		}

		public async Task<RequestCombinedDto> Handle(CreateLeaveRequestCommand command, CancellationToken cancellationToken)
		{
			var request = command.Request;

			_validator.Validate(request);

			var data = await _requestService.CreateRequestAsync<RequestCombinedDto>(request);

			return data;
		}
	}

}