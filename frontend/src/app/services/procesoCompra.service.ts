import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProcesoCompra {
  // API_URI = 'http://localhost:8000/api/procesoCompra/addDireccion';

  constructor(private http: HttpClient) {}

  saveDireccion(direccion: any) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(`${environment.API_URL}/procesoCompra/addDireccion`, direccion, {
      headers: headers
    });
  }
}
