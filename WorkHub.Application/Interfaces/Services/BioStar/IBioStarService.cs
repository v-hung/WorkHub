using WorkHub.Application.Models.BioStar;
using WorkHub.Application.Requests.BioStar;
using WorkHub.Application.Responses.BioStar;

namespace WorkHub.Application.Interfaces.BioStar.Services
{
	public interface IBioStarService
	{
		// Authentication
		Task<string?> GetAccessTokenAsync();
		Task<string?> LoginAsync();

		// Sync Operations
		Task<List<BioStarUser>> GetAllUsersAsync();
		Task<BioStarSyncAllUsersResponse> SyncAllUsersAsync();

		// Event Monitoring
		Task<List<BioStarEvent>> GetHistoricalEvents(GetHistoricalEventsRequest request);
		Task<BioStarSyncHistoricalEventsResponse> SyncHistoricalEvents(GetHistoricalEventsRequest request);
		Task SyncMessageEvent(string message);
		Task<D> ExecuteWithRetryAsync<D>(Func<HttpClient, Task<HttpResponseMessage>> apiCall);
	}
}