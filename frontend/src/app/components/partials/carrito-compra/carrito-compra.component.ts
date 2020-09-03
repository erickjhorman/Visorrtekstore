import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedService } from '../../../services/shared/shared.service';
import { MatTableDataSource } from '@angular/material'; // To get the information to store in the table
import { ProcesoCompraComponent } from '../../../components/partials/carrito-compra/proceso-compra/proceso-compra.component';
import { NotificationService } from '../../../services/shared/notification.service';
import { ListPurchase } from '../../../models/ListPurchase';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css'],
})
export class CarritoCompraComponent implements OnInit {
  productoSeleccionado: any;

  message: string;

  listadoCompras: ListPurchase[] = [];
  FinallistadoCompras: any[] = [];
  TotalItemFinal: any[] = [];

  getTotalCompras: number;
  costototal: number;

  show = true;

  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog,
    private notificacionServive: NotificationService
  ) {
    // this.sharedService.productoSel.subscribe(producto => this.producto = producto)

    this.sharedService.productoSel.subscribe((producto) => {
      this.listadoCompras.push(producto);
    });
  }

  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }

  buy() {
    if (this.listadoCompras.length > 0) {
      this.onCreateDialogProcesoCompra(this.listadoCompras);
    } else {
      this.notificacionServive.warning('Debes añadir un producto primero');
    }
  }

  onCreateDialogProcesoCompra(data) {
    const finalArrayTotalItem = data;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = '1600px';
    dialogConfig.height = '400px';
    dialogConfig.data = finalArrayTotalItem;
    this.dialog.open(ProcesoCompraComponent, dialogConfig);
    this.sharedService.getArrayCompras(finalArrayTotalItem);
  }

  /** Gets the total cost of all transactions. */
  getTotalPurchase() {
    return this.listadoCompras
      .map((t) => t.valorVenta * t.cantidad)
      .reduce((acc, value) => acc + value, 0);
  }

  removeItemKart(indice: number) {
    this.listadoCompras.splice(0, indice);
  }
}
