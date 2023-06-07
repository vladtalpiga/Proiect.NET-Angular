using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.API.Data;
using Project.API.DTOs;
using Project.API.Models;

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

        [HttpGet]
        public async Task<ActionResult<List<Hotel>>> Get(int cityId)
        {
            var hotels = await _context.Hotels
                .Where(h => h.CityId == cityId)
                .Include(h => h.Manager)
                .Include(h => h.Facilities)
                .ToListAsync();

            return hotels;
        }

        [HttpPost]
        public async Task<ActionResult<List<Hotel>>> Create(Hotel hotel)
        {
            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return await Get(hotel.CityId);
        }

        [HttpPost("facility")]
        public async Task<ActionResult<Hotel>> AddHotelFacility(HotelFacilityDto request)
        {
            var hotel = await _context.Hotels
                .Where(h => h.Id == request.HotelId)
                .Include(h => h.Facilities)
                .Include(h => h.Manager)
                .FirstOrDefaultAsync();
            if (hotel == null)
                return NotFound();

            var facility = await _context.Facilities.FindAsync(request.FacilityId);
            if (facility == null)
                return NotFound();

            hotel.Facilities.Add(facility);
            await _context.SaveChangesAsync();

            return hotel;
        }
    }
}
