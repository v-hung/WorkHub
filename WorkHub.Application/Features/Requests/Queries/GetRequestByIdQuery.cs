using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Domain.Repositories;

namespace WorkHub.Application.Features.Requests.Queries
{
	public class GetRequestByIdQuery : IRequest<RequestCombinedDetailsDto>
	{
		public int Id { get; set; }
	}

	public class GetRequestByIdQueryHandler : IRequestHandler<GetRequestByIdQuery, RequestCombinedDetailsDto>
	{
		private readonly IRequestRepository _requestRepository;

		public GetRequestByIdQueryHandler(IRequestRepository requestRepository)
		{
			_requestRepository = requestRepository;
		}

		public async Task<RequestCombinedDetailsDto> Handle(GetRequestByIdQuery query, CancellationToken cancellationToken)
		{
			var data = await _requestRepository.GetByIdAsync<RequestCombinedDetailsDto>(query.Id);

			return data;
		}
	}

}