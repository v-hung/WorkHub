using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Infrastructure.Data;
using WorkTimeTracker.Infrastructure.Exceptions;

namespace WorkTimeTracker.Infrastructure.Services
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

		public async Task<List<D>> GetAllAsync<D>()
		{
			return await _context.Roles.AsQueryable().ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<D> GetAsync<D, DId>(DId roleId) where D : IEntity<DId> where DId : notnull
		{
			return await _context.Roles.AsNoTracking()
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync(u => u.Id.Equals(roleId)) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Role is not found"]);
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