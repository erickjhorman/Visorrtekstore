import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comentario } from '../../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

//To select the comment and save the selected one in my model
selectedCometario: Comentario;


  constructor(private http: HttpClient ) { }
}
