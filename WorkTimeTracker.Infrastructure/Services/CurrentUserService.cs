using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Infrastructure.Services;

public class CurrentUserService : ICurrentUserService
{
	private readonly IHttpContextAccessor _httpContextAccessor;

	public CurrentUserService(IHttpContextAccessor httpContextAccessor)
	{
		_httpContextAccessor = httpContextAccessor;
	}

	public Guid? UserId
	{
		get
		{
			var userIdString = _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
			return Guid.TryParse(userIdString, out var userId) ? userId : null;
		}
	}

	public string? UserName => _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);

	public List<KeyValuePair<string, string>> Claims =>
		_httpContextAccessor.HttpContext?.User?.Claims?
			.Select(c => new KeyValuePair<string, string>(c.Type, c.Value))
			.ToList() ?? new List<KeyValuePair<string, string>>();
}
