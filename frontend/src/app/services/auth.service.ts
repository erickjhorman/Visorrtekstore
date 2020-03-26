import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggeIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

  private typeUser = new BehaviorSubject<boolean>(this.Token.isAdmin());

  authStatus = this.loggeIn.asObservable();
  typeUserStatus = this.typeUser.asObservable();

  changeAuthStaus(value: boolean) {
    this.loggeIn.next(value);
    console.log(this.typeUser);
  }

  changeTypeUserStatus(value: boolean) {
    this.typeUser.next(value);
    console.log('changeTypeUserStatus' + value);
  }

  constructor(private Token: TokenService) {}
}
