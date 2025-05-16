using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public class LeaveRequestValidator : RequestValidator<CreateLeaveRequestDto>
	{
		public LeaveRequestValidator(IStringLocalizerFactory localizerFactory) : base(localizerFactory)
		{
		}

		public override void Validate(CreateLeaveRequestDto request)
		{
			if (request.BreakStartDate > request.BreakEndDate)
			{
				throw new ValidationException("The starting date is not bigger than the end..");
			}
		}
	}
}