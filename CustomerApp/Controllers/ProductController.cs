using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Domains;
using CustomerApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductDomain domain = new ProductDomain();

        [HttpGet]
        public IActionResult Get(Products product)
        {
            return Ok(domain.GetAllProduct(product));
        }


        [HttpPost]
        public IActionResult Post(Products product)
        {
            domain.addProduct(product);
            return Ok("Added");
        }


        [HttpDelete("{id}")]

        public IActionResult Delete(int productid)
        {
            domain.deleteProduct(productid);
            return Ok("Deleted");
        }

    }
}