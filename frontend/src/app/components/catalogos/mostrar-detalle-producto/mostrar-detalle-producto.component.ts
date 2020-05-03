import { AuthService } from "./../../../services/auth.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";

import { CatalogoServes } from "../../../services/Catalogos/catalogos.service";
import { BehaviorSubject } from "rxjs";
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { CarritoCompraComponent } from "../../partials/carrito-compra/carrito-compra.component";
import { ThrowStmt } from "@angular/compiler";
import { SharedService } from "../../../services/shared/shared.service";

import { NotificationService } from "../../../services/shared/notification.service";
import { ActivatedRoute } from "@angular/router";
import { CarroCompra } from "../../../models/carroCompra";
import { MatRadioChange, MatRadioButton } from "@angular/material/radio";

@Component({
  selector: "app-mostrar-detalle-producto",
  templateUrl: "./mostrar-detalle-producto.component.html",
  styleUrls: ["./mostrar-detalle-producto.component.css"]
})
export class MostrarDetalleProductoComponent implements OnInit {
  panelOpenState = false;
  nombre: any;
  productoAdd: any;
  coloresProductos: any;
  productSeleccionado: null;
  message: string;
  id_producto: number;
  idProduCata: any;
  public productos: any;
  public loggedin: boolean;

  @Input() producto: any;
  addproducto: any;

  @Input()
  required: boolean;

  constructor(
    private catalogoService: CatalogoServes,
    private sharedService: SharedService,
    private notificacion: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    // this.productoAdd;
  }

  carroCompra: CarroCompra = {
    producto: "",
    color: 0,
    existencia: 0,
    precio: 0,
    talla: 0,
    producto_id: 0,
    valorVenta: 0,
    cantidad: 0,
    created_at: new Date()
  };

  ngOnInit() {
    // this.sharedService.currentMessage.subscribe(message => this.message = message)
    // get the value to disable the button ver in this html

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.getProductoShow(id);
      this.getProductoColores(id);
    });

    // To get the value of the login

    this.authService.authStatus.subscribe(value => (this.loggedin = value));
    console.log(this.loggedin);
  }

  // Function to get only one producto with comments as well.
  getProductoShow(id: number) {
    this.sharedService.EmitIdproducto(id);

    this.catalogoService.getProducto(id)
    .subscribe(
    res => {
        this.productos = res;

      },
      err => console.log(err)
    );
  }

  getProductoColores(id: number) {
    this.catalogoService.getColoresProductos(id).subscribe(
      res => {
        this.coloresProductos = res;
        console.log(this.coloresProductos);
      },
      err => console.log(err)
    );
  }

  onChangeColor($event: MatRadioChange) {
    // console.log($event.source.name, $event.value);
    const color_id = $event.value;
  }

  addPseleccionado(form: NgForm) {
    console.log(form.value);

    if (form.valid) {
      console.log("Valid");

      if (this.loggedin) {
        this.sharedService.idProductosCatalogos.subscribe(id => {
          this.idProduCata = id;
          console.log(this.idProduCata);
        });

        // const inputTag = document.getElementsByName('idproducto') as HTMLInputElement;
        const id_producto = (<HTMLScriptElement[]>(
          (<any>document.getElementsByName("idproducto"))
        ))[0];

        // const value = inputTag.value;

        this.addproducto = form;
        this.sharedService.getProductoSeleccionado(this.addproducto);
        console.log("detalle producto" + this.addproducto);
        this.sharedService.sharingData.emit(this.addproducto);
        this.notificacion.success("Añadiste un producto");

        console.log(this.idProduCata);
        console.log(id_producto);

        this.sharedService.getDeshabilitarBtnVer(true);
      } else {
        this.notificacion.warning("Debes loguerate para añadir productos");
      }
    }

    // sessionStorage.setItem('productos',JSON.stringify(this.productoAdd));
    // this.addProductoModel(this.productoAdd)

    // To pass an array to the data variable
    // this.productoSeleccinado.emit({data: this.nombre})
  }

  // addProductoModel(producto:any){
  //   const dialogConfig = new  MatDialogConfig();
  //   console.log("1 paso" + producto)
  //   let productoSeleccionado = producto
  //   let p = JSON.stringify(productoSeleccionado)
  //   console.log("Producto seleccionado" + p)
  //   dialogConfig.disableClose = true;
  //   //dialogConfig.autoFocus = true;
  //   dialogConfig.width = "400px";
  //   dialogConfig.height = "400px";
  //  // dialogConfig.data = {name : 'Erick'}
  //   dialogConfig.data = p;

  //   this.dialog.open(CarritoCompraComponent, dialogConfig,)
  //  }

  //  newMessage(){
  //    this.sharedService.changeMessage("Hola desde detalle producto");
  //    console.log("variable enviada mensaje");
  //  }

  enviarVariable(producto: any) {
    this.sharedService.getProductoSeleccionado(producto);
    console.log("variable enviada producto");
  }

  meGusta(event) {
    console.log(event);
  }
}
