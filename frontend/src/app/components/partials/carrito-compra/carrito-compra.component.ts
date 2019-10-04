import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SharedService} from '../../../services/shared/shared.service'
import { MatTableDataSource } from '@angular/material'; //To get the information to store in the table
import {ProcesoCompraComponent}  from '../../../components/partials/carrito-compra/proceso-compra/proceso-compra.component';
import {NotificationService} from "../../../services/shared/notification.service";



@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  productoSeleccionado : any;
  producto: any;
  message:string;

  listadoCompras: any[] = [];
  FinallistadoCompras: any[] = [];
  TotalItemFinal: any[] = [];

  getTotalCompras : number;
  costototal: number;


  show: boolean = true;

  constructor ( private sharedService: SharedService , private dialog: MatDialog, private notificacionServive:NotificationService
    ) {

    //this.sharedService.productoSel.subscribe(producto => this.producto = producto)

      this.sharedService.productoSel.subscribe(producto => {
      this.producto = producto
      this.addCarrito(this.producto);

    });


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

  listData :  MatTableDataSource<any>;
  displayedColumns: string[] = ['id','Nombre','cantidad','valorventa','actions'];



  ngOnInit() {
   this.loadStripe();
   this.FinallistadoCompras;
   this.isProductos();

}

isProductos(){
  var  shoppingKartEmpty = document.getElementById('imagenShopingCartEmpty');
  var  tbtKrt =  document.getElementById('tbtCarrito_Compras');
  if (this.listadoCompras.length > 0) {
        this.show = true;
        shoppingKartEmpty.style.removeProperty('background-image')

  } else {
    //this.hide_productos = true
    shoppingKartEmpty.style.backgroundImage = "url('http://woodwork.be/media/wysiwyg/empty-cart.jpg')";
    shoppingKartEmpty.style.backgroundSize = "180px 180px";
    shoppingKartEmpty.style.backgroundRepeat  = "repeat-y";
    shoppingKartEmpty.style.backgroundPosition = "center center";
    //tbtKrt.style.visibility = 'hidden';
    this.show = !this.show;
  }

 }
    addCarrito(productos : any){



  //   if(this.listadoCompras.length){
  //     this.listadoCompras.push(productos);
  //     console.log(this.listadoCompras);
  //   }
  //     var mensaje = ("No hay productos añadidos");
  //     console.log("No hay productos añadidos" + mensaje);
  //     //document.getElementById("content").innerHTML = mensaje;
        this.listadoCompras.push(productos);

        let numeroProductos = this.listadoCompras.length
        console.log(numeroProductos);
        this.listData = new MatTableDataSource(this.listadoCompras);
        console.log(this.listadoCompras);
        console.log("Dta table " + this.listData);

        this.isProductos()
  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

   /** Gets the total cost of all transactions. */
    getTotalCost() {
      //  this.costototal = this.listadoCompras.map(l => l.valorventa).reduce((acc, value) => acc + value , 0);

      //  return this.costototal;

      this.costototal = this.listadoCompras.map(l => l.valorventa * l.cantidad).reduce((acc , value) => acc + value, 0);
      return this.costototal;


      // for (let i = 0; i < this.listadoCompras.length; i++) {
      //   let  total = 0;
      //  const  cantidad = this.listadoCompras[i].valorventa;
      //  const  valorventa =  this.listadoCompras[i].cantidad;
      //  console.log("Cantidad" + cantidad);
      //  console.log("ValorVenta" + valorventa);
      //   total =  cantidad * valorventa;
      //  console.log("Total" + total);
      //  this.costototal += total
      //  console.log("CostoTotal" + this.costototal);
      //  }

      // return this.costototal;

    }




  getIndice(id:number){
   const  _productoId = id;
   console.log("id eliminar" + _productoId)

   for (let i = 0; i < this.listadoCompras.length; i++) {
        if(this.listadoCompras[i].idproducto == _productoId){

          const indice = i;
          console.log("id proucto" + this.listadoCompras[i].idproducto)
          console.log("pocisiosn " + indice);
          console.log("eliminado")
          this.eliminaProducto(indice);

        }

   }

  }

  eliminaProducto(indice:number){
     this.listadoCompras.splice(indice,1);
      this.listData = new MatTableDataSource(this.listadoCompras);
        console.log(this.listadoCompras);
        console.log("Dta table " + this.listData);
        console.log(this.listadoCompras);
        this.isProductos()
  }


  procesoComprar(event){

     console.log("Comprar");

     if (this.listadoCompras.length > 0) {


      this.onCreateDialogProcesoCompra();
     } else {
       this.notificacionServive.success("Debes añadir un producto primero");

     }


  }

  // onCreateDialogProcesoCompra(){
  //   const finalArrayTotalItem = this.listadoCompras;
  //   console.log( finalArrayTotalItem)

  //   const dialogConfig = new  MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   //dialogConfig.autoFocus = true;
  //   dialogConfig.width = "1600px";
  //   dialogConfig.height = "400px";
  //   dialogConfig.data = finalArrayTotalItem
  //   this.dialog.open(ProcesoCompraComponent, dialogConfig,)
  //  }

   onCreateDialogProcesoCompra(){

    this.PrecioFinalArrayListadocomparas();

    const finalArrayTotalItem  = this.FinallistadoCompras
    console.log(finalArrayTotalItem)

    const dialogConfig = new  MatDialogConfig();
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "1600px";
    dialogConfig.height = "400px";
    dialogConfig.data = finalArrayTotalItem

    this.dialog.open(ProcesoCompraComponent, dialogConfig,)
    this.sharedService.getArrayCompras(finalArrayTotalItem);
   }


   PrecioFinalArrayListadocomparas(){

    const precioFinal = this.costototal;
    const l = this.listadoCompras;

    for (let index = 0; index < l.length; index++) {

    this.FinallistadoCompras.push({
      id : l[index].idproducto,
      producto :l[index].producto,
      cantidad : l[index].cantidad,
      valorventa : l[index].valorventa,
      Total : precioFinal,
    });

    }

    return this.FinallistadoCompras;
   }





}







