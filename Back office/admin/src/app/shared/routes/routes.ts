import { Routes } from '@angular/router';
import {authGuard} from "../../_services/auth.guard";


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/admin/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Dashboard",
    },
  },
  {
    path: 'agencies',
    loadChildren: () => import('../../components/admin/agences/agences.module').then(m => m.AgencesModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Agences",
    },
  },

  {
    path: 'users',
    loadChildren: () => import('../../components/admin/users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Utilisateurs",
    },
  },
  {
    path: 'events',
    loadChildren: () => import('../../components/admin/event/event.module').then(m => m.EventModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Utilisateurs",
    },
  },
  {
    path: 'permissions',
    loadChildren: () => import('../../components/admin/Permissions/permissions.module').then(m => m.PermissionsModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Permissions",
    },
  },

  { path: 'profil',
    loadChildren: () => import('../../components/admin/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Permissions",
    },
  },{
    path: 'reservations',
    loadChildren: () => import('../../components/admin/reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Permissions",
    },
  },{
    path: 'partenaires',
    loadChildren: () => import('../../components/admin/partner/partner.module').then(m => m.PartnerModule),
    canActivate: [authGuard],

    data: {
      breadcrumb: "Partenaires",
    },
  },
  {
    path: 'tables',
    loadChildren: () => import('../../components/admin/table/table.module').then(m => m.TableModule),
    canActivate: [authGuard],
    data: {
      breadcrumb: "Agences",
    },
  },{
    path: 'boutique',
    loadChildren: () => import('../../components/admin/boutique/boutique.module').then(m => m.BoutiqueModule),
    canActivate: [authGuard],
    data: {
      breadcrumb: "Boutique",
    },
  },
];
export const contentAuth: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../../components/auth/login/login.module').then(m => m.LoginModule),

  },

];
export const Activate: Routes = [
  {
    path: 'activate_account',
    loadChildren: () => import('../../components/auth/activate-acount/activate-acount.module').then(m => m.ActivateAcountModule),

  },{
    path: 'forget_password',
    loadChildren: () => import('../../components/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule),

  },

];