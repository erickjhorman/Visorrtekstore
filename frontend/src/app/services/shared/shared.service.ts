import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comentario } from '../../models/comentario';
import { Subject } from 'rxjs';

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

//To share the values of the form from direccion form
private formDireccionAddSource = new Subject();
formValues = this.formDireccionAddSource.asObservable();

//To share the values of the form from Transportadora form
private formTransportadoraAddSource = new Subject();
formValuesTransportadora = this.formTransportadoraAddSource.asObservable();

//To share the values of the purchase
private arrayComprasAddSource = new Subject();
arrayValuesCompras = this.arrayComprasAddSource.asObservable();

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

  getFormDirecciones(values:any){
    this.formDireccionAddSource.next(values)
    console.log("Formulario ya recivido" + values);
  }

  getFormTransportadora(values:any){
    this.formTransportadoraAddSource.next(values)
    console.log("Formulario ya recivido transportadora" + values);
  }

  getArrayCompras(values:any){
    this.arrayComprasAddSource.next(values)
    console.log("Formulario ya recivido compras" + values);
  }




}


