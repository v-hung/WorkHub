using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserMinimalWithWorkScheduleDto : UserMinimalDto
	{
		[Required]
		public WorkScheduleDto WorkSchedule { get; set; } = new WorkScheduleDto();
	}
}