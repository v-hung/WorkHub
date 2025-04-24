using System.Net;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WorkHub.Application.Configs;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Models.BioStar;
using WorkHub.Application.Responses.BioStar;
using WorkHub.Domain.Constants.BioStar;

namespace WorkHub.Infrastructure.Services
{
	public class BioStarService : IBioStarService
	{
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly ILogger<BioStarService> _logger;
		private readonly BioStarConfig _bioStarConfig;
		private readonly IStringLocalizer<BioStarService> _localizer;
		private string? _accessToken;

		public BioStarService(IHttpClientFactory httpClientFactory, ILogger<BioStarService> logger, IOptions<BioStarConfig> bioStarConfig, IStringLocalizer<BioStarService> localizer)
		{
			_httpClientFactory = httpClientFactory;
			_logger = logger;
			_bioStarConfig = bioStarConfig.Value;
			_localizer = localizer;
		}

		public async Task<string?> GetAccessTokenAsync()
		{
			if (_accessToken == null)
			{
				await LoginAsync();
			}

			return _accessToken;
		}

		public async Task<string?> LoginAsync()
		{
			try
			{
				var client = _httpClientFactory.CreateClient("IgnoreSsl");

				var response = await client.PostAsync(_bioStarConfig.BioStarApiUrl + BioStarConst.LOGIN_API_URI, new StringContent(JsonSerializer.Serialize(new
				{
					User = new
					{
						login_id = _bioStarConfig.Username,
						password = _bioStarConfig.Password
					}
				}), Encoding.UTF8, "application/json"));

				if (!response.IsSuccessStatusCode)
				{
					_logger.LogWarning("Login failed. StatusCode: {StatusCode}, Reason: {Reason}", response.StatusCode, response.ReasonPhrase);
					return null;
				}

				if (response.Headers.TryGetValues("bs-session-id", out var values))
				{
					_accessToken = values.First();
					_logger.LogInformation("Login successful. Session ID retrieved.");
				}
				else
				{
					_logger.LogWarning("Login response does not contain 'bs-session-id'.");
					return null;
				}

				return _accessToken;
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Error during login to BioStar.");
				return null;
			}
		}

		public async Task<List<BioStarUser>> GetAllUsersAsync()
		{
			BioStarGetUsersResponse response = await ExecuteWithRetryAsync<BioStarGetUsersResponse>(client =>
				client.PostAsync(_bioStarConfig.BioStarApiUrl + BioStarConst.GET_USERS_API_URL, new FormUrlEncodedContent([
					new KeyValuePair<string, string>("group_id", "1"),
					new KeyValuePair<string, string>("limit", ""),
					new KeyValuePair<string, string>("offset", "1"),
					new KeyValuePair<string, string>("order_by", "user_id:false"),
					new KeyValuePair<string, string>("userId", ""),
					new KeyValuePair<string, string>("last_modified", ""),
				])));

			return response.UserCollection.rows;
		}

		public Task SyncAllUsersAsync()
		{
			throw new NotImplementedException();
		}

		public Task StartRealtimeEvents()
		{
			throw new NotImplementedException();
		}

		public Task<List<object>> GetHistoricalEvents(DateTime from, DateTime to)
		{
			throw new NotImplementedException();
		}

		private async Task<D> ExecuteWithRetryAsync<D>(Func<HttpClient, Task<HttpResponseMessage>> apiCall)
		{
			var client = _httpClientFactory.CreateClient("IgnoreSsl");

			async Task<HttpResponseMessage> CallApiWithSessionAsync()
			{
				var sessionId = await GetAccessTokenAsync();
				if (string.IsNullOrWhiteSpace(sessionId))
				{
					_logger.LogWarning("No session ID available for BioStar API.");
					throw new UnauthorizedAccessException("No session ID available for BioStar API.");
				}

				client.DefaultRequestHeaders.Remove("Authorization");
				client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", sessionId);

				return await apiCall(client);
			}

			var response = await CallApiWithSessionAsync();

			// If 401, then try login and callback once
			if (response.StatusCode == HttpStatusCode.Unauthorized)
			{
				_logger.LogWarning("Unauthorized request — refreshing BioStar token...");
				_accessToken = null; // Reset token
				await LoginAsync();  // Re-login

				response = await CallApiWithSessionAsync(); // Retry
			}

			if (!response.IsSuccessStatusCode)
			{
				var errorContent = await response.Content.ReadAsStringAsync();
				_logger.LogError("BioStar API call failed. Status: {StatusCode}, Response: {Response}", response.StatusCode, errorContent);
				throw new BusinessException(HttpStatusCode.BadRequest, _localizer["ApiCallFailed"]);
			}

			var json = await response.Content.ReadAsStringAsync();

			try
			{
				var result = JsonSerializer.Deserialize<D>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
				if (result == null)
				{
					_logger.LogError("Deserialized result is null for type {TypeName}", typeof(D).Name);
					throw new BusinessException(HttpStatusCode.InternalServerError, _localizer["DeserializationFailed"]);
				}

				return result;
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Failed to deserialize response to type {TypeName}", typeof(D).Name);
				throw new BusinessException(HttpStatusCode.InternalServerError, _localizer["DeserializationFailed"]);
			}
		}

	}
}