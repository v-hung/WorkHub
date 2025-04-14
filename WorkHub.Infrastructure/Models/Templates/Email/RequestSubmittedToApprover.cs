namespace WorkHub.Infrastructure.Models.Templates.Email
{
	public class RequestSubmittedToApproverTemplate
	{
		public required string ApproverName { get; set; }
		public required string RequesterName { get; set; }
		public required string RequestId { get; set; }
		public required string RequestType { get; set; }
		public required string SubmittedDate { get; set; }
		public required string RequestLink { get; set; }
	}
}