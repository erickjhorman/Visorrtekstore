import { Testimonio } from '../models/testimonios';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  getTestimonios() {
    return this.http.get<Testimonio[]>(environment.API_URL +  '/testimonio-ventas');
  }
}
