using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Requests
{
	public class RequestCombinedDetailsDto : RequestCombinedReferenceDto
	{
		// Navigation properties

		[Required]
		public required UserWorkScheduleDto User { get; set; }

		[Required]
		public required UserReferenceDto Approver { get; set; }
	}
}