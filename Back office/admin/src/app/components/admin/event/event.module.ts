import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    EventComponent,
    ListEventComponent,
    AddEditEventComponent
  ],
    imports: [
        CommonModule,
        EventRoutingModule,
        FormsModule,
        SharedModule,
        NgxPaginationModule
    ]
})
export class EventModule { isDropdownOpen:boolean;}
