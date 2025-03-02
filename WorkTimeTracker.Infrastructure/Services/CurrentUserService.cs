using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Infrastructure.Services;

public class CurrentUserService(IHttpContextAccessor httpContextAccessor) : ICurrentUserService
{
	public string? UserId { get; } = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);

	public List<KeyValuePair<string, string>>? Claims { get; set; } = httpContextAccessor.HttpContext?.User?.Claims.AsEnumerable()
			.Select(item => new KeyValuePair<string, string>(item.Type, item.Value)).ToList();

	public string? UserName { get; } = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);
}