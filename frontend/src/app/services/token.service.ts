import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: string;

  constructor() {}

  handle(token) {
    this.token = token;
    this.set(this.token);
  }

  // To set the token to authenticate user
  set(token: any) {
    localStorage.setItem('token', token);
    console.log(token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }

  getUserData(): UserData {
    if (this.loggedIn()) {
      return this.payload(this.get());
    } else {
      return null;
    }
  }

  removeSessionStorage() {
    return sessionStorage.removeItem('userAuth');
  }

  // To set the type of user to authenticate user
  getUser() {
    return localStorage.getItem('tipo_usuario');
  }

  removeUser() {
    return localStorage.removeItem('tipo_usuario');
  }

  removeSessionStorageUser() {
    return localStorage.removeItem('tipo_usuario');
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    if (localStorage.getItem('token') != null) {
      return true;
    }
  }

  isAdmin() {
    const user = this.getUser();
    if (user === '1') {
      return true;
    }
  }
}
