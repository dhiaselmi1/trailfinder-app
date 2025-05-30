import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListReservationsComponent} from "./list-reservations/list-reservations.component";
import {AddReservationsComponent} from "./add-reservations/add-reservations.component";

const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListReservationsComponent,
        data: {
          title: 'Liste des réservations',
          breadcrumb: 'Liste'
        }
      },
    ],
  },
  {
    path: 'add',
    component: AddReservationsComponent,
    data: {
      title: 'Ajouter une réservation',
      breadcrumb: 'Ajouter une réservation'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
