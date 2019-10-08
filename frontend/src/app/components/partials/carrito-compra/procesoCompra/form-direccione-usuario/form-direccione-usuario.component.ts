import { Component, OnInit , Inject, Output , EventEmitter} from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CatalogoServes} from '../../../../../services/Catalogos/catalogos.service';
import{SharedService} from '../../../../../services/shared/shared.service';



@Component({
  selector: 'app-form-direccione-usuario',
  templateUrl: './form-direccione-usuario.component.html',
  styleUrls: ['./form-direccione-usuario.component.css']
})
export class FormDireccioneUsuarioComponent implements OnInit {

private departamentos: any;
private ciudades: any;
private domicilio: any;


infoDireccionesForm: any;
valuesFormDireccione: any;
show: boolean = false;

//Form
  FormDireccionesUsuario: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<FormDireccioneUsuarioComponent>,
    private cataloServe :CatalogoServes , private sharedService: SharedService ) {

  this.departamentos = data;




    this.FormDireccionesUsuario = new FormGroup({
      'departamento': new FormControl(),
      'ciudad': new FormControl(),
      'nombre': new FormControl(),
      'apellido': new FormControl(),
      'celular': new FormControl(),
      'barrio': new FormControl(),
      'via': new FormControl(),
      'numero': new FormControl(),
      'datosadicionales': new FormControl()
    });
  }

  miSubmit() {
    console.log(this.FormDireccionesUsuario.value);
    console.log(this.FormDireccionesUsuario );
}



  ngOnInit() {

  }

    //To get the value of the selected
    changeId($event){
      console.log($event)
      this.getCiudades($event);
    }

  onClose(){
    this.dialogRef.close();
   }

   //To get the ciudades for direccion Form
   getCiudades(id:number){
    this.cataloServe.getCiudades(id).subscribe(
      res =>{
           this.ciudades = res
           console.log(res);
      },
      err => console.log(err)
    )

  }

  guardarDirecciones(event){

    this.sharedService.getFormDirecciones(event)
  }
}
