using System.Text.Json.Serialization;

namespace Project.API.Models
{
    public class Manager
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int Salary { get; set; }
        [JsonIgnore]
        public Hotel Hotel { get; set; }
        public int HotelId { get; set; }
    }
}
