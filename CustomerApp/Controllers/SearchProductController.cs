using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace CustomerApp.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class SearchProductController : ControllerBase
    {
       

        [HttpPost]
        public IActionResult Post(Products product)
        {
            using (var dbcontext = new CustomerDBContext()) ;
            {
                var s = dbcontext.Database.ExecuteSqlCommand("spSearchProduct @productname",
                new SqlParameter("@productname", product.ProductName )

             );
                return s;
            }
            
        }
    }
}