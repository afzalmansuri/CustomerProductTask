import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegisterComponent} from './customer//register/register.component';
import{LoginComponent} from './customer/login/login.component';
import{ProfileviewComponent} from './customer/ProfileView/profileview.component';
import{AddproductComponent} from './product/addproduct/addproduct.component';
import{ListproductComponent} from './product/listproduct/listproduct.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'/', component:LoginComponent
  },
  {
    path:'RegisterCustomer', component:RegisterComponent
  },
  {
    path:'CustomerLogin', component:LoginComponent
  },
  {
    path:'ProfileView', component:ProfileviewComponent
  },
  {
    path:'AddProduct', component:AddproductComponent
  },
  {
    path:'ListProduct', component:ListproductComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
