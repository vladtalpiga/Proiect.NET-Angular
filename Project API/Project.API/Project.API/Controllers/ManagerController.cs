using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.API.Data;
using Project.API.Models;

namespace Project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        private readonly ProjectDbContext _context;
        public ManagerController(ProjectDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Manager>>> Get(int hotelId)
        {
            var managers = await _context.Manager
                .Where(h => h.HotelId == hotelId)
                .ToListAsync();

            return managers;
        }

        [HttpPost]
        public async Task<ActionResult<List<Manager>>> AddManager(Manager manager)
        {
            _context.Manager.Add(manager);
            await _context.SaveChangesAsync();

            return await Get(manager.HotelId);
        }
    }
}
