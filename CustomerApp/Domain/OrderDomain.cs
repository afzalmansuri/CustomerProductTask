using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domain
{
    public class OrderDomain:BaseDomain
    {
        public List<Orders> AddOrder(Orders orders)
        {
            var reader = this.GetReader($"exec spAddOrder @userid='{orders.UserId}', @productid='{orders.ProductId}', @quantity='{orders.Quantity}',@status='{orders.OrderStatus}'");

            var Orders = new List<Orders>();
            while (reader.Read())
            {
                var Order1 = new Orders();

                Order1.UserId = reader.GetInt32(0);
                Orders.Add(Order1);
            }

            return Orders;


        }

        public List<vOrders> getOrderDetails(int userid)
        {
            var reader = this.GetReader($"select * from vOrders where UserId='{userid}'");

            var vOrders = new List<vOrders>();
            while (reader.Read())
            {
                var vOrders1 = new vOrders();
                vOrders1.OrderId = reader.GetInt32(0);
                vOrders1.UserId = reader.GetInt32(1);
                vOrders1.ProductName = reader.GetString(2);
                vOrders1.Brand = reader.GetString(3);
                vOrders1.ProductPrice = reader.GetInt32(4);
                vOrders1.Quantity = reader.GetInt32(5);
                vOrders1.TotalAmount = reader.GetInt32(6);
                vOrders1.OrderDate = reader.GetDateTime(7);
                vOrders1.Address = reader.GetString(8);
                vOrders1.OrderStatus = reader.GetString(9);
              
                vOrders.Add(vOrders1);

            }

            return vOrders;
        }


    }
}
