import { Component, OnInit , Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {Transportadora} from '../../../../../models/transportadora';

@Component({
  selector: 'app-form-transportadora',
  templateUrl: './form-transportadora.component.html',
  styleUrls: ['./form-transportadora.component.css']
})
export class FormTransportadoraComponent implements OnInit {
  t: Transportadora = {
    id: null,
    nombre: null,
    valor_envio: null,


  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,private dialogRef: MatDialogRef<FormTransportadoraComponent>,) {
    console.log( data);
   }


     ngOnInit() {

  }

  onClose(){
    this.dialogRef.close();
   }
}
