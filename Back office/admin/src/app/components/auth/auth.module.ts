import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";
import {TableModule} from "../admin/table/table.module";
import {NgxSpinnerModule} from "ngx-spinner";

import {CodeInputModule} from "angular-code-input";



@NgModule({
  declarations: [
    RegisterComponent,

  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule, FormsModule,
        NgbModule, SharedModule, TableModule, ReactiveFormsModule, NgxSpinnerModule, CodeInputModule

    ]
})
export class AuthModule { }
