namespace WorkHub.Application.Models.BioStar
{
	public class BioStarEvent
	{
		public required string Id { get; set; }
		public required DateTime ServerDatetime { get; set; }
		public required DateTime Datetime { get; set; }
		public required string UserIdName { get; set; }
		public required string DeviceId { get; set; }
		public required string EventTypeId { get; set; }
	}
}