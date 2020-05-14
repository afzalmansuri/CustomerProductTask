import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  result:any;
  id:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.id=sessionStorage.getItem("userid");
    this.http.get('https://localhost:44361/api/User/'+this.id).subscribe(t => {
            this.result = t;
        });
  }

}
