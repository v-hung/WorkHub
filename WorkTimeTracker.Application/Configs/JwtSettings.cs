namespace WorkTimeTracker.Application.Configs;

public class JwtSettings
{
    public required string Secret { get; set; }

    public required string RefreshTokenExpiryDays { get; set; }

    public required string TokenExpiryMinutes { get; set; }
}