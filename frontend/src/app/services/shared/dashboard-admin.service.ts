import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardAdminService {

  Api_admin = 'http://localhost:8000/api/admin';

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get(`${this.Api_admin}/list-ventas`);

  }

}
