using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public class TimesheetAdjustmentRequestValidator : RequestValidator<CreateTimesheetAdjustmentRequestDto>
	{

		public TimesheetAdjustmentRequestValidator(IStringLocalizerFactory localizerFactory) : base(localizerFactory)
		{
		}

		public override void Validate(CreateTimesheetAdjustmentRequestDto request)
		{
			if (request.CheckIn >= request.CheckOut)
				throw new ValidationException("Check-in time must be less than check-out.");
		}
	}
}