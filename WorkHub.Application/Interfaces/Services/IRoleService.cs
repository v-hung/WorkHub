using System.Linq.Expressions;
using WorkHub.Application.Requests;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IRoleService
	{
		Task<List<D>> GetAllAsync<D>(Expression<Func<Role, bool>>? filter = null);

		Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class, IEntity<Guid>;

		Task<D> GetAsync<D, DId>(DId roleId) where D : IEntity<DId> where DId : notnull;

		Task<D> GetAsync<D>(Expression<Func<Role, bool>>? filter = null) where D : class;

		Task<D> CreateAsync<D>(RoleCreateUpdateRequest request) where D : class;

		Task<D?> UpdateAsync<D>(Guid roleId, RoleCreateUpdateRequest request) where D : class;

		Task DeleteAsync(Guid roleId);
	}
}