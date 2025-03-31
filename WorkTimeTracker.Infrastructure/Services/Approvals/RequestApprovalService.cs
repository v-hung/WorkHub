using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Approvals
{
	public abstract class RequestApprovalService<TRequest> : IRequestApprovalService<TRequest> where TRequest : Request
	{
		protected readonly ApplicationDbContext _context;
		protected readonly IStringLocalizer<RequestApprovalService<TRequest>> _localizer;
		protected readonly IMapper _mapper;

		public RequestApprovalService(ApplicationDbContext context, IStringLocalizer<RequestApprovalService<TRequest>> localizer, IMapper mapper)
		{
			_context = context;
			_localizer = localizer;
			_mapper = mapper;
		}

		public async Task<bool> CanApproveRequestAsync(string userId, string approverId)
		{
			return await _context.Users
				.AnyAsync(u => u.SupervisorId == Guid.Parse(approverId) && u.Id == Guid.Parse(userId));
		}

		public virtual async Task<D> ApproveRequestAsync<D>(int requestId) where D : class
		{
			TRequest request = await _context.Set<TRequest>().FindAsync(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedId.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.APPROVED;
			_context.Requests.Update(request);

			await _context.SaveChangesAsync();
			return _mapper.Map<D>(request);
		}

		public async Task<D> RejectRequestAsync<D>(int requestId) where D : class
		{
			TRequest request = _context.Set<TRequest>().Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedId.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.REJECTED;
			_context.Requests.Update(request);

			await _context.SaveChangesAsync();
			return _mapper.Map<D>(request);
		}
	}
}