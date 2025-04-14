namespace WorkHub.Application.Configs
{
	public class EmailConfig
	{
		public required string Host { get; set; }

		public required int Port { get; set; }

		public required string Name { get; set; }

		public required string Username { get; set; }

		public required string Password { get; set; }
	}
}