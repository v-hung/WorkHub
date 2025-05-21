using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Work;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Domain.Entities.Organization
{
	[Table("teams")]
	public class Team : AuditEntity<int>
	{
		[Required]
		[StringLength(255)]
		public required string Name { get; set; }

		[StringLength(255)]
		public string? Description { get; set; }

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
	}
}