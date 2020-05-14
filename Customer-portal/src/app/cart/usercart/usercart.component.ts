import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  addcartFormGroup:FormGroup;
  id:any;
  result:any;
  productId:any;
 
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {

    this.id=sessionStorage.getItem("userid");
    this.productId=this.activatedRoute.snapshot.paramMap.get("productId");
    this.addcartFormGroup=this.formbuilder.group(
      {
        quantity:['',Validators.required]
      }
    )
  }



  addcart()
  {
    this.http.post('https://localhost:44361/api/cart',{
      UserId:parseInt(this.id),
    ProductId:parseInt(this.productId),
      Quantity:this.addcartFormGroup.controls.quantity.value}).subscribe(res=>{
        
        this.result=res;
       
    });
    
  
    this.router.navigate(['/cart']);
   
  
  
  }

}
