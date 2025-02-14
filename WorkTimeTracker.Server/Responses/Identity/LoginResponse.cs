using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using Timesheet.Server.Dto;

namespace Timesheet.Server.Responses.Identity;

public class LoginResponse
{
    [Required]
    public required string Token { get; set; }

    [Required]
    public required string RefreshToken { get; set; }

    [Required]
    public required UserDto User { get; set; }
}