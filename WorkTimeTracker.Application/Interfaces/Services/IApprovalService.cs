namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IApprovalService
	{
		Task<bool> CanApproveRequestAsync(string userId, string approverId);

		Task<D> ApproveRequestAsync<D>(string requestId) where D : class;

		Task<D> RejectRequestAsync<D>(string requestId) where D : class;
	}
}