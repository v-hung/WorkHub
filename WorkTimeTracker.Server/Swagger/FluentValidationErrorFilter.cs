using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

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
							Schema = new OpenApiSchema
							{
								Type = "object",
								Properties = new Dictionary<string, OpenApiSchema>
								{
									["type"] = new OpenApiSchema { Type = "string", Example = new OpenApiString("https://tools.ietf.org/html/rfc9110#section-15.5.1") },
									["title"] = new OpenApiSchema { Type = "string", Example = new OpenApiString("One or more validation errors occurred.") },
									["status"] = new OpenApiSchema { Type = "integer", Example = new OpenApiInteger(400) },
									["errors"] = new OpenApiSchema
									{
										Type = "object",
										AdditionalProperties = new OpenApiSchema { Type = "array", Items = new OpenApiSchema { Type = "string" } }
									}
								}
							}
						}
					}
				});
			}
		}
	}
}