using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init13 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LeaveHours",
                table: "AspNetUsers",
                newName: "RemainingLeaveMinutes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RemainingLeaveMinutes",
                table: "AspNetUsers",
                newName: "LeaveHours");
        }
    }
}
