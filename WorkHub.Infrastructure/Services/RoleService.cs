using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests.Identity;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Infrastructure.Data;
using WorkHub.Application.Exceptions;
using System.Linq.Expressions;
using WorkHub.Application.Wrapper;
using WorkHub.Application.Requests;
using System.Linq.Dynamic.Core;

namespace WorkHub.Infrastructure.Services
{
	public class RoleService : IRoleService
	{
		private readonly RoleManager<Role> _roleManager;
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<RoleService> _localizer;

		public RoleService(RoleManager<Role> roleManager, ApplicationDbContext context, IMapper mapper, IStringLocalizer<RoleService> localizer)
		{
			_roleManager = roleManager;
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
		}

		public async Task<List<D>> GetAllAsync<D>(Expression<Func<Role, bool>>? filter = null)
		{
			var query = _context.Roles.AsQueryable();

			if (filter != null)
			{
				query = query.Where(filter);
			}

			return await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<Paginated<D>> SearchAsync<D>(PagedRequest request) where D : class
		{
			var query = _context.Roles.AsQueryable();

			// Filtering
			if (!string.IsNullOrWhiteSpace(request.SearchString))
			{
				if (request.SearchString != null)
				{
					query = query.Where(u => !string.IsNullOrEmpty(u.Name) && u.Name.Contains(request.SearchString));
				}
			}

			// Sorting
			if (request.OrderBy?.Any() == true)
			{
				query = query.OrderBy(request.OrderByString);
			}
			else
			{
				query = query.OrderBy(u => u.Id);
			}

			// Pagination
			query = query.Skip((request.PageNumber - 1) * request.PageSize).Take(request.PageSize);

			// Mapping to DTO & Return
			List<D> data = await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();

			return new Paginated<D>(data, await query.CountAsync(), request.PageNumber, request.PageSize);
		}

		public async Task<D> GetAsync<D, DId>(DId id) where D : IEntity<DId> where DId : notnull
		{
			var entity = await _context.Roles
			 .AsNoTracking()
			 .FirstOrDefaultAsync(e => e.Id.Equals(id))
			 ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Data not found"]);

			var role = _mapper.Map<D>(entity);

			if (role is IPermissionAudit permissionAudit)
			{
				var claims = await _roleManager.GetClaimsAsync(entity);
				permissionAudit.Permissions = claims.Select(c => c.Value).ToList();
			}

			return role;
		}

		public async Task<D> GetAsync<D>(Expression<Func<Role, bool>>? filter = null) where D : class
		{
			var query = _context.Roles.AsQueryable();

			if (filter != null)
			{
				query = query.Where(filter);
			}

			return await query.ProjectTo<D>(_mapper.ConfigurationProvider).FirstOrDefaultAsync()
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Role is not found"]);
		}

		public async Task<D> CreateAsync<D>(RoleCreateUpdateRequest request) where D : class
		{
			var role = _mapper.Map<Role>(request);

			await _context.Roles.AddAsync(role);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(role);
		}

		public async Task<D?> UpdateAsync<D>(Guid roleId, RoleCreateUpdateRequest request) where D : class
		{
			var role = await _context.Roles.FindAsync(roleId) ?? throw new BusinessException(HttpStatusCode.NotFound, "User id not found");

			_mapper.Map(request, role);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(role);
		}

		public async Task DeleteAsync(Guid roleId)
		{
			var role = await _context.Roles.FindAsync(roleId) ?? throw new BusinessException(HttpStatusCode.NotFound, "");
			_context.Roles.Remove(role);
			await _context.SaveChangesAsync();
		}
	}
}