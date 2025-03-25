using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public class TimesheetRequestValidator : IRequestValidator<CreateTimesheetRequestDto>
	{
		public void Validate(CreateTimesheetRequestDto request)
		{
			if (request.CheckIn >= request.CheckOut)
				throw new ValidationException("Check-in time must be less than check-out.");
		}
	}
}