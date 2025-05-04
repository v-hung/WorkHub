using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Domain.Entities.Identity
{
	public class UserDetail : Entity<int>
	{

		public DateTime? BirthDate { get; set; }

		public bool Gender { get; set; }

		[StringLength(255)]
		public string? PermanentAddress { get; set; }

		[StringLength(255)]
		public string? ContactAddress { get; set; }

		public int YearsOfWork { get; set; } = 0;

		[Required]
		public required Nationality Nationality { get; set; } = Nationality.vi_VN;

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		public User? User { get; set; }

	}
}