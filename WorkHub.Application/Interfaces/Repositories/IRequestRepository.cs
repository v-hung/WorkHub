namespace WorkHub.Application.Interfaces.Repositories
{
	public interface IRequestRepository
	{
		Task<D> GetByIdAsync<D>(int id) where D : class;
	}
}