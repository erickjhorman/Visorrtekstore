import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared/shared.service';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  private productos: any
  hidden = true;

  constructor(private sharedService: SharedService, private catalogoService: CatalogoServes) {

    // To share the form in preceso compra componenet
    this.sharedService.mostrarSideNavCategorias.subscribe(mostrar => {
      console.log(mostrar)
      // this.toogleHidden(mostrar)

    });
  }

  ngOnInit() {
    this.productos;
  }


  toogleHidden(hidden) {
    console.log(" Variable" + hidden)
    this.hidden = !this.hidden;
  }

  getproductos(id: number) {
    this.catalogoService.getProductos(id).subscribe(
      res => {

        this.productos = res

      },
      err => console.log(err)
    )
  }

}
