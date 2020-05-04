import { Component, OnInit } from '@angular/core';
import { Signup} from '../../../../models/signup';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseResetService} from '../../../../services/response-reset.service';
import {NotificationService} from '../../../../services/shared/notification.service';




@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {



  public error = [];

  signup: Signup = {
    nombre: null,
    email: null,
    password: null,
    password_confirmation: null,
    email_verified: null,
    resetToken: null
    };

  constructor(
    private route: ActivatedRoute,
    private respondeReset: ResponseResetService ,
    private router: Router,
    private notiService: NotificationService

  ) {


    route.queryParams.subscribe(params => {
      this.signup.resetToken = params['token'];
    });
  }

  resetPassword() {
    this.respondeReset.changePassword(this.signup).subscribe(
      data => {
      this.handlResponse(data);
      console.log(data);


    }, (error) => {
      this.handleError(error);

    });
   }

   handlResponse(data) {
    // const succesMsg = JSON.parse(data);
    // this.notiService.success(succesMsg.success);
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
       this.error = error.error.error;
  }

  ngOnInit() {
  }

}
