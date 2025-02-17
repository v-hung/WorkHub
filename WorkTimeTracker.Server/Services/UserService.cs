using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Server.Data;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Requests;
using System.Linq.Dynamic.Core;
using WorkTimeTracker.Server.Wrapper;
using WorkTimeTracker.Server.Requests.Identity;
using WorkTimeTracker.Server.Models.Identity;
using WorkTimeTracker.Server.Middlewares.Exceptions;
using System.Net;
using Microsoft.IdentityModel.Tokens;
using WorkTimeTracker.Server.Models.Organization;
using WorkTimeTracker.Server.Models.Work;
using Microsoft.AspNetCore.Identity;

namespace WorkTimeTracker.Server.Services
{
	public class UserService : IUserService
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<User> _userManager;
		private readonly IMapper _mapper;

		public UserService(ApplicationDbContext context, IMapper mapper, UserManager<User> userManager)
		{
			_context = context;
			_mapper = mapper;
			_userManager = userManager;
		}

		public async Task<List<UserDto>> GetAllAsync()
		{
			return await _context.Users.ProjectTo<UserDto>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<Paginated<UserDto>> SearchAsync(PagedRequest request)
		{
			return await SearchAsync<UserDto>(request);
		}

		public async Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class
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

			// Navigation
			query = query.Include(u => u.WorkTime).Include(u => u.Supervisor).Include(u => u.Team);

			// Pagination
			query = query.Skip((request.PageNumber - 1) * request.PageSize).Take(request.PageSize);

			// Mapping to DTO & Return
			List<D> users = await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();

			return new Paginated<D>(users, request.PageNumber, request.PageSize, await query.CountAsync());
		}

		public async Task<D> GetAsync<D>(Guid userId) where D : class
		{
			return await _context.Users.AsNoTracking()
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstAsync() ?? throw new BusinessException(HttpStatusCode.NoContent, "User is not found");
		}

		public async Task<int> GetCountAsync()
		{
			return await _context.Users.CountAsync();
		}

		public async Task<D> CreateAsync<D>(UserCreateUpdateRequest request) where D : class
		{
			var user = _mapper.Map<User>(request);

			await MapRequestToUser(request, user, null);

			await _context.Users.AddAsync(user);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(user);
		}

		public async Task<D?> UpdateAsync<D>(Guid userId, UserCreateUpdateRequest request) where D : class
		{
			var user = await _context.Users.FindAsync(userId);
			if (user == null) return null;

			_mapper.Map(request, user);

			await MapRequestToUser(request, user, user.Id);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(user);
		}

		public async Task DeleteAsync(Guid userId)
		{
			var user = await _context.Users.FindAsync(userId) ?? throw new BusinessException(HttpStatusCode.NotFound, "");
			_context.Users.Remove(user);
			await _context.SaveChangesAsync();
		}

		private async Task MapRequestToUser(UserCreateUpdateRequest request, User user, Guid? userUpdateId)
		{

			if (request.ManagerTeamIds != null && request.ManagerTeamIds.Any())
			{
				if (userUpdateId != null)
				{
					await _context.Entry(user).Collection(u => u.ManagerTeams).LoadAsync();
					user.ManagerTeams.Clear();
				}

				foreach (var teamId in request.ManagerTeamIds)
				{
					var team = new Team { Id = teamId, Name = "" };
					_context.Teams.Attach(team);
					user.ManagerTeams.Add(team);
				}
			}

			if (request.ManagerProjectIds != null && request.ManagerProjectIds.Any())
			{
				if (userUpdateId != null)
				{
					await _context.Entry(user).Collection(u => u.ManagerProjects).LoadAsync();
					user.ManagerProjects.Clear();
				}

				foreach (var teamId in request.ManagerProjectIds)
				{
					var item = new Project { Id = teamId, Name = "" };
					_context.Projects.Attach(item);
					user.ManagerProjects.Add(item);
				}
			}

			if (request.RoleNames != null && request.RoleNames.Any())
			{
				var currentRoles = await _userManager.GetRolesAsync(user);

				var removeResult = await _userManager.RemoveFromRolesAsync(user, currentRoles);

				if (!removeResult.Succeeded)
				{
					throw new BusinessException(HttpStatusCode.BadRequest, "Failed to remove existing roles.");
				}

				var addResult = await _userManager.AddToRolesAsync(user, request.RoleNames);
				if (!addResult.Succeeded)
				{
					throw new BusinessException(HttpStatusCode.BadRequest, "Failed to add new roles.");
				}
			}
		}

	}
}