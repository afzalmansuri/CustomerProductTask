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
import{UserloginComponent} from './user/userlogin/userlogin.component';
import{UserregisterComponent}from './user/userregister/userregister.component';
import{UserupdateComponent}from './user/userupdate/userupdate.component';
import{UserComponent}from './user/user.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { CartComponent } from './cart/cart.component';
import { UsercartComponent } from './cart/usercart/usercart.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register' ,component: RegisterComponent },
{ path: 'product' ,component: ProductComponent },
{ path: 'customer' ,component: CustomerComponent },
{ path: 'updatecustomer/:customerId/:firstName/:lastName/:email/:mobileNumber/:gender/:dateofbirth/:address' ,component: UpdateComponent },
{ path: 'addproduct' ,component: AddprodComponent },
{ path: 'updateproduct/:productId/:productName/:brand/:productPrice/:productStatus' ,component: UpdateprodComponent },
{ path: 'user', component: UserComponent },
{ path: 'userlogin', component: UserloginComponent },
{ path: 'userregister', component: UserregisterComponent },
{ path: 'userupdate/:firstName/:lastName/:email/:mobileNumber/:gender/:address', component: UserupdateComponent },
{ path: 'userproduct' ,component: UserproductComponent},
{ path: 'cart' ,component: CartComponent },
{ path: 'addcart/:productId' ,component: UsercartComponent },
{ path: 'order/:cartId' ,component: OrderComponent},
{ path: 'order' ,component: OrderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
