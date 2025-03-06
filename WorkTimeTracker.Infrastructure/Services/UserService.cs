using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Application.DTOs.Identity;
using System.Linq.Dynamic.Core;
using System.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Infrastructure.Data;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Infrastructure.Exceptions;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Domain.Entities.Organization;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Infrastructure.Services
{
	public class UserService : IUserService
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<User> _userManager;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<UserService> _localizer;
		private readonly IIdentityService _identityService;

		public UserService(ApplicationDbContext context, IMapper mapper, UserManager<User> userManager, IStringLocalizer<UserService> localizer, IIdentityService identityService)
		{
			_context = context;
			_mapper = mapper;
			_userManager = userManager;
			_localizer = localizer;
			_identityService = identityService;
		}

		public async Task<List<D>> GetAllAsync<D>()
		{
			return await _context.Users.AsQueryable().ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
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

			return new Paginated<D>(users, await query.CountAsync(), request.PageNumber, request.PageSize);
		}

		public async Task<D> GetAsync<D, DId>(DId userId) where D : IEntity<DId> where DId : notnull
		{
			return await _context.Users.AsNoTracking()
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync(u => u.Id.Equals(userId)) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["User is not found"]);
		}

		public async Task<D> GetWithRolesAsync<D, DId>(DId userId) where D : IEntity<DId>, IRoleAudit<string> where DId : notnull
		{
			var user = await GetAsync<D, DId>(userId);

			user.Roles = await _identityService.GetRolesAsync(userId.ToString()!);

			return user;
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
			var user = await _context.Users.FindAsync(userId) ?? throw new BusinessException(HttpStatusCode.NotFound, "User id not found");

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