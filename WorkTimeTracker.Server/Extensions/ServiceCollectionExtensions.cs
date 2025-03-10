

using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using WorkTimeTracker.Application.Configs;
using WorkTimeTracker.Application.Interfaces.Data;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Constants.Permission;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Infrastructure.Authorization;
using WorkTimeTracker.Infrastructure.Data;
using WorkTimeTracker.Infrastructure.Repositories;
using WorkTimeTracker.Infrastructure.Services;
using WorkTimeTracker.Server.Swagger;

namespace WorkTimeTracker.Server.Extensions;

static class ServiceCollectionExtensions
{
	public static void AddDatabase(this IServiceCollection services, IConfiguration configuration)
	{
		var connectionString = configuration.GetConnectionString("DefaultConnection");
		services.AddDbContext<ApplicationDbContext>(options =>
				options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString),
						b => b.MigrationsAssembly("WorkTimeTracker.Infrastructure")))
				.AddTransient<IDatabaseSeeder, DatabaseSeeder>();
	}

	public static void AddCustomControllers(this IServiceCollection services)
	{
		services.AddControllers().AddJsonOptions(options =>
		{
			options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
			options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
		});
	}

	public static void AddIdentityConfiguration(this IServiceCollection services)
	{
		services.AddIdentity<User, Role>(options =>
		{
			options.SignIn.RequireConfirmedAccount = false;
			options.Password.RequireDigit = false;
			options.Password.RequiredLength = 6;
			options.Password.RequireNonAlphanumeric = false;
			options.Password.RequireUppercase = false;
			options.Password.RequireLowercase = false;
			options.Password.RequiredUniqueChars = 1;
		})
		.AddEntityFrameworkStores<ApplicationDbContext>();
	}

	public static void AddJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
	{
		var jwtSettings = configuration.GetSection("Jwt");

		services.Configure<JwtSettings>(jwtSettings);

		var key = Encoding.ASCII.GetBytes(jwtSettings.Get<JwtSettings>()!.Secret);

		services.AddAuthentication(options =>
		{
			options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
			options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
		})
		.AddJwtBearer(options =>
		{
			options.TokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = new SymmetricSecurityKey(key),
				ValidateIssuer = false,
				ValidateAudience = false,
				RoleClaimType = ClaimTypes.Role,
				ClockSkew = TimeSpan.Zero
			};

			options.Events = new JwtBearerEvents
			{
				OnMessageReceived = context =>
				{
					var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

					if (string.IsNullOrEmpty(token))
					{
						token = context.Request.Cookies["token"];
					}

					context.Token = token;
					return Task.CompletedTask;
				}
			};
		});

		services.AddAuthorization(options =>
		{
			// Here I stored necessary permissions/roles in a constant
			foreach (var permission in Permissions.GetRegisteredPermissions())
			{
				options.AddPolicy(permission, policy => policy.RequireClaim(ApplicationClaimTypes.Permission, permission));
			}
		});
	}

	public static void AddApplicationServices(this IServiceCollection services)
	{
		// services.AddAutoMapper(Assembly.GetExecutingAssembly());
		// services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		// services.AddSingleton<IStringLocalizerFactory, ResourceManagerStringLocalizerFactory>();
		// services.AddSingleton(typeof(IStringLocalizer<>), typeof(StringLocalizer<>));
		services.AddSingleton<IAuthorizationPolicyProvider, PermissionPolicyProvider>();

		services.AddScoped<IUserService, UserService>();
		services.AddScoped<IRoleService, RoleService>();
		services.AddScoped<IJwtTokenService, JwtTokenService>();
		services.AddScoped<ICurrentUserService, CurrentUserService>();
		services.AddScoped<IIdentityService, IdentityService>();
		services.AddScoped<IAuthorizationHandler, PermissionHandler>();
		services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));

		services.AddLocalization(options => options.ResourcesPath = "Resources");

	}

	public static void AddSwaggerDocumentation(this IServiceCollection services)
	{
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen(c =>
		{
			c.EnableAnnotations();

			c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
			{
				Name = "Authorization",
				Description = "Enter the Bearer Authorization string as following: `Bearer Generated-JWT-Token`",
				In = ParameterLocation.Header,
				Type = SecuritySchemeType.ApiKey,
				Scheme = "Bearer"
			});

			c.AddSecurityRequirement(new OpenApiSecurityRequirement
			{
				{
					new OpenApiSecurityScheme
					{
						Name = "Bearer",
						In = ParameterLocation.Header,
						Reference = new OpenApiReference
						{
								Id = "Bearer",
								Type = ReferenceType.SecurityScheme,
						}
					},
					new List<string>()
				}
			});

			c.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["controller"]}_{e.ActionDescriptor.RouteValues["action"]}");

			c.OperationFilter<SwaggerErrorResponseFilter>();
			c.SchemaFilter<SwaggerPermissionSchema>();
			c.OperationFilter<AddPermissionSchemaOperationFilter>();
			c.OperationFilter<FluentValidationErrorFilter>();
		});
	}
}