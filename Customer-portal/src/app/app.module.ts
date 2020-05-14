import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { UpdateComponent } from './customer/update/update.component';
import { ProductComponent } from './product/product.component';
import { AddprodComponent } from './product/addprod/addprod.component';
import { UpdateprodComponent } from './product/updateprod/updateprod.component';

import { UserComponent } from './user/user.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { CartComponent } from './cart/cart.component';
import { UsercartComponent } from './cart/usercart/usercart.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    ProductComponent,
    AddprodComponent,
    UpdateprodComponent,
    UserComponent,
    UserloginComponent,
    UserregisterComponent,
    UserupdateComponent,
    UserproductComponent,
    CartComponent,
    UsercartComponent,
    OrderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
