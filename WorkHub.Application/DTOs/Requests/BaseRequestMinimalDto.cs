using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Requests
{
	public class BaseRequestMinimalDto : IEntity<int>
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