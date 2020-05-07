using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Domains;
using Microsoft.AspNetCore.Mvc;
using CustomerApp.Models;


namespace CustomerApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        CustomerDomain domain = new CustomerDomain();


        [HttpPost]
        public IActionResult Post(Customers customer)
        {
            domain.registerCustomer(customer);
            return Ok("Added");
        }


        [HttpGet]
        public IActionResult Get(Customers customer)
        {
            return Ok(domain.customerLogin(customer));

        }

        [HttpGet("{id}")]

        public IActionResult GetById(int customerid)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                Customers customer = new Customers();

                var result = dbcontext.Customers.Where(x => x.CustomerId == customer.CustomerId);
                if(result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return Ok("Not found");
                }
            }
        }


        [HttpPut]
        public IActionResult Put(Customers customer)
        {
            domain.updateCustomer(customer);
            return Ok("Updated");
        }


       
        

    }
}