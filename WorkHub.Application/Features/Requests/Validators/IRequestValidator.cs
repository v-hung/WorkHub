using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public interface IRequestValidator<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		void Validate(TCreateRequest request);
	}
}