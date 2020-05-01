import { Categoria } from './../../../models/categoria';
import { SharedService } from './../../../services/shared/shared.service';
import { Component, OnInit, Input, ViewChild, Pipe } from '@angular/core';
import { Marca } from '../../../models/marcas';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {


catalogos: Categoria[];
catalogos2: Observable<Categoria[]>;
  marcas: Marca[];
  marcasFinal = [];

private marcas2: Observable<Marca[]>;

  private data: any;
  private id: number;

  private e: any;


  constructor(
    private catalogoService: CatalogoServes,
    private sharedService: SharedService, ) {



  }

  ngOnInit() {

    this.sharedService.openCatalogueMatMenu.subscribe(value => {
      console.log(value);

    });
    this.getCatalogos();

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

    if (this.marcasFinal.length > 0) {
       this.marcasFinal = [];

    } else {
      const id_categoria = id;
   console.log(id_categoria);
   const marcaCatalogo = [];
   const length = this.catalogos.length;

    for (let i = 0; i < length; i++) {

       const marcas = this.catalogos[i].marca;
       const categoria = this.catalogos[i].categoria;

    for (let i = 0; i < marcas.length; i++) {

              if ( marcas[i]['producto_id'] === id_categoria ) {

                const Marcas = marcas[i]['marca'];
                const id_catalogo = marcas[i]['id'];

               const obj = {
                   marca: Marcas,
                   id: id_catalogo,
                   categoria: categoria
               };


                this.marcasFinal.push(obj);
                console.log(this.marcasFinal);

            }

            }
    }


    }
        // tslint:disable-next-line: no-unused-expression
        // this.catalogos.map((catalogo => {
        //   console.log(catalogo.marca);
        //   return catalogo.marca;
        //  })).filter((catalogo) => {
        //   console.log(catalogo);
        //   return catalogo;
        //  });
  }

toogleHideUserSidenav(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraUserSidebar(true);
  }

enterCatalog($event) {

  if ($event != null) {
  console.log('Estoy entrando');

    if($event != null && this.onmouseout(this.e) !== true){
      console.log('Estoy saliendo de hide catalog');
    } else {

    }


  } else {
    if (this.onmouseout(this.e) !== true) { }
  }

}

hideCatalog($event) {
    console.log('Estoy saliendo de hide catalog');
    this.sharedService.bHideCatalogComponent();
  }

onmouseout($event) {
  return true;
  }



}



