using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project.API.Migrations
{
    /// <inheritdoc />
    public partial class cityhotels_updated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Cities_CityId",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Cities_CityId",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Cities");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Cities",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cities_CityId",
                table: "Cities",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_Cities_CityId",
                table: "Cities",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id");
        }
    }
}
