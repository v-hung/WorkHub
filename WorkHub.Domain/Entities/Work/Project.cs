using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Domain.Entities.Work
{
	[Table("projects")]
	public class Project : AuditEntity<int>
	{
		[Required]
		[StringLength(255)]
		public required string Name { get; set; }

		[StringLength(255)]
		public string? Description { get; set; }

		public DateTime? StartDate { get; set; }

		public DateTime? EndDate { get; set; }

		public ProjectStatus Status { get; set; } = ProjectStatus.ACTIVE;

		// Navigation properties

		[ForeignKey("Team")]
		public int? TeamId { get; set; }

		public Team? Team { get; set; }

		[ForeignKey("Manager")]
		public Guid? ManagerId { get; set; }

		[Required]
		[InverseProperty("ManagerProjects")]
		public User? Manager { get; set; }

		[InverseProperty("Projects")]
		public IList<User> Members { get; set; } = [];
	}
}