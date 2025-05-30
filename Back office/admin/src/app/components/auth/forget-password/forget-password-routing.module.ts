import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivateAccountComponent} from "../activate-acount/activate-acount.component";
import {ForgetPasswordComponent} from "./forget-password.component";

const routes: Routes = [
  {
    path:'',
    component:ForgetPasswordComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
