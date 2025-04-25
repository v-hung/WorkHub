using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserMinimalDto : IEntity<Guid>
	{
		[Required]
		public required Guid Id { get; set; }

		[Required]
		public required string UserName { get; set; }

		public string? Email { get; set; }

		[Required]
		public string? FullName { get; set; }

		public string? PhoneNumber { get; set; }

		public string? Image { get; set; }

		[Required]
		public required UserPosition UserPosition { get; set; }

		[Required]
		public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

	}
}