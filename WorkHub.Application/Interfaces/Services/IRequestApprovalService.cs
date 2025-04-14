using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IRequestApprovalService<TRequest> where TRequest : Request
	{
		Task<bool> CanApproveRequestAsync(string userId, string approverId);

		Task<D> ApproveRequestAsync<D>(int requestId) where D : class;

		Task<D> RejectRequestAsync<D>(int requestId) where D : class;
	}
}