using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using WorkTimeTracker.Application.Responses;

namespace WorkTimeTracker.Server.Swagger
{
	public class FluentValidationErrorFilter : IOperationFilter
	{
		public void Apply(OpenApiOperation operation, OperationFilterContext context)
		{
			if (!operation.Responses.ContainsKey("400"))
			{
				operation.Responses.Add("400", new OpenApiResponse
				{
					Description = "",
					Content = new Dictionary<string, OpenApiMediaType>
					{
						["application/json"] = new OpenApiMediaType
						{
							Schema = context.SchemaGenerator.GenerateSchema(typeof(ErrorValidateResponse), context.SchemaRepository)
						}
					}
				});
			}
		}
	}
}