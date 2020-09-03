import { Component, OnInit, Input } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  Form,
  NgForm,
} from '@angular/forms';

import { SharedService } from '../../../../../services/shared/shared.service';
import { NotificationService } from '../../../../../services/shared/notification.service';
import { PagoService } from '../../../../../services/pagos/pago.service';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  valuesFormDireccione: any;
  valuesFormTransportadora: any;
  valuesArrayCompras: any;

  private user: any;
  charge: any;
  submitted: any;
  formProcess: any;
  manejador: any;
  message: any;
  token: any;
  showSpinner = false;

  // Arrays
  formArray: any[] = [];
  formFinal: any[] = [];
  direcciones: any[] = [];
  transportadora: any[] = [];
  dataObjectPagoFinal: any[] = [];

  // Forms
  customStripeForm: FormGroup;

  // Decorators
  @Input() amount: number;

  months = [
    { id: '1', value: '01' },
    { id: '1', value: '02' },
    { id: '1', value: '03' },
    { id: '1', value: '04' },
    { id: '1', value: '05' },
    { id: '1', value: '06' },
    { id: '1', value: '07' },
    { id: '1', value: '08' },
    { id: '1', value: '09' },
    { id: '1', value: '10' },
    { id: '1', value: '11' },
    { id: '1', value: '12' },
  ];

  expYears = [
    { id: '20', value: '01' },
    { id: '21', value: '02' },
    { id: '22', value: '03' },
    { id: '23', value: '04' },
    { id: '24', value: '05' },
    { id: '25', value: '06' },
    { id: '26', value: '07' },
    { id: '27', value: '08' },
    { id: '28', value: '09' },
    { id: '29', value: '10' },
    { id: '30', value: '11' },
  ];

  restartFormGroup() {
    this.customStripeForm.setValue({
      name: '',
      lastname: '',
      cardNumber: '',
      email: '',
      expMonth: '',
      expYear: '',
      cvv: '',
    });
  }

  constructor(
    private pagosService: PagoService,
    private sharedService: SharedService,
    private notificacion: NotificationService
  ) {
    // To share the form in preceso compra componenet
    this.sharedService.formValues.subscribe((valuesForm) => {
      this.valuesFormDireccione = valuesForm;
      console.log(this.valuesFormDireccione);
    });

    // To share the form in preceso compra componenet
    this.sharedService.formValuesTransportadora.subscribe((valuesForm) => {
      this.valuesFormTransportadora = valuesForm;
      console.log(this.valuesFormTransportadora);
    });

    // To share the form in preceso compra componenet
    this.sharedService.arrayValuesCompras.subscribe((valuesArray) => {
      this.valuesArrayCompras = valuesArray;
      console.log(this.valuesArrayCompras);
    });
  }

  ngOnInit() {
    this.loadStripe();

    // To get the information from  a sessionStorage
    const user = sessionStorage.getItem('userAuth');
    this.user = JSON.parse(user);

    this.customStripeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(18),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      expMonth: new FormControl('', [Validators.required]),
      expYear: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      amount: new FormControl(this.amount),
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-custom-form-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-custom-form-script';
      s.type = 'text/javascript';
      s.src = 'https://js.stripe.com/v2/';
      s.onload = () => {
        window['Stripe'].setPublishableKey(
          'pk_test_l7iYANEOx13w718rnvfY7wed00HkXGcBvC'
        );
      };

      window.document.body.appendChild(s);
    }
  }

  onClear() {
    this.customStripeForm.reset();
    this.restartFormGroup();
  }

  pay(form) {
    if (!window['Stripe']) {
      alert('Oops! Stripe did not initialize properly.');
      return;
    }

    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);

    this.submitted = true;

    if (this.customStripeForm.invalid) {
      return;
    }

    this.formProcess = true;
    console.log('form');
    console.log(form);

    (<any>window).Stripe.card.createToken(
      {
        number: form.cardNumber,
        exp_month: form.expMonth,
        exp_year: form.expYear,
        cvc: form.cvc,
      },
      (status: number, response: any) => {
        this.submitted = false;
        this.formProcess = false;
        if (status === 200) {
          this.message = `Success! Card token ${response.card.id}.`;
          console.log('Toke generado' + this.message);
          this.token = response.id;
          console.log('Token server ' + this.token);

          // this.formArray.push(form);
          console.log('form values', this.formArray);

          this.agregarTokenCardForm(form);
        } else {
          this.message = response.error.message;
        }
      }
    );
  }

  agregarTokenCardForm(form) {
    const f = this.formArray;
    const tc = this.token;
    const amount = this.amount;

    this.formFinal.push({
      clienteId: this.user.id,
      domicilioId: 1,
      name: form.name,
      lastname: form.lastname,
      email: form.email,
      tokenCard: tc,
      amount: amount,
    });

    // for (let index = 0; index < f.length; index++) {
    //   this.formFinal.push({
    //     clienteId: this.user.id,
    //     domicilioId: 1,
    //     name: f[index].name,
    //     lastname: f[index].lastname,
    //     email: f[index].email,
    //     tokenCard: tc,
    //     amount: amount,
    //   });

    //   console.log('formFinal agregarTokenCard', this.formArray);
    // }

    // this.direcciones.push(this.valuesFormTransportadora , this.direcciones, this.formFinal);
    // console.log( "Direcine y tranpso" + this.direcciones);

    this.formFinal.push(
      this.valuesFormDireccione,
      this.valuesFormTransportadora,
      this.valuesArrayCompras
    );
    this.chargeMoney(this.formFinal);
    console.log('form final', this.formFinal);
    return this.formFinal;
  }

  chargeMoney(formFinal: any) {
    this.pagosService.chargeMoney(formFinal).subscribe(
      (data) => {
        this.sharedService.paymentCharge(data);
        this.sharedService.stepcompleted(true);
      },
      (error) => {
        console.log(error);
        alert('Querry faild');
      }
    );
  }
}
