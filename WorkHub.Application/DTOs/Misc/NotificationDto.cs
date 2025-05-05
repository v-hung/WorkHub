using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Misc
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
		public required NotificationCategory Category { get; set; }

		public string? RelatedEntityId { get; set; }

		[Required]
		public DateTime Date { get; set; } = DateTime.UtcNow;

		[Required]
		public bool IsRead { get; set; } = false;

	}
}