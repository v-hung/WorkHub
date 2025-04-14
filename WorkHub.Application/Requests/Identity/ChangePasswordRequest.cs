using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Requests.Identity
{
	public class ChangePasswordRequest
	{
		[Required]
		public required string Password { get; set; }

		[Required]
		public required string NewPassword { get; set; }
	}
}