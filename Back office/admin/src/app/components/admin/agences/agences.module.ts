import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencesRoutingModule } from './agences-routing.module';
import { ListAgencesComponent } from './list-agences/list-agences.component';
import { AddEditAgenceComponent } from './add-edit-agence/add-edit-agence.component';
import {AgencesComponent} from "./agences.component";
import {SharedModule} from "../../../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TableService} from "../../../_services/table.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "../table/table.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
    declarations: [
        AgencesComponent,
        ListAgencesComponent,
        AddEditAgenceComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AgencesRoutingModule,
        NgbModule, SharedModule, TableModule, ReactiveFormsModule, NgxSpinnerModule, NgxPaginationModule
    ],
    providers: [
        TableService
    ]
})
export class AgencesModule { }
