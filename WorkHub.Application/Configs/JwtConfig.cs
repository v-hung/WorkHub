namespace WorkHub.Application.Configs;

public class JwtConfig
{
	public required string Secret { get; set; }

	public required string RefreshTokenExpiryDays { get; set; }

	public required string TokenExpiryMinutes { get; set; }
}