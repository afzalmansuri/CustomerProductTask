import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{HttpClient,HttpParams,HttpHeaders}from '@angular/common/http';
import{Router}from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerLoginFormGroup:FormGroup;
  result: any;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.customerLoginFormGroup=this.formBuilder.group({
    
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
     
    });
  }

  LoginClicked()
  {
    if(this.customerLoginFormGroup.valid){
      let header=new HttpHeaders();
      header=header.append('Email',this.customerLoginFormGroup.value.email);
      header=header.append('Password',this.customerLoginFormGroup.value.password);
     
    this.http.get<any>('https://localhost:44303/api/Customer',{headers:header}).subscribe(res=>{
        console.log(res);
        this.result=res;
        sessionStorage.setItem("id",this.result)
        this.router.navigateByUrl("/ListProduct")
      });
    }

  }


}
