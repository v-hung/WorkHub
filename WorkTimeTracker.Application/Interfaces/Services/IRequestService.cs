using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRequestService<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		Task<D> CreateRequestAsync<D>(TCreateRequest request) where D : class;

		Task<D> CancelRequestAsync<D>(int requestId) where D : class;
	}
}