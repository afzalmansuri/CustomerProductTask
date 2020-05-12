import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
