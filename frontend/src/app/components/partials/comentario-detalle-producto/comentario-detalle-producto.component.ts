import { Component, OnInit } from '@angular/core';
import {CatalogoServes} from '../../../services/Catalogos/catalogos.service';
import {Comentario} from '../../../models/comentario';

@Component({
  selector: 'app-comentario-detalle-producto',
  templateUrl: './comentario-detalle-producto.component.html',
  styleUrls: ['./comentario-detalle-producto.component.css']
})
export class ComentarioDetalleProductoComponent implements OnInit {

    comentario: Comentario = {
    comentario: '',
    created_at: new Date(),
    update_at: new Date(),
  }


  constructor( private catalogoserve : CatalogoServes ) {}

  ngOnInit() {



  }


  saveComentario(){
    console.log(this.comentario);
    this.catalogoserve.saveComentario(this.comentario)
    .subscribe(
      res => {
        console.log(res);

      },
     err => console.log(err)
    )
    }




  }




