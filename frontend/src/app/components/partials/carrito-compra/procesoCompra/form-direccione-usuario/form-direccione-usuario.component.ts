import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CatalogoServes } from "../../../../../services/Catalogos/catalogos.service";
import { SharedService } from "../../../../../services/shared/shared.service";

@Component({
  selector: "app-form-direccione-usuario",
  templateUrl: "./form-direccione-usuario.component.html",
  styleUrls: ["./form-direccione-usuario.component.css"]
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDireccioneUsuarioComponent>,
    private cataloServe: CatalogoServes,
    private sharedService: SharedService
  ) {
    this.departamentos = data;

    this.FormDireccionesUsuario = new FormGroup({
      departamento: new FormControl("", [Validators.required]),
      ciudad: new FormControl("", [Validators.required]),
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      apellido: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      celular: new FormControl("", [
        Validators.required,

        Validators.minLength(13),
        Validators.maxLength(13)
      ]),
      barrio: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      direccion: new FormControl("", [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13)
      ]),
      datosadicionales: new FormControl("", [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(75)
      ])
    });
  }

  restartFormGroup() {
    this.FormDireccionesUsuario.setValue({
      nombre: "",
      apellido: "",
      celular: "",
      departamento: "",
      ciudad: "",
      barrio: "",
      direccion: "",
      datosadicionales: ""
    });
  }

  ngOnInit() {}

  //To get the value of the selected
  changeId($event) {
    console.log($event);
    this.getCiudades($event);
  }

  onClose() {
    this.dialogRef.close();
  }

  //To get the ciudades for direccion Form
  getCiudades(id: number) {
    this.cataloServe.getCiudades(id).subscribe(
      res => {
        this.ciudades = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  onSubmit(event) {
    console.log(this.FormDireccionesUsuario.value);
    this.sharedService.getFormDirecciones(event);

    // if(this.formUser.valid){
    //   this.dashboardService.updateCliente(this.formUser.value, this.user.id).subscribe(
    //     res =>{

    //       this.formUser.reset();
    //       this.restartFormGroup();
    //       this.notificacion.success('Usuario actualizado satisfactoriamente');
    //     },
    //     err => console.log(err)
    //   )

    // }
  }

  onClear() {
    this.FormDireccionesUsuario.reset();
  }
}
