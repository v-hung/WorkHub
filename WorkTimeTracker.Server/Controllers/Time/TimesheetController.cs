using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace WorkTimeTracker.Server.Controllers.Time
{
	[Route("api/timesheets")]
	public class TimesheetController : BaseApiController<TimesheetController>
	{
		private readonly IStringLocalizer<TimesheetController> _localizer;

		public TimesheetController(IStringLocalizer<TimesheetController> localizer)
		{
			_localizer = localizer;
		}

		[HttpGet]
		public String test()
		{
			return _localizer["EntityNotFound", "Team"];
		}
	}
}