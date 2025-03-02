using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Domain.Entities.Identity
{
    public class UserDetail : Entity<int>
    {

        public DateTime BirthDate { get; set; }

        public bool Gender { get; set; }

        public string? PermanentAddress { get; set; }

        public string? ContactAddress { get; set; }

        public int YearsOfWork { get; set; } = 0;

        // Navigation

        [ForeignKey("User")]
        public Guid? UserId { get; set; }

        public User? User { get; set; }
    }
}