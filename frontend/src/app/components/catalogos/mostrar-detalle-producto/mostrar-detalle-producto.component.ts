import { Component, OnInit, Input, Inject } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import { BehaviorSubject } from 'rxjs';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mostrar-detalle-producto',
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrls: ['./mostrar-detalle-producto.component.css']
})
export class MostrarDetalleProductoComponent implements OnInit {
  panelOpenState = false;
  nombre: any;


   @Input() producto:any;
  constructor  (@Inject(MAT_DIALOG_DATA) public data: any , private catalogoService: CatalogoServes ,
      public dialogRef: MatDialogRef<MostrarDetalleProductoComponent>) {

    console.log("My array " + this.data);

  }

  ngOnInit(){}

  onClose(){
  this.dialogRef.close();
  }





  };



