namespace WorkTimeTracker.Server.Constants.Timesheet
{
	public static class TimesheetConst
	{
		public static readonly TimeSpan START_TIME_MORNING = new TimeSpan(8, 0, 0);  // 08:00:00

		public static readonly TimeSpan END_TIME_MORNING = new TimeSpan(12, 0, 0);   // 12:00:00

		public static readonly TimeSpan START_TIME_AFTERNOON = new TimeSpan(13, 30, 0);  // 13:30:00

		public static readonly TimeSpan END_TIME_AFTERNOON = new TimeSpan(17, 30, 0);   // 17:30:00

		public const int ALLOWED_LATE_MINUTES = 60;
	}
}