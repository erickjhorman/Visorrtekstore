import { Component, OnInit } from '@angular/core';
import  {Categoria} from "../../models/categoria";
import {CatalogoServes} from "../../services/Catalogos/catalogos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  catalogos: Categoria[];

constructor( private catalogoService: CatalogoServes) {

}


// getCatalogos(){
//   this.catalogoService.get().subscribe((data: Categoria[]) => {
//     this.catalogos = data;

//     console.log(data);
//   }, error => {
//     console.log(error);
//     alert('Querry faild');
//   })
// }

//To pass the information to the view


 //lista:string[]=["hola","que","tal","estas"];
  ngOnInit() {
  }

}

