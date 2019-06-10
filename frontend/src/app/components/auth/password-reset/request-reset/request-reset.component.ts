import { Component, OnInit } from '@angular/core';
import  {Login} from "../../../../models/login"
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

  constructor(
  private loginService: LoginService,

  ) { }

  ngOnInit() {
  }

  sendPasswordReset(){

    this.loginService.sendPasswordResetLink(this.login).subscribe(
      data => {

      this.handlResponse(data)

      }, (error) => {


    });

  }

  handlResponse(res){


    this.login.email = null;

  }
}




