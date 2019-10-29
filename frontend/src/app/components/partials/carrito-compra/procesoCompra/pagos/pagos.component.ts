import { Component, OnInit, HostListener, Input } from "@angular/core";
import { PagoService } from "../../../../../services/pagos/pago.service";
import { environment } from "../../../../../../environments/environment";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { SharedService } from "../../../../../services/shared/shared.service";

@Component({
  selector: "app-pagos",
  templateUrl: "./pagos.component.html",
  styleUrls: ["./pagos.component.css"]
})
export class PagosComponent implements OnInit {
  valuesFormDireccione: any;
  valuesFormTransportadora: any;
  valuesArrayCompras: any;

  private user: any;
  formArray: any[] = [];
  formFinal: any[] = [];
  direcciones: any[] = [];
  transportadora: any[] = [];
  dataObjectPagoFinal: any[] = [];

  @Input() amount: number;

  customStripeForm: FormGroup;
  submitted: any;
  formProcess: any;
  manejador: any;
  message: any;
  token: any;

  months = [
    { id: "1", value: "01" },
    { id: "1", value: "02" },
    { id: "1", value: "03" },
    { id: "1", value: "04" },
    { id: "1", value: "05" },
    { id: "1", value: "06" },
    { id: "1", value: "07" },
    { id: "1", value: "08" },
    { id: "1", value: "09" },
    { id: "1", value: "10" },
    { id: "1", value: "11" },
    { id: "1", value: "12" }
  ];

  expYears = [
    { id: "20", value: "01" },
    { id: "21", value: "02" },
    { id: "22", value: "03" },
    { id: "23", value: "04" },
    { id: "24", value: "05" },
    { id: "25", value: "06" },
    { id: "26", value: "07" },
    { id: "27", value: "08" },
    { id: "28", value: "09" },
    { id: "29", value: "10" },
    { id: "30", value: "11" }
  ];

  constructor(
    private pagosService: PagoService,
    private sharedService: SharedService
  ) {
    this.customStripeForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(18)
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.maxLength(18)
      ]),
      cardNumber: new FormControl("", [
        Validators.required,
        Validators.maxLength(18)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      expMonth: new FormControl("", [Validators.required]),
      expYear: new FormControl("", [Validators.required]),
      cvv: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]),
      amount: new FormControl()
    });

    //To share the form in preceso compra componenet
    this.sharedService.formValues.subscribe(valuesForm => {
      this.valuesFormDireccione = valuesForm;
      console.log(this.valuesFormDireccione);
    });

    //To share the form in preceso compra componenet
    this.sharedService.formValuesTransportadora.subscribe(valuesForm => {
      this.valuesFormTransportadora = valuesForm;
      console.log(this.valuesFormTransportadora);
    });

    //To share the form in preceso compra componenet
    this.sharedService.arrayValuesCompras.subscribe(valuesArray => {
      this.valuesArrayCompras = valuesArray;
      console.log(this.valuesArrayCompras);
    });
  }

  ngOnInit() {
    this.loadStripe();

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user);
  }

  loadStripe() {
    if (!window.document.getElementById("stripe-custom-form-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_l7iYANEOx13w718rnvfY7wed00HkXGcBvC"
        );
      };

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
    if (!window["Stripe"]) {
      alert("Oops! Stripe did not initialize properly.");
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

    (<any>window).Stripe.card.createToken(
      {
        number: form.cardNumber,
        exp_month: form.expMonth,
        exp_year: form.expYear,
        cvc: form.cvc
      },
      (status: number, response: any) => {
        this.submitted = false;
        this.formProcess = false;
        if (status === 200) {
          this.message = `Success! Card token ${response.card.id}.`;
          console.log("Toke generado" + this.message);
          this.token = response.id;
          console.log("Token server " + this.token);

          this.formArray.push(form);
          console.log(this.formArray);

          this.agregarTokenCardForm();
          this.chargeMoney(this.formFinal);
        } else {
          this.message = response.error.message;
        }
      }
    );
  }

  agregarTokenCardForm() {
    const f = this.formArray;
    const tc = this.token;
    const amount = this.amount;
    console.log(amount);

    for (let index = 0; index < f.length; index++) {
      this.formFinal.push({
        clienteId: this.user.id,
        domicilioId: 1,
        name: f[index].name,
        lastname: f[index].lastname,
        email: f[index].email,
        tokenCard: tc,
        amount: amount
      });

      console.log(this.valuesArrayCompras);
      console.log(this.formFinal);
    }

    // this.direcciones.push(this.valuesFormTransportadora , this.direcciones, this.formFinal);
    // console.log( "Direcine y tranpso" + this.direcciones);

    this.dataObjectPagoFinal = ["Erick", "Javier"];

    this.formFinal.push(
      this.valuesFormDireccione,
      this.valuesFormTransportadora,
      this.valuesArrayCompras
    );

    //console.log(this.formFinal);
    return this.formFinal;
  }

  chargeMoney(formFinal: any) {
    this.pagosService.chargeMoney(formFinal).subscribe(
      data => {
        const charge = data;
      },
      error => {
        console.log(error);
        alert("Querry faild");
      }
    );
  }
}
