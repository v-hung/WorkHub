using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public interface IRequestValidator<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		void Validate(TCreateRequest request);
	}
}