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
    public class UserController : ControllerBase
    {
        UserDomain domain = new UserDomain();


        [HttpPost]
        public IActionResult Post(Users users)
        {
            domain.AddUser(users);
            return Ok();
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var users = this.domain.GetSingleUser(id);
            return Ok(users);

        }
        
        [HttpPut]
        public IActionResult Put(Users users)
        {
            domain.UpdateUser(users);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            domain.DeleteUser(id);
            return Ok();
        }
    }
}