import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from "./profile.component";
import {TableService} from "../../../_services/table.service";
import {ToastrService} from "ngx-toastr";
import {AgencesService} from "../../../_services/agences.service";
import {EventService} from "../../../_services/event.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
      ProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
    ]
})
export class ProfileModule  {

}
