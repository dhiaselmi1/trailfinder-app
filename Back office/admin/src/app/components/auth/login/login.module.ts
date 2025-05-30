import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgxPermissionsModule.forRoot(),
  ]
})
export class LoginModule { }
