using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Timesheet.Server.Data;
using Timesheet.Server.Dto;
using Timesheet.Server.Interfaces.Services;
using Timesheet.Server.Requests;
using System.Linq.Dynamic.Core;
using Timesheet.Server.Wrapper;

namespace Timesheet.Server.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public UserService(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<UserDto>> GetAllAsync()
        {
            return await _context.Users.ProjectTo<UserDto>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public async Task<Paginated<UserDto>> SearchAsync(PagedRequest request)
        {
            var query = _context.Users.AsQueryable();

            // Filtering
            if (!string.IsNullOrWhiteSpace(request.SearchString))
            {
                if (request.SearchString != null)
                {
                    query = query.Where(u => u.FullName.Contains(request.SearchString) || (!string.IsNullOrEmpty(u.Email) && u.Email.Contains(request.SearchString)));
                }
            }

            // Sorting
            if (request.OrderBy?.Any() == true)
            {
                var ordering = string.Join(",", request.OrderBy);
                query.OrderBy(ordering); // require system.linq.dynamic.core
            }

            // Pagination
            query = query.Skip((request.PageNumber - 1) * request.PageSize).Take(request.PageSize);

            // Mapping to DTO & Return
            List<UserDto> users = await query.ProjectTo<UserDto>(_mapper.ConfigurationProvider).ToListAsync();

            return new Paginated<UserDto>(users, request.PageNumber, request.PageSize, await query.CountAsync());
        }

        public Task<UserDto> GetAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetCountAsync()
        {
            throw new NotImplementedException();
        }

        public Task<UserDto> CreateAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ResetPasswordAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<UserDto> UpdateAsync(string userId)
        {
            throw new NotImplementedException();
        }
    }
}