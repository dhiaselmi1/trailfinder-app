import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }


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


}
