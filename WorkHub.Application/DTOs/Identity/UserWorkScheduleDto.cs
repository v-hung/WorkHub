using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserWorkScheduleDto : UserReferenceDto
	{
		[Required]
		public WorkScheduleDetailsDto WorkSchedule { get; set; } = new WorkScheduleDetailsDto();
	}
}