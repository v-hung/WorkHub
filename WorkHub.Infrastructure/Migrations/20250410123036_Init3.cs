﻿using System;
using Microsoft.EntityFrameworkCore.Metadata;
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
			migrationBuilder.CreateTable(
					name: "Notifications",
					columns: table => new
					{
						Id = table.Column<int>(type: "int", nullable: false)
									.Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
						Title = table.Column<string>(type: "longtext", nullable: false)
									.Annotation("MySql:CharSet", "utf8mb4"),
						Message = table.Column<string>(type: "longtext", nullable: false)
									.Annotation("MySql:CharSet", "utf8mb4"),
						Type = table.Column<int>(type: "int", nullable: false),
						IsRead = table.Column<bool>(type: "tinyint(1)", nullable: false),
						UserId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
						CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
						UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
						CreatedBy = table.Column<string>(type: "longtext", nullable: true)
									.Annotation("MySql:CharSet", "utf8mb4"),
						LastModifiedBy = table.Column<string>(type: "longtext", nullable: true)
									.Annotation("MySql:CharSet", "utf8mb4")
					},
					constraints: table =>
					{
						table.PrimaryKey("PK_Notifications", x => x.Id);
						table.ForeignKey(
											name: "FK_Notifications_AspNetUsers_UserId",
											column: x => x.UserId,
											principalTable: "AspNetUsers",
											principalColumn: "Id",
											onDelete: ReferentialAction.Cascade);
					})
					.Annotation("MySql:CharSet", "utf8mb4");

			migrationBuilder.CreateIndex(
					name: "IX_Notifications_UserId",
					table: "Notifications",
					column: "UserId");
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
					name: "Notifications");
		}
	}
}
