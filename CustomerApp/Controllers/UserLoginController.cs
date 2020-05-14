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
    public class UserLoginController : ControllerBase
    {
        UserDomain userdomain = new UserDomain();
        ProductDomain productdomain = new ProductDomain();


        [HttpPost]
        public IActionResult Post(Users user)
        {
            var loginRes = this.userdomain.Userlogin(user);
            return Ok(loginRes);
        }


        [HttpGet]
        public IActionResult Get()
        {

            var product = this.productdomain.GetUserProduct();
            return Ok(product);
        }

    }
}