import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableRoutingModule} from './table-routing.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BasicNgxDatatableComponent} from './ngx-datatables/basic/basic.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [

    BasicNgxDatatableComponent
  ],
  exports: [
    BasicNgxDatatableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class TableModule { }
