using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserDetailDto
	{
		public int? Id { get; set; }

		public DateTime? BirthDate { get; set; }

		public bool? Gender { get; set; }

		public string? PermanentAddress { get; set; }

		public string? ContactAddress { get; set; }

		[Required]
		public int YearsOfWork { get; set; } = 0;

		[Required]
		public required Nationality Nationality { get; set; } = Nationality.vi_VN;

	}
}