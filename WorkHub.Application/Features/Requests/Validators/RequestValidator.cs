using System.Reflection;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Features.Requests.DTOs;

namespace WorkHub.Application.Features.Requests.Validators
{
	public abstract class RequestValidator<TCreateRequest> : IRequestValidator<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		private readonly IStringLocalizer _localizer;

		public RequestValidator(IStringLocalizerFactory localizerFactory)
		{
			_localizer = localizerFactory.Create("Repositories.Features.Requests.Validators.RequestValidator", Assembly.GetExecutingAssembly().GetName().Name ?? "");
		}
		public abstract void Validate(TCreateRequest request);
	}
}