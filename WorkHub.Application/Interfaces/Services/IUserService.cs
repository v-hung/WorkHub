using WorkHub.Domain.Entities.Audit;
using WorkHub.Application.Requests;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.Wrapper;
using System.Linq.Expressions;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IUserService
	{
		Task<List<D>> GetAllAsync<D>(Expression<Func<User, bool>>? filter = null);

		Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class;

		Task<int> GetCountAsync();

		Task<D> GetAsync<D, DId>(DId userId) where D : IEntity<DId> where DId : notnull;

		Task<D> GetWithRolesAsync<D, DId>(DId userId) where D : IEntity<DId>, IRoleAudit<string> where DId : notnull;

		Task<D> CreateAsync<D>(UserCreateUpdateRequest request) where D : class;

		Task<D?> UpdateAsync<D>(Guid userId, UserCreateUpdateRequest request) where D : class;

		Task DeleteAsync(Guid userId);

		Task GenerateAvatarForUser(User user);
	}
}