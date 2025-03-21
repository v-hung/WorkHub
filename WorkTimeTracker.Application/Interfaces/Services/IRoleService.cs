using System.Linq.Expressions;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRoleService
	{
		Task<List<D>> GetAllAsync<D>(Expression<Func<Role, bool>>? filter = null);

		Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class;

		Task<D> GetAsync<D, DId>(DId roleId) where D : IEntity<DId> where DId : notnull;

		Task<D> CreateAsync<D>(RoleCreateUpdateRequest request) where D : class;

		Task<D?> UpdateAsync<D>(Guid roleId, RoleCreateUpdateRequest request) where D : class;

		Task DeleteAsync(Guid roleId);
	}
}