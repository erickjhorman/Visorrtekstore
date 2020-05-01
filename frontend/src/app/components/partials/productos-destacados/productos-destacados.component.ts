import { Component, OnInit } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';

@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrls: ['./productos-destacados.component.css']
})
export class ProductosDestacadosComponent implements OnInit {
  productosDestacados: any;

  constructor(private catalogoserve: CatalogoServes) {

   }

  ngOnInit() {
    this.getProductosDestacados();
  }

  getProductosDestacados() {
        this.catalogoserve.getProductosDestacados().subscribe(
        res => {
              console.log('productos destacados', res);
              this.productosDestacados = res;
        },
        err => console.log(err)
      );
    }
  }






