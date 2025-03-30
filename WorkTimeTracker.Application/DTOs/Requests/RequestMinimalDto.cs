using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public abstract class RequestMinimalDto : IEntity<int>
	{
		[Required]
		public required int Id { get; set; }

		[Required]
		public required DateTime Date { get; set; }

		[Required]
		public RequestType RequestType { get; set; }

		[Required]
		[MaxLength(500)]
		public string Reason { get; set; } = string.Empty;

		[Required]
		public RequestStatus Status { get; set; } = RequestStatus.PENDING;

		[Required]
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
	}
}