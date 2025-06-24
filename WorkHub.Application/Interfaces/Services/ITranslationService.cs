using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.Interfaces.Services
{
	public interface ITranslationService
	{
		Task<D> TranslateAsync<D, DId>(D dto) where D : IEntity<DId>;

		Task<List<D>> TranslateAsync<D, DId>(List<D> DTOs) where D : IEntity<DId>;
	}
}