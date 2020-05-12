import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {
  productid:any;
  result:any;
  productName:string;
  productBrand:string;
  productPrice:any;
  productStatus:any;
  updateproductFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.productid=this.activateRoute.snapshot.paramMap.get("productId");
    this.productName=this.activateRoute.snapshot.paramMap.get("productName");
    this.productBrand=this.activateRoute.snapshot.paramMap.get("brand");
    this.productPrice=this.activateRoute.snapshot.paramMap.get("productPrice");
    this.productStatus=this.activateRoute.snapshot.paramMap.get("productStatus");
   
  
    this.updateproductFormGroup=this.formBuilder.group({
      productName:[this.productName,Validators.required],
      productBrand:[this.productBrand,Validators.required],
      productPrice:[this.productPrice,Validators.required],
      productStatus:[this.productStatus,Validators.required]


    })
  }


  UpdateProduct()
      {
        var price=parseInt(this.updateproductFormGroup.controls.productPrice.value);
        this.http.put('https://localhost:44319/api/product',{
          ProductId:parseInt(this.productid),
          ProductName:this.updateproductFormGroup.controls.productName.value,
          Brand:this.updateproductFormGroup.controls.productBrand.value,
          ProductPrice:price,
          ProductStatus:this.updateproductFormGroup.controls.productStatus.value}).subscribe(res=>{
            
            this.result=res;    
        
        });
        

        this.router.navigate(['/product']);
      


      }

}
