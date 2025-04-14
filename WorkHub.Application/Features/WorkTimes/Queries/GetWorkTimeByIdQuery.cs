using MediatR;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Features.WorkTimes.Queries
{
	public class GetWorkTimeByIdQuery : IRequest<WorkTimeDto>
	{
		public int Id;

		public GetWorkTimeByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetWorkTimeByIdQueryHandler : IRequestHandler<GetWorkTimeByIdQuery, WorkTimeDto>
	{
		private readonly IRepository<WorkTime, int> _repositoryService;

		private readonly IStringLocalizer<GetWorkTimeByIdQueryHandler> _localizer;

		public GetWorkTimeByIdQueryHandler(IRepository<WorkTime, int> repositoryService, IStringLocalizer<GetWorkTimeByIdQueryHandler> localizer)
		{
			_repositoryService = repositoryService;
			_localizer = localizer;
		}

		public async Task<WorkTimeDto> Handle(GetWorkTimeByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetByIdAsync<WorkTimeDto, int>(query.Id);
		}
	}
}