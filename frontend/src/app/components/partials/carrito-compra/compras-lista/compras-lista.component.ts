import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../services/shared/shared.service';


@Component({
  selector: 'app-compras-lista',
  templateUrl: './compras-lista.component.html',
  styleUrls: ['./compras-lista.component.css']
})
export class ComprasListaComponent implements OnInit {
  listadoCompras: string[] = [];
  producto: any;
  constructor(private sharedService: SharedService ) {

      this.sharedService.productoSel.subscribe(producto => {
      this.producto = producto
      this.addCarrito(this.producto);
      console.log("Hola desde navbar" + this.producto)

});

  }

  ngOnInit() {}



  addCarrito(productos : any){

    //   if(this.listadoCompras.length){
    //     this.listadoCompras.push(productos);
    //     console.log(this.listadoCompras);
    //   }
    //     var mensaje = ("No hay productos añadidos");
    //     console.log("No hay productos añadidos" + mensaje);
    //     //document.getElementById("content").innerHTML = mensaje;
          this.listadoCompras.push(productos);
          console.log(this.listadoCompras);
}

}
