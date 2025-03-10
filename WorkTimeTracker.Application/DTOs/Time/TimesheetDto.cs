using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.Identity;

namespace WorkTimeTracker.Application.DTOs.Time
{
	public class TimesheetDto
	{
		[Required]
		public DateTime StartTime { get; set; }

		public DateTime EndTime { get; set; }

		public int WorkMinutes { get; set; }

		// Navigation

		public Guid? UserId { get; set; }

		public UserDto? User { get; set; }

	}
}