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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetClient([FromRoute] Guid id)
        {
            var client = await _projectDbContext.Clients.FirstOrDefaultAsync(x => x.Id == id);

            if (client == null)
            {
                return NotFound();
            }

            return Ok(client);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateClient([FromRoute] Guid id, Client updateClientRequest)
        {
            var client = await _projectDbContext.Clients.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            client.Name = updateClientRequest.Name;
            client.Email = updateClientRequest.Email;
            client.Age = updateClientRequest.Age;
            client.Money = updateClientRequest.Money;

            await _projectDbContext.SaveChangesAsync();

            return Ok(client);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteClient([FromRoute] Guid id)
        {
            var client = await _projectDbContext.Clients.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            _projectDbContext.Clients.Remove(client);
            await _projectDbContext.SaveChangesAsync();

            return Ok(client);
        }
    }
}
