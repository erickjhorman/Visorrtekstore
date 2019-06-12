import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {Marca} from '../../../models/marcas';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import {MostrarDetalleProductoComponent} from '../mostrar-detalle-producto/mostrar-detalle-producto.component';


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
  public  producto : any; //Variable to get the information of the current prouct to show in the patent component
  //public product = "Erick"
  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id')
         console.log(id);
       this.getproductos(id);

    })

  }

  getproductos(id:number){
    this.catalogoService.getProductos(id).subscribe(
      res =>{
            console.log(res)
            this.productos= res
      },
      err => console.log(err)
    )
  }

  getProducto(id:number){
    this.catalogoService.getProducto(id).subscribe(
      res =>{
            console.log(res)
            this.producto = res
      },
      err => console.log(err)
    )
  }

  onCreate(){

    const dialogConfig = new  MatDialogConfig();
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "550px";
    this.getProducto(this.producto)
    this.dialog.open(MostrarDetalleProductoComponent, dialogConfig)



  }



}
