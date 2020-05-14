import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormGroup ,FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.css']
})
export class UserproductComponent implements OnInit {
  searchText: string;
  result:any;
  usersearchformGroup:FormGroup;

  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.usersearchformGroup=this.formBuilder.group({

      search:''
    })
    this.http.get<any>('https://localhost:44361/api/UserLogin').subscribe(t => { 
      this.result = t;
            console.log(this.result);
           
            }
        );
  }


  SearchProduct()
  {
    console.log(this.usersearchformGroup.controls.search.value);
  this.http.post('https://localhost:44361/api/search',{
      ProductName:this.usersearchformGroup.controls.search.value
     
    }).subscribe(res=>{this.result=res; 
    });
    
  
  }





}
