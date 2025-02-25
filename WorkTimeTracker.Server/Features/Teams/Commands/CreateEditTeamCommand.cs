using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkTimeTracker.Server.Data;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Models.Identity;
using WorkTimeTracker.Server.Models.Organization;

namespace WorkTimeTracker.Server.Features.Teams.Commands
{
	public class CreateEditTeamCommand : IRequest<TeamDto>
	{
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		[Required]
		public int TotalMembers { get; set; } = 0;

		[Required]
		public int CompletedProjects { get; set; } = 0;

		[Required]
		public int ActiveProjects { get; set; } = 0;

		// Navigation properties

		public Guid? ManagerId { get; set; }

		public IList<Guid> MemberIds { get; set; } = [];

		public List<int> ProjectIds { get; set; } = [];
	}

	public class CreateEditTeamCommandHandler : IRequestHandler<CreateEditTeamCommand, TeamDto>
	{
		private readonly ApplicationDbContext _context;

		private readonly IRepositoryService<Team> _repositoryService;

		private readonly IMapper _mapper;

		public CreateEditTeamCommandHandler(ApplicationDbContext context, IMapper mapper, IRepositoryService<Team> repositoryService)
		{
			_context = context;
			_mapper = mapper;
			_repositoryService = repositoryService;
		}

		public async Task<TeamDto> Handle(CreateEditTeamCommand request, CancellationToken cancellationToken)
		{
			var team = _mapper.Map<Team>(request);

			_repositoryService.UpdateRelatedEntitiesAsync<User, IEntity<Guid>>(team, t => t.Members, request.MemberIds, request.Id);
		}
	}
}