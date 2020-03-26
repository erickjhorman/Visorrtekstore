import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  // API_URI = 'http://localhost:8000/api/charges';
  // API_URICompras = 'http://localhost:8000/api/dashboard/compras';
  // API_SAVE_MENSAJE = 'http://localhost:8000/api/procesoCompra/mensaje';

  // I instanced the module httpClient



  constructor(private http: HttpClient) {}

  // chargeMoney(token: any) {
  //   console.log("Service " + token);
  //   const headers = new HttpHeaders({ "content-type": "application/json" });
  //   return this.http.post(`${this.API_URI}`, token, { headers: headers });
  // }

  chargeMoney(token: any) {
    console.log('Service ' + token);
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(`${environment.API_URL}/charges`, token, { headers: headers });
  }


  // getCompras(id: number) {
  //   return this.http.get(`${this.API_URICompras}/${id}`);
  // }

  getCompras(id: number) {
    return this.http.get(`${environment.API_URL}/dashboard/compras/${id}`);
  }

  // saveMensaje(form: any) {
  //   const headers = new HttpHeaders({ "content-type": "application/json" });
  //   return this.http.post(`${this.API_SAVE_MENSAJE}`, form, {
  //     headers: headers
  //   });
  // }


  saveMensaje(form: any) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(`${environment.API_URL}/procesoCompra/mensaje`, form, {
      headers: headers
    });
  }
}
