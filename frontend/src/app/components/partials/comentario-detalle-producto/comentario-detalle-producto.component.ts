import { Component, OnInit, Input } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {Comentario} from '../../../models/comentario';
import { NgForm } from '@angular/forms';
import {SharedService} from '../../../services/shared/shared.service';

@Component({
  selector: 'app-comentario-detalle-producto',
  templateUrl: './comentario-detalle-producto.component.html',
  styleUrls: ['./comentario-detalle-producto.component.css']
})

export class ComentarioDetalleProductoComponent implements OnInit {

  @Input() d: any
 private user : any;
 private comentarios : any;
 constructor( private catalogoserve : CatalogoServes,
  private comentarioService: SharedService
  ) {}

  // comentario: Comentario = {
  //   id:'',
  //   comentario: '',
  //   producto_id: 0,
  //   usuario_id: 0,
  //   estado: 0,
  //   created_at: new Date(),
  //   update_at: new Date(),
  // }


  ngOnInit() {

  //To get the information from  a sessionStorage
  var user = sessionStorage.getItem('userAuth');
  this.user =  JSON.parse(user);
  console.log(this.user);
  this.getComentario(this.d.id)
  console.log(this.d.id)
  }


   getComentario(id:number){
    this.catalogoserve.getComentarios(id).subscribe(
      res => {
        console.log(res);
        this.comentarios= res
      },
      err => console.log(err)
     )
   }

  saveComentario(form){
    console.log("Hola" + form);
    this.catalogoserve.saveComentario(form.value)
    .subscribe(res => {
        this.getComentario(this.d.id);
        console.log(res);
      },

     err => {
       return console.log(err);
     }
    )
    }

    resetForm(form?: NgForm){
      if(form.value){

        form.reset();

        //this.comentarioService.selectedCometario = new Comentario();
      }
    }


  }




