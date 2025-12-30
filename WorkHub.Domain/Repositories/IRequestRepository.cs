namespace WorkHub.Domain.Repositories
{
	public interface IRequestRepository
	{
		Task<D> GetByIdAsync<D>(int id) where D : class;
	}
}