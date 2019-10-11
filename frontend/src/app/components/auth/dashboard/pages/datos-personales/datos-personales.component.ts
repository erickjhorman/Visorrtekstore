import { Component, OnInit } from "@angular/core";
import { CatalogoServes } from "../../../../../services/Catalogos/catalogos.service";
import { DashboardService } from "../../../../../services/shared/dashboard.service";
import { Identifiers } from "@angular/compiler/src/render3/r3_identifiers";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NotificationService } from "../../../../../services/shared/notification.service";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-datos-personales",
  templateUrl: "./datos-personales.component.html",
  styleUrls: ["./datos-personales.component.css"]
})
export class DatosPersonalesComponent implements OnInit {
  tiles: Tile[] = [{ text: "One", cols: 7, rows: 3 }];

  formUser: FormGroup = new FormGroup({
    avatar: new FormControl(""),
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
    telefono: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    celular: new FormControl("", [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13)
    ]),
    identificacion: new FormControl("", [Validators.required]),
    identificacion_id: new FormControl("", [Validators.required]),
    departamento_id: new FormControl("", [Validators.required]),
    ciudad_id: new FormControl("", [Validators.required])
  });

  restartFormGroup() {
    this.formUser.setValue({
      avatar: "",
      nombre: "",
      apellido: "",
      telefono: "",
      celular: "",
      identificacion: "",
      identificacion_id: "",
      departamento_id: "",
      ciudad_id: ""
    });
  }

  private departamentos: any;
  private ciudades: any;
  private id: number;
  private user: any;
  private cliente: any;
  constructor(
    private dashboardService: DashboardService,
    private cataloServe: CatalogoServes,
    private notificacion: NotificationService
  ) {}

  identificaciones = [
    { id: 3, value: "CC" },
    { id: 2, value: "Tarjeta de identidad" },
    { id: 3, value: "PP" }
  ];

  ngOnInit() {
    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user);
    this.getDepartamentos();
    this.getClientes(this.user.id);
  }

  onSubmit() {
    console.log(this.formUser.value);
    if (this.formUser.valid) {
      this.dashboardService
        .updateCliente(this.formUser.value, this.user.id)
        .subscribe(
          res => {
            this.formUser.reset();
            this.restartFormGroup();
            this.notificacion.success("Usuario actualizado satisfactoriamente");
          },
          err => console.log(err)
        );
    }
  }

  getClientes(id: number) {
    this.cataloServe.getCliente(id).subscribe(
      res => {
        this.cliente = res;
        //console.log(this.cliente);
      },
      err => console.log(err)
    );
  }

  onClear() {
    this.formUser.reset();
    this.restartFormGroup();
  }

  ChangeId(selectedId: number) {
    this.getCiudades(selectedId);
    console.log(selectedId);
  }

  getDepartamentos() {
    this.cataloServe.getDepartamentos().subscribe(
      res => {
        this.departamentos = res;
        console.log(this.departamentos);
      },
      err => console.log(err)
    );
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
}
