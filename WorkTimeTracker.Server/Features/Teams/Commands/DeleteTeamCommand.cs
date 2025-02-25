using System.ComponentModel.DataAnnotations;
using System.Net;
using MediatR;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Server.Data;
using WorkTimeTracker.Server.Middlewares.Exceptions;

namespace WorkTimeTracker.Server.Features.Teams.Commands
{
	public class DeleteTeamCommand : IRequest
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteTeamCommandHandler : IRequestHandler<DeleteTeamCommand>
	{
		private readonly ApplicationDbContext _context;
		private readonly IStringLocalizer<DeleteTeamCommandHandler> _localizer;

		public DeleteTeamCommandHandler(ApplicationDbContext context, IStringLocalizer<DeleteTeamCommandHandler> localizer)
		{
			_context = context;
			_localizer = localizer;
		}

		public async Task<Unit> Handle(DeleteTeamCommand request, CancellationToken cancellationToken)
		{
			var team = await _context.Teams.FindAsync(request.Id) ?? throw new BusinessException(HttpStatusCode.NotFound, "");

			_context.Teams.Remove(team);

			await _context.SaveChangesAsync();

			return Unit.Value;
		}
	}
}