using System.Linq.Expressions;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Wrapper;

namespace WorkTimeTracker.Server.Interfaces.Services
{
	public interface IRepositoryService<T> where T : class
	{
		Task<Paginated<D>> SearchAsync<D>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class;

		Task<D> GetAsync<D, TId>(TId userId) where D : IEntity<TId> where TId : notnull;
	}
}