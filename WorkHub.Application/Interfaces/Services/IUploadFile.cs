using Microsoft.AspNetCore.Http;
using WorkHub.Application.Models.Files;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IUploadFile
	{
		Task<FileInformation> UploadSingle(IFormFile file, string? path = null);

		Task<List<FileInformation>> UploadMultiple(List<IFormFile> files, string? path = null);

		void DeleteFile(string path);
	}
}