using WorkHub.Application.Models.BioStar;

namespace WorkHub.Application.Responses.BioStar
{
	public class BioStarGetUsersResponse
	{
		public required BioStarGetUsersResponseData UserCollection { get; set; }
	}

	public class BioStarGetUsersResponseData
	{
		public required int total { get; set; }
		public required List<BioStarUser> rows { get; set; } = [];
	}
}