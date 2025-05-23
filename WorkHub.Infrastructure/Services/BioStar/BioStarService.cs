using System.Net;
using System.Text;
using System.Text.Json;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WorkHub.Application.Configs;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.BioStar.Services;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Models.BioStar;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Application.Models.SignalR.Notification.DTOs;
using WorkHub.Application.Requests.BioStar;
using WorkHub.Application.Responses.BioStar;
using WorkHub.Domain.Constants.BioStar;
using WorkHub.Domain.Constants.Identity;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Time;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.BioStar.Services
{
	public class BioStarService : IBioStarService
	{
		private readonly IHttpClientFactory _httpClientFactory;
		private readonly ILogger<BioStarService> _logger;
		private readonly BioStarConfig _bioStarConfig;
		private readonly IStringLocalizer<BioStarService> _localizer;
		private readonly ApplicationDbContext _context;
		private readonly IUserService _userService;
		private readonly INotificationSender _notificationSender;
		private readonly UserManager<User> _userManager;
		private readonly IMemoryCache _memoryCache;
		private const string AccessTokenCacheKey = "BioStarAccessToken";

		public HashSet<string> FINGERPRINT_SUCCESS_EVENT_CODES = [
			((int)BioStarEventTypeEnum.IDENTIFY_SUCCESS_FINGERPRINT).ToString(),
			((int)BioStarEventTypeEnum.VERIFY_SUCCESS_CARD).ToString()
		];

		public BioStarService(IHttpClientFactory httpClientFactory, ILogger<BioStarService> logger, IOptions<BioStarConfig> bioStarConfig, IStringLocalizer<BioStarService> localizer, IMemoryCache memoryCache, ApplicationDbContext context, INotificationSender notificationSender, IUserService userService, UserManager<User> userManager)
		{
			_httpClientFactory = httpClientFactory;
			_logger = logger;
			_bioStarConfig = bioStarConfig.Value;
			_localizer = localizer;
			_notificationSender = notificationSender;
			_memoryCache = memoryCache;
			_context = context;
			_userService = userService;
			_userManager = userManager;
		}

		public async Task<string?> GetAccessTokenAsync(bool forceLogin = false)
		{
			if (!forceLogin && _memoryCache.TryGetValue(AccessTokenCacheKey, out var accessToken))
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
				var userCreate = newUsers.Select(b => new User
				{
					LockoutEnabled = true,
					SecurityStamp = Guid.NewGuid().ToString(),
					EmailConfirmed = true,
					UserName = b.Email ?? $"bioStar_{b.UserId}",
					Email = b.Email,
					NormalizedUserName = b.Email?.ToUpper() ?? $"bioStar_{b.UserId}",
					NormalizedEmail = b.Email?.ToUpper(),
					FullName = b.Name ?? $"bioStar_{b.UserId}",
					UserStatus = UserStatus.ACTIVE,
					RemainingLeaveMinutes = 0,
					BioStarUserId = b.UserId
				}).ToList();

				foreach (var user in userCreate)
				{
					user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, UserConst.DefaultPassword);
					await _userService.GenerateAvatarForUser(user);
				}

				await _context.AddRangeAsync(userCreate);

				await _context.SaveChangesAsync();
			}

			return new BioStarSyncAllUsersResponse
			{
				LoadCount = bioUsers.Count,
				NewCount = newUsers.Count
			};
		}

		public async Task<List<BioStarEvent>> GetHistoricalEvents(GetHistoricalEventsRequest request)
		{
			string baseUrl = _bioStarConfig.BioStarApiUrl + BioStarConst.GET_EVENTS_API_URL;

			var response = await ExecuteWithRetryAsync<BioStarGetEventsResponse>(client =>
				client.PostAsync(baseUrl, new StringContent(JsonSerializer.Serialize(new
				{
					Query = new
					{
						limit = 9999,
						conditions = new[]
						{
							new {
								column = "datetime",
								@operator = 3,
								values = new object[] { request.From, request.To }
							},
							new {
								column = "event_type_id.code",
								@operator = 0,
								values = new object[] { BioStarEventTypeEnum.IDENTIFY_SUCCESS_FINGERPRINT }
							},
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

			return response.EventCollection.Rows ?? [];
		}

		public async Task<BioStarSyncHistoricalEventsResponse> SyncHistoricalEvents(GetHistoricalEventsRequest request)
		{
			// list events
			var bioStarEvents = await GetHistoricalEvents(request);

			List<string> uniqueBioStarIds = bioStarEvents.Where(e => e.UserId?.UserId != null).Select(e => e.UserId!.UserId!).Distinct().ToList();

			// UserIds map
			var userIdMap = await GetUserIdsByBioStarIds(uniqueBioStarIds);

			// list timesheet find in timekeeping machine
			List<Timesheet> timesheets = bioStarEvents.Where(e => e.UserId?.UserId != null)
				.GroupBy(e => new { UserId = e.UserId!.UserId!, Date = e.Datetime.Date })
				.Select(b =>
				{
					if (!userIdMap.TryGetValue(b.Key.UserId, out var userId))
						return null;

					var eventSort = b.OrderBy(e => e.Datetime);

					return new Timesheet
					{
						Date = b.Key.Date,
						StartTime = eventSort.First().Datetime,
						EndTime = eventSort.Count() > 1 ? eventSort.Last().Datetime : null,
						UserId = userId

					};
				}).Where(t => t != null).Cast<Timesheet>().ToList();

			// find existing timesheets
			var keys = timesheets.Select(t => new { t.UserId, Date = t.Date.Date }).ToList();
			var predicate = PredicateBuilder.New<Timesheet>(false);

			foreach (var key in keys)
			{
				var tempKey = key;
				predicate = predicate.Or(t => t.UserId == tempKey.UserId && t.Date.Date == tempKey.Date);
			}

			var existingTimesheets = await _context.Timesheets
					.AsExpandable()
					.Where(predicate)
					.ToListAsync();

			// map existing timesheets
			var timesheetExistingMap = existingTimesheets.ToDictionary(t => (t.UserId, t.Date));

			var toUpdate = new List<Timesheet>();
			var toAdd = new List<Timesheet>();

			// update or add timesheets
			foreach (var timesheet in timesheets)
			{
				var key = (timesheet.UserId, timesheet.Date);
				if (timesheetExistingMap.TryGetValue(key, out var existing))
				{
					// update timesheet
					if (existing.StartTime != timesheet.StartTime || existing.EndTime != timesheet.EndTime)
					{
						existing.StartTime = timesheet.StartTime;
						existing.EndTime = timesheet.EndTime;
						toUpdate.Add(existing);
					}
				}
				else
				{
					toAdd.Add(timesheet);
				}
			}

			if (toAdd.Count != 0) await _context.Timesheets.AddRangeAsync(toAdd);
			if (toUpdate.Count != 0) _context.Timesheets.UpdateRange(toUpdate);

			await _context.SaveChangesAsync();

			return new BioStarSyncHistoricalEventsResponse
			{
				LoadCount = bioStarEvents.Count,
				NewCount = toAdd.Count,
				UpdateCount = toUpdate.Count,
			};
		}

		public async Task SyncMessageEvent(string message)
		{
			try
			{
				var result = JsonSerializer.Deserialize<BioStarMessageEventResponse>(message, new JsonSerializerOptions { PropertyNameCaseInsensitive = true, PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower });

				if (FINGERPRINT_SUCCESS_EVENT_CODES.Contains(result?.Event?.EventTypeId?.Code ?? "") || result?.Event?.UserId?.UserId == null) return;

				var userId = await GetUserIdByBioStarId(result.Event.UserId.UserId);

				if (userId == null)
				{
					_logger.LogWarning("User ID not found for BioStar ID: {BioStarId}", result.Event.UserId.UserId);
					return;
				}

				Timesheet? exitingTimesheet = await _context.Timesheets
					.FirstOrDefaultAsync(t => t.UserId == userId && t.Date == result.Event.Datetime.Date);

				if (exitingTimesheet != null)
				{
					if (exitingTimesheet.StartTime == null)
					{
						exitingTimesheet.StartTime = result.Event.Datetime;
					}
					else
					{
						exitingTimesheet.EndTime = result.Event.Datetime;
					}
				}
				else
				{
					exitingTimesheet = new Timesheet
					{
						UserId = userId,
						Date = result.Event.Datetime.Date,
						StartTime = result.Event.Datetime,
						EndTime = null
					};
					await _context.Timesheets.AddAsync(exitingTimesheet);
				}

				await _context.SaveChangesAsync();

				// Only send data when there is a checkin event
				if (exitingTimesheet.EndTime == null)
				{
					await _notificationSender.SendToUserAsync(userId.Value.ToString(), new BaseNotificationHubMessage
					{
						Data = new CheckInEventMessageDto
						{
							UserId = userId.Value.ToString(),
							CheckInTime = exitingTimesheet.StartTime ?? DateTime.UtcNow
						}
					});
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Failed to deserialize response to type {TypeName}", typeof(BioStarMessageEventResponse).Name);
			}
		}

		public async Task<Guid?> GetUserIdByBioStarId(string bioStarId)
		{
			var user = await _context.Users.FirstOrDefaultAsync(u => u.BioStarUserId == bioStarId);
			return user?.Id;
		}

		public async Task<Dictionary<string, Guid>> GetUserIdsByBioStarIds(List<string> bioStarId)
		{
			var userIdMap = new Dictionary<string, Guid?>();

			var users = await _context.Users
				.Where(u => u.BioStarUserId != null && bioStarId.Contains(u.BioStarUserId))
				.ToListAsync();

			return users.Where(u => u.BioStarUserId != null).ToDictionary(u => u.BioStarUserId!, u => u.Id);
		}

		public async Task<D> ExecuteWithRetryAsync<D>(Func<HttpClient, Task<HttpResponseMessage>> apiCall)
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