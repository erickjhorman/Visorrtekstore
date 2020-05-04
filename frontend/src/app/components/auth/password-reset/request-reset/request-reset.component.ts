import { Component, OnInit } from '@angular/core';
import {Login} from '../../../../models/login';
import { LoginService } from '../../../../services/login.service';
import {NotificationService} from '../../../../services/shared/notification.service';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {


    login: Login = {
    email: null,
    password: null,
    };

    public error: any;

  constructor(
  private loginService: LoginService,
  private notiService: NotificationService
  ) { }

  ngOnInit() {
    console.log(this.error);

  }

  sendPasswordReset() {

    this.loginService.sendPasswordResetLink(this.login).subscribe(
      data => {

      this.handlResponse(data);

      }, (error) => {
        this.handleError(error);

    });

  }

  handlResponse(res) {
    console.log(res);
    const mensaje = JSON.parse(res);
    this.notiService.success(mensaje.success);
    this.login.email = null;
  }


  handleError(error) {
    this.error = error.error;
    console.log(this.error);
    this.login.email = '';

  }
}




