using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Timesheets");

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndTime",
                table: "Timesheets",
                type: "datetime(6)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddColumn<Guid>(
                name: "TimesheetId",
                table: "Requests",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.CreateIndex(
                name: "IX_Requests_TimesheetId",
                table: "Requests",
                column: "TimesheetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests",
                column: "TimesheetId",
                principalTable: "Timesheets",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_TimesheetId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "TimesheetId",
                table: "Requests");

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndTime",
                table: "Timesheets",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Timesheets",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
