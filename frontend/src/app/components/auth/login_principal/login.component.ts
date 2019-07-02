import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http'; //To import the service
import  {Login} from "../../../models/login";
import {LoginService} from "../../../services/login.service";
import {ActivatedRoute , Router} from "@angular/router";
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public form = {
  //   email: null,
  //   password: null
  // };

  login: Login = {
    email: null,
    password: null,

   };

   user : any;
   admin : any;
   p: any;
  constructor(private loginService :LoginService,
     private activateRoute: ActivatedRoute, private router:Router , private Token : TokenService,
     private Auth: AuthService) {}

  //To create methods
  // onSubmit(){
  //      //console.log(this.form);
  //     return this.http.post('url', this.form).subscribe(
  //       data => console.log(data),
  //       error => console.log(error),

  //     );

  // }

  public error = null;


  ngOnInit() {

  }

   LoginIn(){
    this.loginService.loginIn(this.login).subscribe(
      data => {

      this.handlResponse(data);
      //Here i get the data from login page and i send to a function to hand it
      console.log(data);
      }, (error) => {
      this.handleError(error)
      //alert('Querry faild');
    });
   }

   handlResponse(data){
    this.user = data

    this.Token.handle(data.access_token);
    this.Auth.changeAuthStaus(true);
    sessionStorage.setItem('userAuth',JSON.stringify(this.user));

    var admin = sessionStorage.getItem('userAuth');
    this.admin =  JSON.parse(admin);

          if (this.admin.user == 1 ) {

            this.router.navigateByUrl('/admin') ;  //To redirect to another component

          } else {
            console.log("No admin ")
            this.router.navigateByUrl('/dashboard') ;  //To redirect to another component
          }
   // console.log(localStorage.getItem('userAuth'));

    //this.router.navigateByUrl('/dashboard') ;  //To redirect to another component

  }




    handleError(error){
    this.error = error.error.error;
  }


}

