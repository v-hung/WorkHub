using MediatR;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Interfaces.Repositories;

namespace WorkHub.Application.Features.Requests.Queries
{
	public class GetRequestByIdQuery : IRequest<RequestCombinedDto>
	{
		public int Id { get; set; }
	}

	public class GetRequestByIdQueryHandler : IRequestHandler<GetRequestByIdQuery, RequestCombinedDto>
	{
		private readonly IRequestRepository _requestRepository;

		public GetRequestByIdQueryHandler(IRequestRepository requestRepository)
		{
			_requestRepository = requestRepository;
		}

		public async Task<RequestCombinedDto> Handle(GetRequestByIdQuery query, CancellationToken cancellationToken)
		{
			var data = await _requestRepository.GetByIdAsync<RequestCombinedDto>(query.Id);

			return data;
		}
	}

}