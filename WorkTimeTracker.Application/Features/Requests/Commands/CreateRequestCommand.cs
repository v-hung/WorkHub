using MediatR;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Features.Requests.Validators;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Requests.Commands
{
	public class CreateRequestCommand<D, TRequest> : IRequest<D> where D : class where TRequest : CreateRequestDto
	{
		public required TRequest Request { get; set; }
	}

	public class CreateRequestHandler<D, TRequest> : IRequestHandler<CreateRequestCommand<D, TRequest>, D>
		where D : class
		where TRequest : CreateRequestDto
	{
		private readonly IRequestService<TRequest> _requestService;
		private readonly IRequestValidator<TRequest> _validator;

		public CreateRequestHandler(IRequestService<TRequest> requestService, IRequestValidator<TRequest> validator)
		{
			_requestService = requestService;
			_validator = validator;
		}

		public async Task<D> Handle(CreateRequestCommand<D, TRequest> command, CancellationToken cancellationToken)
		{
			var request = command.Request;

			_validator.Validate(request);

			return await _requestService.CreateRequestAsync<D>(request);
		}
	}

}