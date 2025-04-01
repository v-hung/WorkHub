
using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public class RequestCombinedMinimalDto : BaseRequestMinimalDto, ILeaveRequestDetails, ITimesheetAdjustmentRequestDetails
	{
		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }

		[Required]
		public DateTime CheckIn { get; set; }

		[Required]
		public DateTime CheckOut { get; set; }
	}
}