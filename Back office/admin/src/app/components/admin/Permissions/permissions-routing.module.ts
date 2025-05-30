import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PermissionsComponent} from "./permission/permissions.component";
import {AddEditAgenceComponent} from "../agences/add-edit-agence/add-edit-agence.component";
import {AgenceResolver} from "../../../Resolver/agence-resolver";
import {AddRoleComponent} from "./add-role/add-role.component";
import {AddPermissionComponent} from "./add-permission/add-permission.component";

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'permission',
        component: PermissionsComponent,
        data: {
          title: 'Liste des permissions',
          breadcrumb: 'Liste des permissions'
        }
      },
    ],
  },
  {
    path: 'add-role',
    component: AddRoleComponent,
    data: {
      title: 'Ajouter un rôle',
      breadcrumb:  'Ajouter un rôle'
    }
  },

  {
    path: 'add-permission',
    component: AddPermissionComponent,
    data: {
      title: 'Ajouter  permission',
      breadcrumb:  'Ajouter  permission'
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }
