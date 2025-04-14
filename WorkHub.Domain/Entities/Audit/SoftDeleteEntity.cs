using System.ComponentModel.DataAnnotations;

namespace WorkHub.Domain.Entities.Audit
{
	public class SoftDeleteEntity : ISoftDeleteEntity
	{
		[Required]
		public bool IsDeleted { get; set; } = false;
	}
}