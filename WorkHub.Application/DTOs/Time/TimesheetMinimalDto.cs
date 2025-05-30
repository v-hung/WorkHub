using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Time
{

	public class TimesheetMinimalDto : IEntity<Guid>
	{
		[Required]
		public required Guid Id { get; set; }

		[Required]
		public required DateTime Date { get; set; }

		public DateTime? StartTime { get; set; }

		public DateTime? EndTime { get; set; }

		public int? WorkMinutes { get; set; } = 0;

		[Required]
		public bool IsActive { get; set; } = true;
	}
}