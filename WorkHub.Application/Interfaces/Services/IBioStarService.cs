using WorkHub.Application.Models.BioStar;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IBioStarService
	{
		// Authentication
		Task<string?> GetAccessTokenAsync();
		Task<string?> LoginAsync();

		// Sync Operations
		Task<List<BioStarUser>> GetAllUsersAsync();
		Task SyncAllUsersAsync();

		// 5Event Monitoring
		Task StartRealtimeEvents();
		Task<List<object>> GetHistoricalEvents(DateTime from, DateTime to);
	}
}