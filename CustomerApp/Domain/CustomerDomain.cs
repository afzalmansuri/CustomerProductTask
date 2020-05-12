using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domain
{
    public class CustomerDomain:BaseDomain
    {


        public void AddCustomer(Customers customers)
        {
            this.ExecuteNonQuery($"insert into customers values ('{customers.FirstName}','{customers.LastName}','{customers.Email}','{customers.Password}','{customers.MobileNumber}','{customers.Gender}','{customers.Address}','{customers.DateOfBirth}')");
        }

        public List<Customers> GetCustomer(int id)
        {

            var reader = this.GetReader($"select *from vCustomers where CustomerId='{id}'");
            var Customers = new List<Customers>();
            while (reader.Read())
            {
                var Customers1 = new Customers();
                Customers1.CustomerId = reader.GetInt32(0);
                Customers1.FirstName = reader.GetString(1);
                Customers1.LastName = reader.GetString(2);
                Customers1.Email = reader.GetString(3);
                Customers1.MobileNumber = reader.GetString(5);
                Customers1.Gender = reader.GetString(6);
                Customers1.Address = reader.GetString(7);
                Customers1.DateOfBirth = reader.GetDateTime(8);

                Customers.Add(Customers1);

            }
            return Customers;
        }


      

        public int CustomerLogin(Customers customers)

        {

            var reader = this.GetReader($"select * from customers where Email='{customers.Email}' and Password='{customers.Password}'");

            var c = new Customers();
            while (reader.Read())
            {

                c.CustomerId = reader.GetInt32(0);
            }
            return c.CustomerId;

        }

       
        public void UpdateCustomer(Customers customers)
        {
            this.ExecuteNonQuery($"update customers set FirstName='{customers.FirstName}',LastName='{customers.LastName}',MobileNumber={customers.MobileNumber},Email='{customers.Email}',Password='{customers.Password}',DateOfBirth='{customers.DateOfBirth}',Address='{customers.Address}',Gender='{customers.Gender}' where CustomerId = {customers.CustomerId}");
        }
        public void DeleteCustomer(int id)
        {
            this.ExecuteNonQuery($"delete from customers where CustomerId = {id}");
        }
    }
}
