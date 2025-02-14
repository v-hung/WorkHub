using System.ComponentModel.DataAnnotations;

namespace Timesheet.Server.Dto;

public class UserDto
{
    [Required]
    public required Guid Id { get; set; }

    [Required]
    public string? Email { get; set; }

    [Required]
    public string? FullName { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Address { get; set; }

    public string? Image { get; set; }

    [Required]
    public DateTime CreatedAt { get; set; }

    [Required]
    public DateTime UpdatedAt { get; set; }

    public string? CreatedBy { get; set; }

    public string? LastModifiedBy { get; set; }
}