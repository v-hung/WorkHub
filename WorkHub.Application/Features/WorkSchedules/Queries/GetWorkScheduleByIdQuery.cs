using MediatR;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Queries
{
	public class GetWorkScheduleByIdQuery : IRequest<WorkScheduleDetailsDto>
	{
		public int Id;

		public GetWorkScheduleByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetWorkScheduleByIdQueryHandler : IRequestHandler<GetWorkScheduleByIdQuery, WorkScheduleDetailsDto>
	{
		private readonly IRepository<WorkSchedule, int> _repositoryService;

		private readonly IStringLocalizer<GetWorkScheduleByIdQueryHandler> _localizer;

		public GetWorkScheduleByIdQueryHandler(IRepository<WorkSchedule, int> repositoryService, IStringLocalizer<GetWorkScheduleByIdQueryHandler> localizer)
		{
			_repositoryService = repositoryService;
			_localizer = localizer;
		}

		public async Task<WorkScheduleDetailsDto> Handle(GetWorkScheduleByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetByIdAsync<WorkScheduleDetailsDto, int>(query.Id);
		}
	}
}