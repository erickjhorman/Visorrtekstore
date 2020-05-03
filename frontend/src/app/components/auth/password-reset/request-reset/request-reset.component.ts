import { Component, OnInit } from '@angular/core';
import {Login} from "../../../../models/login"
import { LoginService } from '../../../../services/login.service';


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

  handlResponse(res){
    this.login.email = null;
  }


  handleError(error) {
    this.error = error.error;
    console.log(this.error);
    this.login.email = '';
  }
}




