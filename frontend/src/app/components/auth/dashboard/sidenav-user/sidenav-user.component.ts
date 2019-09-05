import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../../services/shared/shared.service';
import  {Categoria} from "../../../../models/categoria";
import {Marca} from '../../../../models/marcas';
import {CatalogoServes} from "../../../../services/Catalogos/catalogos.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.css']
})
export class SidenavUserComponent implements OnInit {

  openedCatalogosSidenav = false;
  openedUsuarioSidenav = false;
  catalogos: Categoria[];
  marca: any;



  constructor( private sharedService:SharedService , private catalogoService: CatalogoServes, private Router: ActivatedRoute  ) {

    this.getCatalogos();

    //Get the value from shared.service
   this.sharedService.mostrarSideNavCategorias.subscribe(valor => {
    console.log(valor)
    this.toogleHidden(valor)


});

 //Get the value from shared.service
 this.sharedService.mostrarSideNavUsuario.subscribe(valor2 => {
  console.log(valor2)
  this.toogleMostrarSidenavUsuario(valor2)


});

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

  ngOnInit() {
  }


  toogleHidden(valor){
    console.log("Variable" + valor)
    this.openedCatalogosSidenav = !this.openedCatalogosSidenav;
  }
  toogleMostrarSidenavUsuario(valor2){
    this.openedUsuarioSidenav = !this.openedUsuarioSidenav;

  }

}
