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
    public class ProductController : ControllerBase
    {
        ProductDomain domain = new ProductDomain();

        [HttpPost]
        public IActionResult Post(Products products)
        {
            domain.AddProduct(products);
            return Ok();
        }

        [HttpGet]
        public IActionResult Get()
        {

            var result = this.domain.GetAllProduct();
            return Ok(result);

        }


        [HttpPut]
        public IActionResult Put(Products products)
        {
            domain.UpdateProduct(products);
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            domain.DeleteProduct(id);
            return Ok();
        }


    }
}