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
   if (this.signup.resetToken != null) {
    this.respondeReset.changePassword(this.signup).subscribe(
      data => {
      this.handlResponse(data);
      console.log(data);


    }, (error) => {
      this.handleError(error);

    });
   } else {
     this.notiService.warning('Token ya ha expirado');
   }


   }

   handlResponse(data) {
      const succesMsg = data;
      console.log('handResponse', succesMsg);
      this.notiService.success(succesMsg);
      this.router.navigateByUrl('/login');
  }

  handleError(error) {
       this.error = error.error.error;
  }

  ngOnInit() {
  }

}
