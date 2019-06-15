import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import  {Imagen} from "../../app/models/imagenesSidebar";
import 'rxjs';
import { Observable , pipe} from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ImagenesService {

  API_URI = 'http://localhost:8000/api/imagenes';


  constructor(private http: HttpClient) { }


  get() {
    return this.http.get(this.API_URI);



  }
}

