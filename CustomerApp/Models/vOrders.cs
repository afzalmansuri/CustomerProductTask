using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    public class vOrders
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        
        public string ProductName { get; set; }
        public string Brand { get; set; }
        public int ProductPrice { get; set; }
        public int Quantity { get; set; }
        public int TotalAmount { get; set; }
        public DateTime OrderDate { get; set; }
        public string Address { get; set; }
        public string OrderStatus { get; set; }
    }
}
