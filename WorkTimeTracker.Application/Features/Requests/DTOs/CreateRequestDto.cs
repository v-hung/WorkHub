using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.Features.Requests.DTOs
{
	public abstract class CreateRequestDto
	{
		[Required]
		public required int Id { get; set; }

		[Required]
		public RequestType RequestType { get; set; }

		[Required]
		[MaxLength(500)]
		public string Reason { get; set; } = string.Empty;

		[Required]
		public RequestStatus Status { get; set; } = RequestStatus.PENDING;

		[Required]
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

		// Navigation properties

		public Guid UserId { get; set; }

		public Guid ApprovedById { get; set; }

		public Guid TimesheetId { get; set; }
	}
}