import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicNgxDatatableComponent} from './ngx-datatables/basic/basic.component';


const routes: Routes = [
  {
    path: '',
    children: [
        {
        path: "ngx-datatables",
        children: [
          {
            path: 'basic',
            component: BasicNgxDatatableComponent,
            data: {
              title: "Basic Table",
              breadcrumb: "Basic Table"
            }
          }
        ],
        data: {
          title: "Datatables",
          breadcrumb: "Datatables",
        }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
