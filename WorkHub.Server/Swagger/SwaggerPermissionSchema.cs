using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using WorkHub.Domain.Constants.Permission;

namespace WorkHub.Server.Swagger
{
	public class SwaggerPermissionSchema : ISchemaFilter
	{
		public void Apply(OpenApiSchema schema, SchemaFilterContext context)
		{
			if (context.Type == typeof(Permissions))
			{
				var permissions = Permissions.GetRegisteredPermissions();
				schema.Enum = permissions.Select(x => new OpenApiString(x))
						.ToList<IOpenApiAny>();
				schema.Type = "string";
				schema.Format = null;
			}
		}
	}

	public class AddPermissionSchemaOperationFilter : IOperationFilter
	{
		public void Apply(OpenApiOperation operation, OperationFilterContext context)
		{
			var schemaRepository = context.SchemaRepository;

			if (!schemaRepository.Schemas.ContainsKey("Permission"))
			{
				var schema = new OpenApiSchema
				{
					Type = "string",
					Enum = Permissions.GetRegisteredPermissions()
								.Select(x => new OpenApiString(x))
								.ToList<IOpenApiAny>()
				};
				schemaRepository.Schemas.Add("Permission", schema);
			}
		}
	}
}