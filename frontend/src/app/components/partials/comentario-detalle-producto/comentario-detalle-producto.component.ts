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

    producto_id: null,
    usuario_id: null,
    comentario:  null,
    estado:null,
    created_at: new Date(),
    update_at: new Date(),
  }


  constructor( private catalogoserve : CatalogoServes ) {}

  ngOnInit() {



  }


  saveComentario(){
    this.catalogoserve.saveComentario()
   }



}
