using Timesheet.Server.Dto;
using Timesheet.Server.Requests;
using Timesheet.Server.Wrapper;

namespace Timesheet.Server.Interfaces.Services
{
    public interface IUserService
    {
        Task<List<UserDto>> GetAllAsync();

        Task<Paginated<UserDto>> SearchAsync(PagedRequest request);

        Task<int> GetCountAsync();

        Task<UserDto> GetAsync(string userId);

        Task<UserDto> CreateAsync();

        Task<UserDto> UpdateAsync(string userId);

        Task<bool> DeleteAsync(string userId);

        Task<bool> ResetPasswordAsync(string userId);
    }
}