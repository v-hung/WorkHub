using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IApprovalService
	{
		Task<D> CreateRequestAsync<D>(Request request) where D : class;
	}
}