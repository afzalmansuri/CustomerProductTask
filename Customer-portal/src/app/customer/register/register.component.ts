import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.customerFormGroup=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      mobileNumber:['',Validators.maxLength(10),Validators.minLength(10)],
      address:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required]
    
      });
  }

    confirmPass()
    {
      if(this.customerFormGroup.controls.password.value===this.customerFormGroup.controls.confirmPassword.value)
      {
        console.log("validate");
        return true;
      }
      else
      {
        this.customerFormGroup.controls.confirmPassword.setErrors({"invalid":true});
        console.log("invalid");
        return false;

      }

    }



    RegisterCutomer()
  {
    this.http.post<any>('https://localhost:44303/api/Customer',{FirstName:this.customerFormGroup.value.firstName,
      LastName:this.customerFormGroup.value.lastName,
      MobileNumber:this.customerFormGroup.value.mobileNumber,
      Email:this.customerFormGroup.value.email,
      Password:this.customerFormGroup.value.password,
      Address:this.customerFormGroup.value.address,
      Gender:this.customerFormGroup.value.gender,
      DateOfBirth:this.customerFormGroup.value.dob}).subscribe(res=>{
     
        console.log(res);
      
    });
    this.router.navigate(['/CustomerLogin']);
  }

}
