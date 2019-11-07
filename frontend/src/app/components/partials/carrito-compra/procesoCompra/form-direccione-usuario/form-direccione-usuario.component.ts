import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CatalogoServes } from "../../../../../services/Catalogos/catalogos.service";
import { SharedService } from "../../../../../services/shared/shared.service";
import { ProcesoCompra } from "../../../../../services/procesoCompra.service";
import { NotificationService } from "../../../../../services/shared/notification.service";
import { DashboardService } from "../../../../../services/shared/dashboard.service";
import { ProcesoCompraComponent } from "../../proceso-compra/proceso-compra.component";

@Component({
  selector: "app-form-direccione-usuario",
  templateUrl: "./form-direccione-usuario.component.html",
  styleUrls: ["./form-direccione-usuario.component.css"]
})
export class FormDireccioneUsuarioComponent implements OnInit {
  private departamentos: any;
  private ciudades: any;
  private domicilio: any;
  private user: any;

  infoDireccionesForm: any;
  valuesFormDireccione: any;
  show: boolean = false;

  @Output() viewAdress = new EventEmitter<boolean>();
  activateButtonView = false;
  //Form
  FormDireccionesUsuario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDireccioneUsuarioComponent>,
    private cataloServe: CatalogoServes,
    private sharedService: SharedService,
    private procesoCompra: ProcesoCompra,
    private notificationService: NotificationService,
    private dashboardService: DashboardService
  ) {
    this.departamentos = data;

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user.id);

    this.FormDireccionesUsuario = new FormGroup({
      departamento: new FormControl("", [Validators.required]),
      ciudad: new FormControl("", [Validators.required]),
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),

      idCliente: new FormControl(this.user.id),
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

  onSave() {
    if (this.FormDireccionesUsuario.valid) {
      this.procesoCompra
        .saveDireccion(this.FormDireccionesUsuario.value)
        .subscribe(res => {}, err => {});
      this.sharedService.getFormDirecciones(this.FormDireccionesUsuario.value);
      this.sharedService.EmitVer(true);
      this.notificationService.success("Direccion almacenada");
      this.onClose();
    }
  }

  viewDireccion(value: boolean) {
    this.viewAdress.emit(value);
    this.activateButtonView = true;
  }

  onClear() {
    this.FormDireccionesUsuario.reset();
  }
}
