import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile.component";

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'profil',
        component: ProfileComponent,
        data: {
          title: 'Profil',
          breadcrumb: 'Profil'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
