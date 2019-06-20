import { Component, OnInit, Input, Inject } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import { BehaviorSubject } from 'rxjs';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-mostrar-detalle-producto',
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrls: ['./mostrar-detalle-producto.component.css']
})
export class MostrarDetalleProductoComponent implements OnInit {
  panelOpenState = false;
  nombre: any;
  constructor  (private catalogoService: CatalogoServes ,
      public dialogRef: MatDialogRef<MostrarDetalleProductoComponent>) {

    this.nombre
    console.log(this.nombre)

  }



  ngOnInit()

  {

  }

  onClose(){
  this.dialogRef.close();
  }





  };



