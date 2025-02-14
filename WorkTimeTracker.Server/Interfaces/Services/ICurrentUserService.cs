namespace Timesheet.Server.Interfaces.Services;

public interface ICurrentUserService
{
    string? UserId { get; }

    string? UserName { get; }
}