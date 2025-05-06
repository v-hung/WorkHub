using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.DTOs.Time;

namespace WorkHub.Application.DTOs.Requests
{
	public class RequestCombinedDto : RequestCombinedMinimalDto
	{
		// Navigation properties

		[Required]
		public required UserMinimalDto User { get; set; }

		[Required]
		public required UserMinimalDto Approved { get; set; }

		[Required]
		public required TimesheetMinimalDto Timesheet { get; set; }
	}
}