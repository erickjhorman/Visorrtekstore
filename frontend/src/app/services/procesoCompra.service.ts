import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // this module makes the petition HTTP TO ASK FOR INFO
import { Imagen } from "../../app/models/imagenesSidebar";
import "rxjs";
import { Observable, pipe } from "rxjs";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProcesoCompra {
  API_URI = "http://localhost:8000/api/procesoCompra/addDireccion";

  constructor(private http: HttpClient) {}

  saveDireccion(direccion: any) {
    const headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.post(`${this.API_URI}`, direccion, {
      headers: headers
    });
  }
}
