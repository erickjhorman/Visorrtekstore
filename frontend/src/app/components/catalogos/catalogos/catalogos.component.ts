import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {Marca} from '../../../models/marcas';


@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor(private route: ActivatedRoute , private catalogoService: CatalogoServes) {

   }

  marca: any;
  productos: any;

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




}
