import { Component, OnInit, HostBinding } from '@angular/core';
import { DashboardAdminService } from '../../../../../services/shared/dashboard-admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, ignoreElements } from 'rxjs/operators';
import { Mensaje } from '../../../../../models/mensaje';
import { identifierModuleUrl } from '@angular/compiler';
import { CatalogoServes } from '../../../../../services/Catalogos/catalogos.service';
import { SharedService } from '../../../../../services/shared/shared.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public  mensajes: any;
  public user: any;
  public sala: any;
  public id: String;
  // mensaje: any = [];
  // Mensaje: Mensaje;
  public cliente: any;
  public sala_id: any;

  Mensaje: Mensaje = {
    id: 0,
    sala_id: 0,
    usuario_id: 0,
    tipoMensaje_id: 0,
    mensaje: '',
    url: '',
    created_at: new Date(),
    update_at: new Date()
  };

  constructor(
    private dashboardAdminService: DashboardAdminService,
    private route: ActivatedRoute,
    private router: Router,
    private cataloServe: CatalogoServes,
    private sharedService: SharedService
  ) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
    // const hero = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.dashboardAdminService.getMensajesUsuario(params.get("id"))
    //   )
    // );

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user = JSON.parse(user);
    console.log(this.user);

    var sala = sessionStorage.getItem('sala_id');
    this.sala = JSON.parse(sala);
    console.log(this.sala);

    this.id = this.route.snapshot.paramMap.get('id');
    this.getMensaje(this.id);

    this.getClientes(this.user.id);
  }

  getClientes(id: number) {
    this.cataloServe.getCliente(id).subscribe(
      res => {
        this.cliente = res;
        console.log(this.cliente);
      },
      err => console.log(err)
    );
  }

  getMensaje(id) {
    this.dashboardAdminService.getMensajes(id).subscribe(
      res => {
        this.mensajes = res;
        console.log(this.mensajes);

        //To get the id_sala which messages belong
        for (let index = 0; index < this.mensajes.length; index++) {
          this.sala_id = this.mensajes[index];

          sessionStorage.setItem(
            'sala_id',
            JSON.stringify(this.sala_id.Sala_id)
          );
        }
      },
      err => console.log(err)
    );
  }

  enviarMensaje(form) {
    console.log(form.value);
    this.dashboardAdminService.saveMensaje(form.value).subscribe(
      res => {
        this.getMensaje(this.id);
        this.sharedService.refreshMessage(true);
      },
      err => {
        return console.log(err);
      }
    );
  }
}
