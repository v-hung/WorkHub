using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public abstract class RequestDto : IEntity<int>
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