using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Work;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Domain.Entities.Organization
{
    public class Team : Entity<int>
    {

        [Required]
        public required string Name { get; set; }

        public string? Description { get; set; }

        [Required]
        public int TotalMembers { get; set; } = 0;

        [Required]
        public int CompletedProjects { get; set; } = 0;

        [Required]
        public int ActiveProjects { get; set; } = 0;

        // Navigation properties

        [ForeignKey("Manager")]
        public Guid? ManagerId { get; set; }

        [InverseProperty("ManagerTeams")]
        public User? Manager { get; set; }

        [InverseProperty("Team")]
        public IList<User> Members { get; set; } = [];

        public List<Project> Projects { get; set; } = [];

        public void UpdateTotalMembers()
        {
            TotalMembers = Members?.Count ?? 0;
        }
    }
}