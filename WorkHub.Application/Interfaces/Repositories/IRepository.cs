using System.Linq.Expressions;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;

namespace WorkHub.Application.Interfaces.Repositories
{
	public interface IRepository<T, TId> where T : class, IEntity<TId>
	{

		Task<List<D>> GetAllAsync<D>(Expression<Func<T, bool>>? filter = null) where D : class;

		Task<int> CountAsync(Expression<Func<T, bool>>? filter = null);

		Task<Paginated<D>> SearchAsync<D, DId>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class, IEntity<DId>;

		Task<CursorPaginated<D>> CursorSearchAsync<D>(CursorPagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class, IEntity<int>;

		Task<D> GetAsync<D>(Expression<Func<T, bool>> filter, bool asNoTracking = true) where D : class;

		Task<D> GetByIdAsync<D, DId>(TId id, bool asNoTracking = true) where D : IEntity<DId> where DId : notnull;

		Task<T> CreateAsync(object request);

		Task<T> UpdateAsync(TId id, object request);

		Task DeleteAsync(TId id);

		// heper methods for entity operations

		Task<TResult> AddAsync<TResult>(TResult entity) where TResult : class;

		Task<TResult> GetEntityByIdAsync<TResult, TResultId>(TResultId id, bool asNoTracking = false) where TResult : class, IEntity<TResultId>;

		Task<List<TResult>> GetEntityByIdsAsync<TResult, TResultId>(List<TResultId> ids, bool asNoTracking = false) where TResult : class, IEntity<TResultId>;

		Task LoadCollectionAsync<TResult, TResultTProperty>(TResult entity, Expression<Func<TResult, IEnumerable<TResultTProperty>>> navigationProperty) where TResultTProperty : class where TResult : class;

	}
}