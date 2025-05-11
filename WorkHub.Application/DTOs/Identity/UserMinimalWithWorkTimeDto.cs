using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Time;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserMinimalWithWorkTimeDto : UserMinimalDto
	{
		[Required]
		public WorkTimeDto WorkTime { get; set; } = new WorkTimeDto();
	}
}