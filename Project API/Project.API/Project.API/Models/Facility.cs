using System.Text.Json.Serialization;

namespace Project.API.Models
{
    public class Facility
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public List<Hotel> Hotels { get; set; }
    }
}
