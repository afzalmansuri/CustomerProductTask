import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductFormGroup:FormGroup;


  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.addProductFormGroup=this.formbuilder.group({
      productName:['',Validators.required],
      productBrand:['',Validators.required],
      productPrice:['',Validators.required],
     
  });
  }

  AddProduct()
  {
    this.http.post<any>('https://localhost:44303/api/Product',{ProductName:this.addProductFormGroup.value.productName,ProductBrand:this.addProductFormGroup.value.productBrand,ProductPrice:this.addProductFormGroup.value.productprice,ProductStatus:"Active"}).subscribe(res=>{
          console.log(res);
          
        });
        this.router.navigate(['/ListProduct']);
      }
  }






