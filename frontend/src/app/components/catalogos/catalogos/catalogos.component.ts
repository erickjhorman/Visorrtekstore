import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';

import { MostrarDetalleProductoComponent } from '../mostrar-detalle-producto/mostrar-detalle-producto.component';
import { CarritoCompraComponent } from '../../partials/carrito-compra/carrito-compra.component';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css'],
})
export class CatalogosComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoServes,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  show = false;
  hidden = true;
  marca: any;
  productos: any;
  ocultarItemSelleccionado: any;
  deshabilitar = false;
  idProducto: boolean;

  // productoAdd: any
  public productoShow: any; // Variable to get the information of the current prouct to show in the patent component
  public producto: any;
  public colores_productos: any;

  // public product = "Erick"

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      console.log('Catalogo' + id);
      this.getproductos(id);
    });

    // get the value to disable the button ver in this html
    this.sharedService.valorDeshabilitarBtnVerCatalogos.subscribe((valor) => {
      this.deshabilitar = true;
    });

    // Get the value from shared.service
    this.sharedService.mostrarComponente.subscribe((hidden2) => {
      console.log(hidden2);
      this.toogleHidden(hidden2);
    });
  }

  getproductos(id: number) {
    this.catalogoService.getProductos(id).subscribe(
      (res) => {
        this.productos = res;

      },
      (err) => console.log(err)
    );
  }

  onCreate(productoShow: any) {
    const dialogConfig = new MatDialogConfig();
    console.log('1 paso' + productoShow);
    const showProductos = productoShow;
    console.log('Create productos' + showProductos);
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.height = '400px';
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = showProductos;
    this.dialog.open(MostrarDetalleProductoComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe((res) => {
      this.ocultarItemSelleccionado = true;
      console.log('Respuesta' + this.ocultarItemSelleccionado);
    });
  }

  // Function to get only one producto with comments as well.
  getProductoShow(id: number) {
    this.sharedService.EmitIdproducto(id);

    this.catalogoService.getProducto(id).subscribe(
      (res) => {
        this.productoShow = res;
      },
      (err) => console.log(err)
    );
  }

  // Añadir producto
  addProducto(id: number) {
    this.addProductoModel(id);
  }

  addProductoModel(id: any) {
    const dialogConfig = new MatDialogConfig();
    console.log('1 paso' + id);
    const productoSeleccionado = id;
    console.log('Producto seleccionado' + productoSeleccionado);
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '400px';
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = productoSeleccionado;

    this.dialog.open(CarritoCompraComponent, dialogConfig);
  }

  recibirProducto(producto: any) {
    // this.productoAdd = producto;
  }

  //  toogleHidden(){
  //    this.show = !this.show;
  //  }

  toogleHidden(hidden) {
    console.log('Variable' + hidden);
    this.hidden = !this.hidden;
  }

  ocultarItemSeleccionado() {
    this.ocultarItemSelleccionado();
  }
}
