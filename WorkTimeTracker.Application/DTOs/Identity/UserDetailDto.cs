using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Identity
{
	public class UserDetailDto
	{

		public DateTime BirthDate { get; set; }

		public bool? Gender { get; set; }

		public string? PermanentAddress { get; set; }

		public string? ContactAddress { get; set; }

		[Required]
		public int YearsOfWork { get; set; } = 0;

		[Required]
		public required Nationality Nationality { get; set; } = Nationality.VIETNAMESE;

	}
}