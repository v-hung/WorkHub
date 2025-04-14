using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Utils
{
	public static class TimesheetUtils
	{
		public static TimeSpan CalculateWorkTime(DateTime startTime, DateTime endTime)
		{
			return CalculateWorkTime(startTime, endTime, new WorkTime());
		}

		public static TimeSpan CalculateWorkTime(DateTime startTime, DateTime endTime, WorkTime workTime)
		{
			if (IsInvalidTimeRange(startTime, endTime, workTime))
			{
				return TimeSpan.Zero;
			}

			TimeSpan adjustedEndTimeAfternoon = CalculateAdjustedEndTimeAfternoon(startTime.TimeOfDay, workTime);
			TimeSpan morningTime = CalculateMorningTime(startTime.TimeOfDay, endTime.TimeOfDay, workTime);
			TimeSpan afternoonTime = CalculateAfternoonTime(startTime.TimeOfDay, endTime.TimeOfDay, adjustedEndTimeAfternoon, workTime);

			return morningTime + afternoonTime;
		}

		private static TimeSpan CalculateAdjustedEndTimeAfternoon(TimeSpan startTime, WorkTime workTime)
		{
			if (startTime > workTime.StartTimeMorning)
			{
				var lateTime = startTime - workTime.StartTimeMorning;
				var adjustedTime = TimeSpan.FromMinutes(Math.Min(workTime.AllowedLateMinutes * 60, lateTime.TotalMinutes));
				return workTime.EndTimeAfternoon + adjustedTime;
			}

			return workTime.EndTimeAfternoon;
		}

		private static TimeSpan CalculateMorningTime(TimeSpan startTime, TimeSpan endTime, WorkTime workTime)
		{
			if (startTime < workTime.EndTimeMorning)
			{
				var validMorningStart = startTime < workTime.StartTimeMorning ? workTime.StartTimeMorning : startTime;
				var validMorningEnd = endTime > workTime.EndTimeMorning ? workTime.EndTimeMorning : endTime;

				if (validMorningStart < validMorningEnd)
				{
					return validMorningEnd - validMorningStart;
				}
			}

			return TimeSpan.Zero;
		}

		private static TimeSpan CalculateAfternoonTime(TimeSpan startTime, TimeSpan endTime, TimeSpan adjustedEndTimeAfternoon, WorkTime workTime)
		{
			if (endTime > workTime.StartTimeAfternoon)
			{
				var validAfternoonStart = startTime > workTime.StartTimeAfternoon ? startTime : workTime.StartTimeAfternoon;
				var validAfternoonEnd = endTime > adjustedEndTimeAfternoon ? adjustedEndTimeAfternoon : endTime;

				if (validAfternoonStart < validAfternoonEnd)
				{
					return validAfternoonEnd - validAfternoonStart;
				}
			}

			return TimeSpan.Zero;
		}

		private static bool IsInvalidTimeRange(DateTime startTime, DateTime endTime, WorkTime workTime)
		{
			return startTime == default || endTime == default || startTime > endTime
				|| startTime.TimeOfDay > workTime.EndTimeAfternoon || endTime.TimeOfDay < workTime.StartTimeMorning;
		}
	}
}
