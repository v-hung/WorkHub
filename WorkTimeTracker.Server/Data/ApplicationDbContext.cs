using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Timesheet.Server.Interfaces.Services;
using Timesheet.Server.Models.Identity;
using Timesheet.Server.Services;

namespace Timesheet.Server.Data;

public class ApplicationDbContext : IdentityDbContext<User, Role, Guid>
{
    private readonly ICurrentUserService _currentUserService;

    public DbSet<RefreshToken> RefreshTokens { get; set; }

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
        base.OnModelCreating(builder);
    }

}