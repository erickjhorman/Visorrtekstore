import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  AfterViewInit,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material'; // To get the information to store in the table
import { CatalogoServes } from '../../../../services/Catalogos/catalogos.service';
import { FormDireccioneUsuarioComponent } from '../procesoCompra/form-direccione-usuario/form-direccione-usuario.component';
import { FormTransportadoraComponent } from '../procesoCompra/form-transportadora/form-transportadora.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedService } from '../../../../services/shared/shared.service';
import { PagoService } from '../../../../services/pagos/pago.service';
import { Router } from '@angular/router';
import { DashboardService } from '../../../../services/shared/dashboard.service';
import { FormDireccioneUsuarioShowComponent } from '../procesoCompra/form-direccione-usuario-show/form-direccione-usuario-show.component';
import { NotificationService } from '../../../../services/shared/notification.service';
import { ListPurchase } from '../../../../models/ListPurchase';

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProcesoCompraComponent implements OnInit, AfterViewInit {
  private user: any;
  valuesArrayCompras: any;
  precio_total: number;
  valuesFormDireccione: any;
  valuesFormTransportadora: any;
  domicilio: any;
  showBtnDomicilio = true;
  btnverFlag: any;
  charges: any;
  finalListPurchase: ListPurchase[] = [];

  private departamentos: any;
  private ciudades: any;
  isLinear = true;
  stepCompleted = false;
  step2Completed = false;
  stepperIndex: number;

  show = false;
  disableMessageBtn = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  formMensaje: FormGroup;

  @ViewChild('stepper', { static: false }) stepper: any;
  totalStepsCount: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProcesoCompraComponent>,
    private cataServes: CatalogoServes,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private sharedService: SharedService,
    private pagosServices: PagoService,
    private router: Router,
    private notificacion: NotificationService
  ) {
    console.log(data);

    // To get the information from  a sessionStorage
    const user = sessionStorage.getItem('userAuth');
    this.user = JSON.parse(user);
    console.log(this.user);

    this.formMensaje = new FormGroup({
      idCliente: new FormControl(this.user.id),
      mensaje: new FormControl('', [Validators.required]),
    });

    // To share the form in preceso compra componenet
    this.sharedService.formValues.subscribe((valuesForm) => {
      this.valuesFormDireccione = valuesForm;
      console.log('Formulario' + this.valuesFormDireccione);
      this.stepCompleted = true;
    });

    // To share the response of the payment in preceso compra componenet
    this.sharedService.payCharge.subscribe((res) => {
      this.charges = res;
      console.log(this.charges);
    });

    // To share the form in preceso compra componenet
    this.sharedService.stepComplared.subscribe((value) => {
      this.step2Completed = true;
      console.log('True step 2 ');
      this.stepper.linear = false;
      this.stepper.selectedIndex = 2;
      this.notificacion.success('Compra Satisfactoria');
    });

    // To share a variable from form-direccione to call a method  in here
    this.sharedService.btnver.subscribe((value) => {
      this.btnverFlag = value;
      if (this.btnverFlag) {
        this.getDireccionCliente(this.user.id);
      }
    });
  }

  // Code for create the table with information
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Nombre', 'cantidad', 'valorventa'];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    this.createTableToshow();
    this.getDireccionCliente(this.user.id);
  }

  ngAfterViewInit() {
    this.totalStepsCount = this.stepper._steps.length;
  }

  createTableToshow() {
    this.finalListPurchase = this.data;
    this.listData = new MatTableDataSource(this.finalListPurchase);
  }

  getTotalPrice() {
    return this.finalListPurchase
      .map((t) => t.valorVenta * t.cantidad)
      .reduce((acc, value) => acc + value, 0);
  }

  onView(value: boolean) {
    console.log(value);
  }

  getDireccionCliente(id: number) {
    this.dashboardService.getDomiciliosCleinte(id).subscribe(
      (res) => {
        this.domicilio = res;

        if (this.domicilio.length) {
          this.showBtnDomicilio = true;
          this.stepCompleted = true;
        } else {
          this.showBtnDomicilio = !this.showBtnDomicilio;
        }
        console.log(this.domicilio);
      },
      (err) => console.log(err)
    );
  }

  showDomicilio() {
    console.log('Show domicilio' + this.domicilio);
    this.onCreateShow(this.domicilio);
  }

  addDomicilio() {
    this.cataServes.getDepartamentos().subscribe(
      (res) => {
        this.departamentos = res;
        this.onCreateDomicilio(this.departamentos);
      },
      (err) => console.log(err)
    );
  }
  getCiudades(id: number) {
    this.cataServes.getCiudades(id).subscribe(
      (res) => {
        this.ciudades = res;
      },
      (err) => console.log(err)
    );
  }

  // Dialog para transportadora
  onCreateDialogTransportadora(transportadora: any) {
    const dialogConfig = new MatDialogConfig();

    const t = transportadora;

    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '400px';
    dialogConfig.data = t;
    this.dialog.open(FormTransportadoraComponent, dialogConfig);
  }

  // Dialog para direccion usuario
  onCreateShow(data) {
    const dialogConfig = new MatDialogConfig();
    const d = data;
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '400px';
    // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = d;
    this.dialog.open(FormDireccioneUsuarioShowComponent, dialogConfig);
    console.log('Ver domicilio');
  }

  onCreateDomicilio(data) {
    const dialogConfig = new MatDialogConfig();
    const d = data;
    dialogConfig.disableClose = true;
    dialogConfig.width = '750px';
    dialogConfig.height = '400px';
    dialogConfig.data = d;
    this.dialog.open(FormDireccioneUsuarioComponent, dialogConfig);
  }

  onClose() {
    this.dialogRef.close();
  }

  redirigeDashboard() {
    this.dialogRef.close();
    this.router.navigateByUrl('/dashboard'); // To redirect to another component
  }

  enviarMensajeVendedor() {
    this.show = !this.show;
  }

  goBack() {
    this.stepper.previous();
  }
  goForward() {
    this.stepper.next();
  }

  onSubmit() {
    if (this.formMensaje.valid) {
      this.pagosServices.saveMensaje(this.formMensaje.value).subscribe(
        (res) => {
          this.notificacion.success('Mensaje enviado satisfactoriamente');
        },
        (err) => console.log(err)
      );
      this.show = !this.show;
      this.disableMessageBtn = !this.disableMessageBtn;
    }
  }
}
