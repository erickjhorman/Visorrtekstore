import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comentario } from "../../models/comentario";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
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

  private categoriasTogggleAddsource = new Subject();
  mostrarSideNavCategorias = this.categoriasTogggleAddsource.asObservable();

  private UserTogggleAddsource = new Subject();
  mostrarSideNavUsuario = this.UserTogggleAddsource.asObservable();

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

  private getDeshabilitarBtnVerAddSource = new Subject();
  valorDeshabilitarBtnVerCatalogos = this.getDeshabilitarBtnVerAddSource.asObservable();

  private emitIdproDesdeCatalogosAddSource = new Subject();
  idProductosCatalogos = this.emitIdproDesdeCatalogosAddSource.asObservable();

  private enableBtnVerAddSource = new Subject();
  btnver = this.enableBtnVerAddSource.asObservable();

  private step2ComplaredAddSource = new Subject();
  stepComplared = this.step2ComplaredAddSource.asObservable();

  private payChargeAddSource = new Subject();
  payCharge = this.payChargeAddSource.asObservable();

  constructor(private http: HttpClient) {}

  sharingData: EventEmitter<any> = new EventEmitter();

  // changeMessage(message: string){
  // this.messageSource.next(message)
  // console.log("Mensaje recivido" + message)
  // }

  // getProductoSeleccionado(producto:string){
  //   this.productoAddSource.next(producto)
  //   console.log("getProducto ya recivido" + producto);
  // }

  getProductoSeleccionado(producto: any) {
    this.productoAddSource.next(producto);
    console.log("getProducto ya recivido" + producto);
  }

  getValorMostraComponente(valor: any) {
    this.carritoTogggleAddsource.next(valor);
    console.log("get valor " + valor);
  }

  getValorMostraCatalogoSidebar(valor: any) {
    this.categoriasTogggleAddsource.next(valor);
    console.log("get valor desde navbar para categoria" + valor);
  }

  getValorMostraUserSidebar(valor: any) {
    this.UserTogggleAddsource.next(valor);
    console.log("get valor desde navbar para usuario" + valor);
  }

  getFormDirecciones(values: any) {
    this.formDireccionAddSource.next(values);
    console.log("Formulario ya recivido" + values);
  }

  getFormTransportadora(values: any) {
    this.formTransportadoraAddSource.next(values);
    console.log("Formulario ya recivido transportadora" + values);
  }

  getArrayCompras(values: any) {
    this.arrayComprasAddSource.next(values);
    console.log("Formulario ya recivido compras" + values);
  }

  getDeshabilitarBtnVer(valor: boolean) {
    this.getDeshabilitarBtnVerAddSource.next(valor);
    console.log("Variable deshabilitar btn boton " + valor);
  }

  EmitIdproducto(id: number) {
    this.emitIdproDesdeCatalogosAddSource.next(id);
    console.log("Variable id btn boton " + id);
  }

  EmitVer(valor: boolean) {
    this.enableBtnVerAddSource.next(valor);
    console.log("Variable valor " + valor);
  }

  stepcompleted(valor: boolean) {
    this.step2ComplaredAddSource.next(valor);
    console.log("Variable pago " + valor);
  }

  paymentCharge(valor: any) {
    this.payChargeAddSource.next(valor);
    console.log("Objeto pago " + valor);
  }
}
