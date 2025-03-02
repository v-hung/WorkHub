
using WorkTimeTracker.Server.Extensions;
using WorkTimeTracker.Application.Extensions;
using WorkTimeTracker.Infrastructure.Extensions;

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
builder.Services.AddApplicationLayer();
builder.Services.AddInfrastructureLayer();
builder.Services.AddApplicationServices();
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
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Initialize(builder.Configuration);

app.Run();