using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.DTOs.Time;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public class RequestDto : RequestMinimalDto
	{
		// Navigation properties

		[Required]
		[InverseProperty("Requests")]
		public required UserMinimalDto User { get; set; }

		[Required]
		[InverseProperty("ApprovedRequests")]
		public required UserMinimalDto ApprovedBy { get; set; }

		[Required]
		public required TimesheetMinimalDto Timesheet { get; set; }
	}
}