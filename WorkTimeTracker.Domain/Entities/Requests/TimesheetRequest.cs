using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Requests
{
    public class TimesheetRequest : Request
    {
        [Required]
        public DateTime WorkDate { get; set; }

        public TimeSpan? OldCheckIn { get; set; }
        public TimeSpan? OldCheckOut { get; set; }
        public TimeSpan? NewCheckIn { get; set; }
        public TimeSpan? NewCheckOut { get; set; }
    }
}