import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ImagenesService {

  // API_URI = 'http://localhost:8000/api/imagenes';


  constructor(private http: HttpClient) { }


  // get() {
  //   return this.http.get(this.API_URI);
  //  }

   get() {
    return this.http.get(environment.API_URL + '/imagenes');
   }
}

