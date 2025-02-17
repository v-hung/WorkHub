using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WorkTimeTracker.Server.Constants.Timesheet;

namespace WorkTimeTracker.Server.Dto.Time
{
	public class WorkTimeDto
	{
		[Required]
		public int Id { get; set; }

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
	}
}