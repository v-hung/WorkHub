

using System.Reflection;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using WorkHub.Application.Configs;
using WorkHub.Application.Interfaces.Data;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Constants.Permission;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Infrastructure.Authorization;
using WorkHub.Infrastructure.Data;
using WorkHub.Infrastructure.Messaging;
using WorkHub.Infrastructure.Services;
using WorkHub.Infrastructure.Services.Templates;
using WorkHub.Server.Swagger;
using WorkHub.Server.Converters;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Server.SignalR;

namespace WorkHub.Server.Extensions;

static class ServiceCollectionExtensions
{
	public static void AddDatabase(this IServiceCollection services, IConfiguration configuration)
	{
		var connectionString = configuration.GetConnectionString("DefaultConnection");
		services.AddDbContext<ApplicationDbContext>(options =>
				options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString),
						b => b.MigrationsAssembly("WorkHub.Infrastructure")))
				.AddTransient<IDatabaseSeeder, DatabaseSeeder>();
	}

	public static void AddCustomControllers(this IServiceCollection services)
	{
		services.AddControllers().AddJsonOptions(options =>
		{
			options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
			options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
			options.JsonSerializerOptions.Converters.Add(new UtcDateTimeConverter());
		});
	}

	public static void AddConfigs(this IServiceCollection services, IConfiguration configuration)
	{
		services.Configure<JwtConfig>(configuration.GetSection("Jwt"));
		services.Configure<EmailConfig>(configuration.GetSection("Email"));
		services.Configure<BioStarConfig>(configuration.GetSection("BioStar"));
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
		var jwtConfig = configuration.GetSection("Jwt");

		var key = Encoding.ASCII.GetBytes(jwtConfig.Get<JwtConfig>()!.Secret);

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
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
		services.AddHttpClient("IgnoreSsl")
			.ConfigurePrimaryHttpMessageHandler(() =>
				new HttpClientHandler
				{
					ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
				});
		services.AddMemoryCache();

		services.AddSingleton<IAuthorizationPolicyProvider, PermissionPolicyProvider>();
		services.AddSingleton<IEmailSenderQueue, EmailSenderQueue>();

		services.AddScoped<IUserService, UserService>();
		services.AddScoped<IRoleService, RoleService>();
		services.AddScoped<IJwtTokenService, JwtTokenService>();
		services.AddScoped<IIdentityService, IdentityService>();
		services.AddScoped<ICurrentUserService, CurrentUserService>();
		services.AddScoped<IAuthorizationHandler, PermissionHandler>();
		services.AddScoped<IEmailService, EmailService>();
		services.AddScoped<IEmailTemplateService, EmailTemplateService>();
		services.AddScoped<IUploadFile, UploadFile>();
		services.AddScoped<INotificationSender, NotificationSender>();

		services.AddHostedService<EmailSenderHostedService>();

		// add signalR
		services.AddSignalR(options =>
		{
			options.EnableDetailedErrors = true;
			options.MaximumReceiveMessageSize = 102400000; // 100MB
		});

		services.AddLocalization(options => options.ResourcesPath = "Resources");

	}

	public static void AddSwaggerDocumentation(this IServiceCollection services)
	{
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen(c =>
		{
			c.EnableAnnotations();
			c.UseOneOfForPolymorphism();
			c.UseAllOfForInheritance();
			c.SelectSubTypesUsing(type => type.Assembly.GetTypes().Where(t => t.BaseType == type && type.IsAbstract));

			c.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["controller"]}_{e.ActionDescriptor.RouteValues["action"]}");
			c.TagActionsBy(api => [api.GroupName ?? api.ActionDescriptor.RouteValues["controller"]]);
			c.DocInclusionPredicate((groupName, api) => true);

			// c.AddSignalRSwaggerGen();

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

			c.MapType<TimeSpan>(() => new OpenApiSchema
			{
				Type = "string",
				Example = new OpenApiString("00:00:00")
			});

			c.OperationFilter<SwaggerErrorResponseFilter>();
			c.SchemaFilter<SwaggerPermissionSchema>();
			c.OperationFilter<AddPermissionSchemaOperationFilter>();
			c.OperationFilter<FluentValidationErrorFilter>();
		});
	}
}