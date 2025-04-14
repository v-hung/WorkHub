using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Responses.Identity;

public class LoginResponse<D>
{
	[Required]
	public required string Token { get; set; }

	[Required]
	public required string RefreshToken { get; set; }

	[Required]
	public required D User { get; set; }
}