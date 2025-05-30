import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPartnerComponent} from "./list-partner/list-partner.component";
import {AddEditPartnerComponent} from "./add-edit-partner/add-edit-partner.component";
import {AgenceResolver} from "../../../Resolver/agence-resolver";
import {PartnerResolver} from "../../../Resolver/partner-resolver";
import {AddImageComponent} from "./add-image/add-image.component";

const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListPartnerComponent,
        data: {
          title: 'Liste des partenaires',
          breadcrumb: 'Liste'
        }
      },
    ],
  },
  {
    path: 'add-edit',
    component: AddEditPartnerComponent,
    resolve:{Partner:PartnerResolver},
    data: {
      title: 'Ajouter / Modifier',
      breadcrumb: 'Ajouter - Modifier'
    }
  },
  {
    path: 'add-image',
    component: AddImageComponent,
    resolve:{Partner:PartnerResolver},
    data: {
      title: 'Ajouter images',
      breadcrumb: 'Ajouter images'
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
