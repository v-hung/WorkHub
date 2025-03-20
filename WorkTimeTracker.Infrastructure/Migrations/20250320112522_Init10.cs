using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkTimeTracker.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Device_DeviceCategories_DeviceCategoryId",
                table: "Device");

            migrationBuilder.DropForeignKey(
                name: "FK_Device_Device_DeviceId",
                table: "Device");

            migrationBuilder.DropForeignKey(
                name: "FK_DeviceCategories_AspNetUsers_AssignedUserId",
                table: "DeviceCategories");

            migrationBuilder.DropIndex(
                name: "IX_DeviceCategories_AssignedUserId",
                table: "DeviceCategories");

            migrationBuilder.DropIndex(
                name: "IX_Device_DeviceCategoryId",
                table: "Device");

            migrationBuilder.DropIndex(
                name: "IX_Device_DeviceId",
                table: "Device");

            migrationBuilder.DropColumn(
                name: "AssignedUserId",
                table: "DeviceCategories");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "DeviceCategories");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "DeviceCategories");

            migrationBuilder.DropColumn(
                name: "DeviceCategoryId",
                table: "Device");

            migrationBuilder.DropColumn(
                name: "DeviceId",
                table: "Device");

            migrationBuilder.AlterColumn<Guid>(
                name: "AssignedUserId",
                table: "Device",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci",
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Device",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "DeviceDeviceCategory",
                columns: table => new
                {
                    DeviceCategoriesId = table.Column<int>(type: "int", nullable: false),
                    DevicesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeviceDeviceCategory", x => new { x.DeviceCategoriesId, x.DevicesId });
                    table.ForeignKey(
                        name: "FK_DeviceDeviceCategory_DeviceCategories_DeviceCategoriesId",
                        column: x => x.DeviceCategoriesId,
                        principalTable: "DeviceCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DeviceDeviceCategory_Device_DevicesId",
                        column: x => x.DevicesId,
                        principalTable: "Device",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Device_AssignedUserId",
                table: "Device",
                column: "AssignedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_DeviceDeviceCategory_DevicesId",
                table: "DeviceDeviceCategory",
                column: "DevicesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Device_AspNetUsers_AssignedUserId",
                table: "Device",
                column: "AssignedUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Device_AspNetUsers_AssignedUserId",
                table: "Device");

            migrationBuilder.DropTable(
                name: "DeviceDeviceCategory");

            migrationBuilder.DropIndex(
                name: "IX_Device_AssignedUserId",
                table: "Device");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Device");

            migrationBuilder.AddColumn<Guid>(
                name: "AssignedUserId",
                table: "DeviceCategories",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "DeviceCategories",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "DeviceCategories",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "AssignedUserId",
                table: "Device",
                type: "int",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "char(36)",
                oldNullable: true)
                .OldAnnotation("Relational:Collation", "ascii_general_ci");

            migrationBuilder.AddColumn<int>(
                name: "DeviceCategoryId",
                table: "Device",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeviceId",
                table: "Device",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DeviceCategories_AssignedUserId",
                table: "DeviceCategories",
                column: "AssignedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Device_DeviceCategoryId",
                table: "Device",
                column: "DeviceCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Device_DeviceId",
                table: "Device",
                column: "DeviceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Device_DeviceCategories_DeviceCategoryId",
                table: "Device",
                column: "DeviceCategoryId",
                principalTable: "DeviceCategories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Device_Device_DeviceId",
                table: "Device",
                column: "DeviceId",
                principalTable: "Device",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DeviceCategories_AspNetUsers_AssignedUserId",
                table: "DeviceCategories",
                column: "AssignedUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
