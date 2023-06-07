using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.API.Data;

namespace Project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly ProjectDbContext _context;
        public HotelController(ProjectDbContext context)
        {
            _context = context;
        }

    }
}
