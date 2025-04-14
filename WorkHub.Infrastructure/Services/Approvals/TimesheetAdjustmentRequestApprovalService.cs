using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Approvals
{
	public class TimesheetAdjustmentRequestApprovalService : RequestApprovalService<TimesheetAdjustmentRequest>
	{
		private readonly IUserService _userService;

		public TimesheetAdjustmentRequestApprovalService(ApplicationDbContext context, IStringLocalizer<TimesheetAdjustmentRequestApprovalService> localizer, IMapper mapper, IUserService userService) : base(context, localizer, mapper)
		{
			_userService = userService;
		}

		public override async Task<D> ApproveRequestAsync<D>(int requestId) where D : class
		{
			TimesheetAdjustmentRequest request = await base.ApproveRequestAsync<TimesheetAdjustmentRequest>(requestId);

			Timesheet timesheet = await _context.Timesheets.FindAsync(request.TimesheetId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Timesheet not found."]);

			if (timesheet.EndTime != null)
			{
				var workTime = (await _context.Users.Select(u => new { Id = u.Id, WorkTime = u.WorkTime }).FirstOrDefaultAsync(u => u.Id == timesheet.UserId))?.WorkTime ?? new WorkTime();

				int breakMinutes = (int)TimesheetUtils.CalculateWorkTime(request.BreakStartDate, request.BreakEndDate, workTime).TotalMinutes;

				int workMinutes = (int)TimesheetUtils.CalculateWorkTime(request.CheckIn, request.CheckOut, workTime).TotalMinutes;

				timesheet.StartTime = request.CheckIn;
				timesheet.EndTime = request.CheckOut;
				timesheet.WorkedMinutes = workMinutes > breakMinutes ? workMinutes - breakMinutes : 0;

				_context.Timesheets.Update(timesheet);
				await _context.SaveChangesAsync();
			}

			return _mapper.Map<D>(request);
		}
	}
}