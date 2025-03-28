using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRequestService<TRequest> where TRequest : CreateRequestDto
	{
		Task<D> CreateRequestAsync<D>(TRequest request) where D : class;

		Task<D> CancelRequestAsync<D>(int requestId) where D : class;
	}
}