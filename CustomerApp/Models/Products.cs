using System;
using System.Collections.Generic;

namespace CustomerApp.Models
{
    public partial class Products
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Brand { get; set; }
        public int ProductPrice { get; set; }
        public string ProductStatus { get; set; }
    }
}
