using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRequestService
	{
		Task<D> CreateRequestAsync<D>(CreateRequestDto request) where D : class;

		Task<D> CancelRequestAsync<D>(Guid requestId) where D : class;
	}
}