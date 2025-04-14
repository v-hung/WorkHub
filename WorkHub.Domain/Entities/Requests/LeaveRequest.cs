using System.ComponentModel.DataAnnotations;

namespace WorkHub.Domain.Entities.Requests
{
	public class LeaveRequest : Request
	{
		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }
	}
}