using System.ComponentModel.DataAnnotations;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public class TimesheetAdjustmentRequestValidator : IRequestValidator<CreateTimesheetAdjustmentRequestDto>
	{
		public void Validate(CreateTimesheetAdjustmentRequestDto request)
		{
			if (request.CheckIn >= request.CheckOut)
				throw new ValidationException("Check-in time must be less than check-out.");
		}
	}
}