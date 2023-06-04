using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.API.Data;
using Project.API.Models;

namespace Project.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : Controller
    {
        private readonly ProjectDbContext _projectDbContext;
        public ClientsController(ProjectDbContext projectDbContext)
        {
            _projectDbContext = projectDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllClients()
        {
            var clients = await _projectDbContext.Clients.ToListAsync();
            return Ok(clients);
        }

        [HttpPost]
        public async Task<IActionResult> AddClient([FromBody] Client clientRequest)
        {
            clientRequest.Id = Guid.NewGuid();
            await _projectDbContext.Clients.AddAsync(clientRequest);
            await _projectDbContext.SaveChangesAsync();

            return Ok(clientRequest);
        }
    }
}
