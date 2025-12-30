
using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.DTOs.Requests
{
	public class RequestCombinedReferenceDto : RequestReferenceDto, ILeaveRequestDetails, ITimesheetAdjustmentRequestDetails
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