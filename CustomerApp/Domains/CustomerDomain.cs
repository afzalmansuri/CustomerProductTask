using CustomerApp.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domains
{
    public class CustomerDomain: CustomerDBContext
    {

        public void registerCustomer(Customers customer)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                dbcontext.Customers.Add(customer);

                dbcontext.SaveChanges();
            }
        }

        public List<Customers> customerLogin(Customers customer)
        {
            using (var dbcontext = new CustomerDBContext())
            {
                var result = dbcontext.Customers.Where(x => x.Email == customer.Email && x.Password == customer.Password).ToList();
                return result;
            }
                    

        }

        public void updateCustomer(Customers customer)
        {
            using(var dbcontext=new CustomerDBContext())
            {
                dbcontext.Customers.Update(customer);

                dbcontext.SaveChanges();

            }
        }



    }
}
