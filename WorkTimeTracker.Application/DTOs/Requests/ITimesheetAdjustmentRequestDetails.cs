namespace WorkTimeTracker.Application.DTOs.Requests
{
	public interface ITimesheetAdjustmentRequestDetails
	{
		DateTime CheckIn { get; set; }

		DateTime CheckOut { get; set; }

		DateTime BreakStartDate { get; set; }

		DateTime BreakEndDate { get; set; }
	}
}