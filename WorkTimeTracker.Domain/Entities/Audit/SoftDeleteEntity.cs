using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Audit
{
    public class SoftDeleteEntity : ISoftDeleteEntity
    {
        [Required]
        public bool IsDeleted { get; set; } = false;
    }
}