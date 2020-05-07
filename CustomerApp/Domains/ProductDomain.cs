using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerApp.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Linq;
namespace CustomerApp.Domains
{
    public class ProductDomain
    {
     
        public void addProduct(Products product)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                dbcontext.Products.Add(product);
                dbcontext.SaveChanges();    
            }

        }

        public List<Products> GetAllProduct(Products product)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                var allproduct = dbcontext.Products.Select(x => x).ToList();
                return allproduct;
            }
        }

        public void deleteProduct(int productid)

        {

            using(var dbcontext=new CustomerDBContext())
            {
                Products product = new Products();
                product.ProductId = productid;
                dbcontext.Remove(product.ProductId);
                dbcontext.SaveChanges();
            }
        }

        public void searchProduct(Products product)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                var data = dbcontext.Database.ExecuteSqlCommand("spSearchProduct @productname", new SqlParameter("@productname", product.ProductName));
            }
            
        }


    }
}
