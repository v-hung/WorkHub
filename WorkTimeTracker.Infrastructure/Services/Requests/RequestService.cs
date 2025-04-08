using System.Net;
using AutoMapper;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Requests
{
	public abstract class RequestService<TCreateRequest> : IRequestService<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		protected readonly ApplicationDbContext _context;
		protected readonly IMapper _mapper;
		protected readonly IStringLocalizer<RequestService<TCreateRequest>> _localizer;
		protected readonly ICurrentUserService _currentUserService;

		public RequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<RequestService<TCreateRequest>> localizer, ICurrentUserService currentUserService)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
			_currentUserService = currentUserService;
		}

		public async Task<D> CancelRequestAsync<D>(int requestId) where D : class
		{
			Request request = _context.Requests.Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);
			if (request.UserId != Guid.Parse(_currentUserService.UserId!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to cancel this request."]);
			}

			_context.Requests.Remove(request);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(request);
		}

		public abstract Task<D> CreateRequestAsync<D>(TCreateRequest request) where D : class;
	}
}