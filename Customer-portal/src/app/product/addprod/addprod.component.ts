import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  addproductFormGroup:FormGroup;
  result:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.addproductFormGroup=this.formBuilder.group({
      productName:['',Validators.required],
      productBrand:['',Validators.required],
      productPrice:['',Validators.required],
      productStatus:['',Validators.required]


    })
  }



      AddProduct()
    {



    
      var price=parseInt(this.addproductFormGroup.controls.productPrice.value);
      
      this.http.post('https://localhost:44361/api/Product',{
        ProductName:this.addproductFormGroup.controls.productName.value,
        Brand:this.addproductFormGroup.controls.productBrand.value,
        ProductPrice:price,
        ProductStatus:this.addproductFormGroup.controls.productStatus.value}).subscribe(res=>{
          
          this.result=res;
        
      });
      

      this.router.navigate(['/product']);
    


    }

}
