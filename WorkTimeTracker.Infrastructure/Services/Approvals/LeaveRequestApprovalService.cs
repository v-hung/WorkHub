using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Utils;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Entities.Time;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Approvals
{
	public class LeaveRequestApprovalService : RequestApprovalService<LeaveRequest>
	{
		public LeaveRequestApprovalService(ApplicationDbContext context, IStringLocalizer<LeaveRequestApprovalService> localizer, IMapper mapper) : base(context, localizer, mapper)
		{
		}

		public override async Task<D> ApproveRequestAsync<D>(int requestId) where D : class
		{
			LeaveRequest request = await base.ApproveRequestAsync<LeaveRequest>(requestId);

			Timesheet timesheet = await _context.Timesheets.FindAsync(request.TimesheetId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Timesheet not found."]);

			if (timesheet.EndTime != null)
			{
				var workTime = (await _context.Users.Select(u => new { Id = u.Id, WorkTime = u.WorkTime }).FirstOrDefaultAsync(u => u.Id == timesheet.UserId))?.WorkTime ?? new WorkTime();

				int breakMinutes = (int)TimesheetUtils.CalculateWorkTime(request.BreakStartDate, request.BreakEndDate, workTime).TotalMinutes;

				int workMinutes = (int)TimesheetUtils.CalculateWorkTime(timesheet.StartTime, timesheet.EndTime!.Value, workTime).TotalMinutes;

				timesheet.WorkMinutes = workMinutes > breakMinutes ? workMinutes - breakMinutes : 0;

				_context.Timesheets.Update(timesheet);
				await _context.SaveChangesAsync();
			}

			return _mapper.Map<D>(request);
		}
	}
}