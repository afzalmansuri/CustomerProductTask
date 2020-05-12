import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  import { from } from 'rxjs';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateComponent } from './customer/update/update.component';
import { UpdateprodComponent } from './product/updateprod/updateprod.component';
import { AddprodComponent } from './product/addprod/addprod.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register' ,component: RegisterComponent },
{ path: 'product' ,component: ProductComponent },
{ path: 'customer' ,component: CustomerComponent },
{ path: 'updatecustomer/:customerId/:firstName/:lastName/:email/:mobileNumber/:gender/:dateofbirth/:address' ,component: UpdateComponent },
{ path: 'addproduct' ,component: AddprodComponent },
{ path: 'updateproduct/:productId/:productName/:brand/:productPrice/:productStatus' ,component: UpdateprodComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
