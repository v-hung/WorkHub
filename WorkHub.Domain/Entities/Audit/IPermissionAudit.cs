namespace WorkHub.Domain.Entities.Audit
{
	public interface IPermissionAudit
	{
		List<string> Permissions { get; set; }
	}
}