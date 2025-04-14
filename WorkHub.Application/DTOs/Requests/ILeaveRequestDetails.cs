namespace WorkHub.Application.DTOs.Requests
{
	public interface ILeaveRequestDetails
	{
		DateTime BreakStartDate { get; set; }

		DateTime BreakEndDate { get; set; }
	}
}