using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Features.Requests.Validators;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Application.Features.Requests.Commands
{
	public class CreateTimesheetAdjustmentRequestCommand : IRequest<RequestCombinedDto>
	{
		public required CreateTimesheetAdjustmentRequestDto Request { get; set; }
	}

	public class CreateTimesheetAdjustmentRequestCommandHandler : IRequestHandler<CreateTimesheetAdjustmentRequestCommand, RequestCombinedDto>
	{
		private readonly IRequestService<CreateTimesheetAdjustmentRequestDto> _requestService;
		private readonly IRequestValidator<CreateTimesheetAdjustmentRequestDto> _validator;

		public CreateTimesheetAdjustmentRequestCommandHandler(IRequestService<CreateTimesheetAdjustmentRequestDto> requestService, IRequestValidator<CreateTimesheetAdjustmentRequestDto> validator)
		{
			_requestService = requestService;
			_validator = validator;
		}

		public async Task<RequestCombinedDto> Handle(CreateTimesheetAdjustmentRequestCommand command, CancellationToken cancellationToken)
		{
			var request = command.Request;

			_validator.Validate(request);

			var data = await _requestService.CreateRequestAsync<RequestCombinedDto>(request);

			return data;
		}
	}
}