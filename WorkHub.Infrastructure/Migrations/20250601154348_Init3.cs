using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkHub.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimesheetAdjustmentRequest_BreakEndDate",
                table: "requests");

            migrationBuilder.DropColumn(
                name: "TimesheetAdjustmentRequest_BreakStartDate",
                table: "requests");

            migrationBuilder.AddColumn<int>(
                name: "DurationMinutes",
                table: "requests",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DurationMinutes",
                table: "requests");

            migrationBuilder.AddColumn<DateTime>(
                name: "TimesheetAdjustmentRequest_BreakEndDate",
                table: "requests",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "TimesheetAdjustmentRequest_BreakStartDate",
                table: "requests",
                type: "datetime(6)",
                nullable: true);
        }
    }
}
