import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  API_URI = 'http://localhost:8000/api/v1/charges';

  //I instanced the module httpClient

  constructor(private http: HttpClient) { }

  chargeMoney(token:any){
    console.log("Service " + token);
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`${this.API_URI}`, token, {headers: headers});
  }




}
