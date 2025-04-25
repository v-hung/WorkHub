using WorkHub.Application.Models.BioStar;
using WorkHub.Application.Responses.BioStar;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IBioStarService
	{
		// Authentication
		Task<string?> GetAccessTokenAsync();
		Task<string?> LoginAsync();

		// Sync Operations
		Task<List<BioStarUser>> GetAllUsersAsync();
		Task<BioStarSyncAllUsersResponse> SyncAllUsersAsync();

		// 5Event Monitoring
		Task StartRealtimeEvents();
		Task<List<BioStarEvent>> GetHistoricalEvents(DateTime from, DateTime to);
	}
}