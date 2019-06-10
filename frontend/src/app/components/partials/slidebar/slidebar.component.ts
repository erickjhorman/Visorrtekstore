import { Component, OnInit } from '@angular/core';
import  {Categoria} from "../../../models/categoria";
import {Marca} from '../../../models/marcas';
import {CatalogoServes} from "../../../services/Catalogos/catalogos.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  opened = false
  catalogos: Categoria[];
  marca: any;



  constructor( private catalogoService: CatalogoServes, private Router: ActivatedRoute) {
    this.getCatalogos();

  }


  getCatalogos(){
    this.catalogoService.get().subscribe((data: Categoria[]) => {
      this.catalogos = data;

      console.log(data);
    }, error => {
      console.log(error);
      alert('Querry faild');
    })
  }

  getMarcas(id:number){
   this.catalogoService.getMarcas(id).subscribe(
     res => {
        this.marca= res
      console.log(res)
     },
     err => console.log(err)
   )



  }


  // getMarcas(){
  //   this.catalogoService.getMarcas(id).subscribe((data: Categoria[]) => {
  //     this.catalogos = data;

  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //     alert('Querry faild');
  //   })
  // }
  // getMarcas(id: string){  //his method calls again the data
  //   this.catalogoService.getMarcas(id).subscribe(  //This line run the method
  //     //res => console.log(res),
  //     res => {
  //       this.marca = res;
  //       console.log(this.marca);

  //     },
  //     err => console.log( "Este es el  eror"+ err)
  //    );
  //  }

  //lista:string[]=["hola","que","tal","estas"];
  ngOnInit() {}
}

