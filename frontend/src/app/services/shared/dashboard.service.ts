import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CatalogoServes} from '../Catalogos/catalogos.service';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URICliente = 'http://localhost:8000/api/dashboard';

  constructor( private cataServes:CatalogoServes,private http: HttpClient ) { }



  formUser: FormGroup = new FormGroup({
    id:  new FormControl(''),
    avatar: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    celular: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    identificacion: new FormControl('', [Validators.required]),
    identificacion_id: new FormControl('', Validators.required),
    departamento_id: new FormControl('', Validators.required),
    ciudad_id: new  FormControl('', Validators.required),
  });




  initializeFormGroup(){
    this.formUser.setValue({
      avatar: '',
      nombre: '',
      apellido: '',
      telefono: '',
      celular: 0,
      identificacion_id: 0,
      departamento_id: 0,
      ciudad_id: 0,
    })
  }

  updateCliente(id: number|string,updatedCliente){
    return this.http.put(`${this.API_URICliente}/datos-personales/${id}`, updatedCliente);
  }

  guardarDirecion(direccion){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`${this.API_URICliente}/datos-personales/addDireccion` , direccion , {headers: headers});
  }

  getDomiciliosCleinte(id:number){
    return this.http.get(`${this. API_URICliente}/datos-personales/getDireccion/${id}`);
  }


}
