import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddEditUsersComponent } from './add-edit-users/add-edit-users.component';
import {UsersComponent} from "./users.component";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
      UsersComponent,
    ListUsersComponent,
    AddEditUsersComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class UsersModule { }
