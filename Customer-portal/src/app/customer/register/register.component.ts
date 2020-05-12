import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup;
  result:any;

  constructor(private formBuilder:FormBuilder,private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
    this.registerFormGroup=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNumber:['',[Validators.required,Validators.maxLength(10)]],
      email:['',Validators.required],
     gender:['',Validators.required],
     dateOfBirth:['',Validators.required],
      address:['',Validators.required],
    password:['',Validators.required],
   




    })
  }

  registerCustomer()
  {

    
      this.http.post('https://localhost:44319/api/customer',{
            FirstName:this.registerFormGroup.controls.firstName.value,
            LastName:this.registerFormGroup.controls.lastName.value,
            MobileNumber:this.registerFormGroup.controls.mobileNumber.value,
            Email:this.registerFormGroup.controls.email.value,
            Password:this.registerFormGroup.controls.password.value,
              Gender:this.registerFormGroup.controls.gender.value,
              Address:this.registerFormGroup.controls.address.value,
              DateOfBirth:this.registerFormGroup.controls.dateOfBirth.value}).subscribe(res=>{
        this.result=res;

      });
this.router.navigate(['/login']);

  }
}
