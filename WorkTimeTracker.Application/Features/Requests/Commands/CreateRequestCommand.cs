using MediatR;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Features.Requests.Validators;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Requests.Commands
{
	public class CreateRequestCommand<D, TCreateRequest> : IRequest<D> where D : class where TCreateRequest : CreateRequestDto
	{
		public required TCreateRequest Request { get; set; }
	}

	public class CreateRequestCommandHandler<D, TCreateRequest> : IRequestHandler<CreateRequestCommand<D, TCreateRequest>, D>
		where D : class
		where TCreateRequest : CreateRequestDto
	{
		private readonly IRequestService<TCreateRequest> _requestService;
		private readonly IRequestValidator<TCreateRequest> _validator;

		public CreateRequestCommandHandler(IRequestService<TCreateRequest> requestService, IRequestValidator<TCreateRequest> validator)
		{
			_requestService = requestService;
			_validator = validator;
		}

		public async Task<D> Handle(CreateRequestCommand<D, TCreateRequest> command, CancellationToken cancellationToken)
		{
			var request = command.Request;

			_validator.Validate(request);

			var data = await _requestService.CreateRequestAsync<D>(request);

			return data;
		}
	}

}