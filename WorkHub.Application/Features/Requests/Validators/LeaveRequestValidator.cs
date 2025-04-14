using System.ComponentModel.DataAnnotations;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public class LeaveRequestValidator : IRequestValidator<CreateLeaveRequestDto>
	{
		public void Validate(CreateLeaveRequestDto request)
		{
			if (request.BreakStartDate > request.BreakEndDate)
			{
				throw new ValidationException("The starting date is not bigger than the end..");
			}
		}
	}
}