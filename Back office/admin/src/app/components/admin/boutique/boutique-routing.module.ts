import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEditEventComponent} from "../event/add-edit-event/add-edit-event.component";
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {AddEditProduitComponent} from "./add-edit-produit/add-edit-produit.component";
import {ListAchatComponent} from "./list-achat/list-achat.component";
import {UserResolver} from "../../../Resolver/user-resolver";
import {ProductModel} from "../../../_models/product.model";
import {ProduitResolver} from "../../../Resolver/produit-resolver";

const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListProduitComponent,
        data: {
          title: 'Liste des produits',
          breadcrumb: 'liste des produits'
        }
      },
    ],
  },
  {
    path: 'add-edit',
    component: AddEditProduitComponent,
    resolve:{product:ProduitResolver},
    data: {
      title: 'Ajouter / Modifier',
      breadcrumb: 'Ajouter - Modifier'
    }
  },{
    path: 'list-achat',
    component: ListAchatComponent,
    data: {
      title: 'Liste des achats',
      breadcrumb: 'Liste des achats'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule { }
