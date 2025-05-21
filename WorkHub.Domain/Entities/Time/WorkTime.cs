using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Constants.Timesheet;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Domain.Entities.Time
{
	[Table("work_times")]
	public class WorkTime : AuditEntity<int>
	{
		[Required]
		[StringLength(255)]
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