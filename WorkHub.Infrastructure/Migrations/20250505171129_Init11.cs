using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkHub.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Notifications",
                newName: "Category");

            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDate",
                table: "UserDetails",
                type: "datetime(6)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddColumn<string>(
                name: "RelatedEntityId",
                table: "Notifications",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RelatedEntityId",
                table: "Notifications");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Notifications",
                newName: "Type");

            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDate",
                table: "UserDetails",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)",
                oldNullable: true);
        }
    }
}
