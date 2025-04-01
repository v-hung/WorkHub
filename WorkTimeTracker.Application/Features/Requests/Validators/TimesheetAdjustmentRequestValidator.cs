using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Features.Requests.Validators
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