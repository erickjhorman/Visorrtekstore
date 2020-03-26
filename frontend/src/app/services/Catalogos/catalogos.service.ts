import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import { Categoria } from '../../models/categoria';
import { BehaviorSubject } from 'rxjs/';
import { Comentario } from '../../models/comentario';

@Injectable({
  providedIn: 'root'
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

  constructor(private http: HttpClient) {}

  // get() {
  //   return this.http.get(this.API_URI);
  // }

    get() {
    return this.http.get(environment.API_URL);
  }


  // getProductosDestacados() {
  //   return this.http.get(`${this.API_URI}/productosDestacados`);
  // }

 getProductosDestacados() {
    return this.http.get(`${environment.API_URL}/productosDestacados`);
  }

  // getMarcas(id: number) {
  //   return this.http.get(`${this.API_URI}/${id}`);
  // }

  getMarcas(id: number) {
    return this.http.get(`${environment.API_URL}/${id}`);
  }

  // getProductos(id: number) {
  //   return this.http.get(`${this.API_URI}/marca/${id}`);
  // }

  getProductos(id: number) {
    return this.http.get(`${environment.API_URL}/marca/${id}`);
  }


  // getProducto(id: number) {
  //   return this.http.get(`${this.API_URI}/marca/show/${id}`);
  // }

  getProducto(id: number) {
    return this.http.get(`${environment.API_URL}/marca/show/${id}`);
  }

  // getColoresProductos(id: number) {
  //   return this.http.get(`${this.API_URI}/marca/colores/${id}`);
  // }

  getColoresProductos(id: number) {
    return this.http.get(`${environment.API_URL}/marca/colores/${id}`);
  }

  // To get the all comments
  // getComentarios(id: number) {
  //   return this.http.get(`${this.API_URI}/marca/show/comentario/${id}`);
  // }

  getComentarios(id: number) {
    return this.http.get(`${environment.API_URL}/marca/show/comentario/${id}`);
  }


  // getTransportadoras() {
  //   return this.http.get(`${this.API_URIUser}/transportadora`);
  // }

  getTransportadoras() {
    return this.http.get(`${environment.API_URL}/transportadora`);
  }


  // getDepartamentos() {
  //   return this.http.get(`${this.API_URIUser}/departamentos`);
  // }

  getDepartamentos() {
    return this.http.get(`${environment.API_URL}/departamentos`);
  }

  // getCiudades(id: number) {
  //   return this.http.get(`${this.API_URIUser}/departamentos/ciudades/${id}`);
  // }

  getCiudades(id: number) {
    return this.http.get(`${environment.API_URL}/departamentos/ciudades/${id}`);
  }


  // getCliente(id: number) {
  //   return this.http.get(`${this.API_URICliente}/datos-personales/${id}`);
  // }

  getCliente(id: number) {
    return this.http.get(`${environment.API_URL}/datos-personales/${id}`);
  }

  // updateCliente(id: number, updatedCliente) {
  //   const headers = new HttpHeaders({ 'content-type': 'application/json' });
  //   return this.http.put(
  //     `${this.API_URICliente}/datos-personales/${id}`,
  //     updatedCliente,
  //     { headers: headers }
  //   );
  // }

  updateCliente(id: number, updatedCliente) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.put(
      `${environment.API_URL}/datos-personales/${id}`,
      updatedCliente,
      { headers: headers }
    );
  }

  // saveComentario(comentario: Comentario) {
  //   const headers = new HttpHeaders({ 'content-type': 'application/json' });
  //   return this.http.post(`${this.API_URI}/marca/show/comentario`, comentario, {
  //     headers: headers
  //   });
  // }

  saveComentario(comentario: Comentario) {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(`${environment.API_URL}/marca/show/comentario`, comentario, {
      headers: headers
    });
  }
}
