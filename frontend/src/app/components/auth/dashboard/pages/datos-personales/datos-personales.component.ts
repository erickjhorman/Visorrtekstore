import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../models/user'

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  U: User = {
    id: null,
    avatar: null,
    nombre: null,
    apellido: null,
    telefono: null,
    celular: null,
    identificacion_id: null,
    departamento_id: null,
    ciudad_id: null,

};


  constructor() { }

  ngOnInit() {
  }

}
