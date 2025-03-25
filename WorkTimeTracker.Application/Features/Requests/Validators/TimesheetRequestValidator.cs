using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public class TimesheetRequestValidator : IRequestValidator<TimesheetRequest>
	{
		public void Validate(TimesheetRequest request)
		{
			if (request.CheckIn >= request.CheckOut)
				throw new ValidationException("Giờ check-in phải nhỏ hơn giờ check-out.");
		}
	}
}