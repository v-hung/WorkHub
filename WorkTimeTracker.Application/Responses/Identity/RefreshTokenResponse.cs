using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Responses.Identity
{
    public class RefreshTokenResponse
    {
        [Required]
        public required string Token { get; set; }

        [Required]
        public required string RefreshToken { get; set; }
    }
}