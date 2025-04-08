using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Renametimesheetproperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests");

            migrationBuilder.RenameColumn(
                name: "WorkMinutes",
                table: "Timesheets",
                newName: "WorkedMinutes");

            migrationBuilder.AlterColumn<Guid>(
                name: "TimesheetId",
                table: "Requests",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci",
                oldClrType: typeof(Guid),
                oldType: "char(36)")
                .OldAnnotation("Relational:Collation", "ascii_general_ci");

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

            migrationBuilder.RenameColumn(
                name: "WorkedMinutes",
                table: "Timesheets",
                newName: "WorkMinutes");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Timesheets_TimesheetId",
                table: "Requests",
                column: "TimesheetId",
                principalTable: "Timesheets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
