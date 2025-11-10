using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Utils
{
	public static class TimesheetUtils
	{
		public static TimeSpan CalculateWorkSchedule(DateTime startTime, DateTime endTime)
		{
			return CalculateWorkSchedule(startTime, endTime, new WorkSchedule());
		}

		public static TimeSpan CalculateWorkSchedule(DateTime startTime, DateTime endTime, WorkSchedule workSchedule)
		{
			if (IsInvalidTimeRange(startTime, endTime, workSchedule))
			{
				return TimeSpan.Zero;
			}

			TimeSpan adjustedEndTimeAfternoon = CalculateAdjustedEndTimeAfternoon(startTime.TimeOfDay, workSchedule);
			TimeSpan morningTime = CalculateMorningTime(startTime.TimeOfDay, endTime.TimeOfDay, workSchedule);
			TimeSpan afternoonTime = CalculateAfternoonTime(startTime.TimeOfDay, endTime.TimeOfDay, adjustedEndTimeAfternoon, workSchedule);

			return morningTime + afternoonTime;
		}

		private static TimeSpan CalculateAdjustedEndTimeAfternoon(TimeSpan startTime, WorkSchedule workSchedule)
		{
			if (startTime > workSchedule.StartTimeMorning)
			{
				var lateTime = startTime - workSchedule.StartTimeMorning;
				var adjustedTime = TimeSpan.FromMinutes(Math.Min(workSchedule.AllowedLateMinutes * 60, lateTime.TotalMinutes));
				return workSchedule.EndTimeAfternoon + adjustedTime;
			}

			return workSchedule.EndTimeAfternoon;
		}

		private static TimeSpan CalculateMorningTime(TimeSpan startTime, TimeSpan endTime, WorkSchedule workSchedule)
		{
			if (startTime < workSchedule.EndTimeMorning)
			{
				var validMorningStart = startTime < workSchedule.StartTimeMorning ? workSchedule.StartTimeMorning : startTime;
				var validMorningEnd = endTime > workSchedule.EndTimeMorning ? workSchedule.EndTimeMorning : endTime;

				if (validMorningStart < validMorningEnd)
				{
					return validMorningEnd - validMorningStart;
				}
			}

			return TimeSpan.Zero;
		}

		private static TimeSpan CalculateAfternoonTime(TimeSpan startTime, TimeSpan endTime, TimeSpan adjustedEndTimeAfternoon, WorkSchedule workSchedule)
		{
			if (endTime > workSchedule.StartTimeAfternoon)
			{
				var validAfternoonStart = startTime > workSchedule.StartTimeAfternoon ? startTime : workSchedule.StartTimeAfternoon;
				var validAfternoonEnd = endTime > adjustedEndTimeAfternoon ? adjustedEndTimeAfternoon : endTime;

				if (validAfternoonStart < validAfternoonEnd)
				{
					return validAfternoonEnd - validAfternoonStart;
				}
			}

			return TimeSpan.Zero;
		}

		private static bool IsInvalidTimeRange(DateTime startTime, DateTime endTime, WorkSchedule workSchedule)
		{
			return startTime == default || endTime == default || startTime > endTime
				|| startTime.TimeOfDay > workSchedule.EndTimeAfternoon || endTime.TimeOfDay < workSchedule.StartTimeMorning;
		}
	}
}
