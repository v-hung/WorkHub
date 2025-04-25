using System.Net;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WorkHub.Application.Configs;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Models.BioStar;
using WorkHub.Application.Responses.BioStar;
using WorkHub.Domain.Constants.BioStar;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services
{
	public class BioStarService : IBioStarService
	{
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly ILogger<BioStarService> _logger;
		private readonly BioStarConfig _bioStarConfig;
		private readonly IStringLocalizer<BioStarService> _localizer;
		private readonly ApplicationDbContext _context;
		private readonly IMemoryCache _memoryCache;
		private const string AccessTokenCacheKey = "BioStarAccessToken";

		public BioStarService(IHttpClientFactory httpClientFactory, ILogger<BioStarService> logger, IOptions<BioStarConfig> bioStarConfig, IStringLocalizer<BioStarService> localizer, IMemoryCache memoryCache, ApplicationDbContext context)
		{
			_httpClientFactory = httpClientFactory;
			_logger = logger;
			_bioStarConfig = bioStarConfig.Value;
			_localizer = localizer;
			_memoryCache = memoryCache;
			_context = context;
		}

		public async Task<string?> GetAccessTokenAsync()
		{
			if (_memoryCache.TryGetValue(AccessTokenCacheKey, out var accessToken))
			{
				return accessToken as string;
			}

			return await LoginAsync();
		}

		public async Task<string?> LoginAsync()
		{
			_memoryCache.Remove(AccessTokenCacheKey);

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

				if (!response.Headers.TryGetValues("bs-session-id", out var values))
				{
					_logger.LogWarning("Login response does not contain 'bs-session-id'.");
					return null;
				}

				string accessToken = values.First();

				_memoryCache.Set(AccessTokenCacheKey, accessToken, TimeSpan.FromHours(1));
				_logger.LogInformation("Login successful. Session ID retrieved.");

				return accessToken;
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Error during login to BioStar.");
				return null;
			}
		}

		public async Task<List<BioStarUser>> GetAllUsersAsync()
		{
			string baseUrl = _bioStarConfig.BioStarApiUrl + BioStarConst.GET_USERS_API_URL;

			var parameters = new Dictionary<string, string?>
			{
				{"group_id", "1"},
				{"limit", ""},
				{"offset", "1"},
				{"order_by", "user_id,false"},
				{"userId", ""},
				{"last_modified", ""}
			};

			string fullUrl = QueryHelpers.AddQueryString(baseUrl, parameters);

			BioStarGetUsersResponse response = await ExecuteWithRetryAsync<BioStarGetUsersResponse>(client =>
				client.GetAsync(fullUrl));

			return response.UserCollection.Rows;
		}

		public async Task<BioStarSyncAllUsersResponse> SyncAllUsersAsync()
		{
			var bioUsers = await GetAllUsersAsync();

			var existingEmails = _context.Users.Where(u => u.Email != null).Select(u => u.Email).ToHashSet();

			var existingBioIds = _context.Users.Where(u => u.BioStarUserId != null).Select(u => u.BioStarUserId).ToHashSet();

			var newUsers = bioUsers
				.Where(b => !existingBioIds.Contains(b.UserId) && !existingEmails.Contains(b.Email) && b.Permission?.Name != "Administrator")
				.ToList();

			if (newUsers.Count != 0)
			{
				await _context.AddRangeAsync(newUsers.Select(b => new User
				{
					LockoutEnabled = true,
					SecurityStamp = Guid.NewGuid().ToString(),
					EmailConfirmed = true,
					UserName = b.Email ?? $"bioStar_{b.UserId}",
					Email = b.Email,
					NormalizedUserName = b.Email?.ToUpper() ?? $"bioStar_{b.UserId}",
					NormalizedEmail = b.Email?.ToUpper(),
					FullName = b.Name ?? $"bioStar_{b.UserId}",
					UserStatus = UserStatus.INACTIVE,
					RemainingLeaveMinutes = 0,
					BioStarUserId = b.UserId,
				}).ToList());

				await _context.SaveChangesAsync();
			}

			return new BioStarSyncAllUsersResponse
			{
				LoadCount = bioUsers.Count,
				NewCount = newUsers.Count
			};
		}

		public Task StartRealtimeEvents()
		{
			throw new NotImplementedException();
		}

		public async Task<List<BioStarEvent>> GetHistoricalEvents(DateTime from, DateTime to)
		{
			string baseUrl = _bioStarConfig.BioStarApiUrl + BioStarConst.GET_EVENTS_API_URL;

			var response = await ExecuteWithRetryAsync<BioStarGetEventsResponse>(client =>
				client.PostAsync(baseUrl, new StringContent(JsonSerializer.Serialize(new
				{
					Query = new
					{
						limit = 51,
						conditions = new[]
							{
							new {
								column = "datetime",
								@operator = 3,
								values = new object[] { from, to }
							}
						},
						orders = new[]
						{
							new {
								column = "datetime",
								descending = false
							}
						}
					}
				}), Encoding.UTF8, "application/json")));

			return response.EventCollection.Rows;
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
					throw new BusinessException(HttpStatusCode.BadRequest, "No session ID available for BioStar API.");
				}

				client.DefaultRequestHeaders.Remove("bs-session-id");
				client.DefaultRequestHeaders.Add("bs-session-id", sessionId);

				return await apiCall(client);
			}

			var response = await CallApiWithSessionAsync();

			// If 401, then try login and callback once
			if (response.StatusCode == HttpStatusCode.Unauthorized)
			{
				_logger.LogWarning("Unauthorized request — refreshing BioStar token...");
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
				var result = JsonSerializer.Deserialize<D>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true, PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower });
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