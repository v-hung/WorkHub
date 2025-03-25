using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public interface IRequestValidator<TRequest> where TRequest : CreateRequestDto
	{
		void Validate(TRequest request);
	}
}