namespace Timesheet.Server.Requests.Identity;

public class RefreshTokenRequest
{
    public required string RefreshToken { get; set; }
}