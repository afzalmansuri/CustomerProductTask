import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormGroup ,FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchText: string;
  result:any;
  searchformGroup:FormGroup;
  public productstatus=[{status:'Active'},{status:'InActive'}];

  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.searchformGroup=this.formBuilder.group({

      searchtext:'',
      filtertext:''
    })


    this.http.get<any>('https://localhost:44319/api/product').subscribe(t => 
    
           { this.result = t;
            console.log(this.result);
           
            }
        );

  }


  SearchProduct()
  {
    this.http.post('https://localhost:44319/api/searchproduct',{
        ProductName:this.searchformGroup.controls.searchtext.value
      
      }).subscribe(res=>{this.result=res; 
      });
    
    }


    FilterProduct()
    {
    
      this.http.post('https://localhost:44319/api/filterproduct',{
        ProductStatus:this.searchformGroup.controls.filtertext.value}).subscribe(res=>{
          this.result=res;
        
        
        });
      

    }

    
    deleteProduct(id:number )
      {
      this.http.delete('https://localhost:44319/api/product/'+id).subscribe(resp => {
        this.result = resp;
      });
      window.location.reload();

      }


      



    

}
