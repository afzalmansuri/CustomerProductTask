import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

	  registerUserFormGroup:FormGroup;
  result:any;

  constructor(private formBuilder:FormBuilder,private router:Router , private http:HttpClient) { }

  ngOnInit(): void {

  this.registerUserFormGroup=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileNumber:['',[Validators.required,Validators.maxLength(10)]],
     gender:['',Validators.required],
      address:['',Validators.required],
    password:['',Validators.required],
   




    })
  }



  registerUser()
  {

    
      this.http.post('https://localhost:44361/api/User',{
            FirstName:this.registerUserFormGroup.controls.firstName.value,
            LastName:this.registerUserFormGroup.controls.lastName.value,
            MobileNumber:this.registerUserFormGroup.controls.mobileNumber.value,
            Email:this.registerUserFormGroup.controls.email.value,
            Password:this.registerUserFormGroup.controls.password.value,
              Gender:this.registerUserFormGroup.controls.gender.value,
              Address:this.registerUserFormGroup.controls.address.value}).subscribe(res=>{
        this.result=res;

      });
this.router.navigate(['/userlogin']);

  }

}
