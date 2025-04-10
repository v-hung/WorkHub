using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Misc
{
	public class NotificationDto : IEntity<int>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required string Title { get; set; }

		[Required]
		public string Message { get; set; } = string.Empty;

		[Required]
		public required NotificationType Type { get; set; }

		[Required]
		public bool IsRead { get; set; } = false;

	}
}