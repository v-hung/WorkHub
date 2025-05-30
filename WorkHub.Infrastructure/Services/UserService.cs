using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;
using System.Net;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Infrastructure.Data;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Application.Wrapper;
using WorkHub.Application.Requests;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Requests.Identity;
using WorkHub.Domain.Entities.Organization;
using WorkHub.Domain.Constants.Identity;
using System.Linq.Expressions;
using WorkHub.Application.Utils;
using WorkHub.Application.Interfaces.Repositories;

namespace WorkHub.Infrastructure.Services
{
	public class UserService : IUserService
	{
		private readonly ApplicationDbContext _context;
		private readonly UserManager<User> _userManager;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<UserService> _localizer;
		private readonly IIdentityService _identityService;
		private readonly IUploadFile _uploadFile;
		private readonly IRepository<User, Guid> _repository;

		public UserService(ApplicationDbContext context, IMapper mapper, UserManager<User> userManager, IStringLocalizer<UserService> localizer, IIdentityService identityService, IUploadFile uploadFile, IRepository<User, Guid> repository)
		{
			_context = context;
			_mapper = mapper;
			_userManager = userManager;
			_localizer = localizer;
			_identityService = identityService;
			_uploadFile = uploadFile;
			_repository = repository;
		}

		public async Task<List<D>> GetAllAsync<D>(Expression<Func<User, bool>>? filter = null)
		{
			var query = _context.Users.AsQueryable();
			if (filter != null)
			{
				query = query.Where(filter);
			}
			return await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class, IEntity<Guid>
		{
			return await _repository.SearchAsync<D, Guid>(request);
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

			user.LockoutEnabled = true;
			user.SecurityStamp = Guid.NewGuid().ToString();
			user.EmailConfirmed = true;
			user.UserName = request.UserName;
			user.Email = request.Email;
			user.NormalizedUserName = request.UserName.ToUpper();
			user.NormalizedEmail = request.Email?.ToUpper();

			var fileData = AvatarGenerator.GenerateAvatar(request.FullName);

			var file = await _uploadFile.UploadSingleAsync(fileData, "users");

			user.Image = file.Path;

			var result = await _userManager.CreateAsync(user, request.Password ?? UserConst.DefaultPassword);
			if (!result.Succeeded)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "Failed to create user.");
			}

			await MapRequestToUser(request, user, null);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(user);
		}

		public async Task<D?> UpdateAsync<D>(Guid userId, UserCreateUpdateRequest request) where D : class
		{
			var user = await _context.Users.FindAsync(userId) ?? throw new BusinessException(HttpStatusCode.NotFound, "User id not found");

			_mapper.Map(request, user);

			if (!string.IsNullOrEmpty(request.Password))
			{
				user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, UserConst.DefaultPassword);
			}

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

			user.UserName = request.UserName;
			user.Email = request.Email;
			user.NormalizedUserName = request.UserName.ToUpper();
			user.NormalizedEmail = request.Email?.ToUpper();

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

			if (request.RoleNames != null && request.RoleNames.Any())
			{
				if (userUpdateId != null)
				{
					var currentRoles = await _userManager.GetRolesAsync(user);

					var removeResult = await _userManager.RemoveFromRolesAsync(user, currentRoles);

					if (!removeResult.Succeeded)
					{
						throw new BusinessException(HttpStatusCode.BadRequest, "Failed to remove existing roles.");
					}
				}

				var addResult = await _userManager.AddToRolesAsync(user, request.RoleNames);
				if (!addResult.Succeeded)
				{
					throw new BusinessException(HttpStatusCode.BadRequest, "Failed to add new roles.");
				}
			}

			if (user.Image == null)
			{
				var fileData = AvatarGenerator.GenerateAvatar(request.FullName);

				var file = await _uploadFile.UploadSingleAsync(fileData, "users");

				user.Image = file.Path;
			}
		}

		public async Task GenerateAvatarForUser(User user)
		{
			if (user.Id == Guid.Empty)
			{
				user.Id = Guid.NewGuid();
			}

			var fileData = AvatarGenerator.GenerateAvatar(user.FullName);

			var file = await _uploadFile.UploadSingleAsync(fileData, "users", $"avatar_{user.Id}.png");

			user.Image = file.Path;
		}

	}
}
