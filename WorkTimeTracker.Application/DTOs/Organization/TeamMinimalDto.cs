using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Application.DTOs.Organization
{
    public class TeamMinimalDto : IEntity<int>
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        public string? Description { get; set; }
    }
}