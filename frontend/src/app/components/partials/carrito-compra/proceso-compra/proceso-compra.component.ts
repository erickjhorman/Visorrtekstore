import { Component, OnInit, Inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MatTableDataSource } from "@angular/material"; //To get the information to store in the table
import { CatalogoServes } from "../../../../services/Catalogos/catalogos.service";
import { FormDireccioneUsuarioComponent } from "../procesoCompra/form-direccione-usuario/form-direccione-usuario.component";
import { FormTransportadoraComponent } from "../procesoCompra/form-transportadora/form-transportadora.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { SharedService } from "../../../../services/shared/shared.service";
import { PagoService } from "../../../../services/pagos/pago.service";
import { Router } from "@angular/router";
import { DashboardService } from "../../../../services/shared/dashboard.service";
import { FormDireccioneUsuarioShowComponent } from "../procesoCompra/form-direccione-usuario-show/form-direccione-usuario-show.component";

@Component({
  selector: "app-proceso-compra",
  templateUrl: "./proceso-compra.component.html",
  styleUrls: ["./proceso-compra.component.css"]
})
export class ProcesoCompraComponent implements OnInit {
  private user: any;
  valuesArrayCompras: any;
  precio_total: number;
  valuesFormDireccione: any;
  valuesFormTransportadora: any;
  domicilio: any;
  showBtnDomicilio = true;

  private transportadora: any;
  private departamentos: any;
  private ciudades: any;
  isLinear = false;
  show = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProcesoCompraComponent>,
    private cataServes: CatalogoServes,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private sharedService: SharedService,
    private pagosServices: PagoService,
    private router: Router
  ) {
    console.log(data);

    //To share the form in preceso compra componenet
    this.sharedService.formValues.subscribe(valuesForm => {
      this.valuesFormDireccione = valuesForm;
      console.log(this.valuesFormDireccione);
    });

    //To share the form in preceso compra componenet
    this.sharedService.formValuesTransportadora.subscribe(valuesForm => {
      this.valuesFormTransportadora = valuesForm;
      console.log(this.valuesFormTransportadora);
    });
  }

  //Code for create the table with information
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ["Nombre", "cantidad", "valorventa"];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });

    this.createTableToshow();

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user);
    this.getDireccionCliente(this.user.id);
  }

  createTableToshow() {
    const finalArrayTotalItem = this.data;
    this.listData = new MatTableDataSource(finalArrayTotalItem);
  }

  getTotalPrice() {
    for (let i = 0; i < this.data.length; i++) {
      this.precio_total = this.data[i].Total;
      return this.precio_total;
    }
  }

  //Get nombre transportadora
  getTransportadora() {
    this.cataServes.getTransportadoras().subscribe(
      res => {
        this.transportadora = res;
        this.onCreateDialogTransportadora(this.transportadora);
      },
      err => console.log(err)
    );
  }

  getDireccionCliente(id: number) {
    this.dashboardService.getDomiciliosCleinte(id).subscribe(
      res => {
        this.domicilio = res;

        if (this.domicilio.length) {
          this.showBtnDomicilio = true;
        } else {
          this.showBtnDomicilio = !this.showBtnDomicilio;
        }

        console.log(this.domicilio);
      },
      err => console.log(err)
    );
  }

  //To get the deparment for direccion Form
  // showDomicilio(){
  //   this.cataServes.getDepartamentos().subscribe(
  //     res =>{

  //           this.departamentos= res
  //           this.onCreateDialogDireccionUsuario(this.departamentos,this.domicilio)
  //        },
  //     err => console.log(err)
  //   )
  // }

  showDomicilio() {
    console.log("Show domicilio" + this.domicilio);
    this.onCreateShow(this.domicilio);
  }

  addDomicilio() {
    this.cataServes.getDepartamentos().subscribe(
      res => {
        this.departamentos = res;
        this.onCreateDomicilio(this.departamentos);
      },
      err => console.log(err)
    );
  }
  getCiudades(id: number) {
    this.cataServes.getCiudades(id).subscribe(
      res => {
        this.ciudades = res;
      },
      err => console.log(err)
    );
  }

  //Dialog para transportadora
  onCreateDialogTransportadora(transportadora: any) {
    const dialogConfig = new MatDialogConfig();
    //console.log("1 paso" + productoShow)
    let t = transportadora;
    //console.log("Create productos" + showProductos)
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = t;
    this.dialog.open(FormTransportadoraComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => {
      //this.ocultarItemSelleccionado = true;
      //console.log("Respuesta" + this.ocultarItemSelleccionado);
    });
  }

  //Dialog para direccion usuario
  onCreateShow(data) {
    const dialogConfig = new MatDialogConfig();
    let d = data;
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "400px";
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = d;
    this.dialog.open(FormDireccioneUsuarioShowComponent, dialogConfig);
    console.log("Ver domicilio");
  }

  onCreateDomicilio(data) {
    const dialogConfig = new MatDialogConfig();
    let d = data;
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "750px";
    dialogConfig.height = "400px";
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = d;
    this.dialog.open(FormDireccioneUsuarioComponent, dialogConfig);
    console.log("Añadir direccion");
  }

  onClose() {
    this.dialogRef.close();
  }

  redirigeDashboard() {
    this.dialogRef.close();
    this.router.navigateByUrl("/dashboard"); //To redirect to another component
  }

  enviarMensajeVendedor() {
    this.show = !this.show;
  }
}
