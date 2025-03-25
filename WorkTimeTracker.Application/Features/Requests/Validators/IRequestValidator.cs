using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Features.Requests.Validators
{
	public interface IRequestValidator<TRequest> where TRequest : Request
	{
		void Validate(TRequest request);
	}
}