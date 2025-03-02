using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Requests.Identity
{
    public class ChangePasswordRequest
    {
        [Required]
        public required string Password { get; set; }

        [Required]
        public required string NewPassword { get; set; }
    }
}