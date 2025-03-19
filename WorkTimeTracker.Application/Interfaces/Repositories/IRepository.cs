using System.Linq.Expressions;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface IRepository<T, TId> where T : class, IEntity<TId>
	{

		Task<IList<D>> GetAllAsync<D>(Expression<Func<T, bool>>? filter = null) where D : class;

		Task<Paginated<D>> SearchAsync<D>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class;

		Task<D> GetAsync<D>(Expression<Func<T, bool>> filter, bool asNoTracking = true) where D : class;

		Task<D> GetByIdAsync<D, DId>(TId id, bool asNoTracking = true) where D : IEntity<DId> where DId : notnull;

		Task<D> CreateAsync<D>(object request, List<Func<T, Task>>? updateRelations = null) where D : class;

		Task<D> UpdateAsync<D, DId>(TId id, object request, List<Func<T, Task>>? updateRelations = null) where D : class, IEntity<DId>;

		Task UpdateRelatedEntitiesAsync<D, DId>(T entity, Expression<Func<T, ICollection<D>>> navigationProperty, IList<DId> relatedEntityIds, TId? id = default) where D : class, IEntity<DId>;

		Task DeleteAsync(TId id);

	}
}