using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Features.Requests.DTOs
{
	public abstract class CreateRequestDto
	{
		[Required]
		public required DateTime Date { get; set; }

		[Required]
		public RequestType RequestType { get; set; }

		[Required]
		[MaxLength(500)]
		public string Reason { get; set; } = string.Empty;

		// Navigation properties

		public Guid ApproverId { get; set; }
	}
}