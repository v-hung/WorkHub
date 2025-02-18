using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Models.Enums;
using WorkTimeTracker.Server.Models.Identity;
using WorkTimeTracker.Server.Models.Organization;

namespace WorkTimeTracker.Server.Models.Work
{
	public class Project : Entity<int>
	{

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public ProjectStatus Status { get; set; }

		// Navigation properties

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