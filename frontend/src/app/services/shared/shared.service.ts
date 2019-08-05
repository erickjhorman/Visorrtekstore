import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comentario } from '../../models/comentario';
import { BehaviorSubject , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

//To select the comment and save the selected one in my model
selectedCometario: Comentario;

//To share the info
productoSeleccionado: any;

// private messageSource = new BehaviorSubject<string>('Default message');
// currentMessage = this.messageSource.asObservable();

// private productoAddSource = new Subject<any>();
// productoSel = this.productoAddSource.asObservable();

// private productoAddSource = new BehaviorSubject<string>('');
private productoAddSource = new Subject();
productoSel = this.productoAddSource.asObservable();

private carritoTogggleAddsource = new Subject();
mostrarComponente = this.carritoTogggleAddsource.asObservable();

//  private productoSele = new BehaviorSubject(0);
//  productoActual = this.productoSele.asObservable();

  constructor(private http: HttpClient ) {}

  sharingData: EventEmitter<any> = new EventEmitter();

  // changeMessage(message: string){
  // this.messageSource.next(message)
  // console.log("Mensaje recivido" + message)
  // }

  // getProductoSeleccionado(producto:string){
  //   this.productoAddSource.next(producto)
  //   console.log("getProducto ya recivido" + producto);
  // }

  getProductoSeleccionado(producto:any){
    this.productoAddSource.next(producto)
    console.log("getProducto ya recivido" + producto);
  }

  getValorMostraComponente(valor:any){
    this.carritoTogggleAddsource.next(valor)
    console.log("get valor " + valor);
  }



}


