namespace WorkTimeTracker.Application.Interfaces.Services;

public interface ICurrentUserService
{
	Guid? UserId { get; }

	string? UserName { get; }
}