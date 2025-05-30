import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

import {AgenceDashboardComponent} from "./agence-dashboard/agence-dashboard.component";
import {dashAgencyResolver} from "../../../Resolver/dashAgency-Resolver";
/*
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard'
    }
  }
];
*/

const  routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        resolve:{Agency:dashAgencyResolver},

        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      },
    ],
  },
  {
    path: 'agence-dash',
    component: AgenceDashboardComponent,
    data: {
      title: 'Dashboard Agence',
      breadcrumb: 'Dashboard-Agence'
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
