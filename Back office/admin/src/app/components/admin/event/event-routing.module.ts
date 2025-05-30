import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEventComponent} from "./list-event/list-event.component";
import {AddEditEventComponent} from "./add-edit-event/add-edit-event.component";
import {AgenceResolver} from "../../../Resolver/agence-resolver";
import {EventResolver} from "../../../Resolver/event-resolver";

const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListEventComponent,
        data: {
          title: 'Liste des événements',
          breadcrumb: 'liste'
        }
      },
    ],
  },
  {
    path: 'add-edit',
    component: AddEditEventComponent,
    resolve:{Event:EventResolver},
    data: {
      title: 'Ajouter / Modifier',
      breadcrumb: 'Ajouter - Modifier'
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
