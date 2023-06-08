namespace Project.API.Models
{
    public class Company
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int NrEmployees { get; set; }
    }
}
