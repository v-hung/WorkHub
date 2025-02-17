using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;

namespace WorkTimeTracker.Server.Responses.Identity;

public class LoginResponse
{
	[Required]
	public required string Token { get; set; }

	[Required]
	public required string RefreshToken { get; set; }

	[Required]
	public required UserDto User { get; set; }
}