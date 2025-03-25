using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRequestService
	{
		Task<D> CreateRequestAsync<D>(Request request) where D : class;

		Task<D> CancelRequestAsync<D>(Guid requestId) where D : class;
	}
}