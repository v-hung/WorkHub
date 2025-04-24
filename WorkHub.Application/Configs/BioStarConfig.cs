namespace WorkHub.Application.Configs
{
	public class BioStarConfig
	{
		public required string Host { get; set; }

		public required int Port { get; set; }

		public required string Username { get; set; }

		public required string Password { get; set; }

		public string BioStarApiUrl => $"https://{Host}:{Port}";

		public string BioStarWebsocketUrl => $"wss://{Host}:{Port}/wsapi";
	}
}