using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Repositories
{
	public class RequestRepository : IRequestRepository
	{
		private readonly ApplicationDbContext _context;
		protected readonly IStringLocalizer<RequestRepository> _localizer;
		private readonly IMapper _mapper;

		public RequestRepository(ApplicationDbContext context, IStringLocalizer<RequestRepository> localizer, IMapper mapper)

		{
			_context = context;
			_localizer = localizer;
			_mapper = mapper;
		}

		public async Task<D> GetByIdAsync<D>(int id) where D : class
		{
			var request = await _context.Requests
				.Include(r => r.User)
				.ThenInclude(u => u != null ? u.WorkSchedule : null)
				.Include(r => r.Approver)
				.FirstOrDefaultAsync(r => r.Id == id) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			var notification = await _context.Notifications.FirstOrDefaultAsync(n => n.Category == NotificationCategory.REQUEST && n.RelatedEntityId == id.ToString());
			if (notification != null)
			{
				notification.IsRead = true;
				_context.Notifications.Update(notification);
				await _context.SaveChangesAsync();
			}

			return _mapper.Map<D>(request);
		}
	}
}