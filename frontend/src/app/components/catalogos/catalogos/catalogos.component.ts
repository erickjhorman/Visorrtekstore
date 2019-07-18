import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {Marca} from '../../../models/marcas';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import {MostrarDetalleProductoComponent} from '../mostrar-detalle-producto/mostrar-detalle-producto.component';
import {CarritoCompraComponent} from '../../partials/carrito-compra/carrito-compra.component';


@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor(private route: ActivatedRoute , private catalogoService: CatalogoServes,
   private dialog: MatDialog
    ) {

   }

  marca: any;
  productos: any;
  //productoAdd: any
  public  productoShow : any; //Variable to get the information of the current prouct to show in the patent component
  public producto: any
  //public product = "Erick"

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id')
         console.log("Catalogo" + id);
       this.getproductos(id);


    })

  }

  getproductos(id:number){
    this.catalogoService.getProductos(id).subscribe(
      res =>{

            this.productos= res

      },
      err => console.log(err)
    )
  }

   onCreate(productoShow:any){
    const dialogConfig = new  MatDialogConfig();
    console.log("1 paso" + productoShow)
    let showProductos = productoShow
    console.log("Create productos" + showProductos)
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "900px";
    dialogConfig.height = "400px";
   // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = showProductos;
    this.dialog.open(MostrarDetalleProductoComponent, dialogConfig,)
   }

   //Function to get only one producto with comments as well.
  getProductoShow(id:number){


    this.catalogoService.getProducto(id).subscribe(

      res =>{

            this.productoShow = res
            console.log("Erick " + this.productoShow)
            this.onCreate(this.productoShow);
      },
      err => console.log(err)
    );

  }

//Añadir producto
  addProducto(id:number){

    this.addProductoModel(id);
  }

  addProductoModel(id:any){
    const dialogConfig = new  MatDialogConfig();
    console.log("1 paso" + id)
    let productoSeleccionado = id
    console.log("Producto seleccionado" + productoSeleccionado)
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
   // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = productoSeleccionado;
    this.dialog.open(CarritoCompraComponent, dialogConfig,)
   }

   recibirProducto(producto:any){
     //this.productoAdd = producto;
   }

}


