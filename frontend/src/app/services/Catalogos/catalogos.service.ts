import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // this module makes the petition HTTP TO ASK FOR INFO
import { Categoria } from "../../models/categoria";
import { BehaviorSubject } from "rxjs/";
import { Comentario } from "../../models/comentario";

@Injectable({
  providedIn: "root"
})
export class CatalogoServes {
  API_URI = "http://localhost:8000/api/catalogos";
  API_URIUser = "http://localhost:8000/api/user";
  API_URICliente = "http://localhost:8000/api/dashboard";

  //API_URIProductos = 'http://localhost:8000/api/catalogos/marca';
  nombre: string = undefined;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.API_URI);
  }

  getProductosDestacados() {
    return this.http.get(`${this.API_URI}/productosDestacados`);
  }

  getMarcas(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  getProductos(id: number) {
    return this.http.get(`${this.API_URI}/marca/${id}`);
  }

  getProducto(id: number) {
    return this.http.get(`${this.API_URI}/marca/show/${id}`);
  }

  getColoresProductos(id: number) {
    return this.http.get(`${this.API_URI}/marca/colores/${id}`);
  }

  //To get the all comments
  getComentarios(id: number) {
    return this.http.get(`${this.API_URI}/marca/show/comentario/${id}`);
  }

  getTransportadoras() {
    return this.http.get(`${this.API_URIUser}/transportadora`);
  }

  getDepartamentos() {
    return this.http.get(`${this.API_URIUser}/departamentos`);
  }

  getCiudades(id: number) {
    return this.http.get(`${this.API_URIUser}/departamentos/ciudades/${id}`);
  }

  getCliente(id: number) {
    return this.http.get(`${this.API_URICliente}/datos-personales/${id}`);
  }

  updateCliente(id: number, updatedCliente) {
    const headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.put(
      `${this.API_URICliente}/datos-personales/${id}`,
      updatedCliente,
      { headers: headers }
    );
  }

  saveComentario(comentario: Comentario) {
    const headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.post(`${this.API_URI}/marca/show/comentario`, comentario, {
      headers: headers
    });
  }
}
