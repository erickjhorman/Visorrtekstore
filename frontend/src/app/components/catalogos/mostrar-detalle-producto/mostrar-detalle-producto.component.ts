
import { Component, OnInit, AfterViewInit, Input, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared/shared.service';

import { NotificationService } from '../../../services/shared/notification.service';
import { ActivatedRoute } from '@angular/router';
import { CarroCompra } from '../../../models/carroCompra';
import { MatRadioChange } from '@angular/material/radio';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from './../../../services/auth.service';
import { CatalogoServes } from '../../../services/Catalogos/catalogos.service';
import { PusherService } from '../../../services/shared/pusher.service';

import { ShowProducts } from './../../../models/ShowProducts';
import { ImagenesProductos } from '../../../models/ImagenespProductos';
import { Comentario } from './../../../models/comentario';
import { Pregunta } from './../../../models/pregunta';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ShowAllCommentsComponent } from '../../partials/show-all-comments/show-all-comments.component';

import { MatDialog } from '@angular/material/dialog';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-mostrar-detalle-producto',
  templateUrl: './mostrar-detalle-producto.component.html',
  styleUrls: ['./mostrar-detalle-producto.component.css'],
})
export class MostrarDetalleProductoComponent implements AfterViewInit, OnInit, OnDestroy {

  panelOpenState = false;
  nombre: any;
  productoAdd: any;
  coloresProductos: any;
  productSeleccionado: null;
  message: string;
  id_producto: number;
  idDescription: number;
  idProduCata: any;
  productos: ShowProducts[] = [];
  productos2: ShowProducts[] = [];
  allImages: ImagenesProductos[] = [];
  imagenes: ImagenesProductos[] = [];
  comentarios: Comentario[] = [];
  allcomentarios: Comentario[] = [];
  preguntas: Pregunta[] = [];

  public loggedin: boolean;
  private id: number;
  public user: any;
  comments: any;

  public showFormAnswer = false;


  @Input() producto: any;
  addproducto: any;

  @Input()
  required: boolean;


  @ViewChildren('formComments') formComments: QueryList<HTMLElement>;
  // Variable to unsubscribe my subcription
  private unsubscribe$ = new Subject<void>();

  // forms
  formSendCommensts: FormGroup;
  formSendQuestion: FormGroup;
  formSendReplayQuestion: FormGroup;
  echo: Echo;

  public imagePreview: String;

  constructor(
    private catalogoService: CatalogoServes,
    private _sharedService: SharedService,
    private notificacion: NotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public pusherService: PusherService

  ) {

    // To get the information from  a sessionStorage
    const user = sessionStorage.getItem('userAuth');
    user ? this.user = JSON.parse(user) : this.user = 0;



    this.formSendCommensts = new FormGroup({
      ProductoId: new FormControl(1),
      UsuarioId: new FormControl(this.user.id),
      comments: new FormControl('', [
        Validators.required,
        Validators.max(50)
      ]),
    });

    this.formSendQuestion = new FormGroup({
      ProductoId: new FormControl(1),
      usuario_id: new FormControl(this.user.id),
      pregunta: new FormControl('', [
        Validators.required,
        Validators.max(30)
      ]),
    });

    this.formSendReplayQuestion = new FormGroup({
      ProductoId: new FormControl(1),
      usuarioId: new FormControl(this.user.id),
      answer: new FormControl('', [
        Validators.required,
        Validators.max(30)
      ]),
    });
  }

  carroCompra: CarroCompra = {
    producto: '',
    color: 0,
    existencia: 0,
    precio: 0,
    talla: 0,
    producto_id: 0,
    valorVenta: 0,
    cantidad: 0,
    created_at: new Date(),
  };

  restartFormComments() {
    this.formSendCommensts.setValue({
      ProductoId: 1,
      UsuarioId: this.user.id,
      comments: '',
    });
  }

  ngOnInit() {
    // To get the value of the login
    this.authService.authStatus.subscribe((value) => (this.loggedin = value));
    console.log(this.loggedin);

    // get the value to disable the button ver in this html
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');

      this.getProductoShow(this.id);
      this.getProductoColores(this.id);
    });

    this.getQuestion();
    // this.pusherService.connectPusherQuestionsChannel();
    this.pusher();
  }

  ngAfterViewInit() { }

  getProductoShow(id: number) {
    this._sharedService.EmitIdproducto(id);

    this.catalogoService
      .getProducto(id)
      .pipe(
        takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      )
      .subscribe(
        (productos) => {
          this.productos2 = productos;
          this.productos = productos;
          this.setIdDesciption(this.productos);
          this.showImagenes(productos);
        },
        (err) => console.log(err)
      );
  }

  trackByProducts(showProducts: ShowProducts): number {
    return showProducts.id_producto;
  }

  setIdDesciption(productos: Array<ShowProducts>) {
    const idProduct = this.id;
    const filtered = productos.find((producto) => {
      return producto.id_producto === idProduct;
    });

    this.idDescription = filtered.id_description_product;

    this.formSendCommensts.patchValue({
      ProductoId: this.idDescription,
      UsuarioId: this.user.id,
      comments: '',
    });
  }

  showImagenes(productos: Array<ShowProducts>) {
    const producto = productos.length;

    for (let i = 0; i < producto; i++) {
      const idProducto = productos[i]['id_producto'];
      const imagenes = this.productos[i].imagenes;
      this.allImages = this.productos[i].imagenes;
      const comentarios = this.productos[i].comentarios;

      console.log('todos los comentarios', this.allcomentarios);

      for (let j = 0; j < imagenes.length; j++) {
        const imagenColorId = imagenes[j]['color_id'];
        if (3 === imagenColorId) {
          const description_id = imagenes[j]['description_product_id'];
          const imagen = imagenes[j]['imagen'];

          const obj = {
            descriptionId: description_id,
            imagen: imagen,
          };

          this.imagenes.push(obj);
          this.getFirstImageArray(this.imagenes);
        }
      }
      // To turn  this code in a Map
      for (let k = 0; k < comentarios.length; k++) {

        if (comentarios[k]['color_id'] === 3) {

          const id = comentarios[k]['id'];
          const comentario = comentarios[k]['comentario'];
          const avatar = comentarios[k]['avatar'];
          const nombre = comentarios[k]['nombre'];
          const createdAt = comentarios[k]['created_at'];

          const obj = {
            idComentario: id,
            comentario: comentario,
            nombre: nombre,
            avatar: avatar,
            createdAt: createdAt
          };


          this.allcomentarios.push(obj);  /* To store all the comments to show when the user clicks on the showAllComments button  */
          this.comentarios.push(obj);
          this.comentarios.splice(2);

        }
      }

    }
  }

  trackByImages(imagesProducts: ImagenesProductos): number {
    return imagesProducts.id_producto_imagenes;
  }


  onChangeColor($event: MatRadioChange) {
    this.productos = [];
    this.productos = this.productos2;
    this.imagenes = [];
    this.imagenes = this.allImages;
    this.comentarios = [];

    const colorId = $event.value;
    const filtrado = this.productos.filter((productos) => {
      return productos.color_id === colorId;
    });


    this.productos = filtrado;

    const id = this.productos.map(producto => producto.id_description_product);
    const idDescription = id[0];
    this.imagenes = [];

    this.filterImages(this.productos, colorId);
    this.filterCommentsToShow(this.productos, colorId);
    this.setIdDescriptionToForm(idDescription);

  }

  filterImages(productos: Array<ShowProducts>, color: number) {
    const producto = productos.length;

    for (let i = 0; i < producto; i++) {
      const imagenes = this.productos[i].imagenes;
      this.allImages = this.productos[i].imagenes;

      for (let j = 0; j < imagenes.length; j++) {
        const imagenColorId = imagenes[j]['color_id'];
        if (color === imagenColorId) {
          const description_id = imagenes[j]['description_product_id'];
          const imagen = imagenes[j]['imagen'];

          const obj = {
            descriptionId: description_id,
            imagen: imagen,
          };

          this.imagenes.push(obj);
          console.log(this.imagenes);

          this.getFirstImageArray(this.imagenes);
        }
      }
    }
  }

  filterCommentsToShow(productos: Array<ShowProducts>, color: number) {
    const producto = productos.length;
    for (let i = 0; i < producto; i++) {
      const comentarios = this.productos[i].comentarios;



      for (let j = 0; j < comentarios.length; j++) {
        const comentarioColorId = comentarios[j]['color_id'];
        const avatar = comentarios[j]['avatar'];
        const nombre = comentarios[j]['nombre'];
        const createdAt = comentarios[j]['created_at'];

        if (color === comentarioColorId) {
          const id = comentarios[j]['id'];
          const comentario = comentarios[j]['comentario'];

          const obj = {
            idComentario: id,
            comentario: comentario,
            nombre: nombre,
            avatar: avatar,
            createdAt: createdAt
          };
          this.allcomentarios.push(obj);
          this.comentarios.push(obj);
          this.comentarios.splice(2);

        }
      }
    }
  }

  setIdDescriptionToForm(id: number) {
    this.formSendCommensts.patchValue({
      ProductoId: id,
      UsuarioId: this.user.id,
      comments: '',
    });
  }

  getFirstImageArray(data: Array<ImagenesProductos>) {
    this.imagePreview = data[0].imagen;
  }

  getIdPictureToShowFirst(imagen: String) {
    this.imagePreview = imagen;
  }

  getProductoColores(id: number) {
    this.catalogoService.getColoresProductos(id)
      .pipe(
        takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      ).subscribe(
        (res) => {
          this.coloresProductos = res;
          console.log(this.coloresProductos);
        },
        (err) => console.log(err)
      );
  }

  addPseleccionado(form: NgForm) {
    console.log(form.value);

    if (form.valid) {
      console.log('Valid');

      if (this.loggedin) {
        this._sharedService.idProductosCatalogos.subscribe((id) => {
          this.idProduCata = id;
          console.log(this.idProduCata);
        });

        // const inputTag = document.getElementsByName('idproducto') as HTMLInputElement;
        const id_producto = (<HTMLScriptElement[]>(
          (<any>document.getElementsByName('idproducto'))
        ))[0];

        // const value = inputTag.value;

        this.addproducto = form;
        this._sharedService.getProductoSeleccionado(this.addproducto);
        console.log('detalle producto' + this.addproducto);
        this._sharedService.sharingData.emit(this.addproducto);
        this.notificacion.success('Añadiste un producto');

        console.log(this.idProduCata);
        console.log(id_producto);

        this._sharedService.getDeshabilitarBtnVer(true);
      } else {
        this.notificacion.warning('Debes loguerate para añadir productos');
      }
    }
  }

  enviarVariable(producto: any) {
    this._sharedService.getProductoSeleccionado(producto);
    console.log('variable enviada producto');
  }

  saveComments() {
    // this.renderer.listen('document', 'click', () => console.log('click'));
    console.log('save', this.formSendCommensts.value);
    const form = this.formSendCommensts;
    if (form.valid) {

      if (this.loggedin) {
        this.catalogoService.saveComentario(form.value)
          .pipe(
            takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
          ).subscribe(
            (res) => {
              this.comments = res;
              this.notificacion.success(this.comments.mensaje);
              this.onClear();
              this.getCommentsAfterSaveOne();
              this.setIdDesciption(this.productos);
            },
            (err) => console.log(err)
          );
      } else {
        this.notificacion.warning('Debes loguerate para añadir productos');
        this.onClear();
      }
    }

  }

  getCommentsAfterSaveOne() {
    this.catalogoService.getComentario()
      .pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(
        (res) => {

          this.comentarios = res.filter((comentario) => {
            return comentario.descriptionProducto_id === this.idDescription;
          });
          this.comentarios.splice(2);
        },
        (err) => console.log(err)
      );

  }

  trackByComments(comentario: Comentario): number {
    return comentario.idComentario;
  }

  openAllCommentsDialog(): void {
    this.dialog.open(ShowAllCommentsComponent, {
      height: '600px',
      width: '600px',
      data: this.allcomentarios
    });
  }

  getQuestion() {
    this.catalogoService.getQuestion()
      .pipe(
        takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      ).subscribe(
        (res) => {
          this.preguntas = res;


        },
        (err) => console.log(err)
      );
  }


  saveQuestion() {
    const form = this.formSendQuestion.value;

    if (this.formSendQuestion.valid) {
      if (this.loggedin) {
        this.catalogoService.saveQuestion(form)
          .pipe(
            takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
          ).subscribe(
            (res) => {
              this.notificacion.success(res['status']);
              this.formSendQuestion.reset();
              this.formSendQuestion.patchValue({
                ProductoId: 1,
                usuario_id: this.user.id,
                pregunta: ''
              });
            },
            (err) => console.log(err)
          );
      } else {
        this.notificacion.warning('Debes loguerate para añadir productos');
        this.onClear();
      }
    } else {
      console.log();

    }
  }

  trackByQuestions(pregunta: Pregunta): number {
    return pregunta.id;
  }

  pusher() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher(
      environment.PUSHER_API_KEY, {
      cluster: environment.PUSHER_CLUSTER
    });

    const channel = pusher.subscribe('questions');
    channel.bind('QuestionSent', (data) => {
      console.log(data.question);
      this.preguntas = [];
      data.question.forEach(item => {

        this.preguntas.push({
          usuario_id: item.usuario_id,
          pregunta_id: item.pregunta_id,
          respuesta_id: item.respuesta_id,
          pregunta: item.pregunta,
          respuesta: item.respuesta,
          nombre: item.nombre,
          avatar: item.avatar,
          created_at: item.created_at
        });
      });

    });

  }

  saveAnswer() { }

  onClear() {
    this.formSendCommensts.reset();
    this.restartFormComments();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }
}
