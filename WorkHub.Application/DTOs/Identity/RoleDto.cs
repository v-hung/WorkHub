using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Identity;

public class RoleDto : IEntity<Guid>
{

	[Required]
	public required Guid Id { get; set; }

	[Required]
	public required string Name { get; set; }

	[Required]
	public string Description { get; set; } = "";

	[Required]
	public bool IsAdmin { get; set; } = false;

}