using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services
{
	public class ApprovalService : IApprovalService
	{
		private readonly ApplicationDbContext _context;
		private readonly IApprovalService _approvalService;
		protected readonly IStringLocalizer<ApprovalService> _localizer;
		protected readonly IMapper _mapper;

		public ApprovalService(ApplicationDbContext context, IApprovalService approvalService, IStringLocalizer<ApprovalService> localizer, IMapper mapper)
		{
			_context = context;
			_approvalService = approvalService;
			_localizer = localizer;
			_mapper = mapper;
		}

		public async Task<D> ApproveRequestAsync<D>(string requestId) where D : class
		{
			Request request = _context.Requests.Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await _approvalService.CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedById.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.APPROVED;
			_context.Requests.Update(request);

			await _context.SaveChangesAsync();
			return _mapper.Map<D>(request);
		}

		public async Task<bool> CanApproveRequestAsync(string userId, string approverId)
		{
			return await _context.Users
					.AnyAsync(u => u.SupervisorId == Guid.Parse(approverId) && u.Id == Guid.Parse(userId));
		}

		public async Task<D> RejectRequestAsync<D>(string requestId) where D : class
		{
			Request request = _context.Requests.Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await _approvalService.CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedById.ToString()!))
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