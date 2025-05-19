using Microsoft.Extensions.Localization;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Infrastructure.Services.Requests
{
	public class RequestService : BaseRequestService<CreateRequestDto>
	{
		public RequestService(RequestServiceDependencies deps, IStringLocalizerFactory localizerFactory) : base(deps, localizerFactory)
		{
		}

		public override Task<D> CreateRequestAsync<D>(CreateRequestDto request)
		{
			throw new NotImplementedException();
		}
	}
}