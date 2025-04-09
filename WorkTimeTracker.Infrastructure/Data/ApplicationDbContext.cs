using System.Linq.Expressions;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Entities.Organization;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Entities.Time;
using WorkTimeTracker.Domain.Entities.Work;
using WorkTimeTracker.Domain.Entities.Equipment;
using WorkTimeTracker.Domain.Entities.Misc;

namespace WorkTimeTracker.Infrastructure.Data;

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
	public DbSet<TimesheetAdjustmentRequest> TimesheetAdjustmentRequests { get; set; }
	public DbSet<Device> Device { get; set; }
	public DbSet<DeviceCategory> DeviceCategories { get; set; }
	public DbSet<Notification> Notifications { get; set; }

	public ApplicationDbContext(DbContextOptions options, ICurrentUserService currentUserService) : base(options)
	{
		_currentUserService = currentUserService;
	}

	public override int SaveChanges()
	{
		var entries = ChangeTracker.Entries();

		foreach (var entry in entries)
		{
			if (entry.Entity is IAuditEntity auditEntity)
			{
				if (entry.State == EntityState.Added)
				{
					auditEntity.CreatedAt = DateTime.UtcNow;
					auditEntity.CreatedBy = _currentUserService.UserName;
				}
				else if (entry.State == EntityState.Modified)
				{
					auditEntity.UpdatedAt = DateTime.UtcNow;
					auditEntity.LastModifiedBy = _currentUserService.UserName;
				}
			}

			if (entry.Entity is SoftDeleteEntity softDeleteEntity && entry.State == EntityState.Deleted)
			{
				entry.State = EntityState.Modified;
				softDeleteEntity.IsDeleted = true;
			}

		}

		return base.SaveChanges();
	}

	protected override void OnModelCreating(ModelBuilder builder)
	{

		builder.Entity<Request>()
			.HasDiscriminator<RequestType>("RequestType")
			.HasValue<LeaveRequest>(RequestType.LEAVE_REQUEST)
			.HasValue<TimesheetAdjustmentRequest>(RequestType.TIMESHEET_ADJUSTMENT_REQUEST);

		foreach (var entityType in builder.Model.GetEntityTypes())
		{
			if (typeof(SoftDeleteEntity).IsAssignableFrom(entityType.ClrType))
			{
				builder.Entity(entityType.ClrType)
					.HasQueryFilter(ConvertFilterExpression(entityType.ClrType));
			}
		}

		base.OnModelCreating(builder);
	}

	private static LambdaExpression ConvertFilterExpression(Type entityType)
	{
		var parameter = Expression.Parameter(entityType, "e");
		var property = Expression.Property(parameter, "IsDeleted");
		var condition = Expression.Equal(property, Expression.Constant(false));
		return Expression.Lambda(condition, parameter);
	}

}