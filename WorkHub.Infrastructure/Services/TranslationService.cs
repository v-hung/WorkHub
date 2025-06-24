using System.Globalization;
using Microsoft.EntityFrameworkCore;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services
{
	public class TranslationService : ITranslationService
	{

		private readonly ApplicationDbContext _context;

		public TranslationService(ApplicationDbContext context)
		{
			_context = context;
		}

		public async Task<D> TranslateAsync<D, DId>(D dto) where D : IEntity<DId>
		{
			await TranslateInternalAsync(dto);
			return dto;
		}

		public async Task<List<D>> TranslateAsync<D, DId>(List<D> DTOs) where D : IEntity<DId>
		{
			await TranslateInternalAsync(DTOs);
			return DTOs;
		}

		private async Task TranslateInternalAsync(object input)
		{
			var keys = TranslationUtils.CollectTranslationKeys(input);

			var culture = CultureInfo.CurrentUICulture.Name;

			List<Translation> translations = await _context.Translations.Where(t => keys.Contains(t.Key) && t.Culture.Equals(culture)).ToListAsync();

			TranslationUtils.ApplyTranslations(input, translations);
		}

	}
}