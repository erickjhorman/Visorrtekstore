import { Component, OnInit } from '@angular/core';
import { Categoria } from "../../../models/categoria";
import { Marca } from '../../../models/marcas';
import { CatalogoServes } from "../../../services/Catalogos/catalogos.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {


  catalogos: Categoria[];
  marca: any;



  constructor(private catalogoService: CatalogoServes, private Router: ActivatedRoute) {
    this.getCatalogos();

  }

  ngOnInit() { }

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
    this.catalogoService.getMarcas(id).subscribe(
      res => {
        this.marca = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}

