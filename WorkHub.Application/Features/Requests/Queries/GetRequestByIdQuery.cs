using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Features.Requests.Queries
{
	public class GetRequestByIdQuery<D> : IRequest<D> where D : class, IEntity<int>
	{
		public int Id { get; set; }
	}

	public class GetRequestByIdQueryHandler<D> : IRequestHandler<GetRequestByIdQuery<D>, D> where D : class, IEntity<int>
	{
		private readonly IRepository<Request, int> _repository;

		public GetRequestByIdQueryHandler(IRepository<Request, int> repository)
		{
			_repository = repository;
		}

		public async Task<D> Handle(GetRequestByIdQuery<D> query, CancellationToken cancellationToken)
		{
			var data = await _repository.GetByIdAsync<D, int>(query.Id);

			return data;
		}
	}

}