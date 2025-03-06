using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IRoleService
	{
		Task<List<D>> GetAllAsync<D>();

		Task<D> GetAsync<D, DId>(DId roleId) where D : IEntity<DId> where DId : notnull;

		Task<D> CreateAsync<D>(RoleCreateUpdateRequest request) where D : class;

		Task<D?> UpdateAsync<D>(Guid roleId, RoleCreateUpdateRequest request) where D : class;

		Task DeleteAsync(Guid roleId);
	}
}