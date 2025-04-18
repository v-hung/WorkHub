using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Requests.Identity
{
	public class RoleCreateUpdateRequest
	{

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public List<string> Permissions { get; set; } = [];

	}
}