
using WorkHub.Server.Extensions;
using WorkHub.Application.Extensions;
using WorkHub.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowAll", builder =>
	{
		builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
	});
});

builder.Services.AddCustomControllers();
builder.Services.AddSwaggerDocumentation();
builder.Services.AddDatabase(builder.Configuration);
builder.Services.AddIdentityConfiguration();
builder.Services.AddConfigs(builder.Configuration);
builder.Services.AddApplicationServices();
builder.Services.AddApplicationLayer();
builder.Services.AddInfrastructureLayer();
builder.Services.AddJwtAuthentication(builder.Configuration);

var app = builder.Build();

app.UseCustomMiddlewares();
app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
	app.UseSwaggerDocumentation();
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseRequestLocalizationByCulture();
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints();
app.MapFallbackToFile("/index.html");

app.Initialize(builder.Configuration);

app.Run();