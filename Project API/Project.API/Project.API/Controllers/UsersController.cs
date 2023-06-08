using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.API.Data;
using Project.API.Models;

namespace Project.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ProjectDbContext _projectDbContext;
        public UsersController(ProjectDbContext projectDbContext)
        {
            _projectDbContext = projectDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();

            var user = await _projectDbContext.Users.FirstOrDefaultAsync(x => x.Username == userObj.Username && x.Password == userObj.Password);
            
            if (user == null)
                return NotFound(new {Message = "User not found!"});

            return Ok(new { Message = "Logged in successfully!" });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();
            
            await _projectDbContext.Users.AddAsync(userObj);
            await _projectDbContext.SaveChangesAsync();
            return Ok(new { Message = "User registered!" });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _projectDbContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            var user = await _projectDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateUser([FromRoute] int id, User updateUserRequest)
        {
            var user = await _projectDbContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            user.FirstName = updateUserRequest.FirstName;
            user.LastName = updateUserRequest.LastName;
            user.Email = updateUserRequest.Email;
            user.Username = updateUserRequest.Username;
            user.Password = updateUserRequest.Password;

            await _projectDbContext.SaveChangesAsync();

            return Ok(user);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            var user = await _projectDbContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _projectDbContext.Users.Remove(user);
            await _projectDbContext.SaveChangesAsync();

            return Ok(user);
        }
    }
}
