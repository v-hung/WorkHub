using System.Net;
using MediatR;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Misc;

namespace WorkHub.Application.Features.Notifications.Queries
{
	public class GetUnreadCountQuery : IRequest<int>
	{

	}

	public class GetUnreadCountQueryHandler : IRequestHandler<GetUnreadCountQuery, int>
	{
		private readonly ICurrentUserService _currentUserService;
		private readonly IRepository<Notification, int> _repository;

		public GetUnreadCountQueryHandler(ICurrentUserService currentUserService, IRepository<Notification, int> repository)
		{
			_currentUserService = currentUserService;
			_repository = repository;
		}

		public async Task<int> Handle(GetUnreadCountQuery request, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			return await _repository.CountAsync(v => Guid.Parse(_currentUserService.UserId) == v.UserId && !v.IsRead);
		}
	}
}