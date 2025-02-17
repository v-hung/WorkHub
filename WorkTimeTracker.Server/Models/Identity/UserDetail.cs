using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkTimeTracker.Server.Models.Identity
{
	public class UserDetail
	{
		public int Id { get; set; }

		public DateTime BirthDate { get; set; }

		public string? Phone { get; set; }

		public bool Gender { get; set; }

		public string? PermanentAddress { get; set; }

		public string? ContactAddress { get; set; }

		public int YearsOfWork { get; set; } = 0;

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		public User? User { get; set; }
	}
}