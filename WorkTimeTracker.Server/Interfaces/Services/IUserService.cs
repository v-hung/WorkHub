using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Requests.Identity;
using WorkTimeTracker.Server.Wrapper;

namespace WorkTimeTracker.Server.Interfaces.Services
{
	public interface IUserService
	{
		Task<List<UserDto>> GetAllAsync();

		Task<Paginated<UserDto>> SearchAsync(PagedRequest request);

		Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class;

		Task<int> GetCountAsync();

		Task<D> GetAsync<D, TId>(TId userId) where D : IEntity<TId> where TId : notnull;

		Task<D> CreateAsync<D>(UserCreateUpdateRequest request) where D : class;

		Task<D?> UpdateAsync<D>(Guid userId, UserCreateUpdateRequest request) where D : class;

		Task DeleteAsync(Guid userId);
	}
}