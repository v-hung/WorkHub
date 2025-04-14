using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkHub.Infrastructure.Migrations
{
	/// <inheritdoc />
	public partial class Init5 : Migration
	{
		/// <inheritdoc />
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropColumn(
					name: "Code",
					table: "AspNetUsers");

			migrationBuilder.AlterColumn<string>(
					name: "Title",
					table: "WorkTimes",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "WorkTimes",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "WorkTimes",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "PermanentAddress",
					table: "UserDetails",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "ContactAddress",
					table: "UserDetails",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Teams",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Teams",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Teams",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Teams",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Token",
					table: "RefreshTokens",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Projects",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Projects",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Projects",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Projects",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Title",
					table: "Notifications",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Message",
					table: "Notifications",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Notifications",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Notifications",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "DeviceCategories",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "DeviceCategories",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Device",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Location",
					table: "Device",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Device",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Device",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Device",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "AspNetUsers",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Image",
					table: "AspNetUsers",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "FullName",
					table: "AspNetUsers",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "AspNetUsers",
					type: "varchar(255)",
					maxLength: 255,
					nullable: true,
					oldClrType: typeof(string),
					oldType: "longtext",
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "AspNetRoles",
					type: "varchar(255)",
					maxLength: 255,
					nullable: false,
					oldClrType: typeof(string),
					oldType: "longtext")
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.AlterColumn<string>(
					name: "Title",
					table: "WorkTimes",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "WorkTimes",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "WorkTimes",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "PermanentAddress",
					table: "UserDetails",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "ContactAddress",
					table: "UserDetails",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Teams",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Teams",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Teams",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Teams",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Token",
					table: "RefreshTokens",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Projects",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Projects",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Projects",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Projects",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Title",
					table: "Notifications",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Message",
					table: "Notifications",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Notifications",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Notifications",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "DeviceCategories",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "DeviceCategories",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Name",
					table: "Device",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Location",
					table: "Device",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "Device",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "Device",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "Device",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "LastModifiedBy",
					table: "AspNetUsers",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Image",
					table: "AspNetUsers",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "FullName",
					table: "AspNetUsers",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "CreatedBy",
					table: "AspNetUsers",
					type: "longtext",
					nullable: true,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255,
					oldNullable: true)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AddColumn<string>(
					name: "Code",
					table: "AspNetUsers",
					type: "longtext",
					nullable: false)
					.Annotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.AlterColumn<string>(
					name: "Description",
					table: "AspNetRoles",
					type: "longtext",
					nullable: false,
					oldClrType: typeof(string),
					oldType: "varchar(255)",
					oldMaxLength: 255)
					.Annotation("MySql:CharSet", "utf8mb4")
					.OldAnnotation("MySql:CharSet", "utf8mb4");
		}
	}
}
