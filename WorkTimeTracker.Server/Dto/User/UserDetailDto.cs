using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Dto.User
{
	public class UserDetailDto
	{

		[Required]
		public int Id { get; set; }

		public DateTime BirthDate { get; set; }

		public string? Phone { get; set; }

		public bool Gender { get; set; }

		public string? PermanentAddress { get; set; }

		public string? ContactAddress { get; set; }

		[Required]
		public int YearsOfWork { get; set; } = 0;
	}
}