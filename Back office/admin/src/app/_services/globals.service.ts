import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {NgxPermissionsService} from "ngx-permissions";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private permissionsService: NgxPermissionsService) { }


  /**
   * Recuperer l'url de base selon le contexct de l'application
   */
  getBaseUrl() {
    return environment.host ;
  }
  /**
   * Retrieve The Current user
   */
  getCurrentUser() {

    return JSON.parse(localStorage.getItem('user'));
  }

  /**
   *  get Current Permissions
   */
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
}
