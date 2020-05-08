import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Session } from 'protractor';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {
  id: any;
  result: any;
  updateCustomerFormGroup: FormGroup;

  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("id");
    
    this.http.get<any>('https://localhost:44303/Customer/'+this.id).subscribe(res=>
     {
       this.result=res;
       console.log(this.result);
     }) ;
  
     this.updateCustomerFormGroup=this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      mobileNumber:['',Validators.maxLength(10),Validators.minLength(10)],
      address:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required]
   
    }); 
  
   
 
}
    

    updateProfile(id)
    {
      this.http.put<any>('https://localhost:44303/api/Customer',{
            FirstName:this.updateCustomerFormGroup.value.firstName,
            LastName:this.updateCustomerFormGroup.value.lastName,
            MobileNumber:this.updateCustomerFormGroup.value.mobileNumber,
            Email:this.updateCustomerFormGroup.value.email,
            Password:this.updateCustomerFormGroup.value.password,
            Address:this.updateCustomerFormGroup.value.address,
            Gender:this.updateCustomerFormGroup.value.gender,
            DateOfBirth:this.updateCustomerFormGroup.value.dob,
            CustomerId:this.id}).subscribe(res=>{
          console.log(res);
          
        });
        this.router.navigate(['/ListProduct']);
    }


    deleteCustomer(id)
    {
      this.http.delete<any>('https://localhost:44303/Product/'+id).subscribe(res=>
      {
        console.log(res);
      });
    
    }





}
