import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  result:any;
  id:any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.id=sessionStorage.getItem("customerid");
    this.http.get('https://localhost:44319/api/customer/'+this.id).subscribe(t => {
            this.result = t;
        });
  }



      deleteCustomer(id:number )
      {
        this.http.delete('https://localhost:44319/api/customer/'+id).subscribe(t => {
          this.result = t;
        });
        window.location.reload();

      }

}
