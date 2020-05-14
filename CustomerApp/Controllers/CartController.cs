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
    public class CartController : ControllerBase
    {
        CartDomain domain = new CartDomain();

        [HttpPost]
        public IActionResult Post(Carts cart)
        {
            var productDetails = this.domain.addtoCart(cart);
            return Ok(productDetails);

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var cartdetails = this.domain.getCartDetails(id);
            return Ok(cartdetails);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            domain.DeleteCart(id);
            return Ok();
        }
    }
}