using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.DTOs.User;
namespace WorkTimeTracker.Application.DTOs.Work
{
    public class ProjectDto : ProjectMinimalDto
    {

        public TeamMinimalDto? Team { get; set; }

        public UserMinimalDto? Manager { get; set; }

        public IList<UserMinimalDto> Members { get; set; } = [];
    }
}