import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {AuthComponent} from "./auth.component";
import {ActivateAccountComponent} from "./activate-acount/activate-acount.component";


const  routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login',
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
        data: {
          title: 'Forget Password',
          breadcrumb: 'Forget Password'
        }
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


