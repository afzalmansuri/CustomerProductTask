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
    public class OrderController : ControllerBase
    {

        OrderDomain domain = new OrderDomain();

        [HttpPost]
        public IActionResult Post(Orders orders)
        {
            domain.AddOrder(orders);
            return Ok();


        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var order = this.domain.getOrderDetails(id);
            return Ok(order);

        }


        
    }
}