import { Categoria } from './../../../models/categoria';
import { SharedService } from './../../../services/shared/shared.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Marca } from '../../../models/marcas';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {


  catalogos: Categoria[];
  marcas: Marca[];
  marcasFinal = [];

  private data: any;
  private id: number;

  constructor(
    private catalogoService: CatalogoServes,

    private sharedService: SharedService, ) {



  }

  ngOnInit() {

    this.sharedService.openCatalogueMatMenu.subscribe(value => {
      console.log(value);

    });
    this.getCatalogos();
    this.getMarcas(this.id);
  }




  getCatalogos() {
    this.catalogoService.get().subscribe((data: Categoria[]) => {
      this.catalogos = data;

      console.log(data);
    }, error => {
      console.log(error);
      alert('Querry faild');
    });
  }

   getMarcas(id: number) {
   const id_categoria = id;
  console.log(id_categoria);
   const marcaCatalogo = [];
   const length = this.catalogos.length;

    for (let i = 0; i < length; i++) {

       const marcas = this.catalogos[i].marca;
       const categoria = this.catalogos[i].categoria;
         // marcaCatalogo.push(this.catalogos[i].marca);


            for (let i = 0; i < marcas.length; i++) {

              if ( marcas[i]['producto_id'] === id_categoria ) {

                const Marcas = marcas[i]['marca'];
                const id_catalogo = marcas[i]['id'];

               const obj = {
                   marca: Marcas,
                   id: id_catalogo,
                   categoria: categoria
               }


                this.marcasFinal.push(obj);
                console.log(this.marcasFinal);

            }

            }
    }
  }
}



