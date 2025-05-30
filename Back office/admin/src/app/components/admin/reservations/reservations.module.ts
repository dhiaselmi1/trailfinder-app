import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { AddReservationsComponent } from './add-reservations/add-reservations.component';
import {ReservationsComponent} from "./reservations.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../../shared/shared.module";
import {TableModule} from "../table/table.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
      ReservationsComponent,
    ListReservationsComponent,
    AddReservationsComponent
  ],
    imports: [
        CommonModule,
        ReservationsRoutingModule,
        NgbModule, SharedModule, TableModule, ReactiveFormsModule, FormsModule, NgxPaginationModule

    ]
})
export class ReservationsModule { }
