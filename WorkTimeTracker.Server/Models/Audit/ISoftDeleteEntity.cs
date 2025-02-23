namespace WorkTimeTracker.Server.Models.Audit
{
	public interface ISoftDeleteEntity
	{
		bool IsDeleted { get; set; }
	}
}