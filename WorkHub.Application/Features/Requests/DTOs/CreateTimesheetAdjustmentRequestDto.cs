using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Features.Requests.DTOs
{
	public class CreateTimesheetAdjustmentRequestDto : CreateRequestDto
	{
		[Required]
		public DateTime CheckIn { get; set; }

		[Required]
		public DateTime CheckOut { get; set; }
	}
}