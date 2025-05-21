using Microsoft.AspNetCore.Http;
using WorkHub.Application.Models.Files;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IUploadFile
	{
		Task<FileInformation> UploadSingleAsync(IFormFile file, string? path = null);

		Task<FileInformation> UploadSingleAsync(byte[] bytes, string? path = null, string? fileName = null);

		Task<List<FileInformation>> UploadMultipleAsync(List<IFormFile> files, string? path = null);

		Task<List<FileInformation>> UploadMultipleAsync(List<byte[]> bytes, string? path = null);

		void DeleteFile(string path);
	}
}