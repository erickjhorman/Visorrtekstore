import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup} from '../models/signup';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResponseResetService {

  // API_URI = 'http://localhost:8000/api/auth/';
  constructor(private http: HttpClient) { }


  changePassword(signup: Signup) {
    const headers = new HttpHeaders({'content-type': 'application/json'});

    return this.http.post(environment.API_URL + '/auth/' + 'resetPassword', signup, {headers: headers});
   }

}
