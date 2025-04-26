namespace WorkHub.Application.Models.BioStar
{
	public class BioStarEventType
	{
		public string? Code { get; set; }
	}

	public enum BioStarEventTypeEnum
	{
		IDENTIFY_SUCCESS_FINGERPRINT = 4865,
		VERIFY_SUCCESS_CARD = 4102
	}
}