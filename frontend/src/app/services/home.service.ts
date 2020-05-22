import { ImagenesProductos } from "./../models/ImagenespProductos";
import { Testimonio } from "../models/testimonios";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // this module makes the petition HTTP TO ASK FOR INFO
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTestimonios() {
    return this.http.get<Testimonio[]>(
      environment.API_URL + "/testimonio-ventas"
    );
  }

  getImagenesProductso() {
    return this.http.get<ImagenesProductos[]>(
      environment.API_URL + "/imagenes-productos-destacados"
    );
  }
}
