using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TimesheetRequest_BreakStartDate",
                table: "Requests",
                newName: "TimesheetAdjustmentRequest_BreakStartDate");

            migrationBuilder.RenameColumn(
                name: "TimesheetRequest_BreakEndDate",
                table: "Requests",
                newName: "TimesheetAdjustmentRequest_BreakEndDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TimesheetAdjustmentRequest_BreakStartDate",
                table: "Requests",
                newName: "TimesheetRequest_BreakStartDate");

            migrationBuilder.RenameColumn(
                name: "TimesheetAdjustmentRequest_BreakEndDate",
                table: "Requests",
                newName: "TimesheetRequest_BreakEndDate");
        }
    }
}
