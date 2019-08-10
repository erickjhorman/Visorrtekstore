import { Component, OnInit , HostListener ,Input} from '@angular/core';
import { PagoService } from '../../../../../services/pagos/pago.service';
import {environment} from '../../../../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component ({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  // @Input() amount: number;
  amount = 500;

  customStripeForm: FormGroup;
  submitted: any;
  formProcess:any;
  manejador: any;
  message:any;
  token: any;

  constructor(private pagosService: PagoService) {

    this.customStripeForm = new FormGroup({
      'cardNumber': new FormControl(),
      'expMonth': new FormControl(),
      'expYear': new FormControl(),
      'cvv': new FormControl(),
      'amount': new FormControl(),
       });

  }




  ngOnInit() {

    this.loadStripe();

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window['Stripe'].setPublishableKey('pk_test_l7iYANEOx13w718rnvfY7wed00HkXGcBvC');
      }

      window.document.body.appendChild(s);
    }
  }

// pay(amount) {

//   var handler = (<any>window).StripeCheckout.configure({
//     key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
//     locale: 'auto',
//     token: function (token: any) {
//       // You can access the token ID with `token.id`.
//       // Get the token ID to your server-side code for use.
//       console.log(token)
//       alert('Token Created!!');
//     }
//   });

//   handler.open({
//     name: 'Demo Site',
//     description: '2 widgets',
//     amount: amount * 100
//   });

// }

pay(form) {

  if(!window['Stripe']) {
    alert('Oops! Stripe did not initialize properly.');
    return;
  }

  this.submitted = true;

  console.log(this.customStripeForm);
  if (this.customStripeForm.invalid) {
    return;
  }

  this.formProcess = true;
  console.log("form");
  console.log(form);

  (<any>window).Stripe.card.createToken({
    number: form.cardNumber,
    exp_month: form.expMonth,
    exp_year: form.expYear,
    cvc: form.cvc,

  }, (status: number, response: any) => {


    this.submitted = false;
    this.formProcess = false;
    if (status === 200) {
      this.message = `Success! Card token ${response.card.id}.`;
      console.log("Toke generado" + this.message)
      this.token = response
      console.log("Token server " + this.token);

      this.chargeMoney(this.token)

    } else {
      this.message = response.error.message;
    }
    });

   }

   chargeMoney(token:any){
    this.pagosService.chargeMoney(token).subscribe(
        data => {
         console.log(data);
        }, (error) => {
        console.log(error);
         alert('Querry faild');
       });
      }

  }











