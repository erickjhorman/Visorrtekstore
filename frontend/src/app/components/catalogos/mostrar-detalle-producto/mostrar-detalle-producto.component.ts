import { Component, OnInit, Input, Inject, AfterViewInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import { BehaviorSubject } from 'rxjs';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {CarritoCompraComponent} from '../../partials/carrito-compra/carrito-compra.component';
import { ThrowStmt } from '@angular/compiler';
import {SharedService} from '../../../services/shared/shared.service'
import {NotificationService} from '../../../services/shared/notification.service';

@Component({
  selector: 'app-mostrar-detalle-producto',
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrls: ['./mostrar-detalle-producto.component.css']
})
export class MostrarDetalleProductoComponent implements OnInit {
  panelOpenState = false;
  nombre: any;
  productoAdd : any;
  productSeleccionado : null;
  message:string;
  id_producto : number;
  idProduCata : any;


   @Input() producto:any;
   addproducto: any;


   constructor  (@Inject(MAT_DIALOG_DATA) public data: any , private catalogoService: CatalogoServes ,
      public dialogRef: MatDialogRef<MostrarDetalleProductoComponent> ,   private dialog: MatDialog , private sharedService:
      SharedService , private notificacion:NotificationService ) {

    console.log( this.data);

    //this.productoAdd;


  }

  ngOnInit(){
    // this.sharedService.currentMessage.subscribe(message => this.message = message)
       //get the value to disable the button ver in this html


  }

  onClose(){
    this.sharedService.sharingData.emit("this.addproducto");
    console.log("this Button Clicked");
    this.dialogRef.close();
  }


    addPseleccionado(form:NgForm){
    console.log(form);

    this.sharedService.idProductosCatalogos.subscribe(id => {
      this.idProduCata = id
      console.log(this.idProduCata)

   })

    //const inputTag = document.getElementsByName('idproducto') as HTMLInputElement;
    var id_producto = (<HTMLScriptElement[]><any>document.getElementsByName("idproducto"))[0];

    //const value = inputTag.value;



    this.addproducto = form;
    this.sharedService.getProductoSeleccionado(this.addproducto);
    console.log("detalle producto" + this.addproducto);
    this.sharedService.sharingData.emit(this.addproducto);
    this.notificacion.success('Añadiste un producto');

    console.log(this.idProduCata)
    console.log(id_producto);

    this.sharedService.getDeshabilitarBtnVer(true)




    //sessionStorage.setItem('productos',JSON.stringify(this.productoAdd));
    //this.addProductoModel(this.productoAdd)

    //To pass an array to the data variable
    //this.productoSeleccinado.emit({data: this.nombre})
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

   enviarVariable(producto: any){
     this.sharedService.getProductoSeleccionado(producto)
     console.log("variable enviada producto")
   }




  };



