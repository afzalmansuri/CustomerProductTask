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
    public class CustomerController : ControllerBase
    {

        CustomerDomain domain = new CustomerDomain();

        [HttpPost]
        public IActionResult Post(Customers customers)
        {
            domain.AddCustomer(customers);
            return Ok();
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var customer = this.domain.GetCustomer(id);
            return Ok(customer);

        }
       
        [HttpPut]
        public IActionResult Put(Customers customers)
        {
            domain.UpdateCustomer(customers);
            return Ok();
        }
       
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            domain.DeleteCustomer(id);
            return Ok();
        }
    }
}