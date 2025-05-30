import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {AddEditUsersComponent} from "./add-edit-users/add-edit-users.component";
import {UserResolver} from "../../../Resolver/user-resolver";


const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListUsersComponent,
        data: {
          title: 'Liste des utilisateurs',
          breadcrumb: 'liste'
        }
      },
    ],
  },
  {
    path: 'add-edit',
    component: AddEditUsersComponent,
    resolve:{user:UserResolver},

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
export class UsersRoutingModule { }
