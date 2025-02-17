using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkTimeTracker.Server.Requests.Identity
{
	public class ChangePasswordRequest
	{
		[Required]
		public required string Password { get; set; }

		[Required]
		public required string NewPassword { get; set; }
	}
}