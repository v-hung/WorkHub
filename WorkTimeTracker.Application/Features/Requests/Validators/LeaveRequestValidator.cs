using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public class LeaveRequestValidator : IRequestValidator<LeaveRequest>
	{
		public void Validate(LeaveRequest request)
		{
			if (request.BreakStartDate > request.BreakEndDate)
			{
				throw new ValidationException("Ngày bắt đầu không được lớn hơn ngày kết thúc.");
			}
		}
	}
}