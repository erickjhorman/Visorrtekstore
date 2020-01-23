import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Mensaje } from "../../models/mensaje";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DashboardAdminService {
  api_admin = "http://localhost:8000/api/admin";

  constructor(private http: HttpClient) {}

  getVentas() {
    return this.http.get(`${this.api_admin}/list-ventas`);
  }

  getMensajesUsuario(id: String) {
    return this.http.get(`${this.api_admin}/get-mensaje-usuario`);
  }

  getMensajes(id: String) {
    return this.http.get(`${this.api_admin}/get-all-mensaje-usuarios/${id}`);
  }

  saveMensaje(mensaje: Mensaje): Observable<any> {
    return this.http.post(`${this.api_admin}/mensaje`, mensaje);
  }
}
