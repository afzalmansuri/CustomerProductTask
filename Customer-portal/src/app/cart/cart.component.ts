import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  result:any;
  id:any;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("userid");
    this.http.get('https://localhost:44361/api/cart/'+this.id).subscribe(t => {
            this.result = t;
            console.log(this.result);
        });

  }


  deletecart(id:number )
  {
    this.http.delete('https://localhost:44361/api/Cart/'+id).subscribe(t => {
      this.result = t;
    });
    window.location.reload();
  
  }


   AddOrder(productid:number,quantity:number,cartid:number)
   {
    this.http.post('https://localhost:44361/api/Order',
     {UserId:parseInt(this.id),ProductId:productid,Quantity:quantity,OrderStatus:"Delivered"}).subscribe(res => {
       this.result = res;
     });



     this.http.delete('https://localhost:44361/api/Cart/'+cartid).subscribe(t => {
      this.result = t;
    });


   
     this.router.navigate(['/order']);


     console.log(this.id,productid,quantity,cartid);


     parseInt(this.id)
   }
}
