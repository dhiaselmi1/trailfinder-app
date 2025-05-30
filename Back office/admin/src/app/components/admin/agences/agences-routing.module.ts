import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgencesComponent} from "./agences.component";
import {AddEditAgenceComponent} from "./add-edit-agence/add-edit-agence.component";
import {ListAgencesComponent} from "./list-agences/list-agences.component";
import {AgenceResolver} from "../../../Resolver/agence-resolver";
import {authGuard} from "../../../_services/auth.guard";


const  routes: Routes = [
  {
    path: '',

        children: [
          {
            path: 'list',
            component: ListAgencesComponent,
            canActivate: [authGuard],
            data: {
              title: 'Liste des agences',
              breadcrumb: 'liste'
            }
          },
        ],
      },
      {
        path: 'add-edit',
        component: AddEditAgenceComponent,
        canActivate: [authGuard],
        resolve:{Agency:AgenceResolver},
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
export class AgencesRoutingModule { }
