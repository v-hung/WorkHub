using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Models.Enums;
using WorkTimeTracker.Server.Models.Identity;
using WorkTimeTracker.Server.Models.Organization;
using WorkTimeTracker.Server.Models.Requests;
using WorkTimeTracker.Server.Models.Time;
using WorkTimeTracker.Server.Models.Work;

namespace WorkTimeTracker.Server.Data;

public class ApplicationDbContext : IdentityDbContext<User, Role, Guid>
{
	private readonly ICurrentUserService _currentUserService;

	public DbSet<UserDetail> UserDetails { get; set; }
	public DbSet<Team> Teams { get; set; }
	public DbSet<Timesheet> Timesheets { get; set; }
	public DbSet<WorkTime> WorkTimes { get; set; }
	public DbSet<Project> Projects { get; set; }
	public DbSet<RefreshToken> RefreshTokens { get; set; }
	public DbSet<Request> Requests { get; set; }
	public DbSet<LeaveRequest> LeaveRequests { get; set; }
	public DbSet<TimesheetRequest> TimesheetRequests { get; set; }

	public ApplicationDbContext(DbContextOptions options, ICurrentUserService currentUserService) : base(options)
	{
		_currentUserService = currentUserService;
	}

	public override int SaveChanges()
	{
		var entries = ChangeTracker.Entries().Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);

		foreach (var entry in entries)
		{
			List<string> properties = entry.Metadata.GetProperties().Select(v => v.Name).ToList();

			if (entry.State == EntityState.Added && properties.Contains("CreatedAt"))
			{
				entry.Property("CreatedAt").CurrentValue = DateTime.UtcNow;
			}
			else if (entry.State == EntityState.Modified && properties.Contains("UpdatedAt"))
			{
				entry.Property("UpdatedAt").CurrentValue = DateTime.UtcNow;
			}
			else if (entry.State == EntityState.Added && properties.Contains("CreatedBy"))
			{
				entry.Property("CreatedBy").CurrentValue = _currentUserService.UserName;
			}
			else if (entry.State == EntityState.Modified && properties.Contains("LastModifiedBy"))
			{
				entry.Property("LastModifiedBy").CurrentValue = _currentUserService.UserName;
			}

		}

		return base.SaveChanges();
	}

	protected override void OnModelCreating(ModelBuilder builder)
	{

		builder.Entity<Request>()
			.HasDiscriminator<RequestType>("RequestType")
			.HasValue<LeaveRequest>(RequestType.LEAVE_REQUEST)
			.HasValue<TimesheetRequest>(RequestType.TIMESHEET_ADJUSTMENT);

		base.OnModelCreating(builder);
	}

}