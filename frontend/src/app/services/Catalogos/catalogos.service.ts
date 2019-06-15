import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import  {Categoria} from "../../models/categoria";
import {BehaviorSubject} from 'rxjs/';
import {Comentario} from '../../models/comentario'


@Injectable({
  providedIn: 'root'
})

export class CatalogoServes {

  API_URI = 'http://localhost:8000/api/catalogos';
  //API_URIProductos = 'http://localhost:8000/api/catalogos/marca';



  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.API_URI)

  }

  getProductosDestacados(){
    return this.http.get(`${this.API_URI}/productosDestacados`);
  }

  getMarcas(id:number){
    return this.http.get(`${this.API_URI}/${id}`);
  }



  getProductos(id:number){
    return this.http.get(`${this.API_URI}/marca/${id}`);
  }

  getProducto(id:number){
    return this.http.get(`${this.API_URI}/marca/show/${id}`);
  }

  saveComentario(comentario: Comentario){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`${this.API_URI}/marca/show/comentario` , comentario , {headers: headers});

  }

}

