import { Component,OnInit } from '@angular/core';
import{FormGroup ,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  
  product:any;
  searchProductFormGroup:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:44303/api/Product').subscribe(res=>{
          
      this.product=res;   


    });
  
    this.searchFormGroup=this.formBuilder.group({
    search:'',
    })


  }


  DeleteProduct(id)
  {
    this.http.delete<any>('https://localhost:44303/Product/'+id).subscribe(res=>
   {
     console.log(res);
   })

  }


  SearchProduct()
  {
   this.http.post<any>('https://localhost:44303/api/Search',{productName:this.searchFormGroup.value.search}).subscribe(res=>{
          console.log(res);
          
        });
  }


}
