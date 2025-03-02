namespace WorkTimeTracker.Domain.Entities.Audit
{
    public interface ISoftDeleteEntity
    {
        bool IsDeleted { get; set; }
    }
}