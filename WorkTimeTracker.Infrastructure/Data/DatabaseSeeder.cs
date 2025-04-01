using Microsoft.AspNetCore.Identity;
using WorkTimeTracker.Domain.Constants.Identity;
using WorkTimeTracker.Domain.Constants.Permission;
using WorkTimeTracker.Infrastructure.Helpers;
using WorkTimeTracker.Application.Interfaces.Data;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Entities.Organization;
using Microsoft.Extensions.Logging;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Infrastructure.Data;

public class DatabaseSeeder : IDatabaseSeeder
{
	private readonly ILogger<DatabaseSeeder> _logger;
	private readonly ApplicationDbContext _context;
	private readonly UserManager<User> _userManager;
	private readonly RoleManager<Role> _roleManager;

	public DatabaseSeeder(
		ApplicationDbContext context,
		ILogger<DatabaseSeeder> logger,
		UserManager<User> userManager,
		RoleManager<Role> roleManager
	)
	{
		_context = context;
		_logger = logger;
		_userManager = userManager;
		_roleManager = roleManager;
	}

	public async Task Initialize()
	{
		var teams = await SeedTeams();
		await SeedWorkTimes();
		await SeedAdminUser();
		await SeedBasicUsers(teams);
	}

	private async Task<List<Team>> SeedTeams()
	{

		var teams = new[]{
			new Team() { Name = "STNet"},
			new Team() { Name = "Msr"},
		};

		var newTeams = teams.Where(item => !_context.Teams.Any(t => t.Name == item.Name)).ToList();

		if (newTeams.Count != 0)
		{
			await _context.Teams.AddRangeAsync(newTeams);
			await _context.SaveChangesAsync();
		}

		return teams.ToList();
	}

	private async Task SeedAdminUser()
	{
		var adminRoleExits = await _roleManager.RoleExistsAsync(RoleConst.AdministratorRole);

		if (!adminRoleExits)
		{
			var role = new Role
			{
				NormalizedName = RoleConst.AdministratorRole.ToUpper(),
				Name = RoleConst.AdministratorRole
			};
			await _roleManager.CreateAsync(role);

			foreach (var permission in Permissions.GetRegisteredPermissions())
			{
				await _roleManager.AddPermissionClaim(role, permission);
			}
		}

		var adminUserExist = await _userManager.FindByEmailAsync(UserConst.AdministratorUsername);

		if (adminUserExist == null)
		{
			var user = new User
			{
				Code = "Admin",
				Email = UserConst.AdministratorUsername,
				UserName = UserConst.AdministratorUsername,
				NormalizedUserName = UserConst.AdministratorUsername.ToUpper(),
				NormalizedEmail = UserConst.AdministratorUsername.ToUpper(),
				FullName = RoleConst.AdministratorRole,
				LockoutEnabled = true,
				SecurityStamp = Guid.NewGuid().ToString(),
				EmailConfirmed = true,
				UserPosition = UserPosition.ADMINISTRATOR
			};

			var result = await _userManager.CreateAsync(user, UserConst.AdministratorPassword);
			if (result.Succeeded)
			{
				await _userManager.AddToRoleAsync(user, RoleConst.AdministratorRole);
				_logger.LogInformation($"✅ Created user {UserConst.AdministratorUsername} with role {RoleConst.AdministratorRole}");
			}
			else
			{
				foreach (var error in result.Errors)
				{
					_logger.LogError($"❌ Error creating user {UserConst.AdministratorUsername}: {error.Description}");
				}
			}
		}
	}

	private async Task SeedBasicUsers(List<Team> teams)
	{
		var basicRoleExits = await _roleManager.RoleExistsAsync(RoleConst.BasicRole);

		if (!basicRoleExits)
		{
			var role = new Role
			{
				NormalizedName = RoleConst.BasicRole.ToUpper(),
				Name = RoleConst.BasicRole
			};
			await _roleManager.CreateAsync(role);
		}

		var basicUserExist = await _userManager.FindByEmailAsync("hungnv@wbc.vn");

		if (basicUserExist == null)
		{
			var user = new User
			{
				Code = "WBC1",
				Email = "hungnv@wbc.vn",
				UserName = "hungnv@wbc.vn",
				NormalizedUserName = "hungnv@wbc.vn".ToUpper(),
				NormalizedEmail = "hungnv@wbc.vn".ToUpper(),
				FullName = RoleConst.BasicRole,
				LockoutEnabled = true,
				SecurityStamp = Guid.NewGuid().ToString(),
				EmailConfirmed = true,
				UserPosition = UserPosition.DEVELOPER,
				TeamId = teams.Where(t => t.Name == "STNet").FirstOrDefault()?.Id ?? null
			};

			var result = await _userManager.CreateAsync(user, UserConst.DefaultPassword);
			if (result.Succeeded)
			{
				await _userManager.AddToRoleAsync(user, RoleConst.BasicRole);
				_logger.LogInformation($"✅ Created user hungnv@wbc.vn with role {RoleConst.BasicRole}");
			}
			else
			{
				foreach (var error in result.Errors)
				{
					_logger.LogError($"❌ Error creating user hungnv@wbc.vn: {error.Description}");
				}
			}
		}
	}

	private async Task SeedWorkTimes()
	{
		var workTimes = new[]
		{
			new WorkTime{Title = "Basic"},
			new WorkTime{Title = "Early"},
		};

		var data = workTimes.Where(item => !_context.WorkTimes.Any(t => t.Title == item.Title)).ToList();

		if (data.Count != 0)
		{
			await _context.WorkTimes.AddRangeAsync(data);
			await _context.SaveChangesAsync();
		}
	}
}
