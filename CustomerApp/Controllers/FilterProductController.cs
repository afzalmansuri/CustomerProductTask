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
    public class FilterProductController : ControllerBase
    {
        ProductDomain domain = new ProductDomain();

        [HttpPost]
        public IActionResult Post(Products products)
        {
            var prod = this.domain.FilterProduct(products);
            return Ok(prod);


        }
    }
}