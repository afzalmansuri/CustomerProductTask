using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domain
{
    public class CartDomain:BaseDomain
    {
        public List<Carts> addtoCart(Carts carts)
        {
            var reader = this.GetReader($"exec spAddToCartAndCountPrice @userid='{carts.UserId}', @productid='{carts.ProductId}', @quantity='{carts.Quantity}'");

                var Carts = new List<Carts>();
            while(reader.Read())
            {
                var Cart1 = new Carts();

                Cart1.UserId = reader.GetInt32(0);
                Carts.Add(Cart1);
            }

            return Carts;
        }

        public List<vCarts> getCartDetails(int userid)
        {
            var reader = this.GetReader($"select * from vCarts where UserId='{userid}'");

            var vCarts = new List<vCarts>();
            while(reader.Read())
            {
                var vCarts1 = new vCarts();
                vCarts1.CartId = reader.GetInt32(0);
                vCarts1.UserId = reader.GetInt32(1);
                vCarts1.ProductId = reader.GetInt32(2);
                vCarts1.ProductName = reader.GetString(3);
                vCarts1.Brand = reader.GetString(4);
                vCarts1.ProductPrice = reader.GetInt32(5);
                vCarts1.Quantity = reader.GetInt32(6);
                vCarts1.TotalAmount = reader.GetInt32(7);

                vCarts.Add(vCarts1);

            }

            return vCarts;
        }


        public void DeleteCart(int id)
        {
            this.ExecuteNonQuery($"delete from Carts where CartId = {id}");
        }


    }
}
