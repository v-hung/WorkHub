namespace WorkHub.Application.Models.BioStar
{
	public class BioStarUser
	{
		public required string UserId { get; set; }
		public string? Name { get; set; }
		public string? Gender { get; set; }
		public string? Phone { get; set; }
		public string? Email { get; set; }
		public DateTime? Birthday { get; set; }
		public bool? PhotoExists { get; set; }
		public string? LoginId { get; set; }
		public DateTime? ExpiryDatetime { get; set; }
		public bool? Disabled { get; set; }
		public bool? Expired { get; set; }
	}
}