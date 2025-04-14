namespace WorkHub.Domain.Entities.Audit
{
	public interface IRoleAudit<D> where D : class
	{
		List<D> Roles { get; set; }
	}
}