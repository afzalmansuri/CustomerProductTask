import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  userId:any;
  firstName:string;
  lastName: string;
  email: string;
  mobileNumber: string;
  gender:string;
  address:string;
  result:any;

  upadteuserFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder,private activateRoute:ActivatedRoute,private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
    this.userId=sessionStorage.getItem("userid");
    this.firstName=this.activateRoute.snapshot.paramMap.get("firstName");
    this.lastName=this.activateRoute.snapshot.paramMap.get("lastName");
    this.mobileNumber=this.activateRoute.snapshot.paramMap.get("mobileNumber");
    this.email=this.activateRoute.snapshot.paramMap.get("email");
    this.gender=this.activateRoute.snapshot.paramMap.get("gender");
    this.address=this.activateRoute.snapshot.paramMap.get("address");

   console.log(this.firstName,this.lastName,this.mobileNumber,this.email,this.gender,this.address);
    this.upadteuserFormGroup=this.formBuilder.group({
      
      
      firstName:[this.firstName,Validators.required],
      lastName:[this.lastName,Validators.required],
      mobileNumber:[this.mobileNumber,Validators.required],
      email:[this.email,Validators.required],
     gender:[this.gender,Validators.required],
      address:[this.address,Validators.required]
   



    })


  }


  updateUser()
    {
    
    
    this.http.put('https://localhost:44361/api/User',{

      UserId:parseInt(this.userId),
        FirstName:this.upadteuserFormGroup.controls.firstName.value,
        LastName:this.upadteuserFormGroup.controls.lastName.value,
        MobileNumber:this.upadteuserFormGroup.controls.mobileNumber.value,
        Email:this.upadteuserFormGroup.controls.email.value,
        Gender:this.upadteuserFormGroup.controls.gender.value,
          Address:this.upadteuserFormGroup.controls.address.value}).subscribe(res=>{
            
            this.result=res;
      
      });
    this.router.navigate(['/user']);


    }

}
