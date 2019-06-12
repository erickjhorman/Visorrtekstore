import { Component, OnInit, Input, Inject } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {MatDialogRef} from '@angular/material';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-mostrar-detalle-producto',
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrls: ['./mostrar-detalle-producto.component.css']
})
export class MostrarDetalleProductoComponent implements OnInit {
  panelOpenState = false;

  constructor(private catalogoServe :CatalogoServes ) {}
  ngOnInit()

  {

}





  };



