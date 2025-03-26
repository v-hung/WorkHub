using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Infrastructure.Services.Requests
{
	public abstract class RequestService<TRequest> : IRequestService<TRequest> where TRequest : CreateRequestDto
	{
		public Task<D> CancelRequestAsync<D>(Guid requestId) where D : class
		{
			throw new NotImplementedException();
		}

		public Task<D> CreateRequestAsync<D>(TRequest request) where D : class
		{
			throw new NotImplementedException();
		}
	}
}