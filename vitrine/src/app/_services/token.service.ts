import { Injectable } from '@angular/core';
import {GlobalsService} from "./globals.service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: `${this.global.getBaseUrl()}auth/login`,
    signup: `${this.global.getBaseUrl()}auth/register`

  };

  constructor(private global :GlobalsService) {
  }
  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (token ) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload) {
    if(payload)
      return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
