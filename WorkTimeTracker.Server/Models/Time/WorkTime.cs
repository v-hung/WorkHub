using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Constants.Timesheet;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Models.Identity;

namespace WorkTimeTracker.Server.Models.Time
{
	public class WorkTime : Entity<int>
	{

		[Required]
		public string Title { get; set; } = string.Empty;

		[Required]
		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		[Required]
		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		[Required]
		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		[Required]
		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		[Required]
		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;

		public IList<User> Users { get; set; } = [];
	}
}