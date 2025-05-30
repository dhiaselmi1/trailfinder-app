import {HostListener, Injectable, OnInit} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {NgxPermissionsService} from "ngx-permissions";
import * as _ from 'lodash';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnInit{
    MENUITEMS:any = [];

    constructor(
            private permissionsService: NgxPermissionsService) {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebarMainMenu = false;
      this.collapseSidebarSecondMenu = true;
    }

        console.log(this.permissionsService.getPermissions())
    if(this.havePermission("CheckDashboard")) {
      this.MENUITEMS.push({
        title: 'Dashboard', path: '/dashboard/dashboard', icon: 'display1', type: 'sub', active: true, children:
            [
              {
                title: 'Dashboard', type: 'sub', active: true, children: [
                  {path: '/dashboard/dashboard', title: 'Dashboard', type: 'link'},
                ]
              }
            ],
      })

    }


    if(this.havePermission("ManageAgencies"))
    {
      this.MENUITEMS.push(
          {
        title: 'Agences',
        path: '/agencies/list',
        icon: 'plane',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Agences', type: 'sub', active: false, children: [
                  { path: '/agencies/list', title: 'List', type: 'link' },
                  { path: '/agencies/add-edit', title: 'Ajouter / Modifier', type: 'link' }
                ]
              }
            ],
      });
    }
    if(this.havePermission("ManageUsers"))
    {
      this.MENUITEMS.push( {
        title: 'Utilisateurs',
        path: '/users/list',
        icon: 'users',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Users', type: 'sub', active: false, children: [
                  { path: '/users/list', title: 'List', type: 'link' },
                  { path: '/users/add-edit', title: 'Ajouter / Modifier', type: 'link' }
                ]
              }
            ],
      });
    }
      if(this.havePermission("ManageEvents"))
    {
      this.MENUITEMS.push( {
        title: 'Événements',
        path: '/events/list',
        icon: 'date',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Events', type: 'sub', active: false, children: [
                  { path: '/events/list', title: 'List', type: 'link' },
                  { path: '/events/add-edit', title: 'Ajouter / Modifier', type: 'link' }
                ]
              }
            ],
      } );
    }
      if(this.havePermission("AddReservations"))
    {
      this.MENUITEMS.push( {
        title: 'Reservations',
        path: '/reservations/list',
        icon: 'ticket',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Reservations', type: 'sub', active: false, children: [
                  { path: '/reservations/list', title: 'List', type: 'link' },
                  { path: '/reservations/add', title: 'Ajouter', type: 'link' }
                ]
              }
            ],
      });}
      if(this.havePermission("ManagePermissions"))
    {
      this.MENUITEMS.push({
        title: 'Permissions',
        path: '/permissions/permission',
        icon: 'unlock',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Permissions', type: 'sub', active: false, children: [
                  { path: '/permissions/permission', title: 'Permissions', type: 'link' },
                  { path: '/permissions/add-role', title: 'Ajouter rôle', type: 'link' },
                  { path: '/permissions/add-permission', title: 'Ajouter  permission', type: 'link' },
                ]
              }
            ],
      });
        this.MENUITEMS.push( {
            title: 'Boutique',
            path: '/boutique/list',
            icon: 'cart',
            type: 'sub',
            active: false,
            children:
                [
                    {
                        title: 'Boutique', type: 'sub', active: false, children: [
                            { path: '/boutique/list', title: 'Liste produits', type: 'link' },
                            { path: '/boutique/add-edit', title: 'Ajouter / Modifier', type: 'link' },
                            { path: '/boutique/list-achat', title: 'Liste achats', type: 'link' }
                        ]
                    }
                ],
        });}
 if(this.havePermission("ManageProfil"))
    {
      this.MENUITEMS.push( {
        title: 'Profil',
        path: '/profil/profil',
        icon: 'id',
        type: 'sub',
        active: false,
        children:
            [
              {
                title: 'Profil', type: 'sub', active: false, children: [
                  { path: '/profil/profil', title: 'Profil', type: 'link' },
                ]
              }
            ],
      });}
 if(this.havePermission("ManagePartner"))
    {
      this.MENUITEMS.push( {

        title: 'Partenaires',
            path: '/partenaires/list',
          icon: 'link',
          type: 'sub',
          active: false,
          children:
        [
          {
            title: 'Partenaires', type: 'sub', active: false, children: [
              { path: '/partenaires/list', title: 'List', type: 'link' },
              { path: '/partenaires/add-edit', title: 'Ajouter / Modifier', type: 'link' } ,
              { path: '/partenaires/add-image', title: 'Ajouter images', type: 'link' }
            ]
          }
        ],
      });}

  }


    getCurrentPermissions() {
        const loadedPermission = Object.keys(this.permissionsService.getPermissions());

        return loadedPermission;
    }
    /**
     *
     * @param name_permission
     */
    havePermission(name_permission) {
        return this.inArray(this.getCurrentPermissions(), name_permission);
    }

    /**
     * Search in array
     * @param array
     * @param search
     */
    inArray(array, search) {
        return _.includes(array, search);
    }
    ngOnInit(): void {

    }
  public openclass: boolean = false;
  public screenWidth: any;

  public collapseSidebarMainMenu = false;
  public collapseSidebarSecondMenu = false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  public fullScreen = false;



  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  // Windows width
  @HostListener("window:resize", ["$event"])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
}
