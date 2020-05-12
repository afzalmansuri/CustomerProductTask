using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Domain;
using CustomerApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        CustomerDomain domain = new CustomerDomain();


        [HttpPost]
        public IActionResult Post(Customers customers)
        {
            var isLoggedIn = this.domain.CustomerLogin(customers);
            return Ok(isLoggedIn);
        }
    }
}