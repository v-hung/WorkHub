using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Infrastructure.Services;

public class CurrentUserService : ICurrentUserService
{
	private readonly IHttpContextAccessor _httpContextAccessor;

	public CurrentUserService(IHttpContextAccessor httpContextAccessor)
	{
		_httpContextAccessor = httpContextAccessor;
	}

	public string? UserId => _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);

	public string? UserName => _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);

	public List<KeyValuePair<string, string>> Claims =>
		_httpContextAccessor.HttpContext?.User?.Claims?
			.Select(c => new KeyValuePair<string, string>(c.Type, c.Value))
			.ToList() ?? new List<KeyValuePair<string, string>>();
}
