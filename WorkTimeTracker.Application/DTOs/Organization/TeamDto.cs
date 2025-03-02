using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.User;

namespace WorkTimeTracker.Application.DTOs.Organization
{
    public class TeamDto : TeamMinimalDto
    {

        [Required]
        public int TotalMembers { get; set; } = 0;

        [Required]
        public int CompletedProjects { get; set; } = 0;

        [Required]
        public int ActiveProjects { get; set; } = 0;

        // Navigation
        public UserMinimalDto? Manager { get; set; }

    }
}