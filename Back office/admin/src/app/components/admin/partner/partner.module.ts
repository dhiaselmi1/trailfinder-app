import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { ListPartnerComponent } from './list-partner/list-partner.component';
import { AddEditPartnerComponent } from './add-edit-partner/add-edit-partner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddImageComponent } from './add-image/add-image.component';


@NgModule({
  declarations: [
    ListPartnerComponent,
    AddEditPartnerComponent,
    AddImageComponent
  ],
    imports: [
        CommonModule,
        PartnerRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PartnerModule { }
