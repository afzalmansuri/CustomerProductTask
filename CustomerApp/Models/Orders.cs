using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Models
{
    public class Orders
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int TotalAmount { get; set; }

        public DateTime OrderDate { get; set; }
        public string OrderStatus { get; set; }
    }
}
