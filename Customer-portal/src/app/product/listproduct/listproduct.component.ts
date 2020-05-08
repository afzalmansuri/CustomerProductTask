import { Component,OnInit } from '@angular/core';
import{FormGroup ,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  product:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:44303/api/Product').subscribe(res=>{
          
      this.product=res;   
      
    });
  }


  DeleteProduct(id)
  {
    this.http.delete<any>('https://localhost:44303/Product/'+id).subscribe(res=>
   {
     console.log(res);
   })

  }



}
