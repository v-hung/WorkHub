using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "NewCheckIn",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "NewCheckOut",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "OldCheckIn",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "OldCheckOut",
                table: "Requests");

            migrationBuilder.RenameColumn(
                name: "WorkDate",
                table: "Requests",
                newName: "TimesheetRequest_BreakStartDate");

            migrationBuilder.RenameColumn(
                name: "StartDate",
                table: "Requests",
                newName: "TimesheetRequest_BreakEndDate");

            migrationBuilder.RenameColumn(
                name: "EndDate",
                table: "Requests",
                newName: "CheckOut");

            migrationBuilder.AlterColumn<Guid>(
                name: "TimesheetId",
                table: "Requests",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                collation: "ascii_general_ci",
                oldClrType: typeof(Guid),
                oldType: "char(36)",
                oldNullable: true)
                .OldAnnotation("Relational:Collation", "ascii_general_ci");

            migrationBuilder.AddColumn<DateTime>(
                name: "BreakEndDate",
                table: "Requests",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "BreakStartDate",
                table: "Requests",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CheckIn",
                table: "Requests",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests",
                column: "TimesheetId",
                principalTable: "Timesheets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "BreakEndDate",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "BreakStartDate",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "CheckIn",
                table: "Requests");

            migrationBuilder.RenameColumn(
                name: "TimesheetRequest_BreakStartDate",
                table: "Requests",
                newName: "WorkDate");

            migrationBuilder.RenameColumn(
                name: "TimesheetRequest_BreakEndDate",
                table: "Requests",
                newName: "StartDate");

            migrationBuilder.RenameColumn(
                name: "CheckOut",
                table: "Requests",
                newName: "EndDate");

            migrationBuilder.AlterColumn<Guid>(
                name: "TimesheetId",
                table: "Requests",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci",
                oldClrType: typeof(Guid),
                oldType: "char(36)")
                .OldAnnotation("Relational:Collation", "ascii_general_ci");

            migrationBuilder.AddColumn<TimeSpan>(
                name: "NewCheckIn",
                table: "Requests",
                type: "time(6)",
                nullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "NewCheckOut",
                table: "Requests",
                type: "time(6)",
                nullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "OldCheckIn",
                table: "Requests",
                type: "time(6)",
                nullable: true);

            migrationBuilder.AddColumn<TimeSpan>(
                name: "OldCheckOut",
                table: "Requests",
                type: "time(6)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests",
                column: "TimesheetId",
                principalTable: "Timesheets",
                principalColumn: "Id");
        }
    }
}
