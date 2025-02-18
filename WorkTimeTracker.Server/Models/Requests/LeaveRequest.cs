using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Requests
{
	public class LeaveRequest : Request
	{
		[Required]
		public DateTime StartDate { get; set; }

		[Required]
		public DateTime EndDate { get; set; }
	}
}