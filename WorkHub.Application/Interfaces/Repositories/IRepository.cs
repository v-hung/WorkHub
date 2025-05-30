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

		Task<D> CreateAsync<D>(object request, List<Func<T, Task>>? updateRelations = null) where D : class;

		Task<D> UpdateAsync<D, DId>(TId id, object request, List<Func<T, Task>>? updateRelations = null) where D : class, IEntity<DId>;

		Task UpdateRelatedEntitiesAsync<D, DId>(T entity, Expression<Func<T, ICollection<D>>> navigationProperty, IList<DId> relatedEntityIds, TId? id = default) where D : class, IEntity<DId>;

		Task DeleteAsync(TId id);

	}
}