import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;
  result:any;

  constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginFormGroup=this.formBuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]


    })
  }


    loginClick()
    {
      
      
      this.http.post('https://localhost:44361/api/Login',{
                      Email:this.loginFormGroup.controls.email.value,
                      Password:this.loginFormGroup.controls.password.value}).subscribe(res=>{
                      this.result=res;
                      sessionStorage.setItem("customerid",this.result);
                      if(this.result!=null)
                      {
                        this.router.navigate(['/customer']);
                      }
                      else
                      {
                        alert("Invalid Email or Password ");
                      
                      }
                    
                    });
    
    }

}
