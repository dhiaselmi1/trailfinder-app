import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permission/permissions.component';
import {FormsModule} from "@angular/forms";
import { AddRoleComponent } from './add-role/add-role.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';


@NgModule({
  declarations: [
    PermissionsComponent,
    AddRoleComponent,
    AddPermissionComponent
  ],
    imports: [
        CommonModule,
        PermissionsRoutingModule,
        FormsModule
    ]
})
export class PermissionsModule { }
