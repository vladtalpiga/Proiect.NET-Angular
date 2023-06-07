namespace Project.API.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Stars { get; set; }
        public int Price { get; set; }
        //price per night
        public City City { get; set; }
        public int CityId { get; set; }
    }
}
