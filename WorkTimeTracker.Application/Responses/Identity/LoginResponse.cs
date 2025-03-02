using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.User;

namespace WorkTimeTracker.Application.Responses.Identity;

public class LoginResponse
{
    [Required]
    public required string Token { get; set; }

    [Required]
    public required string RefreshToken { get; set; }

    [Required]
    public required UserDto User { get; set; }
}