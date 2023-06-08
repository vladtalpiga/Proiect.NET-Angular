using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.API.Data;
using Project.API.Models;

namespace Project.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanysController : ControllerBase
    {
        private readonly ProjectDbContext _projectDbContext;
        public CompanysController(ProjectDbContext projectDbContext)
        {
            _projectDbContext = projectDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddCompany([FromBody] Company companyRequest)
        {
            companyRequest.Id = Guid.NewGuid();
            await _projectDbContext.Companys.AddAsync(companyRequest);
            await _projectDbContext.SaveChangesAsync();

            return Ok(companyRequest);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCompanys()
        {
            var companys = await _projectDbContext.Companys.ToListAsync();
            return Ok(companys);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCompany([FromRoute] Guid id)
        {
            var company = await _projectDbContext.Companys.FirstOrDefaultAsync(x => x.Id == id);

            if (company == null)
            {
                return NotFound();
            }

            return Ok(company);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateCompany([FromRoute] Guid id, Company updateCompanyRequest)
        {
            var company = await _projectDbContext.Companys.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            company.Name = updateCompanyRequest.Name;
            company.Location = updateCompanyRequest.Location;
            company.NrEmployees = updateCompanyRequest.NrEmployees;

            await _projectDbContext.SaveChangesAsync();

            return Ok(company);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteCompany([FromRoute] Guid id)
        {
            var company = await _projectDbContext.Companys.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            _projectDbContext.Companys.Remove(company);
            await _projectDbContext.SaveChangesAsync();

            return Ok(company);
        }
    }
}
