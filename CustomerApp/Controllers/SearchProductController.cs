using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Domains;
using CustomerApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class SearchProductController : ControllerBase
    {
        ProductDomain domain = new ProductDomain();

        [HttpGet]
        public IActionResult Get(Products product)
        {
            using (var dbcontext = new CustomerDBContext()) ;
            {
                domain.searchProduct(product);
                return Ok();
            }
            
        }
    }
}