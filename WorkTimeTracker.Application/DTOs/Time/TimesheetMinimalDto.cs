using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Application.DTOs.Time
{

	public class TimesheetMinimalDto : IEntity<Guid>
	{
		[Required]
		public required Guid Id { get; set; }

		[Required]
		public DateTime StartTime { get; set; }

		public DateTime? EndTime { get; set; }

		public int? WorkMinutes { get; set; } = 0;

		public List<RequestDto> Requests { get; set; } = [];
	}
}