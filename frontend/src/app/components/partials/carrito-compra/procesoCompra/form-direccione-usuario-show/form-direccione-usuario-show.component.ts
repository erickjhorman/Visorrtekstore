import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-direccione-usuario-show',
  templateUrl: './form-direccione-usuario-show.component.html',
  styleUrls: ['./form-direccione-usuario-show.component.css'],
})
export class FormDireccioneUsuarioShowComponent implements OnInit {
  faWindowClose = faWindowClose;

  FormDireccionesUsuarioShow: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDireccioneUsuarioShowComponent>
  ) {
    this.FormDireccionesUsuarioShow = new FormGroup({
      departamento: new FormControl(),
      ciudad: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      celular: new FormControl(),
      barrio: new FormControl(),
      direccion: new FormControl(),
      datosadicionales: new FormControl(),
    });
  }

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }
}
