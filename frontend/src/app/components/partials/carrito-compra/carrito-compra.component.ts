import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SharedService} from '../../../services/shared/shared.service'

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  productoSeleccionado : any;
  producto: string;
  message:string;

  listadoCompras: string[] = [];

  constructor ( private sharedService: SharedService ,  @Inject(MAT_DIALOG_DATA) public data: any ,
  public dialogRef: MatDialogRef<CarritoCompraComponent>
  ) {



    // console.log("My array Carrito de compra" + this.data);
    // this.productoSeleccionado  =  JSON.stringify(this.data);
    // console.log("Mis productos" + this.productoSeleccionado)
    // this.producto =  JSON.parse(this.productoSeleccionado);
    // console.log("Carrito" + this.producto);

    //console.log("My array Carrito de compra" + this.data);
    // var producto = this.data;
    // this.producto = JSON.parse(producto);
    // console.log(this.producto);
  }




  ngOnInit() {
    // this.sharedService.currentMessage.subscribe(message => this.message = message)
    // console.log("Mensaje enviado" + this.message);
    this.sharedService.productoSel.subscribe(producto => this.producto = producto)
    //console.log("Producto Carrito de compra" + this.producto);

    this.addCarrito(this.producto);

    // this.listadoCompras.push(this.producto);
    // console.log(this.listadoCompras);


//array to add objects


    // this.sharedService.sharingData.subscribe(res =>{
    //   console.log("Events Get Subscribe");
    //   this.producto = res;
    //   console.log(res);
    //   console.log(this.producto);
    // })
  }
    addCarrito(productos : any){
    this.listadoCompras.push(productos);
    console.log(this.listadoCompras);
   }


  onClose(){
    this.dialogRef.close();
    }


    // var producto = sessionStorage.getItem('productos');
    // console.log(this.producto);
    // this.producto =  JSON.parse(producto);
    // console.log( "Producto" + this.producto);



}
