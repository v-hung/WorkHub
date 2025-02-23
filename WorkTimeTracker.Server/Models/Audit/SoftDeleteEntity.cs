using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Audit
{
	public class SoftDeleteEntity : ISoftDeleteEntity
	{
		[Required]
		public bool IsDeleted { get; set; } = false;
	}
}