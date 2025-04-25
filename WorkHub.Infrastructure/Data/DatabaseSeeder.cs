using Microsoft.AspNetCore.Identity;
using WorkHub.Domain.Constants.Identity;
using WorkHub.Domain.Constants.Permission;
using WorkHub.Infrastructure.Helpers;
using WorkHub.Application.Interfaces.Data;
using WorkHub.Domain.Enums;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Organization;
using Microsoft.Extensions.Logging;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Infrastructure.Data;

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

	private async Task SeedWorkTimes()
	{
		var workTimes = new[]
		{
			new WorkTime{Title = "Basic"},
			new WorkTime{Title = "Early", StartTimeAfternoon = new TimeSpan(13, 0, 0), EndTimeAfternoon = new TimeSpan(17, 0, 0)},
		};

		var data = workTimes.Where(item => !_context.WorkTimes.Any(t => t.Title == item.Title)).ToList();

		if (data.Count != 0)
		{
			await _context.WorkTimes.AddRangeAsync(data);
			await _context.SaveChangesAsync();
		}
	}
}
