import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO

import { Comentario } from './../../models/comentario';
import { VentasDestacadas } from '../../models/ventasDestacadas';
import { ShowProducts } from './../../models/ShowProducts';
import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CatalogoServes {
  // API_URI = "http://localhost:8000/api/catalogos";
  // API_URIUser = "http://localhost:8000/api/user";
  // API_URICliente = "http://localhost:8000/api/dashboard";

  // API_URI = 'api/catalogos';
  // API_URIUser = 'api/user';
  // API_URICliente = 'api/dashboard';

  // API_URIProductos = 'http://localhost:8000/api/catalogos/marca';
  nombre: string = undefined;

  constructor(private http: HttpClient) { }

  // get() {
  //   return this.http.get(this.API_URI);
  // }

  get() {
    return this.http.get(environment.API_URL + '/catalogos');
  }

  getProductosDestacados(): Observable<VentasDestacadas[]> {
    return this.http.get<VentasDestacadas[]>(
      `${environment.API_URL}/productosDestacados`
    );
  }

  getMarcas(id: number) {
    return this.http.get(`${environment.API_URL}/${id}`);
  }

  getProductos(id: number) {
    return this.http.get(`${environment.API_URL}/catalogos/marca/${id}`);
  }

  getProducto(id: number) {
    return this.http.get<ShowProducts[]>(
      `${environment.API_URL}/catalogos/marca/show/${id}`
    );
  }

  getColoresProductos(id: number) {
    return this.http.get(
      `${environment.API_URL}/catalogos/marca/colores/${id}`
    );
  }

  getTransportadoras() {
    return this.http.get(`${environment.API_URL}/user/transportadora`);
  }



  getDepartamentos() {
    return this.http.get(`${environment.API_URL}/user/departamentos`);
  }

  getCiudades(id: number) {
    return this.http.get(`${environment.API_URL}/departamentos/ciudades/${id}`);
  }



  getCliente(id: number) {
    return this.http.get(`${environment.API_URL}/datos-personales/${id}`);
  }



  updateCliente(id: number, updatedCliente) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.put(
      `${environment.API_URL}/datos-personales/${id}`,
      updatedCliente,
      { headers: headers }
    );
  }


  getComentario(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(
      `${environment.API_URL}/catalogos/marca/show/comentario/get-comments`
    );
  }

  saveComentario(comentario: Comentario) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(
      `${environment.API_URL}/catalogos/marca/show/comentario`,
      comentario,
      {
        headers: headers,
      }
    );
  }
}
