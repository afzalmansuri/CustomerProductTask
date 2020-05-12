using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domain
{
    public class ProductDomain:BaseDomain
    {
        public void AddProduct(Products products)
        {
            this.ExecuteNonQuery($"insert into products values ('{products.ProductName}','{products.Brand}',{products.ProductPrice},'{products.ProductStatus}')");
        }


        public List<Products> GetAllProduct()
        {

            var reader = this.GetReader("select *from Products");
            var Products = new List<Products>();
            while (reader.Read())
            {
                var Products1 = new Products();
                Products1.ProductId = reader.GetInt32(0);
                Products1.ProductName = reader.GetString(1);
                Products1.Brand = reader.GetString(2);
                Products1.ProductPrice = reader.GetInt32(3);
                Products1.ProductStatus = reader.GetString(4);

                Products.Add(Products1);

            }
            return Products;
        }


        

        public void UpdateProduct(Products products)
        {
            this.ExecuteNonQuery($"update products set ProductName='{products.ProductName}',Brand='{products.Brand}',ProductPrice={products.ProductPrice},ProductStatus={products.ProductStatus} where ProductId = {products.ProductId}");
        }

        public void DeleteProduct(int id)
        {
            this.ExecuteNonQuery($"delete from products where ProductId = {id}");
        }


        public List<Products> SearchProduct(Products products)
        {

            var reader = this.GetReader($"exec spSearchProduct @productname='{products.ProductName}'");
            var Products = new List<Products>();
            while (reader.Read())
            {
                var products1 = new Products();

                products1.ProductId = reader.GetInt32(0);
                products1.ProductName = reader.GetString(1);
                products1.Brand = reader.GetString(2);
                products1.ProductPrice = reader.GetInt32(3);
                products1.ProductStatus = reader.GetString(4);
                Products.Add(products1);

            }
            return Products;
        }



        public List<Products> FilterProduct(Products filtrProducts)
        {

            var reader = this.GetReader($"select *from products where ProductStatus='{filtrProducts.ProductStatus}'");
            var products = new List<Products>();
            while (reader.Read())
            {
                var products1 = new Products();
                products1.ProductId = reader.GetInt32(0);
                products1.ProductName = reader.GetString(1);
                products1.Brand = reader.GetString(2);
                products1.ProductPrice = reader.GetInt32(3);
                products1.ProductStatus = reader.GetString(4);

                products.Add(products1);

            }
            return products;
        }



    }
}
