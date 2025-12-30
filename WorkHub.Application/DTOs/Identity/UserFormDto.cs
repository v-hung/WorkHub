using WorkHub.Application.DTOs.Organization;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserFormDto : UserDetailsDto
	{
		public UserProfileDto? UserProfile { get; set; }

		public IList<TeamReferenceDto> ManagerTeams { get; set; } = [];
	}
}