using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApp.Domain
{
    public class UserDomain:BaseDomain
    {

        public List<Users> GetSingleUser(int id)
        {

            var reader = this.GetReader($"select *from Users where UserId='{id}'");
            var Users = new List<Users>();
            while (reader.Read())
            {
                var Users1 = new Users();
                Users1.UserId = reader.GetInt32(0);
                Users1.FirstName = reader.GetString(1);
                Users1.LastName = reader.GetString(2);
                Users1.Email = reader.GetString(3);
                Users1.MobileNumber = reader.GetString(4);
                Users1.Gender = reader.GetString(5);
                Users1.Address = reader.GetString(6);
                Users1.Password = reader.GetString(7);

                Users.Add(Users1);

            }
            return Users;
        }

        public int Userlogin(Users user)

        {

            var reader = this.GetReader($"select * from users where Email='{user.Email}' and Password='{user.Password}'");

            var c = new Users();
            while (reader.Read())
            {

                c.UserId = reader.GetInt32(0);
            }
            return c.UserId;

        }

        public void AddUser(Users user)
        {
            this.ExecuteNonQuery($"insert into users values ('{user.FirstName}','{user.LastName}','{user.Email}','{user.MobileNumber}','{user.Gender}','{user.Address}','{user.Password}')");
        }
        public void UpdateUser(Users user)
        {
            this.ExecuteNonQuery($"update users set FirstName='{user.FirstName}',LastName='{user.LastName}',MobileNumber='{user.MobileNumber}',Email='{user.Email}',Address='{user.Address}',Gender='{user.Gender}' where UserId = {user.UserId}");
        }
        public void DeleteUser(int id)
        {
            this.ExecuteNonQuery($"delete from users where UserId = {id}");
        }

    }
}
