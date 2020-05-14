import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  result:any;
  id:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {  

    this.id=sessionStorage.getItem("userid");
      this.http.get('https://localhost:44361/api/order/'+this.id).subscribe(t => {
              this.result = t;
              console.log(this.result);
          });
      
  }

}
