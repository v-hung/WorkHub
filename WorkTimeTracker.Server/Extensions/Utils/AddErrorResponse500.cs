
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using WorkTimeTracker.Server.Responses;

namespace WorkTimeTracker.Server.Extensions.Utils
{
	public class AddErrorResponse500 : IOperationFilter
	{
		public void Apply(OpenApiOperation operation, OperationFilterContext context)
		{
			if (!operation.Responses.ContainsKey("500"))
			{
				operation.Responses.Add("500", new OpenApiResponse
				{
					Description = "Internal Server Error",
					Content = new Dictionary<string, OpenApiMediaType>
					{
						["application/json"] = new OpenApiMediaType
						{
							Schema = context.SchemaGenerator.GenerateSchema(typeof(ErrorResponse), context.SchemaRepository)
						}
					}
				});
			}
		}
	}
}