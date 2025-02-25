using System.ComponentModel.DataAnnotations;
using System.Net;
using AutoMapper;
using MediatR;
using WorkTimeTracker.Server.Data;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Middlewares.Exceptions;
using WorkTimeTracker.Server.Models.Organization;

namespace WorkTimeTracker.Server.Features.Teams.Commands
{
	public class CreateEditTeamCommand : IRequest<TeamDto>
	{
		public int Id { get; set; } = default;

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

		private readonly IRepositoryService<Team, int> _repositoryService;

		private readonly IMapper _mapper;

		public CreateEditTeamCommandHandler(ApplicationDbContext context, IMapper mapper, IRepositoryService<Team, int> repositoryService)
		{
			_context = context;
			_mapper = mapper;
			_repositoryService = repositoryService;
		}

		public async Task<TeamDto> Handle(CreateEditTeamCommand request, CancellationToken cancellationToken)
		{
			var team = request.Id != 0
				? await _context.Teams.FindAsync(request.Id) ?? throw new BusinessException(HttpStatusCode.NotFound, "Team id not found")
				: _mapper.Map<Team>(request);

			await _repositoryService.UpdateRelatedEntitiesAsync(team, t => t.Members, request.MemberIds, request.Id);
			await _repositoryService.UpdateRelatedEntitiesAsync(team, t => t.Projects, request.ProjectIds, request.Id);

			await _context.SaveChangesAsync();

			return _mapper.Map<TeamDto>(team);
		}
	}
}