using System.Linq.Expressions;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Application.Interfaces.Services
{
    public interface IRepositoryService<T, TId> where T : class, IEntity<TId>
    {
        Task<Paginated<D>> SearchAsync<D>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class;

        Task<D> GetAsync<D, DId>(TId userId) where D : IEntity<DId> where DId : notnull;

        Task<D> CreateOrUpdateAsync<D, DId>(TId id, object request, List<Func<T, Task>>? updateRelations = null) where D : class, IEntity<DId>;

        Task UpdateRelatedEntitiesAsync<D, DId>(T entity, Expression<Func<T, ICollection<D>>> navigationProperty, IList<DId>? relatedEntityIds, TId id) where D : class, IEntity<DId>;
        Task DeleteAsync(TId id);
    }
}