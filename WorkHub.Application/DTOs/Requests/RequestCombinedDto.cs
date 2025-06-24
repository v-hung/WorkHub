using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Requests
{
	public class RequestCombinedDto : RequestCombinedMinimalDto
	{
		// Navigation properties

		[Required]
		public required UserMinimalWithWorkTimeDto User { get; set; }

		[Required]
		public required UserMinimalDto Approver { get; set; }
	}
}