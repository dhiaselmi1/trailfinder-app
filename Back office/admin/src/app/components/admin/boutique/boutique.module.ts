import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoutiqueRoutingModule } from './boutique-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddEditProduitComponent } from './add-edit-produit/add-edit-produit.component';
import { ListAchatComponent } from './list-achat/list-achat.component';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    ListProduitComponent,
    AddEditProduitComponent,
    ListAchatComponent
  ],
    imports: [
        CommonModule,
        BoutiqueRoutingModule,
        FormsModule,
        NgxPaginationModule,
        SharedModule
    ]
})
export class BoutiqueModule { }
