import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // private iss = {
  //   login: 'http://localhost:8000/api/login',
  //   signup: 'http://localhost:8000/api/signup'
  // };

  private iss = {
    login: environment.API_URL + 'login',
    signup: environment.API_URL + '/signup'
  };

  typeUser: any;

  constructor() {}

  handle(token) {
    this.set(token);
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

  isValid() {
    const Token = this.get();
    console.log(Token);
    if (Token) {
      const payload = this.payload(Token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  // loggedIn(){
  //   if(localStorage.getItem('token') != null )
  //     return true;
  //    }

  // loggedIn() {
  //   if (localStorage.getItem("token") != null)

  //   return true;
  // }

  loggedIn() {
    if  (localStorage.getItem('token') != null) { return true; }
  }

  isAdmin() {
    const  user = this.getUser();

    if  (user === '1') { return true; }
  }

  // isAdmin() {
  //   if (localStorage.getItem("token") != null) return true;
  // }
}
