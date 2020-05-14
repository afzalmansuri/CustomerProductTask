import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

	userloginFormGroup:FormGroup;
  result:any;

  constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  this.userloginFormGroup=this.formBuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]


    })
  }



  userloginClick()
    {
      
      
      this.http.post('https://localhost:44361/api/UserLogin',{
                      Email:this.userloginFormGroup.controls.email.value,
                      Password:this.userloginFormGroup.controls.password.value}).subscribe(res=>{
                      this.result=res;
                      sessionStorage.setItem("userid",this.result);
                      if(this.result!=null)
                      {
                        this.router.navigate(['/userproduct']);
                      }
                      else
                      {
                        alert("Invalid Email or Password ");
                      
                      }
                    
                    });
    
    }

}
