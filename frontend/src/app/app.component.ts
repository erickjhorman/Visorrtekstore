import { Component , OnInit} from '@angular/core';
import {CatalogoServes} from "../app/services/Catalogos/catalogos.service";
import {Categoria} from "../app/models/categoria";
import { ActivatedRoute } from '@angular/router';
import {SharedService} from '../app/services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  hidden = true;


  title = 'frontend';
  productos: any;
  catalogos: Categoria[];
  marca: any;

  constructor( private catalogoService: CatalogoServes, private route: ActivatedRoute ,private sharedService: SharedService) {


//Get the value from shared.service
this.sharedService.mostrarSideNavCategorias.subscribe(hidden2 => {
  console.log(hidden2)
  this.toogleHidden(hidden2)
});

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


    ngOnInit() {


    }


  toogleHidden(hidden){
    console.log("Variable" + hidden)
    this.hidden = !this.hidden;
 }



 leaveToogleShowCatalogosComponent(event:MouseEvent){
  event.preventDefault();
  console.log("Erick"+ event);
  this.hidden = !this.hidden;
 }

}
