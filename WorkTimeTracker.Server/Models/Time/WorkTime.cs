using System.ComponentModel.DataAnnotations;
using Timesheet.Server.Constants.Timesheet;
using Timesheet.Server.Models.Identity;

namespace Timesheet.Server.Models.Time
{
	public class WorkTime
	{

		[Required]
		public long Id { get; set; }

		[Required]
		public required string Title { get; set; }

		[Required]
		public required TimeSpan startTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		[Required]
		public required TimeSpan endTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		[Required]
		public required TimeSpan startTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		[Required]
		public required TimeSpan endTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		[Required]
		public required int allowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;

		public IList<User> Users { get; set; } = [];
	}
}